// Type definitions for Google Google Analytics API v2.4
// Project: https://developers.google.com/analytics/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.analytics {
    
    interface DataResource {
        // Returns Analytics report data for a view (profile).
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
            // A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.
            dimensions?: string,
            // End date for fetching report data. All requests should specify an end date formatted as YYYY-MM-DD.
            end-date: string,
            // A comma-separated list of dimension or metric filters to be applied to the report data.
            filters?: string,
            // Unique table ID for retrieving report data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
            ids: string,
            // The maximum number of entries to include in this feed.
            max-results?: number,
            // A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified to retrieve a valid Analytics report.
            metrics: string,
            // An Analytics advanced segment to be applied to the report data.
            segment?: string,
            // A comma-separated list of dimensions or metrics that determine the sort order for the report data.
            sort?: string,
            // Start date for fetching report data. All requests should specify a start date formatted as YYYY-MM-DD.
            start-date: string,
            // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
        }) : gapi.client.Request<void>;        
        
    }
    
    
    interface AccountsResource {
        // Lists all accounts to which the user has access.
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
            // The maximum number of accounts to include in this response.
            max-results?: number,
            // An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
        }) : gapi.client.Request<void>;        
        
    }
    
    
    interface GoalsResource {
        // Lists goals to which the user has access.
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
            // Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
            accountId: string,
            // The maximum number of goals to include in this response.
            max-results?: number,
            // View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to.
            profileId: string,
            // An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
            // Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
            webPropertyId: string,
        }) : gapi.client.Request<void>;        
        
    }
    
    
    interface ProfilesResource {
        // Lists views (profiles) to which the user has access.
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
            // Account ID for the views (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access.
            accountId: string,
            // The maximum number of views (profiles) to include in this response.
            max-results?: number,
            // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
            // Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access.
            webPropertyId: string,
        }) : gapi.client.Request<void>;        
        
    }
    
    
    interface SegmentsResource {
        // Lists advanced segments to which the user has access.
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
            // The maximum number of advanced segments to include in this response.
            max-results?: number,
            // An index of the first advanced segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
        }) : gapi.client.Request<void>;        
        
    }
    
    
    interface WebpropertiesResource {
        // Lists web properties to which the user has access.
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
            // Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
            accountId: string,
            // The maximum number of web properties to include in this response.
            max-results?: number,
            // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
        }) : gapi.client.Request<void>;        
        
    }
    
    
    interface ManagementResource {
        accounts: AccountsResource,
        goals: GoalsResource,
        profiles: ProfilesResource,
        segments: SegmentsResource,
        webproperties: WebpropertiesResource,
    }
    
}

declare module gapi.client.analytics {
    var data: gapi.client.analytics.DataResource; 
    
    var management: gapi.client.analytics.ManagementResource; 
    
}
