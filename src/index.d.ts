// TODO: fix overloaded methods
declare module 'xlsx-populate' {
	/**
	 * App properties
	 * @ignore
	 */
	class AppProperties {
		/**
		 * Creates a new instance of AppProperties
		 * @param {{}} node - The node.
		 */
		constructor(node: {})
		_node: {}
		isSecure(value: any, ...args: any[]): any
		/**
		 * Convert the collection to an XML object.
		 * @returns {{}} The XML.
		 */
		toXml(): {}
	}

	export { ArgHandler }
	/**
	 * Method argument handler. Used for overloading methods.
	 * @private
	 */
	class ArgHandler {
		/**
		 * Creates a new instance of ArgHandler.
		 * @param {string} name - The method name to use in error messages.
		 */
		constructor(name: string)
		_name: string
		_cases: any[]
		/**
		 * Add a case.
		 * @param {string|Array.<string>} [types] - The type or types of arguments to match this case.
		 * @param {Function} handler - The function to call when this case is matched.
		 * @returns {ArgHandler} The handler for chaining.
		 */
		case(
			types?: string | Array<string>,
			handler: Function,
			...args: any[]
		): ArgHandler
		/**
		 * Handle the method arguments by checking each case in order until one matches and then call its handler.
		 * @param {Arguments|Array.<*>} args - The method arguments.
		 * @returns {*} The result of the handler.
		 * @throws {Error} Throws if no case matches.
		 */
		handle(args: Arguments | Array<any>): any
		/**
		 * Check if the arguments match the given types.
		 * @param {Arguments} args - The arguments.
		 * @param {Array.<string>} types - The types.
		 * @returns {boolean} True if matches, false otherwise.
		 * @throws {Error} Throws if unknown type.
		 * @private
		 */
		private _argsMatchTypes
	}

	export { Cell }
	/**
	 * A cell
	 */
	class Cell {
		constructor(row: any, node: any, styleId: any)
		_row: any
		/**
		 * Gets a value indicating whether the cell is the active cell in the sheet.
		 * @returns {boolean} True if active, false otherwise.
		 */ /**
		 * Make the cell the active cell in the sheet.
		 * @param {boolean} active - Must be set to `true`. Deactivating directly is not supported. To deactivate, you should activate a different cell instead.
		 * @returns {Cell} The cell.
		 */
		active(...args: any[]): Cell
		/**
		 * Get the address of the column.
		 * @param {{}} [opts] - Options
		 * @param {boolean} [opts.includeSheetName] - Include the sheet name in the address.
		 * @param {boolean} [opts.rowAnchored] - Anchor the row.
		 * @param {boolean} [opts.columnAnchored] - Anchor the column.
		 * @param {boolean} [opts.anchored] - Anchor both the row and the column.
		 * @returns {string} The address
		 */
		address(opts?: {}): string
		/**
		 * Gets the parent column of the cell.
		 * @returns {Column} The parent column.
		 */
		column(): Column
		/**
		 * Clears the contents from the cell.
		 * @returns {Cell} The cell.
		 */
		clear(): Cell
		/**
		 * Gets the column name of the cell.
		 * @returns {string} The column name.
		 */
		columnName(): string
		/**
		 * Gets the column number of the cell (1-based).
		 * @returns {number} The column number.
		 */
		columnNumber(): number
		/**
		 * Find the given pattern in the cell and optionally replace it.
		 * @param {string|RegExp} pattern - The pattern to look for. Providing a string will result in a case-insensitive substring search. Use a RegExp for more sophisticated searches.
		 * @param {string|function} [replacement] - The text to replace or a String.replace callback function. If pattern is a string, all occurrences of the pattern in the cell will be replaced.
		 * @returns {boolean} A flag indicating if the pattern was found.
		 */
		find(pattern: string | RegExp, replacement?: string | Function): boolean
		/**
		 * Gets the formula in the cell. Note that if a formula was set as part of a range, the getter will return 'SHARED'. This is a limitation that may be addressed in a future release.
		 * @returns {string} The formula in the cell.
		 */ /**
		 * Sets the formula in the cell.
		 * @param {string} formula - The formula to set.
		 * @returns {Cell} The cell.
		 */
		formula(...args: any[]): Cell
		_formulaType: any
		_formula: any
		/**
		 * Gets the hyperlink attached to the cell.
		 * @returns {string|undefined} The hyperlink or undefined if not set.
		 */ /**
		 * Set or clear the hyperlink on the cell.
		 * @param {string|Cell|undefined} hyperlink - The hyperlink to set or undefined to clear.
		 * @returns {Cell} The cell.
		 */ /**
		 * Set the hyperlink options on the cell.
		 * @param {{}|Cell} opts - Options or Cell. If opts is a Cell then an internal hyperlink is added.
		 * @param {string|Cell} [opts.hyperlink] - The hyperlink to set, can be a Cell or an internal/external string.
		 * @param {string} [opts.tooltip] - Additional text to help the user understand more about the hyperlink.
		 * @param {string} [opts.email] - Email address, ignored if opts.hyperlink is set.
		 * @param {string} [opts.emailSubject] - Email subject, ignored if opts.hyperlink is set.
		 * @returns {Cell} The cell.
		 */
		hyperlink(...args: any[]): Cell
		/**
		 * Gets the data validation object attached to the cell.
		 * @returns {object|undefined} The data validation or undefined if not set.
		 */ /**
		 * Set or clear the data validation object of the cell.
		 * @param {object|undefined} dataValidation - Object or null to clear.
		 * @returns {Cell} The cell.
		 */
		dataValidation(...args: any[]): Cell
		/**
		 * Callback used by tap.
		 * @callback Cell~tapCallback
		 * @param {Cell} cell - The cell
		 * @returns {undefined}
		 */ /**
		 * Invoke a callback on the cell and return the cell. Useful for method chaining.
		 * @param {Cell~tapCallback} callback - The callback function.
		 * @returns {Cell} The cell.
		 */
		tap(callback: any): Cell
		/**
		 * Callback used by thru.
		 * @callback Cell~thruCallback
		 * @param {Cell} cell - The cell
		 * @returns {*} The value to return from thru.
		 */ /**
		 * Invoke a callback on the cell and return the value provided by the callback. Useful for method chaining.
		 * @param {Cell~thruCallback} callback - The callback function.
		 * @returns {*} The return value of the callback.
		 */
		thru(callback: any): any
		/**
		 * Create a range from this cell and another.
		 * @param {Cell|string} cell - The other cell or cell address to range to.
		 * @returns {Range} The range.
		 */
		rangeTo(cell: Cell | string): Range
		/**
		 * Returns a cell with a relative position given the offsets provided.
		 * @param {number} rowOffset - The row offset (0 for the current row).
		 * @param {number} columnOffset - The column offset (0 for the current column).
		 * @returns {Cell} The relative cell.
		 */
		relativeCell(rowOffset: number, columnOffset: number): Cell
		/**
		 * Gets the parent row of the cell.
		 * @returns {Row} The parent row.
		 */
		row(): Row
		/**
		 * Gets the row number of the cell (1-based).
		 * @returns {number} The row number.
		 */
		rowNumber(): number
		/**
		 * Gets the parent sheet.
		 * @returns {Sheet} The parent sheet.
		 */
		sheet(): Sheet
		/**
		 * Gets an individual style.
		 * @param {string} name - The name of the style.
		 * @returns {*} The style.
		 */ /**
		 * Gets multiple styles.
		 * @param {Array.<string>} names - The names of the style.
		 * @returns {object.<string, *>} Object whose keys are the style names and values are the styles.
		 */ /**
		 * Sets an individual style.
		 * @param {string} name - The name of the style.
		 * @param {*} value - The value to set.
		 * @returns {Cell} The cell.
		 */ /**
		 * Sets the styles in the range starting with the cell.
		 * @param {string} name - The name of the style.
		 * @param {Array.<Array.<*>>} - 2D array of values to set.
		 * @returns {Range} The range that was set.
		 */ /**
		 * Sets multiple styles.
		 * @param {object.<string, *>} styles - Object whose keys are the style names and values are the styles to set.
		 * @returns {Cell} The cell.
		 */ /**
		 * Sets to a specific style
		 * @param {Style} style - Style object given from stylesheet.createStyle
		 * @returns {Cell} The cell.
		 */
		style(...args: any[]): Cell
		_style: any
		_styleId: any
		/**
		 * Gets the value of the cell.
		 * @returns {string|boolean|number|Date|RichText|undefined} The value of the cell.
		 */ /**
		 * Sets the value of the cell.
		 * @param {string|boolean|number|null|undefined|RichText} value - The value to set.
		 * @returns {Cell} The cell.
		 */ /**
		 * Sets the values in the range starting with the cell.
		 * @param {Array.<Array.<string|boolean|number|null|undefined>>} - 2D array of values to set.
		 * @returns {Range} The range that was set.
		 */
		value(...args: any[]): Range
		_value: any
		/**
		 * Gets the parent workbook.
		 * @returns {Workbook} The parent workbook.
		 */
		workbook(): Workbook
		/**
		 * Append horizontal page break after the cell.
		 * @returns {Cell} the cell.
		 */
		addHorizontalPageBreak(): Cell
		/**
		 * Gets the formula if a shared formula ref cell.
		 * @returns {string|undefined} The formula.
		 * @ignore
		 */
		getSharedRefFormula(): string | undefined
		/**
		 * Check if this cell uses a given shared a formula ID.
		 * @param {number} id - The shared formula ID.
		 * @returns {boolean} A flag indicating if shared.
		 * @ignore
		 */
		sharesFormula(id: number): boolean
		/**
		 * Set a shared formula on the cell.
		 * @param {number} id - The shared formula index.
		 * @param {string} [formula] - The formula (if the reference cell).
		 * @param {string} [sharedRef] - The address of the shared range (if the reference cell).
		 * @returns {undefined}
		 * @ignore
		 */
		setSharedFormula(
			id: number,
			formula?: string,
			sharedRef?: string,
		): undefined
		_sharedFormulaId: any
		_formulaRef: any
		/**
		 * Convert the cell to an XML object.
		 * @returns {{}} The XML form.
		 * @ignore
		 */
		toXml(): {}
		/**
		 * Initialize the cell node.
		 * @param {{}|number} nodeOrColumnNumber - The existing node or the column number of a new cell.
		 * @param {number} [styleId] - The style ID for the new cell.
		 * @returns {undefined}
		 * @private
		 */
		private _init
		_columnNumber: any
		/**
		 * Parse the existing node.
		 * @param {{}} node - The existing node.
		 * @returns {undefined}
		 * @private
		 */
		private _parseNode
		_remainingFormulaAttributes: any
		_remainingAttributes: any
		_remainingChildren: any
	}

