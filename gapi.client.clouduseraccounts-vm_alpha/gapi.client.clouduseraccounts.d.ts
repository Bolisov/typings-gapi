// Type definitions for Google Cloud User Accounts API vm_alpha
// Project: https://cloud.google.com/compute/docs/access/user-accounts/api/latest/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.clouduseraccounts {
    
    interface AuditConfig {
        // Specifies the identities that are exempted from "data access" audit logging for the `service` specified above. Follows the same format of Binding.members.
        exemptedMembers?: string[],        
        // Specifies a service that will be enabled for "data access" audit logging. For example, `resourcemanager`, `storage`, `compute`. `allServices` is a special value that covers all services.
        service?: string,
    }
    
    interface AuthorizedKeysView {
        // [Output Only] The list of authorized public keys in SSH format.
        keys?: string[],        
        // [Output Only] Whether the user has the ability to elevate on the instance that requested the authorized keys.
        sudoer?: boolean,
    }
    
    interface Binding {
        // Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:
        // 
        // * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account.
        // 
        // * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account.
        // 
        // * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@gmail.com` or `joe@example.com`.
        // 
        // * `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`.
        // 
        // * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`.
        // 
        // * `domain:{domain}`: A Google Apps domain name that represents all the users of that domain. For example, `google.com` or `example.com`.
        members?: string[],        
        // Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
        role?: string,
    }
    
    interface Condition {
        // Trusted attributes supplied by the IAM system.
        iam?: string,
        // An operator to apply the subject with.
        op?: string,
        // Trusted attributes discharged by the service.
        svc?: string,
        // Trusted attributes supplied by any service that owns resources and uses the IAM system for access control.
        sys?: string,
        // The object of the condition. Exactly one of these must be set.
        value?: string,
        // The objects of the condition. This is mutually exclusive with 'value'.
        values?: string[],        
    }
    
    interface Group {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional textual description of the resource; provided by the client when the resource is created.
        description?: string,
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always clouduseraccounts#group for groups.
        kind?: string,
        // [Output Only] A list of URLs to User resources who belong to the group. Users may only be members of groups in the same project.
        members?: string[],        
        // Name of the resource; provided by the client when the resource is created.
        name?: string,
        // [Output Only] Server defined URL for the resource.
        selfLink?: string,
    }
    
    interface GroupList {
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // [Output Only] A list of Group resources.
        items?: Group[],        
        // [Output Only] Type of resource. Always clouduseraccounts#groupList for lists of groups.
        kind?: string,
        // [Output Only] A token used to continue a truncated list request.
        nextPageToken?: string,
        // [Output Only] Server defined URL for this resource.
        selfLink?: string,
    }
    
    interface GroupsAddMemberRequest {
        // Fully-qualified URLs of the User resources to add.
        users?: string[],        
    }
    
    interface GroupsRemoveMemberRequest {
        // Fully-qualified URLs of the User resources to remove.
        users?: string[],        
    }
    
    interface LinuxAccountViews {
        // [Output Only] A list of all groups within a project.
        groupViews?: LinuxGroupView[],        
        // [Output Only] Type of the resource. Always clouduseraccounts#linuxAccountViews for Linux resources.
        kind?: string,
        // [Output Only] A list of all users within a project.
        userViews?: LinuxUserView[],        
    }
    
    interface LinuxGetAuthorizedKeysViewResponse {
        // [Output Only] A list of authorized public keys for a user.
        resource?: AuthorizedKeysView,
    }
    
    interface LinuxGetLinuxAccountViewsResponse {
        // [Output Only] A list of authorized user accounts and groups.
        resource?: LinuxAccountViews,
    }
    
    interface LinuxGroupView {
        // [Output Only] The Group ID.
        gid?: number,
        // [Output Only] Group name.
        groupName?: string,
        // [Output Only] List of user accounts that belong to the group.
        members?: string[],        
    }
    
    interface LinuxUserView {
        // [Output Only] The GECOS (user information) entry for this account.
        gecos?: string,
        // [Output Only] User's default group ID.
        gid?: number,
        // [Output Only] The path to the home directory for this account.
        homeDirectory?: string,
        // [Output Only] The path to the login shell for this account.
        shell?: string,
        // [Output Only] User ID.
        uid?: number,
        // [Output Only] The username of the account.
        username?: string,
    }
    
    interface LogConfig {
        // Counter options.
        counter?: LogConfigCounterOptions,
    }
    
    interface LogConfigCounterOptions {
        // The field value to attribute.
        field?: string,
        // The metric to update.
        metric?: string,
    }
    
    interface Operation {
        // [Output Only] Reserved for future use.
        clientOperationId?: string,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // [Output Only] A textual description of the operation, which is set when the operation is created.
        description?: string,
        // [Output Only] The time that this operation was completed. This value is in RFC3339 text format.
        endTime?: string,
        // [Output Only] If errors are generated during processing of the operation, this field will be populated.
        error?: {        
            // [Output Only] The array of errors encountered while processing this operation.
            errors?: {            
                // [Output Only] The error type identifier for this error.
                code?: string,
                // [Output Only] Indicates the field in the request that caused the error. This property is optional.
                location?: string,
                // [Output Only] An optional, human-readable error message.
                message?: string,
            }[],            
        },        
        // [Output Only] If the operation fails, this field contains the HTTP error message that was returned, such as NOT FOUND.
        httpErrorMessage?: string,
        // [Output Only] If the operation fails, this field contains the HTTP error status code that was returned. For example, a 404 means the resource was not found.
        httpErrorStatusCode?: number,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] The time that this operation was requested. This value is in RFC3339 text format.
        insertTime?: string,
        // [Output Only] Type of the resource. Always compute#operation for Operation resources.
        kind?: string,
        // [Output Only] Name of the resource.
        name?: string,
        // [Output Only] The type of operation, such as insert, update, or delete, and so on.
        operationType?: string,
        // [Output Only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess when the operation will be complete. This number should monotonically increase as the operation progresses.
        progress?: number,
        // [Output Only] The URL of the region where the operation resides. Only available when performing regional operations.
        region?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // [Output Only] The time that this operation was started by the server. This value is in RFC3339 text format.
        startTime?: string,
        // [Output Only] The status of the operation, which can be one of the following: PENDING, RUNNING, or DONE.
        status?: string,
        // [Output Only] An optional textual description of the current status of the operation.
        statusMessage?: string,
        // [Output Only] The unique target ID, which identifies a specific incarnation of the target resource.
        targetId?: string,
        // [Output Only] The URL of the resource that the operation modifies.
        targetLink?: string,
        // [Output Only] User who requested the operation, for example: user@example.com.
        user?: string,
        // [Output Only] If warning messages are generated during processing of the operation, this field will be populated.
        warnings?: {        
            // [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
            code?: string,
            // [Output Only] Metadata about this warning in key: value format. For example:
            // "data": [ { "key": "scope", "value": "zones/us-east1-d" }
            data?: {            
                // [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
                key?: string,
                // [Output Only] A warning data value corresponding to the key.
                value?: string,
            }[],            
            // [Output Only] A human-readable description of the warning code.
            message?: string,
        }[],        
        // [Output Only] The URL of the zone where the operation resides. Only available when performing per-zone operations.
        zone?: string,
    }
    
    interface OperationList {
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] A list of Operation resources.
        items?: Operation[],        
        // [Output Only] Type of resource. Always compute#operations for Operations resource.
        kind?: string,
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
        // [Output Only] Server-defined URL for this resource.
        selfLink?: string,
    }
    
    interface Policy {
        // Specifies audit logging configs for "data access". "data access": generally refers to data reads/writes and admin reads. "admin activity": generally refers to admin writes.
        // 
        // Note: `AuditConfig` doesn't apply to "admin activity", which always enables audit logging.
        auditConfigs?: AuditConfig[],        
        // Associates a list of `members` to a `role`. Multiple `bindings` must not be specified for the same `role`. `bindings` with no members will result in an error.
        bindings?: Binding[],        
        // `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.
        // 
        // If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten blindly.
        etag?: string,
        // 
        iamOwned?: boolean,
        // If more than one rule is specified, the rules are applied in the following manner: - All matching LOG rules are always applied. - If any DENY/DENY_WITH_LOG rule matches, permission is denied. Logging will be applied if one or more matching rule requires logging. - Otherwise, if any ALLOW/ALLOW_WITH_LOG rule matches, permission is granted. Logging will be applied if one or more matching rule requires logging. - Otherwise, if no rule applies, permission is denied.
        rules?: Rule[],        
        // Version of the `Policy`. The default version is 0.
        version?: number,
    }
    
    interface PublicKey {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional textual description of the resource; provided by the client when the resource is created.
        description?: string,
        // Optional expiration timestamp. If provided, the timestamp must be in RFC3339 text format. If not provided, the public key never expires.
        expirationTimestamp?: string,
        // [Output Only] The fingerprint of the key is defined by RFC4716 to be the MD5 digest of the public key.
        fingerprint?: string,
        // Public key text in SSH format, defined by RFC4253 section 6.6.
        key?: string,
    }
    
    interface Rule {
        // Required
        action?: string,
        // Additional restrictions that must be met
        conditions?: Condition[],        
        // Human-readable description of the rule.
        description?: string,
        // The rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is in this set of entries.
        ins?: string[],        
        // The config returned to callers of tech.iam.IAM.CheckPolicy for any entries that match the LOG action.
        logConfigs?: LogConfig[],        
        // The rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is not in this set of entries.
        notIns?: string[],        
        // A permission is a string of form '..' (e.g., 'storage.buckets.list'). A value of '*' matches all permissions, and a verb part of '*' (e.g., 'storage.buckets.*') matches all verbs.
        permissions?: string[],        
    }
    
    interface TestPermissionsRequest {
        // The set of permissions to check for the 'resource'. Permissions with wildcards (such as '*' or 'storage.*') are not allowed.
        permissions?: string[],        
    }
    
    interface TestPermissionsResponse {
        // A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
        permissions?: string[],        
    }
    
    interface User {
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional textual description of the resource; provided by the client when the resource is created.
        description?: string,
        // [Output Only] A list of URLs to Group resources who contain the user. Users are only members of groups in the same project.
        groups?: string[],        
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // [Output Only] Type of the resource. Always clouduseraccounts#user for users.
        kind?: string,
        // Name of the resource; provided by the client when the resource is created.
        name?: string,
        // Email address of account's owner. This account will be validated to make sure it exists. The email can belong to any domain, but it must be tied to a Google account.
        owner?: string,
        // [Output Only] Public keys that this user may use to login.
        publicKeys?: PublicKey[],        
        // [Output Only] Server defined URL for the resource.
        selfLink?: string,
    }
    
    interface UserList {
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // [Output Only] A list of User resources.
        items?: User[],        
        // [Output Only] Type of resource. Always clouduseraccounts#userList for lists of users.
        kind?: string,
        // [Output Only] A token used to continue a truncated list request.
        nextPageToken?: string,
        // [Output Only] Server defined URL for this resource.
        selfLink?: string,
    }
    
    interface GlobalAccountsOperationsResource {
        // Deletes the specified operation resource.
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
            // Name of the Operations resource to delete.
            operation: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves the specified operation resource.
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
            // Name of the Operations resource to return.
            operation: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of operation resources contained within the specified project.
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
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<OperationList>;        
        
    }
    
    
    interface GroupsResource {
        // Adds users to the specified group.
        addMember (request: {        
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
            // Name of the group for this request.
            groupName: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Deletes the specified Group resource.
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
            // Name of the Group resource to delete.
            groupName: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified Group resource.
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
            // Name of the Group resource to return.
            groupName: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Group>;        
        
        // Gets the access control policy for a resource. May be empty if no such policy or resource exists.
        getIamPolicy (request: {        
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
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Creates a Group resource in the specified project using the data included in the request.
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of groups contained within the specified project.
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
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<GroupList>;        
        
        // Removes users from the specified group.
        removeMember (request: {        
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
            // Name of the group for this request.
            groupName: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets the access control policy on the specified resource. Replaces any existing policy.
        setIamPolicy (request: {        
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
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
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
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
    }
    
    
    interface LinuxResource {
        // Returns a list of authorized public keys for a specific user account.
        getAuthorizedKeysView (request: {        
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
            // The fully-qualified URL of the virtual machine requesting the view.
            instance: string,
            // Whether the view was requested as part of a user-initiated login.
            login?: boolean,
            // Project ID for this request.
            project: string,
            // The user account for which you want to get a list of authorized public keys.
            user: string,
            // Name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<LinuxGetAuthorizedKeysViewResponse>;        
        
        // Retrieves a list of user accounts for an instance within a specific project.
        getLinuxAccountViews (request: {        
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
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The fully-qualified URL of the virtual machine requesting the views.
            instance: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
            // Name of the zone for this request.
            zone: string,
        }) : gapi.client.Request<LinuxGetLinuxAccountViewsResponse>;        
        
    }
    
    
    interface UsersResource {
        // Adds a public key to the specified User resource with the data included in the request.
        addPublicKey (request: {        
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
            // Project ID for this request.
            project: string,
            // Name of the user for this request.
            user: string,
        }) : gapi.client.Request<Operation>;        
        
        // Deletes the specified User resource.
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
            // Project ID for this request.
            project: string,
            // Name of the user resource to delete.
            user: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified User resource.
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
            // Project ID for this request.
            project: string,
            // Name of the user resource to return.
            user: string,
        }) : gapi.client.Request<User>;        
        
        // Gets the access control policy for a resource. May be empty if no such policy or resource exists.
        getIamPolicy (request: {        
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
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Creates a User resource in the specified project using the data included in the request.
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
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves a list of users contained within the specified project.
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
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Project ID for this request.
            project: string,
        }) : gapi.client.Request<UserList>;        
        
        // Removes the specified public key from the user.
        removePublicKey (request: {        
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
            // The fingerprint of the public key to delete. Public keys are identified by their fingerprint, which is defined by RFC4716 to be the MD5 digest of the public key.
            fingerprint: string,
            // Project ID for this request.
            project: string,
            // Name of the user for this request.
            user: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets the access control policy on the specified resource. Replaces any existing policy.
        setIamPolicy (request: {        
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
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Returns permissions that a caller has on the specified resource.
        testIamPermissions (request: {        
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
            // Project ID for this request.
            project: string,
            // Name of the resource for this request.
            resource: string,
        }) : gapi.client.Request<TestPermissionsResponse>;        
        
    }
    
}

declare module gapi.client.clouduseraccounts {
    var globalAccountsOperations: gapi.client.clouduseraccounts.GlobalAccountsOperationsResource; 
    
    var groups: gapi.client.clouduseraccounts.GroupsResource; 
    
    var linux: gapi.client.clouduseraccounts.LinuxResource; 
    
    var users: gapi.client.clouduseraccounts.UsersResource; 
    
}
