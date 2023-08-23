import { SettingsExcelFile, SettingsExcel } from '../types'
import DocumentFactory from '../common/documentFactory'
import ExcelProcessor from './processor'

export async function getExcelFile(data: object[], settings?: SettingsExcelFile): Promise<void> {
	const factory = new DocumentFactory(new ExcelProcessor(), settings)
	const doc = await factory.create(data)

	await doc.toFileAsync(settings?.fileName ? settings.fileName : 'output.xlsx')
}

// TODO: add other output types
// https://www.npmjs.com/package/xlsx-populate#Workbook+outputAsync
export async function getExcelBuffer(data: object[], settings?: SettingsExcel): Promise<Buffer> {
	const factory = new DocumentFactory(new ExcelProcessor(), settings)
	const doc = await factory.create(data)

	return await doc.outputAsync('nodebuffer') as Buffer
}
