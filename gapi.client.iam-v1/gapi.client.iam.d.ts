// Type definitions for Google Google Identity and Access Management (IAM) API v1
// Project: https://cloud.google.com/iam/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.iam {
    
    interface QueryGrantableRolesResponse {
        // To retrieve the next page of results, set
        // `QueryGrantableRolesRequest.page_token` to this value.
        nextPageToken?: string,
        // The list of matching roles.
        roles?: Role[],        
    }
    
    interface SignBlobRequest {
        // The bytes to sign.
        bytesToSign?: string,
    }
    
    interface Role {
        // Optional.  A human-readable title for the role.  Typically this
        // is limited to 100 UTF-8 bytes.
        title?: string,
        // The name of the role.
        // 
        // When Role is used in CreateRole, the role name must not be set.
        // 
        // When Role is used in output and other input such as UpdateRole, the role
        // name is the complete path, e.g., roles/logging.viewer for curated roles
        // and organizations/{ORGANIZATION_ID}/roles/logging.viewer for custom roles.
        name?: string,
        // Optional.  A human-readable description for the role.
        description?: string,
    }
    
    interface SetIamPolicyRequest {
        // REQUIRED: The complete policy to be applied to the `resource`. The size of
        // the policy is limited to a few 10s of KB. An empty policy is a
        // valid policy but certain Cloud Platform services (such as Projects)
        // might reject them.
        policy?: Policy,
    }
    
    interface Binding {
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
    
    interface QueryGrantableRolesRequest {
        // Required. The full resource name to query from the list of grantable roles.
        // 
        // The name follows the Google Cloud Platform resource format.
        // For example, a Cloud Platform project with id `my-project` will be named
        // `//cloudresourcemanager.googleapis.com/projects/my-project`.
        fullResourceName?: string,
        // Optional pagination token returned in an earlier
        // QueryGrantableRolesResponse.
        pageToken?: string,
        // Optional limit on the number of roles to include in the response.
        pageSize?: number,
    }
    
    interface Empty {
    }
    
    interface ServiceAccount {
        // @OutputOnly. The OAuth2 client id for the service account.
        // This is used in conjunction with the OAuth2 clientconfig API to make
        // three legged OAuth2 (3LO) flows to access the data of Google users.
        oauth2ClientId?: string,
        // @OutputOnly The unique and stable id of the service account.
        uniqueId?: string,
        // Optional. A user-specified description of the service account.  Must be
        // fewer than 100 UTF-8 bytes.
        displayName?: string,
        // Used to perform a consistent read-modify-write.
        etag?: string,
        // @OutputOnly The email address of the service account.
        email?: string,
        // The resource name of the service account in the following format:
        // `projects/{PROJECT_ID}/serviceAccounts/{SERVICE_ACCOUNT_EMAIL}`.
        // 
        // Requests using `-` as a wildcard for the project will infer the project
        // from the `account` and the `account` value can be the `email` address or
        // the `unique_id` of the service account.
        // 
        // In responses the resource name will always be in the format
        // `projects/{PROJECT_ID}/serviceAccounts/{SERVICE_ACCOUNT_EMAIL}`.
        name?: string,
        // @OutputOnly The id of the project that owns the service account.
        projectId?: string,
    }
    
    interface ListServiceAccountKeysResponse {
        // The public keys for the service account.
        keys?: ServiceAccountKey[],        
    }
    
    interface TestIamPermissionsResponse {
        // A subset of `TestPermissionsRequest.permissions` that the caller is
        // allowed.
        permissions?: string[],        
    }
    
    interface ServiceAccountKey {
        // The resource name of the service account key in the following format
        // `projects/{PROJECT_ID}/serviceAccounts/{SERVICE_ACCOUNT_EMAIL}/keys/{key}`.
        name?: string,
        // The key can be used before this timestamp.
        validBeforeTime?: string,
        // Specifies the algorithm (and possibly key size) for the key.
        keyAlgorithm?: string,
        // The output format for the private key.
        // Only provided in `CreateServiceAccountKey` responses, not
        // in `GetServiceAccountKey` or `ListServiceAccountKey` responses.
        // 
        // Google never exposes system-managed private keys, and never retains
        // user-managed private keys.
        privateKeyType?: string,
        // The key can be used after this timestamp.
        validAfterTime?: string,
        // The private key data. Only provided in `CreateServiceAccountKey`
        // responses. Make sure to keep the private key data secure because it
        // allows for the assertion of the service account identity.
        // When decoded, the private key data can be used to authenticate with
        // Google API client libraries and with
        // <a href="/sdk/gcloud/reference/auth/activate-service-account">gcloud
        // auth activate-service-account</a>.
        privateKeyData?: string,
        // The public key data. Only provided in `GetServiceAccountKey` responses.
        publicKeyData?: string,
    }
    
    interface CreateServiceAccountKeyRequest {
        // The output format of the private key. `GOOGLE_CREDENTIALS_FILE` is the
        // default output format.
        privateKeyType?: string,
        // 
        includePublicKeyData?: boolean,
        // Which type of key and algorithm to use for the key.
        // The default is currently a 2K RSA key.  However this may change in the
        // future.
        keyAlgorithm?: string,
    }
    
    interface SignJwtResponse {
        // The signed JWT.
        signedJwt?: string,
        // The id of the key used to sign the JWT.
        keyId?: string,
    }
    
    interface SignBlobResponse {
        // The signed blob.
        signature?: string,
        // The id of the key used to sign the blob.
        keyId?: string,
    }
    
    interface TestIamPermissionsRequest {
        // The set of permissions to check for the `resource`. Permissions with
        // wildcards (such as '*' or 'storage.*') are not allowed. For more
        // information see
        // [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
        permissions?: string[],        
    }
    
    interface Policy {
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
        // Version of the `Policy`. The default version is 0.
        version?: number,
        // Associates a list of `members` to a `role`.
        // `bindings` with no members will result in an error.
        bindings?: Binding[],        
    }
    
    interface SignJwtRequest {
        // The JWT payload to sign, a JSON JWT Claim set.
        payload?: string,
    }
    
    interface AuditData {
        // Policy delta between the original policy and the newly set policy.
        policyDelta?: PolicyDelta,
    }
    
    interface BindingDelta {
        // A single identity requesting access for a Cloud Platform resource.
        // Follows the same format of Binding.members.
        // Required
        member?: string,
        // Role that is assigned to `members`.
        // For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
        // Required
        role?: string,
        // The action that was performed on a Binding.
        // Required
        action?: string,
    }
    
    interface PolicyDelta {
        // The delta for Bindings between two policies.
        bindingDeltas?: BindingDelta[],        
    }
    
    interface CreateServiceAccountRequest {
        // Required. The account id that is used to generate the service account
        // email address and a stable unique id. It is unique within a project,
        // must be 6-30 characters long, and match the regular expression
        // `[a-z]([-a-z0-9]*[a-z0-9])` to comply with RFC1035.
        accountId?: string,
        // The ServiceAccount resource to create.
        // Currently, only the following values are user assignable:
        // `display_name` .
        serviceAccount?: ServiceAccount,
    }
    
    interface ListServiceAccountsResponse {
        // To retrieve the next page of results, set
        // ListServiceAccountsRequest.page_token
        // to this value.
        nextPageToken?: string,
        // The list of matching service accounts.
        accounts?: ServiceAccount[],        
    }
    
    interface KeysResource {
        // Gets the ServiceAccountKey
        // by key id.
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
            // The output format of the public key requested.
            // X509_PEM is the default output format.
            publicKeyType?: string,
            // The resource name of the service account key in the following format:
            // `projects/{PROJECT_ID}/serviceAccounts/{SERVICE_ACCOUNT_EMAIL}/keys/{key}`.
            // 
            // Using `-` as a wildcard for the project will infer the project from
            // the account. The `account` value can be the `email` address or the
            // `unique_id` of the service account.
            name: string,
        }) : gapi.client.Request<ServiceAccountKey>;        
        
        // Lists ServiceAccountKeys.
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
            // The resource name of the service account in the following format:
            // `projects/{PROJECT_ID}/serviceAccounts/{SERVICE_ACCOUNT_EMAIL}`.
            // 
            // Using `-` as a wildcard for the project, will infer the project from
            // the account. The `account` value can be the `email` address or the
            // `unique_id` of the service account.
            name: string,
            // Filters the types of keys the user wants to include in the list
            // response. Duplicate key types are not allowed. If no key type
            // is provided, all keys are returned.
            keyTypes?: string,
        }) : gapi.client.Request<ListServiceAccountKeysResponse>;        
        
        // Creates a ServiceAccountKey
        // and returns it.
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
            // The resource name of the service account in the following format:
            // `projects/{PROJECT_ID}/serviceAccounts/{SERVICE_ACCOUNT_EMAIL}`.
            // Using `-` as a wildcard for the project will infer the project from
            // the account. The `account` value can be the `email` address or the
            // `unique_id` of the service account.
            name: string,
        }) : gapi.client.Request<ServiceAccountKey>;        
        
        // Deletes a ServiceAccountKey.
        delete (request: {        
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
            // The resource name of the service account key in the following format:
            // `projects/{PROJECT_ID}/serviceAccounts/{SERVICE_ACCOUNT_EMAIL}/keys/{key}`.
            // Using `-` as a wildcard for the project will infer the project from
            // the account. The `account` value can be the `email` address or the
            // `unique_id` of the service account.
            name: string,
        }) : gapi.client.Request<Empty>;        
        
    }
    
    
    interface ServiceAccountsResource {
        // Returns the IAM access control policy for a
        // ServiceAccount.
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
        
        // Gets a ServiceAccount.
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
            // The resource name of the service account in the following format:
            // `projects/{PROJECT_ID}/serviceAccounts/{SERVICE_ACCOUNT_EMAIL}`.
            // Using `-` as a wildcard for the project will infer the project from
            // the account. The `account` value can be the `email` address or the
            // `unique_id` of the service account.
            name: string,
        }) : gapi.client.Request<ServiceAccount>;        
        
        // Updates a ServiceAccount.
        // 
        // Currently, only the following fields are updatable:
        // `display_name` .
        // The `etag` is mandatory.
        update (request: {        
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
            // The resource name of the service account in the following format:
            // `projects/{PROJECT_ID}/serviceAccounts/{SERVICE_ACCOUNT_EMAIL}`.
            // 
            // Requests using `-` as a wildcard for the project will infer the project
            // from the `account` and the `account` value can be the `email` address or
            // the `unique_id` of the service account.
            // 
            // In responses the resource name will always be in the format
            // `projects/{PROJECT_ID}/serviceAccounts/{SERVICE_ACCOUNT_EMAIL}`.
            name: string,
        }) : gapi.client.Request<ServiceAccount>;        
        
        // Tests the specified permissions against the IAM access control policy
        // for a ServiceAccount.
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
        
        // Deletes a ServiceAccount.
        delete (request: {        
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
            // The resource name of the service account in the following format:
            // `projects/{PROJECT_ID}/serviceAccounts/{SERVICE_ACCOUNT_EMAIL}`.
            // Using `-` as a wildcard for the project will infer the project from
            // the account. The `account` value can be the `email` address or the
            // `unique_id` of the service account.
            name: string,
        }) : gapi.client.Request<Empty>;        
        
        // Signs a blob using a service account's system-managed private key.
        signBlob (request: {        
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
            // The resource name of the service account in the following format:
            // `projects/{PROJECT_ID}/serviceAccounts/{SERVICE_ACCOUNT_EMAIL}`.
            // Using `-` as a wildcard for the project will infer the project from
            // the account. The `account` value can be the `email` address or the
            // `unique_id` of the service account.
            name: string,
        }) : gapi.client.Request<SignBlobResponse>;        
        
        // Lists ServiceAccounts for a project.
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
            // Optional pagination token returned in an earlier
            // ListServiceAccountsResponse.next_page_token.
            pageToken?: string,
            // Required. The resource name of the project associated with the service
            // accounts, such as `projects/my-project-123`.
            name: string,
            // Optional limit on the number of service accounts to include in the
            // response. Further accounts can subsequently be obtained by including the
            // ListServiceAccountsResponse.next_page_token
            // in a subsequent request.
            pageSize?: number,
        }) : gapi.client.Request<ListServiceAccountsResponse>;        
        
        // Sets the IAM access control policy for a
        // ServiceAccount.
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
        
        // Signs a JWT using a service account's system-managed private key.
        // 
        // If no expiry time (`exp`) is provided in the `SignJwtRequest`, IAM sets an
        // an expiry time of one hour by default. If you request an expiry time of
        // more than one hour, the request will fail.
        signJwt (request: {        
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
            // The resource name of the service account in the following format:
            // `projects/{PROJECT_ID}/serviceAccounts/{SERVICE_ACCOUNT_EMAIL}`.
            // Using `-` as a wildcard for the project will infer the project from
            // the account. The `account` value can be the `email` address or the
            // `unique_id` of the service account.
            name: string,
        }) : gapi.client.Request<SignJwtResponse>;        
        
        // Creates a ServiceAccount
        // and returns it.
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
            // Required. The resource name of the project associated with the service
            // accounts, such as `projects/my-project-123`.
            name: string,
        }) : gapi.client.Request<ServiceAccount>;        
        
        keys: KeysResource,
    }
    
    
    interface ProjectsResource {
        serviceAccounts: ServiceAccountsResource,
    }
    
    
    interface RolesResource {
        // Queries roles that can be granted on a particular resource.
        // A role is grantable if it can be used as the role in a binding for a policy
        // for that resource.
        queryGrantableRoles (request: {        
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
        }) : gapi.client.Request<QueryGrantableRolesResponse>;        
        
    }
    
}

declare module gapi.client.iam {
    var projects: gapi.client.iam.ProjectsResource; 
    
    var roles: gapi.client.iam.RolesResource; 
    
}
