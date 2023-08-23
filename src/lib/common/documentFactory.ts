import { Settings, DefaultSettings, IDocumentProcessor } from '../types'
import defaultSettings from './defaultSettings'

export default class DocumentFactory<Document> {
	private readonly processor: IDocumentProcessor<Document>
	private readonly settings: DefaultSettings
	
	constructor(processor: IDocumentProcessor<Document>, settings?: Settings) {
		this.processor = processor
		this.settings = { ...defaultSettings, ...settings }
	}

	public async create(data: Object[]): Promise<Document> {
		await this.processor.ready(this.settings)
		
		if (this.settings.sheetName) {
			await this.processor.setSheetName(this.settings.sheetName)
		}

		if (this.settings.setHeader) {
			await this.processor.setHeader(Object.keys(data[0]))
			await this.processor.setHeaderStyle()

			if (this.settings.columnWidth && this.settings.columnWidth.length > 0) {
				await this.processor.setColumnWidth(this.settings.columnWidth)
			}
		}

		if (this.settings.shrink) {
			await this.processor.shrink()
		}
		
		await this.processor.insertData(data)

		return await this.processor.getDocument(this.settings)
	}
}
