// Type definitions for Google Google Cloud Runtime Configuration API v1beta1
// Project: https://cloud.google.com/deployment-manager/runtime-configurator/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.runtimeconfig {
    
    interface RuntimeConfig {
        // An optional description of the RuntimeConfig object.
        description?: string,
        // The resource name of a runtime config. The name must have the format:
        // 
        //     projects/[PROJECT_ID]/configs/[CONFIG_NAME]
        // 
        // The `[PROJECT_ID]` must be a valid project ID, and `[CONFIG_NAME]` is an
        // arbitrary name that matches RFC 1035 segment specification. The length of
        // `[CONFIG_NAME]` must be less than 64 bytes.
        // 
        // You pick the RuntimeConfig resource name, but the server will validate that
        // the name adheres to this format. After you create the resource, you cannot
        // change the resource's name.
        name?: string,
    }
    
    interface WatchVariableRequest {
        // If specified, checks the current timestamp of the variable and if the
        // current timestamp is newer than `newerThan` timestamp, the method returns
        // immediately.
        // 
        // If not specified or the variable has an older timestamp, the watcher waits
        // for a the value to change before returning.
        newerThan?: string,
    }
    
    interface ListWaitersResponse {
        // This token allows you to get the next page of results for list requests.
        // If the number of results is larger than `pageSize`, use the `nextPageToken`
        // as a value for the query parameter `pageToken` in the next list request.
        // Subsequent list requests will have their own `nextPageToken` to continue
        // paging through the results
        nextPageToken?: string,
        // Found waiters in the project.
        waiters?: Waiter[],        
    }
    
    interface TestIamPermissionsRequest {
        // The set of permissions to check for the `resource`. Permissions with
        // wildcards (such as '*' or 'storage.*') are not allowed. For more
        // information see
        // [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
        permissions?: string[],        
    }
    
    interface Waiter {
        // [Output Only] If the value is `false`, it means the waiter is still waiting
        // for one of its conditions to be met.
        // 
        // If true, the waiter has finished. If the waiter finished due to a timeout
        // or failure, `error` will be set.
        done?: boolean,
        // [Output Only] The instant at which this Waiter resource was created. Adding
        // the value of `timeout` to this instant yields the timeout deadline for the
        // waiter.
        createTime?: string,
        // [Required] Specifies the timeout of the waiter in seconds, beginning from
        // the instant that `waiters().create` method is called. If this time elapses
        // before the success or failure conditions are met, the waiter fails and sets
        // the `error` code to `DEADLINE_EXCEEDED`.
        timeout?: string,
        // The name of the Waiter resource, in the format:
        // 
        //     projects/[PROJECT_ID]/configs/[CONFIG_NAME]/waiters/[WAITER_NAME]
        // 
        // The `[PROJECT_ID]` must be a valid Google Cloud project ID,
        // the `[CONFIG_NAME]` must be a valid RuntimeConfig resource, the
        // `[WAITER_NAME]` must match RFC 1035 segment specification, and the length
        // of `[WAITER_NAME]` must be less than 64 bytes.
        // 
        // After you create a Waiter resource, you cannot change the resource name.
        name?: string,
        // [Output Only] If the waiter ended due to a failure or timeout, this value
        // will be set.
        error?: Status,
        // [Optional] The failure condition of this waiter. If this condition is met,
        // `done` will be set to `true` and the `error` code will be set to `ABORTED`.
        // The failure condition takes precedence over the success condition. If both
        // conditions are met, a failure will be indicated. This value is optional; if
        // no failure condition is set, the only failure scenario will be a timeout.
        failure?: EndCondition,
        // [Required] The success condition. If this condition is met, `done` will be
        // set to `true` and the `error` value will remain unset. The failure condition
        // takes precedence over the success condition. If both conditions are met, a
        // failure will be indicated.
        success?: EndCondition,
    }
    
    interface Policy {
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
    
    interface Variable {
        // [Ouput only] The current state of the variable. The variable state indicates
        // the outcome of the `variables().watch` call and is visible through the
        // `get` and `list` calls.
        state?: string,
        // [Output Only] The time of the last variable update.
        updateTime?: string,
        // The name of the variable resource, in the format:
        // 
        //     projects/[PROJECT_ID]/configs/[CONFIG_NAME]/variables/[VARIABLE_NAME]
        // 
        // The `[PROJECT_ID]` must be a valid project ID, `[CONFIG_NAME]` must be a
        // valid RuntimeConfig reource and `[VARIABLE_NAME]` follows Unix file system
        // file path naming.
        // 
        // The `[VARIABLE_NAME]` can contain ASCII letters, numbers, slashes and
        // dashes. Slashes are used as path element separators and are not part of the
        // `[VARIABLE_NAME]` itself, so `[VARIABLE_NAME]` must contain at least one
        // non-slash character. Multiple slashes are coalesced into single slash
        // character. Each path segment should follow RFC 1035 segment specification.
        // The length of a `[VARIABLE_NAME]` must be less than 256 bytes.
        // 
        // Once you create a variable, you cannot change the variable name.
        name?: string,
        // The string value of the variable. The length of the value must be less
        // than 4096 bytes. Empty values are also accepted. For example,
        // `text: "my text value"`. The string must be valid UTF-8.
        text?: string,
        // The binary value of the variable. The length of the value must be less
        // than 4096 bytes. Empty values are also accepted. The value must be
        // base64 encoded. Only one of `value` or `text` can be set.
        value?: string,
    }
    
    interface Operation {
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
    }
    
    interface SetIamPolicyRequest {
        // REQUIRED: The complete policy to be applied to the `resource`. The size of
        // the policy is limited to a few 10s of KB. An empty policy is a
        // valid policy but certain Cloud Platform services (such as Projects)
        // might reject them.
        policy?: Policy,
    }
    
    interface Status {
        // The status code, which should be an enum value of google.rpc.Code.
        code?: number,
        // A developer-facing error message, which should be in English. Any
        // user-facing error message should be localized and sent in the
        // google.rpc.Status.details field, or localized by the client.
        message?: string,
        // A list of messages that carry the error details.  There will be a
        // common set of message types for APIs to use.
        details?: any[],        
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
    
    interface Cardinality {
        // The number variables under the `path` that must exist to meet this
        // condition. Defaults to 1 if not specified.
        number?: number,
        // The root of the variable subtree to monitor. For example, `/foo`.
        path?: string,
    }
    
    interface Empty {
    }
    
    interface ListConfigsResponse {
        // A list of the configurations in the project. The order of returned
        // objects is arbitrary; that is, it is not ordered in any particular way.
        configs?: RuntimeConfig[],        
        // This token allows you to get the next page of results for list requests.
        // If the number of results is larger than `pageSize`, use the `nextPageToken`
        // as a value for the query parameter `pageToken` in the next list request.
        // Subsequent list requests will have their own `nextPageToken` to continue
        // paging through the results
        nextPageToken?: string,
    }
    
    interface EndCondition {
        // The cardinality of the `EndCondition`.
        cardinality?: Cardinality,
    }
    
    interface TestIamPermissionsResponse {
        // A subset of `TestPermissionsRequest.permissions` that the caller is
        // allowed.
        permissions?: string[],        
    }
    
    interface ListVariablesResponse {
        // A list of variables and their values. The order of returned variable
        // objects is arbitrary.
        variables?: Variable[],        
        // This token allows you to get the next page of results for list requests.
        // If the number of results is larger than `pageSize`, use the `nextPageToken`
        // as a value for the query parameter `pageToken` in the next list request.
        // Subsequent list requests will have their own `nextPageToken` to continue
        // paging through the results
        nextPageToken?: string,
    }
    
    interface WaitersResource {
        // Returns permissions that a caller has on the specified resource.
        // If the resource does not exist, this will return an empty set of
        // permissions, not a NOT_FOUND error.
        // 
        // Note: This operation is designed to be used for building permission-aware
        // UIs and command-line tools, not for authorization checking. This operation
        // may "fail open" without warning.
        testIamPermissions (request: {        
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
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // REQUIRED: The resource for which the policy detail is being requested.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<TestIamPermissionsResponse>;        
        
        // Deletes the waiter with the specified name.
        delete (request: {        
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
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // The Waiter resource to delete, in the format:
            // 
            //  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]/waiters/[WAITER_NAME]`
            name: string,
        }) : gapi.client.Request<Empty>;        
        
        // Gets information about a single waiter.
        get (request: {        
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
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // The fully-qualified name of the Waiter resource object to retrieve, in the
            // format:
            // 
            // `projects/[PROJECT_ID]/configs/[CONFIG_NAME]/waiters/[WAITER_NAME]`
            name: string,
        }) : gapi.client.Request<Waiter>;        
        
        // List waiters within the given configuration.
        list (request: {        
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
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Specifies a page token to use. Set `pageToken` to a `nextPageToken`
            // returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Specifies the number of results to return per page. If there are fewer
            // elements than the specified number, returns all elements.
            pageSize?: number,
            // The path to the configuration for which you want to get a list of waiters.
            // The configuration must exist beforehand; the path must by in the format:
            // 
            // `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
            parent: string,
        }) : gapi.client.Request<ListWaitersResponse>;        
        
        // Creates a Waiter resource. This operation returns a long-running Operation
        // resource which can be polled for completion. However, a waiter with the
        // given name will exist (and can be retrieved) prior to the operation
        // completing. If the operation fails, the failed Waiter resource will
        // still exist and must be deleted prior to subsequent creation attempts.
        create (request: {        
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
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // An optional but recommended unique `request_id`. If the server
            // receives two `create()` requests  with the same
            // `request_id`, then the second request will be ignored and the
            // first resource created and stored in the backend is returned.
            // Empty `request_id` fields are ignored.
            // 
            // It is responsibility of the client to ensure uniqueness of the
            // `request_id` strings.
            // 
            // `request_id` strings are limited to 64 characters.
            requestId?: string,
            // The path to the configuration that will own the waiter.
            // The configuration must exist beforehand; the path must by in the format:
            // 
            // `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`.
            parent: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface OperationsResource {
        // Returns permissions that a caller has on the specified resource.
        // If the resource does not exist, this will return an empty set of
        // permissions, not a NOT_FOUND error.
        // 
        // Note: This operation is designed to be used for building permission-aware
        // UIs and command-line tools, not for authorization checking. This operation
        // may "fail open" without warning.
        testIamPermissions (request: {        
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
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // REQUIRED: The resource for which the policy detail is being requested.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<TestIamPermissionsResponse>;        
        
        // Gets the latest state of a long-running operation.  Clients can use this
        // method to poll the operation result at intervals as recommended by the API
        // service.
        get (request: {        
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
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // The name of the operation resource.
            name: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface VariablesResource {
        // Gets information about a single variable.
        get (request: {        
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
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // The name of the variable to return, in the format:
            // 
            // `projects/[PROJECT_ID]/configs/[CONFIG_NAME]/variables/[VARIBLE_NAME]`
            name: string,
        }) : gapi.client.Request<Variable>;        
        
        // Watches a specific variable and waits for a change in the variable's value.
        // When there is a change, this method returns the new value or times out.
        // 
        // If a variable is deleted while being watched, the `variableState` state is
        // set to `DELETED` and the method returns the last known variable `value`.
        // 
        // If you set the deadline for watching to a larger value than internal timeout
        // (60 seconds), the current variable value is returned and the `variableState`
        // will be `VARIABLE_STATE_UNSPECIFIED`.
        // 
        // To learn more about creating a watcher, read the
        // [Watching a Variable for Changes](/deployment-manager/runtime-configurator/watching-a-variable)
        // documentation.
        watch (request: {        
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
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // The name of the variable to watch, in the format:
            // 
            // `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
            name: string,
        }) : gapi.client.Request<Variable>;        
        
        // Updates an existing variable with a new value.
        update (request: {        
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
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // The name of the variable to update, in the format:
            // 
            // `projects/[PROJECT_ID]/configs/[CONFIG_NAME]/variables/[VARIABLE_NAME]`
            name: string,
        }) : gapi.client.Request<Variable>;        
        
        // Returns permissions that a caller has on the specified resource.
        // If the resource does not exist, this will return an empty set of
        // permissions, not a NOT_FOUND error.
        // 
        // Note: This operation is designed to be used for building permission-aware
        // UIs and command-line tools, not for authorization checking. This operation
        // may "fail open" without warning.
        testIamPermissions (request: {        
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
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // REQUIRED: The resource for which the policy detail is being requested.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<TestIamPermissionsResponse>;        
        
        // Deletes a variable or multiple variables.
        // 
        // If you specify a variable name, then that variable is deleted. If you
        // specify a prefix and `recursive` is true, then all variables with that
        // prefix are deleted. You must set a `recursive` to true if you delete
        // variables by prefix.
        delete (request: {        
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
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Set to `true` to recursively delete multiple variables with the same
            // prefix.
            recursive?: boolean,
            // The name of the variable to delete, in the format:
            // 
            // `projects/[PROJECT_ID]/configs/[CONFIG_NAME]/variables/[VARIABLE_NAME]`
            name: string,
        }) : gapi.client.Request<Empty>;        
        
        // Lists variables within given a configuration, matching any provided filters.
        // This only lists variable names, not the values, unless `return_values` is
        // true, in which case only variables that user has IAM permission to GetVariable
        // will be returned.
        list (request: {        
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
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Filters variables by matching the specified filter. For example:
            // 
            // `projects/example-project/config/[CONFIG_NAME]/variables/example-variable`.
            filter?: string,
            // The flag indicates whether the user wants to return values of variables.
            // If true, then only those variables that user has IAM GetVariable permission
            // will be returned along with their values.
            returnValues?: boolean,
            // Specifies a page token to use. Set `pageToken` to a `nextPageToken`
            // returned by a previous list request to get the next page of results.
            pageToken?: string,
            // Specifies the number of results to return per page. If there are fewer
            // elements than the specified number, returns all elements.
            pageSize?: number,
            // The path to the RuntimeConfig resource for which you want to list variables.
            // The configuration must exist beforehand; the path must by in the format:
            // 
            // `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
            parent: string,
        }) : gapi.client.Request<ListVariablesResponse>;        
        
        // Creates a variable within the given configuration. You cannot create
        // a variable with a name that is a prefix of an existing variable name, or a
        // name that has an existing variable name as a prefix.
        // 
        // To learn more about creating a variable, read the
        // [Setting and Getting Data](/deployment-manager/runtime-configurator/set-and-get-variables)
        // documentation.
        create (request: {        
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
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // An optional but recommended unique `request_id`. If the server
            // receives two `create()` requests  with the same
            // `request_id`, then the second request will be ignored and the
            // first resource created and stored in the backend is returned.
            // Empty `request_id` fields are ignored.
            // 
            // It is responsibility of the client to ensure uniqueness of the
            // `request_id` strings.
            // 
            // `request_id` strings are limited to 64 characters.
            requestId?: string,
            // The path to the RutimeConfig resource that this variable should belong to.
            // The configuration must exist beforehand; the path must by in the format:
            // 
            // `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
            parent: string,
        }) : gapi.client.Request<Variable>;        
        
    }
    
    
    interface ConfigsResource {
        // Gets information about a RuntimeConfig resource.
        get (request: {        
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
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // The name of the RuntimeConfig resource to retrieve, in the format:
            // 
            // `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
            name: string,
        }) : gapi.client.Request<RuntimeConfig>;        
        
        // Updates a RuntimeConfig resource. The configuration must exist beforehand.
        update (request: {        
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
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // The name of the RuntimeConfig resource to update, in the format:
            // 
            // `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
            name: string,
        }) : gapi.client.Request<RuntimeConfig>;        
        
        // Returns permissions that a caller has on the specified resource.
        // If the resource does not exist, this will return an empty set of
        // permissions, not a NOT_FOUND error.
        // 
        // Note: This operation is designed to be used for building permission-aware
        // UIs and command-line tools, not for authorization checking. This operation
        // may "fail open" without warning.
        testIamPermissions (request: {        
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
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // REQUIRED: The resource for which the policy detail is being requested.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<TestIamPermissionsResponse>;        
        
        // Deletes a RuntimeConfig resource.
        delete (request: {        
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
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // The RuntimeConfig resource to delete, in the format:
            // 
            // `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
            name: string,
        }) : gapi.client.Request<Empty>;        
        
        // Lists all the RuntimeConfig resources within project.
        list (request: {        
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
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Specifies the number of results to return per page. If there are fewer
            // elements than the specified number, returns all elements.
            pageSize?: number,
            // The [project ID](https://support.google.com/cloud/answer/6158840?hl=en&ref_topic=6158848)
            // for this request, in the format `projects/[PROJECT_ID]`.
            parent: string,
            // Specifies a page token to use. Set `pageToken` to a `nextPageToken`
            // returned by a previous list request to get the next page of results.
            pageToken?: string,
        }) : gapi.client.Request<ListConfigsResponse>;        
        
        // Sets the access control policy on the specified resource. Replaces any
        // existing policy.
        setIamPolicy (request: {        
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
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // REQUIRED: The resource for which the policy is being specified.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        // Creates a new RuntimeConfig resource. The configuration name must be
        // unique within project.
        create (request: {        
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
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // An optional but recommended unique `request_id`. If the server
            // receives two `create()` requests  with the same
            // `request_id`, then the second request will be ignored and the
            // first resource created and stored in the backend is returned.
            // Empty `request_id` fields are ignored.
            // 
            // It is responsibility of the client to ensure uniqueness of the
            // `request_id` strings.
            // 
            // `request_id` strings are limited to 64 characters.
            requestId?: string,
            // The [project ID](https://support.google.com/cloud/answer/6158840?hl=en&ref_topic=6158848)
            // for this request, in the format `projects/[PROJECT_ID]`.
            parent: string,
        }) : gapi.client.Request<RuntimeConfig>;        
        
        // Gets the access control policy for a resource.
        // Returns an empty policy if the resource exists and does not have a policy
        // set.
        getIamPolicy (request: {        
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
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // REQUIRED: The resource for which the policy is being requested.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<Policy>;        
        
        waiters: WaitersResource,
        operations: OperationsResource,
        variables: VariablesResource,
    }
    
    
    interface ProjectsResource {
        configs: ConfigsResource,
    }
    
}

declare module gapi.client.runtimeconfig {
    var projects: gapi.client.runtimeconfig.ProjectsResource; 
    
}
