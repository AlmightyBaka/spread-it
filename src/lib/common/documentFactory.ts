import { Workbook } from 'xlsx-populate'
import { GoogleSpreadsheet } from 'google-spreadsheet'

import ExcelProcessor from '../excel/processor'
import { SheetType, Settings, DefaultSettings, IDocumentProcessor } from '../types'
import defaultSettings from './defaultSettings'

type DocumentType<T> = 
    T extends SheetType.Excel ? Workbook :
    T extends SheetType.GoogleSheets ? GoogleSpreadsheet :
    never

export default class DocumentFactory<Document extends SheetType> {
	private readonly type: SheetType
	private readonly processor: IDocumentProcessor<Workbook | GoogleSpreadsheet>
	private readonly settings: DefaultSettings
	
	constructor(type: Document, settings?: Settings) {
		switch (type) {
			case SheetType.Csv:
				throw new Error('Not implemented yet')
				// this.processor = new CsvProcessor()
				break
			case SheetType.Excel:
				this.processor = new ExcelProcessor()
				break
			case SheetType.GoogleSheets:
				throw new Error('Not implemented yet')
				// this.processor = new GoogleSheetsProcessor()
				break
			default:
				throw new Error('Document type must be declared')
		}
		this.type = type
		this.settings = { ...defaultSettings, ...settings }
	}

	public async create(data: Object[]): Promise<DocumentType<Document>> {
		switch (this.type) {
			case SheetType.Csv:
				throw new Error('Not implemented yet')
				// return await this.createCsv(data) as DocumentType<Document>
			case SheetType.Excel:
				return await this.createExcel(data) as DocumentType<Document>
			case SheetType.GoogleSheets:
				throw new Error('Not implemented yet')
				// return await this.createGoogleSpreadsheet(data) as DocumentType<Document>
			default:
				throw new Error('Document type must be declared')
		}
	}

	private async createExcel(data: Object[]): Promise<Workbook> {
		const processor = this.processor as ExcelProcessor
		
		if (this.settings.sheetName) {
			await processor.setSheetName(this.settings.sheetName)
		}

		if (this.settings.setHeader) {
			await processor.setHeader(Object.keys(data[0]))
			await processor.setHeaderStyle()

			if (this.settings.columnWidth && this.settings.columnWidth.length > 0) {
				await processor.setColumnWidth(this.settings.columnWidth)
			}
		}

		await processor.insertData(data)

		return await processor.getDocument() as Workbook
	}

	private async createGoogleSpreadsheet(data: Object[]): Promise<GoogleSpreadsheet> {
		return await this.processor.getDocument(this.settings) as GoogleSpreadsheet
	}
}
