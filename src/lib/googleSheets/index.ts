import { SettingsGoogleSheets, CredentialsError } from '../types'
import uploadGoogleSheets from './getGoogleSheets'

export async function getGoogleSheets(data: object[], settings: SettingsGoogleSheets): Promise<void> {
	// checking for credentials
	if (!isNonEmptyString(settings.spreadsheetId) ||
		!isNonEmptyString(settings.credentials.serviceAccountEmail) ||
		!isNonEmptyString(settings.credentials.privateKey)) {
			throw new CredentialsError('Google Sheets credentials must be provided')
	}

	// uploading data to Google Sheets
	await uploadGoogleSheets(data, settings)
}

function isNonEmptyString(val: any): boolean {
	return typeof val === 'string' && val.length > 0
}
