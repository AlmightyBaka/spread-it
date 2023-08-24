import { SettingsCsvFile } from '../types'

/**
 * Writes a .csv file.
 * @remarks only available in local environments
 * @param {object[]} data data to be inserted
 * @param {SettingsCsvFile} [settings] document settings
 * @return {Promise<void>} promise that resolves upon completion
 * @deprecated not implemented yet
 */
export async function getCsvFile(data: object[], settings?: SettingsCsvFile): Promise<void> {
	throw new Error('Method not implemented.')
}
