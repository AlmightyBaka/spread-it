import DocumentFactory from '../common/documentFactory'
import { OutputClosureGoogleSheets, SettingsGoogleSheets, SheetType } from '../types'

class CredentialsError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'CredentialsError'
    }
}

const getGoogleSheets: OutputClosureGoogleSheets = async (data, settings) => {
	const castedSettings = settings as SettingsGoogleSheets
	checkCredentials(castedSettings)

	const factory = new DocumentFactory(SheetType.GoogleSheets, castedSettings)


	/**
	 * Writes a Google Sheets document.
	 * @param {object[]} data data to be inserted
	 * @param {SettingsGoogleSheets} [settings] document settings
	 * @throws {CredentialsError} thrown if no credentials or spreadsheet ID is provided
	 * @return {Promise<void>} promise that resolves upon completion
	 */
	async function upload(): Promise<void> {
		await factory.create(data)
	}


	return {
		upload
	}
}

function checkCredentials(settings: SettingsGoogleSheets) {
	function isNonEmptyString(val: any): boolean {
		return (typeof val === 'string') && val.length > 0
	}

	if (!isNonEmptyString(settings.credentials!.serviceAccountEmail) ||
		!isNonEmptyString(settings.credentials!.privateKey)) {
		throw new CredentialsError('Google Sheets credentials must be provided')
	}

	if (!isNonEmptyString(settings.spreadsheetId)) {
		throw new CredentialsError('Google Sheets spreadsheet id must be provided')
	}
}

export default getGoogleSheets
