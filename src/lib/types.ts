export type ExportSettings = {
    fileName?: string,
    sheetName?: string,
    setHeaders?: boolean,
    columnWidth?: ColumnWidth[],
}

export type ColumnWidth = {
    index: number,
    width: number,
}
