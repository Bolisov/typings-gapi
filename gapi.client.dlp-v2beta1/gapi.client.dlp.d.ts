// Type definitions for Google DLP API v2beta1
// Project: https://cloud.google.com/dlp/docs/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.dlp {
    
    interface GooglePrivacyDlpV2beta1RedactContentRequest {
        // The list of items to inspect. Up to 100 are allowed per request.
        items?: GooglePrivacyDlpV2beta1ContentItem[],        
        // The strings to replace findings text findings with. Must specify at least
        // one of these or one ImageRedactionConfig if redacting images.
        replaceConfigs?: GooglePrivacyDlpV2beta1ReplaceConfig[],        
        // The configuration for specifying what content to redact from images.
        imageRedactionConfigs?: GooglePrivacyDlpV2beta1ImageRedactionConfig[],        
        // Configuration for the inspector.
        inspectConfig?: GooglePrivacyDlpV2beta1InspectConfig,
    }
    
    interface GoogleLongrunningListOperationsResponse {
        // The standard List next-page token.
        nextPageToken?: string,
        // A list of operations that matches the specified filter in the request.
        operations?: GoogleLongrunningOperation[],        
    }
    
    interface GooglePrivacyDlpV2beta1FieldId {
        // Column name describing the field.
        columnName?: string,
    }
    
    interface GooglePrivacyDlpV2beta1FileSet {
        // The url, in the format `gs://<bucket>/<path>`. Trailing wildcard in the
        // path is allowed.
        url?: string,
    }
    
    interface GooglePrivacyDlpV2beta1DatastoreOptions {
        // A partition ID identifies a grouping of entities. The grouping is always
        // by project and namespace, however the namespace ID may be empty.
        partitionId?: GooglePrivacyDlpV2beta1PartitionId,
        // Properties to scan. If none are specified, all properties will be scanned
        // by default.
        projection?: GooglePrivacyDlpV2beta1Projection[],        
        // The kind to process.
        kind?: GooglePrivacyDlpV2beta1KindExpression,
    }
    
    interface GoogleLongrunningCancelOperationRequest {
    }
    
    interface GoogleProtobufEmpty {
    }
    
    interface GooglePrivacyDlpV2beta1ListInspectFindingsResponse {
        // The results.
        result?: GooglePrivacyDlpV2beta1InspectResult,
        // If not empty, indicates that there may be more results that match the
        // request; this value should be passed in a new `ListInspectFindingsRequest`.
        nextPageToken?: string,
    }
    
    interface GooglePrivacyDlpV2beta1InspectConfig {
        // When true, excludes type information of the findings.
        excludeTypes?: boolean,
        // Restricts what info_types to look for. The values must correspond to
        // InfoType values returned by ListInfoTypes or found in documentation.
        // Empty info_types runs all enabled detectors.
        infoTypes?: GooglePrivacyDlpV2beta1InfoType[],        
        // When true, a contextual quote from the data that triggered a finding is
        // included in the response; see Finding.quote.
        includeQuote?: boolean,
        // Only returns findings equal or above this threshold.
        minLikelihood?: string,
        // Limits the number of findings per content item or long running operation.
        maxFindings?: number,
    }
    
    interface GooglePrivacyDlpV2beta1Projection {
        // The property to project.
        property?: GooglePrivacyDlpV2beta1PropertyReference,
    }
    
    interface GooglePrivacyDlpV2beta1DatastoreKey {
        // Datastore entity key.
        entityKey?: GooglePrivacyDlpV2beta1Key,
    }
    
    interface GooglePrivacyDlpV2beta1CreateInspectOperationRequest {
        // Optional location to store findings. The bucket must already exist and
        // the Google APIs service account for DLP must have write permission to
        // write to the given bucket.
        // <p>Results are split over multiple csv files with each file name matching
        // the pattern "[operation_id]_[count].csv", for example
        // `3094877188788974909_1.csv`. The `operation_id` matches the
        // identifier for the Operation, and the `count` is a counter used for
        // tracking the number of files written. <p>The CSV file(s) contain the
        // following columns regardless of storage type scanned: <li>id <li>info_type
        // <li>likelihood <li>byte size of finding <li>quote <li>time_stamp<br/>
        // <p>For Cloud Storage the next columns are: <li>file_path
        // <li>start_offset<br/>
        // <p>For Cloud Datastore the next columns are: <li>project_id
        // <li>namespace_id <li>path <li>column_name <li>offset
        outputConfig?: GooglePrivacyDlpV2beta1OutputStorageConfig,
        // Configuration for the inspector.
        inspectConfig?: GooglePrivacyDlpV2beta1InspectConfig,
        // Specification of the data set to process.
        storageConfig?: GooglePrivacyDlpV2beta1StorageConfig,
    }
    
    interface GooglePrivacyDlpV2beta1CloudStorageOptions {
        // 
        fileSet?: GooglePrivacyDlpV2beta1FileSet,
    }
    
    interface GooglePrivacyDlpV2beta1RecordKey {
        // 
        cloudStorageKey?: GooglePrivacyDlpV2beta1CloudStorageKey,
        // 
        datastoreKey?: GooglePrivacyDlpV2beta1DatastoreKey,
    }
    
    interface GooglePrivacyDlpV2beta1Key {
        // The entity path.
        // An entity path consists of one or more elements composed of a kind and a
        // string or numerical identifier, which identify entities. The first
        // element identifies a _root entity_, the second element identifies
        // a _child_ of the root entity, the third element identifies a child of the
        // second entity, and so forth. The entities identified by all prefixes of
        // the path are called the element's _ancestors_.
        // 
        // A path can never be empty, and a path can have at most 100 elements.
        path?: GooglePrivacyDlpV2beta1PathElement[],        
        // Entities are partitioned into subsets, currently identified by a project
        // ID and namespace ID.
        // Queries are scoped to a single partition.
        partitionId?: GooglePrivacyDlpV2beta1PartitionId,
    }
    
    interface GooglePrivacyDlpV2beta1InspectContentRequest {
        // The list of items to inspect. Items in a single request are
        // considered "related" unless inspect_config.independent_inputs is true.
        // Up to 100 are allowed per request.
        items?: GooglePrivacyDlpV2beta1ContentItem[],        
        // Configuration for the inspector.
        inspectConfig?: GooglePrivacyDlpV2beta1InspectConfig,
    }
    
    interface GooglePrivacyDlpV2beta1CloudStoragePath {
        // The url, in the format of `gs://bucket/<path>`.
        path?: string,
    }
    
    interface GooglePrivacyDlpV2beta1InspectOperationResult {
        // The server-assigned name, which is only unique within the same service that
        // originally returns it. If you use the default HTTP mapping, the
        // `name` should have the format of `inspect/results/{id}`.
        name?: string,
    }
    
    interface GooglePrivacyDlpV2beta1InfoTypeStatistics {
        // Number of findings for this info type.
        count?: string,
        // The type of finding this stat is for.
        infoType?: GooglePrivacyDlpV2beta1InfoType,
    }
    
    interface GooglePrivacyDlpV2beta1RedactContentResponse {
        // The redacted content.
        items?: GooglePrivacyDlpV2beta1ContentItem[],        
    }
    
    interface GooglePrivacyDlpV2beta1ImageRedactionConfig {
        // If true, all text found in the image, regardless if it matches an
        // info_type, is redacted.
        redactAllText?: boolean,
        // Only one per info_type should be provided per request. If not
        // specified, and redact_all_text is false, the DLP API will redacts all
        // text that it matches against all info_types that are found, but not
        // specified in another ImageRedactionConfig.
        infoType?: GooglePrivacyDlpV2beta1InfoType,
        // The color to use when redacting content from an image. If not specified,
        // the default is black.
        redactionColor?: GooglePrivacyDlpV2beta1Color,
    }
    
    interface GooglePrivacyDlpV2beta1Range {
        // Index of the last character of the range (exclusive).
        end?: string,
        // Index of the first character of the range (inclusive).
        start?: string,
    }
    
    interface GooglePrivacyDlpV2beta1PropertyReference {
        // The name of the property.
        // If name includes "."s, it may be interpreted as a property name path.
        name?: string,
    }
    
    interface GooglePrivacyDlpV2beta1Location {
        // Key of the finding.
        recordKey?: GooglePrivacyDlpV2beta1RecordKey,
        // Character offsets within a content item, included when content type
        // is a text. Default charset assumed to be UTF-8.
        codepointRange?: GooglePrivacyDlpV2beta1Range,
        // Field id of the field containing the finding.
        fieldId?: GooglePrivacyDlpV2beta1FieldId,
        // Location within an image's pixels.
        imageBoxes?: GooglePrivacyDlpV2beta1ImageLocation[],        
        // Zero-based byte offsets within a content item.
        byteRange?: GooglePrivacyDlpV2beta1Range,
    }
    
    interface GooglePrivacyDlpV2beta1InspectResult {
        // List of findings for an item.
        findings?: GooglePrivacyDlpV2beta1Finding[],        
        // If true, then this item might have more findings than were returned,
        // and the findings returned are an arbitrary subset of all findings.
        // The findings list might be truncated because the input items were too
        // large, or because the server reached the maximum amount of resources
        // allowed for a single API call. For best results, divide the input into
        // smaller batches.
        findingsTruncated?: boolean,
    }
    
    interface GooglePrivacyDlpV2beta1ImageLocation {
        // Height of the bounding box in pixels.
        height?: number,
        // Top coordinate of the bounding box. (0,0) is upper left.
        top?: number,
        // Left coordinate of the bounding box. (0,0) is upper left.
        left?: number,
        // Width of the bounding box in pixels.
        width?: number,
    }
    
    interface GooglePrivacyDlpV2beta1InfoTypeDescription {
        // List of categories this info type belongs to.
        categories?: GooglePrivacyDlpV2beta1CategoryDescription[],        
        // Internal name of the info type.
        name?: string,
        // Human readable form of the info type name.
        displayName?: string,
    }
    
    interface GooglePrivacyDlpV2beta1OutputStorageConfig {
        // The path to a Google Cloud Storage location to store output.
        storagePath?: GooglePrivacyDlpV2beta1CloudStoragePath,
    }
    
    interface GoogleRpcStatus {
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
    
    interface GooglePrivacyDlpV2beta1StorageConfig {
        // Google Cloud Storage options specification.
        cloudStorageOptions?: GooglePrivacyDlpV2beta1CloudStorageOptions,
        // Google Cloud Datastore options specification.
        datastoreOptions?: GooglePrivacyDlpV2beta1DatastoreOptions,
    }
    
    interface GoogleLongrunningOperation {
        // If the value is `false`, it means the operation is still in progress.
        // If true, the operation is completed, and either `error` or `response` is
        // available.
        done?: boolean,
        // This field will contain an InspectOperationResult object.
        response?: any,
        // The server-assigned name, The `name` should have the format of `inspect/operations/<identifier>`.
        name?: string,
        // The error result of the operation in case of failure or cancellation.
        error?: GoogleRpcStatus,
        // This field will contain an InspectOperationMetadata object. This will always be returned with the Operation.
        metadata?: any,
    }
    
    interface GooglePrivacyDlpV2beta1ContentItem {
        // Type of the content, as defined in Content-Type HTTP header.
        // Supported types are: all "text" types, octet streams, PNG images,
        // JPEG images.
        type?: string,
        // String data to inspect or redact.
        value?: string,
        // Content data to inspect or redact.
        data?: string,
    }
    
    interface GooglePrivacyDlpV2beta1InspectOperationMetadata {
        // Optional location to store findings.
        requestOutputConfig?: GooglePrivacyDlpV2beta1OutputStorageConfig,
        // The time which this request was started.
        createTime?: string,
        // The storage config used to create the Operation.
        requestStorageConfig?: GooglePrivacyDlpV2beta1StorageConfig,
        // Total size in bytes that were processed.
        processedBytes?: string,
        // Estimate of the number of bytes to process.
        totalEstimatedBytes?: string,
        // 
        infoTypeStats?: GooglePrivacyDlpV2beta1InfoTypeStatistics[],        
        // The inspect config used to create the Operation.
        requestInspectConfig?: GooglePrivacyDlpV2beta1InspectConfig,
    }
    
    interface GooglePrivacyDlpV2beta1InfoType {
        // Name of the information type. For built-in info types, this is provided by
        // the API call ListInfoTypes. For user-defined info types, this is
        // provided by the user. All user-defined info types must have unique names,
        // and cannot conflict with built-in info type names.
        name?: string,
    }
    
    interface GooglePrivacyDlpV2beta1ReplaceConfig {
        // Type of information to replace. Only one ReplaceConfig per info_type
        // should be provided. If ReplaceConfig does not have an info_type, the DLP
        // API matches it against all info_types that are found but not specified in
        // another ReplaceConfig.
        infoType?: GooglePrivacyDlpV2beta1InfoType,
        // Content replacing sensitive information of given type. Max 256 chars.
        replaceWith?: string,
    }
    
    interface GooglePrivacyDlpV2beta1Color {
        // The amount of red in the color as a value in the interval [0, 1].
        red?: number,
        // The amount of blue in the color as a value in the interval [0, 1].
        blue?: number,
        // The amount of green in the color as a value in the interval [0, 1].
        green?: number,
    }
    
    interface GooglePrivacyDlpV2beta1PathElement {
        // The name of the entity.
        // A name matching regex `__.*__` is reserved/read-only.
        // A name must not be more than 1500 bytes when UTF-8 encoded.
        // Cannot be `""`.
        name?: string,
        // The kind of the entity.
        // A kind matching regex `__.*__` is reserved/read-only.
        // A kind must not contain more than 1500 bytes when UTF-8 encoded.
        // Cannot be `""`.
        kind?: string,
        // The auto-allocated ID of the entity.
        // Never equal to zero. Values less than zero are discouraged and may not
        // be supported in the future.
        id?: string,
    }
    
    interface GooglePrivacyDlpV2beta1ListInfoTypesResponse {
        // Set of sensitive info types belonging to a category.
        infoTypes?: GooglePrivacyDlpV2beta1InfoTypeDescription[],        
    }
    
    interface GooglePrivacyDlpV2beta1CategoryDescription {
        // Internal name of the category.
        name?: string,
        // Human readable form of the category name.
        displayName?: string,
    }
    
    interface GooglePrivacyDlpV2beta1ListRootCategoriesResponse {
        // List of all into type categories supported by the API.
        categories?: GooglePrivacyDlpV2beta1CategoryDescription[],        
    }
    
    interface GooglePrivacyDlpV2beta1Finding {
        // Estimate of how likely it is that the info_type is correct.
        likelihood?: string,
        // Timestamp when finding was detected.
        createTime?: string,
        // The specific type of info the string might be.
        infoType?: GooglePrivacyDlpV2beta1InfoType,
        // Location of the info found.
        location?: GooglePrivacyDlpV2beta1Location,
        // The specific string that may be potentially sensitive info.
        quote?: string,
    }
    
    interface GooglePrivacyDlpV2beta1CloudStorageKey {
        // Path to the file.
        filePath?: string,
        // Byte offset of the referenced data in the file.
        startOffset?: string,
    }
    
    interface GooglePrivacyDlpV2beta1PartitionId {
        // The ID of the project to which the entities belong.
        projectId?: string,
        // If not empty, the ID of the namespace to which the entities belong.
        namespaceId?: string,
    }
    
    interface GooglePrivacyDlpV2beta1InspectContentResponse {
        // Each content_item from the request has a result in this list, in the
        // same order as the request.
        results?: GooglePrivacyDlpV2beta1InspectResult[],        
    }
    
    interface GooglePrivacyDlpV2beta1KindExpression {
        // The name of the kind.
        name?: string,
    }
    
    interface FindingsResource {
        // Returns list of results for given inspect operation result set id.
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
            // The value returned by the last `ListInspectFindingsResponse`; indicates
            // that this is a continuation of a prior `ListInspectFindings` call, and that
            // the system should return the next page of data.
            pageToken?: string,
            // Identifier of the results set returned as metadata of
            // the longrunning operation created by a call to CreateInspectOperation.
            // Should be in the format of `inspect/results/{id}`.
            name: string,
            // Maximum number of results to return.
            // If 0, the implementation selects a reasonable value.
            pageSize?: number,
            // Restricts findings to items that match. Supports info_type and likelihood.
            // <p>Examples:<br/>
            // <li>info_type=EMAIL_ADDRESS
            // <li>info_type=PHONE_NUMBER,EMAIL_ADDRESS
            // <li>likelihood=VERY_LIKELY
            // <li>likelihood=VERY_LIKELY,LIKELY
            // <li>info_type=EMAIL_ADDRESS,likelihood=VERY_LIKELY,LIKELY
            filter?: string,
        }) : gapi.client.Request<GooglePrivacyDlpV2beta1ListInspectFindingsResponse>;        
        
    }
    
    
    interface ResultsResource {
        findings: FindingsResource,
    }
    
    
    interface OperationsResource {
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
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
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
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // The name of the operation resource to be deleted.
            name: string,
        }) : gapi.client.Request<GoogleProtobufEmpty>;        
        
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
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
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
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // The name of the operation resource.
            name: string,
        }) : gapi.client.Request<GoogleLongrunningOperation>;        
        
        // Fetch the list of long running operations.
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
            // The standard list page token.
            pageToken?: string,
            // The name of the operation's parent resource.
            name: string,
            // The list page size. The max allowed value is 256 and default is 100.
            pageSize?: number,
            // This parameter supports filtering by done, ie done=true or done=false.
            filter?: string,
        }) : gapi.client.Request<GoogleLongrunningListOperationsResponse>;        
        
        // Schedules a job scanning content in a Google Cloud Platform data
        // repository.
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
        }) : gapi.client.Request<GoogleLongrunningOperation>;        
        
        // Cancels an operation. Use the get method to check whether the cancellation succeeded or whether the operation completed despite cancellation.
        cancel (request: {        
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
            // The name of the operation resource to be cancelled.
            name: string,
        }) : gapi.client.Request<GoogleProtobufEmpty>;        
        
    }
    
    
    interface InspectResource {
        results: ResultsResource,
        operations: OperationsResource,
    }
    
    
    interface InfoTypesResource {
        // Returns sensitive information types for given category.
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
            // Category name as returned by ListRootCategories.
            category: string,
            // Optional BCP-47 language code for localized info type friendly
            // names. If omitted, or if localized strings are not available,
            // en-US strings will be returned.
            languageCode?: string,
        }) : gapi.client.Request<GooglePrivacyDlpV2beta1ListInfoTypesResponse>;        
        
    }
    
    
    interface RootCategoriesResource {
        // Returns the list of root categories of sensitive information.
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
            // Optional language code for localized friendly category names.
            // If omitted or if localized strings are not available,
            // en-US strings will be returned.
            languageCode?: string,
        }) : gapi.client.Request<GooglePrivacyDlpV2beta1ListRootCategoriesResponse>;        
        
        infoTypes: InfoTypesResource,
    }
    
    
    interface ContentResource {
        // Finds potentially sensitive info in a list of strings.
        // This method has limits on input size, processing time, and output size.
        inspect (request: {        
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
        }) : gapi.client.Request<GooglePrivacyDlpV2beta1InspectContentResponse>;        
        
        // Redacts potentially sensitive info from a list of strings.
        // This method has limits on input size, processing time, and output size.
        redact (request: {        
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
        }) : gapi.client.Request<GooglePrivacyDlpV2beta1RedactContentResponse>;        
        
    }
    
}

declare module gapi.client.dlp {
    var inspect: gapi.client.dlp.InspectResource; 
    
    var rootCategories: gapi.client.dlp.RootCategoriesResource; 
    
    var content: gapi.client.dlp.ContentResource; 
    
}
