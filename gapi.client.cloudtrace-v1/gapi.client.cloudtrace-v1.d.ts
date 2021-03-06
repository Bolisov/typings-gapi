// Type definitions for Google Stackdriver Trace API v1
// Project: https://cloud.google.com/trace
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.cloudtrace {
    
    interface TraceSpan {
        // Start time of the span in nanoseconds from the UNIX epoch.
        startTime?: string,
        // Distinguishes between spans generated in a particular context. For example,
        // two spans with the same name may be distinguished using `RPC_CLIENT`
        // and `RPC_SERVER` to identify queueing latency associated with the span.
        kind?: string,
        // Collection of labels associated with the span. Label keys must be less than
        // 128 bytes. Label values must be less than 16 kilobytes (10MB for
        // `/stacktrace` values).
        // 
        // Some predefined label keys exist, or you may create your own. When creating
        // your own, we recommend the following formats:
        // 
        // * `/category/product/key` for agents of well-known products (e.g.
        //   `/db/mongodb/read_size`).
        // * `short_host/path/key` for domain-specific keys (e.g.
        //   `foo.com/myproduct/bar`)
        // 
        // Predefined labels include:
        // 
        // *   `/agent`
        // *   `/component`
        // *   `/error/message`
        // *   `/error/name`
        // *   `/http/client_city`
        // *   `/http/client_country`
        // *   `/http/client_protocol`
        // *   `/http/client_region`
        // *   `/http/host`
        // *   `/http/method`
        // *   `/http/redirected_url`
        // *   `/http/request/size`
        // *   `/http/response/size`
        // *   `/http/status_code`
        // *   `/http/url`
        // *   `/http/user_agent`
        // *   `/pid`
        // *   `/stacktrace`
        // *   `/tid`
        labels?: any,
        // Name of the span. Must be less than 128 bytes. The span name is sanitized
        // and displayed in the Stackdriver Trace tool in the
        // {% dynamic print site_values.console_name %}.
        // The name may be a method name or some other per-call site name.
        // For the same executable and the same call point, a best practice is
        // to use a consistent name, which makes it easier to correlate
        // cross-trace spans.
        name?: string,
        // Identifier for the span. Must be a 64-bit integer other than 0 and
        // unique within a trace.
        spanId?: string,
        // ID of the parent span, if any. Optional.
        parentSpanId?: string,
        // End time of the span in nanoseconds from the UNIX epoch.
        endTime?: string,
    }
    
    interface Empty {
    }
    
    interface ListTracesResponse {
        // If defined, indicates that there are more traces that match the request
        // and that this value should be passed to the next request to continue
        // retrieving additional traces.
        nextPageToken?: string,
        // List of trace records returned.
        traces?: Trace[],        
    }
    
    interface Trace {
        // Collection of spans in the trace.
        spans?: TraceSpan[],        
        // Project ID of the Cloud project where the trace data is stored.
        projectId?: string,
        // Globally unique identifier for the trace. This identifier is a 128-bit
        // numeric value formatted as a 32-byte hex string.
        traceId?: string,
    }
    
    interface Traces {
        // List of traces.
        traces?: Trace[],        
    }
    
    interface TracesResource {
        // Gets a single trace by its ID.
        get (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // ID of the Cloud project where the trace data is stored.
            projectId: string,
            // ID of the trace to return.
            traceId: string,
        }) : gapi.client.Request<Trace>;        
        
        // Returns of a list of traces that match the specified filter conditions.
        list (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Field used to sort the returned traces. Optional.
            // Can be one of the following:
            // 
            // *   `trace_id`
            // *   `name` (`name` field of root span in the trace)
            // *   `duration` (difference between `end_time` and `start_time` fields of
            //      the root span)
            // *   `start` (`start_time` field of the root span)
            // 
            // Descending order can be specified by appending `desc` to the sort field
            // (for example, `name desc`).
            // 
            // Only one sort field is permitted.
            orderBy?: string,
            // ID of the Cloud project where the trace data is stored.
            projectId: string,
            // An optional filter against labels for the request.
            // 
            // By default, searches use prefix matching. To specify exact match, prepend
            // a plus symbol (`+`) to the search term.
            // Multiple terms are ANDed. Syntax:
            // 
            // *   `root:NAME_PREFIX` or `NAME_PREFIX`: Return traces where any root
            //     span starts with `NAME_PREFIX`.
            // *   `+root:NAME` or `+NAME`: Return traces where any root span's name is
            //     exactly `NAME`.
            // *   `span:NAME_PREFIX`: Return traces where any span starts with
            //     `NAME_PREFIX`.
            // *   `+span:NAME`: Return traces where any span's name is exactly
            //     `NAME`.
            // *   `latency:DURATION`: Return traces whose overall latency is
            //     greater or equal to than `DURATION`. Accepted units are nanoseconds
            //     (`ns`), milliseconds (`ms`), and seconds (`s`). Default is `ms`. For
            //     example, `latency:24ms` returns traces whose overall latency
            //     is greater than or equal to 24 milliseconds.
            // *   `label:LABEL_KEY`: Return all traces containing the specified
            //     label key (exact match, case-sensitive) regardless of the key:value
            //     pair's value (including empty values).
            // *   `LABEL_KEY:VALUE_PREFIX`: Return all traces containing the specified
            //     label key (exact match, case-sensitive) whose value starts with
            //     `VALUE_PREFIX`. Both a key and a value must be specified.
            // *   `+LABEL_KEY:VALUE`: Return all traces containing a key:value pair
            //     exactly matching the specified text. Both a key and a value must be
            //     specified.
            // *   `method:VALUE`: Equivalent to `/http/method:VALUE`.
            // *   `url:VALUE`: Equivalent to `/http/url:VALUE`.
            filter?: string,
            // End of the time interval (inclusive) during which the trace data was
            // collected from the application.
            endTime?: string,
            // Token identifying the page of results to return. If provided, use the
            // value of the `next_page_token` field from a previous request. Optional.
            pageToken?: string,
            // Start of the time interval (inclusive) during which the trace data was
            // collected from the application.
            startTime?: string,
            // Maximum number of traces to return. If not specified or <= 0, the
            // implementation selects a reasonable value.  The implementation may
            // return fewer traces than the requested page size. Optional.
            pageSize?: number,
            // Type of data returned for traces in the list. Optional. Default is
            // `MINIMAL`.
            view?: string,
        }) : gapi.client.Request<ListTracesResponse>;        
        
    }
    
    
    interface ProjectsResource {
        // Sends new traces to Stackdriver Trace or updates existing traces. If the ID
        // of a trace that you send matches that of an existing trace, any fields
        // in the existing trace and its spans are overwritten by the provided values,
        // and any new fields provided are merged with the existing trace data. If the
        // ID does not match, a new trace is created.
        patchTraces (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // ID of the Cloud project where the trace data is stored.
            projectId: string,
        }) : gapi.client.Request<Empty>;        
        
        traces: TracesResource,
    }
    
}

declare module gapi.client.cloudtrace {
    var projects: gapi.client.cloudtrace.ProjectsResource; 
    
}
