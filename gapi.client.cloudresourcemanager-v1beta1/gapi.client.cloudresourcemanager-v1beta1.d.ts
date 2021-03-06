// Type definitions for Google Google Cloud Resource Manager API v1beta1
// Project: https://cloud.google.com/resource-manager
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.cloudresourcemanager {
    
    interface GetAncestryRequest {
    }
    
    interface Project {
        // The number uniquely identifying the project.
        // 
        // Example: <code>415104041262</code>
        // Read-only.
        projectNumber?: string,
        // An optional reference to a parent Resource.
        // 
        // The only supported parent type is "organization". Once set, the parent
        // cannot be modified. The `parent` can be set on creation or using the
        // `UpdateProject` method; the end user must have the
        // `resourcemanager.projects.create` permission on the parent.
        // 
        // Read-write.
        parent?: ResourceId,
        // Creation time.
        // 
        // Read-only.
        createTime?: string,
        // The labels associated with this Project.
        // 
        // Label keys must be between 1 and 63 characters long and must conform
        // to the following regular expression: \[a-z\](\[-a-z0-9\]*\[a-z0-9\])?.
        // 
        // Label values must be between 0 and 63 characters long and must conform
        // to the regular expression (\[a-z\](\[-a-z0-9\]*\[a-z0-9\])?)?.
        // 
        // No more than 256 labels can be associated with a given resource.
        // 
        // Clients should store labels in a representation such as JSON that does not
        // depend on specific characters being disallowed.
        // 
        // Example: <code>"environment" : "dev"</code>
        // Read-write.
        labels?: any,
        // The user-assigned display name of the Project.
        // It must be 4 to 30 characters.
        // Allowed characters are: lowercase and uppercase letters, numbers,
        // hyphen, single-quote, double-quote, space, and exclamation point.
        // 
        // Example: <code>My Project</code>
        // Read-write.
        name?: string,
        // The unique, user-assigned ID of the Project.
        // It must be 6 to 30 lowercase letters, digits, or hyphens.
        // It must start with a letter.
        // Trailing hyphens are prohibited.
        // 
        // Example: <code>tokyo-rain-123</code>
        // Read-only after creation.
        projectId?: string,
        // The Project lifecycle state.
        // 
        // Read-only.
        lifecycleState?: string,
    }
    
    interface TestIamPermissionsRequest {
        // The set of permissions to check for the `resource`. Permissions with
        // wildcards (such as '*' or 'storage.*') are not allowed. For more
        // information see
        // [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
        permissions?: string[],        
    }
    
    interface FolderOperationError {
        // The type of operation error experienced.
        errorMessageId?: string,
    }
    
    interface FolderOperation {
        // The type of this operation.
        operationType?: string,
        // The resource name of the folder's parent.
        // Only applicable when the operation_type is MOVE.
        sourceParent?: string,
        // The display name of the folder.
        displayName?: string,
        // The resource name of the folder or organization we are either creating
        // the folder under or moving the folder to.
        destinationParent?: string,
    }
    
    interface Policy {
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
    
    interface ResourceId {
        // Required field representing the resource type this id is for.
        // At present, the valid types are "project" and "organization".
        type?: string,
        // Required field for the type-specific id. This should correspond to the id
        // used in the type-specific API's.
        id?: string,
    }
    
    interface AuditConfig {
        // Specifies a service that will be enabled for audit logging.
        // For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
        // `allServices` is a special value that covers all services.
        service?: string,
        // The configuration for logging of each type of permission.
        // Next ID: 4
        auditLogConfigs?: AuditLogConfig[],        
    }
    
    interface Ancestor {
        // Resource id of the ancestor.
        resourceId?: ResourceId,
    }
    
    interface ListOrganizationsResponse {
        // The list of Organizations that matched the list query, possibly paginated.
        organizations?: Organization[],        
        // A pagination token to be used to retrieve the next page of results. If the
        // result is too large to fit within the page size specified in the request,
        // this field will be set with a token that can be used to fetch the next page
        // of results. If this field is empty, it indicates that this response
        // contains the last page of results.
        nextPageToken?: string,
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
    
    interface Empty {
    }
    
    interface Organization {
        // The organization's current lifecycle state. Assigned by the server.
        // @OutputOnly
        lifecycleState?: string,
        // A friendly string to be used to refer to the Organization in the UI.
        // Assigned by the server, set to the primary domain of the G Suite
        // customer that owns the organization.
        // @OutputOnly
        displayName?: string,
        // Timestamp when the Organization was created. Assigned by the server.
        // @OutputOnly
        creationTime?: string,
        // The owner of this Organization. The owner should be specified on
        // creation. Once set, it cannot be changed.
        // This field is required.
        owner?: OrganizationOwner,
        // Output Only. The resource name of the organization. This is the
        // organization's relative path in the API. Its format is
        // "organizations/[organization_id]". For example, "organizations/1234".
        name?: string,
        // An immutable id for the Organization that is assigned on creation. This
        // should be omitted when creating a new Organization.
        // This field is read-only.
        // This field is deprecated and will be removed in v1. Use name instead.
        organizationId?: string,
    }
    
    interface UndeleteProjectRequest {
    }
    
    interface ProjectCreationStatus {
        // True if the project can be retrieved using GetProject. No other operations
        // on the project are guaranteed to work until the project creation is
        // complete.
        gettable?: boolean,
        // Creation time of the project creation workflow.
        createTime?: string,
        // True if the project creation process is complete.
        ready?: boolean,
    }
    
    interface GetIamPolicyRequest {
    }
    
    interface TestIamPermissionsResponse {
        // A subset of `TestPermissionsRequest.permissions` that the caller is
        // allowed.
        permissions?: string[],        
    }
    
    interface GetAncestryResponse {
        // Ancestors are ordered from bottom to top of the resource hierarchy. The
        // first ancestor is the project itself, followed by the project's parent,
        // etc.
        ancestor?: Ancestor[],        
    }
    
    interface OrganizationOwner {
        // The Google for Work customer id used in the Directory API.
        directoryCustomerId?: string,
    }
    
    interface AuditLogConfig {
        // The log type that this config enables.
        logType?: string,
        // Specifies the identities that do not cause logging for this type of
        // permission.
        // Follows the same format of Binding.members.
        exemptedMembers?: string[],        
    }
    
    interface ListProjectsResponse {
        // The list of Projects that matched the list filter. This list can
        // be paginated.
        projects?: Project[],        
        // Pagination token.
        // 
        // If the result set is too large to fit in a single response, this token
        // is returned. It encodes the position of the current result cursor.
        // Feeding this value into a new list request with the `page_token` parameter
        // gives the next page of the results.
        // 
        // When `next_page_token` is not filled in, there is no next page and
        // the list returned is the last page in the result set.
        // 
        // Pagination tokens have a limited lifetime.
        nextPageToken?: string,
    }
    
    interface OrganizationsResource {
        // Lists Organization resources that are visible to the user and satisfy
        // the specified filter. This method returns Organizations in an unspecified
        // order. New Organizations do not necessarily appear at the end of the list.
        list (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // A pagination token returned from a previous call to `ListOrganizations`
            // that indicates from where listing should continue.
            // This field is optional.
            pageToken?: string,
            // The maximum number of Organizations to return in the response.
            // This field is optional.
            pageSize?: number,
            // An optional query string used to filter the Organizations to return in
            // the response. Filter rules are case-insensitive.
            // 
            // 
            // Organizations may be filtered by `owner.directoryCustomerId` or by
            // `domain`, where the domain is a Google for Work domain, for example:
            // 
            // |Filter|Description|
            // |------|-----------|
            // |owner.directorycustomerid:123456789|Organizations with `owner.directory_customer_id` equal to `123456789`.|
            // |domain:google.com|Organizations corresponding to the domain `google.com`.|
            // 
            // This field is optional.
            filter?: string,
        }) : gapi.client.Request<ListOrganizationsResponse>;        
        
        // Sets the access control policy on an Organization resource. Replaces any
        // existing policy. The `resource` field should be the organization's resource
        // name, e.g. "organizations/123".
        setIamPolicy (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // REQUIRED: The resource for which the policy is being specified.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Gets the access control policy for an Organization resource. May be empty
        // if no such policy or resource exists. The `resource` field should be the
        // organization's resource name, e.g. "organizations/123".
        getIamPolicy (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // REQUIRED: The resource for which the policy is being requested.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Fetches an Organization resource identified by the specified resource name.
        get (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // The resource name of the Organization to fetch, e.g. "organizations/1234".
            name: string,
            // The id of the Organization resource to fetch.
            // This field is deprecated and will be removed in v1. Use name instead.
            organizationId?: string,
        }) : gapi.client.Request<Organization>;        
        
        // Updates an Organization resource identified by the specified resource name.
        update (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // Output Only. The resource name of the organization. This is the
            // organization's relative path in the API. Its format is
            // "organizations/[organization_id]". For example, "organizations/1234".
            name: string,
        }) : gapi.client.Request<Organization>;        
        
        // Returns permissions that a caller has on the specified Organization.
        // The `resource` field should be the organization's resource name,
        // e.g. "organizations/123".
        testIamPermissions (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // REQUIRED: The resource for which the policy detail is being requested.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<TestIamPermissionsResponse>;        
        
    }
    
    
    interface ProjectsResource {
        // Returns the IAM access control policy for the specified Project.
        // Permission is denied if the policy or the resource does not exist.
        getIamPolicy (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // REQUIRED: The resource for which the policy is being requested.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Restores the Project identified by the specified
        // `project_id` (for example, `my-project-123`).
        // You can only use this method for a Project that has a lifecycle state of
        // DELETE_REQUESTED.
        // After deletion starts, the Project cannot be restored.
        // 
        // The caller must have modify permissions for this Project.
        undelete (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // The project ID (for example, `foo-bar-123`).
            // 
            // Required.
            projectId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Retrieves the Project identified by the specified
        // `project_id` (for example, `my-project-123`).
        // 
        // The caller must have read permissions for this Project.
        get (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // The Project ID (for example, `my-project-123`).
            // 
            // Required.
            projectId: string,
        }) : gapi.client.Request<Project>;        
        
        // Gets a list of ancestors in the resource hierarchy for the Project
        // identified by the specified `project_id` (for example, `my-project-123`).
        // 
        // The caller must have read permissions for this Project.
        getAncestry (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // The Project ID (for example, `my-project-123`).
            // 
            // Required.
            projectId: string,
        }) : gapi.client.Request<GetAncestryResponse>;        
        
        // Updates the attributes of the Project identified by the specified
        // `project_id` (for example, `my-project-123`).
        // 
        // The caller must have modify permissions for this Project.
        update (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // The project ID (for example, `my-project-123`).
            // 
            // Required.
            projectId: string,
        }) : gapi.client.Request<Project>;        
        
        // Returns permissions that a caller has on the specified Project.
        testIamPermissions (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // REQUIRED: The resource for which the policy detail is being requested.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<TestIamPermissionsResponse>;        
        
        // Marks the Project identified by the specified
        // `project_id` (for example, `my-project-123`) for deletion.
        // This method will only affect the Project if the following criteria are met:
        // 
        // + The Project does not have a billing account associated with it.
        // + The Project has a lifecycle state of
        // ACTIVE.
        // 
        // This method changes the Project's lifecycle state from
        // ACTIVE
        // to DELETE_REQUESTED.
        // The deletion starts at an unspecified time, at which point the project is
        // no longer accessible.
        // 
        // Until the deletion completes, you can check the lifecycle state
        // checked by retrieving the Project with GetProject,
        // and the Project remains visible to ListProjects.
        // However, you cannot update the project.
        // 
        // After the deletion completes, the Project is not retrievable by
        // the  GetProject and
        // ListProjects methods.
        // 
        // The caller must have modify permissions for this Project.
        delete (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // The Project ID (for example, `foo-bar-123`).
            // 
            // Required.
            projectId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Lists Projects that are visible to the user and satisfy the
        // specified filter. This method returns Projects in an unspecified order.
        // New Projects do not necessarily appear at the end of the list.
        list (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // The maximum number of Projects to return in the response.
            // The server can return fewer Projects than requested.
            // If unspecified, server picks an appropriate default.
            // 
            // Optional.
            pageSize?: number,
            // An expression for filtering the results of the request.  Filter rules are
            // case insensitive. The fields eligible for filtering are:
            // 
            // + `name`
            // + `id`
            // + <code>labels.<em>key</em></code> where *key* is the name of a label
            // 
            // Some examples of using labels as filters:
            // 
            // |Filter|Description|
            // |------|-----------|
            // |name:how*|The project's name starts with "how".|
            // |name:Howl|The project's name is `Howl` or `howl`.|
            // |name:HOWL|Equivalent to above.|
            // |NAME:howl|Equivalent to above.|
            // |labels.color:*|The project has the label `color`.|
            // |labels.color:red|The project's label `color` has the value `red`.|
            // |labels.color:red&nbsp;labels.size:big|The project's label `color` has the value `red` and its label `size` has the value `big`.
            // 
            // If you specify a filter that has both `parent.type` and `parent.id`, then
            // the `resourcemanager.projects.list` permission is checked on the parent.
            // If the user has this permission, all projects under the parent will be
            // returned after remaining filters have been applied. If the user lacks this
            // permission, then all projects for which the user has the
            // `resourcemanager.projects.get` permission will be returned after remaining
            // filters have been applied. If no filter is specified, the call will return
            // projects for which the user has `resourcemanager.projects.get` permissions.
            // 
            // Optional.
            filter?: string,
            // A pagination token returned from a previous call to ListProjects
            // that indicates from where listing should continue.
            // 
            // Optional.
            pageToken?: string,
        }) : gapi.client.Request<ListProjectsResponse>;        
        
        // Sets the IAM access control policy for the specified Project. Replaces
        // any existing policy.
        // 
        // The following constraints apply when using `setIamPolicy()`:
        // 
        // + Project does not support `allUsers` and `allAuthenticatedUsers` as
        // `members` in a `Binding` of a `Policy`.
        // 
        // + The owner role can be granted only to `user` and `serviceAccount`.
        // 
        // + Service accounts can be made owners of a project directly
        // without any restrictions. However, to be added as an owner, a user must be
        // invited via Cloud Platform console and must accept the invitation.
        // 
        // + A user cannot be granted the owner role using `setIamPolicy()`. The user
        // must be granted the owner role using the Cloud Platform Console and must
        // explicitly accept the invitation.
        // 
        // + Invitations to grant the owner role cannot be sent using
        // `setIamPolicy()`; they must be sent only using the Cloud Platform Console.
        // 
        // + Membership changes that leave the project without any owners that have
        // accepted the Terms of Service (ToS) will be rejected.
        // 
        // + If the project is not part of an organization, there must be at least
        // one owner who has accepted the Terms of Service (ToS) agreement in the
        // policy. Calling `setIamPolicy()` to remove the last ToS-accepted owner
        // from the policy will fail. This restriction also applies to legacy
        // projects that no longer have owners who have accepted the ToS. Edits to
        // IAM policies will be rejected until the lack of a ToS-accepting owner is
        // rectified.
        // 
        // + Calling this method requires enabling the App Engine Admin API.
        // 
        // Note: Removing service accounts from policies or changing their roles
        // can render services completely inoperable. It is important to understand
        // how the service account is being used before removing or updating its
        // roles.
        setIamPolicy (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // REQUIRED: The resource for which the policy is being specified.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Creates a Project resource.
        // 
        // Initially, the Project resource is owned by its creator exclusively.
        // The creator can later grant permission to others to read or update the
        // Project.
        // 
        // Several APIs are activated automatically for the Project, including
        // Google Cloud Storage.
        create (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // A safety hatch to opt out of the new reliable project creation process.
            useLegacyStack?: boolean,
        }) : gapi.client.Request<Project>;        
        
    }
    
}

declare module gapi.client.cloudresourcemanager {
    var organizations: gapi.client.cloudresourcemanager.OrganizationsResource; 
    
    var projects: gapi.client.cloudresourcemanager.ProjectsResource; 
    
}
