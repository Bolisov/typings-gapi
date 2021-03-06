// Type definitions for Google Ad Exchange Seller API v1
// Project: https://developers.google.com/ad-exchange/seller-rest/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.adexchangeseller {
    
    interface AdClient {
        // Whether this ad client is opted in to ARC.
        arcOptIn?: boolean,
        // Unique identifier of this ad client.
        id?: string,
        // Kind of resource this is, in this case adexchangeseller#adClient.
        kind?: string,
        // This ad client's product code, which corresponds to the PRODUCT_CODE report dimension.
        productCode?: string,
        // Whether this ad client supports being reported on.
        supportsReporting?: boolean,
    }
    
    interface AdClients {
        // ETag of this response for caching purposes.
        etag?: string,
        // The ad clients returned in this list response.
        items?: AdClient[],        
        // Kind of list this is, in this case adexchangeseller#adClients.
        kind?: string,
        // Continuation token used to page through ad clients. To retrieve the next page of results, set the next request's "pageToken" value to this.
        nextPageToken?: string,
    }
    
    interface AdUnit {
        // Identity code of this ad unit, not necessarily unique across ad clients.
        code?: string,
        // Unique identifier of this ad unit. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
        id?: string,
        // Kind of resource this is, in this case adexchangeseller#adUnit.
        kind?: string,
        // Name of this ad unit.
        name?: string,
        // Status of this ad unit. Possible values are:
        // NEW: Indicates that the ad unit was created within the last seven days and does not yet have any activity associated with it.
        // 
        // ACTIVE: Indicates that there has been activity on this ad unit in the last seven days.
        // 
        // INACTIVE: Indicates that there has been no activity on this ad unit in the last seven days.
        status?: string,
    }
    
    interface AdUnits {
        // ETag of this response for caching purposes.
        etag?: string,
        // The ad units returned in this list response.
        items?: AdUnit[],        
        // Kind of list this is, in this case adexchangeseller#adUnits.
        kind?: string,
        // Continuation token used to page through ad units. To retrieve the next page of results, set the next request's "pageToken" value to this.
        nextPageToken?: string,
    }
    
    interface CustomChannel {
        // Code of this custom channel, not necessarily unique across ad clients.
        code?: string,
        // Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
        id?: string,
        // Kind of resource this is, in this case adexchangeseller#customChannel.
        kind?: string,
        // Name of this custom channel.
        name?: string,
        // The targeting information of this custom channel, if activated.
        targetingInfo?: {        
            // The name used to describe this channel externally.
            adsAppearOn?: string,
            // The external description of the channel.
            description?: string,
            // The locations in which ads appear. (Only valid for content and mobile content ads). Acceptable values for content ads are: TOP_LEFT, TOP_CENTER, TOP_RIGHT, MIDDLE_LEFT, MIDDLE_CENTER, MIDDLE_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT, MULTIPLE_LOCATIONS. Acceptable values for mobile content ads are: TOP, MIDDLE, BOTTOM, MULTIPLE_LOCATIONS.
            location?: string,
            // The language of the sites ads will be displayed on.
            siteLanguage?: string,
        },        
    }
    
    interface CustomChannels {
        // ETag of this response for caching purposes.
        etag?: string,
        // The custom channels returned in this list response.
        items?: CustomChannel[],        
        // Kind of list this is, in this case adexchangeseller#customChannels.
        kind?: string,
        // Continuation token used to page through custom channels. To retrieve the next page of results, set the next request's "pageToken" value to this.
        nextPageToken?: string,
    }
    
    interface Report {
        // The averages of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
        averages?: string[],        
        // The header information of the columns requested in the report. This is a list of headers; one for each dimension in the request, followed by one for each metric in the request.
        headers?: {        
            // The currency of this column. Only present if the header type is METRIC_CURRENCY.
            currency?: string,
            // The name of the header.
            name?: string,
            // The type of the header; one of DIMENSION, METRIC_TALLY, METRIC_RATIO, or METRIC_CURRENCY.
            type?: string,
        }[],        
        // Kind this is, in this case adexchangeseller#report.
        kind?: string,
        // The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request. The dimension cells contain strings, and the metric cells contain numbers.
        rows?: string[][],        
        // The total number of rows matched by the report request. Fewer rows may be returned in the response due to being limited by the row count requested or the report row limit.
        totalMatchedRows?: string,
        // The totals of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
        totals?: string[],        
        // Any warnings associated with generation of the report.
        warnings?: string[],        
    }
    
    interface SavedReport {
        // Unique identifier of this saved report.
        id?: string,
        // Kind of resource this is, in this case adexchangeseller#savedReport.
        kind?: string,
        // This saved report's name.
        name?: string,
    }
    
    interface SavedReports {
        // ETag of this response for caching purposes.
        etag?: string,
        // The saved reports returned in this list response.
        items?: SavedReport[],        
        // Kind of list this is, in this case adexchangeseller#savedReports.
        kind?: string,
        // Continuation token used to page through saved reports. To retrieve the next page of results, set the next request's "pageToken" value to this.
        nextPageToken?: string,
    }
    
    interface UrlChannel {
        // Unique identifier of this URL channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
        id?: string,
        // Kind of resource this is, in this case adexchangeseller#urlChannel.
        kind?: string,
        // URL Pattern of this URL channel. Does not include "http://" or "https://". Example: www.example.com/home
        urlPattern?: string,
    }
    
    interface UrlChannels {
        // ETag of this response for caching purposes.
        etag?: string,
        // The URL channels returned in this list response.
        items?: UrlChannel[],        
        // Kind of list this is, in this case adexchangeseller#urlChannels.
        kind?: string,
        // Continuation token used to page through URL channels. To retrieve the next page of results, set the next request's "pageToken" value to this.
        nextPageToken?: string,
    }
    
    interface AdclientsResource {
        // List all ad clients in this Ad Exchange account.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The maximum number of ad clients to include in the response, used for paging.
            maxResults?: number,
            // A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<AdClients>;        
        
    }
    
    
    interface CustomchannelsResource {
        // List all custom channels which the specified ad unit belongs to.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // Ad client which contains the ad unit.
            adClientId: string,
            // Ad unit for which to list custom channels.
            adUnitId: string,
            // The maximum number of custom channels to include in the response, used for paging.
            maxResults?: number,
            // A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<CustomChannels>;        
        
    }
    
    
    interface AdunitsResource {
        // Gets the specified ad unit in the specified ad client.
        get (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // Ad client for which to get the ad unit.
            adClientId: string,
            // Ad unit to retrieve.
            adUnitId: string,
        }) : gapi.client.Request<AdUnit>;        
        
        // List all ad units in the specified ad client for this Ad Exchange account.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // Ad client for which to list ad units.
            adClientId: string,
            // Whether to include inactive ad units. Default: true.
            includeInactive?: boolean,
            // The maximum number of ad units to include in the response, used for paging.
            maxResults?: number,
            // A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<AdUnits>;        
        
        customchannels: CustomchannelsResource,
    }
    
    
    interface AdunitsResource {
        // List all ad units in the specified custom channel.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // Ad client which contains the custom channel.
            adClientId: string,
            // Custom channel for which to list ad units.
            customChannelId: string,
            // Whether to include inactive ad units. Default: true.
            includeInactive?: boolean,
            // The maximum number of ad units to include in the response, used for paging.
            maxResults?: number,
            // A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<AdUnits>;        
        
    }
    
    
    interface CustomchannelsResource {
        // Get the specified custom channel from the specified ad client.
        get (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // Ad client which contains the custom channel.
            adClientId: string,
            // Custom channel to retrieve.
            customChannelId: string,
        }) : gapi.client.Request<CustomChannel>;        
        
        // List all custom channels in the specified ad client for this Ad Exchange account.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // Ad client for which to list custom channels.
            adClientId: string,
            // The maximum number of custom channels to include in the response, used for paging.
            maxResults?: number,
            // A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<CustomChannels>;        
        
        adunits: AdunitsResource,
    }
    
    
    interface SavedResource {
        // Generate an Ad Exchange report based on the saved report ID sent in the query parameters.
        generate (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
            locale?: string,
            // The maximum number of rows of report data to return.
            maxResults?: number,
            // The saved report to retrieve.
            savedReportId: string,
            // Index of the first row of report data to return.
            startIndex?: number,
        }) : gapi.client.Request<Report>;        
        
        // List all saved reports in this Ad Exchange account.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The maximum number of saved reports to include in the response, used for paging.
            maxResults?: number,
            // A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<SavedReports>;        
        
    }
    
    
    interface ReportsResource {
        // Generate an Ad Exchange report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
        generate (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // Dimensions to base the report on.
            dimension?: string,
            // End of the date range to report on in "YYYY-MM-DD" format, inclusive.
            endDate: string,
            // Filters to be run on the report.
            filter?: string,
            // Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
            locale?: string,
            // The maximum number of rows of report data to return.
            maxResults?: number,
            // Numeric columns to include in the report.
            metric?: string,
            // The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
            sort?: string,
            // Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
            startDate: string,
            // Index of the first row of report data to return.
            startIndex?: number,
        }) : gapi.client.Request<Report>;        
        
        saved: SavedResource,
    }
    
    
    interface UrlchannelsResource {
        // List all URL channels in the specified ad client for this Ad Exchange account.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // Ad client for which to list URL channels.
            adClientId: string,
            // The maximum number of URL channels to include in the response, used for paging.
            maxResults?: number,
            // A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<UrlChannels>;        
        
    }
    
}

declare module gapi.client.adexchangeseller {
    var adclients: gapi.client.adexchangeseller.AdclientsResource; 
    
    var adunits: gapi.client.adexchangeseller.AdunitsResource; 
    
    var customchannels: gapi.client.adexchangeseller.CustomchannelsResource; 
    
    var reports: gapi.client.adexchangeseller.ReportsResource; 
    
    var urlchannels: gapi.client.adexchangeseller.UrlchannelsResource; 
    
}
