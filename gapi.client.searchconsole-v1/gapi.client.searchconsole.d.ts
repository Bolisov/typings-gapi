// Type definitions for Google Google Search Console URL Testing Tools API v1
// Project: https://developers.google.com/webmaster-tools/search-console-api/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.searchconsole {
    
    interface RunMobileFriendlyTestResponse {
        // List of mobile-usability issues.
        mobileFriendlyIssues?: MobileFriendlyIssue[],        
        // Screenshot of the requested URL.
        screenshot?: Image,
        // Information about embedded resources issues.
        resourceIssues?: ResourceIssue[],        
        // Final state of the test, can be either complete or an error.
        testStatus?: TestStatus,
        // Test verdict, whether the page is mobile friendly or not.
        mobileFriendliness?: string,
    }
    
    interface ResourceIssue {
        // Describes a blocked resource issue.
        blockedResource?: BlockedResource,
    }
    
    interface BlockedResource {
        // URL of the blocked resource.
        url?: string,
    }
    
    interface TestStatus {
        // Status of the test.
        status?: string,
        // Error details if applicable.
        details?: string,
    }
    
    interface Image {
        // Image data in format determined by the mime type. Currently, the format
        // will always be "image/png", but this might change in the future.
        data?: string,
        // The mime-type of the image data.
        mimeType?: string,
    }
    
    interface RunMobileFriendlyTestRequest {
        // URL for inspection.
        url?: string,
        // Whether or not screenshot is requested. Default is false.
        requestScreenshot?: boolean,
    }
    
    interface MobileFriendlyIssue {
        // Rule violated.
        rule?: string,
    }
    
    interface MobileFriendlyTestResource {
        // Runs Mobile-Friendly Test for a given URL.
        run (request: {        
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
        }) : gapi.client.Request<RunMobileFriendlyTestResponse>;        
        
    }
    
    
    interface UrlTestingToolsResource {
        mobileFriendlyTest: MobileFriendlyTestResource,
    }
    
}

declare module gapi.client.searchconsole {
    var urlTestingTools: gapi.client.searchconsole.UrlTestingToolsResource; 
    
}
