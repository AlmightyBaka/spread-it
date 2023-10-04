import xlsx, { Sheet, Workbook } from 'xlsx-populate'

import { IExcelProcessor, ColumnWidth } from '../types'

export default class ExcelProcessor implements IExcelProcessor {
	private document!: Workbook
	private sheet!: Sheet
	private isReady: boolean = false
	private hasHeaders: boolean = false

	async ready(): Promise<void> {
		if (this.isReady) return

		// TODO: look into using xlsx.fromDataAsync
		this.document = await xlsx.fromBlankAsync()
		// supressing "possibly 'undefined'" error
		// as there is guaranteed to be at least 1 sheet in an excel spreadsheet
		this.sheet = this.document.sheet(0) as Sheet

		this.isReady = true
	}

	async getDocument(): Promise<Workbook> {
		await this.ready()

		return this.document
	}

	async insertData(data: object[]): Promise<void> {
		await this.ready()

		const rowIndent = this.hasHeaders ? 1 : 0

		data.forEach((obj: Record<string, any>, y) => {
			const keys = Object.keys(obj)

			keys.forEach((key, x) => {
				const value = obj[key]
				const valueString = typeof value === "object" ? JSON.stringify(value) : String(value)

				this.setCell(x, y + rowIndent, valueString)
			})
		})
	}

	async setSheetName(sheetName: string): Promise<void> {
		await this.ready()

		this.sheet.name(sheetName)
	}

	async setHeader(keys: string[]): Promise<void> {
		await this.ready()

		this.hasHeaders = true

		keys.forEach((key, x) => {
			this.setCell(x, 0, key)
		})
	}

	async setHeaderStyle(): Promise<void> {
		await this.ready()
	
		if (!this.hasHeaders) return

		this.sheet.row(1).height(25)
		this.sheet.row(1).style({
			bold: true,
			horizontalAlignment: 'center',
			verticalAlignment: 'center',
			fill: {
				type: 'solid',
				color: {
					rgb: 'F8A98E'
				}
			}
		})
	}
	
	async setColumnWidth(columnWidth: ColumnWidth[]): Promise<void> {
		await this.ready()
		
		for (let column of columnWidth) {
			this.sheet.column(column.index + 1).width(column.width)
		}
	}

	private setCell(x: number, y: number, value: string): void {
		this.sheet.cell(y + 1, x + 1).value(value)
	}
}
