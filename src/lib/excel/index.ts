import { SettingsExcelFile, SheetType, OutputClosure } from '../types'
import DocumentFactory from '../common/documentFactory'

// TODO: add other output types
// https://www.npmjs.com/package/xlsx-populate#Workbook+outputAsync
const getExcel: OutputClosure<SheetType.Excel> = async (data, settings?) => {
	const castedSettings = settings as SettingsExcelFile
	const factory = new DocumentFactory(SheetType.Excel, castedSettings)
	const doc = await factory.create(data)


	/**
	 * Writes an .xlsx file.
	 * @remarks only available in local environments
	 * @return {Promise<void>} promise that resolves upon completion
	 */
	async function getFile(fileName: string): Promise<void> {
		await doc.toFileAsync(fileName ? fileName : 'output.xlsx')
	}

	/**
	 * Gets an Excel document buffer.
	 * @return {Promise<Buffer>} document buffer
	 */
	async function getBuffer(): Promise<Buffer> {
		return await doc.outputAsync('nodebuffer') as Buffer
	}


	return {
		file: getFile,
		buffer: getBuffer,
	}
}

export default getExcel
