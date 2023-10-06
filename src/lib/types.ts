// TODO: set headers style

import { GoogleSpreadsheet } from "google-spreadsheet"
import { Workbook } from "xlsx-populate"

export enum SheetType {
    Csv = 'csv',
    Excel = 'excel',
    GoogleSheets = 'gsheets',
}

export type DocumentType<T> = 
    T extends SheetType.Csv ? undefined :
    T extends SheetType.Excel ? Workbook :
    T extends SheetType.GoogleSheets ? GoogleSpreadsheet :
    never

export type SettingsType<T> = 
    T extends SheetType.Csv ? SettingsCsv | SettingsCsvFile :
    T extends SheetType.Excel ? SettingsExcel | SettingsExcelFile :
    T extends SheetType.GoogleSheets ? SettingsGoogleSheets :
    never

export type OutputType<T> = 
    T extends SheetType.Csv ? OutputCsv :
    T extends SheetType.Excel ? OutputExcel :
    T extends SheetType.GoogleSheets ? OutputGoogleSheets :
    never

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
    credentials: GoogleSheetsCredentials
}

export type SettingsCsv = HasHeader
export type SettingsCsvFile = HasHeader & HasFile

export type Settings = SettingsExcel | SettingsGoogleSheets | SettingsCsv
export type DefaultSettings = HasSheets & HasHeader & HasHeaderStyle & HasShrink & HasColumnWidth


// composable typing for describing possible document outputs
type HasOutputFile = { file: (fileName: string) => Promise<void> }
type HasOutputBuffer = { buffer: () => Promise<Buffer> }
type HasOutputUpload = { upload: () => Promise<void> }

// concrete document outputs
export type OutputCsv = HasOutputFile & HasOutputBuffer
export type OutputExcel = HasOutputFile & HasOutputBuffer
export type OutputGoogleSheets = HasOutputUpload

export type OutputClosure<T extends SheetType> = (data: object[], settings?: Settings) => Promise<OutputType<T>>


// document processor interfaces
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
