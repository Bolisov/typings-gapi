// Type definitions for Google Ad Exchange Buyer API v1.3
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
    
    interface BillingInfo {
        // Account id.
        accountId?: number,
        // Account name.
        accountName?: string,
        // A list of adgroup IDs associated with this particular account. These IDs may show up as part of a realtime bidding BidRequest, which indicates a bid request for this account.
        billingId?: string[],        
        // Resource type.
        kind?: string,
    }
    
    interface BillingInfoList {
        // A list of billing info relevant for your account.
        items?: BillingInfo[],        
        // Resource type.
        kind?: string,
    }
    
    interface Budget {
        // The id of the account. This is required for get and update requests.
        accountId?: string,
        // The billing id to determine which adgroup to provide budget information for. This is required for get and update requests.
        billingId?: string,
        // The daily budget amount in unit amount of the account currency to apply for the billingId provided. This is required for update requests.
        budgetAmount?: string,
        // The currency code for the buyer. This cannot be altered here.
        currencyCode?: string,
        // The unique id that describes this item.
        id?: string,
        // The kind of the resource, i.e. "adexchangebuyer#budget".
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
        // If nativeAd is set, HTMLSnippet and videoURL should not be set.
        nativeAd?: {        
            // 
            advertiser?: string,
            // The app icon, for app download ads.
            appIcon?: {            
                // 
                height?: number,
                // 
                url?: string,
                // 
                width?: number,
            },            
            // A long description of the ad.
            body?: string,
            // A label for the button that the user is supposed to click.
            callToAction?: string,
            // The URL to use for click tracking.
            clickTrackingUrl?: string,
            // A short title for the ad.
            headline?: string,
            // A large image.
            image?: {            
                // 
                height?: number,
                // 
                url?: string,
                // 
                width?: number,
            },            
            // The URLs are called when the impression is rendered.
            impressionTrackingUrl?: string[],            
            // A smaller image, for the advertiser logo.
            logo?: {            
                // 
                height?: number,
                // 
                url?: string,
                // 
                width?: number,
            },            
            // The price of the promoted app including the currency info.
            price?: string,
            // The app rating in the app store. Must be in the range [0-5].
            starRating?: number,
            // The URL to the app store to purchase/download the promoted app.
            store?: string,
        },        
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
        // The URL to fetch a video ad. If set, HTMLSnippet and the nativeAd should not be set.
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
    
    interface DirectDeal {
        // The account id of the buyer this deal is for.
        accountId?: number,
        // The name of the advertiser this deal is for.
        advertiser?: string,
        // Whether the publisher for this deal is eligible for alcohol ads.
        allowsAlcohol?: boolean,
        // The account id that this deal was negotiated for. It is either the buyer or the client that this deal was negotiated on behalf of.
        buyerAccountId?: string,
        // The currency code that applies to the fixed_cpm value. If not set then assumed to be USD.
        currencyCode?: string,
        // The deal type such as programmatic reservation or fixed price and so on.
        dealTier?: string,
        // End time for when this deal stops being active. If not set then this deal is valid until manually disabled by the publisher. In seconds since the epoch.
        endTime?: string,
        // The fixed price for this direct deal. In cpm micros of currency according to currency_code. If set, then this deal is eligible for the fixed price tier of buying (highest priority, pay exactly the configured fixed price).
        fixedCpm?: string,
        // Deal id.
        id?: string,
        // Resource type.
        kind?: string,
        // Deal name.
        name?: string,
        // The minimum price for this direct deal. In cpm micros of currency according to currency_code. If set, then this deal is eligible for the private exchange tier of buying (below fixed price priority, run as a second price auction).
        privateExchangeMinCpm?: string,
        // If true, the publisher has opted to have their blocks ignored when a creative is bid with for this deal.
        publisherBlocksOverriden?: boolean,
        // The name of the publisher offering this direct deal.
        sellerNetwork?: string,
        // Start time for when this deal becomes active. If not set then this deal is active immediately upon creation. In seconds since the epoch.
        startTime?: string,
    }
    
    interface DirectDealsList {
        // A list of direct deals relevant for your account.
        directDeals?: DirectDeal[],        
        // Resource type.
        kind?: string,
    }
    
    interface PerformanceReport {
        // The number of bid responses with an ad.
        bidRate?: number,
        // The number of bid requests sent to your bidder.
        bidRequestRate?: number,
        // Rate of various prefiltering statuses per match. Please refer to the callout-status-codes.txt file for different statuses.
        calloutStatusRate?: any[],        
        // Average QPS for cookie matcher operations.
        cookieMatcherStatusRate?: any[],        
        // Rate of ads with a given status. Please refer to the creative-status-codes.txt file for different statuses.
        creativeStatusRate?: any[],        
        // The number of bid responses that were filtered due to a policy violation or other errors.
        filteredBidRate?: number,
        // Average QPS for hosted match operations.
        hostedMatchStatusRate?: any[],        
        // The number of potential queries based on your pretargeting settings.
        inventoryMatchRate?: number,
        // Resource type.
        kind?: string,
        // The 50th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.
        latency50thPercentile?: number,
        // The 85th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.
        latency85thPercentile?: number,
        // The 95th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.
        latency95thPercentile?: number,
        // Rate of various quota account statuses per quota check.
        noQuotaInRegion?: number,
        // Rate of various quota account statuses per quota check.
        outOfQuota?: number,
        // Average QPS for pixel match requests from clients.
        pixelMatchRequests?: number,
        // Average QPS for pixel match responses from clients.
        pixelMatchResponses?: number,
        // The configured quota limits for this account.
        quotaConfiguredLimit?: number,
        // The throttled quota limits for this account.
        quotaThrottledLimit?: number,
        // The trading location of this data.
        region?: string,
        // The number of properly formed bid responses received by our servers within the deadline.
        successfulRequestRate?: number,
        // The unix timestamp of the starting time of this performance data.
        timestamp?: string,
        // The number of bid responses that were unsuccessful due to timeouts, incorrect formatting, etc.
        unsuccessfulRequestRate?: number,
    }
    
    interface PerformanceReportList {
        // Resource type.
        kind?: string,
        // A list of performance reports relevant for the account.
        performanceReport?: PerformanceReport[],        
    }
    
    interface PretargetingConfig {
        // The id for billing purposes, provided for reference. Leave this field blank for insert requests; the id will be generated automatically.
        billingId?: string,
        // The config id; generated automatically. Leave this field blank for insert requests.
        configId?: string,
        // The name of the config. Must be unique. Required for all requests.
        configName?: string,
        // List must contain exactly one of PRETARGETING_CREATIVE_TYPE_HTML or PRETARGETING_CREATIVE_TYPE_VIDEO.
        creativeType?: string[],        
        // Requests which allow one of these (width, height) pairs will match. All pairs must be supported ad dimensions.
        dimensions?: {        
            // Height in pixels.
            height?: string,
            // Width in pixels.
            width?: string,
        }[],        
        // Requests with any of these content labels will not match. Values are from content-labels.txt in the downloadable files section.
        excludedContentLabels?: string[],        
        // Requests containing any of these geo criteria ids will not match.
        excludedGeoCriteriaIds?: string[],        
        // Requests containing any of these placements will not match.
        excludedPlacements?: {        
            // The value of the placement. Interpretation depends on the placement type, e.g. URL for a site placement, channel name for a channel placement, app id for a mobile app placement.
            token?: string,
            // The type of the placement.
            type?: string,
        }[],        
        // Requests containing any of these users list ids will not match.
        excludedUserLists?: string[],        
        // Requests containing any of these vertical ids will not match. Values are from the publisher-verticals.txt file in the downloadable files section.
        excludedVerticals?: string[],        
        // Requests containing any of these geo criteria ids will match.
        geoCriteriaIds?: string[],        
        // Whether this config is active. Required for all requests.
        isActive?: boolean,
        // The kind of the resource, i.e. "adexchangebuyer#pretargetingConfig".
        kind?: string,
        // Request containing any of these language codes will match.
        languages?: string[],        
        // Requests containing any of these mobile carrier ids will match. Values are from mobile-carriers.csv in the downloadable files section.
        mobileCarriers?: string[],        
        // Requests containing any of these mobile device ids will match. Values are from mobile-devices.csv in the downloadable files section.
        mobileDevices?: string[],        
        // Requests containing any of these mobile operating system version ids will match. Values are from mobile-os.csv in the downloadable files section.
        mobileOperatingSystemVersions?: string[],        
        // Requests containing any of these placements will match.
        placements?: {        
            // The value of the placement. Interpretation depends on the placement type, e.g. URL for a site placement, channel name for a channel placement, app id for a mobile app placement.
            token?: string,
            // The type of the placement.
            type?: string,
        }[],        
        // Requests matching any of these platforms will match. Possible values are PRETARGETING_PLATFORM_MOBILE, PRETARGETING_PLATFORM_DESKTOP, and PRETARGETING_PLATFORM_TABLET.
        platforms?: string[],        
        // Creative attributes should be declared here if all creatives corresponding to this pretargeting configuration have that creative attribute. Values are from pretargetable-creative-attributes.txt in the downloadable files section.
        supportedCreativeAttributes?: string[],        
        // Requests containing any of these user list ids will match.
        userLists?: string[],        
        // Requests that allow any of these vendor ids will match. Values are from vendors.txt in the downloadable files section.
        vendorTypes?: string[],        
        // Requests containing any of these vertical ids will match.
        verticals?: string[],        
    }
    
    interface PretargetingConfigList {
        // A list of pretargeting configs
        items?: PretargetingConfig[],        
        // Resource type.
        kind?: string,
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
    
    
    interface BillingInfoResource {
        // Returns the billing information for one account specified by account ID.
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
            // The account id.
            accountId: number,
        }) : gapi.client.Request<BillingInfo>;        
        
        // Retrieves a list of billing information for all accounts of the authenticated user.
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
        }) : gapi.client.Request<BillingInfoList>;        
        
    }
    
    
    interface BudgetResource {
        // Returns the budget information for the adgroup specified by the accountId and billingId.
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
            // The account id to get the budget information for.
            accountId: string,
            // The billing id to get the budget information for.
            billingId: string,
        }) : gapi.client.Request<Budget>;        
        
        // Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.
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
            // The account id associated with the budget being updated.
            accountId: string,
            // The billing id associated with the budget being updated.
            billingId: string,
        }) : gapi.client.Request<Budget>;        
        
        // Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.
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
            // The account id associated with the budget being updated.
            accountId: string,
            // The billing id associated with the budget being updated.
            billingId: string,
        }) : gapi.client.Request<Budget>;        
        
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
            // When specified, only creatives for the given account ids are returned.
            accountId?: number,
            // When specified, only creatives for the given buyer creative ids are returned.
            buyerCreativeId?: string,
            // Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
            maxResults?: number,
            // A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
            pageToken?: string,
            // When specified, only creatives having the given status are returned.
            statusFilter?: string,
        }) : gapi.client.Request<CreativesList>;        
        
    }
    
    
    interface DirectDealsResource {
        // Gets one direct deal by ID.
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
            // The direct deal id
            id: string,
        }) : gapi.client.Request<DirectDeal>;        
        
        // Retrieves the authenticated user's list of direct deals.
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
        }) : gapi.client.Request<DirectDealsList>;        
        
    }
    
    
    interface PerformanceReportResource {
        // Retrieves the authenticated user's list of performance metrics.
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
            // The account id to get the reports.
            accountId: string,
            // The end time of the report in ISO 8601 timestamp format using UTC.
            endDateTime: string,
            // Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
            maxResults?: number,
            // A continuation token, used to page through performance reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
            pageToken?: string,
            // The start time of the report in ISO 8601 timestamp format using UTC.
            startDateTime: string,
        }) : gapi.client.Request<PerformanceReportList>;        
        
    }
    
    
    interface PretargetingConfigResource {
        // Deletes an existing pretargeting config.
        delete (request: {        
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
            // The account id to delete the pretargeting config for.
            accountId: string,
            // The specific id of the configuration to delete.
            configId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets a specific pretargeting configuration
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
            // The account id to get the pretargeting config for.
            accountId: string,
            // The specific id of the configuration to retrieve.
            configId: string,
        }) : gapi.client.Request<PretargetingConfig>;        
        
        // Inserts a new pretargeting configuration.
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
            // The account id to insert the pretargeting config for.
            accountId: string,
        }) : gapi.client.Request<PretargetingConfig>;        
        
        // Retrieves a list of the authenticated user's pretargeting configurations.
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
            // The account id to get the pretargeting configs for.
            accountId: string,
        }) : gapi.client.Request<PretargetingConfigList>;        
        
        // Updates an existing pretargeting config. This method supports patch semantics.
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
            // The account id to update the pretargeting config for.
            accountId: string,
            // The specific id of the configuration to update.
            configId: string,
        }) : gapi.client.Request<PretargetingConfig>;        
        
        // Updates an existing pretargeting config.
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
            // The account id to update the pretargeting config for.
            accountId: string,
            // The specific id of the configuration to update.
            configId: string,
        }) : gapi.client.Request<PretargetingConfig>;        
        
    }
    
}

declare module gapi.client.adexchangebuyer {
    var accounts: gapi.client.adexchangebuyer.AccountsResource; 
    
    var billingInfo: gapi.client.adexchangebuyer.BillingInfoResource; 
    
    var budget: gapi.client.adexchangebuyer.BudgetResource; 
    
    var creatives: gapi.client.adexchangebuyer.CreativesResource; 
    
    var directDeals: gapi.client.adexchangebuyer.DirectDealsResource; 
    
    var performanceReport: gapi.client.adexchangebuyer.PerformanceReportResource; 
    
    var pretargetingConfig: gapi.client.adexchangebuyer.PretargetingConfigResource; 
    
}
