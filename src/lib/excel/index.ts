import { ExportSettings } from '../types'
import getExcel from './getExcel'

export async function getExcelFile(data: object[], settings?: ExportSettings): Promise<void> {
	const doc = await getExcel(data, settings)

	// writing file
	await doc.toFileAsync(settings?.fileName ? settings?.fileName : 'output.xlsx')
}

// TODO: add export settings perhaps?
// https://www.npmjs.com/package/xlsx-populate#Workbook+outputAsync
export async function getExcelBuffer(data: object[], settings?: ExportSettings): Promise<Buffer> {
	const doc = await getExcel(data, settings)

	// writing file
	return await doc.outputAsync('nodebuffer')
}
