// Type definitions for Google URL Shortener API v1
// Project: https://developers.google.com/url-shortener/v1/getting_started
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.urlshortener {
    
    interface AnalyticsSnapshot {
        // Top browsers, e.g. "Chrome"; sorted by (descending) click counts. Only present if this data is available.
        browsers?: StringCount[],        
        // Top countries (expressed as country codes), e.g. "US" or "DE"; sorted by (descending) click counts. Only present if this data is available.
        countries?: StringCount[],        
        // Number of clicks on all goo.gl short URLs pointing to this long URL.
        longUrlClicks?: string,
        // Top platforms or OSes, e.g. "Windows"; sorted by (descending) click counts. Only present if this data is available.
        platforms?: StringCount[],        
        // Top referring hosts, e.g. "www.google.com"; sorted by (descending) click counts. Only present if this data is available.
        referrers?: StringCount[],        
        // Number of clicks on this short URL.
        shortUrlClicks?: string,
    }
    
    interface AnalyticsSummary {
        // Click analytics over all time.
        allTime?: AnalyticsSnapshot,
        // Click analytics over the last day.
        day?: AnalyticsSnapshot,
        // Click analytics over the last month.
        month?: AnalyticsSnapshot,
        // Click analytics over the last two hours.
        twoHours?: AnalyticsSnapshot,
        // Click analytics over the last week.
        week?: AnalyticsSnapshot,
    }
    
    interface StringCount {
        // Number of clicks for this top entry, e.g. for this particular country or browser.
        count?: string,
        // Label assigned to this top entry, e.g. "US" or "Chrome".
        id?: string,
    }
    
    interface Url {
        // A summary of the click analytics for the short and long URL. Might not be present if not requested or currently unavailable.
        analytics?: AnalyticsSummary,
        // Time the short URL was created; ISO 8601 representation using the yyyy-MM-dd'T'HH:mm:ss.SSSZZ format, e.g. "2010-10-14T19:01:24.944+00:00".
        created?: string,
        // Short URL, e.g. "http://goo.gl/l6MS".
        id?: string,
        // The fixed string "urlshortener#url".
        kind?: string,
        // Long URL, e.g. "http://www.google.com/". Might not be present if the status is "REMOVED".
        longUrl?: string,
        // Status of the target URL. Possible values: "OK", "MALWARE", "PHISHING", or "REMOVED". A URL might be marked "REMOVED" if it was flagged as spam, for example.
        status?: string,
    }
    
    interface UrlHistory {
        // A list of URL resources.
        items?: Url[],        
        // Number of items returned with each full "page" of results. Note that the last page could have fewer items than the "itemsPerPage" value.
        itemsPerPage?: number,
        // The fixed string "urlshortener#urlHistory".
        kind?: string,
        // A token to provide to get the next page of results.
        nextPageToken?: string,
        // Total number of short URLs associated with this user (may be approximate).
        totalItems?: number,
    }
    
    interface UrlResource {
        // Expands a short URL or gets creation time and analytics.
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
            // Additional information to return.
            projection?: string,
            // The short URL, including the protocol.
            shortUrl: string,
        }) : gapi.client.Request<Url>;        
        
        // Creates a new short URL.
        insert (request: {        
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
        }) : gapi.client.Request<Url>;        
        
        // Retrieves a list of URLs shortened by a user.
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
            // Additional information to return.
            projection?: string,
            // Token for requesting successive pages of results.
            start-token?: string,
        }) : gapi.client.Request<UrlHistory>;        
        
    }
    
}

declare module gapi.client.urlshortener {
    var url: gapi.client.urlshortener.UrlResource; 
    
}
