import { Settings } from '../types'
import getExcel from './getExcel'

export async function getExcelFile(data: object[], settings?: Settings): Promise<void> {
	const doc = await getExcel(data, settings)

	await doc.toFileAsync(settings?.fileName ? settings?.fileName : 'output.xlsx')
}

// TODO: add export settings perhaps?
// https://www.npmjs.com/package/xlsx-populate#Workbook+outputAsync
export async function getExcelBuffer(data: object[], settings?: Settings): Promise<Buffer> {
	const doc = await getExcel(data, settings)

	return await doc.outputAsync('nodebuffer') as Buffer
}
