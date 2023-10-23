import { describe, expect, test } from '@jest/globals'

import getGoogleSheets from '.'

describe('writing Google Sheets document module', () => {
	test.skip('should construct an document', async () => {
		const gsheets = await getGoogleSheets([{ data: '' }], {
			shrink: true,
			credentials: {
				privateKey: process.env.GS_PRIVATE_KEY || '123',
				serviceAccountEmail: process.env.GS_EMAIL || '123',
			},
			spreadsheetId: process.env.GS_ID || '123',
		})
		await gsheets.upload()

		await expect(true).toBeTruthy()
	})

	test('should construct a closure', async () => {
		const gsClosure = await getGoogleSheets([{}], {
			credentials: {
				privateKey: '123',
				serviceAccountEmail: '123',
			},
			spreadsheetId: '123',
		})

		expect(gsClosure).toHaveProperty('upload')
	})

	test('should throw an CredentialsError exception', async () => {
		await expect(
			getGoogleSheets([{}], {
				credentials: {
					privateKey: '',
					serviceAccountEmail: '',
				},
				spreadsheetId: '123',
			}),
		).rejects.toThrow('Google Sheets credentials must be provided')
	})

	test('should throw an CredentialsError exception', async () => {
		await expect(
			getGoogleSheets([{}], {
				credentials: {
					privateKey: '123',
					serviceAccountEmail: '123',
				},
				spreadsheetId: '',
			}),
		).rejects.toThrow('Google Sheets spreadsheet id must be provided')
	})
})
