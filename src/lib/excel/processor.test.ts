/// <reference path="../../index.d.ts"/>

import { describe, expect, test } from '@jest/globals'
import { Sheet } from 'xlsx-populate'

import Processor from './processor'
import { ColumnWidth } from '../types'

describe('creating Excel document module', () => {
	type TestObj = { testString: string, testBool: boolean, testNumber?: number, a?: any, b?: string, c?: string, d?: string, }
	const testObj: TestObj = { testString: 'just a test string', testBool: true, testNumber: 0, a: '0', b: '1', c: '2', d: '3' }
	const testObjNested = { nested: true }
	const testObjIncomplete: TestObj = { testString: 'testString2', testBool: false, a: testObjNested }
	const testObjKeys = Object.keys(testObj)
	const data = [ testObj, testObjIncomplete ]
	const columnWidths: ColumnWidth[] = [{ index: 0, width: 10 }, { index: 2, width: -1 }]
	const sheetName = 'test sheet'

	test('should create an empty document', async () => {
		const processor = new Processor()
		const doc = await processor.getDocument()
		expect(doc).toBeDefined()

		const sheet = doc.sheet(0) as Sheet
		expect(sheet).toBeDefined()
		expect(sheet.usedRange()).toBeUndefined()
	})

	test('should insert data', async () => {
		const processor = new Processor()
		await processor.insertData(data)

		const doc = await processor.getDocument()
		expect(doc).toBeDefined()
		
		const sheet = doc.sheet(0) as Sheet
		expect(sheet).toBeDefined()

		expect(sheet.usedRange()?.address()).toBe('A1:G2')
		expect(sheet.row(1).cell(1).value()).toBe(String(testObj.testString))
		expect(sheet.row(1).cell(2).value()).toBe(String(testObj.testBool))
		expect(sheet.row(1).cell(3).value()).toBe(String(testObj.testNumber))
		expect(sheet.row(2).cell(3).value()).toBe(JSON.stringify(testObjIncomplete.a))
		expect(sheet.row(3).cell(1).value()).toBeUndefined()
	})

	test('should set sheet name', async () => {
		const processor = new Processor()
		await processor.setSheetName(sheetName)

		const doc = await processor.getDocument()
		expect(doc).toBeDefined()
		
		const sheet = doc.sheet(0) as Sheet
		expect(sheet).toBeDefined()
		expect(sheet.name()).toBe(sheetName)
	})

	test('should set header', async () => {
		const processor = new Processor()
		await processor.setHeader(Object.keys(data[0]))
		await processor.insertData(data)

		const doc = await processor.getDocument()
		expect(doc).toBeDefined()
		
		const sheet = doc.sheet(0) as Sheet
		expect(sheet).toBeDefined()

		expect(sheet.usedRange()?.address()).toBe('A1:G3')
		testObjKeys.forEach((key, x) => {
			expect(sheet.row(1).cell(x + 1).value()).toBe(key)
		})
		expect(sheet.row(2).cell(1).value()).toBe(testObj.testString)
		expect(sheet.row(3).cell(3).value()).toBe(JSON.stringify(testObjIncomplete.a))
	})

	test('should not set header styles if header is not set', async () => {
		const processor = new Processor()
		await processor.setHeaderStyle()

		const doc = await processor.getDocument()
		expect(doc).toBeDefined()
		
		const sheet = doc.sheet(0) as Sheet
		expect(sheet).toBeDefined()

		expect(sheet.row(1).height()).toBeUndefined()
		expect(sheet.row(1).style('bold')).toBe(false)
	})

	test('should set header styles', async () => {
		const processor = new Processor()
		await processor.setHeader([])
		await processor.setHeaderStyle()

		const doc = await processor.getDocument()
		expect(doc).toBeDefined()
		
		const sheet = doc.sheet(0) as Sheet
		expect(sheet).toBeDefined()

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
	})

	test('should set column width', async () => {
		const processor = new Processor()
		await processor.setColumnWidth(columnWidths)

		const doc = await processor.getDocument()
		expect(doc).toBeDefined()
		
		const sheet = doc.sheet(0) as Sheet
		expect(sheet).toBeDefined()

		columnWidths.forEach((columnWidth) => {
			expect(sheet.column(columnWidth.index + 1).width()).toBe(columnWidth.width)
		})
		expect(sheet.column(2).width()).toBeUndefined()
	})
})