	export { Column }
	/**
	 * A column.
	 */
	class Column {
		constructor(sheet: any, node: any)
		_sheet: any
		_node: any
		/**
		 * Get the address of the column.
		 * @param {{}} [opts] - Options
		 * @param {boolean} [opts.includeSheetName] - Include the sheet name in the address.
		 * @param {boolean} [opts.anchored] - Anchor the address.
		 * @returns {string} The address
		 */
		address(opts?: {}): string
		/**
		 * Get a cell within the column.
		 * @param {number} rowNumber - The row number.
		 * @returns {Cell} The cell in the column with the given row number.
		 */
		cell(rowNumber: number): Cell
		/**
		 * Get the name of the column.
		 * @returns {string} The column name.
		 */
		columnName(): string
		/**
		 * Get the number of the column.
		 * @returns {number} The column number.
		 */
		columnNumber(): number
		/**
		 * Gets a value indicating whether the column is hidden.
		 * @returns {boolean} A flag indicating whether the column is hidden.
		 */ /**
		 * Sets whether the column is hidden.
		 * @param {boolean} hidden - A flag indicating whether to hide the column.
		 * @returns {Column} The column.
		 */
		hidden(...args: any[]): Column
		/**
		 * Get the parent sheet.
		 * @returns {Sheet} The parent sheet.
		 */
		sheet(): Sheet
		/**
		 * Gets an individual style.
		 * @param {string} name - The name of the style.
		 * @returns {*} The style.
		 */ /**
		 * Gets multiple styles.
		 * @param {Array.<string>} names - The names of the style.
		 * @returns {object.<string, *>} Object whose keys are the style names and values are the styles.
		 */ /**
		 * Sets an individual style.
		 * @param {string} name - The name of the style.
		 * @param {*} value - The value to set.
		 * @returns {Cell} The cell.
		 */ /**
		 * Sets multiple styles.
		 * @param {object.<string, *>} styles - Object whose keys are the style names and values are the styles to set.
		 * @returns {Cell} The cell.
		 */ /**
		 * Sets to a specific style
		 * @param {Style} style - Style object given from stylesheet.createStyle
		 * @returns {Cell} The cell.
		 */
		style(...args: any[]): Cell
		_style: any
		/**
		 * Sets the width.
		 * @param {number} width - The width of the column.
		 * @returns {undefined|number} The width (or undefined).
		 */
		width(): undefined | number
		/**
		 * Sets the width.
		 * @param {number} width - The width of the column.
		 * @returns {Column} The column.
		 */
		width(width: number, ...args: any[]): Column
		/**
		 * Get the parent workbook.
		 * @returns {Workbook} The parent workbook.
		 */
		workbook(): Workbook
		/**
		 * Append vertical page break after the column.
		 * @returns {Column} the column.
		 */
		addPageBreak(): Column
		/**
		 * Convert the column to an XML object.
		 * @returns {{}} The XML form.
		 * @ignore
		 */
		toXml(): {}
		/**
		 * Create a style for this column if it doesn't already exist.
		 * @returns {undefined}
		 * @private
		 */
		private _createStyleIfNeeded
	}

	export { ContentTypes }
	/**
	 * A content type collection.
	 * @ignore
	 */
	class ContentTypes {
		/**
		 * Creates a new instance of ContentTypes
		 * @param {{}} node - The node.
		 */
		constructor(node: {})
		_node: {}
		/**
		 * Add a new content type.
		 * @param {string} partName - The part name.
		 * @param {string} contentType - The content type.
		 * @returns {{}} The new content type.
		 */
		add(partName: string, contentType: string): {}
		/**
		 * Find a content type by part name.
		 * @param {string} partName - The part name.
		 * @returns {{}|undefined} The matching content type or undefined if not found.
		 */
		findByPartName(partName: string): {} | undefined
		/**
		 * Convert the collection to an XML object.
		 * @returns {{}} The XML.
		 */
		toXml(): {}
	}

	export { CoreProperties }
	/**
	 * Core properties
	 * @ignore
	 */
	class CoreProperties {
		constructor(node: any)
		_node: any
		_properties: {}
		/**
		 * Sets a specific property.
		 * @param {string} name - The name of the property.
		 * @param {*} value - The value of the property.
		 * @returns {CoreProperties} CoreProperties.
		 */
		set(name: string, value: any): CoreProperties
		/**
		 * Get a specific property.
		 * @param {string} name - The name of the property.
		 * @returns {*} The property value.
		 */
		get(name: string): any
		/**
		 * Convert the collection to an XML object.
		 * @returns {{}} The XML.
		 */
		toXml(): {}
	}

	export { Encryptor }
	/**
	 * Encrypts/decrypts XLSXs.
	 * @private
	 */
	class Encryptor {
		/**
		 * Encrypt the data with the password.
		 * @param {Buffer} data - The data to encrypt
		 * @param {string} password - The password
		 * @returns {Buffer} The encrypted data
		 */
		encrypt(data: Buffer, password: string): Buffer
		/**
		 * Decrypt the data with the given password
		 * @param {Buffer} data - The data to decrypt
		 * @param {string} password - The password
		 * @returns {Promise.<Buffer>} The decrypted data
		 */
		decryptAsync(data: Buffer, password: string): Promise<Buffer>
		/**
		 * Build the encryption info XML/buffer
		 * @param {{}} encryptionInfo - The encryption info object
		 * @returns {Buffer} The buffer
		 * @private
		 */
		private _buildEncryptionInfo
		/**
		 * Parse the encryption info from the XML/buffer
		 * @param {Buffer} buffer - The buffer
		 * @returns {Promise.<{}>} The parsed encryption info object
		 * @private
		 */
		private _parseEncryptionInfoAsync
		/**
		 * Calculate a hash of the concatenated buffers with the given algorithm.
		 * @param {string} algorithm - The hash algorithm.
		 * @param {Array.<Buffer>} buffers - The buffers to concat and hash
		 * @returns {Buffer} The hash
		 * @private
		 */
		private _hash
		/**
		 * Calculate an HMAC of the concatenated buffers with the given algorithm and key
		 * @param {string} algorithm - The algorithm.
		 * @param {string} key - The key
		 * @param {Array.<Buffer>} buffers - The buffer to concat and HMAC
		 * @returns {Buffer} The HMAC
		 * @private
		 */
		private _hmac
		/**
		 * Encrypt/decrypt input
		 * @param {boolean} encrypt - True to encrypt, false to decrypt
		 * @param {string} cipherAlgorithm - The cipher algorithm
		 * @param {sring} cipherChaining - The cipher chaining mode
		 * @param {Buffer} key - The encryption key
		 * @param {Buffer} iv - The initialization vector
		 * @param {Buffer} input - The input
		 * @returns {Buffer} The output
		 * @private
		 */
		private _crypt
		/**
		 * Encrypt/decrypt the package
		 * @param {boolean} encrypt - True to encrypt, false to decrypt
		 * @param {string} cipherAlgorithm - The cipher algorithm
		 * @param {string} cipherChaining - The cipher chaining mode
		 * @param {string} hashAlgorithm - The hash algorithm
		 * @param {number} blockSize - The IV block size
		 * @param {Buffer} saltValue - The salt
		 * @param {Buffer} key - The encryption key
		 * @param {Buffer} input - The package input
		 * @returns {Buffer} The output
		 * @private
		 */
		private _cryptPackage
		/**
		 * Create a buffer of an integer encoded as a uint32le
		 * @param {number} value - The integer to encode
		 * @param {number} [bufferSize=4] The output buffer size in bytes
		 * @returns {Buffer} The buffer
		 * @private
		 */
		private _createUInt32LEBuffer
		/**
		 * Convert a password into an encryption key
		 * @param {string} password - The password
		 * @param {string} hashAlgorithm - The hash algoritm
		 * @param {Buffer} saltValue - The salt value
		 * @param {number} spinCount - The spin count
		 * @param {number} keyBits - The length of the key in bits
		 * @param {Buffer} blockKey - The block key
		 * @returns {Buffer} The encryption key
		 * @private
		 */
		private _convertPasswordToKey
		/**
		 * Create an initialization vector (IV)
		 * @param {string} hashAlgorithm - The hash algorithm
		 * @param {Buffer} saltValue - The salt value
		 * @param {number} blockSize - The size of the IV
		 * @param {Buffer|number} blockKey - The block key or an int to convert to a buffer
		 * @returns {Buffer} The IV
		 * @private
		 */
		private _createIV
	}

	export { FormulaError }
	/**
	 * A formula error (e.g. #DIV/0!).
	 */
	class FormulaError {
		constructor(error: any)
		_error: any
		/**
		 * Get the error code.
		 * @returns {string} The error code.
		 */
		error(): string
	}
	namespace FormulaError {
		let DIV0: FormulaError
		let NA: FormulaError
		let NAME: FormulaError
		let NULL: FormulaError
		let NUM: FormulaError
		let REF: FormulaError
		let VALUE: FormulaError
		/**
		 * Get the matching FormulaError object.
		 * @param {string} error - The error code.
		 * @returns {FormulaError} The matching FormulaError or a new object if no match.
		 * @ignore
		 */
		function getError(error: string): FormulaError
	}

	export { PageBreaks }
	/**
	 * PageBreaks
	 */
	class PageBreaks {
		constructor(node: any)
		_node: any
		/**
		 * add page-breaks by row/column id
		 * @param {number} id - row/column id (rowNumber/colNumber)
		 * @return {PageBreaks} the page-breaks
		 */
		add(id: number): PageBreaks
		/**
		 * remove page-breaks by index
		 * @param {number} index - index of list
		 * @return {PageBreaks} the page-breaks
		 */
		remove(index: number): PageBreaks
		/**
		 * get count of the page-breaks
		 * @return {number} the page-breaks' count
		 */
		get count(): number
		/**
		 * get list of page-breaks
		 * @return {Array} list of the page-breaks
		 */
		get list(): any[]
	}

