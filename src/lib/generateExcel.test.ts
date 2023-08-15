import { unlink } from 'node:fs'
import { describe, expect, test, afterAll } from '@jest/globals'
import xlsx from 'xlsx-populate'
import generateExcel from './generateExcel.js'

describe('writing Excel spreadsheet module', () => {
	type TestObj = { testColumn: string, testBool: boolean, testNumber?: number, a?: string, b?: string, c?: string, d?: string, }
	const testObj: TestObj = { testColumn: 'testString', testBool: true, testNumber: 0, a: '0', b: '1', c: '2', d: '3' }
	const testObjIncomplete: TestObj = { testColumn: 'testString2', testBool: false }
	const testObjKeys = Object.keys(testObj)
	const data = [ testObj, testObjIncomplete ]
	const fileName = 'test-output.xlsx'
	const sheetName = 'test sheet'

	afterAll(() => {
		unlink('./' + fileName, () => {})
	})

	test('should format and write data to file', async () => {
		await generateExcel(data, {
			fileName,
			sheetName,
			setHeaders: true,
			columnWidth: [{index: 0, width: 10}]
		})

		const doc = await xlsx.fromFileAsync(fileName)
		const sheet = doc.sheet(0)

		expect(sheet.name()).toBe(sheetName)
		expect(sheet.usedRange().address()).toBe('A1:G3')
		expect(sheet.row(1).cell(1).value()).toBe(testObjKeys[0])
		expect(sheet.row(1).cell(2).value()).toBe(testObjKeys[1])
		expect(sheet.row(1).cell(3).value()).toBe(testObjKeys[2])
		expect(sheet.row(2).cell(1).value()).toBe(testObj.testColumn)
		expect(sheet.row(2).cell(2).value()).toBe(testObj.testBool)
		expect(sheet.row(2).cell(3).value()).toBe(testObj.testNumber)
		expect(sheet.row(3).cell(3).value()).toBe(testObjIncomplete.testNumber)
	})
})