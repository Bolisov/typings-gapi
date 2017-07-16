// Type definitions for Google Google Site Verification API v1
// Project: https://developers.google.com/site-verification/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.siteVerification {
    
    interface SiteVerificationWebResourceGettokenRequest {
        // The site for which a verification token will be generated.
        site?: {        
            // The site identifier. If the type is set to SITE, the identifier is a URL. If the type is set to INET_DOMAIN, the site identifier is a domain name.
            identifier?: string,
            // The type of resource to be verified. Can be SITE or INET_DOMAIN (domain name).
            type?: string,
        },        
        // The verification method that will be used to verify this site. For sites, 'FILE' or 'META' methods may be used. For domains, only 'DNS' may be used.
        verificationMethod?: string,
    }
    
    interface SiteVerificationWebResourceGettokenResponse {
        // The verification method to use in conjunction with this token. For FILE, the token should be placed in the top-level directory of the site, stored inside a file of the same name. For META, the token should be placed in the HEAD tag of the default page that is loaded for the site. For DNS, the token should be placed in a TXT record of the domain.
        method?: string,
        // The verification token. The token must be placed appropriately in order for verification to succeed.
        token?: string,
    }
    
    interface SiteVerificationWebResourceListResponse {
        // The list of sites that are owned by the authenticated user.
        items?: SiteVerificationWebResourceResource[],        
    }
    
    interface SiteVerificationWebResourceResource {
        // The string used to identify this site. This value should be used in the "id" portion of the REST URL for the Get, Update, and Delete operations.
        id?: string,
        // The email addresses of all verified owners.
        owners?: string[],        
        // The address and type of a site that is verified or will be verified.
        site?: {        
            // The site identifier. If the type is set to SITE, the identifier is a URL. If the type is set to INET_DOMAIN, the site identifier is a domain name.
            identifier?: string,
            // The site type. Can be SITE or INET_DOMAIN (domain name).
            type?: string,
        },        
    }
    
    interface WebResourceResource {
        // Relinquish ownership of a website or domain.
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
            // The id of a verified site or domain.
            id: string,
        }) : gapi.client.Request<void>;        
        
        // Get the most current data for a website or domain.
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
            // The id of a verified site or domain.
            id: string,
        }) : gapi.client.Request<SiteVerificationWebResourceResource>;        
        
        // Get a verification token for placing on a website or domain.
        getToken (request: {        
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
        }) : gapi.client.Request<SiteVerificationWebResourceGettokenResponse>;        
        
        // Attempt verification of a website or domain.
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
            // The method to use for verifying a site or domain.
            verificationMethod: string,
        }) : gapi.client.Request<SiteVerificationWebResourceResource>;        
        
        // Get the list of your verified websites and domains.
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
        }) : gapi.client.Request<SiteVerificationWebResourceListResponse>;        
        
        // Modify the list of owners for your website or domain. This method supports patch semantics.
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
            // The id of a verified site or domain.
            id: string,
        }) : gapi.client.Request<SiteVerificationWebResourceResource>;        
        
        // Modify the list of owners for your website or domain.
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
            // The id of a verified site or domain.
            id: string,
        }) : gapi.client.Request<SiteVerificationWebResourceResource>;        
        
    }
    
}

declare module gapi.client.siteVerification {
    var webResource: gapi.client.siteVerification.WebResourceResource; 
    
}
