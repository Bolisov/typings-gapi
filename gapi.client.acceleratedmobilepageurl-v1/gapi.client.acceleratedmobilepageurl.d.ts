// Type definitions for Google Accelerated Mobile Pages (AMP) URL API v1
// Project: https://developers.google.com/amp/cache/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.acceleratedmobilepageurl {
    
    interface BatchGetAmpUrlsResponse {
        // The errors for requested URLs that have no AMP URL.
        urlErrors?: AmpUrlError[],        
        // For each URL in BatchAmpUrlsRequest, the URL response. The response might
        // not be in the same order as URLs in the batch request.
        // If BatchAmpUrlsRequest contains duplicate URLs, AmpUrl is generated
        // only once.
        ampUrls?: AmpUrl[],        
    }
    
    interface AmpUrl {
        // The [AMP Cache URL](/amp/cache/overview#amp-cache-url-format) pointing to
        // the cached document in the Google AMP Cache.
        cdnAmpUrl?: string,
        // The AMP URL pointing to the publisher's web server.
        ampUrl?: string,
        // The original non-AMP URL.
        originalUrl?: string,
    }
    
    interface AmpUrlError {
        // The error code of an API call.
        errorCode?: string,
        // The original non-AMP URL.
        originalUrl?: string,
        // An optional descriptive error message.
        errorMessage?: string,
    }
    
    interface BatchGetAmpUrlsRequest {
        // List of URLs to look up for the paired AMP URLs.
        // The URLs are case-sensitive. Up to 50 URLs per lookup
        // (see [Usage Limits](/amp/cache/reference/limits)).
        urls?: string[],        
        // The lookup_strategy being requested.
        lookupStrategy?: string,
    }
    
    interface AmpUrlsResource {
        // Returns AMP URL(s) and equivalent
        // [AMP Cache URL(s)](/amp/cache/overview#amp-cache-url-format).
        batchGet (request: {        
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
            // Data format for response.
            alt?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
        }) : gapi.client.Request<BatchGetAmpUrlsResponse>;        
        
    }
    
}

declare module gapi.client.acceleratedmobilepageurl {
    var ampUrls: gapi.client.acceleratedmobilepageurl.AmpUrlsResource; 
    
}
