import { SettingsGoogleSheets, CredentialsError } from '../types'
import uploadGoogleSheets from './getGoogleSheets'

/**
 * Writes a Google Sheets document.
 * @param {object[]} data data to be inserted
 * @param {SettingsGoogleSheets} [settings] document settings
 * @throws {CredentialsError} thrown if no credentials or spreadsheet ID is provided
 * @return {Promise<void>} promise that resolves upon completion
 */
export async function getGoogleSheets(data: object[], settings: SettingsGoogleSheets): Promise<void> {
	checkCredentials(settings)

	await uploadGoogleSheets(data, settings)
}

function checkCredentials(settings: SettingsGoogleSheets) {
	function isNonEmptyString(val: any): boolean {
		return typeof val === 'string' && val.length > 0
	}

	if (!isNonEmptyString(settings.spreadsheetId) ||
		!isNonEmptyString(settings.credentials.serviceAccountEmail) ||
		!isNonEmptyString(settings.credentials.privateKey)) {
		throw new CredentialsError('Google Sheets credentials must be provided')
	}
}
