// Type definitions for Google Stackdriver Trace API v2
// Project: https://cloud.google.com/trace
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.cloudtrace {
    
    interface Annotation {
        // A user-supplied message describing the event. The maximum length for
        // the description is 256 bytes.
        description?: TruncatableString,
        // A set of attributes on the annotation. There is a limit of 4 attributes
        // per Annotation.
        attributes?: Attributes,
    }
    
    interface StackFrames {
        // The number of stack frames that were dropped because there
        // were too many stack frames.
        // If this value is 0, then no stack frames were dropped.
        droppedFramesCount?: number,
        // Stack frames in this call stack.
        frame?: StackFrame[],        
    }
    
    interface Trace {
        // The resource name of the trace in the following format:
        // 
        //     projects/[PROJECT_ID]/traces/TRACE_ID is a unique identifier for a trace within a project.
        // The ID is assigned when the trace is created.
        name?: string,
    }
    
    interface TimeEvents {
        // The number of dropped network events in all the included time events.
        // If the value is 0, then no network events were dropped.
        droppedNetworkEventsCount?: number,
        // The number of dropped annotations in all the included time events.
        // If the value is 0, then no annotations were dropped.
        droppedAnnotationsCount?: number,
        // A collection of `TimeEvent`s.
        timeEvent?: TimeEvent[],        
    }
    
    interface Module {
        // A unique identifier for the module, usually a hash of its
        // contents (up to 128 bytes).
        buildId?: TruncatableString,
        // For example: main binary, kernel modules, and dynamic libraries
        // such as libc.so, sharedlib.so (up to 256 bytes).
        module?: TruncatableString,
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
    
    interface BatchWriteSpansRequest {
        // A collection of spans.
        spans?: Span[],        
    }
    
    interface Empty {
    }
    
    interface Span {
        // A maximum of 128 links are allowed per Span.
        links?: Links,
        // A set of attributes on the span. There is a limit of 32 attributes per
        // span.
        attributes?: Attributes,
        // The [SPAN_ID] portion of the span's resource name.
        spanId?: string,
        // An optional number of child spans that were generated while this span
        // was active. If set, allows implementation to detect missing child spans.
        childSpanCount?: number,
        // A highly recommended but not required flag that identifies when a trace
        // crosses a process boundary. True when the parent_span belongs to the
        // same process as the current span.
        sameProcessAsParentSpan?: boolean,
        // An optional final status for this span.
        status?: Status,
        // The resource name of the span in the following format:
        // 
        //     projects/[PROJECT_ID]traces/[TRACE_ID]/spans/SPAN_ID is a unique identifier for a trace within a project.
        // [SPAN_ID] is a unique identifier for a span within a trace,
        // assigned when the span is created.
        name?: string,
        // Stack trace captured at the start of the span.
        stackTrace?: StackTrace,
        // The [SPAN_ID] of this span's parent span. If this is a root span,
        // then this field must be empty.
        parentSpanId?: string,
        // The end time of the span. On the client side, this is the time kept by
        // the local machine where the span execution ends. On the server side, this
        // is the time when the server application handler stops running.
        endTime?: string,
        // The start time of the span. On the client side, this is the time kept by
        // the local machine where the span execution starts. On the server side, this
        // is the time when the server's application handler starts running.
        startTime?: string,
        // A description of the span's operation (up to 128 bytes).
        // Stackdriver Trace displays the description in the
        // {% dynamic print site_values.console_name %}.
        // For example, the display name can be a qualified method name or a file name
        // and a line number where the operation is called. A best practice is to use
        // the same display name within an application and at the same call point.
        // This makes it easier to correlate spans in different traces.
        displayName?: TruncatableString,
        // The included time events. There can be up to 32 annotations and 128 network
        // events per span.
        timeEvents?: TimeEvents,
    }
    
    interface ListTracesResponse {
        // If there might be more results than those appearing in this response, then
        // `next_page_token` is included.  To get the next set of results, call this
        // method again using the value of `next_page_token` as `page_token`.
        nextPageToken?: string,
        // List of trace records returned.
        traces?: Trace[],        
    }
    
    interface AttributeValue {
        // A 64-bit signed integer.
        intValue?: string,
        // A Boolean value represented by `true` or `false`.
        boolValue?: boolean,
        // A string up to 256 bytes long.
        stringValue?: TruncatableString,
    }
    
    interface Attributes {
        // The number of attributes that were discarded. Attributes can be discarded
        // because their keys are too long or because there are too many attributes.
        // If this value is 0 then all attributes are valid.
        droppedAttributesCount?: number,
        // The set of attributes. Each attribute's key can be up to 128 bytes
        // long. The value can be a string up to 256 bytes, an integer, or the
        // Boolean values `true` and `false`. For example:
        // 
        //     "/instance_id": "my-instance"
        //     "/http/user_agent": ""
        //     "/http/request_bytes": 300
        //     "abc.com/myattribute": true
        attributeMap?: any,
    }
    
    interface Links {
        // The number of dropped links after the maximum size was enforced. If
        // this value is 0, then no links were dropped.
        droppedLinksCount?: number,
        // A collection of links.
        link?: Link[],        
    }
    
    interface TruncatableString {
        // The number of bytes removed from the original string. If this
        // value is 0, then the string was not shortened.
        truncatedByteCount?: number,
        // The shortened string. For example, if the original string was 500
        // bytes long and the limit of the string was 128 bytes, then this
        // value contains the first 128 bytes of the 500-byte string. Note that
        // truncation always happens on the character boundary, to ensure that
        // truncated string is still valid UTF8. In case of multi-byte characters,
        // size of truncated string can be less than truncation limit.
        value?: string,
    }
    
    interface StackTrace {
        // The hash ID is used to conserve network bandwidth for duplicate
        // stack traces within a single trace.
        // 
        // Often multiple spans will have identical stack traces.
        // The first occurrence of a stack trace should contain both the
        // `stackFrame` content and a value in `stackTraceHashId`.
        // 
        // Subsequent spans within the same request can refer
        // to that stack trace by only setting `stackTraceHashId`.
        stackTraceHashId?: string,
        // Stack frames in this stack trace. A maximum of 128 frames are allowed.
        stackFrames?: StackFrames,
    }
    
    interface TimeEvent {
        // An event describing an RPC message sent/received on the network.
        networkEvent?: NetworkEvent,
        // One or more key:value pairs.
        annotation?: Annotation,
        // The timestamp indicating the time the event occurred.
        time?: string,
    }
    
    interface NetworkEvent {
        // The number of bytes sent or received.
        messageSize?: string,
        // For sent messages, this is the time at which the first bit was sent.
        // For received messages, this is the time at which the last bit was
        // received.
        time?: string,
        // Type of NetworkEvent. Indicates whether the RPC message was sent or
        // received.
        type?: string,
        // An identifier for the message, which must be unique in this span.
        messageId?: string,
    }
    
    interface ListSpansResponse {
        // If defined, indicates that there might be more spans that match the
        // request. Pass this as the value of `pageToken` in a subsequent request to
        // retrieve additional spans.
        nextPageToken?: string,
        // The requested spans, if there are any in the specified trace.
        spans?: Span[],        
    }
    
    interface StackFrame {
        // The version of the deployed source code (up to 128 bytes).
        sourceVersion?: TruncatableString,
        // An un-mangled function name, if `function_name` is
        // [mangled](http://www.avabodh.com/cxxin/namemangling.html). The name can
        // be fully-qualified (up to 1024 bytes).
        originalFunctionName?: TruncatableString,
        // The fully-qualified name that uniquely identifies the function or
        // method that is active in this frame (up to 1024 bytes).
        functionName?: TruncatableString,
        // The line number in `file_name` where the function call appears.
        lineNumber?: string,
        // The binary module from where the code was loaded.
        loadModule?: Module,
        // The column number where the function call appears, if available.
        // This is important in JavaScript because of its anonymous functions.
        columnNumber?: string,
        // The name of the source file where the function call appears (up to 256
        // bytes).
        fileName?: TruncatableString,
    }
    
    interface Link {
        // The relationship of the current span relative to the linked span.
        type?: string,
        // A set of attributes on the link. There is a limit of 32 attributes per
        // link.
        attributes?: Attributes,
        // `TRACE_ID` identifies a trace within a project.
        traceId?: string,
        // `SPAN_ID` identifies a span within a trace.
        spanId?: string,
    }
    
    interface SpansResource {
        // Creates a new Span.
        create (request: {        
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
            // The resource name of the span in the following format:
            // 
            //     projects/[PROJECT_ID]traces/[TRACE_ID]/spans/SPAN_ID is a unique identifier for a trace within a project.
            // [SPAN_ID] is a unique identifier for a span within a trace,
            // assigned when the span is created.
            name: string,
        }) : gapi.client.Request<Span>;        
        
    }
    
    
    interface TracesResource {
        // Returns of a list of traces that match the specified filter conditions.
        list (request: {        
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
            // Optional. Do not return traces whose start time is later than this time.
            endTime?: string,
            // Optional. If present, then retrieve the next batch of results from the
            // preceding call to this method.  `page_token` must be the value of
            // `next_page_token` from the previous response.  The values of other method
            // parameters should be identical to those in the previous call.
            pageToken?: string,
            // Optional. Do not return traces whose end time is earlier than this time.
            startTime?: string,
            // Optional. The maximum number of results to return from this request.
            // Non-positive values are ignored. The presence of `next_page_token` in the
            // response indicates that more results might be available, even if fewer than
            // the maximum number of results is returned by this request.
            pageSize?: number,
            // Required. The project where the trace data is stored. The format
            // is `projects/PROJECT_ID`.
            parent: string,
            // Optional. A single field used to sort the returned traces.
            // Only the following field names can be used:
            // 
            // *   `trace_id`: the trace's ID field
            // *   `name`:  the root span's resource name
            // *   `duration`: the difference between the root span's start time and end time
            // *   `start`:  the start time of the root span
            // 
            // Sorting is in ascending order unless `desc` is appended to the sort field name.
            // Example: `"name desc"`).
            orderBy?: string,
            // Opional. Return only traces that match this
            // [trace filter](/trace/docs/trace-filters). Example:
            // 
            //     "label:/http/url root:/_ah/background my_label:17"
            filter?: string,
        }) : gapi.client.Request<ListTracesResponse>;        
        
        // Sends new spans to Stackdriver Trace or updates existing traces. If the
        // name of a trace that you send matches that of an existing trace, new spans
        // are added to the existing trace. Attempt to update existing spans results
        // undefined behavior. If the name does not match, a new trace is created
        // with given set of spans.
        batchWrite (request: {        
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
            // Required. Name of the project where the spans belong. The format is
            // `projects/PROJECT_ID`.
            name: string,
        }) : gapi.client.Request<Empty>;        
        
        // Returns a list of spans within a trace.
        listSpans (request: {        
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
            // Optional. If present, then retrieve the next batch of results from the
            // preceding call to this method. `page_token` must be the value of
            // `next_page_token` from the previous response. The values of other method
            // parameters should be identical to those in the previous call.
            pageToken?: string,
            // Required: The resource name of the trace containing the spans to list.
            // The format is `projects/PROJECT_ID/traces/TRACE_ID`.
            parent: string,
        }) : gapi.client.Request<ListSpansResponse>;        
        
        spans: SpansResource,
    }
    
    
    interface ProjectsResource {
        traces: TracesResource,
    }
    
}

declare module gapi.client.cloudtrace {
    var projects: gapi.client.cloudtrace.ProjectsResource; 
    
}
