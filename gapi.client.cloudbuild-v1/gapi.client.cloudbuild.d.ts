// Type definitions for Google Google Cloud Container Builder API v1
// Project: https://cloud.google.com/container-builder/docs/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.cloudbuild {
    
    interface Status {
        // The status code, which should be an enum value of google.rpc.Code.
        code?: number,
        // A developer-facing error message, which should be in English. Any
        // user-facing error message should be localized and sent in the
        // google.rpc.Status.details field, or localized by the client.
        message?: string,
        // A list of messages that carry the error details.  There is a common set of
        // message types for APIs to use.
        details?: any[],        
    }
    
    interface Empty {
    }
    
    interface BuildTrigger {
        // Template describing the types of source changes to trigger a build.
        // 
        // Branch and tag names in trigger templates are interpreted as regular
        // expressions. Any branch or tag change that matches that regular expression
        // will trigger a build.
        triggerTemplate?: RepoSource,
        // Path, from the source root, to a file whose contents is used for the
        // template.
        filename?: string,
        // Unique identifier of the trigger.
        // 
        // @OutputOnly
        id?: string,
        // Contents of the build template.
        build?: Build,
        // Substitutions data for Build resource.
        substitutions?: any,
        // Human-readable description of this trigger.
        description?: string,
        // Time when the trigger was created.
        // 
        // @OutputOnly
        createTime?: string,
        // If true, the trigger will never result in a build.
        disabled?: boolean,
    }
    
    interface Build {
        // Tags for annotation of a Build. These are not docker tags.
        tags?: string[],        
        // Unique identifier of the build.
        // @OutputOnly
        id?: string,
        // Substitutions data for Build resource.
        substitutions?: any,
        // Time at which execution of the build was started.
        // @OutputOnly
        startTime?: string,
        // Time at which the request to create the build was received.
        // @OutputOnly
        createTime?: string,
        // A permanent fixed identifier for source.
        // @OutputOnly
        sourceProvenance?: SourceProvenance,
        // A list of images to be pushed upon the successful completion of all build
        // steps.
        // 
        // The images will be pushed using the builder service account's credentials.
        // 
        // The digests of the pushed images will be stored in the Build resource's
        // results field.
        // 
        // If any of the images fail to be pushed, the build is marked FAILURE.
        images?: string[],        
        // ID of the project.
        // @OutputOnly.
        projectId?: string,
        // Time at which execution of the build was finished.
        // 
        // The difference between finish_time and start_time is the duration of the
        // build's execution.
        // @OutputOnly
        finishTime?: string,
        // URL to logs for this build in Google Cloud Logging.
        // @OutputOnly
        logUrl?: string,
        // Special options for this build.
        options?: BuildOptions,
        // Describes where to find the source files to build.
        source?: Source,
        // Customer-readable message about the current status.
        // @OutputOnly
        statusDetail?: string,
        // Status of the build.
        // @OutputOnly
        status?: string,
        // Amount of time that this build should be allowed to run, to second
        // granularity. If this amount of time elapses, work on the build will cease
        // and the build status will be TIMEOUT.
        // 
        // Default time is ten minutes.
        timeout?: string,
        // Secrets to decrypt using Cloud KMS.
        secrets?: Secret[],        
        // Results of the build.
        // @OutputOnly
        results?: Results,
        // Google Cloud Storage bucket where logs should be written (see
        // [Bucket Name
        // Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
        // Logs file names will be of the format `${logs_bucket}/log-${build_id}.txt`.
        logsBucket?: string,
        // Describes the operations to be performed on the workspace.
        steps?: BuildStep[],        
        // The ID of the BuildTrigger that triggered this build, if it was
        // triggered automatically.
        // @OutputOnly
        buildTriggerId?: string,
    }
    
    interface CancelBuildRequest {
    }
    
    interface ListBuildsResponse {
        // Token to receive the next page of results.
        nextPageToken?: string,
        // Builds will be sorted by create_time, descending.
        builds?: Build[],        
    }
    
    interface ListOperationsResponse {
        // A list of operations that matches the specified filter in the request.
        operations?: Operation[],        
        // The standard List next-page token.
        nextPageToken?: string,
    }
    
    interface Source {
        // If provided, get the source from this location in in Google Cloud
        // Storage.
        storageSource?: StorageSource,
        // If provided, get source from this location in a Cloud Repo.
        repoSource?: RepoSource,
    }
    
    interface BuildOptions {
        // Requested hash for SourceProvenance.
        sourceProvenanceHash?: string[],        
        // SubstitutionOption to allow unmatch substitutions.
        substitutionOption?: string,
        // Requested verifiability options.
        requestedVerifyOption?: string,
    }
    
    interface StorageSource {
        // Google Cloud Storage bucket containing source (see
        // [Bucket Name
        // Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
        bucket?: string,
        // Google Cloud Storage object containing source.
        // 
        // This object must be a gzipped archive file (.tar.gz) containing source to
        // build.
        object?: string,
        // Google Cloud Storage generation for the object. If the generation is
        // omitted, the latest generation will be used.
        generation?: string,
    }
    
    interface Results {
        // Images that were built as a part of the build.
        images?: BuiltImage[],        
        // List of build step digests, in order corresponding to build step indices.
        buildStepImages?: string[],        
    }
    
    interface BuildOperationMetadata {
        // The build that the operation is tracking.
        build?: Build,
    }
    
    interface SourceProvenance {
        // A copy of the build's source.repo_source, if exists, with any
        // revisions resolved.
        resolvedRepoSource?: RepoSource,
        // A copy of the build's source.storage_source, if exists, with any
        // generations resolved.
        resolvedStorageSource?: StorageSource,
        // Hash(es) of the build source, which can be used to verify that the original
        // source integrity was maintained in the build. Note that FileHashes will
        // only be populated if BuildOptions has requested a SourceProvenanceHash.
        // 
        // The keys to this map are file paths used as build source and the values
        // contain the hash values for those files.
        // 
        // If the build source came in a single package such as a gzipped tarfile
        // (.tar.gz), the FileHash will be for the single path to that file.
        // @OutputOnly
        fileHashes?: any,
    }
    
    interface CancelOperationRequest {
    }
    
    interface ListBuildTriggersResponse {
        // BuildTriggers for the project, sorted by create_time descending.
        triggers?: BuildTrigger[],        
    }
    
    interface Operation {
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
        // The error result of the operation in case of failure or cancellation.
        error?: Status,
    }
    
    interface BuiltImage {
        // Name used to push the container image to Google Container Registry, as
        // presented to `docker push`.
        name?: string,
        // Docker Registry 2.0 digest.
        digest?: string,
    }
    
    interface RepoSource {
        // Explicit commit SHA to build.
        commitSha?: string,
        // Name of the tag to build.
        tagName?: string,
        // Name of the branch to build.
        branchName?: string,
        // Name of the repo. If omitted, the name "default" is assumed.
        repoName?: string,
        // ID of the project that owns the repo. If omitted, the project ID requesting
        // the build is assumed.
        projectId?: string,
    }
    
    interface BuildStep {
        // The ID(s) of the step(s) that this build step depends on.
        // This build step will not start until all the build steps in wait_for
        // have completed successfully. If wait_for is empty, this build step will
        // start when all previous build steps in the Build.Steps list have completed
        // successfully.
        waitFor?: string[],        
        // A list of environment variable definitions to be used when running a step.
        // 
        // The elements are of the form "KEY=VALUE" for the environment variable "KEY"
        // being given the value "VALUE".
        env?: string[],        
        // A list of arguments that will be presented to the step when it is started.
        // 
        // If the image used to run the step's container has an entrypoint, these args
        // will be used as arguments to that entrypoint. If the image does not define
        // an entrypoint, the first element in args will be used as the entrypoint,
        // and the remainder will be used as arguments.
        args?: string[],        
        // The name of the container image that will run this particular build step.
        // 
        // If the image is already available in the host's Docker daemon's cache, it
        // will be run directly. If not, the host will attempt to pull the image
        // first, using the builder service account's credentials if necessary.
        // 
        // The Docker daemon's cache will already have the latest versions of all of
        // the officially supported build steps
        // ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)).
        // The Docker daemon will also have cached many of the layers for some popular
        // images, like "ubuntu", "debian", but they will be refreshed at the time you
        // attempt to use them.
        // 
        // If you built an image in a previous build step, it will be stored in the
        // host's Docker daemon's cache and is available to use as the name for a
        // later build step.
        name?: string,
        // Optional entrypoint to be used instead of the build step image's default
        // If unset, the image's default will be used.
        entrypoint?: string,
        // Optional unique identifier for this build step, used in wait_for to
        // reference this build step as a dependency.
        id?: string,
        // A list of environment variables which are encrypted using a Cloud KMS
        // crypto key. These values must be specified in the build's secrets.
        secretEnv?: string[],        
        // Working directory (relative to project source root) to use when running
        // this operation's container.
        dir?: string,
    }
    
    interface Hash {
        // The hash value.
        value?: string,
        // The type of hash that was performed.
        type?: string,
    }
    
    interface FileHashes {
        // Collection of file hashes.
        fileHash?: Hash[],        
    }
    
    interface Secret {
        // Map of environment variable name to its encrypted value.
        // 
        // Secret environment variables must be unique across all of a build's
        // secrets, and must be used by at least one build step. Values can be at most
        // 1 KB in size. There can be at most ten secret values across all of a
        // build's secrets.
        secretEnv?: any,
        // Cloud KMS key name to use to decrypt these envs.
        kmsKeyName?: string,
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
            // The standard list filter.
            filter?: string,
            // The standard list page token.
            pageToken?: string,
            // The name of the operation's parent resource.
            name: string,
            // The standard list page size.
            pageSize?: number,
        }) : gapi.client.Request<ListOperationsResponse>;        
        
        // Starts asynchronous cancellation on a long-running operation.  The server
        // makes a best effort to cancel the operation, but success is not
        // guaranteed.  If the server doesn't support this method, it returns
        // `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
        // Operations.GetOperation or
        // other methods to check whether the cancellation succeeded or whether the
        // operation completed despite cancellation. On successful cancellation,
        // the operation is not deleted; instead, it becomes an operation with
        // an Operation.error value with a google.rpc.Status.code of 1,
        // corresponding to `Code.CANCELLED`.
        cancel (request: {        
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
            // The name of the operation resource to be cancelled.
            name: string,
        }) : gapi.client.Request<Empty>;        
        
    }
    
    
    interface TriggersResource {
        // Creates a new BuildTrigger.
        // 
        // This API is experimental.
        create (request: {        
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
            // ID of the project for which to configure automatic builds.
            projectId: string,
        }) : gapi.client.Request<BuildTrigger>;        
        
        // Deletes an BuildTrigger by its project ID and trigger ID.
        // 
        // This API is experimental.
        delete (request: {        
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
            // ID of the BuildTrigger to delete.
            triggerId: string,
            // ID of the project that owns the trigger.
            projectId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Updates an BuildTrigger by its project ID and trigger ID.
        // 
        // This API is experimental.
        patch (request: {        
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
            // ID of the BuildTrigger to update.
            triggerId: string,
            // ID of the project that owns the trigger.
            projectId: string,
        }) : gapi.client.Request<BuildTrigger>;        
        
        // Lists existing BuildTrigger.
        // 
        // This API is experimental.
        list (request: {        
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
            // ID of the project for which to list BuildTriggers.
            projectId: string,
        }) : gapi.client.Request<ListBuildTriggersResponse>;        
        
        // Gets information about a BuildTrigger.
        // 
        // This API is experimental.
        get (request: {        
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
            // ID of the BuildTrigger to get.
            triggerId: string,
            // ID of the project that owns the trigger.
            projectId: string,
        }) : gapi.client.Request<BuildTrigger>;        
        
    }
    
    
    interface BuildsResource {
        // Starts a build with the specified configuration.
        // 
        // The long-running Operation returned by this method will include the ID of
        // the build, which can be passed to GetBuild to determine its status (e.g.,
        // success or failure).
        create (request: {        
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
            // ID of the project.
            projectId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Cancels a requested build in progress.
        cancel (request: {        
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
            // ID of the project.
            projectId: string,
            // ID of the build.
            id: string,
        }) : gapi.client.Request<Build>;        
        
        // Lists previously requested builds.
        // 
        // Previously requested builds may still be in-progress, or may have finished
        // successfully or unsuccessfully.
        list (request: {        
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
            // Token to provide to skip to a particular spot in the list.
            pageToken?: string,
            // Number of results to return in the list.
            pageSize?: number,
            // ID of the project.
            projectId: string,
            // The raw filter text to constrain the results.
            filter?: string,
        }) : gapi.client.Request<ListBuildsResponse>;        
        
        // Returns information about a previously requested build.
        // 
        // The Build that is returned includes its status (e.g., success or failure,
        // or in-progress), and timing information.
        get (request: {        
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
            // ID of the project.
            projectId: string,
            // ID of the build.
            id: string,
        }) : gapi.client.Request<Build>;        
        
    }
    
    
    interface ProjectsResource {
        triggers: TriggersResource,
        builds: BuildsResource,
    }
    
}

declare module gapi.client.cloudbuild {
    var operations: gapi.client.cloudbuild.OperationsResource; 
    
    var projects: gapi.client.cloudbuild.ProjectsResource; 
    
}
