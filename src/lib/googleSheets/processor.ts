import {
	GoogleSpreadsheet,
	GoogleSpreadsheetWorksheet,
	WorksheetDimension,
} from 'google-spreadsheet'

import {
	IGoogleSheetsProcessor,
	ColumnWidth,
	GoogleSheetsCredentials,
} from '../types'

export default class GoogleSheetsProcessor implements IGoogleSheetsProcessor {
	private document!: GoogleSpreadsheet
	private sheet!: GoogleSpreadsheetWorksheet

	async createDocument(
		spreadsheetId: string,
		credentials: GoogleSheetsCredentials,
	): Promise<void> {
		// authenticating
		// TODO: consider other ways to authenticate
		this.document = new GoogleSpreadsheet(spreadsheetId)
		await this.document.useServiceAccountAuth({
			client_email: credentials.serviceAccountEmail,
			private_key: credentials.privateKey.split(String.raw`\n`).join('\n'),
		})

		// setting up spreadsheet
		await this.document.loadInfo()
		this.sheet = this.document.sheetsByIndex[0]
		await this.sheet.clear()
	}

	async getDocument(): Promise<GoogleSpreadsheet> {
		return this.document
	}

	async insertData(data: object[]): Promise<void> {
		// gsheets requires object inserted to be flat
		data = data.map(this.flattenObj)

		await this.sheet.addRows(data as any)
	}
	async setSheetName(sheetName: string): Promise<void> {
		await this.sheet.updateProperties({ title: sheetName })
	}

	async setHeader(keys: string[]): Promise<void> {
		await this.sheet.setHeaderRow(keys)
	}

	async setHeaderStyle(columnCount: number): Promise<void> {
		await this.updateSize(this.sheet, 'ROWS', 0, 25)
		const endColumn = String.fromCharCode('A'.charCodeAt(0) + --columnCount)
		await this.sheet.loadCells(`A1:${endColumn}1`)

		for (let x = 0; x < columnCount; x++) {
			const cell = this.sheet.getCell(0, x)
			cell.backgroundColor = { red: 0.96, green: 0.66, blue: 0.55, alpha: 0.65 }
			cell.textFormat = { bold: true }
			cell.horizontalAlignment = 'CENTER'
			cell.verticalAlignment = 'MIDDLE'
		}

		await this.sheet.saveUpdatedCells()
	}

	async setColumnWidth(columnWidth: ColumnWidth[]): Promise<void> {
		columnWidth = columnWidth.map((column) => {
			if (column.width <= 0) {
				column.width = 1
			}

			return column
		})

		for (const column of columnWidth) {
			await this.updateSize(
				this.sheet,
				'COLUMNS',
				column.index,
				Math.ceil(column.width * 7.5),
			)
		}
	}

	async shrink(x: number, y: number): Promise<void> {
		await this.sheet.resize({ rowCount: y + 1, columnCount: x })
	}

	private async updateSize(
		sheet: GoogleSpreadsheetWorksheet,
		dimension: WorksheetDimension,
		index: number,
		size: number,
	): Promise<void> {
		await sheet.updateDimensionProperties(
			dimension,
			{
				pixelSize: size,
				hiddenByFilter: false,
				hiddenByUser: false,
				developerMetadata: [],
			},
			{ startIndex: index, endIndex: index + 1 },
		)
	}

	private flattenObj(obj: any) {
		if (typeof obj === 'object') {
			for (const key in obj) {
				if (typeof obj[key] === 'object') {
					obj[key] = JSON.stringify(obj)
				}
			}
		}

		return obj
	}
}
