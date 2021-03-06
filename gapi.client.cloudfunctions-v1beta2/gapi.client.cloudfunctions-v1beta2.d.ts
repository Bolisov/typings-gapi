// Type definitions for Google Google Cloud Functions API v1beta2
// Project: https://cloud.google.com/functions
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.cloudfunctions {
    
    interface OperationMetadataV1Beta2 {
        // Target of the operation - for example
        // projects/project-1/locations/region-1/functions/function-1
        target?: string,
        // The original request that started the operation.
        request?: any,
        // Type of operation.
        type?: string,
    }
    
    interface Status {
        // A developer-facing error message, which should be in English. Any
        // user-facing error message should be localized and sent in the
        // google.rpc.Status.details field, or localized by the client.
        message?: string,
        // A list of messages that carry the error details.  There is a common set of
        // message types for APIs to use.
        details?: any[],        
        // The status code, which should be an enum value of google.rpc.Code.
        code?: number,
    }
    
    interface CallFunctionRequest {
        // Input to be passed to the function.
        data?: string,
    }
    
    interface SourceRepository {
        // The id of the revision that captures the state of the repository from
        // which the function should be fetched.
        revision?: string,
        // URL to the hosted repository where the function is defined. Only paths in
        // https://source.developers.google.com domain are supported. The path should
        // contain the name of the repository.
        repositoryUrl?: string,
        // The name of the tag that captures the state of the repository from
        // which the function should be fetched.
        tag?: string,
        // The name of the branch from which the function should be fetched.
        branch?: string,
        // The path within the repository where the function is defined. The path
        // should point to the directory where Cloud Functions files are located. Use
        // "/" if the function is defined directly in the root directory of a
        // repository.
        sourcePath?: string,
        // Output only. The id of the revision that was resolved at the moment of
        // function creation or update. For example when a user deployed from a
        // branch, it will be the revision id of the latest change on this branch at
        // that time. If user deployed from revision then this value will be always
        // equal to the revision specified by the user.
        deployedRevision?: string,
    }
    
    interface CloudFunction {
        // The function execution timeout. Execution is considered failed and
        // can be terminated if the function is not completed at the end of the
        // timeout period. Defaults to 60 seconds.
        timeout?: string,
        // Output only. Status of the function deployment.
        status?: string,
        // A source that fires events in response to a condition in another service.
        eventTrigger?: EventTrigger,
        // The amount of memory in MB available for a function.
        // Defaults to 256MB.
        availableMemoryMb?: number,
        // A user-defined name of the function. Function names must be unique
        // globally and match pattern `projects/*/locations/*/functions/*`
        name?: string,
        // Output only. The service account of the function.
        serviceAccount?: string,
        // The Google Cloud Storage URL, starting with gs://, pointing to the zip
        // archive which contains the function.
        sourceArchiveUrl?: string,
        // The hosted repository where the function is defined.
        sourceRepository?: SourceRepository,
        // The name of the function (as defined in source code) that will be
        // executed. Defaults to the resource name suffix, if not specified. For
        // backward compatibility, if function with given name is not found, then the
        // system will try to use function named "function".
        // For Node.js this is name of a function exported by the module specified
        // in `source_location`.
        entryPoint?: string,
        // The URL pointing to the hosted repository where the function is defined.
        // There are supported Cloud Source Repository URLs in the following
        // formats:
        // 
        // To refer to a specific commit:
        // `https://source.developers.google.com/projects/*/repos/*/revisions/*/paths/*`
        // To refer to a moveable alias (branch):
        // `https://source.developers.google.com/projects/*/repos/*/aliases/movable/*/paths/*`
        // In particular, to refer to HEAD use `master` moveable alias.
        // To refer to a specific fixed alias (tag):
        // `https://source.developers.google.com/projects/*/repos/*/aliases/fixed/*/paths/*`
        // 
        // You may omit `paths/*` if you want to use the main directory.
        sourceRepositoryUrl?: string,
        // Output only. The last update timestamp of a Cloud Function.
        updateTime?: string,
        // Output only. Name of the most recent operation modifying the function. If
        // the function status is `DEPLOYING` or `DELETING`, then it points to the
        // active operation.
        latestOperation?: string,
        // An HTTPS endpoint type of source that can be triggered via URL.
        httpsTrigger?: HTTPSTrigger,
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
    
    interface ListOperationsResponse {
        // A list of operations that matches the specified filter in the request.
        operations?: Operation[],        
        // The standard List next-page token.
        nextPageToken?: string,
    }
    
    interface ListFunctionsResponse {
        // The functions that match the request.
        functions?: CloudFunction[],        
        // If not empty, indicates that there may be more functions that match
        // the request; this value should be passed in a new
        // google.cloud.functions.v1beta2.ListFunctionsRequest
        // to get more functions.
        nextPageToken?: string,
    }
    
    interface ListLocationsResponse {
        // A list of locations that matches the specified filter in the request.
        locations?: Location[],        
        // The standard List next-page token.
        nextPageToken?: string,
    }
    
    interface CallFunctionResponse {
        // Execution id of function invocation.
        executionId?: string,
        // Either system or user-function generated error. Set if execution
        // was not successful.
        error?: string,
        // Result populated for successful execution of synchronous function. Will
        // not be populated if function does not return a result through context.
        result?: string,
    }
    
    interface EventTrigger {
        // `event_type` names contain the service that is sending an event and the
        // kind of event that was fired. Must be of the form
        // `providers/*/eventTypes/*` e.g. Directly handle a Message published to
        // Google Cloud Pub/Sub `providers/cloud.pubsub/eventTypes/topic.publish`
        // 
        //      Handle an object changing in Google Cloud Storage
        //      `providers/cloud.storage/eventTypes/object.change`
        // 
        //      Handle a write to the Firebase Realtime Database
        //      `providers/firebase.database/eventTypes/data.write`
        eventType?: string,
        // Which instance of the source's service should send events. E.g. for Pub/Sub
        // this would be a Pub/Sub topic at `projects/*/topics/*`. For Google Cloud
        // Storage this would be a bucket at `projects/*/buckets/*`. For any source
        // that only supports one instance per-project, this should be the name of the
        // project (`projects/*`)
        resource?: string,
    }
    
    interface HTTPSTrigger {
        // Output only. The deployed url for the function.
        url?: string,
    }
    
    interface Operation {
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
        // The normal response of the operation in case of success.  If the original
        // method returns no data on success, such as `Delete`, the response is
        // `google.protobuf.Empty`.  If the original method is standard
        // `Get`/`Create`/`Update`, the response should be the resource.  For other
        // methods, the response should have the type `XxxResponse`, where `Xxx`
        // is the original method name.  For example, if the original method name
        // is `TakeSnapshot()`, the inferred response type is
        // `TakeSnapshotResponse`.
        response?: any,
    }
    
    interface FunctionsResource {
        // Deletes a function with the given name from the specified project. If the
        // given function is used by some trigger, the trigger will be updated to
        // remove this function.
        delete (request: {        
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
            // The name of the function which should be deleted.
            name: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns a list of functions that belong to the requested project.
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
            // The value returned by the last
            // `ListFunctionsResponse`; indicates that
            // this is a continuation of a prior `ListFunctions` call, and that the
            // system should return the next page of data.
            pageToken?: string,
            // Maximum number of functions to return per call.
            pageSize?: number,
            // The project and location from which the function should be listed,
            // specified in the format `projects/*/locations/*`
            // If you want to list functions in all locations, use "-" in place of a
            // location.
            location: string,
        }) : gapi.client.Request<ListFunctionsResponse>;        
        
        // Invokes synchronously deployed function. To be used for testing, very
        // limited traffic allowed.
        call (request: {        
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
            // The name of the function to be called.
            name: string,
        }) : gapi.client.Request<CallFunctionResponse>;        
        
        // Creates a new function. If a function with the given name already exists in
        // the specified project, the long running operation will return
        // `ALREADY_EXISTS` error.
        create (request: {        
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
            // The project and location in which the function should be created, specified
            // in the format `projects/*/locations/*`
            location: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns a function with the given name from the requested project.
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
            // The name of the function which details should be obtained.
            name: string,
        }) : gapi.client.Request<CloudFunction>;        
        
        // Updates existing function.
        update (request: {        
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
            // The name of the function to be updated.
            name: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface LocationsResource {
        // Lists information about the supported locations for this service.
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
            // The standard list page token.
            pageToken?: string,
            // The resource that owns the locations collection, if applicable.
            name: string,
            // The standard list page size.
            pageSize?: number,
            // The standard list filter.
            filter?: string,
        }) : gapi.client.Request<ListLocationsResponse>;        
        
        functions: FunctionsResource,
    }
    
    
    interface ProjectsResource {
        locations: LocationsResource,
    }
    
    
    interface OperationsResource {
        // Gets the latest state of a long-running operation.  Clients can use this
        // method to poll the operation result at intervals as recommended by the API
        // service.
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
            // The name of the operation resource.
            name: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists operations that match the specified filter in the request. If the
        // server doesn't support this method, it returns `UNIMPLEMENTED`.
        // 
        // NOTE: the `name` binding allows API services to override the binding
        // to use different resource name schemes, such as `users/*/operations`. To
        // override the binding, API services can add a binding such as
        // `"/v1/{name=users/*}/operations"` to their service configuration.
        // For backwards compatibility, the default name includes the operations
        // collection id, however overriding users must ensure the name binding
        // is the parent resource, without the operations collection id.
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
            // The standard list page token.
            pageToken?: string,
            // The name of the operation's parent resource.
            name?: string,
            // The standard list page size.
            pageSize?: number,
            // The standard list filter.
            filter?: string,
        }) : gapi.client.Request<ListOperationsResponse>;        
        
    }
    
}

declare module gapi.client.cloudfunctions {
    var projects: gapi.client.cloudfunctions.ProjectsResource; 
    
    var operations: gapi.client.cloudfunctions.OperationsResource; 
    
}
