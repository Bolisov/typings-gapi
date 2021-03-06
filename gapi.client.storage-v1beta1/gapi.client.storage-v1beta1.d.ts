// Type definitions for Google Cloud Storage JSON API v1beta1
// Project: https://developers.google.com/storage/docs/json_api/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.storage {
    
    interface Bucket {
        // Access controls on the bucket.
        acl?: BucketAccessControl[],        
        // Default access controls to apply to new objects when no ACL is provided.
        defaultObjectAcl?: ObjectAccessControl[],        
        // The name of the bucket.
        id?: string,
        // The kind of item this is. For buckets, this is always storage#bucket.
        kind?: string,
        // The location of the bucket. Object data for objects in the bucket resides in physical storage in this location. Can be US or EU. Defaults to US.
        location?: string,
        // The owner of the bucket. This will always be the project team's owner group.
        owner?: {        
            // The entity, in the form group-groupId.
            entity?: string,
            // The ID for the entity.
            entityId?: string,
        },        
        // The project the bucket belongs to.
        projectId?: string,
        // The URI of this bucket.
        selfLink?: string,
        // Creation time of the bucket in RFC 3339 format.
        timeCreated?: string,
        // The bucket's website configuration.
        website?: {        
            // Behaves as the bucket's directory index where missing objects are treated as potential directories.
            mainPageSuffix?: string,
            // The custom object to return when a requested resource is not found.
            notFoundPage?: string,
        },        
    }
    
    interface BucketAccessControl {
        // The name of the bucket.
        bucket?: string,
        // The domain associated with the entity, if any.
        domain?: string,
        // The email address associated with the entity, if any.
        email?: string,
        // The entity holding the permission, in one of the following forms: 
        // - user-userId 
        // - user-email 
        // - group-groupId 
        // - group-email 
        // - domain-domain 
        // - allUsers 
        // - allAuthenticatedUsers Examples: 
        // - The user liz@example.com would be user-liz@example.com. 
        // - The group example@googlegroups.com would be group-example@googlegroups.com. 
        // - To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.
        entity?: string,
        // The ID for the entity, if any.
        entityId?: string,
        // The ID of the access-control entry.
        id?: string,
        // The kind of item this is. For bucket access control entries, this is always storage#bucketAccessControl.
        kind?: string,
        // The access permission for the entity. Can be READER, WRITER, or OWNER.
        role?: string,
        // The link to this access-control entry.
        selfLink?: string,
    }
    
    interface BucketAccessControls {
        // The list of items.
        items?: BucketAccessControl[],        
        // The kind of item this is. For lists of bucket access control entries, this is always storage#bucketAccessControls.
        kind?: string,
    }
    
    interface Buckets {
        // The list of items.
        items?: Bucket[],        
        // The kind of item this is. For lists of buckets, this is always storage#buckets.
        kind?: string,
        // The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
        nextPageToken?: string,
    }
    
    interface Object {
        // Access controls on the object.
        acl?: ObjectAccessControl[],        
        // The bucket containing this object.
        bucket?: string,
        // Cache-Control directive for the object data.
        cacheControl?: string,
        // Content-Disposition of the object data.
        contentDisposition?: string,
        // Content-Encoding of the object data.
        contentEncoding?: string,
        // Content-Language of the object data.
        contentLanguage?: string,
        // The ID of the object.
        id?: string,
        // The kind of item this is. For objects, this is always storage#object.
        kind?: string,
        // Object media data. Provided on your behalf when uploading raw media or multipart/related with an auxiliary media part.
        media?: {        
            // Hash algorithm used. Currently only MD5 is supported. Required if a hash is provided.
            algorithm?: string,
            // Content-Type of the object data.
            contentType?: string,
            // URL-safe Base64-encoded data. This property can be used to insert objects under 64KB in size, and will only be returned in response to the get method for objects so created. When this resource is returned in response to the list method, this property is omitted.
            data?: string,
            // Hash of the data. Required if a hash algorithm is provided.
            hash?: string,
            // Content-Length of the data in bytes.
            length?: string,
            // Media download link.
            link?: string,
            // Creation time of the data in RFC 3339 format.
            timeCreated?: string,
        },        
        // User-provided metadata, in key/value pairs.
        metadata?: any,
        // The name of this object. Required if not specified by URL parameter.
        name?: string,
        // The owner of the object. This will always be the uploader of the object.
        owner?: {        
            // The entity, in the form user-userId.
            entity?: string,
            // The ID for the entity.
            entityId?: string,
        },        
        // The link to this object.
        selfLink?: string,
    }
    
    interface ObjectAccessControl {
        // The name of the bucket.
        bucket?: string,
        // The domain associated with the entity, if any.
        domain?: string,
        // The email address associated with the entity, if any.
        email?: string,
        // The entity holding the permission, in one of the following forms: 
        // - user-userId 
        // - user-email 
        // - group-groupId 
        // - group-email 
        // - domain-domain 
        // - allUsers 
        // - allAuthenticatedUsers Examples: 
        // - The user liz@example.com would be user-liz@example.com. 
        // - The group example@googlegroups.com would be group-example@googlegroups.com. 
        // - To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.
        entity?: string,
        // The ID for the entity, if any.
        entityId?: string,
        // The ID of the access-control entry.
        id?: string,
        // The kind of item this is. For object access control entries, this is always storage#objectAccessControl.
        kind?: string,
        // The name of the object.
        object?: string,
        // The access permission for the entity. Can be READER or OWNER.
        role?: string,
        // The link to this access-control entry.
        selfLink?: string,
    }
    
    interface ObjectAccessControls {
        // The list of items.
        items?: ObjectAccessControl[],        
        // The kind of item this is. For lists of object access control entries, this is always storage#objectAccessControls.
        kind?: string,
    }
    
    interface Objects {
        // The list of items.
        items?: Object[],        
        // The kind of item this is. For lists of objects, this is always storage#objects.
        kind?: string,
        // The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
        nextPageToken?: string,
        // The list of prefixes of objects matching-but-not-listed up to and including the requested delimiter.
        prefixes?: string[],        
    }
    
    interface BucketAccessControlsResource {
        // Deletes the ACL entry for the specified entity on the specified bucket.
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
            // Name of a bucket.
            bucket: string,
            // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
            entity: string,
        }) : gapi.client.Request<void>;        
        
        // Returns the ACL entry for the specified entity on the specified bucket.
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
            // Name of a bucket.
            bucket: string,
            // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
            entity: string,
        }) : gapi.client.Request<BucketAccessControl>;        
        
        // Creates a new ACL entry on the specified bucket.
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
            // Name of a bucket.
            bucket: string,
        }) : gapi.client.Request<BucketAccessControl>;        
        
        // Retrieves ACL entries on the specified bucket.
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
            // Name of a bucket.
            bucket: string,
        }) : gapi.client.Request<BucketAccessControls>;        
        
        // Updates an ACL entry on the specified bucket. This method supports patch semantics.
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
            // Name of a bucket.
            bucket: string,
            // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
            entity: string,
        }) : gapi.client.Request<BucketAccessControl>;        
        
        // Updates an ACL entry on the specified bucket.
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
            // Name of a bucket.
            bucket: string,
            // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
            entity: string,
        }) : gapi.client.Request<BucketAccessControl>;        
        
    }
    
    
    interface BucketsResource {
        // Deletes an empty bucket.
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
            // Name of a bucket.
            bucket: string,
        }) : gapi.client.Request<void>;        
        
        // Returns metadata for the specified bucket.
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
            // Name of a bucket.
            bucket: string,
            // Set of properties to return. Defaults to no_acl.
            projection?: string,
        }) : gapi.client.Request<Bucket>;        
        
        // Creates a new bucket.
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
            // Set of properties to return. Defaults to no_acl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.
            projection?: string,
        }) : gapi.client.Request<Bucket>;        
        
        // Retrieves a list of buckets for a given project.
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
            // Maximum number of buckets to return.
            max-results?: number,
            // A previously-returned page token representing part of the larger set of results to view.
            pageToken?: string,
            // A valid API project identifier.
            projectId: string,
            // Set of properties to return. Defaults to no_acl.
            projection?: string,
        }) : gapi.client.Request<Buckets>;        
        
        // Updates a bucket. This method supports patch semantics.
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
            // Name of a bucket.
            bucket: string,
            // Set of properties to return. Defaults to full.
            projection?: string,
        }) : gapi.client.Request<Bucket>;        
        
        // Updates a bucket.
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
            // Name of a bucket.
            bucket: string,
            // Set of properties to return. Defaults to full.
            projection?: string,
        }) : gapi.client.Request<Bucket>;        
        
    }
    
    
    interface ObjectAccessControlsResource {
        // Deletes the ACL entry for the specified entity on the specified object.
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
            // Name of a bucket.
            bucket: string,
            // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
            entity: string,
            // Name of the object.
            object: string,
        }) : gapi.client.Request<void>;        
        
        // Returns the ACL entry for the specified entity on the specified object.
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
            // Name of a bucket.
            bucket: string,
            // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
            entity: string,
            // Name of the object.
            object: string,
        }) : gapi.client.Request<ObjectAccessControl>;        
        
        // Creates a new ACL entry on the specified object.
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
            // Name of a bucket.
            bucket: string,
            // Name of the object.
            object: string,
        }) : gapi.client.Request<ObjectAccessControl>;        
        
        // Retrieves ACL entries on the specified object.
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
            // Name of a bucket.
            bucket: string,
            // Name of the object.
            object: string,
        }) : gapi.client.Request<ObjectAccessControls>;        
        
        // Updates an ACL entry on the specified object. This method supports patch semantics.
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
            // Name of a bucket.
            bucket: string,
            // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
            entity: string,
            // Name of the object.
            object: string,
        }) : gapi.client.Request<ObjectAccessControl>;        
        
        // Updates an ACL entry on the specified object.
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
            // Name of a bucket.
            bucket: string,
            // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
            entity: string,
            // Name of the object.
            object: string,
        }) : gapi.client.Request<ObjectAccessControl>;        
        
    }
    
    
    interface ObjectsResource {
        // Deletes data blobs and associated metadata.
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
            // Name of the bucket in which the object resides.
            bucket: string,
            // Name of the object.
            object: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves objects or their associated metadata.
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
            // Name of the bucket in which the object resides.
            bucket: string,
            // Name of the object.
            object: string,
            // Set of properties to return. Defaults to no_acl.
            projection?: string,
        }) : gapi.client.Request<Object>;        
        
        // Stores new data blobs and associated metadata.
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
            // Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
            bucket: string,
            // Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
            name?: string,
            // Set of properties to return. Defaults to no_acl, unless the object resource specifies the acl property, when it defaults to full.
            projection?: string,
        }) : gapi.client.Request<Object>;        
        
        // Retrieves a list of objects matching the criteria.
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
            // Name of the bucket in which to look for objects.
            bucket: string,
            // Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
            delimiter?: string,
            // Maximum number of items plus prefixes to return. As duplicate prefixes are omitted, fewer total results may be returned than requested.
            max-results?: number,
            // A previously-returned page token representing part of the larger set of results to view.
            pageToken?: string,
            // Filter results to objects whose names begin with this prefix.
            prefix?: string,
            // Set of properties to return. Defaults to no_acl.
            projection?: string,
        }) : gapi.client.Request<Objects>;        
        
        // Updates a data blob's associated metadata. This method supports patch semantics.
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
            // Name of the bucket in which the object resides.
            bucket: string,
            // Name of the object.
            object: string,
            // Set of properties to return. Defaults to full.
            projection?: string,
        }) : gapi.client.Request<Object>;        
        
        // Updates a data blob's associated metadata.
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
            // Name of the bucket in which the object resides.
            bucket: string,
            // Name of the object.
            object: string,
            // Set of properties to return. Defaults to full.
            projection?: string,
        }) : gapi.client.Request<Object>;        
        
    }
    
}

declare module gapi.client.storage {
    var bucketAccessControls: gapi.client.storage.BucketAccessControlsResource; 
    
    var buckets: gapi.client.storage.BucketsResource; 
    
    var objectAccessControls: gapi.client.storage.ObjectAccessControlsResource; 
    
    var objects: gapi.client.storage.ObjectsResource; 
    
}
