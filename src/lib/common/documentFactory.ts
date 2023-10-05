import { Workbook } from 'xlsx-populate'
import { GoogleSpreadsheet } from 'google-spreadsheet'

import { SheetType, IDocumentProcessor, SettingsExcel, SettingsExcelFile, SettingsGoogleSheets, SettingsCsv, SettingsCsvFile } from '../types'
import defaultSettings from './defaultSettings'
import ExcelProcessor from '../excel/processor'
import GoogleSheetsProcessor from '../googleSheets/processor'

type DocumentType<T> = 
    T extends SheetType.Csv ? undefined :
    T extends SheetType.Excel ? Workbook :
    T extends SheetType.GoogleSheets ? GoogleSpreadsheet :
    never

type SettingsType<T> = 
    T extends SheetType.Csv ? SettingsCsv | SettingsCsvFile :
    T extends SheetType.Excel ? SettingsExcel | SettingsExcelFile :
    T extends SheetType.GoogleSheets ? SettingsGoogleSheets :
    never


export default class DocumentFactory<Document extends SheetType> {
	private readonly type: SheetType
	private readonly processor: IDocumentProcessor<Workbook | GoogleSpreadsheet>
	private readonly settings: SettingsType<Document>
	
	constructor(type: Document, settings?: SettingsType<Document>) {
		switch (type) {
			case SheetType.Csv:
				throw new Error('Not implemented yet')
				// this.processor = new CsvProcessor()
				break
			case SheetType.Excel:
				this.processor = new ExcelProcessor()
				break
			case SheetType.GoogleSheets:
				this.processor = new GoogleSheetsProcessor()
				break
			default:
				throw new Error('Document type must be declared')
		}
		this.type = type
		this.settings = { ...defaultSettings, ...settings } as any // ???
	}

	public async create(data: Object[]): Promise<DocumentType<Document>> {
		switch (this.type) {
			case SheetType.Csv:
				throw new Error('Not implemented yet')
				// return await this.createCsv(data) as DocumentType<Document>
			case SheetType.Excel:
				return await this.createExcel(data) as DocumentType<Document>
			case SheetType.GoogleSheets:
				return await this.createGoogleSpreadsheet(data) as DocumentType<Document>
			default:
				throw new Error('Document type must be declared')
		}
	}

	private async createExcel(data: Object[]): Promise<Workbook> {
		const processor = this.processor as ExcelProcessor
		const settings = this.settings as SettingsExcel
		
		if (settings.sheetName) {
			await processor.setSheetName(settings.sheetName)
		}

		if (settings.setHeader) {
			await processor.setHeader(Object.keys(data[0]))
			await processor.setHeaderStyle()

			if (settings.columnWidth && settings.columnWidth.length > 0) {
				await processor.setColumnWidth(settings.columnWidth)
			}
		}

		await processor.insertData(data)

		return await processor.getDocument() as Workbook
	}

	private async createGoogleSpreadsheet(data: Object[]): Promise<GoogleSpreadsheet> {
		const processor = this.processor as GoogleSheetsProcessor
		const settings = this.settings as SettingsGoogleSheets
		const keys = Object.keys(data[0])

		await processor.createDocument(settings.spreadsheetId, settings.credentials)
		await processor.setHeader(keys)
		await processor.insertData(data)

		if (settings.sheetName) {
			await processor.setSheetName(settings.sheetName)
		}

		if (settings.setHeader) {
			await processor.setHeaderStyle(keys.length)

			if (settings.columnWidth && settings.columnWidth.length > 0) {
				await processor.setColumnWidth(settings.columnWidth)
			}
		}
		
		return await this.processor.getDocument() as GoogleSpreadsheet
	}
}
