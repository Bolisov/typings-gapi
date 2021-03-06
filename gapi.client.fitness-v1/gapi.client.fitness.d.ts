// Type definitions for Google Fitness v1
// Project: https://developers.google.com/fit/rest/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.fitness {
    
    interface AggregateBucket {
        // Available for Bucket.Type.ACTIVITY_TYPE, Bucket.Type.ACTIVITY_SEGMENT
        activity?: number,
        // There will be one dataset per AggregateBy in the request.
        dataset?: Dataset[],        
        // The end time for the aggregated data, in milliseconds since epoch, inclusive.
        endTimeMillis?: string,
        // Available for Bucket.Type.SESSION
        session?: Session,
        // The start time for the aggregated data, in milliseconds since epoch, inclusive.
        startTimeMillis?: string,
        // The type of a bucket signifies how the data aggregation is performed in the bucket.
        type?: string,
    }
    
    interface AggregateBy {
        // A data source ID to aggregate. Mutually exclusive of dataTypeName. Only data from the specified data source ID will be included in the aggregation. The dataset in the response will have the same data source ID.
        dataSourceId?: string,
        // The data type to aggregate. All data sources providing this data type will contribute data to the aggregation. The response will contain a single dataset for this data type name. The dataset will have a data source ID of derived:com.google.:com.google.android.gms:aggregated
        dataTypeName?: string,
    }
    
    interface AggregateRequest {
        // The specification of data to be aggregated. At least one aggregateBy spec must be provided. All data that is specified will be aggregated using the same bucketing criteria. There will be one dataset in the response for every aggregateBy spec.
        aggregateBy?: AggregateBy[],        
        // Specifies that data be aggregated each activity segment recored for a user. Similar to bucketByActivitySegment, but bucketing is done for each activity segment rather than all segments of the same type. Mutually exclusive of other bucketing specifications.
        bucketByActivitySegment?: BucketByActivity,
        // Specifies that data be aggregated by the type of activity being performed when the data was recorded. All data that was recorded during a certain activity type (for the given time range) will be aggregated into the same bucket. Data that was recorded while the user was not active will not be included in the response. Mutually exclusive of other bucketing specifications.
        bucketByActivityType?: BucketByActivity,
        // Specifies that data be aggregated by user sessions. Data that does not fall within the time range of a session will not be included in the response. Mutually exclusive of other bucketing specifications.
        bucketBySession?: BucketBySession,
        // Specifies that data be aggregated by a single time interval. Mutually exclusive of other bucketing specifications.
        bucketByTime?: BucketByTime,
        // The end of a window of time. Data that intersects with this time window will be aggregated. The time is in milliseconds since epoch, inclusive.
        endTimeMillis?: string,
        // A list of acceptable data quality standards. Only data points which conform to at least one of the specified data quality standards will be returned. If the list is empty, all data points are returned.
        filteredDataQualityStandard?: string[],        
        // The start of a window of time. Data that intersects with this time window will be aggregated. The time is in milliseconds since epoch, inclusive.
        startTimeMillis?: string,
    }
    
    interface AggregateResponse {
        // A list of buckets containing the aggregated data.
        bucket?: AggregateBucket[],        
    }
    
    interface Application {
        // An optional URI that can be used to link back to the application.
        detailsUrl?: string,
        // The name of this application. This is required for REST clients, but we do not enforce uniqueness of this name. It is provided as a matter of convenience for other developers who would like to identify which REST created an Application or Data Source.
        name?: string,
        // Package name for this application. This is used as a unique identifier when created by Android applications, but cannot be specified by REST clients. REST clients will have their developer project number reflected into the Data Source data stream IDs, instead of the packageName.
        packageName?: string,
        // Version of the application. You should update this field whenever the application changes in a way that affects the computation of the data.
        version?: string,
    }
    
    interface BucketByActivity {
        // The default activity stream will be used if a specific activityDataSourceId is not specified.
        activityDataSourceId?: string,
        // Specifies that only activity segments of duration longer than minDurationMillis are considered and used as a container for aggregated data.
        minDurationMillis?: string,
    }
    
    interface BucketBySession {
        // Specifies that only sessions of duration longer than minDurationMillis are considered and used as a container for aggregated data.
        minDurationMillis?: string,
    }
    
    interface BucketByTime {
        // Specifies that result buckets aggregate data by exactly durationMillis time frames. Time frames that contain no data will be included in the response with an empty dataset.
        durationMillis?: string,
        // 
        period?: BucketByTimePeriod,
    }
    
    interface BucketByTimePeriod {
        // org.joda.timezone.DateTimeZone
        timeZoneId?: string,
        // 
        type?: string,
        // 
        value?: number,
    }
    
    interface DataPoint {
        // Used for version checking during transformation; that is, a datapoint can only replace another datapoint that has an older computation time stamp.
        computationTimeMillis?: string,
        // The data type defining the format of the values in this data point.
        dataTypeName?: string,
        // The end time of the interval represented by this data point, in nanoseconds since epoch.
        endTimeNanos?: string,
        // Indicates the last time this data point was modified. Useful only in contexts where we are listing the data changes, rather than representing the current state of the data.
        modifiedTimeMillis?: string,
        // If the data point is contained in a dataset for a derived data source, this field will be populated with the data source stream ID that created the data point originally.
        originDataSourceId?: string,
        // The raw timestamp from the original SensorEvent.
        rawTimestampNanos?: string,
        // The start time of the interval represented by this data point, in nanoseconds since epoch.
        startTimeNanos?: string,
        // Values of each data type field for the data point. It is expected that each value corresponding to a data type field will occur in the same order that the field is listed with in the data type specified in a data source.
        // 
        // Only one of integer and floating point fields will be populated, depending on the format enum value within data source's type field.
        value?: Value[],        
    }
    
    interface DataSource {
        // Information about an application which feeds sensor data into the platform.
        application?: Application,
        // 
        dataQualityStandard?: string[],        
        // A unique identifier for the data stream produced by this data source. The identifier includes:
        // 
        //  
        // - The physical device's manufacturer, model, and serial number (UID). 
        // - The application's package name or name. Package name is used when the data source was created by an Android application. The developer project number is used when the data source was created by a REST client. 
        // - The data source's type. 
        // - The data source's stream name.  Note that not all attributes of the data source are used as part of the stream identifier. In particular, the version of the hardware/the application isn't used. This allows us to preserve the same stream through version updates. This also means that two DataSource objects may represent the same data stream even if they're not equal.
        // 
        // The exact format of the data stream ID created by an Android application is: type:dataType.name:application.packageName:device.manufacturer:device.model:device.uid:dataStreamName 
        // 
        // The exact format of the data stream ID created by a REST client is: type:dataType.name:developer project number:device.manufacturer:device.model:device.uid:dataStreamName 
        // 
        // When any of the optional fields that comprise of the data stream ID are blank, they will be omitted from the data stream ID. The minnimum viable data stream ID would be: type:dataType.name:developer project number
        // 
        // Finally, the developer project number is obfuscated when read by any REST or Android client that did not create the data source. Only the data source creator will see the developer project number in clear and normal form.
        dataStreamId?: string,
        // The stream name uniquely identifies this particular data source among other data sources of the same type from the same underlying producer. Setting the stream name is optional, but should be done whenever an application exposes two streams for the same data type, or when a device has two equivalent sensors.
        dataStreamName?: string,
        // The data type defines the schema for a stream of data being collected by, inserted into, or queried from the Fitness API.
        dataType?: DataType,
        // Representation of an integrated device (such as a phone or a wearable) that can hold sensors.
        device?: Device,
        // An end-user visible name for this data source.
        name?: string,
        // A constant describing the type of this data source. Indicates whether this data source produces raw or derived data.
        type?: string,
    }
    
    interface DataType {
        // A field represents one dimension of a data type.
        field?: DataTypeField[],        
        // Each data type has a unique, namespaced, name. All data types in the com.google namespace are shared as part of the platform.
        name?: string,
    }
    
    interface DataTypeField {
        // The different supported formats for each field in a data type.
        format?: string,
        // Defines the name and format of data. Unlike data type names, field names are not namespaced, and only need to be unique within the data type.
        name?: string,
        // 
        optional?: boolean,
    }
    
    interface Dataset {
        // The data stream ID of the data source that created the points in this dataset.
        dataSourceId?: string,
        // The largest end time of all data points in this possibly partial representation of the dataset. Time is in nanoseconds from epoch. This should also match the first part of the dataset identifier.
        maxEndTimeNs?: string,
        // The smallest start time of all data points in this possibly partial representation of the dataset. Time is in nanoseconds from epoch. This should also match the first part of the dataset identifier.
        minStartTimeNs?: string,
        // This token will be set when a dataset is received in response to a GET request and the dataset is too large to be included in a single response. Provide this value in a subsequent GET request to return the next page of data points within this dataset.
        nextPageToken?: string,
        // A partial list of data points contained in the dataset, ordered by largest endTimeNanos first. This list is considered complete when retrieving a small dataset and partial when patching a dataset or retrieving a dataset that is too large to include in a single response.
        point?: DataPoint[],        
    }
    
    interface Device {
        // Manufacturer of the product/hardware.
        manufacturer?: string,
        // End-user visible model name for the device.
        model?: string,
        // A constant representing the type of the device.
        type?: string,
        // The serial number or other unique ID for the hardware. This field is obfuscated when read by any REST or Android client that did not create the data source. Only the data source creator will see the uid field in clear and normal form.
        uid?: string,
        // Version string for the device hardware/software.
        version?: string,
    }
    
    interface ListDataSourcesResponse {
        // A previously created data source.
        dataSource?: DataSource[],        
    }
    
    interface ListSessionsResponse {
        // If includeDeleted is set to true in the request, this list will contain sessions deleted with original end times that are within the startTime and endTime frame.
        deletedSession?: Session[],        
        // Flag to indicate server has more data to transfer
        hasMoreData?: boolean,
        // The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
        nextPageToken?: string,
        // Sessions with an end time that is between startTime and endTime of the request.
        session?: Session[],        
    }
    
    interface MapValue {
        // Floating point value.
        fpVal?: number,
    }
    
    interface Session {
        // Session active time. While start_time_millis and end_time_millis define the full session time, the active time can be shorter and specified by active_time_millis. If the inactive time during the session is known, it should also be inserted via a com.google.activity.segment data point with a STILL activity value
        activeTimeMillis?: string,
        // The type of activity this session represents.
        activityType?: number,
        // The application that created the session.
        application?: Application,
        // A description for this session.
        description?: string,
        // An end time, in milliseconds since epoch, inclusive.
        endTimeMillis?: string,
        // A client-generated identifier that is unique across all sessions owned by this particular user.
        id?: string,
        // A timestamp that indicates when the session was last modified.
        modifiedTimeMillis?: string,
        // A human readable name of the session.
        name?: string,
        // A start time, in milliseconds since epoch, inclusive.
        startTimeMillis?: string,
    }
    
    interface Value {
        // Floating point value. When this is set, other values must not be set.
        fpVal?: number,
        // Integer value. When this is set, other values must not be set.
        intVal?: number,
        // Map value. The valid key space and units for the corresponding value of each entry should be documented as part of the data type definition. Keys should be kept small whenever possible. Data streams with large keys and high data frequency may be down sampled.
        mapVal?: ValueMapValEntry[],        
        // String value. When this is set, other values must not be set. Strings should be kept small whenever possible. Data streams with large string values and high data frequency may be down sampled.
        stringVal?: string,
    }
    
    interface ValueMapValEntry {
        // 
        key?: string,
        // 
        value?: MapValue,
    }
    
    interface DatasetsResource {
        // Performs an inclusive delete of all data points whose start and end times have any overlap with the time range specified by the dataset ID. For most data types, the entire data point will be deleted. For data types where the time span represents a consistent value (such as com.google.activity.segment), and a data point straddles either end point of the dataset, only the overlapping portion of the data point will be deleted.
        delete (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The client's current time in milliseconds since epoch.
            currentTimeMillis?: string,
            // The data stream ID of the data source that created the dataset.
            dataSourceId: string,
            // Dataset identifier that is a composite of the minimum data point start time and maximum data point end time represented as nanoseconds from the epoch. The ID is formatted like: "startTime-endTime" where startTime and endTime are 64 bit integers.
            datasetId: string,
            // When the operation was performed on the client.
            modifiedTimeMillis?: string,
            // Delete a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
            userId: string,
        }) : gapi.client.Request<void>;        
        
        // Returns a dataset containing all data points whose start and end times overlap with the specified range of the dataset minimum start time and maximum end time. Specifically, any data point whose start time is less than or equal to the dataset end time and whose end time is greater than or equal to the dataset start time.
        get (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The data stream ID of the data source that created the dataset.
            dataSourceId: string,
            // Dataset identifier that is a composite of the minimum data point start time and maximum data point end time represented as nanoseconds from the epoch. The ID is formatted like: "startTime-endTime" where startTime and endTime are 64 bit integers.
            datasetId: string,
            // If specified, no more than this many data points will be included in the dataset. If there are more data points in the dataset, nextPageToken will be set in the dataset response.
            limit?: number,
            // The continuation token, which is used to page through large datasets. To get the next page of a dataset, set this parameter to the value of nextPageToken from the previous response. Each subsequent call will yield a partial dataset with data point end timestamps that are strictly smaller than those in the previous partial response.
            pageToken?: string,
            // Retrieve a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
            userId: string,
        }) : gapi.client.Request<Dataset>;        
        
        // Adds data points to a dataset. The dataset need not be previously created. All points within the given dataset will be returned with subsquent calls to retrieve this dataset. Data points can belong to more than one dataset. This method does not use patch semantics.
        patch (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The client's current time in milliseconds since epoch. Note that the minStartTimeNs and maxEndTimeNs properties in the request body are in nanoseconds instead of milliseconds.
            currentTimeMillis?: string,
            // The data stream ID of the data source that created the dataset.
            dataSourceId: string,
            // Dataset identifier that is a composite of the minimum data point start time and maximum data point end time represented as nanoseconds from the epoch. The ID is formatted like: "startTime-endTime" where startTime and endTime are 64 bit integers.
            datasetId: string,
            // Patch a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
            userId: string,
        }) : gapi.client.Request<Dataset>;        
        
    }
    
    
    interface DataSourcesResource {
        // Creates a new data source that is unique across all data sources belonging to this user. The data stream ID field can be omitted and will be generated by the server with the correct format. The data stream ID is an ordered combination of some fields from the data source. In addition to the data source fields reflected into the data source ID, the developer project number that is authenticated when creating the data source is included. This developer project number is obfuscated when read by any other developer reading public data types.
        create (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // Create the data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
            userId: string,
        }) : gapi.client.Request<DataSource>;        
        
        // Deletes the specified data source. The request will fail if the data source contains any data points.
        delete (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The data stream ID of the data source to delete.
            dataSourceId: string,
            // Retrieve a data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
            userId: string,
        }) : gapi.client.Request<DataSource>;        
        
        // Returns the specified data source.
        get (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The data stream ID of the data source to retrieve.
            dataSourceId: string,
            // Retrieve a data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
            userId: string,
        }) : gapi.client.Request<DataSource>;        
        
        // Lists all data sources that are visible to the developer, using the OAuth scopes provided. The list is not exhaustive; the user may have private data sources that are only visible to other developers, or calls using other scopes.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The names of data types to include in the list. If not specified, all data sources will be returned.
            dataTypeName?: string,
            // List data sources for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
            userId: string,
        }) : gapi.client.Request<ListDataSourcesResponse>;        
        
        // Updates the specified data source. The dataStreamId, dataType, type, dataStreamName, and device properties with the exception of version, cannot be modified.
        // 
        // Data sources are identified by their dataStreamId. This method supports patch semantics.
        patch (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The data stream ID of the data source to update.
            dataSourceId: string,
            // Update the data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
            userId: string,
        }) : gapi.client.Request<DataSource>;        
        
        // Updates the specified data source. The dataStreamId, dataType, type, dataStreamName, and device properties with the exception of version, cannot be modified.
        // 
        // Data sources are identified by their dataStreamId.
        update (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The data stream ID of the data source to update.
            dataSourceId: string,
            // Update the data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
            userId: string,
        }) : gapi.client.Request<DataSource>;        
        
        datasets: DatasetsResource,
    }
    
    
    interface DatasetResource {
        // Aggregates data of a certain type or stream into buckets divided by a given type of boundary. Multiple data sets of multiple types and from multiple sources can be aggreated into exactly one bucket type per request.
        aggregate (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // Aggregate data for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
            userId: string,
        }) : gapi.client.Request<AggregateResponse>;        
        
    }
    
    
    interface SessionsResource {
        // Deletes a session specified by the given session ID.
        delete (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The client's current time in milliseconds since epoch.
            currentTimeMillis?: string,
            // The ID of the session to be deleted.
            sessionId: string,
            // Delete a session for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
            userId: string,
        }) : gapi.client.Request<void>;        
        
        // Lists sessions previously created.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // An RFC3339 timestamp. Only sessions ending between the start and end times will be included in the response.
            endTime?: string,
            // If true, deleted sessions will be returned. When set to true, sessions returned in this response will only have an ID and will not have any other fields.
            includeDeleted?: boolean,
            // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
            pageToken?: string,
            // An RFC3339 timestamp. Only sessions ending between the start and end times will be included in the response.
            startTime?: string,
            // List sessions for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
            userId: string,
        }) : gapi.client.Request<ListSessionsResponse>;        
        
        // Updates or insert a given session.
        update (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The client's current time in milliseconds since epoch.
            currentTimeMillis?: string,
            // The ID of the session to be created.
            sessionId: string,
            // Create sessions for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
            userId: string,
        }) : gapi.client.Request<Session>;        
        
    }
    
    
    interface UsersResource {
        dataSources: DataSourcesResource,
        dataset: DatasetResource,
        sessions: SessionsResource,
    }
    
}

declare module gapi.client.fitness {
    var users: gapi.client.fitness.UsersResource; 
    
}
