// Type definitions for Google Google Safe Browsing API v4
// Project: https://developers.google.com/safe-browsing/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.safebrowsing {
    
    interface MetadataEntry {
        // The metadata entry key. For JSON requests, the key is base64-encoded.
        key?: string,
        // The metadata entry value. For JSON requests, the value is base64-encoded.
        value?: string,
    }
    
    interface ClientInfo {
        // A client ID that (hopefully) uniquely identifies the client implementation
        // of the Safe Browsing API.
        clientId?: string,
        // The version of the client implementation.
        clientVersion?: string,
    }
    
    interface ThreatInfo {
        // The entry types to be checked.
        threatEntryTypes?: string[],        
        // The threat types to be checked.
        threatTypes?: string[],        
        // The platform types to be checked.
        platformTypes?: string[],        
        // The threat entries to be checked.
        threatEntries?: ThreatEntry[],        
    }
    
    interface FindThreatMatchesRequest {
        // The client metadata.
        client?: ClientInfo,
        // The lists and entries to be checked for matches.
        threatInfo?: ThreatInfo,
    }
    
    interface ThreatEntryMetadata {
        // The metadata entries.
        entries?: MetadataEntry[],        
    }
    
    interface RawIndices {
        // The indices to remove from a lexicographically-sorted local list.
        indices?: number[],        
    }
    
    interface RawHashes {
        // The hashes, in binary format, concatenated into one long string. Hashes are
        // sorted in lexicographic order. For JSON API users, hashes are
        // base64-encoded.
        rawHashes?: string,
        // The number of bytes for each prefix encoded below.  This field can be
        // anywhere from 4 (shortest prefix) to 32 (full SHA256 hash).
        prefixSize?: number,
    }
    
    interface FetchThreatListUpdatesResponse {
        // The minimum duration the client must wait before issuing any update
        // request. If this field is not set clients may update as soon as they want.
        minimumWaitDuration?: string,
        // The list updates requested by the clients.
        listUpdateResponses?: ListUpdateResponse[],        
    }
    
    interface Checksum {
        // The SHA256 hash of the client state; that is, of the sorted list of all
        // hashes present in the database.
        sha256?: string,
    }
    
    interface FindFullHashesResponse {
        // The minimum duration the client must wait before issuing any find hashes
        // request. If this field is not set, clients can issue a request as soon as
        // they want.
        minimumWaitDuration?: string,
        // The full hashes that matched the requested prefixes.
        matches?: ThreatMatch[],        
        // For requested entities that did not match the threat list, how long to
        // cache the response.
        negativeCacheDuration?: string,
    }
    
    interface ThreatEntrySet {
        // The encoded local, lexicographically-sorted list indices, using a
        // Golomb-Rice encoding. Used for sending compressed removal indices. The
        // removal indices (uint32) are sorted in ascending order, then delta encoded
        // and stored as encoded_data.
        riceIndices?: RiceDeltaEncoding,
        // The compression type for the entries in this set.
        compressionType?: string,
        // The raw removal indices for a local list.
        rawIndices?: RawIndices,
        // The raw SHA256-formatted entries.
        rawHashes?: RawHashes,
        // The encoded 4-byte prefixes of SHA256-formatted entries, using a
        // Golomb-Rice encoding. The hashes are converted to uint32, sorted in
        // ascending order, then delta encoded and stored as encoded_data.
        riceHashes?: RiceDeltaEncoding,
    }
    
    interface FindFullHashesRequest {
        // The current client states for each of the client's local threat lists.
        clientStates?: string[],        
        // The client metadata.
        client?: ClientInfo,
        // The lists and hashes to be checked.
        threatInfo?: ThreatInfo,
        // Client metadata associated with callers of higher-level APIs built on top
        // of the client's implementation.
        apiClient?: ClientInfo,
    }
    
    interface ListUpdateRequest {
        // The types of entries present in the list.
        threatEntryType?: string,
        // The current state of the client for the requested list (the encrypted
        // client state that was received from the last successful list update).
        state?: string,
        // The type of platform at risk by entries present in the list.
        platformType?: string,
        // The constraints associated with this request.
        constraints?: Constraints,
        // The type of threat posed by entries present in the list.
        threatType?: string,
    }
    
    interface FetchThreatListUpdatesRequest {
        // The requested threat list updates.
        listUpdateRequests?: ListUpdateRequest[],        
        // The client metadata.
        client?: ClientInfo,
    }
    
    interface ListUpdateResponse {
        // A set of entries to add to a local threat type's list. Repeated to allow
        // for a combination of compressed and raw data to be sent in a single
        // response.
        additions?: ThreatEntrySet[],        
        // The expected SHA256 hash of the client state; that is, of the sorted list
        // of all hashes present in the database after applying the provided update.
        // If the client state doesn't match the expected state, the client must
        // disregard this update and retry later.
        checksum?: Checksum,
        // The type of response. This may indicate that an action is required by the
        // client when the response is received.
        responseType?: string,
        // The threat type for which data is returned.
        threatType?: string,
        // The new client state, in encrypted format. Opaque to clients.
        newClientState?: string,
        // A set of entries to remove from a local threat type's list. In practice,
        // this field is empty or contains exactly one ThreatEntrySet.
        removals?: ThreatEntrySet[],        
        // The platform type for which data is returned.
        platformType?: string,
        // The format of the threats.
        threatEntryType?: string,
    }
    
    interface Constraints {
        // The compression types supported by the client.
        supportedCompressions?: string[],        
        // The maximum size in number of entries. The update will not contain more
        // entries than this value.  This should be a power of 2 between 2**10 and
        // 2**20.  If zero, no update size limit is set.
        maxUpdateEntries?: number,
        // Requests the list for a specific geographic location. If not set the
        // server may pick that value based on the user's IP address. Expects ISO
        // 3166-1 alpha-2 format.
        region?: string,
        // Sets the maximum number of entries that the client is willing to have
        // in the local database. This should be a power of 2 between 2**10 and
        // 2**20. If zero, no database size limit is set.
        maxDatabaseEntries?: number,
    }
    
    interface ThreatMatch {
        // The cache lifetime for the returned match. Clients must not cache this
        // response for more than this duration to avoid false positives.
        cacheDuration?: string,
        // Optional metadata associated with this threat.
        threatEntryMetadata?: ThreatEntryMetadata,
        // The threat type matching this threat.
        threatType?: string,
        // The threat matching this threat.
        threat?: ThreatEntry,
        // The platform type matching this threat.
        platformType?: string,
        // The threat entry type matching this threat.
        threatEntryType?: string,
    }
    
    interface ListThreatListsResponse {
        // The lists available for download by the client.
        threatLists?: ThreatListDescriptor[],        
    }
    
    interface RiceDeltaEncoding {
        // The encoded deltas that are encoded using the Golomb-Rice coder.
        encodedData?: string,
        // The offset of the first entry in the encoded data, or, if only a single
        // integer was encoded, that single integer's value.
        firstValue?: string,
        // The number of entries that are delta encoded in the encoded data. If only a
        // single integer was encoded, this will be zero and the single value will be
        // stored in `first_value`.
        numEntries?: number,
        // The Golomb-Rice parameter, which is a number between 2 and 28. This field
        // is missing (that is, zero) if `num_entries` is zero.
        riceParameter?: number,
    }
    
    interface FindThreatMatchesResponse {
        // The threat list matches.
        matches?: ThreatMatch[],        
    }
    
    interface ThreatEntry {
        // The digest of an executable in SHA256 format. The API supports both
        // binary and hex digests. For JSON requests, digests are base64-encoded.
        digest?: string,
        // A hash prefix, consisting of the most significant 4-32 bytes of a SHA256
        // hash. This field is in binary format. For JSON requests, hashes are
        // base64-encoded.
        hash?: string,
        // A URL.
        url?: string,
    }
    
    interface ThreatListDescriptor {
        // The platform type targeted by the list's entries.
        platformType?: string,
        // The threat type posed by the list's entries.
        threatType?: string,
        // The entry types contained in the list.
        threatEntryType?: string,
    }
    
    interface FullHashesResource {
        // Finds the full hashes that match the requested hash prefixes.
        find (request: {        
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
            // Data format for response.
            alt?: string,
        }) : gapi.client.Request<FindFullHashesResponse>;        
        
    }
    
    
    interface EncodedUpdatesResource {
        // 
        get (request: {        
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
            // Data format for response.
            alt?: string,
            // A client ID that uniquely identifies the client implementation of the Safe
            // Browsing API.
            clientId?: string,
            // The version of the client implementation.
            clientVersion?: string,
            // A serialized FetchThreatListUpdatesRequest proto.
            encodedRequest: string,
        }) : gapi.client.Request<FetchThreatListUpdatesResponse>;        
        
    }
    
    
    interface ThreatListUpdatesResource {
        // Fetches the most recent threat list updates. A client can request updates
        // for multiple lists at once.
        fetch (request: {        
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
            // Data format for response.
            alt?: string,
        }) : gapi.client.Request<FetchThreatListUpdatesResponse>;        
        
    }
    
    
    interface EncodedFullHashesResource {
        // 
        get (request: {        
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
            // Data format for response.
            alt?: string,
            // A serialized FindFullHashesRequest proto.
            encodedRequest: string,
            // A client ID that (hopefully) uniquely identifies the client implementation
            // of the Safe Browsing API.
            clientId?: string,
            // The version of the client implementation.
            clientVersion?: string,
        }) : gapi.client.Request<FindFullHashesResponse>;        
        
    }
    
    
    interface ThreatListsResource {
        // Lists the Safe Browsing threat lists available for download.
        list (request: {        
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
            // Data format for response.
            alt?: string,
        }) : gapi.client.Request<ListThreatListsResponse>;        
        
    }
    
    
    interface ThreatMatchesResource {
        // Finds the threat entries that match the Safe Browsing lists.
        find (request: {        
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
            // Data format for response.
            alt?: string,
        }) : gapi.client.Request<FindThreatMatchesResponse>;        
        
    }
    
}

declare module gapi.client.safebrowsing {
    var fullHashes: gapi.client.safebrowsing.FullHashesResource; 
    
    var encodedUpdates: gapi.client.safebrowsing.EncodedUpdatesResource; 
    
    var threatListUpdates: gapi.client.safebrowsing.ThreatListUpdatesResource; 
    
    var encodedFullHashes: gapi.client.safebrowsing.EncodedFullHashesResource; 
    
    var threatLists: gapi.client.safebrowsing.ThreatListsResource; 
    
    var threatMatches: gapi.client.safebrowsing.ThreatMatchesResource; 
    
}
