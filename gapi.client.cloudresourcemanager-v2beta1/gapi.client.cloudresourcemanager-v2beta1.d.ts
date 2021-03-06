// Type definitions for Google Google Cloud Resource Manager API v2beta1
// Project: https://cloud.google.com/resource-manager
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.cloudresourcemanager {
    
    interface TestIamPermissionsResponse {
        // A subset of `TestPermissionsRequest.permissions` that the caller is
        // allowed.
        permissions?: string[],        
    }
    
    interface GetIamPolicyRequest {
    }
    
    interface UndeleteFolderRequest {
    }
    
    interface AuditLogConfig {
        // Specifies the identities that do not cause logging for this type of
        // permission.
        // Follows the same format of Binding.members.
        exemptedMembers?: string[],        
        // The log type that this config enables.
        logType?: string,
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
        // Version of the `Policy`. The default version is 0.
        version?: number,
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
    
    interface Operation {
        // The normal response of the operation in case of success.  If the original
        // method returns no data on success, such as `Delete`, the response is
        // `google.protobuf.Empty`.  If the original method is standard
        // `Get`/`Create`/`Update`, the response should be the resource.  For other
        // methods, the response should have the type `XxxResponse`, where `Xxx`
        // is the original method name.  For example, if the original method name
        // is `TakeSnapshot()`, the inferred response type is
        // `TakeSnapshotResponse`.
        response?: any,
        // The server-assigned name, which is only unique within the same service that
        // originally returns it. If you use the default HTTP mapping, the
        // `name` should have the format of `operations/some/unique/name`.
        name?: string,
        // The error result of the operation in case of failure or cancellation.
        error?: Status,
        // Service-specific metadata associated with the operation.  It typically
        // contains progress information and common metadata such as create time.
        // Some services might not provide such metadata.  Any method that returns a
        // long-running operation should document the metadata type, if any.
        metadata?: any,
        // If the value is `false`, it means the operation is still in progress.
        // If true, the operation is completed, and either `error` or `response` is
        // available.
        done?: boolean,
    }
    
    interface ListFoldersResponse {
        // A possibly paginated list of Folders that are direct descendants of
        // the specified parent resource.
        folders?: Folder[],        
        // A pagination token returned from a previous call to `ListFolders`
        // that indicates from where listing should continue.
        // This field is optional.
        nextPageToken?: string,
    }
    
    interface MoveFolderRequest {
        // The resource name of the Folder or Organization to reparent
        // the folder under.
        // Must be of the form `folders/{folder_id}` or `organizations/{org_id}`.
        destinationParent?: string,
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
    
    interface SearchFoldersResponse {
        // A possibly paginated folder search results.
        // the specified parent resource.
        folders?: Folder[],        
        // A pagination token returned from a previous call to `SearchFolders`
        // that indicates from where searching should continue.
        // This field is optional.
        nextPageToken?: string,
    }
    
    interface Status {
        // A list of messages that carry the error details.  There is a common set of
        // message types for APIs to use.
        details?: any[],        
        // The status code, which should be an enum value of google.rpc.Code.
        code?: number,
        // A developer-facing error message, which should be in English. Any
        // user-facing error message should be localized and sent in the
        // google.rpc.Status.details field, or localized by the client.
        message?: string,
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
    
    interface SearchFoldersRequest {
        // A pagination token returned from a previous call to `SearchFolders`
        // that indicates from where search should continue.
        // This field is optional.
        pageToken?: string,
        // The maximum number of folders to return in the response.
        // This field is optional.
        pageSize?: number,
        // Search criteria used to select the Folders to return.
        // If no search criteria is specified then all accessible folders will be
        // returned.
        // 
        // Query expressions can be used to restrict results based upon displayName,
        // lifecycleState and parent, where the operators `=`, `NOT`, `AND` and `OR`
        // can be used along with the suffix wildcard symbol `*`.
        // 
        // Some example queries are:
        // |Query|Description|
        // |------|-----------|
        // |displayName=Test*|Folders whose display name starts with "Test".|
        // |lifecycleState=ACTIVE|Folders whose lifecycleState is ACTIVE.|
        // |parent=folders/123|Folders whose parent is "folders/123".|
        // |parent=folders/123 AND lifecycleState=ACTIVE|Active folders whose
        // parent is "folders/123".|
        query?: string,
    }
    
    interface Folder {
        // The Folder’s parent's resource name.
        // Updates to the folder's parent must be performed via [MoveFolders].
        parent?: string,
        // Output only. Timestamp when the Folder was created. Assigned by the server.
        createTime?: string,
        // Output only.  The lifecycle state of the folder.
        // Updates to the lifecycle_state must be performed via
        // [DeleteFolder] and [UndeleteFolder].
        lifecycleState?: string,
        // Output only. The resource name of the Folder.
        // Its format is `folders/{folder_id}`, for example: "folders/1234".
        name?: string,
        // The folder’s display name.
        // A folder’s display name must be unique amongst its siblings, e.g.
        // no two folders with the same parent can share the same display name.
        // The display name must start and end with a letter or digit, may contain
        // letters, digits, spaces, hyphens and underscores and can be no longer
        // than 30 characters. This is captured by the regular expression:
        // [\p{L}\p{N}]({\p{L}\p{N}_- ]{0,28}[\p{L}\p{N}])?.
        displayName?: string,
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
    
    interface FoldersResource {
        // Returns permissions that a caller has on the specified Folder.
        // The `resource` field should be the Folder's resource name,
        // e.g. "folders/1234".
        // 
        // There are no permissions required for making this API call.
        testIamPermissions (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // REQUIRED: The resource for which the policy detail is being requested.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<TestIamPermissionsResponse>;        
        
        // Requests deletion of a Folder. The Folder is moved into the
        // [DELETE_REQUESTED] state immediately, and is deleted approximately 30 days
        // later. This method may only be called on an empty Folder in the [ACTIVE]
        // state, where a Folder is empty if it doesn't contain any Folders or
        // Projects in the [ACTIVE] state.
        // The caller must have `resourcemanager.folders.delete` permission on the
        // identified folder.
        delete (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // the resource name of the Folder to be deleted.
            // Must be of the form `folders/{folder_id}`.
            name: string,
        }) : gapi.client.Request<Folder>;        
        
        // Lists the Folders that are direct descendants of supplied parent resource.
        // List provides a strongly consistent view of the Folders underneath
        // the specified parent resource.
        // List returns Folders sorted based upon the (ascending) lexical ordering
        // of their display_name.
        // The caller must have `resourcemanager.folders.list` permission on the
        // identified parent.
        list (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // The resource name of the Organization or Folder whose Folders are
            // being listed.
            // Must be of the form `folders/{folder_id}` or `organizations/{org_id}`.
            // Access to this method is controlled by checking the
            // `resourcemanager.folders.list` permission on the `parent`.
            parent?: string,
            // Controls whether Folders in the [DELETE_REQUESTED} state should
            // be returned.
            showDeleted?: boolean,
            // A pagination token returned from a previous call to `ListFolders`
            // that indicates where this listing should continue from.
            // This field is optional.
            pageToken?: string,
            // The maximum number of Folders to return in the response.
            // This field is optional.
            pageSize?: number,
        }) : gapi.client.Request<ListFoldersResponse>;        
        
        // Creates a Folder in the resource hierarchy.
        // Returns an Operation which can be used to track the progress of the
        // folder creation workflow.
        // Upon success the Operation.response field will be populated with the
        // created Folder.
        // 
        // In order to succeed, the addition of this new Folder must not violate
        // the Folder naming, height or fanout constraints.
        // + The Folder's display_name must be distinct from all other Folder's that
        // share its parent.
        // + The addition of the Folder must not cause the active Folder hierarchy
        // to exceed a height of 4. Note, the full active + deleted Folder hierarchy
        // is allowed to reach a height of 8; this provides additional headroom when
        // moving folders that contain deleted folders.
        // + The addition of the Folder must not cause the total number of Folders
        // under its parent to exceed 100.
        // 
        // If the operation fails due to a folder constraint violation,
        // a PreconditionFailure explaining the violation will be returned.
        // If the failure occurs synchronously then the PreconditionFailure
        // will be returned via the Status.details field and if it occurs
        // asynchronously then the PreconditionFailure will be returned
        // via the the Operation.error field.
        // 
        // The caller must have `resourcemanager.folders.create` permission on the
        // identified parent.
        create (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // The resource name of the new Folder's parent.
            // Must be of the form `folders/{folder_id}` or `organizations/{org_id}`.
            parent?: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets the access control policy on a Folder, replacing any existing policy.
        // The `resource` field should be the Folder's resource name, e.g.
        // "folders/1234".
        // The caller must have `resourcemanager.folders.setIamPolicy` permission
        // on the identified folder.
        setIamPolicy (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // REQUIRED: The resource for which the policy is being specified.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Gets the access control policy for a Folder. The returned policy may be
        // empty if no such policy or resource exists. The `resource` field should
        // be the Folder's resource name, e.g. "folders/1234".
        // The caller must have `resourcemanager.folders.getIamPolicy` permission
        // on the identified folder.
        getIamPolicy (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // REQUIRED: The resource for which the policy is being requested.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Search for folders that match specific filter criteria.
        // Search provides an eventually consistent view of the folders a user has
        // access to which meet the specified filter criteria.
        // 
        // This will only return folders on which the caller has the
        // permission `resourcemanager.folders.get`.
        search (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
        }) : gapi.client.Request<SearchFoldersResponse>;        
        
        // Updates a Folder, changing its display_name.
        // Changes to the folder display_name will be rejected if they violate either
        // the display_name formatting rules or naming constraints described in
        // the [CreateFolder] documentation.
        // + The Folder's display name must start and end with a letter or digit,
        // may contain letters, digits, spaces, hyphens and underscores and can be
        // no longer than 30 characters. This is captured by the regular expression:
        // [\p{L}\p{N}]({\p{L}\p{N}_- ]{0,28}[\p{L}\p{N}])?.
        // The caller must have `resourcemanager.folders.update` permission on the
        // identified folder.
        // 
        // If the update fails due to the unique name constraint then a
        // PreconditionFailure explaining this violation will be returned
        // in the Status.details field.
        patch (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // Fields to be updated.
            // Only the `display_name` can be updated.
            updateMask?: string,
            // Output only. The resource name of the Folder.
            // Its format is `folders/{folder_id}`, for example: "folders/1234".
            name: string,
        }) : gapi.client.Request<Folder>;        
        
        // Retrieves a Folder identified by the supplied resource name.
        // Valid Folder resource names have the format `folders/{folder_id}`
        // (for example, `folders/1234`).
        // The caller must have `resourcemanager.folders.get` permission on the
        // identified folder.
        get (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // The resource name of the Folder to retrieve.
            // Must be of the form `folders/{folder_id}`.
            name: string,
        }) : gapi.client.Request<Folder>;        
        
        // Cancels the deletion request for a Folder. This method may only be
        // called on a Folder in the [DELETE_REQUESTED] state.
        // In order to succeed, the Folder's parent must be in the [ACTIVE] state.
        // In addition, reintroducing the folder into the tree must not violate
        // folder naming, height and fanout constraints described in the
        // [CreateFolder] documentation.
        // The caller must have `resourcemanager.folders.undelete` permission on the
        // identified folder.
        undelete (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // The resource name of the Folder to undelete.
            // Must be of the form `folders/{folder_id}`.
            name: string,
        }) : gapi.client.Request<Folder>;        
        
        // Moves a Folder under a new resource parent.
        // Returns an Operation which can be used to track the progress of the
        // folder move workflow.
        // Upon success the Operation.response field will be populated with the
        // moved Folder.
        // Upon failure, a FolderOperationError categorizing the failure cause will
        // be returned - if the failure occurs synchronously then the
        // FolderOperationError will be returned via the Status.details field
        // and if it occurs asynchronously then the FolderOperation will be returned
        // via the the Operation.error field.
        // In addition, the Operation.metadata field will be populated with a
        // FolderOperation message as an aid to stateless clients.
        // Folder moves will be rejected if they violate either the naming, height
        // or fanout constraints described in the [CreateFolder] documentation.
        // The caller must have `resourcemanager.folders.move` permission on the
        // folder's current and proposed new parent.
        move (request: {        
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
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
            // The resource name of the Folder to move.
            // Must be of the form folders/{folder_id}
            name: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
}

declare module gapi.client.cloudresourcemanager {
    var folders: gapi.client.cloudresourcemanager.FoldersResource; 
    
}
