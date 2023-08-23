/// <reference path="../../index.d.ts"/>

import { describe, expect, test } from '@jest/globals'
import { Sheet } from 'xlsx-populate'

import DocumentFactory from './documentFactory'
import ExcelProcessor from '../excel/processor'
import { ColumnWidth, DefaultSettings } from '../types'

describe('Document factory module', () => {
	type TestObj = { testString: string, testBool: boolean, testNumber?: number, a?: any, b?: string, c?: string, d?: string, }
	const testObj: TestObj = { testString: 'just a test string', testBool: true, testNumber: 0, a: '0', b: '1', c: '2', d: '3' }
	const testObjNested = { nested: true }
	const testObjIncomplete: TestObj = { testString: 'testString2', testBool: false, a: testObjNested }
	const testObjKeys = Object.keys(testObj)
	const data = [ testObj, testObjIncomplete ]
	const sheetName = 'test sheet'
	const columnWidth: ColumnWidth[] = [{ index: 0, width: 10 }, { index: 2, width: -1 }]
	const settings: DefaultSettings = {
		sheetName,
		setHeader: true,
		setHeaderStyle: true,
		shrink: true,
		columnWidth,
	}

	test('should construct an Excel document', async () => {
		const factory = new DocumentFactory(new ExcelProcessor(), settings)
		const doc = await factory.create(data)
		expect(doc).toBeDefined()

		const sheet = doc.sheet(0) as Sheet
		expect(sheet).toBeDefined()
		expect(sheet.name()).toBe(sheetName)

		expect(sheet.usedRange()?.address()).toBe('A1:G3')

		testObjKeys.forEach((key, x) => {
			expect(sheet.row(1).cell(x + 1).value()).toBe(key)
		})

		expect(sheet.row(2).cell(1).value()).toBe(String(testObj.testString))
		expect(sheet.row(2).cell(2).value()).toBe(String(testObj.testBool))
		expect(sheet.row(2).cell(3).value()).toBe(String(testObj.testNumber))
		expect(sheet.row(3).cell(3).value()).toBe(JSON.stringify(testObjIncomplete.a))
		expect(sheet.row(4).cell(1).value()).toBeUndefined()

		expect(sheet.row(1).height()).toBe(25)
		expect(sheet.row(1).style(['bold', 'horizontalAlignment', 'verticalAlignment', 'fill']))
		.toStrictEqual({
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

		columnWidth.forEach((columnWidth) => {
			expect(sheet.column(columnWidth.index + 1).width()).toBe(columnWidth.width)
		})
		expect(sheet.column(2).width()).toBeUndefined()
	})
})
