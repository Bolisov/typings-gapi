// Type definitions for Google Google Sheets API v4
// Project: https://developers.google.com/sheets/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.sheets {
    
    interface UpdateDimensionPropertiesRequest {
        // Properties to update.
        properties?: DimensionProperties,
        // The rows or columns to update.
        range?: DimensionRange,
        // The fields that should be updated.  At least one field must be specified.
        // The root `properties` is implied and should not be specified.
        // A single `"*"` can be used as short-hand for listing every field.
        fields?: string,
    }
    
    interface SourceAndDestination {
        // The number of rows or columns that data should be filled into.
        // Positive numbers expand beyond the last row or last column
        // of the source.  Negative numbers expand before the first row
        // or first column of the source.
        fillLength?: number,
        // The location of the data to use as the source of the autofill.
        source?: GridRange,
        // The dimension that data should be filled into.
        dimension?: string,
    }
    
    interface OrgChartSpec {
        // The data containing the tooltip for the corresponding node.  A blank value
        // results in no tooltip being displayed for the node.
        // This field is optional.
        tooltips?: ChartData,
        // The color of the selected org chart nodes.
        selectedNodeColor?: Color,
        // The data containing the label of the parent for the corresponding node.
        // A blank value indicates that the node has no parent and is a top-level
        // node.
        // This field is optional.
        parentLabels?: ChartData,
        // The size of the org chart nodes.
        nodeSize?: string,
        // The data containing the labels for all the nodes in the chart.  Labels
        // must be unique.
        labels?: ChartData,
        // The color of the org chart nodes.
        nodeColor?: Color,
    }
    
    interface FilterView {
        // The sort order per column. Later specifications are used when values
        // are equal in the earlier specifications.
        sortSpecs?: SortSpec[],        
        // The named range this filter view is backed by, if any.
        // 
        // When writing, only one of range or named_range_id
        // may be set.
        namedRangeId?: string,
        // The ID of the filter view.
        filterViewId?: number,
        // The criteria for showing/hiding values per column.
        // The map's key is the column index, and the value is the criteria for
        // that column.
        criteria?: any,
        // The name of the filter view.
        title?: string,
        // The range this filter view covers.
        // 
        // When writing, only one of range or named_range_id
        // may be set.
        range?: GridRange,
    }
    
    interface BandingProperties {
        // The first color that is alternating. (Required)
        firstBandColor?: Color,
        // The second color that is alternating. (Required)
        secondBandColor?: Color,
        // The color of the last row or column. If this field is not set, the last
        // row or column will be filled with either first_band_color or
        // second_band_color, depending on the color of the previous row or
        // column.
        footerColor?: Color,
        // The color of the first row or column. If this field is set, the first
        // row or column will be filled with this color and the colors will
        // alternate between first_band_color and second_band_color starting
        // from the second row or column. Otherwise, the first row or column will be
        // filled with first_band_color and the colors will proceed to alternate
        // as they normally would.
        headerColor?: Color,
    }
    
    interface CandlestickSeries {
        // The data of the CandlestickSeries.
        data?: ChartData,
    }
    
    interface BasicFilter {
        // The criteria for showing/hiding values per column.
        // The map's key is the column index, and the value is the criteria for
        // that column.
        criteria?: any,
        // The range the filter covers.
        range?: GridRange,
        // The sort order per column. Later specifications are used when values
        // are equal in the earlier specifications.
        sortSpecs?: SortSpec[],        
    }
    
    interface AddProtectedRangeResponse {
        // The newly added protected range.
        protectedRange?: ProtectedRange,
    }
    
    interface HistogramChartSpec {
        // The outlier percentile is used to ensure that outliers do not adversely
        // affect the calculation of bucket sizes.  For example, setting an outlier
        // percentile of 0.05 indicates that the top and bottom 5% of values when
        // calculating buckets.  The values are still included in the chart, they will
        // be added to the first or last buckets instead of their own buckets.
        // Must be between 0.0 and 0.5.
        outlierPercentile?: number,
        // Whether horizontal divider lines should be displayed between items in each
        // column.
        showItemDividers?: boolean,
        // The series for a histogram may be either a single series of values to be
        // bucketed or multiple series, each of the same length, containing the name
        // of the series followed by the values to be bucketed for that series.
        series?: HistogramSeries[],        
        // The position of the chart legend.
        legendPosition?: string,
        // By default the bucket size (the range of values stacked in a single
        // column) is chosen automatically, but it may be overridden here.
        // E.g., A bucket size of 1.5 results in buckets from 0 - 1.5, 1.5 - 3.0, etc.
        // Cannot be negative.
        // This field is optional.
        bucketSize?: number,
    }
    
    interface UpdateValuesResponse {
        // The number of columns where at least one cell in the column was updated.
        updatedColumns?: number,
        // The spreadsheet the updates were applied to.
        spreadsheetId?: string,
        // The range (in A1 notation) that updates were applied to.
        updatedRange?: string,
        // The number of cells updated.
        updatedCells?: number,
        // The values of the cells after updates were applied.
        // This is only included if the request's `includeValuesInResponse` field
        // was `true`.
        updatedData?: ValueRange,
        // The number of rows where at least one cell in the row was updated.
        updatedRows?: number,
    }
    
    interface ErrorValue {
        // The type of error.
        type?: string,
        // A message with more information about the error
        // (in the spreadsheet's locale).
        message?: string,
    }
    
    interface PivotValue {
        // A custom formula to calculate the value.  The formula must start
        // with an `=` character.
        formula?: string,
        // A function to summarize the value.
        // If formula is set, the only supported values are
        // SUM and
        // CUSTOM.
        // If sourceColumnOffset is set, then `CUSTOM`
        // is not supported.
        summarizeFunction?: string,
        // The column offset of the source range that this value reads from.
        // 
        // For example, if the source was `C10:E15`, a `sourceColumnOffset` of `0`
        // means this value refers to column `C`, whereas the offset `1` would
        // refer to column `D`.
        sourceColumnOffset?: number,
        // A name to use for the value. This is only used if formula was set.
        // Otherwise, the column name is used.
        name?: string,
    }
    
    interface CopySheetToAnotherSpreadsheetRequest {
        // The ID of the spreadsheet to copy the sheet to.
        destinationSpreadsheetId?: string,
    }
    
    interface PivotGroupSortValueBucket {
        // Determines the bucket from which values are chosen to sort.
        // 
        // For example, in a pivot table with one row group & two column groups,
        // the row group can list up to two values. The first value corresponds
        // to a value within the first column group, and the second value
        // corresponds to a value in the second column group.  If no values
        // are listed, this would indicate that the row should be sorted according
        // to the "Grand Total" over the column groups. If a single value is listed,
        // this would correspond to using the "Total" of that bucket.
        buckets?: ExtendedValue[],        
        // The offset in the PivotTable.values list which the values in this
        // grouping should be sorted by.
        valuesIndex?: number,
    }
    
    interface CandlestickChartSpec {
        // The Candlestick chart data.
        // Only one CandlestickData is supported.
        data?: CandlestickData[],        
        // The domain data (horizontal axis) for the candlestick chart.  String data
        // will be treated as discrete labels, other data will be treated as
        // continuous values.
        domain?: CandlestickDomain,
    }
    
    interface CandlestickData {
        // The range data (vertical axis) for the high/maximum value for each
        // candle. This is the top of the candle's center line.
        highSeries?: CandlestickSeries,
        // The range data (vertical axis) for the close/final value for each candle.
        // This is the top of the candle body.  If greater than the open value the
        // candle will be filled.  Otherwise the candle will be hollow.
        closeSeries?: CandlestickSeries,
        // The range data (vertical axis) for the low/minimum value for each candle.
        // This is the bottom of the candle's center line.
        lowSeries?: CandlestickSeries,
        // The range data (vertical axis) for the open/initial value for each
        // candle. This is the bottom of the candle body.  If less than the close
        // value the candle will be filled.  Otherwise the candle will be hollow.
        openSeries?: CandlestickSeries,
    }
    
    interface EmbeddedObjectPosition {
        // If true, the embedded object will be put on a new sheet whose ID
        // is chosen for you. Used only when writing.
        newSheet?: boolean,
        // The position at which the object is overlaid on top of a grid.
        overlayPosition?: OverlayPosition,
        // The sheet this is on. Set only if the embedded object
        // is on its own sheet. Must be non-negative.
        sheetId?: number,
    }
    
    interface DeleteProtectedRangeRequest {
        // The ID of the protected range to delete.
        protectedRangeId?: number,
    }
    
    interface AutoFillRequest {
        // The range to autofill. This will examine the range and detect
        // the location that has data and automatically fill that data
        // in to the rest of the range.
        range?: GridRange,
        // True if we should generate data with the "alternate" series.
        // This differs based on the type and amount of source data.
        useAlternateSeries?: boolean,
        // The source and destination areas to autofill.
        // This explicitly lists the source of the autofill and where to
        // extend that data.
        sourceAndDestination?: SourceAndDestination,
    }
    
    interface GradientRule {
        // An optional midway interpolation point.
        midpoint?: InterpolationPoint,
        // The final interpolation point.
        maxpoint?: InterpolationPoint,
        // The starting interpolation point.
        minpoint?: InterpolationPoint,
    }
    
    interface SetBasicFilterRequest {
        // The filter to set.
        filter?: BasicFilter,
    }
    
    interface ClearValuesRequest {
    }
    
    interface InterpolationPoint {
        // The color this interpolation point should use.
        color?: Color,
        // How the value should be interpreted.
        type?: string,
        // The value this interpolation point uses.  May be a formula.
        // Unused if type is MIN or
        // MAX.
        value?: string,
    }
    
    interface DeleteEmbeddedObjectRequest {
        // The ID of the embedded object to delete.
        objectId?: number,
    }
    
    interface FindReplaceResponse {
        // The number of non-formula cells changed.
        valuesChanged?: number,
        // The number of occurrences (possibly multiple within a cell) changed.
        // For example, if replacing `"e"` with `"o"` in `"Google Sheets"`, this would
        // be `"3"` because `"Google Sheets"` -> `"Googlo Shoots"`.
        occurrencesChanged?: number,
        // The number of rows changed.
        rowsChanged?: number,
        // The number of sheets changed.
        sheetsChanged?: number,
        // The number of formula cells changed.
        formulasChanged?: number,
    }
    
    interface DeleteSheetRequest {
        // The ID of the sheet to delete.
        sheetId?: number,
    }
    
    interface DuplicateFilterViewRequest {
        // The ID of the filter being duplicated.
        filterId?: number,
    }
    
    interface UpdateConditionalFormatRuleResponse {
        // The index of the new rule.
        newIndex?: number,
        // The new rule that replaced the old rule (if replacing),
        // or the rule that was moved (if moved)
        newRule?: ConditionalFormatRule,
        // The old index of the rule. Not set if a rule was replaced
        // (because it is the same as new_index).
        oldIndex?: number,
        // The old (deleted) rule. Not set if a rule was moved
        // (because it is the same as new_rule).
        oldRule?: ConditionalFormatRule,
    }
    
    interface DuplicateSheetRequest {
        // If set, the ID of the new sheet. If not set, an ID is chosen.
        // If set, the ID must not conflict with any existing sheet ID.
        // If set, it must be non-negative.
        newSheetId?: number,
        // The zero-based index where the new sheet should be inserted.
        // The index of all sheets after this are incremented.
        insertSheetIndex?: number,
        // The name of the new sheet.  If empty, a new name is chosen for you.
        newSheetName?: string,
        // The sheet to duplicate.
        sourceSheetId?: number,
    }
    
    interface ConditionValue {
        // A value the condition is based on.
        // The value will be parsed as if the user typed into a cell.
        // Formulas are supported (and must begin with an `=`).
        userEnteredValue?: string,
        // A relative date (based on the current date).
        // Valid only if the type is
        // DATE_BEFORE,
        // DATE_AFTER,
        // DATE_ON_OR_BEFORE or
        // DATE_ON_OR_AFTER.
        // 
        // Relative dates are not supported in data validation.
        // They are supported only in conditional formatting and
        // conditional filters.
        relativeDate?: string,
    }
    
    interface ExtendedValue {
        // Represents an error.
        // This field is read-only.
        errorValue?: ErrorValue,
        // Represents a formula.
        formulaValue?: string,
        // Represents a boolean value.
        boolValue?: boolean,
        // Represents a string value.
        // Leading single quotes are not included. For example, if the user typed
        // `'123` into the UI, this would be represented as a `stringValue` of
        // `"123"`.
        stringValue?: string,
        // Represents a double value.
        // Note: Dates, Times and DateTimes are represented as doubles in
        // "serial number" format.
        numberValue?: number,
    }
    
    interface AddChartRequest {
        // The chart that should be added to the spreadsheet, including the position
        // where it should be placed. The chartId
        // field is optional; if one is not set, an id will be randomly generated. (It
        // is an error to specify the ID of a chart that already exists.)
        chart?: EmbeddedChart,
    }
    
    interface Spreadsheet {
        // Overall properties of a spreadsheet.
        properties?: SpreadsheetProperties,
        // The named ranges defined in a spreadsheet.
        namedRanges?: NamedRange[],        
        // The sheets that are part of a spreadsheet.
        sheets?: Sheet[],        
        // The ID of the spreadsheet.
        // This field is read-only.
        spreadsheetId?: string,
        // The url of the spreadsheet.
        // This field is read-only.
        spreadsheetUrl?: string,
    }
    
    interface BatchClearValuesResponse {
        // The spreadsheet the updates were applied to.
        spreadsheetId?: string,
        // The ranges that were cleared, in A1 notation.
        // (If the requests were for an unbounded range or a ranger larger
        //  than the bounds of the sheet, this will be the actual ranges
        //  that were cleared, bounded to the sheet's limits.)
        clearedRanges?: string[],        
    }
    
    interface HistogramSeries {
        // The color of the column representing this series in each bucket.
        // This field is optional.
        barColor?: Color,
        // The data for this histogram series.
        data?: ChartData,
    }
    
    interface BandedRange {
        // The range over which these properties are applied.
        range?: GridRange,
        // The id of the banded range.
        bandedRangeId?: number,
        // Properties for column bands. These properties will be applied on a column-
        // by-column basis throughout all the columns in the range. At least one of
        // row_properties or column_properties must be specified.
        columnProperties?: BandingProperties,
        // Properties for row bands. These properties will be applied on a row-by-row
        // basis throughout all the rows in the range. At least one of
        // row_properties or column_properties must be specified.
        rowProperties?: BandingProperties,
    }
    
    interface UpdateProtectedRangeRequest {
        // The fields that should be updated.  At least one field must be specified.
        // The root `protectedRange` is implied and should not be specified.
        // A single `"*"` can be used as short-hand for listing every field.
        fields?: string,
        // The protected range to update with the new properties.
        protectedRange?: ProtectedRange,
    }
    
    interface TextFormat {
        // The font family.
        fontFamily?: string,
        // True if the text has a strikethrough.
        strikethrough?: boolean,
        // True if the text is italicized.
        italic?: boolean,
        // The size of the font.
        fontSize?: number,
        // True if the text is underlined.
        underline?: boolean,
        // The foreground color of the text.
        foregroundColor?: Color,
        // True if the text is bold.
        bold?: boolean,
    }
    
    interface AddSheetResponse {
        // The properties of the newly added sheet.
        properties?: SheetProperties,
    }
    
    interface AddFilterViewResponse {
        // The newly added filter view.
        filter?: FilterView,
    }
    
    interface IterativeCalculationSettings {
        // When iterative calculation is enabled and successive results differ by
        // less than this threshold value, the calculation rounds stop.
        convergenceThreshold?: number,
        // When iterative calculation is enabled, the maximum number of calculation
        // rounds to perform.
        maxIterations?: number,
    }
    
    interface OverlayPosition {
        // The width of the object, in pixels. Defaults to 600.
        widthPixels?: number,
        // The horizontal offset, in pixels, that the object is offset
        // from the anchor cell.
        offsetXPixels?: number,
        // The cell the object is anchored to.
        anchorCell?: GridCoordinate,
        // The height of the object, in pixels. Defaults to 371.
        heightPixels?: number,
        // The vertical offset, in pixels, that the object is offset
        // from the anchor cell.
        offsetYPixels?: number,
    }
    
    interface SpreadsheetProperties {
        // Determines whether and how circular references are resolved with iterative
        // calculation.  Absence of this field means that circular references will
        // result in calculation errors.
        iterativeCalculationSettings?: IterativeCalculationSettings,
        // The default format of all cells in the spreadsheet.
        // CellData.effectiveFormat will not be set if the
        // cell's format is equal to this default format.
        // This field is read-only.
        defaultFormat?: CellFormat,
        // The amount of time to wait before volatile functions are recalculated.
        autoRecalc?: string,
        // The title of the spreadsheet.
        title?: string,
        // The time zone of the spreadsheet, in CLDR format such as
        // `America/New_York`. If the time zone isn't recognized, this may
        // be a custom time zone such as `GMT-07:00`.
        timeZone?: string,
        // The locale of the spreadsheet in one of the following formats:
        // 
        // * an ISO 639-1 language code such as `en`
        // 
        // * an ISO 639-2 language code such as `fil`, if no 639-1 code exists
        // 
        // * a combination of the ISO language code and country code, such as `en_US`
        // 
        // Note: when updating this field, not all locales/languages are supported.
        locale?: string,
    }
    
    interface RepeatCellRequest {
        // The range to repeat the cell in.
        range?: GridRange,
        // The fields that should be updated.  At least one field must be specified.
        // The root `cell` is implied and should not be specified.
        // A single `"*"` can be used as short-hand for listing every field.
        fields?: string,
        // The data to write.
        cell?: CellData,
    }
    
    interface AddChartResponse {
        // The newly added chart.
        chart?: EmbeddedChart,
    }
    
    interface InsertDimensionRequest {
        // Whether dimension properties should be extended from the dimensions
        // before or after the newly inserted dimensions.
        // True to inherit from the dimensions before (in which case the start
        // index must be greater than 0), and false to inherit from the dimensions
        // after.
        // 
        // For example, if row index 0 has red background and row index 1
        // has a green background, then inserting 2 rows at index 1 can inherit
        // either the green or red background.  If `inheritFromBefore` is true,
        // the two new rows will be red (because the row before the insertion point
        // was red), whereas if `inheritFromBefore` is false, the two new rows will
        // be green (because the row after the insertion point was green).
        inheritFromBefore?: boolean,
        // The dimensions to insert.  Both the start and end indexes must be bounded.
        range?: DimensionRange,
    }
    
    interface UpdateSpreadsheetPropertiesRequest {
        // The properties to update.
        properties?: SpreadsheetProperties,
        // The fields that should be updated.  At least one field must be specified.
        // The root 'properties' is implied and should not be specified.
        // A single `"*"` can be used as short-hand for listing every field.
        fields?: string,
    }
    
    interface BatchUpdateValuesRequest {
        // Determines how values in the response should be rendered.
        // The default render option is ValueRenderOption.FORMATTED_VALUE.
        responseValueRenderOption?: string,
        // Determines if the update response should include the values
        // of the cells that were updated. By default, responses
        // do not include the updated values. The `updatedData` field within
        // each of the BatchUpdateValuesResponse.responses will contain
        // the updated values. If the range to write was larger than than the range
        // actually written, the response will include all values in the requested
        // range (excluding trailing empty rows and columns).
        includeValuesInResponse?: boolean,
        // The new values to apply to the spreadsheet.
        data?: ValueRange[],        
        // How the input data should be interpreted.
        valueInputOption?: string,
        // Determines how dates, times, and durations in the response should be
        // rendered. This is ignored if response_value_render_option is
        // FORMATTED_VALUE.
        // The default dateTime render option is
        // DateTimeRenderOption.SERIAL_NUMBER.
        responseDateTimeRenderOption?: string,
    }
    
    interface ProtectedRange {
        // True if the user who requested this protected range can edit the
        // protected area.
        // This field is read-only.
        requestingUserCanEdit?: boolean,
        // The users and groups with edit access to the protected range.
        // This field is only visible to users with edit access to the protected
        // range and the document.
        // Editors are not supported with warning_only protection.
        editors?: Editors,
        // The range that is being protected.
        // The range may be fully unbounded, in which case this is considered
        // a protected sheet.
        // 
        // When writing, only one of range or named_range_id
        // may be set.
        range?: GridRange,
        // The description of this protected range.
        description?: string,
        // The list of unprotected ranges within a protected sheet.
        // Unprotected ranges are only supported on protected sheets.
        unprotectedRanges?: GridRange[],        
        // The named range this protected range is backed by, if any.
        // 
        // When writing, only one of range or named_range_id
        // may be set.
        namedRangeId?: string,
        // The ID of the protected range.
        // This field is read-only.
        protectedRangeId?: number,
        // True if this protected range will show a warning when editing.
        // Warning-based protection means that every user can edit data in the
        // protected range, except editing will prompt a warning asking the user
        // to confirm the edit.
        // 
        // When writing: if this field is true, then editors is ignored.
        // Additionally, if this field is changed from true to false and the
        // `editors` field is not set (nor included in the field mask), then
        // the editors will be set to all the editors in the document.
        warningOnly?: boolean,
    }
    
    interface DimensionProperties {
        // True if this dimension is explicitly hidden.
        hiddenByUser?: boolean,
        // True if this dimension is being filtered.
        // This field is read-only.
        hiddenByFilter?: boolean,
        // The height (if a row) or width (if a column) of the dimension in pixels.
        pixelSize?: number,
    }
    
    interface NamedRange {
        // The ID of the named range.
        namedRangeId?: string,
        // The range this represents.
        range?: GridRange,
        // The name of the named range.
        name?: string,
    }
    
    interface DimensionRange {
        // The dimension of the span.
        dimension?: string,
        // The end (exclusive) of the span, or not set if unbounded.
        endIndex?: number,
        // The start (inclusive) of the span, or not set if unbounded.
        startIndex?: number,
        // The sheet this span is on.
        sheetId?: number,
    }
    
    interface CutPasteRequest {
        // What kind of data to paste.  All the source data will be cut, regardless
        // of what is pasted.
        pasteType?: string,
        // The source data to cut.
        source?: GridRange,
        // The top-left coordinate where the data should be pasted.
        destination?: GridCoordinate,
    }
    
    interface Borders {
        // The right border of the cell.
        right?: Border,
        // The bottom border of the cell.
        bottom?: Border,
        // The top border of the cell.
        top?: Border,
        // The left border of the cell.
        left?: Border,
    }
    
    interface BasicChartSeries {
        // The type of this series. Valid only if the
        // chartType is
        // COMBO.
        // Different types will change the way the series is visualized.
        // Only LINE, AREA,
        // and COLUMN are supported.
        type?: string,
        // The data being visualized in this chart series.
        series?: ChartData,
        // The minor axis that will specify the range of values for this series.
        // For example, if charting stocks over time, the "Volume" series
        // may want to be pinned to the right with the prices pinned to the left,
        // because the scale of trading volume is different than the scale of
        // prices.
        // It is an error to specify an axis that isn't a valid minor axis
        // for the chart's type.
        targetAxis?: string,
    }
    
    interface AutoResizeDimensionsRequest {
        // The dimensions to automatically resize.
        // Only COLUMNS are supported.
        dimensions?: DimensionRange,
    }
    
    interface UpdateBordersRequest {
        // The border to put at the right of the range.
        right?: Border,
        // The range whose borders should be updated.
        range?: GridRange,
        // The horizontal border to put within the range.
        innerHorizontal?: Border,
        // The border to put at the top of the range.
        top?: Border,
        // The border to put at the left of the range.
        left?: Border,
        // The border to put at the bottom of the range.
        bottom?: Border,
        // The vertical border to put within the range.
        innerVertical?: Border,
    }
    
    interface CellFormat {
        // The background color of the cell.
        backgroundColor?: Color,
        // The vertical alignment of the value in the cell.
        verticalAlignment?: string,
        // The padding of the cell.
        padding?: Padding,
        // The direction of the text in the cell.
        textDirection?: string,
        // The borders of the cell.
        borders?: Borders,
        // The rotation applied to text in a cell
        textRotation?: TextRotation,
        // The wrap strategy for the value in the cell.
        wrapStrategy?: string,
        // A format describing how number values should be represented to the user.
        numberFormat?: NumberFormat,
        // How a hyperlink, if it exists, should be displayed in the cell.
        hyperlinkDisplayType?: string,
        // The horizontal alignment of the value in the cell.
        horizontalAlignment?: string,
        // The format of the text in the cell (unless overridden by a format run).
        textFormat?: TextFormat,
    }
    
    interface ClearValuesResponse {
        // The spreadsheet the updates were applied to.
        spreadsheetId?: string,
        // The range (in A1 notation) that was cleared.
        // (If the request was for an unbounded range or a ranger larger
        //  than the bounds of the sheet, this will be the actual range
        //  that was cleared, bounded to the sheet's limits.)
        clearedRange?: string,
    }
    
    interface DeleteConditionalFormatRuleRequest {
        // The zero-based index of the rule to be deleted.
        index?: number,
        // The sheet the rule is being deleted from.
        sheetId?: number,
    }
    
    interface AddBandingResponse {
        // The banded range that was added.
        bandedRange?: BandedRange,
    }
    
    interface DeleteNamedRangeRequest {
        // The ID of the named range to delete.
        namedRangeId?: string,
    }
    
    interface ChartData {
        // The source ranges of the data.
        sourceRange?: ChartSourceRange,
    }
    
    interface BatchGetValuesResponse {
        // The ID of the spreadsheet the data was retrieved from.
        spreadsheetId?: string,
        // The requested values. The order of the ValueRanges is the same as the
        // order of the requested ranges.
        valueRanges?: ValueRange[],        
    }
    
    interface UpdateBandingRequest {
        // The fields that should be updated.  At least one field must be specified.
        // The root `bandedRange` is implied and should not be specified.
        // A single `"*"` can be used as short-hand for listing every field.
        fields?: string,
        // The banded range to update with the new properties.
        bandedRange?: BandedRange,
    }
    
    interface Color {
        // The fraction of this color that should be applied to the pixel. That is,
        // the final pixel color is defined by the equation:
        // 
        //   pixel color = alpha * (this color) + (1.0 - alpha) * (background color)
        // 
        // This means that a value of 1.0 corresponds to a solid color, whereas
        // a value of 0.0 corresponds to a completely transparent color. This
        // uses a wrapper message rather than a simple float scalar so that it is
        // possible to distinguish between a default value and the value being unset.
        // If omitted, this color object is to be rendered as a solid color
        // (as if the alpha value had been explicitly given with a value of 1.0).
        alpha?: number,
        // The amount of blue in the color as a value in the interval [0, 1].
        blue?: number,
        // The amount of green in the color as a value in the interval [0, 1].
        green?: number,
        // The amount of red in the color as a value in the interval [0, 1].
        red?: number,
    }
    
    interface PivotGroup {
        // The bucket of the opposite pivot group to sort by.
        // If not specified, sorting is alphabetical by this group's values.
        valueBucket?: PivotGroupSortValueBucket,
        // Metadata about values in the grouping.
        valueMetadata?: PivotGroupValueMetadata[],        
        // True if the pivot table should include the totals for this grouping.
        showTotals?: boolean,
        // The column offset of the source range that this grouping is based on.
        // 
        // For example, if the source was `C10:E15`, a `sourceColumnOffset` of `0`
        // means this group refers to column `C`, whereas the offset `1` would refer
        // to column `D`.
        sourceColumnOffset?: number,
        // The order the values in this group should be sorted.
        sortOrder?: string,
    }
    
    interface PivotTable {
        // An optional mapping of filters per source column offset.
        // 
        // The filters will be applied before aggregating data into the pivot table.
        // The map's key is the column offset of the source range that you want to
        // filter, and the value is the criteria for that column.
        // 
        // For example, if the source was `C10:E15`, a key of `0` will have the filter
        // for column `C`, whereas the key `1` is for column `D`.
        criteria?: any,
        // Each row grouping in the pivot table.
        rows?: PivotGroup[],        
        // Whether values should be listed horizontally (as columns)
        // or vertically (as rows).
        valueLayout?: string,
        // A list of values to include in the pivot table.
        values?: PivotValue[],        
        // The range the pivot table is reading data from.
        source?: GridRange,
        // Each column grouping in the pivot table.
        columns?: PivotGroup[],        
    }
    
    interface ChartSourceRange {
        // The ranges of data for a series or domain.
        // Exactly one dimension must have a length of 1,
        // and all sources in the list must have the same dimension
        // with length 1.
        // The domain (if it exists) & all series must have the same number
        // of source ranges. If using more than one source range, then the source
        // range at a given offset must be contiguous across the domain and series.
        // 
        // For example, these are valid configurations:
        // 
        //     domain sources: A1:A5
        //     series1 sources: B1:B5
        //     series2 sources: D6:D10
        // 
        //     domain sources: A1:A5, C10:C12
        //     series1 sources: B1:B5, D10:D12
        //     series2 sources: C1:C5, E10:E12
        sources?: GridRange[],        
    }
    
    interface ValueRange {
        // The range the values cover, in A1 notation.
        // For output, this range indicates the entire requested range,
        // even though the values will exclude trailing rows and columns.
        // When appending values, this field represents the range to search for a
        // table, after which values will be appended.
        range?: string,
        // The data that was read or to be written.  This is an array of arrays,
        // the outer array representing all the data and each inner array
        // representing a major dimension. Each item in the inner array
        // corresponds with one cell.
        // 
        // For output, empty trailing rows and columns will not be included.
        // 
        // For input, supported value types are: bool, string, and double.
        // Null values will be skipped.
        // To set a cell to an empty value, set the string value to an empty string.
        values?: any[][],        
        // The major dimension of the values.
        // 
        // For output, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`,
        // then requesting `range=A1:B2,majorDimension=ROWS` will return
        // `[[1,2],[3,4]]`,
        // whereas requesting `range=A1:B2,majorDimension=COLUMNS` will return
        // `[[1,3],[2,4]]`.
        // 
        // For input, with `range=A1:B2,majorDimension=ROWS` then `[[1,2],[3,4]]`
        // will set `A1=1,B1=2,A2=3,B2=4`. With `range=A1:B2,majorDimension=COLUMNS`
        // then `[[1,2],[3,4]]` will set `A1=1,B1=3,A2=2,B2=4`.
        // 
        // When writing, if this field is not set, it defaults to ROWS.
        majorDimension?: string,
    }
    
    interface AppendCellsRequest {
        // The fields of CellData that should be updated.
        // At least one field must be specified.
        // The root is the CellData; 'row.values.' should not be specified.
        // A single `"*"` can be used as short-hand for listing every field.
        fields?: string,
        // The data to append.
        rows?: RowData[],        
        // The sheet ID to append the data to.
        sheetId?: number,
    }
    
    interface AddBandingRequest {
        // The banded range to add. The bandedRangeId
        // field is optional; if one is not set, an id will be randomly generated. (It
        // is an error to specify the ID of a range that already exists.)
        bandedRange?: BandedRange,
    }
    
    interface Response {
        // A reply from doing a find/replace.
        findReplace?: FindReplaceResponse,
        // A reply from adding a sheet.
        addSheet?: AddSheetResponse,
        // A reply from updating a conditional format rule.
        updateConditionalFormatRule?: UpdateConditionalFormatRuleResponse,
        // A reply from adding a named range.
        addNamedRange?: AddNamedRangeResponse,
        // A reply from adding a filter view.
        addFilterView?: AddFilterViewResponse,
        // A reply from adding a banded range.
        addBanding?: AddBandingResponse,
        // A reply from adding a protected range.
        addProtectedRange?: AddProtectedRangeResponse,
        // A reply from duplicating a sheet.
        duplicateSheet?: DuplicateSheetResponse,
        // A reply from deleting a conditional format rule.
        deleteConditionalFormatRule?: DeleteConditionalFormatRuleResponse,
        // A reply from updating an embedded object's position.
        updateEmbeddedObjectPosition?: UpdateEmbeddedObjectPositionResponse,
        // A reply from duplicating a filter view.
        duplicateFilterView?: DuplicateFilterViewResponse,
        // A reply from adding a chart.
        addChart?: AddChartResponse,
    }
    
    interface EmbeddedChart {
        // The ID of the chart.
        chartId?: number,
        // The position of the chart.
        position?: EmbeddedObjectPosition,
        // The specification of the chart.
        spec?: ChartSpec,
    }
    
    interface TextFormatRun {
        // The character index where this run starts.
        startIndex?: number,
        // The format of this run.  Absent values inherit the cell's format.
        format?: TextFormat,
    }
    
    interface InsertRangeRequest {
        // The dimension which will be shifted when inserting cells.
        // If ROWS, existing cells will be shifted down.
        // If COLUMNS, existing cells will be shifted right.
        shiftDimension?: string,
        // The range to insert new cells into.
        range?: GridRange,
    }
    
    interface AddNamedRangeResponse {
        // The named range to add.
        namedRange?: NamedRange,
    }
    
    interface RowData {
        // The values in the row, one per column.
        values?: CellData[],        
    }
    
    interface Border {
        // The color of the border.
        color?: Color,
        // The width of the border, in pixels.
        // Deprecated; the width is determined by the "style" field.
        width?: number,
        // The style of the border.
        style?: string,
    }
    
    interface GridData {
        // The data in the grid, one entry per row,
        // starting with the row in startRow.
        // The values in RowData will correspond to columns starting
        // at start_column.
        rowData?: RowData[],        
        // The first row this GridData refers to, zero-based.
        startRow?: number,
        // Metadata about the requested columns in the grid, starting with the column
        // in start_column.
        columnMetadata?: DimensionProperties[],        
        // The first column this GridData refers to, zero-based.
        startColumn?: number,
        // Metadata about the requested rows in the grid, starting with the row
        // in start_row.
        rowMetadata?: DimensionProperties[],        
    }
    
    interface UpdateNamedRangeRequest {
        // The named range to update with the new properties.
        namedRange?: NamedRange,
        // The fields that should be updated.  At least one field must be specified.
        // The root `namedRange` is implied and should not be specified.
        // A single `"*"` can be used as short-hand for listing every field.
        fields?: string,
    }
    
    interface FindReplaceRequest {
        // The value to use as the replacement.
        replacement?: string,
        // The range to find/replace over.
        range?: GridRange,
        // The sheet to find/replace over.
        sheetId?: number,
        // True to find/replace over all sheets.
        allSheets?: boolean,
        // True if the search is case sensitive.
        matchCase?: boolean,
        // True if the search should include cells with formulas.
        // False to skip cells with formulas.
        includeFormulas?: boolean,
        // True if the find value should match the entire cell.
        matchEntireCell?: boolean,
        // The value to search.
        find?: string,
        // True if the find value is a regex.
        // The regular expression and replacement should follow Java regex rules
        // at https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html.
        // The replacement string is allowed to refer to capturing groups.
        // For example, if one cell has the contents `"Google Sheets"` and another
        // has `"Google Docs"`, then searching for `"o.* (.*)"` with a replacement of
        // `"$1 Rocks"` would change the contents of the cells to
        // `"GSheets Rocks"` and `"GDocs Rocks"` respectively.
        searchByRegex?: boolean,
    }
    
    interface AddSheetRequest {
        // The properties the new sheet should have.
        // All properties are optional.
        // The sheetId field is optional; if one is not
        // set, an id will be randomly generated. (It is an error to specify the ID
        // of a sheet that already exists.)
        properties?: SheetProperties,
    }
    
    interface UpdateCellsRequest {
        // The coordinate to start writing data at.
        // Any number of rows and columns (including a different number of
        // columns per row) may be written.
        start?: GridCoordinate,
        // The range to write data to.
        // 
        // If the data in rows does not cover the entire requested range,
        // the fields matching those set in fields will be cleared.
        range?: GridRange,
        // The fields of CellData that should be updated.
        // At least one field must be specified.
        // The root is the CellData; 'row.values.' should not be specified.
        // A single `"*"` can be used as short-hand for listing every field.
        fields?: string,
        // The data to write.
        rows?: RowData[],        
    }
    
    interface RandomizeRangeRequest {
        // The range to randomize.
        range?: GridRange,
    }
    
    interface DeleteConditionalFormatRuleResponse {
        // The rule that was deleted.
        rule?: ConditionalFormatRule,
    }
    
    interface DeleteRangeRequest {
        // The dimension from which deleted cells will be replaced with.
        // If ROWS, existing cells will be shifted upward to
        // replace the deleted cells. If COLUMNS, existing cells
        // will be shifted left to replace the deleted cells.
        shiftDimension?: string,
        // The range of cells to delete.
        range?: GridRange,
    }
    
    interface GridCoordinate {
        // The sheet this coordinate is on.
        sheetId?: number,
        // The column index of the coordinate.
        columnIndex?: number,
        // The row index of the coordinate.
        rowIndex?: number,
    }
    
    interface UpdateSheetPropertiesRequest {
        // The properties to update.
        properties?: SheetProperties,
        // The fields that should be updated.  At least one field must be specified.
        // The root `properties` is implied and should not be specified.
        // A single `"*"` can be used as short-hand for listing every field.
        fields?: string,
    }
    
    interface UnmergeCellsRequest {
        // The range within which all cells should be unmerged.
        // If the range spans multiple merges, all will be unmerged.
        // The range must not partially span any merge.
        range?: GridRange,
    }
    
    interface GridProperties {
        // The number of rows in the grid.
        rowCount?: number,
        // True if the grid isn't showing gridlines in the UI.
        hideGridlines?: boolean,
        // The number of rows that are frozen in the grid.
        frozenRowCount?: number,
        // The number of columns that are frozen in the grid.
        frozenColumnCount?: number,
        // The number of columns in the grid.
        columnCount?: number,
    }
    
    interface Sheet {
        // The specifications of every chart on this sheet.
        charts?: EmbeddedChart[],        
        // The properties of the sheet.
        properties?: SheetProperties,
        // The filter views in this sheet.
        filterViews?: FilterView[],        
        // The protected ranges in this sheet.
        protectedRanges?: ProtectedRange[],        
        // The conditional format rules in this sheet.
        conditionalFormats?: ConditionalFormatRule[],        
        // The filter on this sheet, if any.
        basicFilter?: BasicFilter,
        // The ranges that are merged together.
        merges?: GridRange[],        
        // Data in the grid, if this is a grid sheet.
        // The number of GridData objects returned is dependent on the number of
        // ranges requested on this sheet. For example, if this is representing
        // `Sheet1`, and the spreadsheet was requested with ranges
        // `Sheet1!A1:C10` and `Sheet1!D15:E20`, then the first GridData will have a
        // startRow/startColumn of `0`,
        // while the second one will have `startRow 14` (zero-based row 15),
        // and `startColumn 3` (zero-based column D).
        data?: GridData[],        
        // The banded (i.e. alternating colors) ranges on this sheet.
        bandedRanges?: BandedRange[],        
    }
    
    interface SortSpec {
        // The dimension the sort should be applied to.
        dimensionIndex?: number,
        // The order data should be sorted.
        sortOrder?: string,
    }
    
    interface UpdateEmbeddedObjectPositionResponse {
        // The new position of the embedded object.
        position?: EmbeddedObjectPosition,
    }
    
    interface BooleanRule {
        // The format to apply.
        // Conditional formatting can only apply a subset of formatting:
        // bold, italic,
        // strikethrough,
        // foreground color &
        // background color.
        format?: CellFormat,
        // The condition of the rule. If the condition evaluates to true,
        // the format will be applied.
        condition?: BooleanCondition,
    }
    
    interface PivotGroupValueMetadata {
        // True if the data corresponding to the value is collapsed.
        collapsed?: boolean,
        // The calculated value the metadata corresponds to.
        // (Note that formulaValue is not valid,
        //  because the values will be calculated.)
        value?: ExtendedValue,
    }
    
    interface FilterCriteria {
        // A condition that must be true for values to be shown.
        // (This does not override hiddenValues -- if a value is listed there,
        //  it will still be hidden.)
        condition?: BooleanCondition,
        // Values that should be hidden.
        hiddenValues?: string[],        
    }
    
    interface Editors {
        // The email addresses of users with edit access to the protected range.
        users?: string[],        
        // True if anyone in the document's domain has edit access to the protected
        // range.  Domain protection is only supported on documents within a domain.
        domainUsersCanEdit?: boolean,
        // The email addresses of groups with edit access to the protected range.
        groups?: string[],        
    }
    
    interface UpdateConditionalFormatRuleRequest {
        // The rule that should replace the rule at the given index.
        rule?: ConditionalFormatRule,
        // The zero-based index of the rule that should be replaced or moved.
        index?: number,
        // The sheet of the rule to move.  Required if new_index is set,
        // unused otherwise.
        sheetId?: number,
        // The zero-based new index the rule should end up at.
        newIndex?: number,
    }
    
    interface BasicChartDomain {
        // The data of the domain. For example, if charting stock prices over time,
        // this is the data representing the dates.
        domain?: ChartData,
        // True to reverse the order of the domain values (horizontal axis).
        reversed?: boolean,
    }
    
    interface DataValidationRule {
        // A message to show the user when adding data to the cell.
        inputMessage?: string,
        // The condition that data in the cell must match.
        condition?: BooleanCondition,
        // True if the UI should be customized based on the kind of condition.
        // If true, "List" conditions will show a dropdown.
        showCustomUi?: boolean,
        // True if invalid data should be rejected.
        strict?: boolean,
    }
    
    interface PasteDataRequest {
        // The coordinate at which the data should start being inserted.
        coordinate?: GridCoordinate,
        // The delimiter in the data.
        delimiter?: string,
        // The data to insert.
        data?: string,
        // How the data should be pasted.
        type?: string,
        // True if the data is HTML.
        html?: boolean,
    }
    
    interface AppendDimensionRequest {
        // Whether rows or columns should be appended.
        dimension?: string,
        // The number of rows or columns to append.
        length?: number,
        // The sheet to append rows or columns to.
        sheetId?: number,
    }
    
    interface AddNamedRangeRequest {
        // The named range to add. The namedRangeId
        // field is optional; if one is not set, an id will be randomly generated. (It
        // is an error to specify the ID of a range that already exists.)
        namedRange?: NamedRange,
    }
    
    interface UpdateEmbeddedObjectPositionRequest {
        // The fields of OverlayPosition
        // that should be updated when setting a new position. Used only if
        // newPosition.overlayPosition
        // is set, in which case at least one field must
        // be specified.  The root `newPosition.overlayPosition` is implied and
        // should not be specified.
        // A single `"*"` can be used as short-hand for listing every field.
        fields?: string,
        // The ID of the object to moved.
        objectId?: number,
        // An explicit position to move the embedded object to.
        // If newPosition.sheetId is set,
        // a new sheet with that ID will be created.
        // If newPosition.newSheet is set to true,
        // a new sheet will be created with an ID that will be chosen for you.
        newPosition?: EmbeddedObjectPosition,
    }
    
    interface TextRotation {
        // The angle between the standard orientation and the desired orientation.
        // Measured in degrees. Valid values are between -90 and 90. Positive
        // angles are angled upwards, negative are angled downwards.
        // 
        // Note: For LTR text direction positive angles are in the counterclockwise
        // direction, whereas for RTL they are in the clockwise direction
        angle?: number,
        // If true, text reads top to bottom, but the orientation of individual
        // characters is unchanged.
        // For example:
        // 
        //     | V |
        //     | e |
        //     | r |
        //     | t |
        //     | i |
        //     | c |
        //     | a |
        //     | l |
        vertical?: boolean,
    }
    
    interface PieChartSpec {
        // True if the pie is three dimensional.
        threeDimensional?: boolean,
        // The data that covers the domain of the pie chart.
        domain?: ChartData,
        // The data that covers the one and only series of the pie chart.
        series?: ChartData,
        // The size of the hole in the pie chart.
        pieHole?: number,
        // Where the legend of the pie chart should be drawn.
        legendPosition?: string,
    }
    
    interface UpdateFilterViewRequest {
        // The fields that should be updated.  At least one field must be specified.
        // The root `filter` is implied and should not be specified.
        // A single `"*"` can be used as short-hand for listing every field.
        fields?: string,
        // The new properties of the filter view.
        filter?: FilterView,
    }
    
    interface ConditionalFormatRule {
        // The formatting is either "on" or "off" according to the rule.
        booleanRule?: BooleanRule,
        // The ranges that will be formatted if the condition is true.
        // All the ranges must be on the same grid.
        ranges?: GridRange[],        
        // The formatting will vary based on the gradients in the rule.
        gradientRule?: GradientRule,
    }
    
    interface CopyPasteRequest {
        // What kind of data to paste.
        pasteType?: string,
        // The source range to copy.
        source?: GridRange,
        // The location to paste to. If the range covers a span that's
        // a multiple of the source's height or width, then the
        // data will be repeated to fill in the destination range.
        // If the range is smaller than the source range, the entire
        // source data will still be copied (beyond the end of the destination range).
        destination?: GridRange,
        // How that data should be oriented when pasting.
        pasteOrientation?: string,
    }
    
    interface BooleanCondition {
        // The values of the condition. The number of supported values depends
        // on the condition type.  Some support zero values,
        // others one or two values,
        // and ConditionType.ONE_OF_LIST supports an arbitrary number of values.
        values?: ConditionValue[],        
        // The type of condition.
        type?: string,
    }
    
    interface Request {
        // Moves rows or columns to another location in a sheet.
        moveDimension?: MoveDimensionRequest,
        // Randomizes the order of the rows in a range.
        randomizeRange?: RandomizeRangeRequest,
        // Updates a banded range
        updateBanding?: UpdateBandingRequest,
        // Deletes a named range.
        deleteNamedRange?: DeleteNamedRangeRequest,
        // Adds a protected range.
        addProtectedRange?: AddProtectedRangeRequest,
        // Duplicates a sheet.
        duplicateSheet?: DuplicateSheetRequest,
        // Unmerges merged cells.
        unmergeCells?: UnmergeCellsRequest,
        // Deletes a sheet.
        deleteSheet?: DeleteSheetRequest,
        // Updates an embedded object's (e.g. chart, image) position.
        updateEmbeddedObjectPosition?: UpdateEmbeddedObjectPositionRequest,
        // Updates dimensions' properties.
        updateDimensionProperties?: UpdateDimensionPropertiesRequest,
        // Pastes data (HTML or delimited) into a sheet.
        pasteData?: PasteDataRequest,
        // Sets the basic filter on a sheet.
        setBasicFilter?: SetBasicFilterRequest,
        // Adds a new conditional format rule.
        addConditionalFormatRule?: AddConditionalFormatRuleRequest,
        // Adds a named range.
        addNamedRange?: AddNamedRangeRequest,
        // Updates many cells at once.
        updateCells?: UpdateCellsRequest,
        // Updates the spreadsheet's properties.
        updateSpreadsheetProperties?: UpdateSpreadsheetPropertiesRequest,
        // Deletes an embedded object (e.g, chart, image) in a sheet.
        deleteEmbeddedObject?: DeleteEmbeddedObjectRequest,
        // Updates the properties of a filter view.
        updateFilterView?: UpdateFilterViewRequest,
        // Adds a new banded range
        addBanding?: AddBandingRequest,
        // Automatically resizes one or more dimensions based on the contents
        // of the cells in that dimension.
        autoResizeDimensions?: AutoResizeDimensionsRequest,
        // Appends cells after the last row with data in a sheet.
        appendCells?: AppendCellsRequest,
        // Cuts data from one area and pastes it to another.
        cutPaste?: CutPasteRequest,
        // Merges cells together.
        mergeCells?: MergeCellsRequest,
        // Updates a named range.
        updateNamedRange?: UpdateNamedRangeRequest,
        // Updates a sheet's properties.
        updateSheetProperties?: UpdateSheetPropertiesRequest,
        // Automatically fills in more data based on existing data.
        autoFill?: AutoFillRequest,
        // Deletes rows or columns in a sheet.
        deleteDimension?: DeleteDimensionRequest,
        // Sorts data in a range.
        sortRange?: SortRangeRequest,
        // Deletes a protected range.
        deleteProtectedRange?: DeleteProtectedRangeRequest,
        // Duplicates a filter view.
        duplicateFilterView?: DuplicateFilterViewRequest,
        // Adds a chart.
        addChart?: AddChartRequest,
        // Finds and replaces occurrences of some text with other text.
        findReplace?: FindReplaceRequest,
        // Converts a column of text into many columns of text.
        textToColumns?: TextToColumnsRequest,
        // Updates a chart's specifications.
        updateChartSpec?: UpdateChartSpecRequest,
        // Adds a sheet.
        addSheet?: AddSheetRequest,
        // Updates a protected range.
        updateProtectedRange?: UpdateProtectedRangeRequest,
        // Deletes a filter view from a sheet.
        deleteFilterView?: DeleteFilterViewRequest,
        // Copies data from one area and pastes it to another.
        copyPaste?: CopyPasteRequest,
        // Inserts new rows or columns in a sheet.
        insertDimension?: InsertDimensionRequest,
        // Deletes a range of cells from a sheet, shifting the remaining cells.
        deleteRange?: DeleteRangeRequest,
        // Removes a banded range
        deleteBanding?: DeleteBandingRequest,
        // Adds a filter view.
        addFilterView?: AddFilterViewRequest,
        // Sets data validation for one or more cells.
        setDataValidation?: SetDataValidationRequest,
        // Updates the borders in a range of cells.
        updateBorders?: UpdateBordersRequest,
        // Deletes an existing conditional format rule.
        deleteConditionalFormatRule?: DeleteConditionalFormatRuleRequest,
        // Repeats a single cell across a range.
        repeatCell?: RepeatCellRequest,
        // Clears the basic filter on a sheet.
        clearBasicFilter?: ClearBasicFilterRequest,
        // Appends dimensions to the end of a sheet.
        appendDimension?: AppendDimensionRequest,
        // Updates an existing conditional format rule.
        updateConditionalFormatRule?: UpdateConditionalFormatRuleRequest,
        // Inserts new cells in a sheet, shifting the existing cells.
        insertRange?: InsertRangeRequest,
    }
    
    interface GridRange {
        // The start column (inclusive) of the range, or not set if unbounded.
        startColumnIndex?: number,
        // The sheet this range is on.
        sheetId?: number,
        // The end column (exclusive) of the range, or not set if unbounded.
        endColumnIndex?: number,
        // The end row (exclusive) of the range, or not set if unbounded.
        endRowIndex?: number,
        // The start row (inclusive) of the range, or not set if unbounded.
        startRowIndex?: number,
    }
    
    interface BasicChartSpec {
        // The number of rows or columns in the data that are "headers".
        // If not set, Google Sheets will guess how many rows are headers based
        // on the data.
        // 
        // (Note that BasicChartAxis.title may override the axis title
        //  inferred from the header values.)
        headerCount?: number,
        // The stacked type for charts that support vertical stacking.
        // Applies to Area, Bar, Column, and Stepped Area charts.
        stackedType?: string,
        // The axis on the chart.
        axis?: BasicChartAxis[],        
        // True to make the chart 3D.
        // Applies to Bar and Column charts.
        threeDimensional?: boolean,
        // If some values in a series are missing, gaps may appear in the chart (e.g,
        // segments of lines in a line chart will be missing).  To eliminate these
        // gaps set this to true.
        // Applies to Line, Area, and Combo charts.
        interpolateNulls?: boolean,
        // The type of the chart.
        chartType?: string,
        // The data this chart is visualizing.
        series?: BasicChartSeries[],        
        // The position of the chart legend.
        legendPosition?: string,
        // The domain of data this is charting.
        // Only a single domain is supported.
        domains?: BasicChartDomain[],        
        // Gets whether all lines should be rendered smooth or straight by default.
        // Applies to Line charts.
        lineSmoothing?: boolean,
    }
    
    interface BubbleChartSpec {
        // The data contianing the bubble sizes.  Bubble sizes are used to draw
        // the bubbles at different sizes relative to each other.
        // If specified, group_ids must also be specified.  This field is
        // optional.
        bubbleSizes?: ChartData,
        // The opacity of the bubbles between 0 and 1.0.
        // 0 is fully transparent and 1 is fully opaque.
        bubbleOpacity?: number,
        // The data containing the bubble x-values.  These values locate the bubbles
        // in the chart horizontally.
        domain?: ChartData,
        // The format of the text inside the bubbles.
        // Underline and Strikethrough are not supported.
        bubbleTextStyle?: TextFormat,
        // The bubble border color.
        bubbleBorderColor?: Color,
        // The data containing the bubble group IDs. All bubbles with the same group
        // ID will be drawn in the same color. If bubble_sizes is specified then
        // this field must also be specified but may contain blank values.
        // This field is optional.
        groupIds?: ChartData,
        // The data containing the bubble labels.  These do not need to be unique.
        bubbleLabels?: ChartData,
        // The minimum radius size of the bubbles, in pixels.
        // If specific, the field must be a positive value.
        bubbleMinRadiusSize?: number,
        // The max radius size of the bubbles, in pixels.
        // If specified, the field must be a positive value.
        bubbleMaxRadiusSize?: number,
        // The data contianing the bubble y-values.  These values locate the bubbles
        // in the chart vertically.
        series?: ChartData,
        // Where the legend of the chart should be drawn.
        legendPosition?: string,
    }
    
    interface SetDataValidationRequest {
        // The data validation rule to set on each cell in the range,
        // or empty to clear the data validation in the range.
        rule?: DataValidationRule,
        // The range the data validation rule should apply to.
        range?: GridRange,
    }
    
    interface CellData {
        // The value the user entered in the cell. e.g, `1234`, `'Hello'`, or `=NOW()`
        // Note: Dates, Times and DateTimes are represented as doubles in
        // serial number format.
        userEnteredValue?: ExtendedValue,
        // A data validation rule on the cell, if any.
        // 
        // When writing, the new data validation rule will overwrite any prior rule.
        dataValidation?: DataValidationRule,
        // The effective value of the cell. For cells with formulas, this will be
        // the calculated value.  For cells with literals, this will be
        // the same as the user_entered_value.
        // This field is read-only.
        effectiveValue?: ExtendedValue,
        // Runs of rich text applied to subsections of the cell.  Runs are only valid
        // on user entered strings, not formulas, bools, or numbers.
        // Runs start at specific indexes in the text and continue until the next
        // run. Properties of a run will continue unless explicitly changed
        // in a subsequent run (and properties of the first run will continue
        // the properties of the cell unless explicitly changed).
        // 
        // When writing, the new runs will overwrite any prior runs.  When writing a
        // new user_entered_value, previous runs will be erased.
        textFormatRuns?: TextFormatRun[],        
        // The formatted value of the cell.
        // This is the value as it's shown to the user.
        // This field is read-only.
        formattedValue?: string,
        // A hyperlink this cell points to, if any.
        // This field is read-only.  (To set it, use a `=HYPERLINK` formula
        // in the userEnteredValue.formulaValue
        // field.)
        hyperlink?: string,
        // A pivot table anchored at this cell. The size of pivot table itself
        // is computed dynamically based on its data, grouping, filters, values,
        // etc. Only the top-left cell of the pivot table contains the pivot table
        // definition. The other cells will contain the calculated values of the
        // results of the pivot in their effective_value fields.
        pivotTable?: PivotTable,
        // The format the user entered for the cell.
        // 
        // When writing, the new format will be merged with the existing format.
        userEnteredFormat?: CellFormat,
        // Any note on the cell.
        note?: string,
        // The effective format being used by the cell.
        // This includes the results of applying any conditional formatting and,
        // if the cell contains a formula, the computed number format.
        // If the effective format is the default format, effective format will
        // not be written.
        // This field is read-only.
        effectiveFormat?: CellFormat,
    }
    
    interface BatchUpdateSpreadsheetRequest {
        // True if grid data should be returned. Meaningful only if
        // if include_spreadsheet_response is 'true'.
        // This parameter is ignored if a field mask was set in the request.
        responseIncludeGridData?: boolean,
        // Limits the ranges included in the response spreadsheet.
        // Meaningful only if include_spreadsheet_response is 'true'.
        responseRanges?: string[],        
        // Determines if the update response should include the spreadsheet
        // resource.
        includeSpreadsheetInResponse?: boolean,
        // A list of updates to apply to the spreadsheet.
        // Requests will be applied in the order they are specified.
        // If any request is not valid, no requests will be applied.
        requests?: Request[],        
    }
    
    interface Padding {
        // The bottom padding of the cell.
        bottom?: number,
        // The top padding of the cell.
        top?: number,
        // The left padding of the cell.
        left?: number,
        // The right padding of the cell.
        right?: number,
    }
    
    interface BasicChartAxis {
        // The title of this axis. If set, this overrides any title inferred
        // from headers of the data.
        title?: string,
        // The position of this axis.
        position?: string,
        // The format of the title.
        // Only valid if the axis is not associated with the domain.
        format?: TextFormat,
    }
    
    interface DeleteDimensionRequest {
        // The dimensions to delete from the sheet.
        range?: DimensionRange,
    }
    
    interface UpdateChartSpecRequest {
        // The ID of the chart to update.
        chartId?: number,
        // The specification to apply to the chart.
        spec?: ChartSpec,
    }
    
    interface DeleteFilterViewRequest {
        // The ID of the filter to delete.
        filterId?: number,
    }
    
    interface BatchUpdateValuesResponse {
        // The spreadsheet the updates were applied to.
        spreadsheetId?: string,
        // The total number of rows where at least one cell in the row was updated.
        totalUpdatedRows?: number,
        // One UpdateValuesResponse per requested range, in the same order as
        // the requests appeared.
        responses?: UpdateValuesResponse[],        
        // The total number of sheets where at least one cell in the sheet was
        // updated.
        totalUpdatedSheets?: number,
        // The total number of cells updated.
        totalUpdatedCells?: number,
        // The total number of columns where at least one cell in the column was
        // updated.
        totalUpdatedColumns?: number,
    }
    
    interface SortRangeRequest {
        // The range to sort.
        range?: GridRange,
        // The sort order per column. Later specifications are used when values
        // are equal in the earlier specifications.
        sortSpecs?: SortSpec[],        
    }
    
    interface MergeCellsRequest {
        // How the cells should be merged.
        mergeType?: string,
        // The range of cells to merge.
        range?: GridRange,
    }
    
    interface AddProtectedRangeRequest {
        // The protected range to be added. The
        // protectedRangeId field is optional; if
        // one is not set, an id will be randomly generated. (It is an error to
        // specify the ID of a range that already exists.)
        protectedRange?: ProtectedRange,
    }
    
    interface BatchClearValuesRequest {
        // The ranges to clear, in A1 notation.
        ranges?: string[],        
    }
    
    interface DuplicateFilterViewResponse {
        // The newly created filter.
        filter?: FilterView,
    }
    
    interface DuplicateSheetResponse {
        // The properties of the duplicate sheet.
        properties?: SheetProperties,
    }
    
    interface TextToColumnsRequest {
        // The delimiter type to use.
        delimiterType?: string,
        // The source data range.  This must span exactly one column.
        source?: GridRange,
        // The delimiter to use. Used only if delimiterType is
        // CUSTOM.
        delimiter?: string,
    }
    
    interface ClearBasicFilterRequest {
        // The sheet ID on which the basic filter should be cleared.
        sheetId?: number,
    }
    
    interface BatchUpdateSpreadsheetResponse {
        // The spreadsheet after updates were applied. This is only set if
        // [BatchUpdateSpreadsheetRequest.include_spreadsheet_in_response] is `true`.
        updatedSpreadsheet?: Spreadsheet,
        // The reply of the updates.  This maps 1:1 with the updates, although
        // replies to some requests may be empty.
        replies?: Response[],        
        // The spreadsheet the updates were applied to.
        spreadsheetId?: string,
    }
    
    interface DeleteBandingRequest {
        // The ID of the banded range to delete.
        bandedRangeId?: number,
    }
    
    interface AppendValuesResponse {
        // Information about the updates that were applied.
        updates?: UpdateValuesResponse,
        // The range (in A1 notation) of the table that values are being appended to
        // (before the values were appended).
        // Empty if no table was found.
        tableRange?: string,
        // The spreadsheet the updates were applied to.
        spreadsheetId?: string,
    }
    
    interface MoveDimensionRequest {
        // The zero-based start index of where to move the source data to,
        // based on the coordinates *before* the source data is removed
        // from the grid.  Existing data will be shifted down or right
        // (depending on the dimension) to make room for the moved dimensions.
        // The source dimensions are removed from the grid, so the
        // the data may end up in a different index than specified.
        // 
        // For example, given `A1..A5` of `0, 1, 2, 3, 4` and wanting to move
        // `"1"` and `"2"` to between `"3"` and `"4"`, the source would be
        // `ROWS [1..3)`,and the destination index would be `"4"`
        // (the zero-based index of row 5).
        // The end result would be `A1..A5` of `0, 3, 1, 2, 4`.
        destinationIndex?: number,
        // The source dimensions to move.
        source?: DimensionRange,
    }
    
    interface PivotFilterCriteria {
        // Values that should be included.  Values not listed here are excluded.
        visibleValues?: string[],        
    }
    
    interface AddFilterViewRequest {
        // The filter to add. The filterViewId
        // field is optional; if one is not set, an id will be randomly generated. (It
        // is an error to specify the ID of a filter that already exists.)
        filter?: FilterView,
    }
    
    interface AddConditionalFormatRuleRequest {
        // The rule to add.
        rule?: ConditionalFormatRule,
        // The zero-based index where the rule should be inserted.
        index?: number,
    }
    
    interface ChartSpec {
        // A basic chart specification, can be one of many kinds of charts.
        // See BasicChartType for the list of all
        // charts this supports.
        basicChart?: BasicChartSpec,
        // An org chart specification.
        orgChart?: OrgChartSpec,
        // A pie chart specification.
        pieChart?: PieChartSpec,
        // The title text format.
        // Strikethrough and underline are not supported.
        titleTextFormat?: TextFormat,
        // The title of the chart.
        title?: string,
        // A histogram chart specification.
        histogramChart?: HistogramChartSpec,
        // A candlestick chart specification.
        candlestickChart?: CandlestickChartSpec,
        // A bubble chart specification.
        bubbleChart?: BubbleChartSpec,
        // The name of the font to use by default for all chart text (e.g. title,
        // axis labels, legend).  If a font is specified for a specific part of the
        // chart it will override this font name.
        fontName?: string,
        // True to make a chart fill the entire space in which it's rendered with
        // minimum padding.  False to use the default padding.
        // (Not applicable to Geo and Org charts.)
        maximized?: boolean,
        // Determines how the charts will use hidden rows or columns.
        hiddenDimensionStrategy?: string,
        // The background color of the entire chart.
        // Not applicable to Org charts.
        backgroundColor?: Color,
    }
    
    interface NumberFormat {
        // The type of the number format.
        // When writing, this field must be set.
        type?: string,
        // Pattern string used for formatting.  If not set, a default pattern based on
        // the user's locale will be used if necessary for the given type.
        // See the [Date and Number Formats guide](/sheets/api/guides/formats) for more
        // information about the supported patterns.
        pattern?: string,
    }
    
    interface CandlestickDomain {
        // True to reverse the order of the domain values (horizontal axis).
        reversed?: boolean,
        // The data of the CandlestickDomain.
        data?: ChartData,
    }
    
    interface SheetProperties {
        // The type of sheet. Defaults to GRID.
        // This field cannot be changed once set.
        sheetType?: string,
        // Additional properties of the sheet if this sheet is a grid.
        // (If the sheet is an object sheet, containing a chart or image, then
        // this field will be absent.)
        // When writing it is an error to set any grid properties on non-grid sheets.
        gridProperties?: GridProperties,
        // The name of the sheet.
        title?: string,
        // The color of the tab in the UI.
        tabColor?: Color,
        // The index of the sheet within the spreadsheet.
        // When adding or updating sheet properties, if this field
        // is excluded then the sheet will be added or moved to the end
        // of the sheet list. When updating sheet indices or inserting
        // sheets, movement is considered in "before the move" indexes.
        // For example, if there were 3 sheets (S1, S2, S3) in order to
        // move S1 ahead of S2 the index would have to be set to 2. A sheet
        // index update request will be ignored if the requested index is
        // identical to the sheets current index or if the requested new
        // index is equal to the current sheet index + 1.
        index?: number,
        // The ID of the sheet. Must be non-negative.
        // This field cannot be changed once set.
        sheetId?: number,
        // True if the sheet is an RTL sheet instead of an LTR sheet.
        rightToLeft?: boolean,
        // True if the sheet is hidden in the UI, false if it's visible.
        hidden?: boolean,
    }
    
    interface SheetsResource {
        // Copies a single sheet from a spreadsheet to another spreadsheet.
        // Returns the properties of the newly created sheet.
        copyTo (request: {        
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
            // Data format for response.
            alt?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // The ID of the spreadsheet containing the sheet to copy.
            spreadsheetId: string,
            // The ID of the sheet to copy.
            sheetId: number,
        }) : gapi.client.Request<SheetProperties>;        
        
    }
    
    
    interface ValuesResource {
        // Sets values in a range of a spreadsheet.
        // The caller must specify the spreadsheet ID, range, and
        // a valueInputOption.
        update (request: {        
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
            // Data format for response.
            alt?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Determines how dates, times, and durations in the response should be
            // rendered. This is ignored if response_value_render_option is
            // FORMATTED_VALUE.
            // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
            responseDateTimeRenderOption?: string,
            // The A1 notation of the values to update.
            range: string,
            // Determines if the update response should include the values
            // of the cells that were updated. By default, responses
            // do not include the updated values.
            // If the range to write was larger than than the range actually written,
            // the response will include all values in the requested range (excluding
            // trailing empty rows and columns).
            includeValuesInResponse?: boolean,
            // The ID of the spreadsheet to update.
            spreadsheetId: string,
            // Determines how values in the response should be rendered.
            // The default render option is ValueRenderOption.FORMATTED_VALUE.
            responseValueRenderOption?: string,
            // How the input data should be interpreted.
            valueInputOption?: string,
        }) : gapi.client.Request<UpdateValuesResponse>;        
        
        // Sets values in one or more ranges of a spreadsheet.
        // The caller must specify the spreadsheet ID,
        // a valueInputOption, and one or more
        // ValueRanges.
        batchUpdate (request: {        
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
            // Data format for response.
            alt?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // The ID of the spreadsheet to update.
            spreadsheetId: string,
        }) : gapi.client.Request<BatchUpdateValuesResponse>;        
        
        // Clears values from a spreadsheet.
        // The caller must specify the spreadsheet ID and range.
        // Only values are cleared -- all other properties of the cell (such as
        // formatting, data validation, etc..) are kept.
        clear (request: {        
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
            // Data format for response.
            alt?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // The A1 notation of the values to clear.
            range: string,
            // The ID of the spreadsheet to update.
            spreadsheetId: string,
        }) : gapi.client.Request<ClearValuesResponse>;        
        
        // Returns one or more ranges of values from a spreadsheet.
        // The caller must specify the spreadsheet ID and one or more ranges.
        batchGet (request: {        
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
            // Data format for response.
            alt?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // How dates, times, and durations should be represented in the output.
            // This is ignored if value_render_option is
            // FORMATTED_VALUE.
            // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
            dateTimeRenderOption?: string,
            // How values should be represented in the output.
            // The default render option is ValueRenderOption.FORMATTED_VALUE.
            valueRenderOption?: string,
            // The major dimension that results should use.
            // 
            // For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`,
            // then requesting `range=A1:B2,majorDimension=ROWS` will return
            // `[[1,2],[3,4]]`,
            // whereas requesting `range=A1:B2,majorDimension=COLUMNS` will return
            // `[[1,3],[2,4]]`.
            majorDimension?: string,
            // The A1 notation of the values to retrieve.
            ranges?: string,
            // The ID of the spreadsheet to retrieve data from.
            spreadsheetId: string,
        }) : gapi.client.Request<BatchGetValuesResponse>;        
        
        // Appends values to a spreadsheet. The input range is used to search for
        // existing data and find a "table" within that range. Values will be
        // appended to the next row of the table, starting with the first column of
        // the table. See the
        // [guide](/sheets/api/guides/values#appending_values)
        // and
        // [sample code](/sheets/api/samples/writing#append_values)
        // for specific details of how tables are detected and data is appended.
        // 
        // The caller must specify the spreadsheet ID, range, and
        // a valueInputOption.  The `valueInputOption` only
        // controls how the input data will be added to the sheet (column-wise or
        // row-wise), it does not influence what cell the data starts being written
        // to.
        append (request: {        
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
            // Data format for response.
            alt?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // The A1 notation of a range to search for a logical table of data.
            // Values will be appended after the last row of the table.
            range: string,
            // Determines if the update response should include the values
            // of the cells that were appended. By default, responses
            // do not include the updated values.
            includeValuesInResponse?: boolean,
            // The ID of the spreadsheet to update.
            spreadsheetId: string,
            // Determines how values in the response should be rendered.
            // The default render option is ValueRenderOption.FORMATTED_VALUE.
            responseValueRenderOption?: string,
            // How the input data should be inserted.
            insertDataOption?: string,
            // How the input data should be interpreted.
            valueInputOption?: string,
            // Determines how dates, times, and durations in the response should be
            // rendered. This is ignored if response_value_render_option is
            // FORMATTED_VALUE.
            // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
            responseDateTimeRenderOption?: string,
        }) : gapi.client.Request<AppendValuesResponse>;        
        
        // Clears one or more ranges of values from a spreadsheet.
        // The caller must specify the spreadsheet ID and one or more ranges.
        // Only values are cleared -- all other properties of the cell (such as
        // formatting, data validation, etc..) are kept.
        batchClear (request: {        
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
            // Data format for response.
            alt?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // The ID of the spreadsheet to update.
            spreadsheetId: string,
        }) : gapi.client.Request<BatchClearValuesResponse>;        
        
        // Returns a range of values from a spreadsheet.
        // The caller must specify the spreadsheet ID and a range.
        get (request: {        
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
            // Data format for response.
            alt?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // The A1 notation of the values to retrieve.
            range: string,
            // How dates, times, and durations should be represented in the output.
            // This is ignored if value_render_option is
            // FORMATTED_VALUE.
            // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
            dateTimeRenderOption?: string,
            // How values should be represented in the output.
            // The default render option is ValueRenderOption.FORMATTED_VALUE.
            valueRenderOption?: string,
            // The major dimension that results should use.
            // 
            // For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`,
            // then requesting `range=A1:B2,majorDimension=ROWS` will return
            // `[[1,2],[3,4]]`,
            // whereas requesting `range=A1:B2,majorDimension=COLUMNS` will return
            // `[[1,3],[2,4]]`.
            majorDimension?: string,
            // The ID of the spreadsheet to retrieve data from.
            spreadsheetId: string,
        }) : gapi.client.Request<ValueRange>;        
        
    }
    
    
    interface SpreadsheetsResource {
        // Returns the spreadsheet at the given ID.
        // The caller must specify the spreadsheet ID.
        // 
        // By default, data within grids will not be returned.
        // You can include grid data one of two ways:
        // 
        // * Specify a field mask listing your desired fields using the `fields` URL
        // parameter in HTTP
        // 
        // * Set the includeGridData
        // URL parameter to true.  If a field mask is set, the `includeGridData`
        // parameter is ignored
        // 
        // For large spreadsheets, it is recommended to retrieve only the specific
        // fields of the spreadsheet that you want.
        // 
        // To retrieve only subsets of the spreadsheet, use the
        // ranges URL parameter.
        // Multiple ranges can be specified.  Limiting the range will
        // return only the portions of the spreadsheet that intersect the requested
        // ranges. Ranges are specified using A1 notation.
        get (request: {        
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
            // Data format for response.
            alt?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // True if grid data should be returned.
            // This parameter is ignored if a field mask was set in the request.
            includeGridData?: boolean,
            // The ranges to retrieve from the spreadsheet.
            ranges?: string,
            // The spreadsheet to request.
            spreadsheetId: string,
        }) : gapi.client.Request<Spreadsheet>;        
        
        // Applies one or more updates to the spreadsheet.
        // 
        // Each request is validated before
        // being applied. If any request is not valid then the entire request will
        // fail and nothing will be applied.
        // 
        // Some requests have replies to
        // give you some information about how
        // they are applied. The replies will mirror the requests.  For example,
        // if you applied 4 updates and the 3rd one had a reply, then the
        // response will have 2 empty replies, the actual reply, and another empty
        // reply, in that order.
        // 
        // Due to the collaborative nature of spreadsheets, it is not guaranteed that
        // the spreadsheet will reflect exactly your changes after this completes,
        // however it is guaranteed that the updates in the request will be
        // applied together atomically. Your changes may be altered with respect to
        // collaborator changes. If there are no collaborators, the spreadsheet
        // should reflect your changes.
        batchUpdate (request: {        
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
            // Data format for response.
            alt?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // The spreadsheet to apply the updates to.
            spreadsheetId: string,
        }) : gapi.client.Request<BatchUpdateSpreadsheetResponse>;        
        
        // Creates a spreadsheet, returning the newly created spreadsheet.
        create (request: {        
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
            // Data format for response.
            alt?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
        }) : gapi.client.Request<Spreadsheet>;        
        
        sheets: SheetsResource,
        values: ValuesResource,
    }
    
}

declare module gapi.client.sheets {
    var spreadsheets: gapi.client.sheets.SpreadsheetsResource; 
    
}
