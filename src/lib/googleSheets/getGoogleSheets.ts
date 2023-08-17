import { GoogleSpreadsheet, GoogleSpreadsheetWorksheet, WorksheetDimension } from 'google-spreadsheet'

import { SettingsGoogleSheets } from '../types'

export default async function getGoogleSheets(data: object[], settings: SettingsGoogleSheets): Promise<void> {
	// authenticating
	// TODO: consider other ways to authenticate
	const doc = new GoogleSpreadsheet(settings.spreadsheetId)
	await doc.useServiceAccountAuth({
		client_email: settings.credentials.serviceAccountEmail,
		private_key: settings.credentials.privateKey,
	})

	// setting up spreadsheet
	await doc.loadInfo()
	const sheet = doc.sheetsByIndex[0]
	await sheet.clear()
	if (settings.sheetName) { 
		await sheet.updateProperties({ title: settings.sheetName }) 
	}

	// setting headers
	// TODO: make settings.setHeaders actually work
	const keys: string[] = Object.keys(data[0] as any)
	await sheet.setHeaderRow(keys)

	if (settings.setHeaders) {
		// setting headers styles
		if (settings.columnWidth) {
			for (let column of settings.columnWidth) {
				await updateSize(sheet, 'COLUMNS', column.index, column.width * 7.5 )
			}
		}
		await updateSize(sheet, 'ROWS', 0, 25 )
		const endColumn = String.fromCharCode('A'.charCodeAt(0) + --keys.length)
		await sheet.loadCells(`A1:${endColumn}1`)
		for (let x = 0; x < keys.length; x++) {
			const cell = sheet.getCell(0, x)
			cell.backgroundColor = { red: 0.96, green: 0.66, blue: 0.55, alpha: 0.65 }
			cell.textFormat = { bold: true }
			cell.horizontalAlignment = 'CENTER'
			cell.verticalAlignment = 'MIDDLE'
		}
		await sheet.saveUpdatedCells()
	}

	// shrink spreadsheet size to data fields
	if (settings.shrink) {
		await sheet.resize({ rowCount: data.length + 1, columnCount: keys.length })
	}

	// writing data
	await sheet.addRows(data as any)
}


async function updateSize(sheet: GoogleSpreadsheetWorksheet, dimension: WorksheetDimension,
						index: number, size: number): Promise<void> {
	await sheet.updateDimensionProperties(dimension, {
		pixelSize: size,
		hiddenByFilter: false,
		hiddenByUser: false,
		developerMetadata: []
	}, { startIndex: index, endIndex: index + 1 })
}
