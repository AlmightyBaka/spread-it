// TODO: set headers style

import { GoogleSpreadsheet } from "google-spreadsheet"
import { Workbook } from "xlsx-populate"

export enum SheetType {
    Csv = 'csv',
    Excel = 'excel',
    GoogleSheets = 'gsheets',
}

export type ColumnWidth = {
    index: number,
    width: number,
}

export type GoogleSheetsCredentials = {
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

export type SettingsGoogleSheets = HasSheets & HasHeader & HasHeaderStyle & HasColumnWidth & HasShrink & {
    spreadsheetId: string,
    credentials: GoogleSheetsCredentials
}

export type SettingsCsv = HasHeader
export type SettingsCsvFile = HasHeader & HasFile

export type Settings = SettingsExcel | SettingsGoogleSheets | SettingsCsv
export type DefaultSettings = HasSheets & HasHeader & HasHeaderStyle & HasShrink & HasColumnWidth

export interface IDocumentProcessor<Document> {
	getDocument(): Promise<Document>,
	insertData(data: object[]): Promise<void>
	setSheetName(sheetName: string): Promise<void>,
}
export interface IExcelProcessor extends IDocumentProcessor<Workbook> {
    ready(): Promise<void>,
	setHeader(keys: string[]): Promise<void>,
	setHeaderStyle(): Promise<void>,
	setColumnWidth(columnWidth: ColumnWidth[]): Promise<void>,
}
export interface IGoogleSheetsProcessor extends IDocumentProcessor<GoogleSpreadsheet> {
    createDocument(spreadsheetId: string, credentials: GoogleSheetsCredentials): Promise<void>,
	getDocument(): Promise<GoogleSpreadsheet>,
	setHeader(keys: string[]): Promise<void>,
	setHeaderStyle(columnCount: number): Promise<void>,
	setColumnWidth(columnWidth: ColumnWidth[]): Promise<void>,
	shrink(x: number, y: number): Promise<void>,
}

export class CredentialsError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'CredentialsError'
    }
}
