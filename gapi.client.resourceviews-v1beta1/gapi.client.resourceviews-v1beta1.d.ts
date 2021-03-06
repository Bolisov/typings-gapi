// Type definitions for Google Resource Views API v1beta1
// Project: https://developers.google.com/compute/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.resourceviews {
    
    interface Label {
        // Key of the label.
        key?: string,
        // Value of the label.
        value?: string,
    }
    
    interface RegionViewsAddResourcesRequest {
        // The list of resources to be added.
        resources?: string[],        
    }
    
    interface RegionViewsInsertResponse {
        // The resource view object inserted.
        resource?: ResourceView,
    }
    
    interface RegionViewsListResourcesResponse {
        // The resources in the view.
        members?: string[],        
        // A token used for pagination.
        nextPageToken?: string,
    }
    
    interface RegionViewsListResponse {
        // A token used for pagination.
        nextPageToken?: string,
        // The list of resource views that meet the criteria.
        resourceViews?: ResourceView[],        
    }
    
    interface RegionViewsRemoveResourcesRequest {
        // The list of resources to be removed.
        resources?: string[],        
    }
    
    interface ResourceView {
        // The creation time of the resource view.
        creationTime?: string,
        // The detailed description of the resource view.
        description?: string,
        // [Output Only] The ID of the resource view.
        id?: string,
        // Type of the resource.
        kind?: string,
        // The labels for events.
        labels?: Label[],        
        // The last modified time of the view. Not supported yet.
        lastModified?: string,
        // A list of all resources in the resource view.
        members?: string[],        
        // The name of the resource view.
        name?: string,
        // The total number of resources in the resource view.
        numMembers?: number,
        // [Output Only] A self-link to the resource view.
        selfLink?: string,
    }
    
    interface ZoneViewsAddResourcesRequest {
        // The list of resources to be added.
        resources?: string[],        
    }
    
    interface ZoneViewsInsertResponse {
        // The resource view object that has been inserted.
        resource?: ResourceView,
    }
    
    interface ZoneViewsListResourcesResponse {
        // The full URL of resources in the view.
        members?: string[],        
        // A token used for pagination.
        nextPageToken?: string,
    }
    
    interface ZoneViewsListResponse {
        // A token used for pagination.
        nextPageToken?: string,
        // The result that contains all resource views that meet the criteria.
        resourceViews?: ResourceView[],        
    }
    
    interface ZoneViewsRemoveResourcesRequest {
        // The list of resources to be removed.
        resources?: string[],        
    }
    
    interface RegionViewsResource {
        // Add resources to the view.
        addresources (request: {        
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
            // The project name of the resource view.
            projectName: string,
            // The region name of the resource view.
            region: string,
            // The name of the resource view.
            resourceViewName: string,
        }) : gapi.client.Request<void>;        
        
        // Delete a resource view.
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
            // The project name of the resource view.
            projectName: string,
            // The region name of the resource view.
            region: string,
            // The name of the resource view.
            resourceViewName: string,
        }) : gapi.client.Request<void>;        
        
        // Get the information of a resource view.
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
            // The project name of the resource view.
            projectName: string,
            // The region name of the resource view.
            region: string,
            // The name of the resource view.
            resourceViewName: string,
        }) : gapi.client.Request<ResourceView>;        
        
        // Create a resource view.
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
            // The project name of the resource view.
            projectName: string,
            // The region name of the resource view.
            region: string,
        }) : gapi.client.Request<RegionViewsInsertResponse>;        
        
        // List resource views.
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
            // Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
            maxResults?: number,
            // Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
            pageToken?: string,
            // The project name of the resource view.
            projectName: string,
            // The region name of the resource view.
            region: string,
        }) : gapi.client.Request<RegionViewsListResponse>;        
        
        // List the resources in the view.
        listresources (request: {        
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
            // Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
            maxResults?: number,
            // Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
            pageToken?: string,
            // The project name of the resource view.
            projectName: string,
            // The region name of the resource view.
            region: string,
            // The name of the resource view.
            resourceViewName: string,
        }) : gapi.client.Request<RegionViewsListResourcesResponse>;        
        
        // Remove resources from the view.
        removeresources (request: {        
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
            // The project name of the resource view.
            projectName: string,
            // The region name of the resource view.
            region: string,
            // The name of the resource view.
            resourceViewName: string,
        }) : gapi.client.Request<void>;        
        
    }
    
    
    interface ZoneViewsResource {
        // Add resources to the view.
        addresources (request: {        
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
            // The project name of the resource view.
            projectName: string,
            // The name of the resource view.
            resourceViewName: string,
            // The zone name of the resource view.
            zone: string,
        }) : gapi.client.Request<void>;        
        
        // Delete a resource view.
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
            // The project name of the resource view.
            projectName: string,
            // The name of the resource view.
            resourceViewName: string,
            // The zone name of the resource view.
            zone: string,
        }) : gapi.client.Request<void>;        
        
        // Get the information of a zonal resource view.
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
            // The project name of the resource view.
            projectName: string,
            // The name of the resource view.
            resourceViewName: string,
            // The zone name of the resource view.
            zone: string,
        }) : gapi.client.Request<ResourceView>;        
        
        // Create a resource view.
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
            // The project name of the resource view.
            projectName: string,
            // The zone name of the resource view.
            zone: string,
        }) : gapi.client.Request<ZoneViewsInsertResponse>;        
        
        // List resource views.
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
            // Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
            maxResults?: number,
            // Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
            pageToken?: string,
            // The project name of the resource view.
            projectName: string,
            // The zone name of the resource view.
            zone: string,
        }) : gapi.client.Request<ZoneViewsListResponse>;        
        
        // List the resources of the resource view.
        listresources (request: {        
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
            // Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
            maxResults?: number,
            // Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
            pageToken?: string,
            // The project name of the resource view.
            projectName: string,
            // The name of the resource view.
            resourceViewName: string,
            // The zone name of the resource view.
            zone: string,
        }) : gapi.client.Request<ZoneViewsListResourcesResponse>;        
        
        // Remove resources from the view.
        removeresources (request: {        
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
            // The project name of the resource view.
            projectName: string,
            // The name of the resource view.
            resourceViewName: string,
            // The zone name of the resource view.
            zone: string,
        }) : gapi.client.Request<void>;        
        
    }
    
}

declare module gapi.client.resourceviews {
    var regionViews: gapi.client.resourceviews.RegionViewsResource; 
    
    var zoneViews: gapi.client.resourceviews.ZoneViewsResource; 
    
}
