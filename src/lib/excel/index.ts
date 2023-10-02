import { SettingsExcelFile, SettingsExcel, SheetType } from '../types'
import DocumentFactory from '../common/documentFactory'

// TODO: export as getExcel().file(), getExcel().buffer(), etc

/**
 * Writes an .xlsx file.
 * @remarks only available in local environments
 * @param {object[]} data data to be inserted
 * @param {SettingsExcelFile} [settings] document settings
 * @return {Promise<void>} promise that resolves upon completion
 */
export async function getExcelFile(data: object[], settings?: SettingsExcelFile): Promise<void> {
	const factory = new DocumentFactory(SheetType.Excel, settings)
	const doc = await factory.create(data)

	await doc.toFileAsync(settings?.fileName ? settings.fileName : 'output.xlsx')
}

// TODO: add other output types
// https://www.npmjs.com/package/xlsx-populate#Workbook+outputAsync
/**
 * Gets an Excel document buffer.
 * @param {object[]} data data to be inserted
 * @param {SettingsExcel} [settings] document settings
 * @return {Promise<Buffer>} document buffer
 */
export async function getExcelBuffer(data: object[], settings?: SettingsExcel): Promise<Buffer> {
	const factory = new DocumentFactory(SheetType.Excel, settings)
	const doc = await factory.create(data)

	return await doc.outputAsync('nodebuffer') as Buffer
}
