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
type HasSheets = { sheetName?: string }
type HasHeader = { setHeader?: boolean }
type HasHeaderStyle = { setHeaderStyle?: boolean }
type HasColumnWidth = { columnWidth?: ColumnWidth[] }
type HasFile = { fileName?: string }
type HasShrink = { shrink?: boolean }

// concrete document features
export type SettingsExcel = HasSheets & HasHeader & HasHeaderStyle & HasColumnWidth
export type SettingsExcelFile = HasSheets & HasHeader & HasHeaderStyle & HasColumnWidth & HasFile

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
