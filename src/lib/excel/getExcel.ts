import xlsx from 'xlsx-populate'

import { Settings } from '../types'

export default async function getExcel(data: object[], settings?: Settings): Promise<any> {
	// setting up spreadsheet file
	// TODO: look into using xlsx.fromDataAsync
	const doc = await xlsx.fromBlankAsync()
	const sheet = doc.sheet(0)
	if (settings?.sheetName) {
		sheet.name(settings?.sheetName)
	}

	// setting headers
	if (settings?.setHeaders) {
		iterateObjKeys(data[0], (x, key) => {
			sheet.cell(1, x + 1).value(key)
		})
	
		// setting headers styles
		if (settings?.columnWidth) {
			for (let column of settings?.columnWidth) {
				sheet.column(column.index + 1).width(column.width)
			}
		}
		sheet.row(1).height(25)
		sheet.row(1).style({
			bold: true,
			horizontalAlignment: 'center',
			verticalAlignment: 'center',
			fill: {
				type: 'solid',
				color: {
					rgb: 'F8A98E'
				}
			}
		})
	}

	// writing data
	const rowIndent = getRowIndent(settings?.setHeaders)
	iterateArrObj(data, (x, y, value) => {
		sheet.cell(y + rowIndent, x + 1).value(value)
		if (x + 1 === 7) { 
			sheet.cell(y + rowIndent, x + 1).hyperlink(value)
		}
	})

	return doc
}

function iterateObjKeys(obj: any, callback: (index: number, key: string) => void): void {
	let index = 0
	for (let key in obj) {
		callback(index, key)
		index++
	}
}

type iterateArrObjCb<T> = (x: number, y: number, value: T[keyof T]) => void
function iterateArrObj<T>(data: T[], callback: iterateArrObjCb<T>): void {
	data.forEach((obj, y) => {
		let x = 0
		for (let key in obj) {
			callback(x, y, obj[key])
			x++
		}
	})
}

function getRowIndent(hasHeaders?: boolean): number {
	return hasHeaders ? 2 : 1
}
