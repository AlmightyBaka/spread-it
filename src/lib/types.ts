// TODO: set headers style

export type ColumnWidth = {
    index: number,
    width: number,
}

type Credentials = {
    serviceAccountEmail: string,
    privateKey: string,
}

// composable typing for describing possible document features
// TODO: add HasSchema for headers instead of getting keys from the first object in data
/**
 * {@link HasSheets}
 * @param {string} [sheetName] - sets sheet name; 'Data' by default
 */
type HasSheets = { sheetName?: string }

/**
 * @param {boolean} [setHeader] - sets header
 */
type HasHeader = { setHeader?: boolean }

/**
 * @param {boolean} [setHeaderStyle] - sets style if header is set
 */
type HasHeaderStyle = { setHeaderStyle?: boolean }

/**
 * @param {ColumnWidth[]} [columnWidth] - sets column widths
 */
type HasColumnWidth = { columnWidth?: ColumnWidth[] }

/**
 * @param {string} [fileName] - sets filename to write to
 */
type HasFile = { fileName?: string }

/**
 * @param {boolean} [shrink] - shrinks the document to fit data shape
 */
type HasShrink = { shrink?: boolean }

// concrete document features
export type SettingsExcel = HasSheets & HasHeader & HasHeaderStyle & HasColumnWidth
export type SettingsExcelFile = HasSheets & HasHeader & HasHeaderStyle & HasColumnWidth & HasFile

const a:SettingsExcel = {setHeader:true}
export type SettingsGoogleSheets = HasSheets & HasHeader & HasHeaderStyle & HasColumnWidth & HasShrink & {
    spreadsheetId: string,
    credentials: Credentials
}

export type SettingsCsv = HasHeader
export type SettingsCsvFile = HasHeader & HasFile

export type Settings = SettingsExcel | SettingsGoogleSheets | SettingsCsv
export type DefaultSettings = HasSheets & HasHeader & HasHeaderStyle & HasShrink & HasColumnWidth

export interface IDocumentProcessor<Document> {
	ready(settings: Settings): Promise<void>,
	getDocument(settings: Settings): Promise<Document>,
	insertData(data: object[]): Promise<void>
	setSheetName(sheetName: string): Promise<void>,
	setHeader(keys: string[]): Promise<void>,
	setHeaderStyle(): Promise<void>,
	setColumnWidth(columnWidth: ColumnWidth[]): Promise<void>,
	shrink(): Promise<void>,
}

export class CredentialsError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'CredentialsError'
    }
}
