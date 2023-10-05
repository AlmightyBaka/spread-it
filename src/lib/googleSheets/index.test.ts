import { describe, expect, test } from '@jest/globals'

import { getGoogleSheets } from '.'

describe('writing Google Sheets document module', () => {
	test.skip('should construct an document', async () => {
		await expect(getGoogleSheets([{}], {
			credentials: {
				privateKey: '',
				serviceAccountEmail: '',
			},
			spreadsheetId: '',
		})).resolves.toBeUndefined()
	})

	test('should throw an CredentialsError exception', async () => {
		await expect(getGoogleSheets([{}], {
			credentials: {
				privateKey: '',
				serviceAccountEmail: '',
			},
			spreadsheetId: '123',
		})).rejects.toThrow('Google Sheets credentials must be provided')
	})

	test('should throw an CredentialsError exception', async () => {
		await expect(getGoogleSheets([{}], {
			credentials: {
				privateKey: '123',
				serviceAccountEmail: '123',
			},
			spreadsheetId: '',
		})).rejects.toThrow('Google Sheets spreadsheet id must be provided')
	})
})