// Type definitions for Google Google Storage Transfer API v1
// Project: https://cloud.google.com/storage/transfer
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.storagetransfer {
    
    interface ListOperationsResponse {
        // The standard List next-page token.
        nextPageToken?: string,
        // A list of operations that matches the specified filter in the request.
        operations?: Operation[],        
    }
    
    interface GoogleServiceAccount {
        // Required.
        accountEmail?: string,
    }
    
    interface TimeOfDay {
        // Hours of day in 24 hour format. Should be from 0 to 23. An API may choose
        // to allow the value "24:00:00" for scenarios like business closing time.
        hours?: number,
        // Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
        nanos?: number,
        // Seconds of minutes of the time. Must normally be from 0 to 59. An API may
        // allow the value 60 if it allows leap-seconds.
        seconds?: number,
        // Minutes of hour of day. Must be from 0 to 59.
        minutes?: number,
    }
    
    interface ErrorLogEntry {
        // A list of messages that carry the error details.
        errorDetails?: string[],        
        // A URL that refers to the target (a data source, a data sink,
        // or an object) with which the error is associated.
        // Required.
        url?: string,
    }
    
    interface TransferJob {
        // A description provided by the user for the job. Its max length is 1024
        // bytes when Unicode-encoded.
        description?: string,
        // This field cannot be changed by user requests.
        creationTime?: string,
        // Transfer specification.
        // Required.
        transferSpec?: TransferSpec,
        // Status of the job. This value MUST be specified for
        // `CreateTransferJobRequests`.
        // 
        // NOTE: The effect of the new job status takes place during a subsequent job
        // run. For example, if you change the job status from `ENABLED` to
        // `DISABLED`, and an operation spawned by the transfer is running, the status
        // change would not affect the current operation.
        status?: string,
        // Schedule specification.
        // Required.
        schedule?: Schedule,
        // This field cannot be changed by user requests.
        deletionTime?: string,
        // A globally unique name assigned by Storage Transfer Service when the
        // job is created. This field should be left empty in requests to create a new
        // transfer job; otherwise, the requests result in an `INVALID_ARGUMENT`
        // error.
        name?: string,
        // The ID of the Google Cloud Platform Console project that owns the job.
        // Required.
        projectId?: string,
        // This field cannot be changed by user requests.
        lastModificationTime?: string,
    }
    
    interface Schedule {
        // The last day the recurring transfer will be run. If `scheduleEndDate`
        // is the same as `scheduleStartDate`, the transfer will be executed only
        // once.
        scheduleEndDate?: Date,
        // The time in UTC at which the transfer will be scheduled to start in a day.
        // Transfers may start later than this time. If not specified, recurring and
        // one-time transfers that are scheduled to run today will run immediately;
        // recurring transfers that are scheduled to run on a future date will start
        // at approximately midnight UTC on that date. Note that when configuring a
        // transfer with the Cloud Platform Console, the transfer's start time in a
        // day is specified in your local timezone.
        startTimeOfDay?: TimeOfDay,
        // The first day the recurring transfer is scheduled to run. If
        // `scheduleStartDate` is in the past, the transfer will run for the first
        // time on the following day.
        // Required.
        scheduleStartDate?: Date,
    }
    
    interface Date {
        // Day of month. Must be from 1 to 31 and valid for the year and month, or 0
        // if specifying a year/month where the day is not significant.
        day?: number,
        // Year of date. Must be from 1 to 9999, or 0 if specifying a date without
        // a year.
        year?: number,
        // Month of year. Must be from 1 to 12.
        month?: number,
    }
    
    interface TransferOperation {
        // Summarizes errors encountered with sample error log entries.
        errorBreakdowns?: ErrorSummary[],        
        // A globally unique ID assigned by the system.
        name?: string,
        // The ID of the Google Cloud Platform Console project that owns the operation.
        // Required.
        projectId?: string,
        // End time of this transfer execution.
        endTime?: string,
        // Start time of this transfer execution.
        startTime?: string,
        // The name of the transfer job that triggers this transfer operation.
        transferJobName?: string,
        // Transfer specification.
        // Required.
        transferSpec?: TransferSpec,
        // Status of the transfer operation.
        status?: string,
        // Information about the progress of the transfer operation.
        counters?: TransferCounters,
    }
    
    interface AwsS3Data {
        // S3 Bucket name (see
        // [Creating a bucket](http://docs.aws.amazon.com/AmazonS3/latest/dev/create-bucket-get-location-example.html)).
        // Required.
        bucketName?: string,
        // AWS access key used to sign the API requests to the AWS S3 bucket.
        // Permissions on the bucket must be granted to the access ID of the
        // AWS access key.
        // Required.
        awsAccessKey?: AwsAccessKey,
    }
    
    interface Empty {
    }
    
    interface AwsAccessKey {
        // AWS access key ID.
        // Required.
        accessKeyId?: string,
        // AWS secret access key. This field is not returned in RPC responses.
        // Required.
        secretAccessKey?: string,
    }
    
    interface PauseTransferOperationRequest {
    }
    
    interface TransferCounters {
        // Bytes in the data source that failed during the transfer.
        bytesFromSourceFailed?: string,
        // Objects in the data source that failed during the transfer.
        objectsFromSourceFailed?: string,
        // Objects that are copied to the data sink.
        objectsCopiedToSink?: string,
        // Bytes found only in the data sink that are scheduled to be deleted.
        bytesFoundOnlyFromSink?: string,
        // Objects that are deleted from the data source.
        objectsDeletedFromSource?: string,
        // Bytes that are copied to the data sink.
        bytesCopiedToSink?: string,
        // Bytes found in the data source that are scheduled to be transferred,
        // which will be copied, excluded based on conditions, or skipped due to
        // failures.
        bytesFoundFromSource?: string,
        // Objects in the data source that are not transferred because they already
        // exist in the data sink.
        objectsFromSourceSkippedBySync?: string,
        // Bytes that are deleted from the data source.
        bytesDeletedFromSource?: string,
        // Objects found in the data source that are scheduled to be transferred,
        // which will be copied, excluded based on conditions, or skipped due to
        // failures.
        objectsFoundFromSource?: string,
        // Objects that failed to be deleted from the data sink.
        objectsFailedToDeleteFromSink?: string,
        // Objects that are deleted from the data sink.
        objectsDeletedFromSink?: string,
        // Objects found only in the data sink that are scheduled to be deleted.
        objectsFoundOnlyFromSink?: string,
        // Bytes in the data source that are not transferred because they already
        // exist in the data sink.
        bytesFromSourceSkippedBySync?: string,
        // Bytes that are deleted from the data sink.
        bytesDeletedFromSink?: string,
        // Bytes that failed to be deleted from the data sink.
        bytesFailedToDeleteFromSink?: string,
    }
    
    interface ErrorSummary {
        // Required.
        errorCode?: string,
        // Count of this type of error.
        // Required.
        errorCount?: string,
        // Error samples.
        errorLogEntries?: ErrorLogEntry[],        
    }
    
    interface HttpData {
        // The URL that points to the file that stores the object list entries.
        // This file must allow public access.  Currently, only URLs with HTTP and
        // HTTPS schemes are supported.
        // Required.
        listUrl?: string,
    }
    
    interface GcsData {
        // Google Cloud Storage bucket name (see
        // [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
        // Required.
        bucketName?: string,
    }
    
    interface ListTransferJobsResponse {
        // The list next page token.
        nextPageToken?: string,
        // A list of transfer jobs.
        transferJobs?: TransferJob[],        
    }
    
    interface UpdateTransferJobRequest {
        // The ID of the Google Cloud Platform Console project that owns the job.
        // Required.
        projectId?: string,
        // The field mask of the fields in `transferJob` that are to be updated in
        // this request.  Fields in `transferJob` that can be updated are:
        // `description`, `transferSpec`, and `status`.  To update the `transferSpec`
        // of the job, a complete transfer specification has to be provided. An
        // incomplete specification which misses any required fields will be rejected
        // with the error `INVALID_ARGUMENT`.
        updateTransferJobFieldMask?: string,
        // The job to update.
        // Required.
        transferJob?: TransferJob,
    }
    
    interface ObjectConditions {
        // If `includePrefixes` is specified, objects that satisfy the object
        // conditions must have names that start with one of the `includePrefixes`
        // and that do not start with any of the `excludePrefixes`. If `includePrefixes`
        // is not specified, all objects except those that have names starting with
        // one of the `excludePrefixes` must satisfy the object conditions.
        // 
        // Requirements:
        // 
        //   * Each include-prefix and exclude-prefix can contain any sequence of
        //     Unicode characters, of max length 1024 bytes when UTF8-encoded, and
        //     must not contain Carriage Return or Line Feed characters.  Wildcard
        //     matching and regular expression matching are not supported.
        // 
        //   * Each include-prefix and exclude-prefix must omit the leading slash.
        //     For example, to include the `requests.gz` object in a transfer from
        //     `s3://my-aws-bucket/logs/y=2015/requests.gz`, specify the include
        //     prefix as `logs/y=2015/requests.gz`.
        // 
        //   * None of the include-prefix or the exclude-prefix values can be empty,
        //     if specified.
        // 
        //   * Each include-prefix must include a distinct portion of the object
        //     namespace, i.e., no include-prefix may be a prefix of another
        //     include-prefix.
        // 
        //   * Each exclude-prefix must exclude a distinct portion of the object
        //     namespace, i.e., no exclude-prefix may be a prefix of another
        //     exclude-prefix.
        // 
        //   * If `includePrefixes` is specified, then each exclude-prefix must start
        //     with the value of a path explicitly included by `includePrefixes`.
        // 
        // The max size of `includePrefixes` is 1000.
        includePrefixes?: string[],        
        // `excludePrefixes` must follow the requirements described for
        // `includePrefixes`.
        // 
        // The max size of `excludePrefixes` is 1000.
        excludePrefixes?: string[],        
        // If unspecified, `minTimeElapsedSinceLastModification` takes a zero value
        // and `maxTimeElapsedSinceLastModification` takes the maximum possible
        // value of Duration. Objects that satisfy the object conditions
        // must either have a `lastModificationTime` greater or equal to
        // `NOW` - `maxTimeElapsedSinceLastModification` and less than
        // `NOW` - `minTimeElapsedSinceLastModification`, or not have a
        // `lastModificationTime`.
        minTimeElapsedSinceLastModification?: string,
        // `maxTimeElapsedSinceLastModification` is the complement to
        // `minTimeElapsedSinceLastModification`.
        maxTimeElapsedSinceLastModification?: string,
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
        // The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should have the format of `transferOperations/some/unique/name`.
        name?: string,
        // The error result of the operation in case of failure or cancellation.
        error?: Status,
        // Represents the transfer operation object.
        metadata?: any,
        // If the value is `false`, it means the operation is still in progress.
        // If true, the operation is completed, and either `error` or `response` is
        // available.
        done?: boolean,
    }
    
    interface TransferOptions {
        // Whether objects should be deleted from the source after they are
        // transferred to the sink.  Note that this option and
        // `deleteObjectsUniqueInSink` are mutually exclusive.
        deleteObjectsFromSourceAfterTransfer?: boolean,
        // Whether objects that exist only in the sink should be deleted.  Note that
        // this option and `deleteObjectsFromSourceAfterTransfer` are mutually
        // exclusive.
        deleteObjectsUniqueInSink?: boolean,
        // Whether overwriting objects that already exist in the sink is allowed.
        overwriteObjectsAlreadyExistingInSink?: boolean,
    }
    
    interface TransferSpec {
        // An AWS S3 data source.
        awsS3DataSource?: AwsS3Data,
        // An HTTP URL data source.
        httpDataSource?: HttpData,
        // Only objects that satisfy these object conditions are included in the set
        // of data source and data sink objects.  Object conditions based on
        // objects' `lastModificationTime` do not exclude objects in a data sink.
        objectConditions?: ObjectConditions,
        // A Google Cloud Storage data sink.
        gcsDataSink?: GcsData,
        // A Google Cloud Storage data source.
        gcsDataSource?: GcsData,
        // If the option `deleteObjectsUniqueInSink` is `true`, object conditions
        // based on objects' `lastModificationTime` are ignored and do not exclude
        // objects in a data source or a data sink.
        transferOptions?: TransferOptions,
    }
    
    interface ResumeTransferOperationRequest {
    }
    
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
    
    interface GoogleServiceAccountsResource {
        // Returns the Google service account that is used by Storage Transfer
        // Service to access buckets in the project where transfers
        // run or in other projects. Each Google service account is associated
        // with one Google Cloud Platform Console project. Users
        // should add this service account to the Google Cloud Storage bucket
        // ACLs to grant access to Storage Transfer Service. This service
        // account is created and owned by Storage Transfer Service and can
        // only be used by Storage Transfer Service.
        get (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
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
            // The ID of the Google Cloud Platform Console project that the Google service
            // account is associated with.
            // Required.
            projectId: string,
        }) : gapi.client.Request<GoogleServiceAccount>;        
        
    }
    
    
    interface TransferOperationsResource {
        // Pauses a transfer operation.
        pause (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
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
            // The name of the transfer operation.
            // Required.
            name: string,
        }) : gapi.client.Request<Empty>;        
        
        // This method is not supported and the server returns `UNIMPLEMENTED`.
        delete (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
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
            // The name of the operation resource to be deleted.
            name: string,
        }) : gapi.client.Request<Empty>;        
        
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
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
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
            // The list page size. The max allowed value is 256.
            pageSize?: number,
            // A list of query parameters specified as JSON text in the form of {\"project_id\" : \"my_project_id\", \"job_names\" : [\"jobid1\", \"jobid2\",...], \"operation_names\" : [\"opid1\", \"opid2\",...], \"transfer_statuses\":[\"status1\", \"status2\",...]}. Since `job_names`, `operation_names`, and `transfer_statuses` support multiple values, they must be specified with array notation. `job_names`, `operation_names`, and `transfer_statuses` are optional.
            filter?: string,
            // The list page token.
            pageToken?: string,
            // The value `transferOperations`.
            name: string,
        }) : gapi.client.Request<ListOperationsResponse>;        
        
        // Resumes a transfer operation that is paused.
        resume (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
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
            // The name of the transfer operation.
            // Required.
            name: string,
        }) : gapi.client.Request<Empty>;        
        
        // Cancels a transfer. Use the get method to check whether the cancellation succeeded or whether the operation completed despite cancellation.
        cancel (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
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
            // The name of the operation resource to be cancelled.
            name: string,
        }) : gapi.client.Request<Empty>;        
        
        // Gets the latest state of a long-running operation.  Clients can use this
        // method to poll the operation result at intervals as recommended by the API
        // service.
        get (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
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
            // The name of the operation resource.
            name: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface TransferJobsResource {
        // Lists transfer jobs.
        list (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
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
            // The list page token.
            pageToken?: string,
            // The list page size. The max allowed value is 256.
            pageSize?: number,
            // A list of query parameters specified as JSON text in the form of
            // {"project_id":"my_project_id",
            // "job_names":["jobid1","jobid2",...],
            // "job_statuses":["status1","status2",...]}.
            // Since `job_names` and `job_statuses` support multiple values, their values
            // must be specified with array notation. `project_id` is required. `job_names`
            // and `job_statuses` are optional.  The valid values for `job_statuses` are
            // case-insensitive: `ENABLED`, `DISABLED`, and `DELETED`.
            filter?: string,
        }) : gapi.client.Request<ListTransferJobsResponse>;        
        
        // Gets a transfer job.
        get (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
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
            // The ID of the Google Cloud Platform Console project that owns the job.
            // Required.
            projectId?: string,
            // The job to get.
            // Required.
            jobName: string,
        }) : gapi.client.Request<TransferJob>;        
        
        // Updates a transfer job. Updating a job's transfer spec does not affect
        // transfer operations that are running already. Updating the scheduling
        // of a job is not allowed.
        patch (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
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
            // The name of job to update.
            // Required.
            jobName: string,
        }) : gapi.client.Request<TransferJob>;        
        
        // Creates a transfer job that runs periodically.
        create (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
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
        }) : gapi.client.Request<TransferJob>;        
        
    }
    
}

declare module gapi.client.storagetransfer {
    var googleServiceAccounts: gapi.client.storagetransfer.GoogleServiceAccountsResource; 
    
    var transferOperations: gapi.client.storagetransfer.TransferOperationsResource; 
    
    var transferJobs: gapi.client.storagetransfer.TransferJobsResource; 
    
}