	export { Range }
	/**
	 * A range of cells.
	 */
	class Range {
		constructor(startCell: any, endCell: any)
		_startCell: any
		_endCell: any
		/**
		 * Get the address of the range.
		 * @param {{}} [opts] - Options
		 * @param {boolean} [opts.includeSheetName] - Include the sheet name in the address.
		 * @param {boolean} [opts.startRowAnchored] - Anchor the start row.
		 * @param {boolean} [opts.startColumnAnchored] - Anchor the start column.
		 * @param {boolean} [opts.endRowAnchored] - Anchor the end row.
		 * @param {boolean} [opts.endColumnAnchored] - Anchor the end column.
		 * @param {boolean} [opts.anchored] - Anchor all row and columns.
		 * @returns {string} The address.
		 */
		address(opts?: {}): string
		/**
		 * Gets a cell within the range.
		 * @param {number} ri - Row index relative to the top-left corner of the range (0-based).
		 * @param {number} ci - Column index relative to the top-left corner of the range (0-based).
		 * @returns {Cell} The cell.
		 */
		cell(ri: number, ci: number): Cell
		/**
		 * Sets sheet autoFilter to this range.
		 * @returns {Range} This range.
		 */
		autoFilter(): Range
		/**
		 * Get the cells in the range as a 2D array.
		 * @returns {Array.<Array.<Cell>>} The cells.
		 */
		cells(): Array<Array<Cell>>
		/**
		 * Clear the contents of all the cells in the range.
		 * @returns {Range} The range.
		 */
		clear(): Range
		/**
		 * Get the end cell of the range.
		 * @returns {Cell} The end cell.
		 */
		endCell(): Cell
		/**
		 * Callback used by forEach.
		 * @callback Range~forEachCallback
		 * @param {Cell} cell - The cell.
		 * @param {number} ri - The relative row index.
		 * @param {number} ci - The relative column index.
		 * @param {Range} range - The range.
		 * @returns {undefined}
		 */
		/**
		 * Call a function for each cell in the range. Goes by row then column.
		 * @param {Range~forEachCallback} callback - Function called for each cell in the range.
		 * @returns {Range} The range.
		 */
		forEach(callback: any): Range
		/**
		 * Gets the shared formula in the start cell (assuming it's the source of the shared formula).
		 * @returns {string|undefined} The shared formula.
		 */ /**
		 * Sets the shared formula in the range. The formula will be translated for each cell.
		 * @param {string} formula - The formula to set.
		 * @returns {Range} The range.
		 */
		formula(...args: any[]): Range
		/**
		 * Callback used by map.
		 * @callback Range~mapCallback
		 * @param {Cell} cell - The cell.
		 * @param {number} ri - The relative row index.
		 * @param {number} ci - The relative column index.
		 * @param {Range} range - The range.
		 * @returns {*} The value to map to.
		 */
		/**
		 * Creates a 2D array of values by running each cell through a callback.
		 * @param {Range~mapCallback} callback - Function called for each cell in the range.
		 * @returns {Array.<Array.<*>>} The 2D array of return values.
		 */
		map(callback: any): Array<Array<any>>
		/**
		 * Gets a value indicating whether the cells in the range are merged.
		 * @returns {boolean} The value.
		 */ /**
		 * Sets a value indicating whether the cells in the range should be merged.
		 * @param {boolean} merged - True to merge, false to unmerge.
		 * @returns {Range} The range.
		 */
		merged(merged: boolean, ...args: any[]): Range
		/**
		 * Gets the data validation object attached to the Range.
		 * @returns {object|undefined} The data validation object or undefined if not set.
		 */ /**
		 * Set or clear the data validation object of the entire range.
		 * @param {object|undefined} dataValidation - Object or null to clear.
		 * @returns {Range} The range.
		 */
		dataValidation(...args: any[]): Range
		/**
		 * Callback used by reduce.
		 * @callback Range~reduceCallback
		 * @param {*} accumulator - The accumulated value.
		 * @param {Cell} cell - The cell.
		 * @param {number} ri - The relative row index.
		 * @param {number} ci - The relative column index.
		 * @param {Range} range - The range.
		 * @returns {*} The value to map to.
		 */
		/**
		 * Reduces the range to a single value accumulated from the result of a function called for each cell.
		 * @param {Range~reduceCallback} callback - Function called for each cell in the range.
		 * @param {*} [initialValue] - The initial value.
		 * @returns {*} The accumulated value.
		 */
		reduce(callback: any, initialValue?: any): any
		/**
		 * Gets the parent sheet of the range.
		 * @returns {Sheet} The parent sheet.
		 */
		sheet(): Sheet
		/**
		 * Gets the start cell of the range.
		 * @returns {Cell} The start cell.
		 */
		startCell(): Cell
		/**
		 * Gets a single style for each cell.
		 * @param {string} name - The name of the style.
		 * @returns {Array.<Array.<*>>} 2D array of style values.
		 */ /**
		 * Gets multiple styles for each cell.
		 * @param {Array.<string>} names - The names of the styles.
		 * @returns {Object.<string, Array.<Array.<*>>>} Object whose keys are style names and values are 2D arrays of style values.
		 */ /**
		 * Set the style in each cell to the result of a function called for each.
		 * @param {string} name - The name of the style.
		 * @param {Range~mapCallback} callback - The callback to provide value for the cell.
		 * @returns {Range} The range.
		 */ /**
		 * Sets the style in each cell to the corresponding value in the given 2D array of values.
		 * @param {string} name - The name of the style.
		 * @param {Array.<Array.<*>>} values - The style values to set.
		 * @returns {Range} The range.
		 */ /**
		 * Set the style of all cells in the range to a single style value.
		 * @param {string} name - The name of the style.
		 * @param {*} value - The value to set.
		 * @returns {Range} The range.
		 */ /**
		 * Set multiple styles for the cells in the range.
		 * @param {object.<string,Range~mapCallback|Array.<Array.<*>>|*>} styles - Object whose keys are style names and values are either function callbacks, 2D arrays of style values, or a single value for all the cells.
		 * @returns {Range} The range.
		 */ /**
		 * Sets to a specific style
		 * @param {Style} style - Style object given from stylesheet.createStyle
		 * @returns {Range} The range.
		 */
		style(...args: any[]): Range
		_style: any
		/**
		 * Callback used by tap.
		 * @callback Range~tapCallback
		 * @param {Range} range - The range.
		 * @returns {undefined}
		 */
		/**
		 * Invoke a callback on the range and return the range. Useful for method chaining.
		 * @param {Range~tapCallback} callback - The callback function.
		 * @returns {Range} The range.
		 */
		tap(callback: any): Range
		/**
		 * Callback used by thru.
		 * @callback Range~thruCallback
		 * @param {Range} range - The range.
		 * @returns {*} The value to return from thru.
		 */
		/**
		 * Invoke a callback on the range and return the value provided by the callback. Useful for method chaining.
		 * @param {Range~thruCallback} callback - The callback function.
		 * @returns {*} The return value of the callback.
		 */
		thru(callback: any): any
		/**
		 * Get the values of each cell in the range as a 2D array.
		 * @returns {Array.<Array.<*>>} The values.
		 */ /**
		 * Set the values in each cell to the result of a function called for each.
		 * @param {Range~mapCallback} callback - The callback to provide value for the cell.
		 * @returns {Range} The range.
		 */ /**
		 * Sets the value in each cell to the corresponding value in the given 2D array of values.
		 * @param {Array.<Array.<*>>} values - The values to set.
		 * @returns {Range} The range.
		 */ /**
		 * Set the value of all cells in the range to a single value.
		 * @param {*} value - The value to set.
		 * @returns {Range} The range.
		 */
		value(...args: any[]): Range
		/**
		 * Gets the parent workbook.
		 * @returns {Workbook} The parent workbook.
		 */
		workbook(): Workbook
		/**
		 * Find the extent of the range.
		 * @returns {undefined}
		 * @private
		 */
		private _findRangeExtent
		_minRowNumber: number
		_maxRowNumber: number
		_minColumnNumber: number
		_maxColumnNumber: number
		_numRows: number
		_numColumns: number
	}

	export { Relationships }
	/**
	 * A relationship collection.
	 * @ignore
	 */
	class Relationships {
		/**
		 * Creates a new instance of _Relationships.
		 * @param {{}} node - The node.
		 */
		constructor(node: {})
		/**
		 * Add a new relationship.
		 * @param {string} type - The type of relationship.
		 * @param {string} target - The target of the relationship.
		 * @param {string} [targetMode] - The target mode of the relationship.
		 * @returns {{}} The new relationship.
		 */
		add(type: string, target: string, targetMode?: string): {}
		/**
		 * Find a relationship by ID.
		 * @param {string} id - The relationship ID.
		 * @returns {{}|undefined} The matching relationship or undefined if not found.
		 */
		findById(id: string): {} | undefined
		/**
		 * Find a relationship by type.
		 * @param {string} type - The type to search for.
		 * @returns {{}|undefined} The matching relationship or undefined if not found.
		 */
		findByType(type: string): {} | undefined
		/**
		 * Convert the collection to an XML object.
		 * @returns {{}|undefined} The XML or undefined if empty.
		 */
		toXml(): {} | undefined
		/**
		 * Get the starting relationship ID to use for new relationships.
		 * @private
		 * @returns {undefined}
		 */
		private _getStartingId
		_nextId: number
		/**
		 * Initialize the node.
		 * @param {{}} [node] - The relationships node.
		 * @private
		 * @returns {undefined}
		 */
		private _init
		_node: {}
	}

	export { RichText }
	/**
	 * A RichText class that contains many {@link RichTextFragment}.
	 */
	class RichText {
		/**
		 * Creates a new instance of RichText. If you get the instance by calling `Cell.value()`,
		 * adding a text contains line separator will trigger {@link Cell.style}('wrapText', true), which
		 * will make MS Excel show the new line. i.e. In MS Excel, Tap "alt+Enter" in a cell, the cell
		 * will set wrap text to true automatically.
		 *
		 * @param {undefined|null|Object} [node] - The node stored in the shared string
		 */
		constructor(node?: undefined | null | any)
		_node: RichTextFragment[]
		_cell: any
		_remainingNodes: any[]
		/**
		 * Gets which cell this {@link RichText} instance belongs to.
		 * @return {Cell|undefined} The cell this instance belongs to.
		 */
		get cell(): any
		/**
		 * Gets the how many rich text fragment this {@link RichText} instance contains
		 * @return {number} The number of fragments this {@link RichText} instance has.
		 */
		get length(): number
		/**
		 * Gets concatenated text without styles.
		 * @return {string} concatenated text
		 */
		text(): string
		/**
		 * Gets the instance with cell reference defined.
		 * @param {Cell} cell - Cell reference.
		 * @return {RichText} The instance with cell reference defined.
		 */
		getInstanceWithCellRef(cell: Cell): RichText
		/**
		 * Returns a deep copy of this instance.
		 * If cell reference is provided, it checks line separators and calls
		 * `cell.style('wrapText', true)` when needed.
		 * @param {Cell|undefined} [cell] - The cell reference.
		 * @return {RichText} A deep copied instance
		 */
		copy(cell?: Cell | undefined): RichText
		/**
		 * Gets the ith fragment of this {@link RichText} instance.
		 * @param {number} index - The index
		 * @return {RichTextFragment} A rich text fragment
		 */
		get(index: number): RichTextFragment
		/**
		 * Removes a rich text fragment. This instance will be mutated.
		 * @param {number} index - the index of the fragment to remove
		 * @return {RichText} the rich text instance
		 */
		remove(index: number): RichText
		/**
		 * Adds a rich text fragment to the last or after the given index. This instance will be mutated.
		 * @param {string} text - the text
		 * @param {{}} [styles] - the styles js object, i.e. {fontSize: 12}
		 * @param {number|undefined|null} [index] - the index of the fragment to add
		 * @return {RichText} the rich text instance
		 */
		add(text: string, styles?: {}, index?: number | undefined | null): RichText
		/**
		 * Clears this rich text
		 * @return {RichText} the rich text instance
		 */
		clear(): RichText
		/**
		 * Remove all unsupported nodes (phoneticPr, rPh for Japanese language).
		 * @return {undefined}
		 */
		removeUnsupportedNodes(): undefined
		/**
		 * Convert the rich text to an XML object.
		 * @returns {Array.<{}>} The XML form.
		 * @ignore
		 */
		toXml(): Array<{}>
	}

