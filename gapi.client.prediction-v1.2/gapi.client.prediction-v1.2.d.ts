// Type definitions for Google Prediction API v1.2
// Project: https://developers.google.com/prediction/docs/developer-guide
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.prediction {
    
    interface Input {
        // 
        input?: {        
            // 
            csvInstance?: any[],            
        },        
    }
    
    interface Output {
        // 
        id?: string,
        // 
        kind?: string,
        // 
        outputLabel?: string,
        // 
        outputMulti?: {        
            // 
            label?: string,
            // 
            score?: number,
        }[],        
        // 
        outputValue?: number,
        // 
        selfLink?: string,
    }
    
    interface Training {
        // 
        id?: string,
        // 
        kind?: string,
        // 
        modelInfo?: {        
            // 
            classificationAccuracy?: number,
            // 
            meanSquaredError?: number,
            // 
            modelType?: string,
        },        
        // 
        selfLink?: string,
        // 
        trainingStatus?: string,
    }
    
    interface Update {
        // The true class label of this instance
        classLabel?: string,
        // The input features for this instance
        csvInstance?: any[],        
    }
    
    interface HostedmodelsResource {
        // Submit input and request an output against a hosted model
        predict (request: {        
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
            // The name of a hosted model
            hostedModelName: string,
        }) : gapi.client.Request<Output>;        
        
    }
    
    
    interface TrainingResource {
        // Delete a trained model
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
            // mybucket/mydata resource in Google Storage
            data: string,
        }) : gapi.client.Request<void>;        
        
        // Check training status of your model
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
            // mybucket/mydata resource in Google Storage
            data: string,
        }) : gapi.client.Request<Training>;        
        
        // Begin training your model
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
            // mybucket/mydata resource in Google Storage
            data?: string,
        }) : gapi.client.Request<Training>;        
        
        // Add new data to a trained model
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
            // mybucket/mydata resource in Google Storage
            data: string,
        }) : gapi.client.Request<Training>;        
        
    }
    
}

declare module gapi.client.prediction {
    var hostedmodels: gapi.client.prediction.HostedmodelsResource; 
    
    var training: gapi.client.prediction.TrainingResource; 
    
}
