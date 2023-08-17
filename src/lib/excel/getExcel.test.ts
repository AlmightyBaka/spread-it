import { describe, expect, test } from '@jest/globals'
import { Workbook, Sheet } from 'xlsx-populate'

import getExcelDocument from './getExcel'

describe('writing Excel spreadsheet module', () => {
	type TestObj = { testColumn: string, testBool: boolean, testNumber?: number, a?: string, b?: string, c?: string, d?: string, }
	const testObj: TestObj = { testColumn: 'testString', testBool: true, testNumber: 0, a: '0', b: '1', c: '2', d: '3' }
	const testObjIncomplete: TestObj = { testColumn: 'testString2', testBool: false }
	const testObjKeys = Object.keys(testObj)
	const data = [ testObj, testObjIncomplete ]
	const sheetName = 'test sheet'

	test('should get an Excel document with default settings', async () => {
		const doc = await getExcelDocument(data)
		const sheet = doc.sheet(0) as Sheet

		expect(doc.sheets().length).toBe(1)
		expect(sheet.name()).toBe('Sheet1')
		expect(sheet.usedRange()?.address()).toBe('A1:G2')
		expect(sheet.row(1).cell(1).value()).toBe(testObj.testColumn)
		expect(sheet.row(1).cell(2).value()).toBe(testObj.testBool)
		expect(sheet.row(1).cell(3).value()).toBe(testObj.testNumber)
		expect(sheet.row(2).cell(3).value()).toBe(testObjIncomplete.testNumber)
		expect(sheet.row(3).cell(1).value()).toBeUndefined()
	})

	test('should get an Excel document with headers and set sheet name', async () => {
		const doc: Workbook = await getExcelDocument(data, {
			sheetName,
			setHeaders: true,
			columnWidth: [{index: 0, width: 10}, {index: 2, width: -1}]
		})
		const sheet: Sheet = doc.sheet(0) as Sheet

		expect(sheet.name()).toBe(sheetName)
		expect(sheet.usedRange()?.address()).toBe('A1:G3')
		expect(sheet.row(1).cell(1).value()).toBe(testObjKeys[0])
		expect(sheet.row(1).cell(2).value()).toBe(testObjKeys[1])
		expect(sheet.row(1).cell(3).value()).toBe(testObjKeys[2])
		expect(sheet.row(2).cell(1).value()).toBe(testObj.testColumn)
		expect(sheet.row(3).cell(3).value()).toBe(testObjIncomplete.testNumber)
		expect(sheet.column(1).width()).toBe(10)
		expect(sheet.column(2).width()).toBeUndefined()
		expect(sheet.column(3).width()).toBe(-1)
	})

	test('should get an Excel document with default column widths', async () => {
		const doc = await getExcelDocument(data, {
			setHeaders: true,
			columnWidth: []
		})
		const sheet = doc.sheet(0) as Sheet

		expect(sheet.usedRange()?.address()).toBe('A1:G3')
		expect(sheet.column(1).width()).toBeUndefined()
	})
})