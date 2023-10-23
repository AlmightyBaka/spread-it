/// <reference path="../../index.d.ts"/>

import { unlink } from 'node:fs'
import { describe, expect, test, afterAll } from '@jest/globals'
import xlsx, { Sheet } from 'xlsx-populate'

import getExcel from '.'

describe('writing Excel document module', () => {
	const fileName = 'test-output.xlsx'
	const sheetName = 'test sheet'

	afterAll(() => {
		unlink('./' + fileName, () => {})
		unlink('./output.xlsx', () => {})
	})

	test('should write a file', async () => {
		const excel = await getExcel([{}], { sheetName })
		await excel.file(fileName)

		const doc = await xlsx.fromFileAsync(fileName)
		expect(doc).toBeDefined()

		const sheet = doc.sheet(0) as Sheet
		expect(sheet.name()).toBe(sheetName)
	})

	test('should write a file with default settings', async () => {
		const excel = await getExcel([{}])
		await excel.file(fileName)

		const doc = await xlsx.fromFileAsync(fileName)
		expect(doc).toBeDefined()
		
		const sheet = doc.sheet(0) as Sheet
		expect(sheet.name()).toBe('Data')
	})

	test('should get a data buffer', async () => {
		const excel = await getExcel([{}])
		const buffer = await excel.buffer()

		const doc = await xlsx.fromDataAsync(buffer)
		expect(doc).toBeDefined()
		
		const sheet = doc.sheet(0) as Sheet
		expect(sheet.name()).toBe('Data')
	})
})