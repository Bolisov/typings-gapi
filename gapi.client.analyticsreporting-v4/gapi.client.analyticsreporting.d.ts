// Type definitions for Google Google Analytics Reporting API v4
// Project: https://developers.google.com/analytics/devguides/reporting/core/v4/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.analyticsreporting {
    
    interface DimensionFilterClause {
        // The repeated set of filters. They are logically combined based on the
        // operator specified.
        filters?: DimensionFilter[],        
        // The operator for combining multiple dimension filters. If unspecified, it
        // is treated as an `OR`.
        operator?: string,
    }
    
    interface GetReportsResponse {
        // Responses corresponding to each of the request.
        reports?: Report[],        
    }
    
    interface SequenceSegment {
        // The list of steps in the sequence.
        segmentSequenceSteps?: SegmentSequenceStep[],        
        // If set, first step condition must match the first hit of the visitor (in
        // the date range).
        firstStepShouldMatchFirstHit?: boolean,
    }
    
    interface SegmentMetricFilter {
        // The value to compare against. If the operator is `BETWEEN`, this value is
        // treated as minimum comparison value.
        comparisonValue?: string,
        // Specifies is the operation to perform to compare the metric. The default
        // is `EQUAL`.
        operator?: string,
        // The metric that will be filtered on. A `metricFilter` must contain a
        // metric name.
        metricName?: string,
        // Scope for a metric defines the level at which that metric is defined.  The
        // specified metric scope must be equal to or greater than its primary scope
        // as defined in the data model. The primary scope is defined by if the
        // segment is selecting users or sessions.
        scope?: string,
        // Max comparison value is only used for `BETWEEN` operator.
        maxComparisonValue?: string,
    }
    
    interface DateRangeValues {
        // Each value corresponds to each Metric in the request.
        values?: string[],        
        // The values of each pivot region.
        pivotValueRegions?: PivotValueRegion[],        
    }
    
    interface CohortGroup {
        // The definition for the cohort.
        cohorts?: Cohort[],        
        // Enable Life Time Value (LTV).  LTV measures lifetime value for users
        // acquired through different channels.
        // Please see:
        // [Cohort Analysis](https://support.google.com/analytics/answer/6074676) and
        // [Lifetime Value](https://support.google.com/analytics/answer/6182550)
        // If the value of lifetimeValue is false:
        // 
        // - The metric values are similar to the values in the web interface cohort
        //   report.
        // - The cohort definition date ranges must be aligned to the calendar week
        //   and month. i.e. while requesting `ga:cohortNthWeek` the `startDate` in
        //   the cohort definition should be a Sunday and the `endDate` should be the
        //   following Saturday, and for `ga:cohortNthMonth`, the `startDate`
        //   should be the 1st of the month and `endDate` should be the last day
        //   of the month.
        // 
        // When the lifetimeValue is true:
        // 
        // - The metric values will correspond to the values in the web interface
        //   LifeTime value report.
        // - The Lifetime Value report shows you how user value (Revenue) and
        //   engagement (Appviews, Goal Completions, Sessions, and Session Duration)
        //   grow during the 90 days after a user is acquired.
        // - The metrics are calculated as a cumulative average per user per the time
        //   increment.
        // - The cohort definition date ranges need not be aligned to the calendar
        //   week and month boundaries.
        // - The `viewId` must be an
        //   [app view ID](https://support.google.com/analytics/answer/2649553#WebVersusAppViews)
        lifetimeValue?: boolean,
    }
    
    interface GetReportsRequest {
        // Requests, each request will have a separate response.
        // There can be a maximum of 5 requests. All requests should have the same
        // `dateRanges`, `viewId`, `segments`, `samplingLevel`, and `cohortGroup`.
        reportRequests?: ReportRequest[],        
    }
    
    interface Pivot {
        // If k metrics were requested, then the response will contain some
        // data-dependent multiple of k columns in the report.  E.g., if you pivoted
        // on the dimension `ga:browser` then you'd get k columns for "Firefox", k
        // columns for "IE", k columns for "Chrome", etc. The ordering of the groups
        // of columns is determined by descending order of "total" for the first of
        // the k values.  Ties are broken by lexicographic ordering of the first
        // pivot dimension, then lexicographic ordering of the second pivot
        // dimension, and so on.  E.g., if the totals for the first value for
        // Firefox, IE, and Chrome were 8, 2, 8, respectively, the order of columns
        // would be Chrome, Firefox, IE.
        // 
        // The following let you choose which of the groups of k columns are
        // included in the response.
        startGroup?: number,
        // The pivot metrics. Pivot metrics are part of the
        // restriction on total number of metrics allowed in the request.
        metrics?: Metric[],        
        // DimensionFilterClauses are logically combined with an `AND` operator: only
        // data that is included by all these DimensionFilterClauses contributes to
        // the values in this pivot region. Dimension filters can be used to restrict
        // the columns shown in the pivot region. For example if you have
        // `ga:browser` as the requested dimension in the pivot region, and you
        // specify key filters to restrict `ga:browser` to only "IE" or "Firefox",
        // then only those two browsers would show up as columns.
        dimensionFilterClauses?: DimensionFilterClause[],        
        // A list of dimensions to show as pivot columns. A Pivot can have a maximum
        // of 4 dimensions. Pivot dimensions are part of the restriction on the
        // total number of dimensions allowed in the request.
        dimensions?: Dimension[],        
        // Specifies the maximum number of groups to return.
        // The default value is 10, also the maximum value is 1,000.
        maxGroupCount?: number,
    }
    
    interface PivotHeaderEntry {
        // The metric header for the metric in the pivot.
        metric?: MetricHeaderEntry,
        // The name of the dimensions in the pivot response.
        dimensionNames?: string[],        
        // The values for the dimensions in the pivot.
        dimensionValues?: string[],        
    }
    
    interface SegmentFilter {
        // A Simple segment conditions consist of one or more dimension/metric
        // conditions that can be combined
        simpleSegment?: SimpleSegment,
        // Sequence conditions consist of one or more steps, where each step is
        // defined by one or more dimension/metric conditions. Multiple steps can
        // be combined with special sequence operators.
        sequenceSegment?: SequenceSegment,
        // If true, match the complement of simple or sequence segment.
        // For example, to match all visits not from "New York", we can define the
        // segment as follows:
        // 
        //       "sessionSegment": {
        //         "segmentFilters": [{
        //           "simpleSegment" :{
        //             "orFiltersForSegment": [{
        //               "segmentFilterClauses":[{
        //                 "dimensionFilter": {
        //                   "dimensionName": "ga:city",
        //                   "expressions": ["New York"]
        //                 }
        //               }]
        //             }]
        //           },
        //           "not": "True"
        //         }]
        //       },
        not?: boolean,
    }
    
    interface SegmentDefinition {
        // A segment is defined by a set of segment filters which are combined
        // together with a logical `AND` operation.
        segmentFilters?: SegmentFilter[],        
    }
    
    interface MetricHeaderEntry {
        // The name of the header.
        name?: string,
        // The type of the metric, for example `INTEGER`.
        type?: string,
    }
    
    interface ReportData {
        // The last time the data in the report was refreshed. All the hits received
        // before this timestamp are included in the calculation of the report.
        dataLastRefreshed?: string,
        // Minimum and maximum values seen over all matching rows. These are both
        // empty when `hideValueRanges` in the request is false, or when
        // rowCount is zero.
        maximums?: DateRangeValues[],        
        // Minimum and maximum values seen over all matching rows. These are both
        // empty when `hideValueRanges` in the request is false, or when
        // rowCount is zero.
        minimums?: DateRangeValues[],        
        // If the results are
        // [sampled](https://support.google.com/analytics/answer/2637192),
        // this returns the total number of
        // samples present, one entry per date range. If the results are not sampled
        // this field will not be defined. See
        // [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling)
        // for details.
        samplingSpaceSizes?: string[],        
        // For each requested date range, for the set of all rows that match
        // the query, every requested value format gets a total. The total
        // for a value format is computed by first totaling the metrics
        // mentioned in the value format and then evaluating the value
        // format as a scalar expression.  E.g., The "totals" for
        // `3 / (ga:sessions + 2)` we compute
        // `3 / ((sum of all relevant ga:sessions) + 2)`.
        // Totals are computed before pagination.
        totals?: DateRangeValues[],        
        // If the results are
        // [sampled](https://support.google.com/analytics/answer/2637192),
        // this returns the total number of samples read, one entry per date range.
        // If the results are not sampled this field will not be defined. See
        // [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling)
        // for details.
        samplesReadCounts?: string[],        
        // Total number of matching rows for this query.
        rowCount?: number,
        // There's one ReportRow for every unique combination of dimensions.
        rows?: ReportRow[],        
        // Indicates if response to this request is golden or not. Data is
        // golden when the exact same request will not produce any new results if
        // asked at a later point in time.
        isDataGolden?: boolean,
    }
    
    interface DimensionFilter {
        // Should the match be case sensitive? Default is false.
        caseSensitive?: boolean,
        // How to match the dimension to the expression. The default is REGEXP.
        operator?: string,
        // The dimension to filter on. A DimensionFilter must contain a dimension.
        dimensionName?: string,
        // Strings or regular expression to match against. Only the first value of
        // the list is used for comparison unless the operator is `IN_LIST`.
        // If `IN_LIST` operator, then the entire list is used to filter the
        // dimensions as explained in the description of the `IN_LIST` operator.
        expressions?: string[],        
        // Logical `NOT` operator. If this boolean is set to true, then the matching
        // dimension values will be excluded in the report. The default is false.
        not?: boolean,
    }
    
    interface Segment {
        // A dynamic segment definition in the request.
        dynamicSegment?: DynamicSegment,
        // The segment ID of a built-in or custom segment, for example `gaid::-3`.
        segmentId?: string,
    }
    
    interface OrderBy {
        // The sorting order for the field.
        sortOrder?: string,
        // The order type. The default orderType is `VALUE`.
        orderType?: string,
        // The field which to sort by. The default sort order is ascending. Example:
        // `ga:browser`.
        // Note, that you can only specify one field for sort here. For example,
        // `ga:browser, ga:city` is not valid.
        fieldName?: string,
    }
    
    interface SegmentDimensionFilter {
        // Should the match be case sensitive, ignored for `IN_LIST` operator.
        caseSensitive?: boolean,
        // Minimum comparison values for `BETWEEN` match type.
        minComparisonValue?: string,
        // Maximum comparison values for `BETWEEN` match type.
        maxComparisonValue?: string,
        // Name of the dimension for which the filter is being applied.
        dimensionName?: string,
        // The operator to use to match the dimension with the expressions.
        operator?: string,
        // The list of expressions, only the first element is used for all operators
        expressions?: string[],        
    }
    
    interface SegmentSequenceStep {
        // A sequence is specified with a list of Or grouped filters which are
        // combined with `AND` operator.
        orFiltersForSegment?: OrFiltersForSegment[],        
        // Specifies if the step immediately precedes or can be any time before the
        // next step.
        matchType?: string,
    }
    
    interface Metric {
        // Specifies how the metric expression should be formatted, for example
        // `INTEGER`.
        formattingType?: string,
        // An alias for the metric expression is an alternate name for the
        // expression. The alias can be used for filtering and sorting. This field
        // is optional and is useful if the expression is not a single metric but
        // a complex expression which cannot be used in filtering and sorting.
        // The alias is also used in the response column header.
        alias?: string,
        // A metric expression in the request. An expression is constructed from one
        // or more metrics and numbers. Accepted operators include: Plus (+), Minus
        // (-), Negation (Unary -), Divided by (/), Multiplied by (*), Parenthesis,
        // Positive cardinal numbers (0-9), can include decimals and is limited to
        // 1024 characters. Example `ga:totalRefunds/ga:users`, in most cases the
        // metric expression is just a single metric name like `ga:users`.
        // Adding mixed `MetricType` (E.g., `CURRENCY` + `PERCENTAGE`) metrics
        // will result in unexpected results.
        expression?: string,
    }
    
    interface PivotValueRegion {
        // The values of the metrics in each of the pivot regions.
        values?: string[],        
    }
    
    interface Report {
        // Page token to retrieve the next page of results in the list.
        nextPageToken?: string,
        // Response data.
        data?: ReportData,
        // The column headers.
        columnHeader?: ColumnHeader,
    }
    
    interface PivotHeader {
        // A single pivot section header.
        pivotHeaderEntries?: PivotHeaderEntry[],        
        // The total number of groups for this pivot.
        totalPivotGroupsCount?: number,
    }
    
    interface DateRange {
        // The start date for the query in the format `YYYY-MM-DD`.
        startDate?: string,
        // The end date for the query in the format `YYYY-MM-DD`.
        endDate?: string,
    }
    
    interface ReportRequest {
        // The metric filter clauses. They are logically combined with the `AND`
        // operator.  Metric filters look at only the first date range and not the
        // comparing date range. Note that filtering on metrics occurs after the
        // metrics are aggregated.
        metricFilterClauses?: MetricFilterClause[],        
        // Page size is for paging and specifies the maximum number of returned rows.
        // Page size should be >= 0. A query returns the default of 1,000 rows.
        // The Analytics Core Reporting API returns a maximum of 10,000 rows per
        // request, no matter how many you ask for. It can also return fewer rows
        // than requested, if there aren't as many dimension segments as you expect.
        // For instance, there are fewer than 300 possible values for `ga:country`,
        // so when segmenting only by country, you can't get more than 300 rows,
        // even if you set `pageSize` to a higher value.
        pageSize?: number,
        // If set to true, hides the total of all metrics for all the matching rows,
        // for every date range. The default false and will return the totals.
        hideTotals?: boolean,
        // If set to true, hides the minimum and maximum across all matching rows.
        // The default is false and the value ranges are returned.
        hideValueRanges?: boolean,
        // Dimension or metric filters that restrict the data returned for your
        // request. To use the `filtersExpression`, supply a dimension or metric on
        // which to filter, followed by the filter expression. For example, the
        // following expression selects `ga:browser` dimension which starts with
        // Firefox; `ga:browser=~^Firefox`. For more information on dimensions
        // and metric filters, see
        // [Filters reference](https://developers.google.com/analytics/devguides/reporting/core/v3/reference#filters).
        filtersExpression?: string,
        // Cohort group associated with this request. If there is a cohort group
        // in the request the `ga:cohort` dimension must be present.
        // Every [ReportRequest](#ReportRequest) within a `batchGet` method must
        // contain the same `cohortGroup` definition.
        cohortGroup?: CohortGroup,
        // The Analytics
        // [view ID](https://support.google.com/analytics/answer/1009618)
        // from which to retrieve data. Every [ReportRequest](#ReportRequest)
        // within a `batchGet` method must contain the same `viewId`.
        viewId?: string,
        // The metrics requested.
        // Requests must specify at least one metric. Requests can have a
        // total of 10 metrics.
        metrics?: Metric[],        
        // The dimension filter clauses for filtering Dimension Values. They are
        // logically combined with the `AND` operator. Note that filtering occurs
        // before any dimensions are aggregated, so that the returned metrics
        // represent the total for only the relevant dimensions.
        dimensionFilterClauses?: DimensionFilterClause[],        
        // Sort order on output rows. To compare two rows, the elements of the
        // following are applied in order until a difference is found.  All date
        // ranges in the output get the same row order.
        orderBys?: OrderBy[],        
        // Segment the data returned for the request. A segment definition helps look
        // at a subset of the segment request. A request can contain up to four
        // segments. Every [ReportRequest](#ReportRequest) within a
        // `batchGet` method must contain the same `segments` definition. Requests
        // with segments must have the `ga:segment` dimension.
        segments?: Segment[],        
        // The desired report
        // [sample](https://support.google.com/analytics/answer/2637192) size.
        // If the the `samplingLevel` field is unspecified the `DEFAULT` sampling
        // level is used. Every [ReportRequest](#ReportRequest) within a
        // `batchGet` method must contain the same `samplingLevel` definition. See
        // [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling)
        //  for details.
        samplingLevel?: string,
        // The dimensions requested.
        // Requests can have a total of 7 dimensions.
        dimensions?: Dimension[],        
        // A continuation token to get the next page of the results. Adding this to
        // the request will return the rows after the pageToken. The pageToken should
        // be the value returned in the nextPageToken parameter in the response to
        // the GetReports request.
        pageToken?: string,
        // Date ranges in the request. The request can have a maximum of 2 date
        // ranges. The response will contain a set of metric values for each
        // combination of the dimensions for each date range in the request. So, if
        // there are two date ranges, there will be two set of metric values, one for
        // the original date range and one for the second date range.
        // The `reportRequest.dateRanges` field should not be specified for cohorts
        // or Lifetime value requests.
        // If a date range is not provided, the default date range is (startDate:
        // current date - 7 days, endDate: current date - 1 day). Every
        // [ReportRequest](#ReportRequest) within a `batchGet` method must
        // contain the same `dateRanges` definition.
        dateRanges?: DateRange[],        
        // The pivot definitions. Requests can have a maximum of 2 pivots.
        pivots?: Pivot[],        
        // If set to false, the response does not include rows if all the retrieved
        // metrics are equal to zero. The default is false which will exclude these
        // rows.
        includeEmptyRows?: boolean,
    }
    
    interface MetricFilter {
        // The value to compare against.
        comparisonValue?: string,
        // Is the metric `EQUAL`, `LESS_THAN` or `GREATER_THAN` the
        // comparisonValue, the default is `EQUAL`. If the operator is
        // `IS_MISSING`, checks if the metric is missing and would ignore the
        // comparisonValue.
        operator?: string,
        // Logical `NOT` operator. If this boolean is set to true, then the matching
        // metric values will be excluded in the report. The default is false.
        not?: boolean,
        // The metric that will be filtered on. A metricFilter must contain a metric
        // name. A metric name can be an alias earlier defined as a metric or it can
        // also be a metric expression.
        metricName?: string,
    }
    
    interface Dimension {
        // If non-empty, we place dimension values into buckets after string to
        // int64. Dimension values that are not the string representation of an
        // integral value will be converted to zero.  The bucket values have to be in
        // increasing order.  Each bucket is closed on the lower end, and open on the
        // upper end. The "first" bucket includes all values less than the first
        // boundary, the "last" bucket includes all values up to infinity. Dimension
        // values that fall in a bucket get transformed to a new dimension value. For
        // example, if one gives a list of "0, 1, 3, 4, 7", then we return the
        // following buckets:
        // 
        // - bucket #1: values < 0, dimension value "<0"
        // - bucket #2: values in [0,1), dimension value "0"
        // - bucket #3: values in [1,3), dimension value "1-2"
        // - bucket #4: values in [3,4), dimension value "3"
        // - bucket #5: values in [4,7), dimension value "4-6"
        // - bucket #6: values >= 7, dimension value "7+"
        // 
        // NOTE: If you are applying histogram mutation on any dimension, and using
        // that dimension in sort, you will want to use the sort type
        // `HISTOGRAM_BUCKET` for that purpose. Without that the dimension values
        // will be sorted according to dictionary
        // (lexicographic) order. For example the ascending dictionary order is:
        // 
        //    "<50", "1001+", "121-1000", "50-120"
        // 
        // And the ascending `HISTOGRAM_BUCKET` order is:
        // 
        //    "<50", "50-120", "121-1000", "1001+"
        // 
        // The client has to explicitly request `"orderType": "HISTOGRAM_BUCKET"`
        // for a histogram-mutated dimension.
        histogramBuckets?: string[],        
        // Name of the dimension to fetch, for example `ga:browser`.
        name?: string,
    }
    
    interface DynamicSegment {
        // Session Segment to select sessions to include in the segment.
        sessionSegment?: SegmentDefinition,
        // The name of the dynamic segment.
        name?: string,
        // User Segment to select users to include in the segment.
        userSegment?: SegmentDefinition,
    }
    
    interface SimpleSegment {
        // A list of segment filters groups which are combined with logical `AND`
        // operator.
        orFiltersForSegment?: OrFiltersForSegment[],        
    }
    
    interface ColumnHeader {
        // The dimension names in the response.
        dimensions?: string[],        
        // Metric headers for the metrics in the response.
        metricHeader?: MetricHeader,
    }
    
    interface SegmentFilterClause {
        // Metric Filter for the segment definition.
        metricFilter?: SegmentMetricFilter,
        // Matches the complement (`!`) of the filter.
        not?: boolean,
        // Dimension Filter for the segment definition.
        dimensionFilter?: SegmentDimensionFilter,
    }
    
    interface MetricFilterClause {
        // The repeated set of filters. They are logically combined based on the
        // operator specified.
        filters?: MetricFilter[],        
        // The operator for combining multiple metric filters. If unspecified, it is
        // treated as an `OR`.
        operator?: string,
    }
    
    interface Cohort {
        // This is used for `FIRST_VISIT_DATE` cohort, the cohort selects users
        // whose first visit date is between start date and end date defined in the
        // DateRange. The date ranges should be aligned for cohort requests. If the
        // request contains `ga:cohortNthDay` it should be exactly one day long,
        // if `ga:cohortNthWeek` it should be aligned to the week boundary (starting
        // at Sunday and ending Saturday), and for `ga:cohortNthMonth` the date range
        // should be aligned to the month (starting at the first and ending on the
        // last day of the month).
        // For LTV requests there are no such restrictions.
        // You do not need to supply a date range for the
        // `reportsRequest.dateRanges` field.
        dateRange?: DateRange,
        // A unique name for the cohort. If not defined name will be auto-generated
        // with values cohort_[1234...].
        name?: string,
        // Type of the cohort. The only supported type as of now is
        // `FIRST_VISIT_DATE`. If this field is unspecified the cohort is treated
        // as `FIRST_VISIT_DATE` type cohort.
        type?: string,
    }
    
    interface ReportRow {
        // List of metrics for each requested DateRange.
        metrics?: DateRangeValues[],        
        // List of requested dimensions.
        dimensions?: string[],        
    }
    
    interface OrFiltersForSegment {
        // List of segment filters to be combined with a `OR` operator.
        segmentFilterClauses?: SegmentFilterClause[],        
    }
    
    interface MetricHeader {
        // Headers for the pivots in the response.
        pivotHeaders?: PivotHeader[],        
        // Headers for the metrics in the response.
        metricHeaderEntries?: MetricHeaderEntry[],        
    }
    
    interface ReportsResource {
        // Returns the Analytics data.
        batchGet (request: {        
            // Data format for response.
            alt?: string,
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
        }) : gapi.client.Request<GetReportsResponse>;        
        
    }
    
}

declare module gapi.client.analyticsreporting {
    var reports: gapi.client.analyticsreporting.ReportsResource; 
    
}
