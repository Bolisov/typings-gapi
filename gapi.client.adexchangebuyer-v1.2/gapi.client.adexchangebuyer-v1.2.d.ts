// Type definitions for Google Ad Exchange Buyer API v1.2
// Project: https://developers.google.com/ad-exchange/buyer-rest
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.adexchangebuyer {
    
    interface Account {
        // Your bidder locations that have distinct URLs.
        bidderLocation?: {        
            // The maximum queries per second the Ad Exchange will send.
            maximumQps?: number,
            // The geographical region the Ad Exchange should send requests from. Only used by some quota systems, but always setting the value is recommended. Allowed values:  
            // - ASIA 
            // - EUROPE 
            // - US_EAST 
            // - US_WEST
            region?: string,
            // The URL to which the Ad Exchange will send bid requests.
            url?: string,
        }[],        
        // The nid parameter value used in cookie match requests. Please contact your technical account manager if you need to change this.
        cookieMatchingNid?: string,
        // The base URL used in cookie match requests.
        cookieMatchingUrl?: string,
        // Account id.
        id?: number,
        // Resource type.
        kind?: string,
        // The maximum number of active creatives that an account can have, where a creative is active if it was inserted or bid with in the last 30 days. Please contact your technical account manager if you need to change this.
        maximumActiveCreatives?: number,
        // The sum of all bidderLocation.maximumQps values cannot exceed this. Please contact your technical account manager if you need to change this.
        maximumTotalQps?: number,
        // The number of creatives that this account inserted or bid with in the last 30 days.
        numberActiveCreatives?: number,
    }
    
    interface AccountsList {
        // A list of accounts.
        items?: Account[],        
        // Resource type.
        kind?: string,
    }
    
    interface Creative {
        // The HTML snippet that displays the ad when inserted in the web page. If set, videoURL should not be set.
        HTMLSnippet?: string,
        // Account id.
        accountId?: number,
        // Detected advertiser id, if any. Read-only. This field should not be set in requests.
        advertiserId?: string[],        
        // The name of the company being advertised in the creative.
        advertiserName?: string,
        // The agency id for this creative.
        agencyId?: string,
        // The last upload timestamp of this creative if it was uploaded via API. Read-only. The value of this field is generated, and will be ignored for uploads. (formatted RFC 3339 timestamp).
        apiUploadTimestamp?: string,
        // All attributes for the ads that may be shown from this snippet.
        attribute?: number[],        
        // A buyer-specific id identifying the creative in this ad.
        buyerCreativeId?: string,
        // The set of destination urls for the snippet.
        clickThroughUrl?: string[],        
        // Shows any corrections that were applied to this creative. Read-only. This field should not be set in requests.
        corrections?: {        
            // Additional details about the correction.
            details?: string[],            
            // The type of correction that was applied to the creative.
            reason?: string,
        }[],        
        // The reasons for disapproval, if any. Note that not all disapproval reasons may be categorized, so it is possible for the creative to have a status of DISAPPROVED with an empty list for disapproval_reasons. In this case, please reach out to your TAM to help debug the issue. Read-only. This field should not be set in requests.
        disapprovalReasons?: {        
            // Additional details about the reason for disapproval.
            details?: string[],            
            // The categorized reason for disapproval.
            reason?: string,
        }[],        
        // The filtering reasons for the creative. Read-only. This field should not be set in requests.
        filteringReasons?: {        
            // The date in ISO 8601 format for the data. The data is collected from 00:00:00 to 23:59:59 in PST.
            date?: string,
            // The filtering reasons.
            reasons?: {            
                // The number of times the creative was filtered for the status. The count is aggregated across all publishers on the exchange.
                filteringCount?: string,
                // The filtering status code. Please refer to the creative-status-codes.txt file for different statuses.
                filteringStatus?: number,
            }[],            
        },        
        // Ad height.
        height?: number,
        // The set of urls to be called to record an impression.
        impressionTrackingUrl?: string[],        
        // Resource type.
        kind?: string,
        // Detected product categories, if any. Read-only. This field should not be set in requests.
        productCategories?: number[],        
        // All restricted categories for the ads that may be shown from this snippet.
        restrictedCategories?: number[],        
        // Detected sensitive categories, if any. Read-only. This field should not be set in requests.
        sensitiveCategories?: number[],        
        // Creative serving status. Read-only. This field should not be set in requests.
        status?: string,
        // All vendor types for the ads that may be shown from this snippet.
        vendorType?: number[],        
        // The version for this creative. Read-only. This field should not be set in requests.
        version?: number,
        // The url to fetch a video ad. If set, HTMLSnippet should not be set.
        videoURL?: string,
        // Ad width.
        width?: number,
    }
    
    interface CreativesList {
        // A list of creatives.
        items?: Creative[],        
        // Resource type.
        kind?: string,
        // Continuation token used to page through creatives. To retrieve the next page of results, set the next request's "pageToken" value to this.
        nextPageToken?: string,
    }
    
    interface AccountsResource {
        // Gets one account by ID.
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
            // The account id
            id: number,
        }) : gapi.client.Request<Account>;        
        
        // Retrieves the authenticated user's list of accounts.
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
        }) : gapi.client.Request<AccountsList>;        
        
        // Updates an existing account. This method supports patch semantics.
        patch (request: {        
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
            // The account id
            id: number,
        }) : gapi.client.Request<Account>;        
        
        // Updates an existing account.
        update (request: {        
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
            // The account id
            id: number,
        }) : gapi.client.Request<Account>;        
        
    }
    
    
    interface CreativesResource {
        // Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
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
            // The id for the account that will serve this creative.
            accountId: number,
            // The buyer-specific id for this creative.
            buyerCreativeId: string,
        }) : gapi.client.Request<Creative>;        
        
        // Submit a new creative.
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
        }) : gapi.client.Request<Creative>;        
        
        // Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.
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
            // Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
            maxResults?: number,
            // A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
            pageToken?: string,
            // When specified, only creatives having the given status are returned.
            statusFilter?: string,
        }) : gapi.client.Request<CreativesList>;        
        
    }
    
}

declare module gapi.client.adexchangebuyer {
    var accounts: gapi.client.adexchangebuyer.AccountsResource; 
    
    var creatives: gapi.client.adexchangebuyer.CreativesResource; 
    
}