	export { RichTextFragment }
	/**
	 * A Rich text fragment.
	 */
	class RichTextFragment {
		/**
		 * Creates a new instance of RichTextFragment.
		 * @constructor
		 * @param {string|Object} value - Text value or XML node
		 * @param {object|undefined|null} [styles] - Multiple styles.
		 * @param {RichText} richText - The rich text instance where this fragment belongs to.
		 */
		constructor(
			value: string | any,
			styles?: object | undefined | null,
			richText: RichText,
		)
		_richText: RichText
		_node: any
		_fontNode: {}
		_valueNode: {}
		/**
		 * Gets the value of this part of rich text
		 * @return {string} text
		 */ /**
		 * Sets the value of this part of rich text
		 * @param {string} text - the text to set
		 * @return {RichTextFragment} - RichTextFragment
		 */
		value(...args: any[]): RichTextFragment
		/**
		 * Convert the rich text to an XML object.
		 * @returns {{}} The XML form.
		 * @ignore
		 */
		toXml(): {}
		/**
		 * Gets an individual style.
		 * @param {string} name - The name of the style.
		 * @returns {*} The style.
		 */ /**
		 * Gets multiple styles.
		 * @param {Array.<string>} names - The names of the style.
		 * @returns {object.<string, *>} Object whose keys are the style names and values are the styles.
		 */ /**
		 * Sets an individual style.
		 * @param {string} name - The name of the style.
		 * @param {*} value - The value to set.
		 * @returns {RichTextFragment} This RichTextFragment.
		 */ /**
		 * Sets multiple styles.
		 * @param {object.<string, *>} styles - Object whose keys are the style names and values are the styles to set.
		 * @returns {RichTextFragment} This RichTextFragment.
		 */
		style(...args: any[]): RichTextFragment
		_getColor(
			node: any,
			name: any,
		): {
			rgb: any
			theme: any
			tint: any
		}
		_setColor(node: any, name: any, color: any): void
		_get_bold(): boolean
		_set_bold(bold: any): void
		_get_italic(): boolean
		_set_italic(italic: any): void
		_get_underline(): any
		_set_underline(underline: any): void
		_get_strikethrough(): boolean
		_set_strikethrough(strikethrough: any): void
		_getFontVerticalAlignment(): any
		_setFontVerticalAlignment(alignment: any): void
		_get_subscript(): boolean
		_set_subscript(subscript: any): void
		_get_superscript(): boolean
		_set_superscript(superscript: any): void
		_get_fontSize(): any
		_set_fontSize(size: any): void
		_get_fontFamily(): any
		_set_fontFamily(family: any): void
		_get_fontGenericFamily(): any
		/**
		 * @param {number} genericFamily - 1: Serif, 2: Sans Serif, 3: Monospace,
		 * @private
		 * @return {undefined}
		 */
		private _set_fontGenericFamily
		_get_fontColor(): {
			rgb: any
			theme: any
			tint: any
		}
		_set_fontColor(color: any): void
		_get_fontScheme(): any
		/**
		 * @param {string} scheme - 'minor'|'major'|'none'
		 * @private
		 * @return {undefined}
		 */
		private _set_fontScheme
	}

	export { Row }
	/**
	 * A row.
	 */
	class Row {
		constructor(sheet: any, node: any)
		_sheet: any
		/**
		 * Get the address of the row.
		 * @param {{}} [opts] - Options
		 * @param {boolean} [opts.includeSheetName] - Include the sheet name in the address.
		 * @param {boolean} [opts.anchored] - Anchor the address.
		 * @returns {string} The address
		 */
		address(opts?: {}): string
		/**
		 * Get a cell in the row.
		 * @param {string|number} columnNameOrNumber - The name or number of the column.
		 * @returns {Cell} The cell.
		 */
		cell(columnNameOrNumber: string | number): Cell
		/**
		 * Gets the row height.
		 * @returns {undefined|number} The height (or undefined).
		 */ /**
		 * Sets the row height.
		 * @param {number} height - The height of the row.
		 * @returns {Row} The row.
		 */
		height(...args: any[]): Row
		/**
		 * Gets a value indicating whether the row is hidden.
		 * @returns {boolean} A flag indicating whether the row is hidden.
		 */ /**
		 * Sets whether the row is hidden.
		 * @param {boolean} hidden - A flag indicating whether to hide the row.
		 * @returns {Row} The row.
		 */
		hidden(...args: any[]): Row
		/**
		 * Gets the row number.
		 * @returns {number} The row number.
		 */
		rowNumber(): number
		/**
		 * Gets the parent sheet of the row.
		 * @returns {Sheet} The parent sheet.
		 */
		sheet(): Sheet
		/**
		 * Gets an individual style.
		 * @param {string} name - The name of the style.
		 * @returns {*} The style.
		 */ /**
		 * Gets multiple styles.
		 * @param {Array.<string>} names - The names of the style.
		 * @returns {object.<string, *>} Object whose keys are the style names and values are the styles.
		 */ /**
		 * Sets an individual style.
		 * @param {string} name - The name of the style.
		 * @param {*} value - The value to set.
		 * @returns {Cell} The cell.
		 */ /**
		 * Sets multiple styles.
		 * @param {object.<string, *>} styles - Object whose keys are the style names and values are the styles to set.
		 * @returns {Cell} The cell.
		 */ /**
		 * Sets to a specific style
		 * @param {Style} style - Style object given from stylesheet.createStyle
		 * @returns {Cell} The cell.
		 */
		style(...args: any[]): Cell
		_style: any
		/**
		 * Get the parent workbook.
		 * @returns {Workbook} The parent workbook.
		 */
		workbook(): Workbook
		/**
		 * Append horizontal page break after the row.
		 * @returns {Row} the row.
		 */
		addPageBreak(): Row
		/**
		 * Clear cells that are using a given shared formula ID.
		 * @param {number} sharedFormulaId - The shared formula ID.
		 * @returns {undefined}
		 * @ignore
		 */
		clearCellsUsingSharedFormula(sharedFormulaId: number): undefined
		/**
		 * Find a pattern in the row and optionally replace it.
		 * @param {string|RegExp} pattern - The search pattern.
		 * @param {string} [replacement] - The replacement text.
		 * @returns {Array.<Cell>} The matched cells.
		 * @ignore
		 */
		find(pattern: string | RegExp, replacement?: string): Array<Cell>
		/**
		 * Check if the row has a cell at the given column number.
		 * @param {number} columnNumber - The column number.
		 * @returns {boolean} True if a cell exists, false otherwise.
		 * @ignore
		 */
		hasCell(columnNumber: number): boolean
		/**
		 * Check if the column has a style defined.
		 * @returns {boolean} True if a style exists, false otherwise.
		 * @ignore
		 */
		hasStyle(): boolean
		/**
		 * Returns the nax used column number.
		 * @returns {number} The max used column number.
		 * @ignore
		 */
		minUsedColumnNumber(): number
		/**
		 * Returns the nax used column number.
		 * @returns {number} The max used column number.
		 * @ignore
		 */
		maxUsedColumnNumber(): number
		/**
		 * Convert the row to an object.
		 * @returns {{}} The object form.
		 * @ignore
		 */
		toXml(): {}
		/**
		 * If a column node is already defined that intersects with this row and that column has a style set, we
		 * need to make sure that a cell node exists at the intersection so we can style it appropriately.
		 * Fetching the cell will force a new cell node to be created with a style matching the column.
		 * @returns {undefined}
		 * @private
		 */
		private _createCellStylesIfNeeded
		/**
		 * Create a style for this row if it doesn't already exist.
		 * @returns {undefined}
		 * @private
		 */
		private _createStyleIfNeeded
		/**
		 * Initialize the row node.
		 * @param {{}} node - The row node.
		 * @returns {undefined}
		 * @private
		 */
		private _init
		_node: {}
		_cells: any[]
	}

	export { SharedStrings }
	/**
	 * The shared strings table.
	 * @ignore
	 */
	class SharedStrings {
		/**
		 * Constructs a new instance of _SharedStrings.
		 * @param {{}} node - The node.
		 */
		constructor(node: {})
		_stringArray: any[]
		_indexMap: {}
		/**
		 * Gets the index for a string
		 * @param {string|Array.<{}>} string - The string or rich text array.
		 * @returns {number} The index
		 */
		getIndexForString(string: string | Array<{}>): number
		/**
		 * Get the string for a given index
		 * @param {number} index - The index
		 * @returns {string} The string
		 */
		getStringByIndex(index: number): string
		/**
		 * Convert the collection to an XML object.
		 * @returns {{}} The XML object.
		 */
		toXml(): {}
		/**
		 * Store any existing values in the caches.
		 * @private
		 * @returns {undefined}
		 */
		private _cacheExistingSharedStrings
		/**
		 * Initialize the node.
		 * @param {{}} [node] - The shared strings node.
		 * @private
		 * @returns {undefined}
		 */
		private _init
		_node: {}
	}

