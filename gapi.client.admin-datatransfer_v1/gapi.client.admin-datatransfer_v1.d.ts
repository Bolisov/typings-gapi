// Type definitions for Google Admin Data Transfer API datatransfer_v1
// Project: https://developers.google.com/admin-sdk/data-transfer/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.admin {
    
    interface Application {
        // Etag of the resource.
        etag?: string,
        // The application's ID.
        id?: string,
        // Identifies the resource as a DataTransfer Application Resource.
        kind?: string,
        // The application's name.
        name?: string,
        // The list of all possible transfer parameters for this application. These parameters can be used to select the data of the user in this application to be transfered.
        transferParams?: ApplicationTransferParam[],        
    }
    
    interface ApplicationDataTransfer {
        // The application's ID.
        applicationId?: string,
        // The transfer parameters for the application. These parameters are used to select the data which will get transfered in context of this application.
        applicationTransferParams?: ApplicationTransferParam[],        
        // Current status of transfer for this application. (Read-only)
        applicationTransferStatus?: string,
    }
    
    interface ApplicationTransferParam {
        // The type of the transfer parameter. eg: 'PRIVACY_LEVEL'
        key?: string,
        // The value of the coressponding transfer parameter. eg: 'PRIVATE' or 'SHARED'
        value?: string[],        
    }
    
    interface ApplicationsListResponse {
        // List of applications that support data transfer and are also installed for the customer.
        applications?: Application[],        
        // ETag of the resource.
        etag?: string,
        // Identifies the resource as a collection of Applications.
        kind?: string,
        // Continuation token which will be used to specify next page in list API.
        nextPageToken?: string,
    }
    
    interface DataTransfer {
        // List of per application data transfer resources. It contains data transfer details of the applications associated with this transfer resource. Note that this list is also used to specify the applications for which data transfer has to be done at the time of the transfer resource creation.
        applicationDataTransfers?: ApplicationDataTransfer[],        
        // ETag of the resource.
        etag?: string,
        // The transfer's ID (Read-only).
        id?: string,
        // Identifies the resource as a DataTransfer request.
        kind?: string,
        // ID of the user to whom the data is being transfered.
        newOwnerUserId?: string,
        // ID of the user whose data is being transfered.
        oldOwnerUserId?: string,
        // Overall transfer status (Read-only).
        overallTransferStatusCode?: string,
        // The time at which the data transfer was requested (Read-only).
        requestTime?: string,
    }
    
    interface DataTransfersListResponse {
        // List of data transfer requests.
        dataTransfers?: DataTransfer[],        
        // ETag of the resource.
        etag?: string,
        // Identifies the resource as a collection of data transfer requests.
        kind?: string,
        // Continuation token which will be used to specify next page in list API.
        nextPageToken?: string,
    }
    
    interface ApplicationsResource {
        // Retrieves information about an application for the given application ID.
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
            // ID of the application resource to be retrieved.
            applicationId: string,
        }) : gapi.client.Request<Application>;        
        
        // Lists the applications available for data transfer for a customer.
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
            // Immutable ID of the Google Apps account.
            customerId?: string,
            // Maximum number of results to return. Default is 100.
            maxResults?: number,
            // Token to specify next page in the list.
            pageToken?: string,
        }) : gapi.client.Request<ApplicationsListResponse>;        
        
    }
    
    
    interface TransfersResource {
        // Retrieves a data transfer request by its resource ID.
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
            // ID of the resource to be retrieved. This is returned in the response from the insert method.
            dataTransferId: string,
        }) : gapi.client.Request<DataTransfer>;        
        
        // Inserts a data transfer request.
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
        }) : gapi.client.Request<DataTransfer>;        
        
        // Lists the transfers for a customer by source user, destination user, or status.
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
            // Immutable ID of the Google Apps account.
            customerId?: string,
            // Maximum number of results to return. Default is 100.
            maxResults?: number,
            // Destination user's profile ID.
            newOwnerUserId?: string,
            // Source user's profile ID.
            oldOwnerUserId?: string,
            // Token to specify the next page in the list.
            pageToken?: string,
            // Status of the transfer.
            status?: string,
        }) : gapi.client.Request<DataTransfersListResponse>;        
        
    }
    
}

declare module gapi.client.admin {
    var applications: gapi.client.admin.ApplicationsResource; 
    
    var transfers: gapi.client.admin.TransfersResource; 
    
}
