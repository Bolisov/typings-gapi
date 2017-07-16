// Type definitions for Google Google Ad Experience Report API v1
// Project: https://developers.google.com/ad-experience-report/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.adexperiencereport {
    
    interface ViolatingSitesResponse {
        // A list of summaries of violating sites.
        violatingSites?: SiteSummaryResponse[],        
    }
    
    interface SiteSummaryResponse {
        // Summary for the mobile review of the site.
        mobileSummary?: PlatformSummary,
        // The name of the site reviewed.
        reviewedSite?: string,
        // Summary for the desktop review of the site.
        desktopSummary?: PlatformSummary,
    }
    
    interface PlatformSummary {
        // The status of the site reviewed for the Better Ads Standards.
        betterAdsStatus?: string,
        // The assigned regions for the site and platform.
        region?: string[],        
        // The date on which ad filtering begins.
        enforcementTime?: string,
        // The ad filtering status of the site.
        filterStatus?: string,
        // Whether the site is currently under review.
        underReview?: boolean,
        // A link that leads to a full ad experience report.
        reportUrl?: string,
        // The last time that the site changed status.
        lastChangeTime?: string,
        // The status of the site reviewed for egregious ads.
        egregiousStatus?: string,
    }
    
    interface SitesResource {
        // Gets a summary of the ads rating of a site.
        get (request: {        
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
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // The required site name. It should be a site property registered in Search
            // Console. The server will return an error of BAD_REQUEST if this field is
            // not filled in.
            name: string,
        }) : gapi.client.Request<SiteSummaryResponse>;        
        
    }
    
    
    interface ViolatingSitesResource {
        // Lists sites with Ad Experience Report statuses of "Failing" or "Warning".
        list (request: {        
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
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
        }) : gapi.client.Request<ViolatingSitesResponse>;        
        
    }
    
}

declare module gapi.client.adexperiencereport {
    var sites: gapi.client.adexperiencereport.SitesResource; 
    
    var violatingSites: gapi.client.adexperiencereport.ViolatingSitesResource; 
    
}