	export { Sheet }
	/**
	 * A worksheet.
	 */
	class Sheet {
		constructor(workbook: any, idNode: any, node: any, relationshipsNode: any)
		/**
		 * Gets a value indicating whether the sheet is the active sheet in the workbook.
		 * @returns {boolean} True if active, false otherwise.
		 */ /**
		 * Make the sheet the active sheet in the workkbok.
		 * @param {boolean} active - Must be set to `true`. Deactivating directly is not supported. To deactivate, you should activate a different sheet instead.
		 * @returns {Sheet} The sheet.
		 */
		active(...args: any[]): Sheet
		/**
		 * Get the active cell in the sheet.
		 * @returns {Cell} The active cell.
		 */ /**
		 * Set the active cell in the workbook.
		 * @param {string|Cell} cell - The cell or address of cell to activate.
		 * @returns {Sheet} The sheet.
		 */ /**
		 * Set the active cell in the workbook by row and column.
		 * @param {number} rowNumber - The row number of the cell.
		 * @param {string|number} columnNameOrNumber - The column name or number of the cell.
		 * @returns {Sheet} The sheet.
		 */
		activeCell(...args: any[]): Sheet
		/**
		 * Gets the cell with the given address.
		 * @param {string} address - The address of the cell.
		 * @returns {Cell} The cell.
		 */ /**
		 * Gets the cell with the given row and column numbers.
		 * @param {number} rowNumber - The row number of the cell.
		 * @param {string|number} columnNameOrNumber - The column name or number of the cell.
		 * @returns {Cell} The cell.
		 */
		cell(...args: any[]): Cell
		/**
		 * Gets a column in the sheet.
		 * @param {string|number} columnNameOrNumber - The name or number of the column.
		 * @returns {Column} The column.
		 */
		column(columnNameOrNumber: string | number): Column
		/**
		 * Gets a defined name scoped to the sheet.
		 * @param {string} name - The defined name.
		 * @returns {undefined|string|Cell|Range|Row|Column} What the defined name refers to or undefined if not found. Will return the string formula if not a Row, Column, Cell, or Range.
		 */ /**
		 * Set a defined name scoped to the sheet.
		 * @param {string} name - The defined name.
		 * @param {string|Cell|Range|Row|Column} refersTo - What the name refers to.
		 * @returns {Workbook} The workbook.
		 */
		definedName(...args: any[]): Workbook
		/**
		 * Deletes the sheet and returns the parent workbook.
		 * @returns {Workbook} The workbook.
		 */
		delete(): Workbook
		/**
		 * Find the given pattern in the sheet and optionally replace it.
		 * @param {string|RegExp} pattern - The pattern to look for. Providing a string will result in a case-insensitive substring search. Use a RegExp for more sophisticated searches.
		 * @param {string|function} [replacement] - The text to replace or a String.replace callback function. If pattern is a string, all occurrences of the pattern in each cell will be replaced.
		 * @returns {Array.<Cell>} The matching cells.
		 */
		find(pattern: string | RegExp, replacement?: string | Function): Array<Cell>
		/**
		 * Gets a value indicating whether this sheet's grid lines are visible.
		 * @returns {boolean} True if selected, false if not.
		 */ /**
		 * Sets whether this sheet's grid lines are visible.
		 * @param {boolean} selected - True to make visible, false to hide.
		 * @returns {Sheet} The sheet.
		 */
		gridLinesVisible(...args: any[]): Sheet
		/**
		 * Gets a value indicating if the sheet is hidden or not.
		 * @returns {boolean|string} True if hidden, false if visible, and 'very' if very hidden.
		 */ /**
		 * Set whether the sheet is hidden or not.
		 * @param {boolean|string} hidden - True to hide, false to show, and 'very' to make very hidden.
		 * @returns {Sheet} The sheet.
		 */
		hidden(...args: any[]): Sheet
		/**
		 * Move the sheet.
		 * @param {number|string|Sheet} [indexOrBeforeSheet] The index to move the sheet to or the sheet (or name of sheet) to move this sheet before. Omit this argument to move to the end of the workbook.
		 * @returns {Sheet} The sheet.
		 */
		move(indexOrBeforeSheet?: number | string | Sheet): Sheet
		/**
		 * Get the name of the sheet.
		 * @returns {string} The sheet name.
		 */ /**
		 * Set the name of the sheet. *Note: this method does not rename references to the sheet so formulas, etc. can be broken. Use with caution!*
		 * @param {string} name - The name to set to the sheet.
		 * @returns {Sheet} The sheet.
		 */
		name(...args: any[]): Sheet
		/**
		 * Gets a range from the given range address.
		 * @param {string} address - The range address (e.g. 'A1:B3').
		 * @returns {Range} The range.
		 */ /**
		 * Gets a range from the given cells or cell addresses.
		 * @param {string|Cell} startCell - The starting cell or cell address (e.g. 'A1').
		 * @param {string|Cell} endCell - The ending cell or cell address (e.g. 'B3').
		 * @returns {Range} The range.
		 */ /**
		 * Gets a range from the given row numbers and column names or numbers.
		 * @param {number} startRowNumber - The starting cell row number.
		 * @param {string|number} startColumnNameOrNumber - The starting cell column name or number.
		 * @param {number} endRowNumber - The ending cell row number.
		 * @param {string|number} endColumnNameOrNumber - The ending cell column name or number.
		 * @returns {Range} The range.
		 */
		range(...args: any[]): Range
		/**
		 * Unsets sheet autoFilter.
		 * @returns {Sheet} This sheet.
		 */ /**
		 * Sets sheet autoFilter to a Range.
		 * @param {Range} range - The autoFilter range.
		 * @returns {Sheet} This sheet.
		 */
		autoFilter(range: Range): Sheet
		_autoFilter: Range
		/**
		 * Gets the row with the given number.
		 * @param {number} rowNumber - The row number.
		 * @returns {Row} The row with the given number.
		 */
		row(rowNumber: number): Row
		/**
		 * Get the tab color. (See style [Color](#color).)
		 * @returns {undefined|Color} The color or undefined if not set.
		 */ /**
		 * Sets the tab color. (See style [Color](#color).)
		 * @returns {Color|string|number} color - Color of the tab. If string, will set an RGB color. If number, will set a theme color.
		 */
		tabColor(...args: any[]): Color | string | number
		/**
		 * Gets a value indicating whether this sheet is selected.
		 * @returns {boolean} True if selected, false if not.
		 */ /**
		 * Sets whether this sheet is selected.
		 * @param {boolean} selected - True to select, false to deselected.
		 * @returns {Sheet} The sheet.
		 */
		tabSelected(...args: any[]): Sheet
		/**
		 * Gets a value indicating whether this sheet is rtl (Right To Left).
		 * @returns {boolean} True if rtl, false if ltr.
		 */ /**
		 * Sets whether this sheet is rtl.
		 * @param {boolean} rtl - True to rtl, false to ltr (Left To Right).
		 * @returns {Sheet} The sheet.
		 */
		rightToLeft(...args: any[]): Sheet
		/**
		 * Get the range of cells in the sheet that have contained a value or style at any point. Useful for extracting the entire sheet contents.
		 * @returns {Range|undefined} The used range or undefined if no cells in the sheet are used.
		 */
		usedRange(): Range | undefined
		/**
		 * Gets the parent workbook.
		 * @returns {Workbook} The parent workbook.
		 */
		workbook(): Workbook
		/**
		 * Gets all page breaks.
		 * @returns {{}} the object holds both vertical and horizontal PageBreaks.
		 */
		pageBreaks(): {}
		/**
		 * Gets the vertical page breaks.
		 * @returns {PageBreaks} vertical PageBreaks.
		 */
		verticalPageBreaks(): PageBreaks
		/**
		 * Gets the horizontal page breaks.
		 * @returns {PageBreaks} horizontal PageBreaks.
		 */
		horizontalPageBreaks(): PageBreaks
		/**
		 * Clear cells that are using a given shared formula ID.
		 * @param {number} sharedFormulaId - The shared formula ID.
		 * @returns {undefined}
		 * @ignore
		 */
		clearCellsUsingSharedFormula(sharedFormulaId: number): undefined
		/**
		 * Get an existing column style ID.
		 * @param {number} columnNumber - The column number.
		 * @returns {undefined|number} The style ID.
		 * @ignore
		 */
		existingColumnStyleId(columnNumber: number): undefined | number
		/**
		 * Call a callback for each column number that has a node defined for it.
		 * @param {Function} callback - The callback.
		 * @returns {undefined}
		 * @ignore
		 */
		forEachExistingColumnNumber(callback: Function): undefined
		/**
		 * Call a callback for each existing row.
		 * @param {Function} callback - The callback.
		 * @returns {undefined}
		 * @ignore
		 */
		forEachExistingRow(callback: Function): undefined
		/**
		 * Get the hyperlink attached to the cell with the given address.
		 * @param {string} address - The address of the hyperlinked cell.
		 * @returns {string|undefined} The hyperlink or undefined if not set.
		 */ /**
		 * Set the hyperlink on the cell with the given address.
		 * @param {string} address - The address of the hyperlinked cell.
		 * @param {string} hyperlink - The hyperlink to set or undefined to clear.
		 * @param {boolean} [internal] - The flag to force hyperlink to be internal. If true, then autodetect is skipped.
		 * @returns {Sheet} The sheet.
		 */ /**
		 * Set the hyperlink on the cell with the given address. If opts is a Cell an internal hyperlink is added.
		 * @param {string} address - The address of the hyperlinked cell.
		 * @param {object|Cell} opts - Options.
		 * @returns {Sheet} The sheet.
		 * @ignore
		 */ /**
		 * Set the hyperlink on the cell with the given address and options.
		 * @param {string} address - The address of the hyperlinked cell.
		 * @param {{}|Cell} opts - Options or Cell. If opts is a Cell then an internal hyperlink is added.
		 * @param {string|Cell} [opts.hyperlink] - The hyperlink to set, can be a Cell or an internal/external string.
		 * @param {string} [opts.tooltip] - Additional text to help the user understand more about the hyperlink.
		 * @param {string} [opts.email] - Email address, ignored if opts.hyperlink is set.
		 * @param {string} [opts.emailSubject] - Email subject, ignored if opts.hyperlink is set.
		 * @returns {Sheet} The sheet.
		 */
		hyperlink(...args: any[]): Sheet
		/**
		 * Increment and return the max shared formula ID.
		 * @returns {number} The new max shared formula ID.
		 * @ignore
		 */
		incrementMaxSharedFormulaId(): number
		/**
		 * Get a value indicating whether the cells in the given address are merged.
		 * @param {string} address - The address to check.
		 * @returns {boolean} True if merged, false if not merged.
		 * @ignore
		 */ /**
		 * Merge/unmerge cells by adding/removing a mergeCell entry.
		 * @param {string} address - The address to merge.
		 * @param {boolean} merged - True to merge, false to unmerge.
		 * @returns {Sheet} The sheet.
		 * @ignore
		 */
		merged(...args: any[]): Sheet
		/**
		 * Gets a Object or undefined of the cells in the given address.
		 * @param {string} address - The address to check.
		 * @returns {object|boolean} Object or false if not set
		 * @ignore
		 */ /**
		 * Removes dataValidation at the given address
		 * @param {string} address - The address to remove.
		 * @param {boolean} obj - false to delete.
		 * @returns {boolean} true if removed.
		 * @ignore
		 */ /**
		 * Add dataValidation to cells at the given address if object or string
		 * @param {string} address - The address to set.
		 * @param {object|string} obj - Object or String to set
		 * @returns {Sheet} The sheet.
		 * @ignore
		 */
		dataValidation(...args: any[]): Sheet
		/**
		 * Convert the sheet to a collection of XML objects.
		 * @returns {{}} The XML forms.
		 * @ignore
		 */
		toXmls(): {}
		/**
		 * Update the max shared formula ID to the given value if greater than current.
		 * @param {number} sharedFormulaId - The new shared formula ID.
		 * @returns {undefined}
		 * @ignore
		 */
		updateMaxSharedFormulaId(sharedFormulaId: number): undefined
		_maxSharedFormulaId: number
		/**
		 * Get the print option given a valid print option attribute.
		 * @param {string} attributeName - Attribute name of the printOptions.
		 *   gridLines - Used in conjunction with gridLinesSet. If both gridLines and gridlinesSet are true, then grid lines shall print. Otherwise, they shall not (i.e., one or both have false values).
		 *   gridLinesSet - Used in conjunction with gridLines. If both gridLines and gridLinesSet are true, then grid lines shall print. Otherwise, they shall not (i.e., one or both have false values).
		 *   headings - Print row and column headings.
		 *   horizontalCentered - Center on page horizontally when printing.
		 *   verticalCentered - Center on page vertically when printing.
		 * @returns {boolean}
		 */ /**
		 * Set the print option given a valid print option attribute and a value.
		 * @param {string} attributeName - Attribute name of the printOptions. See get print option for list of valid attributes.
		 * @param {undefined|boolean} attributeEnabled - If `undefined` or `false` then the attribute is removed, otherwise the print option is enabled.
		 * @returns {Sheet} The sheet.
		 */
		printOptions(...args: any[]): Sheet
		/**
		 * Get the print option for the gridLines attribute value.
		 * @returns {boolean}
		 */ /**
		 * Set the print option for the gridLines attribute value.
		 * @param {undefined|boolean} enabled - If `undefined` or `false` then attribute is removed, otherwise gridLines is enabled.
		 * @returns {Sheet} The sheet.
		 */
		printGridLines(...args: any[]): Sheet
		/**
		 * Get the page margin given a valid attribute name.
		 * If the value is not yet defined, then it will return the current preset value.
		 * @param {string} attributeName - Attribute name of the pageMargins.
		 *     left - Left Page Margin in inches.
		 *     right - Right page margin in inches.
		 *     top - Top Page Margin in inches.
		 *     buttom - Bottom Page Margin in inches.
		 *     footer - Footer Page Margin in inches.
		 *     header - Header Page Margin in inches.
		 * @returns {number} the attribute value.
		 */ /**
		 * Set the page margin (or override the preset) given an attribute name and a value.
		 * @param {string} attributeName - Attribute name of the pageMargins. See get page margin for list of valid attributes.
		 * @param {undefined|number|string} attributeStringValue - If `undefined` then set back to preset value, otherwise, set the given attribute value.
		 * @returns {Sheet} The sheet.
		 */
		pageMargins(...args: any[]): Sheet
		/**
		 * Page margins preset is a set of page margins associated with a name.
		 * The page margin preset acts as a fallback when not explicitly defined by `Sheet.pageMargins`.
		 * If a sheet already contains page margins, it attempts to auto-detect, otherwise they are defined as the template preset.
		 * If no page margins exist, then the preset is undefined and will not be included in the output of `Sheet.toXmls`.
		 * Available presets include: normal, wide, narrow, template.
		 *
		 * Get the page margins preset name. The registered name of a predefined set of attributes.
		 * @returns {string} The preset name.
		 */ /**
		 * Set the page margins preset by name, clearing any existing/temporary attribute values.
		 * @param {undefined|string} presetName - The preset name. If `undefined`, page margins will not be included in the output of `Sheet.toXmls`.
		 * @returns {Sheet} The sheet.
		 */ /**
		 * Set a new page margins preset by name and attributes object.
		 * @param {string} presetName - The preset name.
		 * @param {object} presetAttributes - The preset attributes.
		 * @returns {Sheet} The sheet.
		 */
		pageMarginsPreset(...args: any[]): Sheet
		_pageMarginsPresetName: any
		/**
		 * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.pane?view=openxml-2.8.1
		 * @typedef {Object} PaneOptions
		 * @property {string} activePane=bottomRight Active Pane. The pane that is active.
		 * @property {string} state Split State. Indicates whether the pane has horizontal / vertical splits,
		 * and whether those splits are frozen.
		 * @property {string} topLeftCell Top Left Visible Cell. Location of the top left visible cell in the bottom
		 * right pane (when in Left-To-Right mode).
		 * @property {number} xSplit (Horizontal Split Position) Horizontal position of the split, in 1/20th of a point;
		 * 0 (zero) if none. If the pane is frozen, this value indicates the number of columns visible in the top pane.
		 * @property {number} ySplit (Vertical Split Position) Vertical position of the split, in 1/20th of a point; 0
		 * (zero) if none. If the pane is frozen, this value indicates the number of rows visible in the left pane.
		 */ /**
		 * Gets sheet view pane options
		 * @return {PaneOptions} sheet view pane options
		 */ /**
		 * Sets sheet view pane options
		 * @param {PaneOptions|null|undefined} paneOptions sheet view pane options
		 * @return {Sheet} The sheet
		 */
		panes(...args: any[]): Sheet
		/**
		 * Freezes Panes for this sheet.
		 * @param {number} xSplit the number of columns visible in the top pane. 0 (zero) if none.
		 * @param {number} ySplit the number of rows visible in the left pane. 0 (zero) if none.
		 * @return {Sheet} The sheet
		 */ /**
		 * freezes Panes for this sheet.
		 * @param {string} topLeftCell Top Left Visible Cell. Location of the top left visible cell in the bottom
		 * right pane (when in Left-To-Right mode).
		 * @return {Sheet} The sheet
		 */
		freezePanes(...args: any[]): Sheet
		/**
		 * Splits Panes for this sheet.
		 * @param {number} xSplit (Horizontal Split Position) Horizontal position of the split,
		 * in 1/20th of a point; 0 (zero) if none.
		 * @param {number} ySplit (Vertical Split Position) VVertical position of the split,
		 * in 1/20th of a point; 0 (zero) if none.
		 * @return {Sheet} The sheet
		 */
		splitPanes(xSplit: number, ySplit: number): Sheet
		/**
		 * resets to default sheet view panes.
		 * @return {Sheet} The sheet
		 */
		resetPanes(): Sheet
		/**
		 * Get a helper function to check that the attribute name provided is supported.
		 * @param {string} functionName - Name of the parent function.
		 * @param {array} supportedAttributeNames - Array of supported attribute name strings.
		 * @returns {function} The helper function, which takes an attribute name. If the array of supported attribute names does not contain the given attribute name, then an Error is thrown.
		 * @ignore
		 */
		_getCheckAttributeNameHelper(
			functionName: string,
			supportedAttributeNames: any[],
		): Function
		/**
		 * Get a helper function to check that the value is of the expected type.
		 * @param {string} functionName - Name of the parent function.
		 * @param {string} valueType - A string produced by typeof.
		 * @returns {function} The helper function, which takes a value. If the value type is not expected, a TypeError is thrown.
		 * @ignore
		 */
		_getCheckTypeHelper(functionName: string, valueType: string): Function
		/**
		 * Get a helper function to check that the value is within the expected range.
		 * @param {string} functionName - Name of the parent function.
		 * @param {undefined|number} valueMin - The minimum value of the range. This value is range-inclusive.
		 * @param {undefined|number} valueMax - The maximum value of the range. This value is range-exclusive.
		 * @returns {function} The helper function, which takes a value. If the value type is not 'number', a TypeError is thrown. If the value is not within the range, a RangeError is thrown.
		 * @ignore
		 */
		_getCheckRangeHelper(
			functionName: string,
			valueMin: undefined | number,
			valueMax: undefined | number,
		): Function
		/**
		 * Get the sheet view node if it exists or create it if it doesn't.
		 * @returns {{}} The sheet view node.
		 * @private
		 */
		private _getOrCreateSheetViewNode
		/**
		 * Initializes the sheet.
		 * @param {Workbook} workbook - The parent workbook.
		 * @param {{}} idNode - The sheet ID node (from the parent workbook).
		 * @param {{}} node - The sheet node.
		 * @param {{}} [relationshipsNode] - The optional sheet relationships node.
		 * @returns {undefined}
		 * @private
		 */
		private _init
		_workbook: Workbook
		_idNode: {}
		_node: {}
		_mergeCells: {}
		_dataValidations: {}
		_hyperlinks: {}
		_relationships: Relationships
		_rows: any[]
		_sheetDataNode: {}
		_columns: any[]
		_colsNode: {}
		_colNodes: any[]
		_sheetPrNode: {}
		_mergeCellsNode: {}
		_dataValidationsNode: {}
		_hyperlinksNode: {}
		_printOptionsNode: {}
		_pageMarginsPresets: {
			normal: {
				left: number
				right: number
				top: number
				bottom: number
				header: number
				footer: number
			}
			wide: {
				left: number
				right: number
				top: number
				bottom: number
				header: number
				footer: number
			}
			narrow: {
				left: number
				right: number
				top: number
				bottom: number
				header: number
				footer: number
			}
		}
		_pageMarginsNode: {}
		_pageBreaks: {
			colBreaks: PageBreaks
			rowBreaks: PageBreaks
		}
	}

