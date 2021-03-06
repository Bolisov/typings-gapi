// Type definitions for Google Google Service Control API v1
// Project: https://cloud.google.com/service-control/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.servicecontrol {
    
    interface AllocateQuotaResponse {
        // Quota metrics to indicate the result of allocation. Depending on the
        // request, one or more of the following metrics will be included:
        // 
        // 1. For rate quota, per quota group or per quota metric incremental usage
        // will be specified using the following delta metric:
        //   "serviceruntime.googleapis.com/api/consumer/quota_used_count"
        // 
        // 2. For allocation quota, per quota metric total usage will be specified
        // using the following gauge metric:
        //   "serviceruntime.googleapis.com/allocation/consumer/quota_used_count"
        // 
        // 3. For both rate quota and allocation quota, the quota limit reached
        // condition will be specified using the following boolean metric:
        //   "serviceruntime.googleapis.com/quota/exceeded"
        // 
        // 4. For allocation quota, value for each quota limit associated with
        // the metrics will be specified using the following gauge metric:
        //   "serviceruntime.googleapis.com/quota/limit"
        quotaMetrics?: MetricValueSet[],        
        // The same operation_id value used in the AllocateQuotaRequest. Used for
        // logging and diagnostics purposes.
        operationId?: string,
        // ID of the actual config used to process the request.
        serviceConfigId?: string,
        // Indicates the decision of the allocate.
        allocateErrors?: QuotaError[],        
    }
    
    interface ReleaseQuotaRequest {
        // Specifies which version of service configuration should be used to process
        // the request. If unspecified or no matching version can be found, the latest
        // one will be used.
        serviceConfigId?: string,
        // Operation that describes the quota release.
        releaseOperation?: QuotaOperation,
    }
    
    interface QuotaError {
        // Free-form text that provides details on the cause of the error.
        description?: string,
        // Subject to whom this error applies. See the specific enum for more details
        // on this field. For example, "clientip:<ip address of client>" or
        // "project:<Google developer project id>".
        subject?: string,
        // Error code.
        code?: string,
    }
    
    interface RequestMetadata {
        // The user agent of the caller.
        // This information is not authenticated and should be treated accordingly.
        // For example:
        // 
        // +   `google-api-python-client/1.4.0`:
        //     The request was made by the Google API client for Python.
        // +   `Cloud SDK Command Line Tool apitools-client/1.0 gcloud/0.9.62`:
        //     The request was made by the Google Cloud SDK CLI (gcloud).
        // +   `AppEngine-Google; (+http://code.google.com/appengine; appid: s~my-project`:
        //     The request was made from the `my-project` App Engine app.
        // 
        // NOLINT
        callerSuppliedUserAgent?: string,
        // The IP address of the caller.
        callerIp?: string,
    }
    
    interface CheckInfo {
        // A list of fields and label keys that are ignored by the server.
        // The client doesn't need to send them for following requests to improve
        // performance and allow better aggregation.
        unusedArguments?: string[],        
    }
    
    interface ReleaseQuotaResponse {
        // Quota metrics to indicate the result of release. Depending on the
        // request, one or more of the following metrics will be included:
        // 
        // 1. For rate quota, per quota group or per quota metric released amount
        // will be specified using the following delta metric:
        //   "serviceruntime.googleapis.com/api/consumer/quota_refund_count"
        // 
        // 2. For allocation quota, per quota metric total usage will be specified
        // using the following gauge metric:
        //   "serviceruntime.googleapis.com/allocation/consumer/quota_used_count"
        // 
        // 3. For allocation quota, value for each quota limit associated with
        // the metrics will be specified using the following gauge metric:
        //   "serviceruntime.googleapis.com/quota/limit"
        quotaMetrics?: MetricValueSet[],        
        // The same operation_id value used in the ReleaseQuotaRequest. Used for
        // logging and diagnostics purposes.
        operationId?: string,
        // ID of the actual config used to process the request.
        serviceConfigId?: string,
        // Indicates the decision of the release.
        releaseErrors?: QuotaError[],        
    }
    
    interface AllocateQuotaRequest {
        // Allocation mode for this operation.
        // Deprecated: use QuotaMode inside the QuotaOperation.
        allocationMode?: string,
        // Specifies which version of service configuration should be used to process
        // the request. If unspecified or no matching version can be found, the latest
        // one will be used.
        serviceConfigId?: string,
        // Operation that describes the quota allocation.
        allocateOperation?: QuotaOperation,
    }
    
    interface MetricValueSet {
        // The values in this metric.
        metricValues?: MetricValue[],        
        // The metric name defined in the service configuration.
        metricName?: string,
    }
    
    interface ReportError {
        // Details of the error when processing the `Operation`.
        status?: Status,
        // The Operation.operation_id value from the request.
        operationId?: string,
    }
    
    interface StartReconciliationRequest {
        // Operation that describes the quota reconciliation.
        reconciliationOperation?: QuotaOperation,
        // Specifies which version of service configuration should be used to process
        // the request. If unspecified or no matching version can be found, the latest
        // one will be used.
        serviceConfigId?: string,
    }
    
    interface CheckError {
        // Free-form text providing details on the error cause of the error.
        detail?: string,
        // The error code.
        code?: string,
    }
    
    interface QuotaInfo {
        // Map of quota group name to the actual number of tokens consumed. If the
        // quota check was not successful, then this will not be populated due to no
        // quota consumption.
        // Deprecated: Use quota_metrics to get per quota group usage.
        quotaConsumed?: any,
        // Quota metrics to indicate the usage. Depending on the check request, one or
        // more of the following metrics will be included:
        // 
        // 1. For rate quota, per quota group or per quota metric incremental usage
        // will be specified using the following delta metric:
        //   "serviceruntime.googleapis.com/api/consumer/quota_used_count"
        // 
        // 2. For allocation quota, per quota metric total usage will be specified
        // using the following gauge metric:
        //   "serviceruntime.googleapis.com/allocation/consumer/quota_used_count"
        // 
        // 3. For both rate quota and allocation quota, the quota limit reached
        // condition will be specified using the following boolean metric:
        //   "serviceruntime.googleapis.com/quota/exceeded"
        quotaMetrics?: MetricValueSet[],        
        // Quota Metrics that have exceeded quota limits.
        // For QuotaGroup-based quota, this is QuotaGroup.name
        // For QuotaLimit-based quota, this is QuotaLimit.name
        // See: google.api.Quota
        // Deprecated: Use quota_metrics to get per quota group limit exceeded status.
        limitExceeded?: string[],        
    }
    
    interface CheckRequest {
        // Indicates if service activation check should be skipped for this request.
        // Default behavior is to perform the check and apply relevant quota.
        skipActivationCheck?: boolean,
        // Requests the project settings to be returned as part of the check response.
        requestProjectSettings?: boolean,
        // The operation to be checked.
        operation?: Operation,
        // Specifies which version of service configuration should be used to process
        // the request.
        // 
        // If unspecified or no matching version can be found, the
        // latest one will be used.
        serviceConfigId?: string,
    }
    
    interface QuotaOperation {
        // Identity of the consumer for whom this quota operation is being performed.
        // 
        // This can be in one of the following formats:
        //   project:<project_id>,
        //   project_number:<project_number>,
        //   api_key:<api_key>.
        consumerId?: string,
        // Identity of the operation. This must be unique within the scope of the
        // service that generated the operation. If the service calls AllocateQuota
        // and ReleaseQuota on the same operation, the two calls should carry the
        // same ID.
        // 
        // UUID version 4 is recommended, though not required. In scenarios where an
        // operation is computed from existing information and an idempotent id is
        // desirable for deduplication purpose, UUID version 5 is recommended. See
        // RFC 4122 for details.
        operationId?: string,
        // Quota mode for this operation.
        quotaMode?: string,
        // Fully qualified name of the API method for which this quota operation is
        // requested. This name is used for matching quota rules or metric rules and
        // billing status rules defined in service configuration. This field is not
        // required if the quota operation is performed on non-API resources.
        // 
        // Example of an RPC method name:
        //     google.example.library.v1.LibraryService.CreateShelf
        methodName?: string,
        // Represents information about this operation. Each MetricValueSet
        // corresponds to a metric defined in the service configuration.
        // The data type used in the MetricValueSet must agree with
        // the data type specified in the metric definition.
        // 
        // Within a single operation, it is not allowed to have more than one
        // MetricValue instances that have the same metric names and identical
        // label value combinations. If a request has such duplicated MetricValue
        // instances, the entire request is rejected with
        // an invalid argument error.
        quotaMetrics?: MetricValueSet[],        
        // Labels describing the operation.
        labels?: any,
    }
    
    interface EndReconciliationRequest {
        // Operation that describes the quota reconciliation.
        reconciliationOperation?: QuotaOperation,
        // Specifies which version of service configuration should be used to process
        // the request. If unspecified or no matching version can be found, the latest
        // one will be used.
        serviceConfigId?: string,
    }
    
    interface ReportInfo {
        // The Operation.operation_id value from the request.
        operationId?: string,
        // Quota usage info when processing the `Operation`.
        quotaInfo?: QuotaInfo,
    }
    
    interface Operation {
        // End time of the operation.
        // Required when the operation is used in ServiceController.Report,
        // but optional when the operation is used in ServiceController.Check.
        endTime?: string,
        // Fully qualified name of the operation. Reserved for future use.
        operationName?: string,
        // Required. Start time of the operation.
        startTime?: string,
        // DO NOT USE. This is an experimental field.
        importance?: string,
        // The resource name of the parent of a resource in the resource hierarchy.
        // 
        // This can be in one of the following formats:
        //     - “projects/<project-id or project-number>”
        //     - “folders/<folder-id>”
        //     - “organizations/<organization-id>”
        resourceContainer?: string,
        // Labels describing the operation. Only the following labels are allowed:
        // 
        // - Labels describing monitored resources as defined in
        //   the service configuration.
        // - Default labels of metric values. When specified, labels defined in the
        //   metric value override these default.
        // - The following labels defined by Google Cloud Platform:
        //     - `cloud.googleapis.com/location` describing the location where the
        //        operation happened,
        //     - `servicecontrol.googleapis.com/user_agent` describing the user agent
        //        of the API request,
        //     - `servicecontrol.googleapis.com/service_agent` describing the service
        //        used to handle the API request (e.g. ESP),
        //     - `servicecontrol.googleapis.com/platform` describing the platform
        //        where the API is served (e.g. GAE, GCE, GKE).
        labels?: any,
        // Represents information to be logged.
        logEntries?: LogEntry[],        
        // User defined labels for the resource that this operation is associated
        // with.
        userLabels?: any,
        // Represents information about this operation. Each MetricValueSet
        // corresponds to a metric defined in the service configuration.
        // The data type used in the MetricValueSet must agree with
        // the data type specified in the metric definition.
        // 
        // Within a single operation, it is not allowed to have more than one
        // MetricValue instances that have the same metric names and identical
        // label value combinations. If a request has such duplicated MetricValue
        // instances, the entire request is rejected with
        // an invalid argument error.
        metricValueSets?: MetricValueSet[],        
        // Represents the properties needed for quota check. Applicable only if this
        // operation is for a quota check request.
        quotaProperties?: QuotaProperties,
        // Identity of the consumer who is using the service.
        // This field should be filled in for the operations initiated by a
        // consumer, but not for service-initiated operations that are
        // not related to a specific consumer.
        // 
        // This can be in one of the following formats:
        //   project:<project_id>,
        //   project_number:<project_number>,
        //   api_key:<api_key>.
        consumerId?: string,
        // Identity of the operation. This must be unique within the scope of the
        // service that generated the operation. If the service calls
        // Check() and Report() on the same operation, the two calls should carry
        // the same id.
        // 
        // UUID version 4 is recommended, though not required.
        // In scenarios where an operation is computed from existing information
        // and an idempotent id is desirable for deduplication purpose, UUID version 5
        // is recommended. See RFC 4122 for details.
        operationId?: string,
    }
    
    interface ReportResponse {
        // Quota usage for each quota release `Operation` request.
        // 
        // Fully or partially failed quota release request may or may not be present
        // in `report_quota_info`. For example, a failed quota release request will
        // have the current quota usage info when precise quota library returns the
        // info. A deadline exceeded quota request will not have quota usage info.
        // 
        // If there is no quota release request, report_quota_info will be empty.
        // 
        reportInfos?: ReportInfo[],        
        // The actual config id used to process the request.
        serviceConfigId?: string,
        // Partial failures, one for each `Operation` in the request that failed
        // processing. There are three possible combinations of the RPC status:
        // 
        // 1. The combination of a successful RPC status and an empty `report_errors`
        //    list indicates a complete success where all `Operations` in the
        //    request are processed successfully.
        // 2. The combination of a successful RPC status and a non-empty
        //    `report_errors` list indicates a partial success where some
        //    `Operations` in the request succeeded. Each
        //    `Operation` that failed processing has a corresponding item
        //    in this list.
        // 3. A failed RPC status indicates a general non-deterministic failure.
        //    When this happens, it's impossible to know which of the
        //    'Operations' in the request succeeded or failed.
        reportErrors?: ReportError[],        
    }
    
    interface CheckResponse {
        // Feedback data returned from the server during processing a Check request.
        checkInfo?: CheckInfo,
        // Indicate the decision of the check.
        // 
        // If no check errors are present, the service should process the operation.
        // Otherwise the service should use the list of errors to determine the
        // appropriate action.
        checkErrors?: CheckError[],        
        // The same operation_id value used in the CheckRequest.
        // Used for logging and diagnostics purposes.
        operationId?: string,
        // The actual config id used to process the request.
        serviceConfigId?: string,
        // Quota information for the check request associated with this response.
        // 
        quotaInfo?: QuotaInfo,
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
    
    interface ReportRequest {
        // Specifies which version of service config should be used to process the
        // request.
        // 
        // If unspecified or no matching version can be found, the
        // latest one will be used.
        serviceConfigId?: string,
        // Operations to be reported.
        // 
        // Typically the service should report one operation per request.
        // Putting multiple operations into a single request is allowed, but should
        // be used only when multiple operations are natually available at the time
        // of the report.
        // 
        // If multiple operations are in a single request, the total request size
        // should be no larger than 1MB. See ReportResponse.report_errors for
        // partial failure behavior.
        operations?: Operation[],        
    }
    
    interface AuditLog {
        // The name of the service method or operation.
        // For API calls, this should be the name of the API method.
        // For example,
        // 
        //     "google.datastore.v1.Datastore.RunQuery"
        //     "google.logging.v1.LoggingService.DeleteLog"
        methodName?: string,
        // The resource or collection that is the target of the operation.
        // The name is a scheme-less URI, not including the API service name.
        // For example:
        // 
        //     "shelves/SHELF_ID/books"
        //     "shelves/SHELF_ID/books/BOOK_ID"
        resourceName?: string,
        // Authorization information. If there are multiple
        // resources or permissions involved, then there is
        // one AuthorizationInfo element for each {resource, permission} tuple.
        authorizationInfo?: AuthorizationInfo[],        
        // The operation request. This may not include all request parameters,
        // such as those that are too large, privacy-sensitive, or duplicated
        // elsewhere in the log record.
        // It should never include user-generated data, such as file contents.
        // When the JSON object represented here has a proto equivalent, the proto
        // name will be indicated in the `@type` property.
        request?: any,
        // Other service-specific data about the request, response, and other
        // activities.
        serviceData?: any,
        // Metadata about the operation.
        requestMetadata?: RequestMetadata,
        // The number of items returned from a List or Query API method,
        // if applicable.
        numResponseItems?: string,
        // The status of the overall operation.
        status?: Status,
        // Authentication information.
        authenticationInfo?: AuthenticationInfo,
        // The operation response. This may not include all response elements,
        // such as those that are too large, privacy-sensitive, or duplicated
        // elsewhere in the log record.
        // It should never include user-generated data, such as file contents.
        // When the JSON object represented here has a proto equivalent, the proto
        // name will be indicated in the `@type` property.
        response?: any,
        // The name of the API service performing the operation. For example,
        // `"datastore.googleapis.com"`.
        serviceName?: string,
    }
    
    interface LogEntry {
        // A set of user-defined (key, value) data that provides additional
        // information about the log entry.
        labels?: any,
        // The severity of the log entry. The default value is
        // `LogSeverity.DEFAULT`.
        severity?: string,
        // Required. The log to which this log entry belongs. Examples: `"syslog"`,
        // `"book_log"`.
        name?: string,
        // A unique ID for the log entry used for deduplication. If omitted,
        // the implementation will generate one based on operation_id.
        insertId?: string,
        // The log entry payload, represented as a structure that
        // is expressed as a JSON object.
        structPayload?: any,
        // The log entry payload, represented as a Unicode string (UTF-8).
        textPayload?: string,
        // The log entry payload, represented as a protocol buffer that is
        // expressed as a JSON object. You can only pass `protoPayload`
        // values that belong to a set of approved types.
        protoPayload?: any,
        // The time the event described by the log entry occurred. If
        // omitted, defaults to operation start time.
        timestamp?: string,
    }
    
    interface MetricValue {
        // A signed 64-bit integer value.
        int64Value?: string,
        // A distribution value.
        distributionValue?: Distribution,
        // A boolean value.
        boolValue?: boolean,
        // The end of the time period over which this metric value's measurement
        // applies.
        endTime?: string,
        // The start of the time period over which this metric value's measurement
        // applies. The time period has different semantics for different metric
        // types (cumulative, delta, and gauge). See the metric definition
        // documentation in the service configuration for details.
        startTime?: string,
        // A money value.
        moneyValue?: Money,
        // The labels describing the metric value.
        // See comments on google.api.servicecontrol.v1.Operation.labels for
        // the overriding relationship.
        labels?: any,
        // A text string value.
        stringValue?: string,
        // A double precision floating point value.
        doubleValue?: number,
    }
    
    interface EndReconciliationResponse {
        // Indicates the decision of the reconciliation end.
        reconciliationErrors?: QuotaError[],        
        // The same operation_id value used in the EndReconciliationRequest. Used for
        // logging and diagnostics purposes.
        operationId?: string,
        // ID of the actual config used to process the request.
        serviceConfigId?: string,
        // Metric values as tracked by One Platform before the adjustment was made.
        // The following metrics will be included:
        // 
        // 1. Per quota metric total usage will be specified using the following gauge
        // metric:
        //   "serviceruntime.googleapis.com/allocation/consumer/quota_used_count"
        // 
        // 2. Value for each quota limit associated with the metrics will be specified
        // using the following gauge metric:
        //   "serviceruntime.googleapis.com/quota/limit"
        // 
        // 3. Delta value of the usage after the reconciliation for limits associated
        // with the metrics will be specified using the following metric:
        //   "serviceruntime.googleapis.com/allocation/reconciliation_delta"
        // The delta value is defined as:
        //   new_usage_from_client - existing_value_in_spanner.
        // This metric is not defined in serviceruntime.yaml or in Cloud Monarch.
        // This metric is meant for callers' use only. Since this metric is not
        // defined in the monitoring backend, reporting on this metric will result in
        // an error.
        quotaMetrics?: MetricValueSet[],        
    }
    
    interface Money {
        // Number of nano (10^-9) units of the amount.
        // The value must be between -999,999,999 and +999,999,999 inclusive.
        // If `units` is positive, `nanos` must be positive or zero.
        // If `units` is zero, `nanos` can be positive, zero, or negative.
        // If `units` is negative, `nanos` must be negative or zero.
        // For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
        nanos?: number,
        // The whole units of the amount.
        // For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
        units?: string,
        // The 3-letter currency code defined in ISO 4217.
        currencyCode?: string,
    }
    
    interface Distribution {
        // The maximum of the population of values. Ignored if `count` is zero.
        maximum?: number,
        // The sum of squared deviations from the mean:
        //   Sum[i=1..count]((x_i - mean)^2)
        // where each x_i is a sample values. If `count` is zero then this field
        // must be zero, otherwise validation of the request fails.
        sumOfSquaredDeviation?: number,
        // Buckets with exponentially growing width.
        exponentialBuckets?: ExponentialBuckets,
        // The minimum of the population of values. Ignored if `count` is zero.
        minimum?: number,
        // Buckets with constant width.
        linearBuckets?: LinearBuckets,
        // The arithmetic mean of the samples in the distribution. If `count` is
        // zero then this field must be zero.
        mean?: number,
        // The total number of samples in the distribution. Must be >= 0.
        count?: string,
        // The number of samples in each histogram bucket. `bucket_counts` are
        // optional. If present, they must sum to the `count` value.
        // 
        // The buckets are defined below in `bucket_option`. There are N buckets.
        // `bucket_counts[0]` is the number of samples in the underflow bucket.
        // `bucket_counts[1]` to `bucket_counts[N-1]` are the numbers of samples
        // in each of the finite buckets. And `bucket_counts[N] is the number
        // of samples in the overflow bucket. See the comments of `bucket_option`
        // below for more details.
        // 
        // Any suffix of trailing zeros may be omitted.
        bucketCounts?: string[],        
        // Buckets with arbitrary user-provided width.
        explicitBuckets?: ExplicitBuckets,
    }
    
    interface ExplicitBuckets {
        // 'bound' is a list of strictly increasing boundaries between
        // buckets. Note that a list of length N-1 defines N buckets because
        // of fenceposting. See comments on `bucket_options` for details.
        // 
        // The i'th finite bucket covers the interval
        //   [bound[i-1], bound[i])
        // where i ranges from 1 to bound_size() - 1. Note that there are no
        // finite buckets at all if 'bound' only contains a single element; in
        // that special case the single bound defines the boundary between the
        // underflow and overflow buckets.
        // 
        // bucket number                   lower bound    upper bound
        //  i == 0 (underflow)              -inf           bound[i]
        //  0 < i < bound_size()            bound[i-1]     bound[i]
        //  i == bound_size() (overflow)    bound[i-1]     +inf
        bounds?: number[],        
    }
    
    interface ExponentialBuckets {
        // The number of finite buckets. With the underflow and overflow buckets,
        // the total number of buckets is `num_finite_buckets` + 2.
        // See comments on `bucket_options` for details.
        numFiniteBuckets?: number,
        // The i'th exponential bucket covers the interval
        //   [scale * growth_factor^(i-1), scale * growth_factor^i)
        // where i ranges from 1 to num_finite_buckets inclusive.
        // Must be larger than 1.0.
        growthFactor?: number,
        // The i'th exponential bucket covers the interval
        //   [scale * growth_factor^(i-1), scale * growth_factor^i)
        // where i ranges from 1 to num_finite_buckets inclusive.
        // Must be > 0.
        scale?: number,
    }
    
    interface AuthorizationInfo {
        // The resource being accessed, as a REST-style string. For example:
        // 
        //     bigquery.googlapis.com/projects/PROJECTID/datasets/DATASETID
        resource?: string,
        // Whether or not authorization for `resource` and `permission`
        // was granted.
        granted?: boolean,
        // The required IAM permission.
        permission?: string,
    }
    
    interface StartReconciliationResponse {
        // Indicates the decision of the reconciliation start.
        reconciliationErrors?: QuotaError[],        
        // The same operation_id value used in the StartReconciliationRequest. Used
        // for logging and diagnostics purposes.
        operationId?: string,
        // ID of the actual config used to process the request.
        serviceConfigId?: string,
        // Metric values as tracked by One Platform before the start of
        // reconciliation. The following metrics will be included:
        // 
        // 1. Per quota metric total usage will be specified using the following gauge
        // metric:
        //   "serviceruntime.googleapis.com/allocation/consumer/quota_used_count"
        // 
        // 2. Value for each quota limit associated with the metrics will be specified
        // using the following gauge metric:
        //   "serviceruntime.googleapis.com/quota/limit"
        quotaMetrics?: MetricValueSet[],        
    }
    
    interface QuotaProperties {
        // LimitType IDs that should be used for checking quota. Key in this map
        // should be a valid LimitType string, and the value is the ID to be used. For
        // example, an entry <USER, 123> will cause all user quota limits to use 123
        // as the user ID. See google/api/quota.proto for the definition of LimitType.
        // CLIENT_PROJECT: Not supported.
        // USER: Value of this entry will be used for enforcing user-level quota
        //       limits. If none specified, caller IP passed in the
        //       servicecontrol.googleapis.com/caller_ip label will be used instead.
        //       If the server cannot resolve a value for this LimitType, an error
        //       will be thrown. No validation will be performed on this ID.
        // Deprecated: use servicecontrol.googleapis.com/user label to send user ID.
        limitByIds?: any,
        // Quota mode for this operation.
        quotaMode?: string,
    }
    
    interface LinearBuckets {
        // The i'th linear bucket covers the interval
        //   [offset + (i-1) * width, offset + i * width)
        // where i ranges from 1 to num_finite_buckets, inclusive.
        offset?: number,
        // The number of finite buckets. With the underflow and overflow buckets,
        // the total number of buckets is `num_finite_buckets` + 2.
        // See comments on `bucket_options` for details.
        numFiniteBuckets?: number,
        // The i'th linear bucket covers the interval
        //   [offset + (i-1) * width, offset + i * width)
        // where i ranges from 1 to num_finite_buckets, inclusive.
        // Must be strictly positive.
        width?: number,
    }
    
    interface AuthenticationInfo {
        // The email address of the authenticated user making the request.
        principalEmail?: string,
        // The authority selector specified by the requestor, if any.
        // It is not guaranteed that the principal was allowed to use this authority.
        authoritySelector?: string,
    }
    
    interface ServicesResource {
        // Attempts to allocate quota for the specified consumer. It should be called
        // before the operation is executed.
        // 
        // This method requires the `servicemanagement.services.quota`
        // permission on the specified service. For more information, see
        // [Google Cloud IAM](https://cloud.google.com/iam).
        // 
        // **NOTE:** the client code **must** fail-open if the server returns one
        // of the following quota errors:
        // -   `PROJECT_STATUS_UNAVAILABLE`
        // -   `SERVICE_STATUS_UNAVAILABLE`
        // -   `BILLING_STATUS_UNAVAILABLE`
        // -   `QUOTA_SYSTEM_UNAVAILABLE`
        // 
        // The server may inject above errors to prohibit any hard dependency
        // on the quota system.
        allocateQuota (request: {        
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
            // Name of the service as specified in the service configuration. For example,
            // `"pubsub.googleapis.com"`.
            // 
            // See google.api.Service for the definition of a service name.
            serviceName: string,
        }) : gapi.client.Request<AllocateQuotaResponse>;        
        
        // Unlike rate quota, allocation quota does not get refilled periodically.
        // So, it is possible that the quota usage as seen by the service differs from
        // what the One Platform considers the usage is. This is expected to happen
        // only rarely, but over time this can accumulate. Services can invoke
        // StartReconciliation and EndReconciliation to correct this usage drift, as
        // described below:
        // 1. Service sends StartReconciliation with a timestamp in future for each
        //    metric that needs to be reconciled. The timestamp being in future allows
        //    to account for in-flight AllocateQuota and ReleaseQuota requests for the
        //    same metric.
        // 2. One Platform records this timestamp and starts tracking subsequent
        //    AllocateQuota and ReleaseQuota requests until EndReconciliation is
        //    called.
        // 3. At or after the time specified in the StartReconciliation, service
        //    sends EndReconciliation with the usage that needs to be reconciled to.
        // 4. One Platform adjusts its own record of usage for that metric to the
        //    value specified in EndReconciliation by taking in to account any
        //    allocation or release between StartReconciliation and EndReconciliation.
        // 
        // Signals the quota controller that the service wants to perform a usage
        // reconciliation as specified in the request.
        // 
        // This method requires the `servicemanagement.services.quota`
        // permission on the specified service. For more information, see
        // [Google Cloud IAM](https://cloud.google.com/iam).
        startReconciliation (request: {        
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
            // Name of the service as specified in the service configuration. For example,
            // `"pubsub.googleapis.com"`.
            // 
            // See google.api.Service for the definition of a service name.
            serviceName: string,
        }) : gapi.client.Request<StartReconciliationResponse>;        
        
        // Checks an operation with Google Service Control to decide whether
        // the given operation should proceed. It should be called before the
        // operation is executed.
        // 
        // If feasible, the client should cache the check results and reuse them for
        // 60 seconds. In case of server errors, the client can rely on the cached
        // results for longer time.
        // 
        // NOTE: the `CheckRequest` has the size limit of 64KB.
        // 
        // This method requires the `servicemanagement.services.check` permission
        // on the specified service. For more information, see
        // [Google Cloud IAM](https://cloud.google.com/iam).
        check (request: {        
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
            // The service name as specified in its service configuration. For example,
            // `"pubsub.googleapis.com"`.
            // 
            // See google.api.Service for the definition of a service name.
            serviceName: string,
        }) : gapi.client.Request<CheckResponse>;        
        
        // Releases previously allocated quota done through AllocateQuota method.
        // 
        // This method requires the `servicemanagement.services.quota`
        // permission on the specified service. For more information, see
        // [Google Cloud IAM](https://cloud.google.com/iam).
        // 
        // **NOTE:** the client code **must** fail-open if the server returns one
        // of the following quota errors:
        // -   `PROJECT_STATUS_UNAVAILABLE`
        // -   `SERVICE_STATUS_UNAVAILABLE`
        // -   `BILLING_STATUS_UNAVAILABLE`
        // -   `QUOTA_SYSTEM_UNAVAILABLE`
        // 
        // The server may inject above errors to prohibit any hard dependency
        // on the quota system.
        releaseQuota (request: {        
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
            // Name of the service as specified in the service configuration. For example,
            // `"pubsub.googleapis.com"`.
            // 
            // See google.api.Service for the definition of a service name.
            serviceName: string,
        }) : gapi.client.Request<ReleaseQuotaResponse>;        
        
        // Signals the quota controller that service ends the ongoing usage
        // reconciliation.
        // 
        // This method requires the `servicemanagement.services.quota`
        // permission on the specified service. For more information, see
        // [Google Cloud IAM](https://cloud.google.com/iam).
        endReconciliation (request: {        
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
            // Name of the service as specified in the service configuration. For example,
            // `"pubsub.googleapis.com"`.
            // 
            // See google.api.Service for the definition of a service name.
            serviceName: string,
        }) : gapi.client.Request<EndReconciliationResponse>;        
        
        // Reports operation results to Google Service Control, such as logs and
        // metrics. It should be called after an operation is completed.
        // 
        // If feasible, the client should aggregate reporting data for up to 5
        // seconds to reduce API traffic. Limiting aggregation to 5 seconds is to
        // reduce data loss during client crashes. Clients should carefully choose
        // the aggregation time window to avoid data loss risk more than 0.01%
        // for business and compliance reasons.
        // 
        // NOTE: the `ReportRequest` has the size limit of 1MB.
        // 
        // This method requires the `servicemanagement.services.report` permission
        // on the specified service. For more information, see
        // [Google Cloud IAM](https://cloud.google.com/iam).
        report (request: {        
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
            // The service name as specified in its service configuration. For example,
            // `"pubsub.googleapis.com"`.
            // 
            // See google.api.Service for the definition of a service name.
            serviceName: string,
        }) : gapi.client.Request<ReportResponse>;        
        
    }
    
}

declare module gapi.client.servicecontrol {
    var services: gapi.client.servicecontrol.ServicesResource; 
    
}
