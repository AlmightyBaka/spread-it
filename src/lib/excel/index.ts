import { ExportSettings } from '../types'
import getDoc from './getExcel'

export async function getFileExcel(data: object[], settings?: ExportSettings): Promise<void> {
	const doc = await getDoc(data, settings)

	// writing file
	await doc.toFileAsync(settings?.fileName ? settings?.fileName : 'output.xlsx')
}

// TODO: add export settings perhaps?
// https://www.npmjs.com/package/xlsx-populate#Workbook+outputAsync
export async function getBufferExcel(data: object[], settings?: ExportSettings): Promise<Buffer> {
	const doc = await getDoc(data, settings)

	// writing file
	return await doc.outputAsync('nodebuffer')
}
