// Type definitions for Google Google Cloud Billing API v1
// Project: https://cloud.google.com/billing/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.cloudbilling {
    
    interface ProjectBillingInfo {
        // True if the project is associated with an open billing account, to which
        // usage on the project is charged. False if the project is associated with a
        // closed billing account, or no billing account at all, and therefore cannot
        // use paid services. This field is read-only.
        billingEnabled?: boolean,
        // The resource name for the `ProjectBillingInfo`; has the form
        // `projects/{project_id}/billingInfo`. For example, the resource name for the
        // billing information for project `tokyo-rain-123` would be
        // `projects/tokyo-rain-123/billingInfo`. This field is read-only.
        name?: string,
        // The ID of the project that this `ProjectBillingInfo` represents, such as
        // `tokyo-rain-123`. This is a convenience field so that you don't need to
        // parse the `name` field to obtain a project ID. This field is read-only.
        projectId?: string,
        // The resource name of the billing account associated with the project, if
        // any. For example, `billingAccounts/012345-567890-ABCDEF`.
        billingAccountName?: string,
    }
    
    interface ListProjectBillingInfoResponse {
        // A token to retrieve the next page of results. To retrieve the next page,
        // call `ListProjectBillingInfo` again with the `page_token` field set to this
        // value. This field is empty if there are no more results to retrieve.
        nextPageToken?: string,
        // A list of `ProjectBillingInfo` resources representing the projects
        // associated with the billing account.
        projectBillingInfo?: ProjectBillingInfo[],        
    }
    
    interface ListBillingAccountsResponse {
        // A token to retrieve the next page of results. To retrieve the next page,
        // call `ListBillingAccounts` again with the `page_token` field set to this
        // value. This field is empty if there are no more results to retrieve.
        nextPageToken?: string,
        // A list of billing accounts.
        billingAccounts?: BillingAccount[],        
    }
    
    interface BillingAccount {
        // The display name given to the billing account, such as `My Billing
        // Account`. This name is displayed in the Google Cloud Console.
        displayName?: string,
        // True if the billing account is open, and will therefore be charged for any
        // usage on associated projects. False if the billing account is closed, and
        // therefore projects associated with it will be unable to use paid services.
        open?: boolean,
        // The resource name of the billing account. The resource name has the form
        // `billingAccounts/{billing_account_id}`. For example,
        // `billingAccounts/012345-567890-ABCDEF` would be the resource name for
        // billing account `012345-567890-ABCDEF`.
        name?: string,
    }
    
    interface ProjectsResource {
        // Sets or updates the billing account associated with a project. You specify
        // the new billing account by setting the `billing_account_name` in the
        // `ProjectBillingInfo` resource to the resource name of a billing account.
        // Associating a project with an open billing account enables billing on the
        // project and allows charges for resource usage. If the project already had a
        // billing account, this method changes the billing account used for resource
        // usage charges.
        // 
        // *Note:* Incurred charges that have not yet been reported in the transaction
        // history of the Google Cloud Console may be billed to the new billing
        // account, even if the charge occurred before the new billing account was
        // assigned to the project.
        // 
        // The current authenticated user must have ownership privileges for both the
        // [project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo
        // ) and the [billing
        // account](https://support.google.com/cloud/answer/4430947).
        // 
        // You can disable billing on the project by setting the
        // `billing_account_name` field to empty. This action disassociates the
        // current billing account from the project. Any billable activity of your
        // in-use services will stop, and your application could stop functioning as
        // expected. Any unbilled charges to date will be billed to the previously
        // associated account. The current authenticated user must be either an owner
        // of the project or an owner of the billing account for the project.
        // 
        // Note that associating a project with a *closed* billing account will have
        // much the same effect as disabling billing on the project: any paid
        // resources used by the project will be shut down. Thus, unless you wish to
        // disable billing, you should always call this method with the name of an
        // *open* billing account.
        updateBillingInfo (request: {        
            // OAuth access token.
            access_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Data format for response.
            alt?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // The resource name of the project associated with the billing information
            // that you want to update. For example, `projects/tokyo-rain-123`.
            name: string,
        }) : gapi.client.Request<ProjectBillingInfo>;        
        
        // Gets the billing information for a project. The current authenticated user
        // must have [permission to view the
        // project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo
        // ).
        getBillingInfo (request: {        
            // OAuth access token.
            access_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Data format for response.
            alt?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // The resource name of the project for which billing information is
            // retrieved. For example, `projects/tokyo-rain-123`.
            name: string,
        }) : gapi.client.Request<ProjectBillingInfo>;        
        
    }
    
    
    interface ProjectsResource {
        // Lists the projects associated with a billing account. The current
        // authenticated user must be an [owner of the billing
        // account](https://support.google.com/cloud/answer/4430947).
        list (request: {        
            // OAuth access token.
            access_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Data format for response.
            alt?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Requested page size. The maximum page size is 100; this is also the
            // default.
            pageSize?: number,
            // The resource name of the billing account associated with the projects that
            // you want to list. For example, `billingAccounts/012345-567890-ABCDEF`.
            name: string,
            // A token identifying a page of results to be returned. This should be a
            // `next_page_token` value returned from a previous `ListProjectBillingInfo`
            // call. If unspecified, the first page of results is returned.
            pageToken?: string,
        }) : gapi.client.Request<ListProjectBillingInfoResponse>;        
        
    }
    
    
    interface BillingAccountsResource {
        // Gets information about a billing account. The current authenticated user
        // must be an [owner of the billing
        // account](https://support.google.com/cloud/answer/4430947).
        get (request: {        
            // OAuth access token.
            access_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Data format for response.
            alt?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // The resource name of the billing account to retrieve. For example,
            // `billingAccounts/012345-567890-ABCDEF`.
            name: string,
        }) : gapi.client.Request<BillingAccount>;        
        
        // Lists the billing accounts that the current authenticated user
        // [owns](https://support.google.com/cloud/answer/4430947).
        list (request: {        
            // OAuth access token.
            access_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Data format for response.
            alt?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Requested page size. The maximum page size is 100; this is also the
            // default.
            pageSize?: number,
            // A token identifying a page of results to return. This should be a
            // `next_page_token` value returned from a previous `ListBillingAccounts`
            // call. If unspecified, the first page of results is returned.
            pageToken?: string,
        }) : gapi.client.Request<ListBillingAccountsResponse>;        
        
        projects: ProjectsResource,
    }
    
}

declare module gapi.client.cloudbilling {
    var projects: gapi.client.cloudbilling.ProjectsResource; 
    
    var billingAccounts: gapi.client.cloudbilling.BillingAccountsResource; 
    
}