	export { Style }
	/**
	 * A style.
	 * @ignore
	 */
	class Style {
		/**
		 * Creates a new instance of _Style.
		 * @constructor
		 * @param {StyleSheet} styleSheet - The styleSheet.
		 * @param {number} id - The style ID.
		 * @param {{}} xfNode - The xf node.
		 * @param {{}} fontNode - The font node.
		 * @param {{}} fillNode - The fill node.
		 * @param {{}} borderNode - The border node.
		 */
		constructor(
			styleSheet: StyleSheet,
			id: number,
			xfNode: {},
			fontNode: {},
			fillNode: {},
			borderNode: {},
		)
		_styleSheet: StyleSheet
		_id: number
		_xfNode: {}
		_fontNode: {}
		_fillNode: {}
		_borderNode: {}
		/**
		 * Gets the style ID.
		 * @returns {number} The ID.
		 */
		id(): number
		/**
		 * Gets or sets a style.
		 * @param {string} name - The style name.
		 * @param {*} [value] - The value to set.
		 * @returns {*|Style} The value if getting or the style if setting.
		 */
		style(...args: any[]): any | Style
		_getColor(
			node: any,
			name: any,
		): {
			rgb: any
			theme: any
			tint: any
		}
		_setColor(node: any, name: any, color: any): void
		_get_bold(): boolean
		_set_bold(bold: any): void
		_get_italic(): boolean
		_set_italic(italic: any): void
		_get_underline(): any
		_set_underline(underline: any): void
		_get_strikethrough(): boolean
		_set_strikethrough(strikethrough: any): void
		_getFontVerticalAlignment(): any
		_setFontVerticalAlignment(alignment: any): void
		_get_subscript(): boolean
		_set_subscript(subscript: any): void
		_get_superscript(): boolean
		_set_superscript(superscript: any): void
		_get_fontSize(): any
		_set_fontSize(size: any): void
		_get_fontFamily(): any
		_set_fontFamily(family: any): void
		_get_fontGenericFamily(): any
		_set_fontGenericFamily(genericFamily: any): void
		_get_fontColor(): {
			rgb: any
			theme: any
			tint: any
		}
		_set_fontColor(color: any): void
		_get_fontScheme(): any
		_set_fontScheme(scheme: any): void
		_get_horizontalAlignment(): any
		_set_horizontalAlignment(alignment: any): void
		_get_justifyLastLine(): boolean
		_set_justifyLastLine(justifyLastLine: any): void
		_get_indent(): any
		_set_indent(indent: any): void
		_get_verticalAlignment(): any
		_set_verticalAlignment(alignment: any): void
		_get_wrapText(): boolean
		_set_wrapText(wrapText: any): void
		_get_shrinkToFit(): boolean
		_set_shrinkToFit(shrinkToFit: any): void
		_get_textDirection(): any
		_set_textDirection(textDirection: any): void
		_getTextRotation(): any
		_setTextRotation(textRotation: any): void
		_get_textRotation(): any
		_set_textRotation(textRotation: any): void
		_get_angleTextCounterclockwise(): boolean
		_set_angleTextCounterclockwise(value: any): void
		_get_angleTextClockwise(): boolean
		_set_angleTextClockwise(value: any): void
		_get_rotateTextUp(): boolean
		_set_rotateTextUp(value: any): void
		_get_rotateTextDown(): boolean
		_set_rotateTextDown(value: any): void
		_get_verticalText(): boolean
		_set_verticalText(value: any): void
		_get_fill():
			| {
					type: string
					gradientType: any
					stops: any
			  }
			| {
					type: string
					color: {
						rgb: any
						theme: any
						tint: any
					}
					pattern?: undefined
					foreground?: undefined
					background?: undefined
			  }
			| {
					type: string
					pattern: any
					foreground: {
						rgb: any
						theme: any
						tint: any
					}
					background: {
						rgb: any
						theme: any
						tint: any
					}
					color?: undefined
			  }
		_set_fill(fill: any): void
		_getBorder(): {}
		_setBorder(settings: any): void
		_get_border(): {}
		_set_border(settings: any): void
		_get_borderColor(): any
		_set_borderColor(color: any): void
		_get_borderStyle(): any
		_set_borderStyle(style: any): void
		_get_diagonalBorderDirection(): any
		_set_diagonalBorderDirection(direction: any): void
		_get_numberFormat(): any
		_set_numberFormat(formatCode: any): void
	}

