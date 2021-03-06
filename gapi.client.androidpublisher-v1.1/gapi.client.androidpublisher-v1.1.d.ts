// Type definitions for Google Google Play Developer API v1.1
// Project: https://developers.google.com/android-publisher
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.androidpublisher {
    
    interface InappPurchase {
        // The consumption state of the inapp product. Possible values are:  
        // - Yet to be consumed 
        // - Consumed
        consumptionState?: number,
        // A developer-specified string that contains supplemental information about an order.
        developerPayload?: string,
        // This kind represents an inappPurchase object in the androidpublisher service.
        kind?: string,
        // The purchase state of the order. Possible values are:  
        // - Purchased 
        // - Cancelled
        purchaseState?: number,
        // The time the product was purchased, in milliseconds since the epoch (Jan 1, 1970).
        purchaseTime?: string,
    }
    
    interface SubscriptionPurchase {
        // Whether the subscription will automatically be renewed when it reaches its current expiry time.
        autoRenewing?: boolean,
        // Time at which the subscription was granted, in milliseconds since the Epoch.
        initiationTimestampMsec?: string,
        // This kind represents a subscriptionPurchase object in the androidpublisher service.
        kind?: string,
        // Time at which the subscription will expire, in milliseconds since the Epoch.
        validUntilTimestampMsec?: string,
    }
    
    interface InapppurchasesResource {
        // Checks the purchase and consumption status of an inapp item.
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
            // The package name of the application the inapp product was sold in (for example, 'com.some.thing').
            packageName: string,
            // The inapp product SKU (for example, 'com.some.thing.inapp1').
            productId: string,
            // The token provided to the user's device when the inapp product was purchased.
            token: string,
        }) : gapi.client.Request<InappPurchase>;        
        
    }
    
    
    interface PurchasesResource {
        // Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
        cancel (request: {        
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
            // The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
            packageName: string,
            // The purchased subscription ID (for example, 'monthly001').
            subscriptionId: string,
            // The token provided to the user's device when the subscription was purchased.
            token: string,
        }) : gapi.client.Request<void>;        
        
        // Checks whether a user's subscription purchase is valid and returns its expiry time.
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
            // The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
            packageName: string,
            // The purchased subscription ID (for example, 'monthly001').
            subscriptionId: string,
            // The token provided to the user's device when the subscription was purchased.
            token: string,
        }) : gapi.client.Request<SubscriptionPurchase>;        
        
    }
    
}

declare module gapi.client.androidpublisher {
    var inapppurchases: gapi.client.androidpublisher.InapppurchasesResource; 
    
    var purchases: gapi.client.androidpublisher.PurchasesResource; 
    
}
