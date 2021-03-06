// Type definitions for Google Google Cloud DNS API v2beta1
// Project: https://developers.google.com/cloud-dns
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.dns {
    
    interface Change {
        // Which ResourceRecordSets to add?
        additions?: ResourceRecordSet[],        
        // Which ResourceRecordSets to remove? Must match existing data exactly.
        deletions?: ResourceRecordSet[],        
        // Unique identifier for the resource; defined by the server (output only).
        id?: string,
        // If the DNS queries for the zone will be served.
        isServing?: boolean,
        // Identifies what kind of resource this is. Value: the fixed string "dns#change".
        kind?: string,
        // The time that this operation was started by the server (output only). This is in RFC3339 text format.
        startTime?: string,
        // Status of the operation (output only).
        status?: string,
    }
    
    interface ChangesListResponse {
        // The requested changes.
        changes?: Change[],        
        // 
        header?: ResponseHeader,
        // Type of resource.
        kind?: string,
        // The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token.
        // 
        // In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to retrieve a "snapshot" of collections larger than the maximum page size.
        nextPageToken?: string,
    }
    
    interface DnsKey {
        // String mnemonic specifying the DNSSEC algorithm of this key. Immutable after creation time.
        algorithm?: string,
        // The time that this resource was created in the control plane. This is in RFC3339 text format. Output only.
        creationTime?: string,
        // A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the resource's function.
        description?: string,
        // Cryptographic hashes of the DNSKEY resource record associated with this DnsKey. These digests are needed to construct a DS record that points at this DNS key. Output only.
        digests?: DnsKeyDigest[],        
        // Unique identifier for the resource; defined by the server (output only).
        id?: string,
        // Active keys will be used to sign subsequent changes to the ManagedZone. Inactive keys will still be present as DNSKEY Resource Records for the use of resolvers validating existing signatures.
        isActive?: boolean,
        // Length of the key in bits. Specified at creation time then immutable.
        keyLength?: number,
        // The key tag is a non-cryptographic hash of the a DNSKEY resource record associated with this DnsKey. The key tag can be used to identify a DNSKEY more quickly (but it is not a unique identifier). In particular, the key tag is used in a parent zone's DS record to point at the DNSKEY in this child ManagedZone. The key tag is a number in the range [0, 65535] and the algorithm to calculate it is specified in RFC4034 Appendix B. Output only.
        keyTag?: number,
        // Identifies what kind of resource this is. Value: the fixed string "dns#dnsKey".
        kind?: string,
        // Base64 encoded public half of this key. Output only.
        publicKey?: string,
        // One of "KEY_SIGNING" or "ZONE_SIGNING". Keys of type KEY_SIGNING have the Secure Entry Point flag set and, when active, will be used to sign only resource record sets of type DNSKEY. Otherwise, the Secure Entry Point flag will be cleared and this key will be used to sign only resource record sets of other types. Immutable after creation time.
        type?: string,
    }
    
    interface DnsKeyDigest {
        // The base-16 encoded bytes of this digest. Suitable for use in a DS resource record.
        digest?: string,
        // Specifies the algorithm used to calculate this digest.
        type?: string,
    }
    
    interface DnsKeySpec {
        // String mnemonic specifying the DNSSEC algorithm of this key.
        algorithm?: string,
        // Length of the keys in bits.
        keyLength?: number,
        // One of "KEY_SIGNING" or "ZONE_SIGNING". Keys of type KEY_SIGNING have the Secure Entry Point flag set and, when active, will be used to sign only resource record sets of type DNSKEY. Otherwise, the Secure Entry Point flag will be cleared and this key will be used to sign only resource record sets of other types.
        keyType?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dns#dnsKeySpec".
        kind?: string,
    }
    
    interface DnsKeysListResponse {
        // The requested resources.
        dnsKeys?: DnsKey[],        
        // 
        header?: ResponseHeader,
        // Type of resource.
        kind?: string,
        // The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token.
        // 
        // In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to retrieve a "snapshot" of collections larger than the maximum page size.
        nextPageToken?: string,
    }
    
    interface ManagedZone {
        // The time that this resource was created on the server. This is in RFC3339 text format. Output only.
        creationTime?: string,
        // A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the managed zone's function.
        description?: string,
        // The DNS name of this managed zone, for instance "example.com.".
        dnsName?: string,
        // DNSSEC configuration.
        dnssecConfig?: ManagedZoneDnsSecConfig,
        // Unique identifier for the resource; defined by the server (output only)
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dns#managedZone".
        kind?: string,
        // User assigned name for this resource. Must be unique within the project. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes.
        name?: string,
        // Optionally specifies the NameServerSet for this ManagedZone. A NameServerSet is a set of DNS name servers that all host the same ManagedZones. Most users will leave this field unset.
        nameServerSet?: string,
        // Delegate your managed_zone to these virtual name servers; defined by the server (output only)
        nameServers?: string[],        
    }
    
    interface ManagedZoneDnsSecConfig {
        // Specifies parameters that will be used for generating initial DnsKeys for this ManagedZone. Output only while state is not OFF.
        defaultKeySpecs?: DnsKeySpec[],        
        // Identifies what kind of resource this is. Value: the fixed string "dns#managedZoneDnsSecConfig".
        kind?: string,
        // Specifies the mechanism used to provide authenticated denial-of-existence responses. Output only while state is not OFF.
        nonExistence?: string,
        // Specifies whether DNSSEC is enabled, and what mode it is in.
        state?: string,
    }
    
    interface ManagedZoneOperationsListResponse {
        // 
        header?: ResponseHeader,
        // Type of resource.
        kind?: string,
        // The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token.
        // 
        // In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to retrieve a consistent snapshot of a collection larger than the maximum page size.
        nextPageToken?: string,
        // The operation resources.
        operations?: Operation[],        
    }
    
    interface ManagedZonesDeleteResponse {
        // 
        header?: ResponseHeader,
    }
    
    interface ManagedZonesListResponse {
        // 
        header?: ResponseHeader,
        // Type of resource.
        kind?: string,
        // The managed zone resources.
        managedZones?: ManagedZone[],        
        // The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token.
        // 
        // In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to retrieve a consistent snapshot of a collection larger than the maximum page size.
        nextPageToken?: string,
    }
    
    interface Operation {
        // Only populated if the operation targeted a DnsKey (output only).
        dnsKeyContext?: OperationDnsKeyContext,
        // Unique identifier for the resource. This is the client_operation_id if the client specified it when the mutation was initiated, otherwise, it is generated by the server. The name must be 1-63 characters long and match the regular expression [-a-z0-9]? (output only)
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dns#operation".
        kind?: string,
        // The time that this operation was started by the server. This is in RFC3339 text format (output only).
        startTime?: string,
        // Status of the operation. Can be one of the following: "PENDING" or "DONE" (output only).
        status?: string,
        // Type of the operation. Operations include insert, update, and delete (output only).
        type?: string,
        // User who requested the operation, for example: user@example.com. cloud-dns-system for operations automatically done by the system. (output only)
        user?: string,
        // Only populated if the operation targeted a ManagedZone (output only).
        zoneContext?: OperationManagedZoneContext,
    }
    
    interface OperationDnsKeyContext {
        // The post-operation DnsKey resource.
        newValue?: DnsKey,
        // The pre-operation DnsKey resource.
        oldValue?: DnsKey,
    }
    
    interface OperationManagedZoneContext {
        // The post-operation ManagedZone resource.
        newValue?: ManagedZone,
        // The pre-operation ManagedZone resource.
        oldValue?: ManagedZone,
    }
    
    interface Project {
        // User assigned unique identifier for the resource (output only).
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "dns#project".
        kind?: string,
        // Unique numeric identifier for the resource; defined by the server (output only).
        number?: string,
        // Quotas assigned to this project (output only).
        quota?: Quota,
    }
    
    interface Quota {
        // Maximum allowed number of DnsKeys per ManagedZone.
        dnsKeysPerManagedZone?: number,
        // Identifies what kind of resource this is. Value: the fixed string "dns#quota".
        kind?: string,
        // Maximum allowed number of managed zones in the project.
        managedZones?: number,
        // Maximum allowed number of ResourceRecords per ResourceRecordSet.
        resourceRecordsPerRrset?: number,
        // Maximum allowed number of ResourceRecordSets to add per ChangesCreateRequest.
        rrsetAdditionsPerChange?: number,
        // Maximum allowed number of ResourceRecordSets to delete per ChangesCreateRequest.
        rrsetDeletionsPerChange?: number,
        // Maximum allowed number of ResourceRecordSets per zone in the project.
        rrsetsPerManagedZone?: number,
        // Maximum allowed size for total rrdata in one ChangesCreateRequest in bytes.
        totalRrdataSizePerChange?: number,
        // DNSSEC algorithm and key length types that can be used for DnsKeys.
        whitelistedKeySpecs?: DnsKeySpec[],        
    }
    
    interface ResourceRecordSet {
        // Identifies what kind of resource this is. Value: the fixed string "dns#resourceRecordSet".
        kind?: string,
        // For example, www.example.com.
        name?: string,
        // As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).
        rrdatas?: string[],        
        // As defined in RFC 4034 (section 3.2).
        signatureRrdatas?: string[],        
        // Number of seconds that this ResourceRecordSet can be cached by resolvers.
        ttl?: number,
        // The identifier of a supported record type, for example, A, AAAA, MX, TXT, and so on.
        type?: string,
    }
    
    interface ResourceRecordSetsListResponse {
        // 
        header?: ResponseHeader,
        // Type of resource.
        kind?: string,
        // The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token.
        // 
        // In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to retrieve a consistent snapshot of a collection larger than the maximum page size.
        nextPageToken?: string,
        // The resource record set resources.
        rrsets?: ResourceRecordSet[],        
    }
    
    interface ResponseHeader {
        // For mutating operation requests that completed successfully. This is the client_operation_id if the client specified it, otherwise it is generated by the server (output only).
        operationId?: string,
    }
    
    interface ChangesResource {
        // Atomically update the ResourceRecordSet collection.
        create (request: {        
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
            // For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
            clientOperationId?: string,
            // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
            managedZone: string,
            // Identifies the project addressed by this request.
            project: string,
        }) : gapi.client.Request<Change>;        
        
        // Fetch the representation of an existing Change.
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
            // The identifier of the requested change, from a previous ResourceRecordSetsChangeResponse.
            changeId: string,
            // For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
            clientOperationId?: string,
            // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
            managedZone: string,
            // Identifies the project addressed by this request.
            project: string,
        }) : gapi.client.Request<Change>;        
        
        // Enumerate Changes to a ResourceRecordSet collection.
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
            // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
            managedZone: string,
            // Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
            maxResults?: number,
            // Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
            pageToken?: string,
            // Identifies the project addressed by this request.
            project: string,
            // Sorting criterion. The only supported value is change sequence.
            sortBy?: string,
            // Sorting order direction: 'ascending' or 'descending'.
            sortOrder?: string,
        }) : gapi.client.Request<ChangesListResponse>;        
        
    }
    
    
    interface DnsKeysResource {
        // Fetch the representation of an existing DnsKey.
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
            // For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
            clientOperationId?: string,
            // An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type will be computed and displayed.
            digestType?: string,
            // The identifier of the requested DnsKey.
            dnsKeyId: string,
            // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
            managedZone: string,
            // Identifies the project addressed by this request.
            project: string,
        }) : gapi.client.Request<DnsKey>;        
        
        // Enumerate DnsKeys to a ResourceRecordSet collection.
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
            // An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type will be computed and displayed.
            digestType?: string,
            // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
            managedZone: string,
            // Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
            maxResults?: number,
            // Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
            pageToken?: string,
            // Identifies the project addressed by this request.
            project: string,
        }) : gapi.client.Request<DnsKeysListResponse>;        
        
    }
    
    
    interface ManagedZoneOperationsResource {
        // Fetch the representation of an existing Operation.
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
            // For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
            clientOperationId?: string,
            // Identifies the managed zone addressed by this request.
            managedZone: string,
            // Identifies the operation addressed by this request.
            operation: string,
            // Identifies the project addressed by this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Enumerate Operations for the given ManagedZone.
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
            // Identifies the managed zone addressed by this request.
            managedZone: string,
            // Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
            maxResults?: number,
            // Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
            pageToken?: string,
            // Identifies the project addressed by this request.
            project: string,
            // Sorting criterion. The only supported values are START_TIME and ID.
            sortBy?: string,
        }) : gapi.client.Request<ManagedZoneOperationsListResponse>;        
        
    }
    
    
    interface ManagedZonesResource {
        // Create a new ManagedZone.
        create (request: {        
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
            // For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
            clientOperationId?: string,
            // Identifies the project addressed by this request.
            project: string,
        }) : gapi.client.Request<ManagedZone>;        
        
        // Delete a previously created ManagedZone.
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
            // For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
            clientOperationId?: string,
            // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
            managedZone: string,
            // Identifies the project addressed by this request.
            project: string,
        }) : gapi.client.Request<ManagedZonesDeleteResponse>;        
        
        // Fetch the representation of an existing ManagedZone.
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
            // For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
            clientOperationId?: string,
            // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
            managedZone: string,
            // Identifies the project addressed by this request.
            project: string,
        }) : gapi.client.Request<ManagedZone>;        
        
        // Enumerate ManagedZones that have been created but not yet deleted.
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
            // Restricts the list to return only zones with this domain name.
            dnsName?: string,
            // Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
            maxResults?: number,
            // Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
            pageToken?: string,
            // Identifies the project addressed by this request.
            project: string,
        }) : gapi.client.Request<ManagedZonesListResponse>;        
        
        // Update an existing ManagedZone. This method supports patch semantics.
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
            // For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
            clientOperationId?: string,
            // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
            managedZone: string,
            // Identifies the project addressed by this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Update an existing ManagedZone.
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
            // For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
            clientOperationId?: string,
            // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
            managedZone: string,
            // Identifies the project addressed by this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface ProjectsResource {
        // Fetch the representation of an existing Project.
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
            // For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
            clientOperationId?: string,
            // Identifies the project addressed by this request.
            project: string,
        }) : gapi.client.Request<Project>;        
        
    }
    
    
    interface ResourceRecordSetsResource {
        // Enumerate ResourceRecordSets that have been created but not yet deleted.
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
            // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
            managedZone: string,
            // Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
            maxResults?: number,
            // Restricts the list to return only records with this fully qualified domain name.
            name?: string,
            // Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
            pageToken?: string,
            // Identifies the project addressed by this request.
            project: string,
            // Restricts the list to return only records of this type. If present, the "name" parameter must also be present.
            type?: string,
        }) : gapi.client.Request<ResourceRecordSetsListResponse>;        
        
    }
    
}

declare module gapi.client.dns {
    var changes: gapi.client.dns.ChangesResource; 
    
    var dnsKeys: gapi.client.dns.DnsKeysResource; 
    
    var managedZoneOperations: gapi.client.dns.ManagedZoneOperationsResource; 
    
    var managedZones: gapi.client.dns.ManagedZonesResource; 
    
    var projects: gapi.client.dns.ProjectsResource; 
    
    var resourceRecordSets: gapi.client.dns.ResourceRecordSetsResource; 
    
}