	export { StyleSheet }
	/**
	 * A style sheet.
	 * @ignore
	 */
	class StyleSheet {
		/**
		 * Creates an instance of _StyleSheet.
		 * @param {string} node - The style sheet node
		 */
		constructor(node: string)
		/**
		 * Create a style.
		 * @param {number} [sourceId] - The source style ID to copy, if provided.
		 * @returns {Style} The style.
		 */
		createStyle(sourceId?: number): Style
		/**
		 * Get the number format code for a given ID.
		 * @param {number} id - The number format ID.
		 * @returns {string} The format code.
		 */
		getNumberFormatCode(id: number): string
		/**
		 * Get the nuumber format ID for a given code.
		 * @param {string} code - The format code.
		 * @returns {number} The number format ID.
		 */
		getNumberFormatId(code: string): number
		/**
		 * Convert the style sheet to an XML object.
		 * @returns {{}} The XML form.
		 * @ignore
		 */
		toXml(): {}
		/**
		 * Cache the number format codes
		 * @returns {undefined}
		 * @private
		 */
		private _cacheNumberFormats
		_numberFormatCodesById: {}
		_numberFormatIdsByCode: {}
		_nextNumFormatId: any
		/**
		 * Initialize the style sheet node.
		 * @param {{}} [node] - The node
		 * @returns {undefined}
		 * @private
		 */
		private _init
		_node: {}
		_numFmtsNode: {}
		_fontsNode: {}
		_fillsNode: {}
		_bordersNode: {}
		_cellXfsNode: {}
	}

	export { Workbook }
	/**
	 * A workbook.
	 */
	class Workbook {
		/**
		 * Create a new blank workbook.
		 * @returns {Promise.<Workbook>} The workbook.
		 * @ignore
		 */
		static fromBlankAsync(): Promise<Workbook>
		/**
		 * Loads a workbook from a data object. (Supports any supported [JSZip data types]{@link https://stuk.github.io/jszip/documentation/api_jszip/load_async.html}.)
		 * @param {string|Array.<number>|ArrayBuffer|Uint8Array|Buffer|Blob|Promise.<*>} data - The data to load.
		 * @param {{}} [opts] - Options
		 * @returns {Promise.<Workbook>} The workbook.
		 * @ignore
		 */
		static fromDataAsync(
			data:
				| string
				| Array<number>
				| ArrayBuffer
				| Uint8Array
				| Buffer
				| Blob
				| Promise<any>,
			opts?: {},
		): Promise<Workbook>
		/**
		 * Loads a workbook from file.
		 * @param {string} path - The path to the workbook.
		 * @param {{}} [opts] - Options
		 * @returns {Promise.<Workbook>} The workbook.
		 * @ignore
		 */
		static fromFileAsync(path: string, opts?: {}): Promise<Workbook>
		/**
		 * Get the active sheet in the workbook.
		 * @returns {Sheet} The active sheet.
		 */ /**
		 * Set the active sheet in the workbook.
		 * @param {Sheet|string|number} sheet - The sheet or name of sheet or index of sheet to activate. The sheet must not be hidden.
		 * @returns {Workbook} The workbook.
		 */
		activeSheet(...args: any[]): Workbook
		_activeSheet: any
		/**
		 * Add a new sheet to the workbook.
		 * @param {string} name - The name of the sheet. Must be unique, less than 31 characters, and may not contain the following characters: \ / * [ ] : ?
		 * @param {number|string|Sheet} [indexOrBeforeSheet] The index to move the sheet to or the sheet (or name of sheet) to move this sheet before. Omit this argument to move to the end of the workbook.
		 * @returns {Sheet} The new sheet.
		 */
		addSheet(name: string, indexOrBeforeSheet?: number | string | Sheet): Sheet
		/**
		 * Gets a defined name scoped to the workbook.
		 * @param {string} name - The defined name.
		 * @returns {undefined|string|Cell|Range|Row|Column} What the defined name refers to or undefined if not found. Will return the string formula if not a Row, Column, Cell, or Range.
		 */ /**
		 * Set a defined name scoped to the workbook.
		 * @param {string} name - The defined name.
		 * @param {string|Cell|Range|Row|Column} refersTo - What the name refers to.
		 * @returns {Workbook} The workbook.
		 */
		definedName(...args: any[]): Workbook
		/**
		 * Delete a sheet from the workbook.
		 * @param {Sheet|string|number} sheet - The sheet or name of sheet or index of sheet to move.
		 * @returns {Workbook} The workbook.
		 */
		deleteSheet(sheet: Sheet | string | number): Workbook
		/**
		 * Find the given pattern in the workbook and optionally replace it.
		 * @param {string|RegExp} pattern - The pattern to look for. Providing a string will result in a case-insensitive substring search. Use a RegExp for more sophisticated searches.
		 * @param {string|function} [replacement] - The text to replace or a String.replace callback function. If pattern is a string, all occurrences of the pattern in each cell will be replaced.
		 * @returns {boolean} A flag indicating if the pattern was found.
		 */
		find(pattern: string | RegExp, replacement?: string | Function): boolean
		/**
		 * Move a sheet to a new position.
		 * @param {Sheet|string|number} sheet - The sheet or name of sheet or index of sheet to move.
		 * @param {number|string|Sheet} [indexOrBeforeSheet] The index to move the sheet to or the sheet (or name of sheet) to move this sheet before. Omit this argument to move to the end of the workbook.
		 * @returns {Workbook} The workbook.
		 */
		moveSheet(
			sheet: Sheet | string | number,
			indexOrBeforeSheet?: number | string | Sheet,
		): Workbook
		/**
		 * Generates the workbook output.
		 * @param {string} [type] - The type of the data to return: base64, binarystring, uint8array, arraybuffer, blob, nodebuffer. Defaults to 'nodebuffer' in Node.js and 'blob' in browsers.
		 * @returns {Promise<string|Uint8Array|ArrayBuffer|Blob|Buffer>} The data.
		 */ /**
		 * Generates the workbook output.
		 * @param {{}} [opts] Options
		 * @param {string} [opts.type] - The type of the data to return: base64, binarystring, uint8array, arraybuffer, blob, nodebuffer. Defaults to 'nodebuffer' in Node.js and 'blob' in browsers.
		 * @param {string} [opts.password] - The password to use to encrypt the workbook.
		 * @returns {Promise<string|Uint8Array|ArrayBuffer|Blob|Buffer>} The data.
		 */
		outputAsync(opts?: {}): Promise<
			string | Uint8Array | ArrayBuffer | Blob | Buffer
		>
		/**
		 * Gets the sheet with the provided name or index (0-based).
		 * @param {string|number} sheetNameOrIndex - The sheet name or index.
		 * @returns {Sheet|undefined} The sheet or undefined if not found.
		 */
		sheet(sheetNameOrIndex: string | number): Sheet | undefined
		/**
		 * Get an array of all the sheets in the workbook.
		 * @returns {Array.<Sheet>} The sheets.
		 */
		sheets(): Array<Sheet>
		/**
		 * Gets an individual property.
		 * @param {string} name - The name of the property.
		 * @returns {*} The property.
		 */ /**
		 * Gets multiple properties.
		 * @param {Array.<string>} names - The names of the properties.
		 * @returns {object.<string, *>} Object whose keys are the property names and values are the properties.
		 */ /**
		 * Sets an individual property.
		 * @param {string} name - The name of the property.
		 * @param {*} value - The value to set.
		 * @returns {Workbook} The workbook.
		 */ /**
		 * Sets multiple properties.
		 * @param {object.<string, *>} properties - Object whose keys are the property names and values are the values to set.
		 * @returns {Workbook} The workbook.
		 */
		property(...args: any[]): Workbook
		/**
		 * Get access to core properties object
		 * @returns {CoreProperties} The core properties.
		 */
		properties(): CoreProperties
		/**
		 * Write the workbook to file. (Not supported in browsers.)
		 * @param {string} path - The path of the file to write.
		 * @param {{}} [opts] - Options
		 * @param {string} [opts.password] - The password to encrypt the workbook.
		 * @returns {Promise.<undefined>} A promise.
		 */
		toFileAsync(path: string, opts?: {}): Promise<undefined>
		/**
		 * Gets a scoped defined name.
		 * @param {Sheet} sheetScope - The sheet the name is scoped to. Use undefined for workbook scope.
		 * @param {string} name - The defined name.
		 * @returns {undefined|Cell|Range|Row|Column} What the defined name refers to.
		 * @ignore
		 */ /**
		 * Sets a scoped defined name.
		 * @param {Sheet} sheetScope - The sheet the name is scoped to. Use undefined for workbook scope.
		 * @param {string} name - The defined name.
		 * @param {undefined|Cell|Range|Row|Column} refersTo - What the defined name refers to.
		 * @returns {Workbook} The workbook.
		 * @ignore
		 */
		scopedDefinedName(
			sheetScope: Sheet,
			name: string,
			refersTo: undefined | Cell | Range | Row | Column,
			...args: any[]
		): Workbook
		/**
		 * Get the shared strings table.
		 * @returns {SharedStrings} The shared strings table.
		 * @ignore
		 */
		sharedStrings(): SharedStrings
		/**
		 * Get the style sheet.
		 * @returns {StyleSheet} The style sheet.
		 * @ignore
		 */
		styleSheet(): StyleSheet
		/**
		 * Add a new sheet to the workbook.
		 *
		 * **WARN:** this function has limits:  if you clone a sheet with some images or other things link outside the Sheet object, these things in the cloned sheet will be locked when you open in MS Excel app.
		 * @param {Sheet} from - The sheet to be cloned.
		 * @param {string} name - The name of the new sheet. Must be unique, less than 31 characters, and may not contain the following characters: \ / * [ ] : ?
		 * @param {number|string|Sheet} [indexOrBeforeSheet] The index to move the sheet to or the sheet (or name of sheet) to move this sheet before. Omit this argument to move to the end of the workbook.
		 * @returns {Sheet} The new sheet.
		 */
		cloneSheet(
			from: Sheet,
			name: string,
			indexOrBeforeSheet?: number | string | Sheet,
		): Sheet
		/**
		 * Add a new sheet to the workbook.
		 * @param {string} name - The name of the sheet. Must be unique, less than 31 characters, and may not contain the following characters: \ / * [ ] : ?
		 * @param {number|string|Sheet} [indexOrBeforeSheet] The index to move the sheet to or the sheet (or name of sheet) to move this sheet before. Omit this argument to move to the end of the workbook.
		 * @param {callback} [getTemplateNodes] optional callback function for template nodes
		 * @returns {Sheet} The new sheet.
		 * @private
		 */
		private _addSheet
		/**
		 * Initialize the workbook. (This is separated from the constructor to ease testing.)
		 * @param {string|ArrayBuffer|Uint8Array|Buffer|Blob} data - The data to load.
		 * @param {{}} [opts] - Options
		 * @param {boolean} [opts.base64=false] - No used unless input is a string. True if the input string is base64 encoded, false for binary.
		 * @returns {Promise.<Workbook>} The workbook.
		 * @private
		 */
		private _initAsync
		_maxSheetId: any
		_sheets: any[]
		_zip: any
		_contentTypes: ContentTypes
		_appProperties: AppProperties
		_coreProperties: CoreProperties
		_relationships: Relationships
		_sharedStrings: SharedStrings
		_styleSheet: StyleSheet
		_node: any
		_sheetsNode: {}
		/**
		 * Parse files out of zip into XML node objects.
		 * @param {Array.<string>} names - The file names to parse.
		 * @returns {Promise.<Array.<{}>>} An array of the parsed objects.
		 * @private
		 */
		private _parseNodesAsync
		/**
		 * Parse the sheet references out so we can reorder freely.
		 * @returns {undefined}
		 * @private
		 */
		private _parseSheetRefs
		/**
		 * Set the proper sheet references in the XML.
		 * @returns {undefined}
		 * @private
		 */
		private _setSheetRefs
		/**
		 * Convert buffer to desired output format
		 * @param {Buffer} buffer - The buffer
		 * @param {string} type - The type to convert to: buffer/nodebuffer, blob, base64, binarystring, uint8array, arraybuffer
		 * @returns {Buffer|Blob|string|Uint8Array|ArrayBuffer} The output
		 * @private
		 */
		private _convertBufferToOutput
		/**
		 * Convert input to buffer
		 * @param {Buffer|Blob|string|Uint8Array|ArrayBuffer} input - The input
		 * @param {boolean} [base64=false] - Only applies if input is a string. If true, the string is base64 encoded, false for binary
		 * @returns {Promise.<Buffer>} The buffer.
		 * @private
		 */
		private _convertInputToBufferAsync
	}
	namespace Workbook {
		let MIME_TYPE: string
	}

