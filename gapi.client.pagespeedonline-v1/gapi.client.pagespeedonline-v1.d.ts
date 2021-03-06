// Type definitions for Google PageSpeed Insights API v1
// Project: https://developers.google.com/speed/docs/insights/v1/getting_started
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.pagespeedonline {
    
    interface Result {
        // Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server.
        formattedResults?: {        
            // The locale of the formattedResults, e.g. "en_US".
            locale?: string,
            // Dictionary of formatted rule results, with one entry for each PageSpeed rule instantiated and run by the server.
            ruleResults?: any,
        },        
        // Canonicalized and final URL for the document, after following page redirects (if any).
        id?: string,
        // List of rules that were specified in the request, but which the server did not know how to instantiate.
        invalidRules?: string[],        
        // Kind of result.
        kind?: string,
        // Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc.
        pageStats?: {        
            // Number of uncompressed response bytes for CSS resources on the page.
            cssResponseBytes?: string,
            // Number of response bytes for flash resources on the page.
            flashResponseBytes?: string,
            // Number of uncompressed response bytes for the main HTML document and all iframes on the page.
            htmlResponseBytes?: string,
            // Number of response bytes for image resources on the page.
            imageResponseBytes?: string,
            // Number of uncompressed response bytes for JS resources on the page.
            javascriptResponseBytes?: string,
            // Number of CSS resources referenced by the page.
            numberCssResources?: number,
            // Number of unique hosts referenced by the page.
            numberHosts?: number,
            // Number of JavaScript resources referenced by the page.
            numberJsResources?: number,
            // Number of HTTP resources loaded by the page.
            numberResources?: number,
            // Number of static (i.e. cacheable) resources on the page.
            numberStaticResources?: number,
            // Number of response bytes for other resources on the page.
            otherResponseBytes?: string,
            // Number of uncompressed response bytes for text resources not covered by other statistics (i.e non-HTML, non-script, non-CSS resources) on the page.
            textResponseBytes?: string,
            // Total size of all request bytes sent by the page.
            totalRequestBytes?: string,
        },        
        // Response code for the document. 200 indicates a normal page load. 4xx/5xx indicates an error.
        responseCode?: number,
        // The PageSpeed Score (0-100), which indicates how much faster a page could be. A high score indicates little room for improvement, while a lower score indicates more room for improvement.
        score?: number,
        // Base64-encoded screenshot of the page that was analyzed.
        screenshot?: {        
            // Image data base64 encoded.
            data?: string,
            // Height of screenshot in pixels.
            height?: number,
            // Mime type of image data. E.g. "image/jpeg".
            mime_type?: string,
            // Width of screenshot in pixels.
            width?: number,
        },        
        // Title of the page, as displayed in the browser's title bar.
        title?: string,
        // The version of PageSpeed used to generate these results.
        version?: {        
            // The major version number of PageSpeed used to generate these results.
            major?: number,
            // The minor version number of PageSpeed used to generate these results.
            minor?: number,
        },        
    }
    
    interface PagespeedapiResource {
        // Runs PageSpeed analysis on the page at the specified URL, and returns a PageSpeed score, a list of suggestions to make that page faster, and other information.
        runpagespeed (request: {        
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
            // Indicates if third party resources should be filtered out before PageSpeed analysis.
            filter_third_party_resources?: boolean,
            // The locale used to localize formatted results
            locale?: string,
            // A PageSpeed rule to run; if none are given, all rules are run
            rule?: string,
            // Indicates if binary data containing a screenshot should be included
            screenshot?: boolean,
            // The analysis strategy to use
            strategy?: string,
            // The URL to fetch and analyze
            url: string,
        }) : gapi.client.Request<Result>;        
        
    }
    
}

declare module gapi.client.pagespeedonline {
    var pagespeedapi: gapi.client.pagespeedonline.PagespeedapiResource; 
    
}
