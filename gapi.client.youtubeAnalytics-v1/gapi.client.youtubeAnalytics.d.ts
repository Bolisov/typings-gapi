// Type definitions for Google YouTube Analytics API v1
// Project: http://developers.google.com/youtube/analytics/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.youtubeAnalytics {
    
    interface Group {
        // 
        contentDetails?: {        
            // 
            itemCount?: string,
            // 
            itemType?: string,
        },        
        // 
        etag?: string,
        // 
        id?: string,
        // 
        kind?: string,
        // 
        snippet?: {        
            // 
            publishedAt?: string,
            // 
            title?: string,
        },        
    }
    
    interface GroupItem {
        // 
        etag?: string,
        // 
        groupId?: string,
        // 
        id?: string,
        // 
        kind?: string,
        // 
        resource?: {        
            // 
            id?: string,
            // 
            kind?: string,
        },        
    }
    
    interface GroupItemListResponse {
        // 
        etag?: string,
        // 
        items?: GroupItem[],        
        // 
        kind?: string,
    }
    
    interface GroupListResponse {
        // 
        etag?: string,
        // 
        items?: Group[],        
        // 
        kind?: string,
        // 
        nextPageToken?: string,
    }
    
    interface ResultTable {
        // This value specifies information about the data returned in the rows fields. Each item in the columnHeaders list identifies a field returned in the rows value, which contains a list of comma-delimited data. The columnHeaders list will begin with the dimensions specified in the API request, which will be followed by the metrics specified in the API request. The order of both dimensions and metrics will match the ordering in the API request. For example, if the API request contains the parameters dimensions=ageGroup,gender&metrics=viewerPercentage, the API response will return columns in this order: ageGroup,gender,viewerPercentage.
        columnHeaders?: {        
            // The type of the column (DIMENSION or METRIC).
            columnType?: string,
            // The type of the data in the column (STRING, INTEGER, FLOAT, etc.).
            dataType?: string,
            // The name of the dimension or metric.
            name?: string,
        }[],        
        // This value specifies the type of data included in the API response. For the query method, the kind property value will be youtubeAnalytics#resultTable.
        kind?: string,
        // The list contains all rows of the result table. Each item in the list is an array that contains comma-delimited data corresponding to a single row of data. The order of the comma-delimited data fields will match the order of the columns listed in the columnHeaders field. If no data is available for the given query, the rows element will be omitted from the response. The response for a query with the day dimension will not contain rows for the most recent days.
        rows?: any[][],        
    }
    
    interface GroupItemsResource {
        // Removes an item from a group.
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
            // The id parameter specifies the YouTube group item ID for the group that is being deleted.
            id: string,
            // Note: This parameter is intended exclusively for YouTube content partners.
            // 
            // The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
            onBehalfOfContentOwner?: string,
        }) : gapi.client.Request<void>;        
        
        // Creates a group item.
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
            // Note: This parameter is intended exclusively for YouTube content partners.
            // 
            // The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
            onBehalfOfContentOwner?: string,
        }) : gapi.client.Request<GroupItem>;        
        
        // Returns a collection of group items that match the API request parameters.
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
            // The id parameter specifies the unique ID of the group for which you want to retrieve group items.
            groupId: string,
            // Note: This parameter is intended exclusively for YouTube content partners.
            // 
            // The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
            onBehalfOfContentOwner?: string,
        }) : gapi.client.Request<GroupItemListResponse>;        
        
    }
    
    
    interface GroupsResource {
        // Deletes a group.
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
            // The id parameter specifies the YouTube group ID for the group that is being deleted.
            id: string,
            // Note: This parameter is intended exclusively for YouTube content partners.
            // 
            // The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
            onBehalfOfContentOwner?: string,
        }) : gapi.client.Request<void>;        
        
        // Creates a group.
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
            // Note: This parameter is intended exclusively for YouTube content partners.
            // 
            // The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
            onBehalfOfContentOwner?: string,
        }) : gapi.client.Request<Group>;        
        
        // Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the authenticated user owns, or you can retrieve one or more groups by their unique IDs.
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
            // The id parameter specifies a comma-separated list of the YouTube group ID(s) for the resource(s) that are being retrieved. In a group resource, the id property specifies the group's YouTube group ID.
            id?: string,
            // Set this parameter's value to true to instruct the API to only return groups owned by the authenticated user.
            mine?: boolean,
            // Note: This parameter is intended exclusively for YouTube content partners.
            // 
            // The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
            onBehalfOfContentOwner?: string,
            // The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identifies the next page that can be retrieved.
            pageToken?: string,
        }) : gapi.client.Request<GroupListResponse>;        
        
        // Modifies a group. For example, you could change a group's title.
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
            // Note: This parameter is intended exclusively for YouTube content partners.
            // 
            // The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
            onBehalfOfContentOwner?: string,
        }) : gapi.client.Request<Group>;        
        
    }
    
    
    interface ReportsResource {
        // Retrieve your YouTube Analytics reports.
        query (request: {        
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
            // The currency to which financial metrics should be converted. The default is US Dollar (USD). If the result contains no financial metrics, this flag will be ignored. Responds with an error if the specified currency is not recognized.
            currency?: string,
            // A comma-separated list of YouTube Analytics dimensions, such as views or ageGroup,gender. See the Available Reports document for a list of the reports that you can retrieve and the dimensions used for those reports. Also see the Dimensions document for definitions of those dimensions.
            dimensions?: string,
            // The end date for fetching YouTube Analytics data. The value should be in YYYY-MM-DD format.
            end-date: string,
            // A list of filters that should be applied when retrieving YouTube Analytics data. The Available Reports document identifies the dimensions that can be used to filter each report, and the Dimensions document defines those dimensions. If a request uses multiple filters, join them together with a semicolon (;), and the returned result table will satisfy both filters. For example, a filters parameter value of video==dMH0bHeiRNg;country==IT restricts the result set to include data for the given video in Italy.
            filters?: string,
            // Identifies the YouTube channel or content owner for which you are retrieving YouTube Analytics data.
            // - To request data for a YouTube user, set the ids parameter value to channel==CHANNEL_ID, where CHANNEL_ID specifies the unique YouTube channel ID.
            // - To request data for a YouTube CMS content owner, set the ids parameter value to contentOwner==OWNER_NAME, where OWNER_NAME is the CMS name of the content owner.
            ids: string,
            // If set to true historical data (i.e. channel data from before the linking of the channel to the content owner) will be retrieved.
            include-historical-channel-data?: boolean,
            // The maximum number of rows to include in the response.
            max-results?: number,
            // A comma-separated list of YouTube Analytics metrics, such as views or likes,dislikes. See the Available Reports document for a list of the reports that you can retrieve and the metrics available in each report, and see the Metrics document for definitions of those metrics.
            metrics: string,
            // A comma-separated list of dimensions or metrics that determine the sort order for YouTube Analytics data. By default the sort order is ascending. The '-' prefix causes descending sort order.
            sort?: string,
            // The start date for fetching YouTube Analytics data. The value should be in YYYY-MM-DD format.
            start-date: string,
            // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter (one-based, inclusive).
            start-index?: number,
        }) : gapi.client.Request<ResultTable>;        
        
    }
    
}

declare module gapi.client.youtubeAnalytics {
    var groupItems: gapi.client.youtubeAnalytics.GroupItemsResource; 
    
    var groups: gapi.client.youtubeAnalytics.GroupsResource; 
    
    var reports: gapi.client.youtubeAnalytics.ReportsResource; 
    
}
