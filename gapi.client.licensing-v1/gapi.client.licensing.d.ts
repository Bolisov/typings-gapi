// Type definitions for Google Enterprise License Manager API v1
// Project: https://developers.google.com/google-apps/licensing/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.licensing {
    
    interface LicenseAssignment {
        // ETag of the resource.
        etags?: string,
        // Identifies the resource as a LicenseAssignment.
        kind?: string,
        // Id of the product.
        productId?: string,
        // Display Name of the product.
        productName?: string,
        // Link to this page.
        selfLink?: string,
        // Id of the sku of the product.
        skuId?: string,
        // Display Name of the sku of the product.
        skuName?: string,
        // Email id of the user.
        userId?: string,
    }
    
    interface LicenseAssignmentInsert {
        // Email id of the user
        userId?: string,
    }
    
    interface LicenseAssignmentList {
        // ETag of the resource.
        etag?: string,
        // The LicenseAssignments in this page of results.
        items?: LicenseAssignment[],        
        // Identifies the resource as a collection of LicenseAssignments.
        kind?: string,
        // The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
        nextPageToken?: string,
    }
    
    interface LicenseAssignmentsResource {
        // Revoke License.
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
            // Name for product
            productId: string,
            // Name for sku
            skuId: string,
            // email id or unique Id of the user
            userId: string,
        }) : gapi.client.Request<void>;        
        
        // Get license assignment of a particular product and sku for a user
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
            // Name for product
            productId: string,
            // Name for sku
            skuId: string,
            // email id or unique Id of the user
            userId: string,
        }) : gapi.client.Request<LicenseAssignment>;        
        
        // Assign License.
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
            // Name for product
            productId: string,
            // Name for sku
            skuId: string,
        }) : gapi.client.Request<LicenseAssignment>;        
        
        // List license assignments for given product of the customer.
        listForProduct (request: {        
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
            // CustomerId represents the customer for whom licenseassignments are queried
            customerId: string,
            // Maximum number of campaigns to return at one time. Must be positive. Optional. Default value is 100.
            maxResults?: number,
            // Token to fetch the next page.Optional. By default server will return first page
            pageToken?: string,
            // Name for product
            productId: string,
        }) : gapi.client.Request<LicenseAssignmentList>;        
        
        // List license assignments for given product and sku of the customer.
        listForProductAndSku (request: {        
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
            // CustomerId represents the customer for whom licenseassignments are queried
            customerId: string,
            // Maximum number of campaigns to return at one time. Must be positive. Optional. Default value is 100.
            maxResults?: number,
            // Token to fetch the next page.Optional. By default server will return first page
            pageToken?: string,
            // Name for product
            productId: string,
            // Name for sku
            skuId: string,
        }) : gapi.client.Request<LicenseAssignmentList>;        
        
        // Assign License. This method supports patch semantics.
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
            // Name for product
            productId: string,
            // Name for sku for which license would be revoked
            skuId: string,
            // email id or unique Id of the user
            userId: string,
        }) : gapi.client.Request<LicenseAssignment>;        
        
        // Assign License.
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
            // Name for product
            productId: string,
            // Name for sku for which license would be revoked
            skuId: string,
            // email id or unique Id of the user
            userId: string,
        }) : gapi.client.Request<LicenseAssignment>;        
        
    }
    
}

declare module gapi.client.licensing {
    var licenseAssignments: gapi.client.licensing.LicenseAssignmentsResource; 
    
}
