export type Settings = {
    fileName?: string,
    sheetName?: string,
    setHeaders?: boolean,
    columnWidth?: ColumnWidth[],
}

export type SettingsGoogleSheets = Settings & {
    shrink?: boolean,
    spreadsheetId: string,
    credentials: {
        serviceAccountEmail: string,
        privateKey: string,
    }
}

export type ColumnWidth = {
    index: number,
    width: number,
}

export class CredentialsError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'CredentialsError'
    }
}
