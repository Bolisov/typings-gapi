// Type definitions for Google Knowledge Graph Search API v1
// Project: https://developers.google.com/knowledge-graph/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.kgsearch {
    
    interface SearchResponse {
        // The item list of search results.
        itemListElement?: any[],        
        // The local context applicable for the response. See more details at
        // http://www.w3.org/TR/json-ld/#context-definitions.
        @context?: any,
        // The schema type of top-level JSON-LD object, e.g. ItemList.
        @type?: any,
    }
    
    interface EntitiesResource {
        // Searches Knowledge Graph for entities that match the constraints.
        // A list of matched entities will be returned in response, which will be in
        // JSON-LD format and compatible with http://schema.org
        search (request: {        
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Enables prefix match against names and aliases of entities
            prefix?: boolean,
            // The literal query string for search.
            query?: string,
            // Restricts returned entities with these types, e.g. Person
            // (as defined in http://schema.org/Person). If multiple types are specified,
            // returned entities will contain one or more of these types.
            types?: string,
            // Enables indenting of json results.
            indent?: boolean,
            // The list of language codes (defined in ISO 693) to run the query with,
            // e.g. 'en'.
            languages?: string,
            // The list of entity id to be used for search instead of query string.
            // To specify multiple ids in the HTTP request, repeat the parameter in the
            // URL as in ...?ids=A&ids=B
            ids?: string,
            // Limits the number of entities to be returned.
            limit?: number,
        }) : gapi.client.Request<SearchResponse>;        
        
    }
    
}

declare module gapi.client.kgsearch {
    var entities: gapi.client.kgsearch.EntitiesResource; 
    
}
