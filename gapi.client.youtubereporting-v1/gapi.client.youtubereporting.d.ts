// Type definitions for Google YouTube Reporting API v1
// Project: https://developers.google.com/youtube/reporting/v1/reports/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.youtubereporting {
    
    interface ListJobsResponse {
        // The list of jobs.
        jobs?: Job[],        
        // A token to retrieve next page of results.
        // Pass this value in the
        // ListJobsRequest.page_token
        // field in the subsequent call to `ListJobs` method to retrieve the next
        // page of results.
        nextPageToken?: string,
    }
    
    interface Job {
        // True if this a system-managed job that cannot be modified by the user;
        // otherwise false.
        systemManaged?: boolean,
        // The server-generated ID of the job (max. 40 characters).
        id?: string,
        // The creation date/time of the job.
        createTime?: string,
        // The type of reports this job creates. Corresponds to the ID of a
        // ReportType.
        reportTypeId?: string,
        // The date/time when this job will expire/expired. After a job expired, no
        // new reports are generated.
        expireTime?: string,
        // The name of the job (max. 100 characters).
        name?: string,
    }
    
    interface ListReportsResponse {
        // A token to retrieve next page of results.
        // Pass this value in the
        // ListReportsRequest.page_token
        // field in the subsequent call to `ListReports` method to retrieve the next
        // page of results.
        nextPageToken?: string,
        // The list of report types.
        reports?: Report[],        
    }
    
    interface Media {
        // Name of the media resource.
        resourceName?: string,
    }
    
    interface Report {
        // The server-generated ID of the report.
        id?: string,
        // The date/time when the job this report belongs to will expire/expired.
        jobExpireTime?: string,
        // The end of the time period that the report instance covers. The value is
        // exclusive.
        endTime?: string,
        // The URL from which the report can be downloaded (max. 1000 characters).
        downloadUrl?: string,
        // The start of the time period that the report instance covers. The value is
        // inclusive.
        startTime?: string,
        // The date/time when this report was created.
        createTime?: string,
        // The ID of the job that created this report.
        jobId?: string,
    }
    
    interface Empty {
    }
    
    interface ListReportTypesResponse {
        // A token to retrieve next page of results.
        // Pass this value in the
        // ListReportTypesRequest.page_token
        // field in the subsequent call to `ListReportTypes` method to retrieve the next
        // page of results.
        nextPageToken?: string,
        // The list of report types.
        reportTypes?: ReportType[],        
    }
    
    interface ReportType {
        // The name of the report type (max. 100 characters).
        name?: string,
        // True if this a system-managed report type; otherwise false. Reporting jobs
        // for system-managed report types are created automatically and can thus not
        // be used in the `CreateJob` method.
        systemManaged?: boolean,
        // The ID of the report type (max. 100 characters).
        id?: string,
        // The date/time when this report type was/will be deprecated.
        deprecateTime?: string,
    }
    
    interface MediaResource {
        // Method for media download. Download is supported
        // on the URI `/v1/media/{+name}?alt=media`.
        download (request: {        
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
            // Name of the media that is being downloaded.  See
            // ReadRequest.resource_name.
            resourceName: string,
        }) : gapi.client.Request<Media>;        
        
    }
    
    
    interface ReportsResource {
        // Gets the metadata of a specific report.
        get (request: {        
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
            // The content owner's external ID on which behalf the user is acting on. If
            // not set, the user is acting for himself (his own channel).
            onBehalfOfContentOwner?: string,
            // The ID of the report to retrieve.
            reportId: string,
            // The ID of the job.
            jobId: string,
        }) : gapi.client.Request<Report>;        
        
        // Lists reports created by a specific job.
        // Returns NOT_FOUND if the job does not exist.
        list (request: {        
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
            // The ID of the job.
            jobId: string,
            // If set, only reports created after the specified date/time are returned.
            createdAfter?: string,
            // A token identifying a page of results the server should return. Typically,
            // this is the value of
            // ListReportsResponse.next_page_token
            // returned in response to the previous call to the `ListReports` method.
            pageToken?: string,
            // If set, only reports whose start time is greater than or equal the
            // specified date/time are returned.
            startTimeAtOrAfter?: string,
            // Requested page size. Server may return fewer report types than requested.
            // If unspecified, server will pick an appropriate default.
            pageSize?: number,
            // The content owner's external ID on which behalf the user is acting on. If
            // not set, the user is acting for himself (his own channel).
            onBehalfOfContentOwner?: string,
            // If set, only reports whose start time is smaller than the specified
            // date/time are returned.
            startTimeBefore?: string,
        }) : gapi.client.Request<ListReportsResponse>;        
        
    }
    
    
    interface JobsResource {
        // Creates a job and returns it.
        create (request: {        
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
            // The content owner's external ID on which behalf the user is acting on. If
            // not set, the user is acting for himself (his own channel).
            onBehalfOfContentOwner?: string,
        }) : gapi.client.Request<Job>;        
        
        // Deletes a job.
        delete (request: {        
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
            // The content owner's external ID on which behalf the user is acting on. If
            // not set, the user is acting for himself (his own channel).
            onBehalfOfContentOwner?: string,
            // The ID of the job to delete.
            jobId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Gets a job.
        get (request: {        
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
            // The ID of the job to retrieve.
            jobId: string,
            // The content owner's external ID on which behalf the user is acting on. If
            // not set, the user is acting for himself (his own channel).
            onBehalfOfContentOwner?: string,
        }) : gapi.client.Request<Job>;        
        
        // Lists jobs.
        list (request: {        
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
            // The content owner's external ID on which behalf the user is acting on. If
            // not set, the user is acting for himself (his own channel).
            onBehalfOfContentOwner?: string,
            // If set to true, also system-managed jobs will be returned; otherwise only
            // user-created jobs will be returned. System-managed jobs can neither be
            // modified nor deleted.
            includeSystemManaged?: boolean,
            // A token identifying a page of results the server should return. Typically,
            // this is the value of
            // ListReportTypesResponse.next_page_token
            // returned in response to the previous call to the `ListJobs` method.
            pageToken?: string,
            // Requested page size. Server may return fewer jobs than requested.
            // If unspecified, server will pick an appropriate default.
            pageSize?: number,
        }) : gapi.client.Request<ListJobsResponse>;        
        
        reports: ReportsResource,
    }
    
    
    interface ReportTypesResource {
        // Lists report types.
        list (request: {        
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
            // The content owner's external ID on which behalf the user is acting on. If
            // not set, the user is acting for himself (his own channel).
            onBehalfOfContentOwner?: string,
            // If set to true, also system-managed report types will be returned;
            // otherwise only the report types that can be used to create new reporting
            // jobs will be returned.
            includeSystemManaged?: boolean,
            // A token identifying a page of results the server should return. Typically,
            // this is the value of
            // ListReportTypesResponse.next_page_token
            // returned in response to the previous call to the `ListReportTypes` method.
            pageToken?: string,
            // Requested page size. Server may return fewer report types than requested.
            // If unspecified, server will pick an appropriate default.
            pageSize?: number,
        }) : gapi.client.Request<ListReportTypesResponse>;        
        
    }
    
}

declare module gapi.client.youtubereporting {
    var media: gapi.client.youtubereporting.MediaResource; 
    
    var jobs: gapi.client.youtubereporting.JobsResource; 
    
    var reportTypes: gapi.client.youtubereporting.ReportTypesResource; 
    
}