	export default XlsxPopulate
	/**
	 * xlsx-populate namespace.
	 * @namespace
	 */
	class XlsxPopulate {
		/**
		 * Convert a date to a number for Excel.
		 * @param {Date} date - The date.
		 * @returns {number} The number.
		 */
		static dateToNumber(date: Date): number
		/**
		 * Create a new blank workbook.
		 * @returns {Promise.<Workbook>} The workbook.
		 */
		static fromBlankAsync(): Promise<Workbook>
		/**
		 * Loads a workbook from a data object. (Supports any supported [JSZip data types]{@link https://stuk.github.io/jszip/documentation/api_jszip/load_async.html}.)
		 * @param {string|Array.<number>|ArrayBuffer|Uint8Array|Buffer|Blob|Promise.<*>} data - The data to load.
		 * @param {{}} [opts] - Options
		 * @param {string} [opts.password] - The password to decrypt the workbook.
		 * @returns {Promise.<Workbook>} The workbook.
		 */
		static fromDataAsync(
			data:
				| string
				| Array<number>
				| ArrayBuffer
				| Uint8Array
				| Buffer
				| Blob
				| Promise<any>,
			opts?: {},
		): Promise<Workbook>
		/**
		 * Loads a workbook from file.
		 * @param {string} path - The path to the workbook.
		 * @param {{}} [opts] - Options
		 * @param {string} [opts.password] - The password to decrypt the workbook.
		 * @returns {Promise.<Workbook>} The workbook.
		 */
		static fromFileAsync(path: string, opts?: {}): Promise<Workbook>
		/**
		 * Convert an Excel number to a date.
		 * @param {number} number - The number.
		 * @returns {Date} The date.
		 */
		static numberToDate(number: number): Date
		static set Promise(arg: Promise<any>)
		/**
		 * The Promise library.
		 * @type {Promise}
		 */
		static get Promise(): Promise<any>
	}
	namespace XlsxPopulate {
		export let MIME_TYPE: string
		export { FormulaError }
		export { RichText }
	}

	export { XmlBuilder }
	/**
	 * XML document builder.
	 * @private
	 */
	class XmlBuilder {
		/**
		 * Build an XML string from the JSON object.
		 * @param {{}} node - The node.
		 * @returns {string} The XML text.
		 */
		build(node: {}): string
		_i: number
		/**
		 * Build the XML string. (This is the internal recursive method.)
		 * @param {{}} node - The node.
		 * @param {string} xml - The initial XML doc string.
		 * @returns {string} The generated XML element.
		 * @private
		 */
		private _build
		_c: string
		/**
		 * Escape a string for use in XML by replacing &, ", ', <, and >.
		 * @param {*} value - The value to escape.
		 * @param {boolean} [isAttribute] - A flag indicating if this is an attribute.
		 * @returns {string} The escaped string.
		 * @private
		 */
		private _escapeString
	}

	export { XmlParser }
	/**
	 * XML parser.
	 * @private
	 */
	class XmlParser {
		/**
		 * Parse the XML text into a JSON object.
		 * @param {string} xmlText - The XML text.
		 * @returns {{}} The JSON object.
		 */
		parseAsync(xmlText: string): {}
		/**
		 * Convert the string to a number if it looks like one.
		 * @param {string} str - The string to convert.
		 * @returns {string|number} The number if converted or the string if not.
		 * @private
		 */
		private _covertToNumberIfNumber
	}

	/**
	 * Convert a column name to a number.
	 * @param {string} name - The column name.
	 * @returns {number} The number.
	 */
	export function columnNameToNumber(name: string): number
	/**
	 * Convert a column number to a name.
	 * @param {number} number - The column number.
	 * @returns {string} The name.
	 */
	export function columnNumberToName(number: number): string
	/**
	 * Convert an address to a reference object.
	 * @param {string} address - The address.
	 * @returns {{}} The reference object.
	 */
	export function fromAddress(address: string): {}
	/**
	 * Convert a reference object to an address.
	 * @param {{}} ref - The reference object.
	 * @returns {string} The address.
	 */
	export function toAddress(ref: {}): string

	declare module 'blank' {
		function _exports(): Buffer
		export { _exports }
	}
	declare module 'colorIndexes' {
		const _exports: string[]
		export { _exports }
	}
	declare module 'dateConverter' {
		/**
		 * Convert a date to a number for Excel.
		 * @param {Date} date - The date.
		 * @returns {number} The number.
		 */
		export function dateToNumber(date: Date): number
		/**
		 * Convert a number to a date.
		 * @param {number} number - The number.
		 * @returns {Date} The date.
		 */
		export function numberToDate(number: number): Date
	}
	declare module 'externals' {
		export let Promise: Promise<any>
	}
	declare module 'regexify' {
		function _exports(pattern: RegExp | string): RegExp
		export { _exports }
	}
	declare module 'xmlq' {
		/**
		 * Append a child to the node.
		 * @param {{}} node - The parent node.
		 * @param {{}} child - The child node.
		 * @returns {undefined}
		 */
		export function appendChild(node: {}, child: {}): undefined
		/**
		 * Append a child if one with the given name is not found.
		 * @param {{}} node - The parent node.
		 * @param {string} name - The child node name.
		 * @returns {{}} The child.
		 */
		export function appendChildIfNotFound(node: {}, name: string): {}
		/**
		 * Find a child with the given name.
		 * @param {{}} node - The parent node.
		 * @param {string} name - The name to find.
		 * @returns {undefined|{}} The child if found.
		 */
		export function findChild(node: {}, name: string): {}
		/**
		 * Get an attribute from a child node.
		 * @param {{}} node - The parent node.
		 * @param {string} name - The name of the child node.
		 * @param {string} attribute - The name of the attribute.
		 * @returns {undefined|*} The value of the attribute if found.
		 */
		export function getChildAttribute(
			node: {},
			name: string,
			attribute: string,
		): any
		/**
		 * Returns a value indicating whether the node has a child with the given name.
		 * @param {{}} node - The parent node.
		 * @param {string} name - The name of the child node.
		 * @returns {boolean} True if found, false otherwise.
		 */
		export function hasChild(node: {}, name: string): boolean
		/**
		 * Insert the child after the specified node.
		 * @param {{}} node - The parent node.
		 * @param {{}} child - The child node.
		 * @param {{}} after - The node to insert after.
		 * @returns {undefined}
		 */
		export function insertAfter(node: {}, child: {}, after: {}): undefined
		/**
		 * Insert the child before the specified node.
		 * @param {{}} node - The parent node.
		 * @param {{}} child - The child node.
		 * @param {{}} before - The node to insert before.
		 * @returns {undefined}
		 */
		export function insertBefore(node: {}, child: {}, before: {}): undefined
		/**
		 * Insert a child node in the correct order.
		 * @param {{}} node - The parent node.
		 * @param {{}} child - The child node.
		 * @param {Array.<string>} nodeOrder - The order of the node names.
		 * @returns {undefined}
		 */
		export function insertInOrder(
			node: {},
			child: {},
			nodeOrder: string[],
		): undefined
		/**
		 * Check if the node is empty (no attributes and no children).
		 * @param {{}} node - The node.
		 * @returns {boolean} True if empty, false otherwise.
		 */
		export function isEmpty(node: {}): boolean
		/**
		 * Remove a child node.
		 * @param {{}} node - The parent node.
		 * @param {string|{}} child - The child node or name of node.
		 * @returns {undefined}
		 */
		export function removeChild(node: {}, child: string | {}): undefined
		/**
		 * Set/unset the attributes on the node.
		 * @param {{}} node - The node.
		 * @param {{}} attributes - The attributes to set.
		 * @returns {undefined}
		 */
		export function setAttributes(node: {}, attributes: {}): undefined
		/**
		 * Set attributes on a child node, creating the child if necessary.
		 * @param {{}} node - The parent node.
		 * @param {string} name - The name of the child node.
		 * @param {{}} attributes - The attributes to set.
		 * @returns {{}} The child.
		 */
		export function setChildAttributes(
			node: {},
			name: string,
			attributes: {},
		): {}
		/**
		 * Remove the child node if empty.
		 * @param {{}} node - The parent node.
		 * @param {string|{}} child - The child or name of child node.
		 * @returns {undefined}
		 */
		export function removeChildIfEmpty(node: {}, child: string | {}): undefined
	}
}
