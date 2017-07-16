// Type definitions for Google BigQuery Data Transfer Service API v1
// Project: https://cloud.google.com/bigquery/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.bigquerydatatransfer {
    
    interface DataSource {
        // Default data transfer schedule.
        // Examples of valid schedules include:
        // `1st,3rd monday of month 15:30`,
        // `every wed,fri of jan,jun 13:15`, and
        // `first sunday of quarter 00:00`.
        defaultSchedule?: string,
        // The number of seconds to wait for a status update from the data source
        // before BigQuery marks the transfer as failed.
        statusUpdateDeadlineSeconds?: number,
        // Indicates whether the data source supports multiple transfers
        // to different BigQuery targets.
        supportsMultipleTransfers?: boolean,
        // Disables backfilling and manual run scheduling
        // for the data source.
        manualRunsDisabled?: boolean,
        // Default data refresh window on days.
        // Only meaningful when `data_refresh_type` = `SLIDING_WINDOW`.
        defaultDataRefreshWindowDays?: number,
        // Transfer type. Currently supports only batch transfers,
        // which are transfers that use the BigQuery batch APIs (load or
        // query) to ingest the data.
        transferType?: string,
        // User friendly data source description string.
        description?: string,
        // Data source id.
        dataSourceId?: string,
        // Data source resource name.
        name?: string,
        // Api auth scopes for which refresh token needs to be obtained. Only valid
        // when `client_id` is specified. Ignored otherwise. These are scopes needed
        // by a data source to prepare data and ingest them into BigQuery,
        // e.g., https://www.googleapis.com/auth/bigquery
        scopes?: string[],        
        // Data source client id which should be used to receive refresh token.
        // When not supplied, no offline credentials are populated for data transfer.
        clientId?: string,
        // Indicates the type of authorization.
        authorizationType?: string,
        // Specifies whether the data source supports a user defined schedule, or
        // operates on the default schedule.
        // When set to `true`, user can override default schedule.
        supportsCustomSchedule?: boolean,
        // User friendly data source name.
        displayName?: string,
        // Specifies whether the data source supports automatic data refresh for the
        // past few days, and how it's supported.
        // For some data sources, data might not be complete until a few days later,
        // so it's useful to refresh data automatically.
        dataRefreshType?: string,
        // Data source parameters.
        parameters?: DataSourceParameter[],        
        // Url for the help document for this data source.
        helpUrl?: string,
    }
    
    interface ScheduleTransferRunsRequest {
        // Start time of the range of transfer runs.
        rangeStartTime?: string,
        // End time of the range of transfer runs.
        rangeEndTime?: string,
    }
    
    interface Empty {
    }
    
    interface TransferConfig {
        // GaiaID of the user on whose behalf transfer is done. Applicable only
        // to data sources that do not support service accounts. When set to 0,
        // the data source service account credentials are used.
        // @OutputOnly
        userId?: string,
        // The resource name of the transfer run.
        // Transfer run names have the form
        // `projects/{project_id}/transferConfigs/{config_id}`.
        // Where `config_id` is usually a uuid, even though it is not
        // guaranteed or required. The name is ignored when creating a transfer run.
        name?: string,
        // The BigQuery target dataset id.
        destinationDatasetId?: string,
        // Data transfer specific parameters.
        params?: any,
        // Region in which BigQuery dataset is located. Currently possible values are:
        // "US" and "EU".
        // @OutputOnly
        datasetRegion?: string,
        // User specified display name for the data transfer.
        displayName?: string,
        // Next time when data transfer will run. Output only. Applicable
        // only for batch data transfers.
        // @OutputOnly
        nextRunTime?: string,
        // Is this config disabled. When set to true, no runs are scheduled
        // for a given transfer.
        disabled?: boolean,
        // Data transfer schedule in GROC format.
        // If the data source does not support a custom schedule, this should be
        // empty. If it is empty, the default value for the data source will be
        // used.
        // The specified times are in UTC.
        // Examples of valid GROC include:
        // `1st,3rd monday of month 15:30`,
        // `every wed,fri of jan,jun 13:15`, and
        // `first sunday of quarter 00:00`.
        schedule?: string,
        // Data transfer modification time. Ignored by server on input.
        // @OutputOnly
        updateTime?: string,
        // The number of days to look back to automatically refresh the data.
        // For example, if `data_refresh_window_days = 10`, then every day
        // BigQuery reingests data for [today-10, today-1], rather than ingesting data
        // for just [today-1].
        // Only valid if the data source supports the feature. Set the value to  0
        // to use the default value.
        dataRefreshWindowDays?: number,
        // Data source id. Cannot be changed once data transfer is created.
        dataSourceId?: string,
        // Status of the most recently updated transfer run.
        // @OutputOnly
        status?: string,
    }
    
    interface TransferRun {
        // Data source id.
        // @OutputOnly
        dataSourceId?: string,
        // Data transfer run status. Ignored for input requests.
        // @OutputOnly
        status?: string,
        // The user id for this transfer run.
        // @OutputOnly
        userId?: string,
        // The resource name of the transfer run.
        // Transfer run names have the form
        // `projects/{project_id}/locations/{location}/transferConfigs/{config_id}/runs/{run_id}`.
        // The name is ignored when creating a transfer run.
        name?: string,
        // The BigQuery target dataset id.
        destinationDatasetId?: string,
        // Data transfer specific parameters.
        params?: any,
        // Time when transfer run ended. Parameter ignored by server for input
        // requests.
        // @OutputOnly
        endTime?: string,
        // Region in which BigQuery dataset is located. Currently possible values are:
        // "US" and "EU".
        // @OutputOnly
        datasetRegion?: string,
        // Time when transfer run was started. Parameter ignored by server for input
        // requests.
        // @OutputOnly
        startTime?: string,
        // Minimum time after which a transfer run can be started.
        scheduleTime?: string,
        // Last time the data transfer run status was updated.
        // @OutputOnly
        updateTime?: string,
        // Describes the schedule of this transfer run if it was created as part of
        // a regular schedule. For batch transfer runs that are directly created,
        // this is empty.
        // NOTE: the system might choose to delay the schedule depending on the
        // current load, so `schedule_time` doesn't always matches this.
        // @OutputOnly
        schedule?: string,
        // For batch transfer runs, specifies the date and time that
        // data should be ingested.
        runTime?: string,
    }
    
    interface CheckValidCredsRequest {
    }
    
    interface CheckValidCredsResponse {
        // If set to `true`, the credentials exist and are valid.
        hasValidCreds?: boolean,
    }
    
    interface ScheduleTransferRunsResponse {
        // The transfer runs that were created.
        createdRuns?: TransferRun[],        
    }
    
    interface TransferMessage {
        // Message text.
        messageText?: string,
        // Message severity.
        severity?: string,
        // Time when message was logged.
        messageTime?: string,
    }
    
    interface ListTransferLogsResponse {
        // The stored pipeline transfer messages.
        // @OutputOnly
        transferMessages?: TransferMessage[],        
        // The next-pagination token. For multiple-page list results,
        // this token can be used as the
        // `GetTransferRunLogRequest.page_token`
        // to request the next page of list results.
        // @OutputOnly
        nextPageToken?: string,
    }
    
    interface ListDataSourcesResponse {
        // List of supported data sources and their transfer settings.
        dataSources?: DataSource[],        
        // The next-pagination token. For multiple-page list results,
        // this token can be used as the
        // `ListDataSourcesRequest.page_token`
        // to request the next page of list results.
        // @OutputOnly
        nextPageToken?: string,
    }
    
    interface DataSourceParameter {
        // If set to true, schema should be taken from the parent with the same
        // parameter_id. Only applicable when parameter type is RECORD.
        recurse?: boolean,
        // Parameter description.
        description?: string,
        // All possible values for the parameter.
        allowedValues?: string[],        
        // URL to a help document to further explain the naming requirements.
        validationHelpUrl?: string,
        // For integer and double values specifies minimum allowed value.
        minValue?: number,
        // Regular expression which can be used for parameter validation.
        validationRegex?: string,
        // Parameter identifier.
        paramId?: string,
        // Is parameter required.
        required?: boolean,
        // Can parameter have multiple values.
        repeated?: boolean,
        // Parameter display name in the user interface.
        displayName?: string,
        // Cannot be changed after initial creation.
        immutable?: boolean,
        // Description of the requirements for this field, in case the user input does
        // not fulfill the regex pattern or min/max values.
        validationDescription?: string,
        // When parameter is a record, describes child fields.
        fields?: DataSourceParameter[],        
        // For integer and double values specifies maxminum allowed value.
        maxValue?: number,
        // Parameter type.
        type?: string,
    }
    
    interface ListTransferRunsResponse {
        // The next-pagination token. For multiple-page list results,
        // this token can be used as the
        // `ListTransferRunsRequest.page_token`
        // to request the next page of list results.
        // @OutputOnly
        nextPageToken?: string,
        // The stored pipeline transfer runs.
        // @OutputOnly
        transferRuns?: TransferRun[],        
    }
    
    interface IsEnabledRequest {
    }
    
    interface SetEnabledRequest {
        // Whether data transfer should be enabled or disabled for the project.
        enabled?: boolean,
    }
    
    interface ListTransferConfigsResponse {
        // The stored pipeline transfer configurations.
        // @OutputOnly
        transferConfigs?: TransferConfig[],        
        // The next-pagination token. For multiple-page list results,
        // this token can be used as the
        // `ListTransferConfigsRequest.page_token`
        // to request the next page of list results.
        // @OutputOnly
        nextPageToken?: string,
    }
    
    interface IsEnabledResponse {
        // Indicates whether the project is enabled.
        enabled?: boolean,
    }
    
    interface TransferLogsResource {
        // Returns user facing log messages for the data transfer run.
        list (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Pagination token, which can be used to request a specific page
            // of `ListTransferLogsRequest` list results. For multiple-page
            // results, `ListTransferLogsResponse` outputs
            // a `next_page` token, which can be used as the
            // `page_token` value to request the next page of list results.
            pageToken?: string,
            // Page size. The default page size is the maximum value of 1000 results.
            pageSize?: number,
            // Message types to return. If not populated - INFO, WARNING and ERROR
            // messages are returned.
            messageTypes?: string,
            // Transfer run name in the form:
            // `projects/{project_id}/transferConfigs/{config_Id}/runs/{run_id}`.
            parent: string,
        }) : gapi.client.Request<ListTransferLogsResponse>;        
        
    }
    
    
    interface RunsResource {
        // Deletes the specified transfer run.
        delete (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // The field will contain name of the resource requested, for example:
            // `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
            name: string,
        }) : gapi.client.Request<Empty>;        
        
        // Returns information about running and completed jobs.
        list (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Indicates how run attempts are to be pulled.
            runAttempt?: string,
            // Name of transfer configuration for which transfer runs should be retrieved.
            // Format of transfer configuration resource name is:
            // `projects/{project_id}/transferConfigs/{config_id}`.
            parent: string,
            // Pagination token, which can be used to request a specific page
            // of `ListTransferRunsRequest` list results. For multiple-page
            // results, `ListTransferRunsResponse` outputs
            // a `next_page` token, which can be used as the
            // `page_token` value to request the next page of list results.
            pageToken?: string,
            // Page size. The default page size is the maximum value of 1000 results.
            pageSize?: number,
            // When specified, only transfer runs with requested statuses are returned.
            statuses?: string,
        }) : gapi.client.Request<ListTransferRunsResponse>;        
        
        // Returns information about the particular transfer run.
        get (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // The field will contain name of the resource requested, for example:
            // `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
            name: string,
        }) : gapi.client.Request<TransferRun>;        
        
        transferLogs: TransferLogsResource,
    }
    
    
    interface TransferConfigsResource {
        // Deletes a data transfer configuration,
        // including any associated transfer runs and logs.
        delete (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // The field will contain name of the resource requested, for example:
            // `projects/{project_id}/transferConfigs/{config_id}`
            name: string,
        }) : gapi.client.Request<Empty>;        
        
        // Returns information about all data transfers in the project.
        list (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // When specified, only configurations of requested data sources are returned.
            dataSourceIds?: string,
            // The BigQuery project id for which data sources
            // should be returned: `projects/{project_id}`.
            parent: string,
            // Pagination token, which can be used to request a specific page
            // of `ListTransfersRequest` list results. For multiple-page
            // results, `ListTransfersResponse` outputs
            // a `next_page` token, which can be used as the
            // `page_token` value to request the next page of list results.
            pageToken?: string,
            // Page size. The default page size is the maximum value of 1000 results.
            pageSize?: number,
        }) : gapi.client.Request<ListTransferConfigsResponse>;        
        
        // Creates a new data transfer configuration.
        create (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Optional OAuth2 authorization code to use with this transfer configuration.
            // This is required if new credentials are needed, as indicated by
            // `CheckValidCreds`.
            // In order to obtain authorization_code, please make a
            // request to
            // https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>
            // 
            // * client_id should be OAuth client_id of BigQuery DTS API for the given
            //   data source returned by ListDataSources method.
            // * data_source_scopes are the scopes returned by ListDataSources method.
            // * redirect_uri is an optional parameter. If not specified, then
            //   authorization code is posted to the opener of authorization flow window.
            //   Otherwise it will be sent to the redirect uri. A special value of
            //   urn:ietf:wg:oauth:2.0:oob means that authorization code should be
            //   returned in the title bar of the browser, with the page text prompting
            //   the user to copy the code and paste it in the application.
            authorizationCode?: string,
            // The BigQuery project id where the transfer configuration should be created.
            // Must be in the format /projects/{project_id}/locations/{location_id}
            // or
            // /projects/{project_id}/locations/-
            // In case when '-' is specified as location_id, location is infered from
            // the destination dataset region.
            parent: string,
        }) : gapi.client.Request<TransferConfig>;        
        
        // Creates transfer runs for a time range [range_start_time, range_end_time].
        // For each date - or whatever granularity the data source supports - in the
        // range, one transfer run is created.
        // Note that runs are created per UTC time in the time range.
        scheduleRuns (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Transfer configuration name in the form:
            // `projects/{project_id}/transferConfigs/{config_id}`.
            parent: string,
        }) : gapi.client.Request<ScheduleTransferRunsResponse>;        
        
        // Returns information about a data transfer config.
        get (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // The field will contain name of the resource requested, for example:
            // `projects/{project_id}/transferConfigs/{config_id}`
            name: string,
        }) : gapi.client.Request<TransferConfig>;        
        
        // Updates a data transfer configuration.
        // All fields must be set, even if they are not updated.
        patch (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // The resource name of the transfer run.
            // Transfer run names have the form
            // `projects/{project_id}/transferConfigs/{config_id}`.
            // Where `config_id` is usually a uuid, even though it is not
            // guaranteed or required. The name is ignored when creating a transfer run.
            name: string,
            // Optional OAuth2 authorization code to use with this transfer configuration.
            // If it is provided, the transfer configuration will be associated with the
            // gaia id of the authorizing user.
            // In order to obtain authorization_code, please make a
            // request to
            // https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>
            // 
            // * client_id should be OAuth client_id of BigQuery DTS API for the given
            //   data source returned by ListDataSources method.
            // * data_source_scopes are the scopes returned by ListDataSources method.
            // * redirect_uri is an optional parameter. If not specified, then
            //   authorization code is posted to the opener of authorization flow window.
            //   Otherwise it will be sent to the redirect uri. A special value of
            //   urn:ietf:wg:oauth:2.0:oob means that authorization code should be
            //   returned in the title bar of the browser, with the page text prompting
            //   the user to copy the code and paste it in the application.
            authorizationCode?: string,
            // Required list of fields to be updated in this request.
            updateMask?: string,
        }) : gapi.client.Request<TransferConfig>;        
        
        runs: RunsResource,
    }
    
    
    interface DataSourcesResource {
        // Lists supported data sources and returns their settings,
        // which can be used for UI rendering.
        list (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Pagination token, which can be used to request a specific page
            // of `ListDataSourcesRequest` list results. For multiple-page
            // results, `ListDataSourcesResponse` outputs
            // a `next_page` token, which can be used as the
            // `page_token` value to request the next page of list results.
            pageToken?: string,
            // Page size. The default page size is the maximum value of 1000 results.
            pageSize?: number,
            // The BigQuery project id for which data sources should be returned.
            // Must be in the form: `projects/{project_id}`
            parent: string,
        }) : gapi.client.Request<ListDataSourcesResponse>;        
        
        // Retrieves a supported data source and returns its settings,
        // which can be used for UI rendering.
        get (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // The field will contain name of the resource requested, for example:
            // `projects/{project_id}/dataSources/{data_source_id}`
            name: string,
        }) : gapi.client.Request<DataSource>;        
        
        // Returns true if valid credentials exist for the given data source and
        // requesting user.
        checkValidCreds (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // The data source in the form:
            // `projects/{project_id}/dataSources/{data_source_id}`
            name: string,
        }) : gapi.client.Request<CheckValidCredsResponse>;        
        
    }
    
    
    interface LocationsResource {
        // Returns true if data transfer is enabled for a project.
        isEnabled (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // The name of the project resource in the form:
            // `projects/{project_id}`
            name: string,
        }) : gapi.client.Request<IsEnabledResponse>;        
        
        // Enables or disables data transfer for a project. This
        // method requires the additional scope of
        // 'https://www.googleapis.com/auth/cloudplatformprojects'
        // to manage the cloud project permissions.
        setEnabled (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // The name of the project resource in the form:
            // `projects/{project_id}`
            name: string,
        }) : gapi.client.Request<Empty>;        
        
        transferConfigs: TransferConfigsResource,
        dataSources: DataSourcesResource,
    }
    
    
    interface TransferLogsResource {
        // Returns user facing log messages for the data transfer run.
        list (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Transfer run name in the form:
            // `projects/{project_id}/transferConfigs/{config_Id}/runs/{run_id}`.
            parent: string,
            // Pagination token, which can be used to request a specific page
            // of `ListTransferLogsRequest` list results. For multiple-page
            // results, `ListTransferLogsResponse` outputs
            // a `next_page` token, which can be used as the
            // `page_token` value to request the next page of list results.
            pageToken?: string,
            // Page size. The default page size is the maximum value of 1000 results.
            pageSize?: number,
            // Message types to return. If not populated - INFO, WARNING and ERROR
            // messages are returned.
            messageTypes?: string,
        }) : gapi.client.Request<ListTransferLogsResponse>;        
        
    }
    
    
    interface RunsResource {
        // Deletes the specified transfer run.
        delete (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // The field will contain name of the resource requested, for example:
            // `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
            name: string,
        }) : gapi.client.Request<Empty>;        
        
        // Returns information about running and completed jobs.
        list (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Indicates how run attempts are to be pulled.
            runAttempt?: string,
            // Name of transfer configuration for which transfer runs should be retrieved.
            // Format of transfer configuration resource name is:
            // `projects/{project_id}/transferConfigs/{config_id}`.
            parent: string,
            // Pagination token, which can be used to request a specific page
            // of `ListTransferRunsRequest` list results. For multiple-page
            // results, `ListTransferRunsResponse` outputs
            // a `next_page` token, which can be used as the
            // `page_token` value to request the next page of list results.
            pageToken?: string,
            // Page size. The default page size is the maximum value of 1000 results.
            pageSize?: number,
            // When specified, only transfer runs with requested statuses are returned.
            statuses?: string,
        }) : gapi.client.Request<ListTransferRunsResponse>;        
        
        // Returns information about the particular transfer run.
        get (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // The field will contain name of the resource requested, for example:
            // `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
            name: string,
        }) : gapi.client.Request<TransferRun>;        
        
        transferLogs: TransferLogsResource,
    }
    
    
    interface TransferConfigsResource {
        // Updates a data transfer configuration.
        // All fields must be set, even if they are not updated.
        patch (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Required list of fields to be updated in this request.
            updateMask?: string,
            // The resource name of the transfer run.
            // Transfer run names have the form
            // `projects/{project_id}/transferConfigs/{config_id}`.
            // Where `config_id` is usually a uuid, even though it is not
            // guaranteed or required. The name is ignored when creating a transfer run.
            name: string,
            // Optional OAuth2 authorization code to use with this transfer configuration.
            // If it is provided, the transfer configuration will be associated with the
            // gaia id of the authorizing user.
            // In order to obtain authorization_code, please make a
            // request to
            // https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>
            // 
            // * client_id should be OAuth client_id of BigQuery DTS API for the given
            //   data source returned by ListDataSources method.
            // * data_source_scopes are the scopes returned by ListDataSources method.
            // * redirect_uri is an optional parameter. If not specified, then
            //   authorization code is posted to the opener of authorization flow window.
            //   Otherwise it will be sent to the redirect uri. A special value of
            //   urn:ietf:wg:oauth:2.0:oob means that authorization code should be
            //   returned in the title bar of the browser, with the page text prompting
            //   the user to copy the code and paste it in the application.
            authorizationCode?: string,
        }) : gapi.client.Request<TransferConfig>;        
        
        // Returns information about a data transfer config.
        get (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // The field will contain name of the resource requested, for example:
            // `projects/{project_id}/transferConfigs/{config_id}`
            name: string,
        }) : gapi.client.Request<TransferConfig>;        
        
        // Deletes a data transfer configuration,
        // including any associated transfer runs and logs.
        delete (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // The field will contain name of the resource requested, for example:
            // `projects/{project_id}/transferConfigs/{config_id}`
            name: string,
        }) : gapi.client.Request<Empty>;        
        
        // Returns information about all data transfers in the project.
        list (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Pagination token, which can be used to request a specific page
            // of `ListTransfersRequest` list results. For multiple-page
            // results, `ListTransfersResponse` outputs
            // a `next_page` token, which can be used as the
            // `page_token` value to request the next page of list results.
            pageToken?: string,
            // Page size. The default page size is the maximum value of 1000 results.
            pageSize?: number,
            // When specified, only configurations of requested data sources are returned.
            dataSourceIds?: string,
            // The BigQuery project id for which data sources
            // should be returned: `projects/{project_id}`.
            parent: string,
        }) : gapi.client.Request<ListTransferConfigsResponse>;        
        
        // Creates a new data transfer configuration.
        create (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // The BigQuery project id where the transfer configuration should be created.
            // Must be in the format /projects/{project_id}/locations/{location_id}
            // or
            // /projects/{project_id}/locations/-
            // In case when '-' is specified as location_id, location is infered from
            // the destination dataset region.
            parent: string,
            // Optional OAuth2 authorization code to use with this transfer configuration.
            // This is required if new credentials are needed, as indicated by
            // `CheckValidCreds`.
            // In order to obtain authorization_code, please make a
            // request to
            // https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>
            // 
            // * client_id should be OAuth client_id of BigQuery DTS API for the given
            //   data source returned by ListDataSources method.
            // * data_source_scopes are the scopes returned by ListDataSources method.
            // * redirect_uri is an optional parameter. If not specified, then
            //   authorization code is posted to the opener of authorization flow window.
            //   Otherwise it will be sent to the redirect uri. A special value of
            //   urn:ietf:wg:oauth:2.0:oob means that authorization code should be
            //   returned in the title bar of the browser, with the page text prompting
            //   the user to copy the code and paste it in the application.
            authorizationCode?: string,
        }) : gapi.client.Request<TransferConfig>;        
        
        // Creates transfer runs for a time range [range_start_time, range_end_time].
        // For each date - or whatever granularity the data source supports - in the
        // range, one transfer run is created.
        // Note that runs are created per UTC time in the time range.
        scheduleRuns (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Transfer configuration name in the form:
            // `projects/{project_id}/transferConfigs/{config_id}`.
            parent: string,
        }) : gapi.client.Request<ScheduleTransferRunsResponse>;        
        
        runs: RunsResource,
    }
    
    
    interface DataSourcesResource {
        // Lists supported data sources and returns their settings,
        // which can be used for UI rendering.
        list (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Pagination token, which can be used to request a specific page
            // of `ListDataSourcesRequest` list results. For multiple-page
            // results, `ListDataSourcesResponse` outputs
            // a `next_page` token, which can be used as the
            // `page_token` value to request the next page of list results.
            pageToken?: string,
            // Page size. The default page size is the maximum value of 1000 results.
            pageSize?: number,
            // The BigQuery project id for which data sources should be returned.
            // Must be in the form: `projects/{project_id}`
            parent: string,
        }) : gapi.client.Request<ListDataSourcesResponse>;        
        
        // Retrieves a supported data source and returns its settings,
        // which can be used for UI rendering.
        get (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // The field will contain name of the resource requested, for example:
            // `projects/{project_id}/dataSources/{data_source_id}`
            name: string,
        }) : gapi.client.Request<DataSource>;        
        
        // Returns true if valid credentials exist for the given data source and
        // requesting user.
        checkValidCreds (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // The data source in the form:
            // `projects/{project_id}/dataSources/{data_source_id}`
            name: string,
        }) : gapi.client.Request<CheckValidCredsResponse>;        
        
    }
    
    
    interface ProjectsResource {
        // Enables or disables data transfer for a project. This
        // method requires the additional scope of
        // 'https://www.googleapis.com/auth/cloudplatformprojects'
        // to manage the cloud project permissions.
        setEnabled (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // The name of the project resource in the form:
            // `projects/{project_id}`
            name: string,
        }) : gapi.client.Request<Empty>;        
        
        // Returns true if data transfer is enabled for a project.
        isEnabled (request: {        
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
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // The name of the project resource in the form:
            // `projects/{project_id}`
            name: string,
        }) : gapi.client.Request<IsEnabledResponse>;        
        
        locations: LocationsResource,
        transferConfigs: TransferConfigsResource,
        dataSources: DataSourcesResource,
    }
    
}

declare module gapi.client.bigquerydatatransfer {
    var projects: gapi.client.bigquerydatatransfer.ProjectsResource; 
    
}
