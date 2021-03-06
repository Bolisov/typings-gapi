// Type definitions for Google Stackdriver Logging API v2
// Project: https://cloud.google.com/logging/docs/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.logging {
    
    interface ListLogEntriesResponse {
        // If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.If a value for next_page_token appears and the entries field is empty, it means that the search found no log entries so far but it did not have time to search all the possible log entries. Retry the method with this value for page_token to continue the search. Alternatively, consider speeding up the search by changing your filter to specify a single log name or resource type, or to narrow the time range of the search.
        nextPageToken?: string,
        // A list of log entries.
        entries?: LogEntry[],        
    }
    
    interface LogLine {
        // App-provided log message.
        logMessage?: string,
        // Severity of this log entry.
        severity?: string,
        // Where in the source code this log message was written.
        sourceLocation?: SourceLocation,
        // Approximate time when this log entry was made.
        time?: string,
    }
    
    interface ListLogMetricsResponse {
        // If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.
        nextPageToken?: string,
        // A list of logs-based metrics.
        metrics?: LogMetric[],        
    }
    
    interface Empty {
    }
    
    interface LogEntry {
        // Optional. Resource name of the trace associated with the log entry, if any. If it contains a relative resource name, the name is assumed to be relative to //tracing.googleapis.com. Example: projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824
        trace?: string,
        // Optional. A set of user-defined (key, value) data that provides additional information about the log entry.
        labels?: any,
        // Optional. The severity of the log entry. The default value is LogSeverity.DEFAULT.
        severity?: string,
        // Optional. Source code location information associated with the log entry, if any.
        sourceLocation?: LogEntrySourceLocation,
        // Optional. The time the event described by the log entry occurred. If omitted in a new log entry, Stackdriver Logging will insert the time the log entry is received. Stackdriver Logging might reject log entries whose time stamps are more than a couple of hours in the future. Log entries with time stamps in the past are accepted.
        timestamp?: string,
        // Output only. The time the log entry was received by Stackdriver Logging.
        receiveTimestamp?: string,
        // Required. The resource name of the log to which this log entry belongs:
        // "projects/[PROJECT_ID]/logs/[LOG_ID]"
        // "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
        // "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
        // "folders/[FOLDER_ID]/logs/[LOG_ID]"
        // [LOG_ID] must be URL-encoded within log_name. Example: "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". [LOG_ID] must be less than 512 characters long and can only include the following characters: upper and lower case alphanumeric characters, forward-slash, underscore, hyphen, and period.For backward compatibility, if log_name begins with a forward-slash, such as /projects/..., then the log entry is ingested as usual but the forward-slash is removed. Listing the log entry will not show the leading slash and filtering for a log name with a leading slash will never return any results.
        logName?: string,
        // Required. The monitored resource associated with this log entry. Example: a log entry that reports a database error would be associated with the monitored resource designating the particular database that reported the error.
        resource?: MonitoredResource,
        // Optional. Information about the HTTP request associated with this log entry, if applicable.
        httpRequest?: HttpRequest,
        // The log entry payload, represented as a structure that is expressed as a JSON object.
        jsonPayload?: any,
        // Optional. Information about an operation associated with the log entry, if applicable.
        operation?: LogEntryOperation,
        // Optional. A unique identifier for the log entry. If you provide a value, then Stackdriver Logging considers other log entries in the same project, with the same timestamp, and with the same insert_id to be duplicates which can be removed. If omitted in new log entries, then Stackdriver Logging will insert its own unique identifier. The insert_id is used to order log entries that have the same timestamp value.
        insertId?: string,
        // The log entry payload, represented as a Unicode string (UTF-8).
        textPayload?: string,
        // The log entry payload, represented as a protocol buffer. Some Google Cloud Platform services use this field for their log entry payloads.
        protoPayload?: any,
    }
    
    interface SourceLocation {
        // Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information is used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: qual.if.ied.Class.method (Java), dir/package.func (Go), function (Python).
        functionName?: string,
        // Line within the source file.
        line?: string,
        // Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name.
        file?: string,
    }
    
    interface ListLogEntriesRequest {
        // Optional. If present, then retrieve the next batch of results from the preceding call to this method. page_token must be the value of next_page_token from the previous response. The values of other method parameters should be identical to those in the previous call.
        pageToken?: string,
        // Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of next_page_token in the response indicates that more results might be available.
        pageSize?: number,
        // Optional. How the results should be sorted. Presently, the only permitted values are "timestamp asc" (default) and "timestamp desc". The first option returns entries in order of increasing values of LogEntry.timestamp (oldest first), and the second option returns entries in order of decreasing timestamps (newest first). Entries with equal timestamps are returned in order of their insert_id values.
        orderBy?: string,
        // Required. Names of one or more parent resources from which to retrieve log entries:
        // "projects/[PROJECT_ID]"
        // "organizations/[ORGANIZATION_ID]"
        // "billingAccounts/[BILLING_ACCOUNT_ID]"
        // "folders/[FOLDER_ID]"
        // Projects listed in the project_ids field are added to this list.
        resourceNames?: string[],        
        // Deprecated. Use resource_names instead. One or more project identifiers or project numbers from which to retrieve log entries. Example: "my-project-1A". If present, these project identifiers are converted to resource name format and added to the list of resources in resource_names.
        projectIds?: string[],        
        // Optional. A filter that chooses which log entries to return. See Advanced Logs Filters. Only log entries that match the filter are returned. An empty filter matches all log entries in the resources listed in resource_names. Referencing a parent resource that is not listed in resource_names will cause the filter to return no results. The maximum length of the filter is 20000 characters.
        filter?: string,
    }
    
    interface RequestLog {
        // Module of the application that handled this request.
        moduleId?: string,
        // Time when the request finished.
        endTime?: string,
        // User agent that made the request.
        userAgent?: string,
        // Whether this was a loading request for the instance.
        wasLoadingRequest?: boolean,
        // Source code for the application that handled this request. There can be more than one source reference per deployed application if source code is distributed among multiple repositories.
        sourceReference?: SourceReference[],        
        // Size in bytes sent back to client by request.
        responseSize?: string,
        // Stackdriver Trace identifier for this request.
        traceId?: string,
        // A list of log lines emitted by the application while serving this request.
        line?: LogLine[],        
        // Queue name of the request, in the case of an offline request.
        taskQueueName?: string,
        // Referrer URL of request.
        referrer?: string,
        // Globally unique identifier for a request, which is based on the request start time. Request IDs for requests which started later will compare greater as strings than those for requests which started earlier.
        requestId?: string,
        // The logged-in user who made the request.Most likely, this is the part of the user's email before the @ sign. The field value is the same for different requests from the same user, but different users can have similar names. This information is also available to the application via the App Engine Users API.This field will be populated starting with App Engine 1.9.21.
        nickname?: string,
        // Time this request spent in the pending request queue.
        pendingTime?: string,
        // Contains the path and query portion of the URL that was requested. For example, if the URL was "http://example.com/app?name=val", the resource would be "/app?name=val". The fragment identifier, which is identified by the # character, is not included.
        resource?: string,
        // HTTP response status code. Example: 200, 404.
        status?: number,
        // Task name of the request, in the case of an offline request.
        taskName?: string,
        // File or class that handled the request.
        urlMapEntry?: string,
        // If the instance processing this request belongs to a manually scaled module, then this is the 0-based index of the instance. Otherwise, this value is -1.
        instanceIndex?: number,
        // Whether this request is finished or active.
        finished?: boolean,
        // Internet host and port number of the resource being requested.
        host?: string,
        // HTTP version of request. Example: "HTTP/1.1".
        httpVersion?: string,
        // Time when the request started.
        startTime?: string,
        // Latency of the request.
        latency?: string,
        // Origin IP address.
        ip?: string,
        // Application that handled this request.
        appId?: string,
        // App Engine release version.
        appEngineRelease?: string,
        // Request method. Example: "GET", "HEAD", "PUT", "POST", "DELETE".
        method?: string,
        // An indication of the relative cost of serving this request.
        cost?: number,
        // An identifier for the instance that handled the request.
        instanceId?: string,
        // Number of CPU megacycles used to process request.
        megaCycles?: string,
        // Whether this is the first RequestLog entry for this request. If an active request has several RequestLog entries written to Stackdriver Logging, then this field will be set for one of them.
        first?: boolean,
        // Version of the application that handled this request.
        versionId?: string,
    }
    
    interface ListMonitoredResourceDescriptorsResponse {
        // If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.
        nextPageToken?: string,
        // A list of resource descriptors.
        resourceDescriptors?: MonitoredResourceDescriptor[],        
    }
    
    interface SourceReference {
        // Optional. A URI string identifying the repository. Example: "https://github.com/GoogleCloudPlatform/kubernetes.git"
        repository?: string,
        // The canonical and persistent identifier of the deployed revision. Example (git): "0035781c50ec7aa23385dc841529ce8a4b70db1b"
        revisionId?: string,
    }
    
    interface LogMetric {
        // Required. The client-assigned metric identifier. Examples: "error_count", "nginx/requests".Metric identifiers are limited to 100 characters and can include only the following characters: A-Z, a-z, 0-9, and the special characters _-.,+!*',()%/. The forward-slash character (/) denotes a hierarchy of name pieces, and it cannot be the first character of the name.The metric identifier in this field must not be URL-encoded (https://en.wikipedia.org/wiki/Percent-encoding). However, when the metric identifier appears as the [METRIC_ID] part of a metric_name API parameter, then the metric identifier must be URL-encoded. Example: "projects/my-project/metrics/nginx%2Frequests".
        name?: string,
        // Optional. A description of this metric, which is used in documentation.
        description?: string,
        // Output only. The API version that created or updated this metric. The version also dictates the syntax of the filter expression. When a value for this field is missing, the default value of V2 should be assumed.
        version?: string,
        // Required. An advanced logs filter which is used to match log entries. Example:
        // "resource.type=gae_app AND severity>=ERROR"
        // The maximum length of the filter is 20000 characters.
        filter?: string,
    }
    
    interface WriteLogEntriesResponse {
    }
    
    interface LogEntryOperation {
        // Optional. Set this to True if this is the last log entry in the operation.
        last?: boolean,
        // Optional. An arbitrary operation identifier. Log entries with the same identifier are assumed to be part of the same operation.
        id?: string,
        // Optional. Set this to True if this is the first log entry in the operation.
        first?: boolean,
        // Optional. An arbitrary producer identifier. The combination of id and producer must be globally unique. Examples for producer: "MyDivision.MyBigCompany.com", "github.com/MyProject/MyApplication".
        producer?: string,
    }
    
    interface MonitoredResource {
        // Required. The monitored resource type. This field must match the type field of a MonitoredResourceDescriptor object. For example, the type of a Compute Engine VM instance is gce_instance.
        type?: string,
        // Required. Values for all of the labels listed in the associated monitored resource descriptor. For example, Compute Engine VM instances use the labels "project_id", "instance_id", and "zone".
        labels?: any,
    }
    
    interface LogSink {
        // Optional. This field applies only to sinks owned by organizations and folders. If the field is false, the default, only the logs owned by the sink's parent resource are available for export. If the field is true, then logs from all the projects, folders, and billing accounts contained in the sink's parent resource are also available for export. Whether a particular log entry from the children is exported depends on the sink's filter expression. For example, if this field is true, then the filter resource.type=gce_instance would export all Compute Engine VM instance log entries from all projects in the sink's parent. To only export entries from certain child projects, filter on the project part of the log name:
        // logName:("projects/test-project1/" OR "projects/test-project2/") AND
        // resource.type=gce_instance
        // 
        includeChildren?: boolean,
        // Required. The export destination:
        // "storage.googleapis.com/[GCS_BUCKET]"
        // "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]"
        // "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]"
        // The sink's writer_identity, set when the sink is created, must have permission to write to the destination or else the log entries are not exported. For more information, see Exporting Logs With Sinks.
        destination?: string,
        // Optional. An advanced logs filter. The only exported log entries are those that are in the resource owning the sink and that match the filter. The filter must use the log entry format specified by the output_version_format parameter. For example, in the v2 format:
        // logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity>=ERROR
        // 
        filter?: string,
        // Optional. The time at which this sink will stop exporting log entries. Log entries are exported only if their timestamp is earlier than the end time. If this field is not supplied, there is no end time. If both a start time and an end time are provided, then the end time must be later than the start time.
        endTime?: string,
        // Optional. The time at which this sink will begin exporting log entries. Log entries are exported only if their timestamp is not earlier than the start time. The default value of this field is the time the sink is created or updated.
        startTime?: string,
        // Output only. An IAM identity&mdash;a service account or group&mdash;under which Stackdriver Logging writes the exported log entries to the sink's destination. This field is set by sinks.create and sinks.update, based on the setting of unique_writer_identity in those methods.Until you grant this identity write-access to the destination, log entry exports from this sink will fail. For more information, see Granting access for a resource. Consult the destination service's documentation to determine the appropriate IAM roles to assign to the identity.
        writerIdentity?: string,
        // Optional. The log entry format to use for this sink's exported log entries. The v2 format is used by default. The v1 format is deprecated and should be used only as part of a migration effort to v2. See Migration to the v2 API.
        outputVersionFormat?: string,
        // Required. The client-assigned sink identifier, unique within the project. Example: "my-syslog-errors-to-pubsub". Sink identifiers are limited to 100 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, and periods.
        name?: string,
    }
    
    interface WriteLogEntriesRequest {
        // Required. The log entries to write. Values supplied for the fields log_name, resource, and labels in this entries.write request are inserted into those log entries in this list that do not provide their own values.Stackdriver Logging also creates and inserts values for timestamp and insert_id if the entries do not provide them. The created insert_id for the N'th entry in this list will be greater than earlier entries and less than later entries. Otherwise, the order of log entries in this list does not matter.To improve throughput and to avoid exceeding the quota limit for calls to entries.write, you should write multiple log entries at once rather than calling this method for each individual log entry.
        entries?: LogEntry[],        
        // Optional. A default log resource name that is assigned to all log entries in entries that do not specify a value for log_name:
        // "projects/[PROJECT_ID]/logs/[LOG_ID]"
        // "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
        // "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
        // "folders/[FOLDER_ID]/logs/[LOG_ID]"
        // [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog" or "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
        logName?: string,
        // Optional. Whether valid entries should be written even if some other entries fail due to INVALID_ARGUMENT or PERMISSION_DENIED errors. If any entry is not written, then the response status is the error associated with one of the failed entries and the response includes error details keyed by the entries' zero-based index in the entries.write method.
        partialSuccess?: boolean,
        // Optional. Default labels that are added to the labels field of all log entries in entries. If a log entry already has a label with the same key as a label in this parameter, then the log entry's label is not changed. See LogEntry.
        labels?: any,
        // Optional. A default monitored resource object that is assigned to all log entries in entries that do not specify a value for resource. Example:
        // { "type": "gce_instance",
        //   "labels": {
        //     "zone": "us-central1-a", "instance_id": "00000000000000000000" }}
        // See LogEntry.
        resource?: MonitoredResource,
    }
    
    interface ListLogsResponse {
        // If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.
        nextPageToken?: string,
        // A list of log names. For example, "projects/my-project/syslog" or "organizations/123/cloudresourcemanager.googleapis.com%2Factivity".
        logNames?: string[],        
    }
    
    interface ListSinksResponse {
        // If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.
        nextPageToken?: string,
        // A list of sinks.
        sinks?: LogSink[],        
    }
    
    interface HttpRequest {
        // The referer URL of the request, as defined in HTTP/1.1 Header Field Definitions (http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
        referer?: string,
        // The request processing latency on the server, from the time the request was received until the response was sent.
        latency?: string,
        // The user agent sent by the client. Example: "Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)".
        userAgent?: string,
        // The number of HTTP response bytes inserted into cache. Set only when a cache fill was attempted.
        cacheFillBytes?: string,
        // The request method. Examples: "GET", "HEAD", "PUT", "POST".
        requestMethod?: string,
        // The size of the HTTP response message sent back to the client, in bytes, including the response headers and the response body.
        responseSize?: string,
        // The size of the HTTP request message in bytes, including the request headers and the request body.
        requestSize?: string,
        // The scheme (http, https), the host name, the path and the query portion of the URL that was requested. Example: "http://example.com/some/info?color=red".
        requestUrl?: string,
        // The IP address (IPv4 or IPv6) of the origin server that the request was sent to.
        serverIp?: string,
        // The IP address (IPv4 or IPv6) of the client that issued the HTTP request. Examples: "192.168.1.1", "FE80::0202:B3FF:FE1E:8329".
        remoteIp?: string,
        // Whether or not a cache lookup was attempted.
        cacheLookup?: boolean,
        // Whether or not an entity was served from cache (with or without validation).
        cacheHit?: boolean,
        // Whether or not the response was validated with the origin server before being served from cache. This field is only meaningful if cache_hit is True.
        cacheValidatedWithOriginServer?: boolean,
        // The response code indicating the status of response. Examples: 200, 404.
        status?: number,
    }
    
    interface LabelDescriptor {
        // The label key.
        key?: string,
        // A human-readable description for the label.
        description?: string,
        // The type of data that can be assigned to the label.
        valueType?: string,
    }
    
    interface MonitoredResourceDescriptor {
        // Optional. The resource name of the monitored resource descriptor: "projects/{project_id}/monitoredResourceDescriptors/{type}" where {type} is the value of the type field in this object and {project_id} is a project ID that provides API-specific context for accessing the type. APIs that do not use project information can use the resource name format "monitoredResourceDescriptors/{type}".
        name?: string,
        // Optional. A detailed description of the monitored resource type that might be used in documentation.
        description?: string,
        // Optional. A concise name for the monitored resource type that might be displayed in user interfaces. It should be a Title Cased Noun Phrase, without any article or other determiners. For example, "Google Cloud SQL Database".
        displayName?: string,
        // Required. The monitored resource type. For example, the type "cloudsql_database" represents databases in Google Cloud SQL. The maximum length of this value is 256 characters.
        type?: string,
        // Required. A set of labels used to describe instances of this monitored resource type. For example, an individual Google Cloud SQL database is identified by values for the labels "database_id" and "zone".
        labels?: LabelDescriptor[],        
    }
    
    interface LogEntrySourceLocation {
        // Optional. Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name.
        file?: string,
        // Optional. Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information may be used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: qual.if.ied.Class.method (Java), dir/package.func (Go), function (Python).
        function?: string,
        // Optional. Line within the source file. 1-based; 0 indicates no line number available.
        line?: string,
    }
    
    interface SinksResource {
        // Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
        delete (request: {        
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
            // Required. The full resource name of the sink to delete, including the parent resource and the sink identifier:
            // "projects/[PROJECT_ID]/sinks/[SINK_ID]"
            // "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
            // "folders/[FOLDER_ID]/sinks/[SINK_ID]"
            // Example: "projects/my-project-id/sinks/my-sink-id".
            sinkName: string,
        }) : gapi.client.Request<Empty>;        
        
        // Gets a sink.
        get (request: {        
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
            // Required. The resource name of the sink:
            // "projects/[PROJECT_ID]/sinks/[SINK_ID]"
            // "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
            // "folders/[FOLDER_ID]/sinks/[SINK_ID]"
            // Example: "projects/my-project-id/sinks/my-sink-id".
            sinkName: string,
        }) : gapi.client.Request<LogSink>;        
        
        // Lists sinks.
        list (request: {        
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
            // Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
            pageToken?: string,
            // Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
            pageSize?: number,
            // Required. The parent resource whose sinks are to be listed:
            // "projects/[PROJECT_ID]"
            // "organizations/[ORGANIZATION_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]"
            // "folders/[FOLDER_ID]"
            // 
            parent: string,
        }) : gapi.client.Request<ListSinksResponse>;        
        
        // Updates a sink. If the named sink doesn't exist, then this method is identical to sinks.create. If the named sink does exist, then this method replaces the following fields in the existing sink with values from the new sink: destination, filter, output_version_format, start_time, and end_time. The updated filter might also have a new writer_identity; see the unique_writer_identity field.
        update (request: {        
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
            // Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field:
            // If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity.
            // If the old value is false and the new value is true, then writer_identity is changed to a unique service account.
            // It is an error if the old value is true and the new value is set to false or defaulted to false.
            uniqueWriterIdentity?: boolean,
            // Required. The full resource name of the sink to update, including the parent resource and the sink identifier:
            // "projects/[PROJECT_ID]/sinks/[SINK_ID]"
            // "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
            // "folders/[FOLDER_ID]/sinks/[SINK_ID]"
            // Example: "projects/my-project-id/sinks/my-sink-id".
            sinkName: string,
        }) : gapi.client.Request<LogSink>;        
        
        // Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the current time is outside the sink's start and end times or the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
        create (request: {        
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
            // Required. The resource in which to create the sink:
            // "projects/[PROJECT_ID]"
            // "organizations/[ORGANIZATION_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]"
            // "folders/[FOLDER_ID]"
            // Examples: "projects/my-logging-project", "organizations/123456789".
            parent: string,
            // Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Stackdriver Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from the new sink. For more information, see writer_identity in LogSink.
            uniqueWriterIdentity?: boolean,
        }) : gapi.client.Request<LogSink>;        
        
    }
    
    
    interface LogsResource {
        // Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted.
        delete (request: {        
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
            // Required. The resource name of the log to delete:
            // "projects/[PROJECT_ID]/logs/[LOG_ID]"
            // "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
            // "folders/[FOLDER_ID]/logs/[LOG_ID]"
            // [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
            logName: string,
        }) : gapi.client.Request<Empty>;        
        
        // Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
        list (request: {        
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
            // Required. The resource name that owns the logs:
            // "projects/[PROJECT_ID]"
            // "organizations/[ORGANIZATION_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]"
            // "folders/[FOLDER_ID]"
            // 
            parent: string,
            // Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
            pageToken?: string,
            // Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
            pageSize?: number,
        }) : gapi.client.Request<ListLogsResponse>;        
        
    }
    
    
    interface FoldersResource {
        sinks: SinksResource,
        logs: LogsResource,
    }
    
    
    interface MonitoredResourceDescriptorsResource {
        // Lists the descriptors for monitored resource types used by Stackdriver Logging.
        list (request: {        
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
            // Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
            pageToken?: string,
            // Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
            pageSize?: number,
        }) : gapi.client.Request<ListMonitoredResourceDescriptorsResponse>;        
        
    }
    
    
    interface SinksResource {
        // Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
        delete (request: {        
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
            // Required. The full resource name of the sink to delete, including the parent resource and the sink identifier:
            // "projects/[PROJECT_ID]/sinks/[SINK_ID]"
            // "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
            // "folders/[FOLDER_ID]/sinks/[SINK_ID]"
            // Example: "projects/my-project-id/sinks/my-sink-id".
            sinkName: string,
        }) : gapi.client.Request<Empty>;        
        
        // Gets a sink.
        get (request: {        
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
            // Required. The resource name of the sink:
            // "projects/[PROJECT_ID]/sinks/[SINK_ID]"
            // "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
            // "folders/[FOLDER_ID]/sinks/[SINK_ID]"
            // Example: "projects/my-project-id/sinks/my-sink-id".
            sinkName: string,
        }) : gapi.client.Request<LogSink>;        
        
        // Lists sinks.
        list (request: {        
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
            // Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
            pageToken?: string,
            // Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
            pageSize?: number,
            // Required. The parent resource whose sinks are to be listed:
            // "projects/[PROJECT_ID]"
            // "organizations/[ORGANIZATION_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]"
            // "folders/[FOLDER_ID]"
            // 
            parent: string,
        }) : gapi.client.Request<ListSinksResponse>;        
        
        // Updates a sink. If the named sink doesn't exist, then this method is identical to sinks.create. If the named sink does exist, then this method replaces the following fields in the existing sink with values from the new sink: destination, filter, output_version_format, start_time, and end_time. The updated filter might also have a new writer_identity; see the unique_writer_identity field.
        update (request: {        
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
            // Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field:
            // If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity.
            // If the old value is false and the new value is true, then writer_identity is changed to a unique service account.
            // It is an error if the old value is true and the new value is set to false or defaulted to false.
            uniqueWriterIdentity?: boolean,
            // Required. The full resource name of the sink to update, including the parent resource and the sink identifier:
            // "projects/[PROJECT_ID]/sinks/[SINK_ID]"
            // "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
            // "folders/[FOLDER_ID]/sinks/[SINK_ID]"
            // Example: "projects/my-project-id/sinks/my-sink-id".
            sinkName: string,
        }) : gapi.client.Request<LogSink>;        
        
        // Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the current time is outside the sink's start and end times or the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
        create (request: {        
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
            // Required. The resource in which to create the sink:
            // "projects/[PROJECT_ID]"
            // "organizations/[ORGANIZATION_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]"
            // "folders/[FOLDER_ID]"
            // Examples: "projects/my-logging-project", "organizations/123456789".
            parent: string,
            // Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Stackdriver Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from the new sink. For more information, see writer_identity in LogSink.
            uniqueWriterIdentity?: boolean,
        }) : gapi.client.Request<LogSink>;        
        
    }
    
    
    interface LogsResource {
        // Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted.
        delete (request: {        
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
            // Required. The resource name of the log to delete:
            // "projects/[PROJECT_ID]/logs/[LOG_ID]"
            // "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
            // "folders/[FOLDER_ID]/logs/[LOG_ID]"
            // [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
            logName: string,
        }) : gapi.client.Request<Empty>;        
        
        // Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
        list (request: {        
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
            // Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
            pageToken?: string,
            // Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
            pageSize?: number,
            // Required. The resource name that owns the logs:
            // "projects/[PROJECT_ID]"
            // "organizations/[ORGANIZATION_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]"
            // "folders/[FOLDER_ID]"
            // 
            parent: string,
        }) : gapi.client.Request<ListLogsResponse>;        
        
    }
    
    
    interface OrganizationsResource {
        sinks: SinksResource,
        logs: LogsResource,
    }
    
    
    interface EntriesResource {
        // Writes log entries to Stackdriver Logging.
        write (request: {        
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
        }) : gapi.client.Request<WriteLogEntriesResponse>;        
        
        // Lists log entries. Use this method to retrieve log entries from Stackdriver Logging. For ways to export log entries, see Exporting Logs.
        list (request: {        
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
        }) : gapi.client.Request<ListLogEntriesResponse>;        
        
    }
    
    
    interface SinksResource {
        // Updates a sink. If the named sink doesn't exist, then this method is identical to sinks.create. If the named sink does exist, then this method replaces the following fields in the existing sink with values from the new sink: destination, filter, output_version_format, start_time, and end_time. The updated filter might also have a new writer_identity; see the unique_writer_identity field.
        update (request: {        
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
            // Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field:
            // If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity.
            // If the old value is false and the new value is true, then writer_identity is changed to a unique service account.
            // It is an error if the old value is true and the new value is set to false or defaulted to false.
            uniqueWriterIdentity?: boolean,
            // Required. The full resource name of the sink to update, including the parent resource and the sink identifier:
            // "projects/[PROJECT_ID]/sinks/[SINK_ID]"
            // "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
            // "folders/[FOLDER_ID]/sinks/[SINK_ID]"
            // Example: "projects/my-project-id/sinks/my-sink-id".
            sinkName: string,
        }) : gapi.client.Request<LogSink>;        
        
        // Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the current time is outside the sink's start and end times or the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
        create (request: {        
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
            // Required. The resource in which to create the sink:
            // "projects/[PROJECT_ID]"
            // "organizations/[ORGANIZATION_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]"
            // "folders/[FOLDER_ID]"
            // Examples: "projects/my-logging-project", "organizations/123456789".
            parent: string,
            // Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Stackdriver Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from the new sink. For more information, see writer_identity in LogSink.
            uniqueWriterIdentity?: boolean,
        }) : gapi.client.Request<LogSink>;        
        
        // Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
        delete (request: {        
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
            // Required. The full resource name of the sink to delete, including the parent resource and the sink identifier:
            // "projects/[PROJECT_ID]/sinks/[SINK_ID]"
            // "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
            // "folders/[FOLDER_ID]/sinks/[SINK_ID]"
            // Example: "projects/my-project-id/sinks/my-sink-id".
            sinkName: string,
        }) : gapi.client.Request<Empty>;        
        
        // Gets a sink.
        get (request: {        
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
            // Required. The resource name of the sink:
            // "projects/[PROJECT_ID]/sinks/[SINK_ID]"
            // "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
            // "folders/[FOLDER_ID]/sinks/[SINK_ID]"
            // Example: "projects/my-project-id/sinks/my-sink-id".
            sinkName: string,
        }) : gapi.client.Request<LogSink>;        
        
        // Lists sinks.
        list (request: {        
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
            // Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
            pageToken?: string,
            // Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
            pageSize?: number,
            // Required. The parent resource whose sinks are to be listed:
            // "projects/[PROJECT_ID]"
            // "organizations/[ORGANIZATION_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]"
            // "folders/[FOLDER_ID]"
            // 
            parent: string,
        }) : gapi.client.Request<ListSinksResponse>;        
        
    }
    
    
    interface LogsResource {
        // Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted.
        delete (request: {        
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
            // Required. The resource name of the log to delete:
            // "projects/[PROJECT_ID]/logs/[LOG_ID]"
            // "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
            // "folders/[FOLDER_ID]/logs/[LOG_ID]"
            // [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
            logName: string,
        }) : gapi.client.Request<Empty>;        
        
        // Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
        list (request: {        
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
            // Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
            pageToken?: string,
            // Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
            pageSize?: number,
            // Required. The resource name that owns the logs:
            // "projects/[PROJECT_ID]"
            // "organizations/[ORGANIZATION_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]"
            // "folders/[FOLDER_ID]"
            // 
            parent: string,
        }) : gapi.client.Request<ListLogsResponse>;        
        
    }
    
    
    interface MetricsResource {
        // Creates or updates a logs-based metric.
        update (request: {        
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
            // The resource name of the metric to update:
            // "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
            // The updated metric must be provided in the request and it's name field must be the same as [METRIC_ID] If the metric does not exist in [PROJECT_ID], then a new metric is created.
            metricName: string,
        }) : gapi.client.Request<LogMetric>;        
        
        // Creates a logs-based metric.
        create (request: {        
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
            // The resource name of the project in which to create the metric:
            // "projects/[PROJECT_ID]"
            // The new metric must be provided in the request.
            parent: string,
        }) : gapi.client.Request<LogMetric>;        
        
        // Deletes a logs-based metric.
        delete (request: {        
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
            // The resource name of the metric to delete:
            // "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
            // 
            metricName: string,
        }) : gapi.client.Request<Empty>;        
        
        // Gets a logs-based metric.
        get (request: {        
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
            // The resource name of the desired metric:
            // "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
            // 
            metricName: string,
        }) : gapi.client.Request<LogMetric>;        
        
        // Lists logs-based metrics.
        list (request: {        
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
            // Required. The name of the project containing the metrics:
            // "projects/[PROJECT_ID]"
            // 
            parent: string,
            // Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
            pageToken?: string,
            // Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
            pageSize?: number,
        }) : gapi.client.Request<ListLogMetricsResponse>;        
        
    }
    
    
    interface ProjectsResource {
        sinks: SinksResource,
        logs: LogsResource,
        metrics: MetricsResource,
    }
    
    
    interface SinksResource {
        // Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
        delete (request: {        
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
            // Required. The full resource name of the sink to delete, including the parent resource and the sink identifier:
            // "projects/[PROJECT_ID]/sinks/[SINK_ID]"
            // "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
            // "folders/[FOLDER_ID]/sinks/[SINK_ID]"
            // Example: "projects/my-project-id/sinks/my-sink-id".
            sinkName: string,
        }) : gapi.client.Request<Empty>;        
        
        // Gets a sink.
        get (request: {        
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
            // Required. The resource name of the sink:
            // "projects/[PROJECT_ID]/sinks/[SINK_ID]"
            // "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
            // "folders/[FOLDER_ID]/sinks/[SINK_ID]"
            // Example: "projects/my-project-id/sinks/my-sink-id".
            sinkName: string,
        }) : gapi.client.Request<LogSink>;        
        
        // Lists sinks.
        list (request: {        
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
            // Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
            pageToken?: string,
            // Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
            pageSize?: number,
            // Required. The parent resource whose sinks are to be listed:
            // "projects/[PROJECT_ID]"
            // "organizations/[ORGANIZATION_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]"
            // "folders/[FOLDER_ID]"
            // 
            parent: string,
        }) : gapi.client.Request<ListSinksResponse>;        
        
        // Updates a sink. If the named sink doesn't exist, then this method is identical to sinks.create. If the named sink does exist, then this method replaces the following fields in the existing sink with values from the new sink: destination, filter, output_version_format, start_time, and end_time. The updated filter might also have a new writer_identity; see the unique_writer_identity field.
        update (request: {        
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
            // Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field:
            // If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity.
            // If the old value is false and the new value is true, then writer_identity is changed to a unique service account.
            // It is an error if the old value is true and the new value is set to false or defaulted to false.
            uniqueWriterIdentity?: boolean,
            // Required. The full resource name of the sink to update, including the parent resource and the sink identifier:
            // "projects/[PROJECT_ID]/sinks/[SINK_ID]"
            // "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
            // "folders/[FOLDER_ID]/sinks/[SINK_ID]"
            // Example: "projects/my-project-id/sinks/my-sink-id".
            sinkName: string,
        }) : gapi.client.Request<LogSink>;        
        
        // Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the current time is outside the sink's start and end times or the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
        create (request: {        
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
            // Required. The resource in which to create the sink:
            // "projects/[PROJECT_ID]"
            // "organizations/[ORGANIZATION_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]"
            // "folders/[FOLDER_ID]"
            // Examples: "projects/my-logging-project", "organizations/123456789".
            parent: string,
            // Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Stackdriver Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from the new sink. For more information, see writer_identity in LogSink.
            uniqueWriterIdentity?: boolean,
        }) : gapi.client.Request<LogSink>;        
        
    }
    
    
    interface LogsResource {
        // Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted.
        delete (request: {        
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
            // Required. The resource name of the log to delete:
            // "projects/[PROJECT_ID]/logs/[LOG_ID]"
            // "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
            // "folders/[FOLDER_ID]/logs/[LOG_ID]"
            // [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
            logName: string,
        }) : gapi.client.Request<Empty>;        
        
        // Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
        list (request: {        
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
            // Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
            pageToken?: string,
            // Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
            pageSize?: number,
            // Required. The resource name that owns the logs:
            // "projects/[PROJECT_ID]"
            // "organizations/[ORGANIZATION_ID]"
            // "billingAccounts/[BILLING_ACCOUNT_ID]"
            // "folders/[FOLDER_ID]"
            // 
            parent: string,
        }) : gapi.client.Request<ListLogsResponse>;        
        
    }
    
    
    interface BillingAccountsResource {
        sinks: SinksResource,
        logs: LogsResource,
    }
    
}

declare module gapi.client.logging {
    var folders: gapi.client.logging.FoldersResource; 
    
    var monitoredResourceDescriptors: gapi.client.logging.MonitoredResourceDescriptorsResource; 
    
    var organizations: gapi.client.logging.OrganizationsResource; 
    
    var entries: gapi.client.logging.EntriesResource; 
    
    var projects: gapi.client.logging.ProjectsResource; 
    
    var billingAccounts: gapi.client.logging.BillingAccountsResource; 
    
}
