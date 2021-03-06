// Type definitions for Google Cloud Source Repositories API v1
// Project: https://cloud.google.com/source-repositories/docs/apis
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.sourcerepo {
    
    interface TestIamPermissionsResponse {
        // A subset of `TestPermissionsRequest.permissions` that the caller is
        // allowed.
        permissions?: string[],        
    }
    
    interface ListReposResponse {
        // The listed repos.
        repos?: Repo[],        
        // If non-empty, additional repositories exist within the project. These
        // can be retrieved by including this value in the next ListReposRequest's
        // page_token field.
        nextPageToken?: string,
    }
    
    interface Condition {
        // The objects of the condition. This is mutually exclusive with 'value'.
        values?: string[],        
        // Trusted attributes supplied by the IAM system.
        iam?: string,
        // An operator to apply the subject with.
        op?: string,
        // Trusted attributes discharged by the service.
        svc?: string,
        // Trusted attributes supplied by any service that owns resources and uses
        // the IAM system for access control.
        sys?: string,
        // DEPRECATED. Use 'values' instead.
        value?: string,
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
    
    interface Rule {
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
        // If one or more 'not_in' clauses are specified, the rule matches
        // if the PRINCIPAL/AUTHORITY_SELECTOR is in none of the entries.
        // The format for in and not_in entries is the same as for members in a
        // Binding (see google/iam/v1/policy.proto).
        notIn?: string[],        
    }
    
    interface LogConfig {
        // Counter options.
        counter?: CounterOptions,
        // Data access options.
        dataAccess?: DataAccessOptions,
        // Cloud audit options.
        cloudAudit?: CloudAuditOptions,
    }
    
    interface TestIamPermissionsRequest {
        // The set of permissions to check for the `resource`. Permissions with
        // wildcards (such as '*' or 'storage.*') are not allowed. For more
        // information see
        // [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
        permissions?: string[],        
    }
    
    interface Policy {
        // Version of the `Policy`. The default version is 0.
        version?: number,
        // Specifies cloud audit logging configuration for this policy.
        auditConfigs?: AuditConfig[],        
        // Associates a list of `members` to a `role`.
        // Multiple `bindings` must not be specified for the same `role`.
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
    }
    
    interface DataAccessOptions {
    }
    
    interface AuditConfig {
        // 
        exemptedMembers?: string[],        
        // Specifies a service that will be enabled for audit logging.
        // For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
        // `allServices` is a special value that covers all services.
        service?: string,
        // The configuration for logging of each type of permission.
        // Next ID: 4
        auditLogConfigs?: AuditLogConfig[],        
    }
    
    interface SetIamPolicyRequest {
        // REQUIRED: The complete policy to be applied to the `resource`. The size of
        // the policy is limited to a few 10s of KB. An empty policy is a
        // valid policy but certain Cloud Platform services (such as Projects)
        // might reject them.
        policy?: Policy,
        // OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
        // the fields in the mask will be modified. If no mask is provided, the
        // following default mask is used:
        // paths: "bindings, etag"
        // This field is only used by Cloud IAM.
        updateMask?: string,
    }
    
    interface CloudAuditOptions {
        // The log_name to populate in the Cloud Audit Record.
        logName?: string,
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
    
    interface MirrorConfig {
        // ID of the webhook listening to updates to trigger mirroring.
        // Removing this webook from the other hosting service will stop
        // Google Cloud Source Repositories from receiving notifications,
        // and thereby disabling mirroring.
        webhookId?: string,
        // ID of the SSH deploy key at the other hosting service.
        // Removing this key from the other service would deauthorize
        // Google Cloud Source Repositories from mirroring.
        deployKeyId?: string,
        // URL of the main repository at the other hosting service.
        url?: string,
    }
    
    interface Empty {
    }
    
    interface Repo {
        // Resource name of the repository, of the form
        // `projects/<project>/repos/<repo>`.  The repo name may contain slashes.
        // eg, `projects/myproject/repos/name/with/slash`
        name?: string,
        // How this repository mirrors a repository managed by another service.
        mirrorConfig?: MirrorConfig,
        // URL to clone the repository from Google Cloud Source Repositories.
        url?: string,
        // The disk usage of the repo, in bytes.
        // Only returned by GetRepo.
        size?: string,
    }
    
    interface ReposResource {
        // Returns information about a repo.
        get (request: {        
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
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
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // The name of the requested repository. Values are of the form
            // `projects/<project>/repos/<repo>`.
            name: string,
        }) : gapi.client.Request<Repo>;        
        
        // Returns permissions that a caller has on the specified resource.
        // If the resource does not exist, this will return an empty set of
        // permissions, not a NOT_FOUND error.
        testIamPermissions (request: {        
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
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
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // REQUIRED: The resource for which the policy detail is being requested.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<TestIamPermissionsResponse>;        
        
        // Deletes a repo.
        delete (request: {        
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
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
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // The name of the repo to delete. Values are of the form
            // `projects/<project>/repos/<repo>`.
            name: string,
        }) : gapi.client.Request<Empty>;        
        
        // Returns all repos belonging to a project. The sizes of the repos are
        // not set by ListRepos.  To get the size of a repo, use GetRepo.
        list (request: {        
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
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
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Maximum number of repositories to return; between 1 and 500.
            // If not set or zero, defaults to 100 at the server.
            pageSize?: number,
            // Resume listing repositories where a prior ListReposResponse
            // left off. This is an opaque token that must be obtained from
            // a recent, prior ListReposResponse's next_page_token field.
            pageToken?: string,
            // The project ID whose repos should be listed. Values are of the form
            // `projects/<project>`.
            name: string,
        }) : gapi.client.Request<ListReposResponse>;        
        
        // Creates a repo in the given project with the given name.
        // 
        // If the named repository already exists, `CreateRepo` returns
        // `ALREADY_EXISTS`.
        create (request: {        
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
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
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // The project in which to create the repo. Values are of the form
            // `projects/<project>`.
            parent: string,
        }) : gapi.client.Request<Repo>;        
        
        // Sets the access control policy on the specified resource. Replaces any
        // existing policy.
        setIamPolicy (request: {        
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
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
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // REQUIRED: The resource for which the policy is being specified.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Gets the access control policy for a resource.
        // Returns an empty policy if the resource exists and does not have a policy
        // set.
        getIamPolicy (request: {        
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
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
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // REQUIRED: The resource for which the policy is being requested.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
    }
    
    
    interface ProjectsResource {
        repos: ReposResource,
    }
    
}

declare module gapi.client.sourcerepo {
    var projects: gapi.client.sourcerepo.ProjectsResource; 
    
}
