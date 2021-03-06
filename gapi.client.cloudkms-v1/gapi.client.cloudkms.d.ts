// Type definitions for Google Google Cloud Key Management Service (KMS) API v1
// Project: https://cloud.google.com/kms/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.cloudkms {
    
    interface TestIamPermissionsResponse {
        // A subset of `TestPermissionsRequest.permissions` that the caller is
        // allowed.
        permissions?: string[],        
    }
    
    interface DestroyCryptoKeyVersionRequest {
    }
    
    interface CryptoKey {
        // Output only. The time at which this CryptoKey was created.
        createTime?: string,
        // next_rotation_time will be advanced by this period when the service
        // automatically rotates a key. Must be at least one day.
        // 
        // If rotation_period is set, next_rotation_time must also be set.
        rotationPeriod?: string,
        // Output only. A copy of the "primary" CryptoKeyVersion that will be used
        // by Encrypt when this CryptoKey is given
        // in EncryptRequest.name.
        // 
        // The CryptoKey's primary version can be updated via
        // UpdateCryptoKeyPrimaryVersion.
        primary?: CryptoKeyVersion,
        // Output only. The resource name for this CryptoKey in the format
        // `projects/*/locations/*/keyRings/*/cryptoKeys/*`.
        name?: string,
        // The immutable purpose of this CryptoKey. Currently, the only acceptable
        // purpose is ENCRYPT_DECRYPT.
        purpose?: string,
        // At next_rotation_time, the Key Management Service will automatically:
        // 
        // 1. Create a new version of this CryptoKey.
        // 2. Mark the new version as primary.
        // 
        // Key rotations performed manually via
        // CreateCryptoKeyVersion and
        // UpdateCryptoKeyPrimaryVersion
        // do not affect next_rotation_time.
        nextRotationTime?: string,
    }
    
    interface Rule {
        // If one or more 'not_in' clauses are specified, the rule matches
        // if the PRINCIPAL/AUTHORITY_SELECTOR is in none of the entries.
        // The format for in and not_in entries is the same as for members in a
        // Binding (see google/iam/v1/policy.proto).
        notIn?: string[],        
        // Human-readable description of the rule.
        description?: string,
        // Additional restrictions that must be met
        conditions?: Condition[],        
        // The config returned to callers of tech.iam.IAM.CheckPolicy for any entries
        // that match the LOG action.
        logConfig?: LogConfig[],        
        // If one or more 'in' clauses are specified, the rule matches if
        // the PRINCIPAL/AUTHORITY_SELECTOR is in at least one of these entries.
        in?: string[],        
        // A permission is a string of form '<service>.<resource type>.<verb>'
        // (e.g., 'storage.buckets.list'). A value of '*' matches all permissions,
        // and a verb part of '*' (e.g., 'storage.buckets.*') matches all verbs.
        permissions?: string[],        
        // Required
        action?: string,
    }
    
    interface LogConfig {
        // Counter options.
        counter?: CounterOptions,
        // Data access options.
        dataAccess?: DataAccessOptions,
        // Cloud audit options.
        cloudAudit?: CloudAuditOptions,
    }
    
    interface SetIamPolicyRequest {
        // OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
        // the fields in the mask will be modified. If no mask is provided, the
        // following default mask is used:
        // paths: "bindings, etag"
        // This field is only used by Cloud IAM.
        updateMask?: string,
        // REQUIRED: The complete policy to be applied to the `resource`. The size of
        // the policy is limited to a few 10s of KB. An empty policy is a
        // valid policy but certain Cloud Platform services (such as Projects)
        // might reject them.
        policy?: Policy,
    }
    
    interface DecryptRequest {
        // Optional data that must match the data originally supplied in
        // EncryptRequest.additional_authenticated_data.
        additionalAuthenticatedData?: string,
        // Required. The encrypted data originally returned in
        // EncryptResponse.ciphertext.
        ciphertext?: string,
    }
    
    interface Location {
        // Cross-service attributes for the location. For example
        // 
        //     {"cloud.googleapis.com/region": "us-east1"}
        labels?: any,
        // Resource name for the location, which may vary between implementations.
        // For example: `"projects/example-project/locations/us-east1"`
        name?: string,
        // The canonical id for this location. For example: `"us-east1"`.
        locationId?: string,
        // Service-specific metadata. For example the available capacity at the given
        // location.
        metadata?: any,
    }
    
    interface ListCryptoKeysResponse {
        // A token to retrieve next page of results. Pass this value in
        // ListCryptoKeysRequest.page_token to retrieve the next page of results.
        nextPageToken?: string,
        // The total number of CryptoKeys that matched the query.
        totalSize?: number,
        // The list of CryptoKeys.
        cryptoKeys?: CryptoKey[],        
    }
    
    interface Condition {
        // DEPRECATED. Use 'values' instead.
        value?: string,
        // Trusted attributes supplied by any service that owns resources and uses
        // the IAM system for access control.
        sys?: string,
        // The objects of the condition. This is mutually exclusive with 'value'.
        values?: string[],        
        // Trusted attributes supplied by the IAM system.
        iam?: string,
        // An operator to apply the subject with.
        op?: string,
        // Trusted attributes discharged by the service.
        svc?: string,
    }
    
    interface CounterOptions {
        // The field value to attribute.
        field?: string,
        // The metric to update.
        metric?: string,
    }
    
    interface AuditLogConfig {
        // Specifies the identities that do not cause logging for this type of
        // permission.
        // Follows the same format of Binding.members.
        exemptedMembers?: string[],        
        // The log type that this config enables.
        logType?: string,
    }
    
    interface DecryptResponse {
        // The decrypted data originally supplied in EncryptRequest.plaintext.
        plaintext?: string,
    }
    
    interface TestIamPermissionsRequest {
        // The set of permissions to check for the `resource`. Permissions with
        // wildcards (such as '*' or 'storage.*') are not allowed. For more
        // information see
        // [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
        permissions?: string[],        
    }
    
    interface KeyRing {
        // Output only. The resource name for the KeyRing in the format
        // `projects/*/locations/*/keyRings/*`.
        name?: string,
        // Output only. The time at which this KeyRing was created.
        createTime?: string,
    }
    
    interface EncryptResponse {
        // The resource name of the CryptoKeyVersion used in encryption.
        name?: string,
        // The encrypted data.
        ciphertext?: string,
    }
    
    interface ListLocationsResponse {
        // The standard List next-page token.
        nextPageToken?: string,
        // A list of locations that matches the specified filter in the request.
        locations?: Location[],        
    }
    
    interface Policy {
        // 
        iamOwned?: boolean,
        // If more than one rule is specified, the rules are applied in the following
        // manner:
        // - All matching LOG rules are always applied.
        // - If any DENY/DENY_WITH_LOG rule matches, permission is denied.
        //   Logging will be applied if one or more matching rule requires logging.
        // - Otherwise, if any ALLOW/ALLOW_WITH_LOG rule matches, permission is
        //   granted.
        //   Logging will be applied if one or more matching rule requires logging.
        // - Otherwise, if no rule applies, permission is denied.
        rules?: Rule[],        
        // Version of the `Policy`. The default version is 0.
        version?: number,
        // Specifies cloud audit logging configuration for this policy.
        auditConfigs?: AuditConfig[],        
        // Associates a list of `members` to a `role`.
        // `bindings` with no members will result in an error.
        bindings?: Binding[],        
        // `etag` is used for optimistic concurrency control as a way to help
        // prevent simultaneous updates of a policy from overwriting each other.
        // It is strongly suggested that systems make use of the `etag` in the
        // read-modify-write cycle to perform policy updates in order to avoid race
        // conditions: An `etag` is returned in the response to `getIamPolicy`, and
        // systems are expected to put that etag in the request to `setIamPolicy` to
        // ensure that their change will be applied to the same version of the policy.
        // 
        // If no `etag` is provided in the call to `setIamPolicy`, then the existing
        // policy is overwritten blindly.
        etag?: string,
    }
    
    interface RestoreCryptoKeyVersionRequest {
    }
    
    interface UpdateCryptoKeyPrimaryVersionRequest {
        // The id of the child CryptoKeyVersion to use as primary.
        cryptoKeyVersionId?: string,
    }
    
    interface ListKeyRingsResponse {
        // A token to retrieve next page of results. Pass this value in
        // ListKeyRingsRequest.page_token to retrieve the next page of results.
        nextPageToken?: string,
        // The total number of KeyRings that matched the query.
        totalSize?: number,
        // The list of KeyRings.
        keyRings?: KeyRing[],        
    }
    
    interface DataAccessOptions {
    }
    
    interface AuditConfig {
        // Specifies a service that will be enabled for audit logging.
        // For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
        // `allServices` is a special value that covers all services.
        service?: string,
        // The configuration for logging of each type of permission.
        // Next ID: 4
        auditLogConfigs?: AuditLogConfig[],        
        // 
        exemptedMembers?: string[],        
    }
    
    interface CryptoKeyVersion {
        // Output only. The time at which this CryptoKeyVersion was created.
        createTime?: string,
        // The current state of the CryptoKeyVersion.
        state?: string,
        // Output only. The resource name for this CryptoKeyVersion in the format
        // `projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*`.
        name?: string,
        // Output only. The time this CryptoKeyVersion's key material was
        // destroyed. Only present if state is
        // DESTROYED.
        destroyEventTime?: string,
        // Output only. The time this CryptoKeyVersion's key material is scheduled
        // for destruction. Only present if state is
        // DESTROY_SCHEDULED.
        destroyTime?: string,
    }
    
    interface CloudAuditOptions {
        // The log_name to populate in the Cloud Audit Record.
        logName?: string,
    }
    
    interface Binding {
        // The condition that is associated with this binding.
        // NOTE: an unsatisfied condition will not allow user access via current
        // binding. Different bindings, including their conditions, are examined
        // independently.
        // This field is GOOGLE_INTERNAL.
        condition?: Expr,
        // Specifies the identities requesting access for a Cloud Platform resource.
        // `members` can have the following values:
        // 
        // * `allUsers`: A special identifier that represents anyone who is
        //    on the internet; with or without a Google account.
        // 
        // * `allAuthenticatedUsers`: A special identifier that represents anyone
        //    who is authenticated with a Google account or a service account.
        // 
        // * `user:{emailid}`: An email address that represents a specific Google
        //    account. For example, `alice@gmail.com` or `joe@example.com`.
        // 
        // 
        // * `serviceAccount:{emailid}`: An email address that represents a service
        //    account. For example, `my-other-app@appspot.gserviceaccount.com`.
        // 
        // * `group:{emailid}`: An email address that represents a Google group.
        //    For example, `admins@example.com`.
        // 
        // 
        // * `domain:{domain}`: A Google Apps domain name that represents all the
        //    users of that domain. For example, `google.com` or `example.com`.
        // 
        // 
        members?: string[],        
        // Role that is assigned to `members`.
        // For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
        // Required
        role?: string,
    }
    
    interface Expr {
        // An optional string indicating the location of the expression for error
        // reporting, e.g. a file name and a position in the file.
        location?: string,
        // An optional title for the expression, i.e. a short string describing
        // its purpose. This can be used e.g. in UIs which allow to enter the
        // expression.
        title?: string,
        // An optional description of the expression. This is a longer text which
        // describes the expression, e.g. when hovered over it in a UI.
        description?: string,
        // Textual representation of an expression in
        // Common Expression Language syntax.
        // 
        // The application context of the containing message determines which
        // well-known feature set of CEL is supported.
        expression?: string,
    }
    
    interface EncryptRequest {
        // Required. The data to encrypt. Must be no larger than 64KiB.
        plaintext?: string,
        // Optional data that, if specified, must also be provided during decryption
        // through DecryptRequest.additional_authenticated_data.  Must be no
        // larger than 64KiB.
        additionalAuthenticatedData?: string,
    }
    
    interface ListCryptoKeyVersionsResponse {
        // The total number of CryptoKeyVersions that matched the
        // query.
        totalSize?: number,
        // The list of CryptoKeyVersions.
        cryptoKeyVersions?: CryptoKeyVersion[],        
        // A token to retrieve next page of results. Pass this value in
        // ListCryptoKeyVersionsRequest.page_token to retrieve the next page of
        // results.
        nextPageToken?: string,
    }
    
    interface CryptoKeyVersionsResource {
        // Update a CryptoKeyVersion's metadata.
        // 
        // state may be changed between
        // ENABLED and
        // DISABLED using this
        // method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to
        // move between other states.
        patch (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Required list of fields to be updated in this request.
            updateMask?: string,
            // Output only. The resource name for this CryptoKeyVersion in the format
            // `projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*`.
            name: string,
        }) : gapi.client.Request<CryptoKeyVersion>;        
        
        // Returns metadata for a given CryptoKeyVersion.
        get (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // The name of the CryptoKeyVersion to get.
            name: string,
        }) : gapi.client.Request<CryptoKeyVersion>;        
        
        // Lists CryptoKeyVersions.
        list (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Optional limit on the number of CryptoKeyVersions to
            // include in the response. Further CryptoKeyVersions can
            // subsequently be obtained by including the
            // ListCryptoKeyVersionsResponse.next_page_token in a subsequent request.
            // If unspecified, the server will pick an appropriate default.
            pageSize?: number,
            // Required. The resource name of the CryptoKey to list, in the format
            // `projects/*/locations/*/keyRings/*/cryptoKeys/*`.
            parent: string,
            // Optional pagination token, returned earlier via
            // ListCryptoKeyVersionsResponse.next_page_token.
            pageToken?: string,
        }) : gapi.client.Request<ListCryptoKeyVersionsResponse>;        
        
        // Schedule a CryptoKeyVersion for destruction.
        // 
        // Upon calling this method, CryptoKeyVersion.state will be set to
        // DESTROY_SCHEDULED
        // and destroy_time will be set to a time 24
        // hours in the future, at which point the state
        // will be changed to
        // DESTROYED, and the key
        // material will be irrevocably destroyed.
        // 
        // Before the destroy_time is reached,
        // RestoreCryptoKeyVersion may be called to reverse the process.
        destroy (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // The resource name of the CryptoKeyVersion to destroy.
            name: string,
        }) : gapi.client.Request<CryptoKeyVersion>;        
        
        // Create a new CryptoKeyVersion in a CryptoKey.
        // 
        // The server will assign the next sequential id. If unset,
        // state will be set to
        // ENABLED.
        create (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Required. The name of the CryptoKey associated with
            // the CryptoKeyVersions.
            parent: string,
        }) : gapi.client.Request<CryptoKeyVersion>;        
        
        // Restore a CryptoKeyVersion in the
        // DESTROY_SCHEDULED,
        // state.
        // 
        // Upon restoration of the CryptoKeyVersion, state
        // will be set to DISABLED,
        // and destroy_time will be cleared.
        restore (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // The resource name of the CryptoKeyVersion to restore.
            name: string,
        }) : gapi.client.Request<CryptoKeyVersion>;        
        
    }
    
    
    interface CryptoKeysResource {
        // Returns permissions that a caller has on the specified resource.
        // If the resource does not exist, this will return an empty set of
        // permissions, not a NOT_FOUND error.
        // 
        // Note: This operation is designed to be used for building permission-aware
        // UIs and command-line tools, not for authorization checking. This operation
        // may "fail open" without warning.
        testIamPermissions (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // REQUIRED: The resource for which the policy detail is being requested.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<TestIamPermissionsResponse>;        
        
        // Decrypts data that was protected by Encrypt.
        decrypt (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Required. The resource name of the CryptoKey to use for decryption.
            // The server will choose the appropriate version.
            name: string,
        }) : gapi.client.Request<DecryptResponse>;        
        
        // Lists CryptoKeys.
        list (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Optional pagination token, returned earlier via
            // ListCryptoKeysResponse.next_page_token.
            pageToken?: string,
            // Optional limit on the number of CryptoKeys to include in the
            // response.  Further CryptoKeys can subsequently be obtained by
            // including the ListCryptoKeysResponse.next_page_token in a subsequent
            // request.  If unspecified, the server will pick an appropriate default.
            pageSize?: number,
            // Required. The resource name of the KeyRing to list, in the format
            // `projects/*/locations/*/keyRings/*`.
            parent: string,
        }) : gapi.client.Request<ListCryptoKeysResponse>;        
        
        // Encrypts data, so that it can only be recovered by a call to Decrypt.
        encrypt (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Required. The resource name of the CryptoKey or CryptoKeyVersion
            // to use for encryption.
            // 
            // If a CryptoKey is specified, the server will use its
            // primary version.
            name: string,
        }) : gapi.client.Request<EncryptResponse>;        
        
        // Create a new CryptoKey within a KeyRing.
        // 
        // CryptoKey.purpose is required.
        create (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Required. The name of the KeyRing associated with the
            // CryptoKeys.
            parent: string,
            // Required. It must be unique within a KeyRing and match the regular
            // expression `[a-zA-Z0-9_-]{1,63}`
            cryptoKeyId?: string,
        }) : gapi.client.Request<CryptoKey>;        
        
        // Sets the access control policy on the specified resource. Replaces any
        // existing policy.
        setIamPolicy (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // REQUIRED: The resource for which the policy is being specified.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Update the version of a CryptoKey that will be used in Encrypt
        updatePrimaryVersion (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // The resource name of the CryptoKey to update.
            name: string,
        }) : gapi.client.Request<CryptoKey>;        
        
        // Gets the access control policy for a resource.
        // Returns an empty policy if the resource exists and does not have a policy
        // set.
        getIamPolicy (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // REQUIRED: The resource for which the policy is being requested.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Update a CryptoKey.
        patch (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Required list of fields to be updated in this request.
            updateMask?: string,
            // Output only. The resource name for this CryptoKey in the format
            // `projects/*/locations/*/keyRings/*/cryptoKeys/*`.
            name: string,
        }) : gapi.client.Request<CryptoKey>;        
        
        // Returns metadata for a given CryptoKey, as well as its
        // primary CryptoKeyVersion.
        get (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // The name of the CryptoKey to get.
            name: string,
        }) : gapi.client.Request<CryptoKey>;        
        
        cryptoKeyVersions: CryptoKeyVersionsResource,
    }
    
    
    interface KeyRingsResource {
        // Create a new KeyRing in a given Project and Location.
        create (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Required. The resource name of the location associated with the
            // KeyRings, in the format `projects/*/locations/*`.
            parent: string,
            // Required. It must be unique within a location and match the regular
            // expression `[a-zA-Z0-9_-]{1,63}`
            keyRingId?: string,
        }) : gapi.client.Request<KeyRing>;        
        
        // Sets the access control policy on the specified resource. Replaces any
        // existing policy.
        setIamPolicy (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // REQUIRED: The resource for which the policy is being specified.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Gets the access control policy for a resource.
        // Returns an empty policy if the resource exists and does not have a policy
        // set.
        getIamPolicy (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // REQUIRED: The resource for which the policy is being requested.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Returns metadata for a given KeyRing.
        get (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // The name of the KeyRing to get.
            name: string,
        }) : gapi.client.Request<KeyRing>;        
        
        // Returns permissions that a caller has on the specified resource.
        // If the resource does not exist, this will return an empty set of
        // permissions, not a NOT_FOUND error.
        // 
        // Note: This operation is designed to be used for building permission-aware
        // UIs and command-line tools, not for authorization checking. This operation
        // may "fail open" without warning.
        testIamPermissions (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // REQUIRED: The resource for which the policy detail is being requested.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<TestIamPermissionsResponse>;        
        
        // Lists KeyRings.
        list (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Required. The resource name of the location associated with the
            // KeyRings, in the format `projects/*/locations/*`.
            parent: string,
            // Optional pagination token, returned earlier via
            // ListKeyRingsResponse.next_page_token.
            pageToken?: string,
            // Optional limit on the number of KeyRings to include in the
            // response.  Further KeyRings can subsequently be obtained by
            // including the ListKeyRingsResponse.next_page_token in a subsequent
            // request.  If unspecified, the server will pick an appropriate default.
            pageSize?: number,
        }) : gapi.client.Request<ListKeyRingsResponse>;        
        
        cryptoKeys: CryptoKeysResource,
    }
    
    
    interface LocationsResource {
        // Get information about a location.
        get (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Resource name for the location.
            name: string,
        }) : gapi.client.Request<Location>;        
        
        // Lists information about the supported locations for this service.
        list (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // The standard list filter.
            filter?: string,
            // The standard list page token.
            pageToken?: string,
            // The resource that owns the locations collection, if applicable.
            name: string,
            // The standard list page size.
            pageSize?: number,
        }) : gapi.client.Request<ListLocationsResponse>;        
        
        keyRings: KeyRingsResource,
    }
    
    
    interface ProjectsResource {
        locations: LocationsResource,
    }
    
}

declare module gapi.client.cloudkms {
    var projects: gapi.client.cloudkms.ProjectsResource; 
    
}
