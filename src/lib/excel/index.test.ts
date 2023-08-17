/// <reference path="../../index.d.ts"/>

import { unlink } from 'node:fs'
import { describe, expect, test, afterAll } from '@jest/globals'
import xlsx, { Sheet } from 'xlsx-populate'

import { getExcelFile, getExcelBuffer } from '.'

describe('writing Excel spreadsheet module', () => {
	const fileName = 'test-output.xlsx'
	const sheetName = 'test sheet'

	afterAll(() => {
		unlink('./' + fileName, () => {})
		unlink('./output.xlsx', () => {})
	})

	test('should get an Excel file', async () => {
		await getExcelFile([{}], {
			fileName,
			sheetName,
		})

		const doc = await xlsx.fromFileAsync(fileName)
		const sheet = doc.sheet(0) as Sheet

		expect(sheet.name()).toBe(sheetName)
	})

	test('should get an Excel file with no fileName field', async () => {
		await getExcelFile([{}], {
			sheetName,
		})

		const doc = await xlsx.fromFileAsync('output.xlsx')
		const sheet = doc.sheet(0) as Sheet

		expect(sheet.name()).toBe(sheetName)
	})

	test('should get an Excel file with default settings', async () => {
		await getExcelFile([{}])

		const doc = await xlsx.fromFileAsync('output.xlsx')
		const sheet = doc.sheet(0) as Sheet

		expect(sheet.name()).toBe('Sheet1')
	})

	test('should get an Excel data buffer', async () => {
		const buffer = await getExcelBuffer([{}], {
			fileName,
			sheetName,
		})

		const doc = await xlsx.fromDataAsync(buffer)
		const sheet = doc.sheet(0) as Sheet

		expect(sheet.name()).toBe(sheetName)
	})
})