// Type definitions for Google Google Compute Engine Instance Group Updater API v1beta1
// Project: https://cloud.google.com/compute/docs/instance-groups/manager/#applying_rolling_updates_using_the_updater_service
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.replicapoolupdater {
    
    interface InstanceUpdate {
        // Errors that occurred during the instance update.
        error?: {        
            // [Output Only] The array of errors encountered while processing this operation.
            errors?: {            
                // [Output Only] The error type identifier for this error.
                code?: string,
                // [Output Only] Indicates the field in the request that caused the error. This property is optional.
                location?: string,
                // [Output Only] An optional, human-readable error message.
                message?: string,
            }[],            
        },        
        // Fully-qualified URL of the instance being updated.
        instance?: string,
        // Status of the instance update. Possible values are:  
        // - "PENDING": The instance update is pending execution. 
        // - "ROLLING_FORWARD": The instance update is going forward. 
        // - "ROLLING_BACK": The instance update is being rolled back. 
        // - "PAUSED": The instance update is temporarily paused (inactive). 
        // - "ROLLED_OUT": The instance update is finished, the instance is running the new template. 
        // - "ROLLED_BACK": The instance update is finished, the instance has been reverted to the previous template. 
        // - "CANCELLED": The instance update is paused and no longer can be resumed, undefined in which template the instance is running.
        status?: string,
    }
    
    interface InstanceUpdateList {
        // Collection of requested instance updates.
        items?: InstanceUpdate[],        
        // [Output Only] Type of the resource.
        kind?: string,
        // A token used to continue a truncated list request.
        nextPageToken?: string,
        // [Output Only] The fully qualified URL for the resource.
        selfLink?: string,
    }
    
    interface Operation {
        // 
        clientOperationId?: string,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // 
        endTime?: string,
        // [Output Only] If errors occurred during processing of this operation, this field will be populated.
        error?: {        
            // [Output Only] The array of errors encountered while processing this operation.
            errors?: {            
                // [Output Only] The error type identifier for this error.
                code?: string,
                // [Output Only] Indicates the field in the request that caused the error. This property is optional.
                location?: string,
                // [Output Only] An optional, human-readable error message.
                message?: string,
            }[],            
        },        
        // 
        httpErrorMessage?: string,
        // 
        httpErrorStatusCode?: number,
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // [Output Only] The time that this operation was requested. This is in RFC 3339 format.
        insertTime?: string,
        // [Output Only] Type of the resource. Always replicapoolupdater#operation for Operation resources.
        kind?: string,
        // [Output Only] Name of the resource.
        name?: string,
        // 
        operationType?: string,
        // 
        progress?: number,
        // [Output Only] URL of the region where the operation resides.
        region?: string,
        // [Output Only] The fully qualified URL for the resource.
        selfLink?: string,
        // [Output Only] The time that this operation was started by the server. This is in RFC 3339 format.
        startTime?: string,
        // [Output Only] Status of the operation. Can be one of the following: "PENDING", "RUNNING", or "DONE".
        status?: string,
        // [Output Only] An optional textual description of the current status of the operation.
        statusMessage?: string,
        // [Output Only] Unique target id which identifies a particular incarnation of the target.
        targetId?: string,
        // [Output Only] URL of the resource the operation is mutating.
        targetLink?: string,
        // 
        user?: string,
        // 
        warnings?: {        
            // [Output only] The warning type identifier for this warning.
            code?: string,
            // [Output only] Metadata for this warning in key:value format.
            data?: {            
                // [Output Only] Metadata key for this warning.
                key?: string,
                // [Output Only] Metadata value for this warning.
                value?: string,
            }[],            
            // [Output only] Optional human-readable details for this warning.
            message?: string,
        }[],        
        // [Output Only] URL of the zone where the operation resides.
        zone?: string,
    }
    
    interface OperationList {
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // [Output Only] The Operation resources.
        items?: Operation[],        
        // [Output Only] Type of resource. Always replicapoolupdater#operationList for OperationList resources.
        kind?: string,
        // [Output Only] A token used to continue a truncate.
        nextPageToken?: string,
        // [Output Only] The fully qualified URL for the resource.
        selfLink?: string,
    }
    
    interface RollingUpdate {
        // Specifies the action to take for each instance within the instance group. This can be RECREATE which will recreate each instance and is only available for managed instance groups. It can also be REBOOT which performs a soft reboot for each instance and is only available for regular (non-managed) instance groups.
        actionType?: string,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional textual description of the resource; provided by the client when the resource is created.
        description?: string,
        // [Output Only] Errors that occurred during the rolling update.
        error?: {        
            // [Output Only] The array of errors encountered while processing this operation.
            errors?: {            
                // [Output Only] The error type identifier for this error.
                code?: string,
                // [Output Only] Indicates the field in the request that caused the error. This property is optional.
                location?: string,
                // [Output Only] An optional, human-readable error message.
                message?: string,
            }[],            
        },        
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // Fully-qualified URL of an instance group being updated. Exactly one of instanceGroupManager and instanceGroup must be set.
        instanceGroup?: string,
        // Fully-qualified URL of an instance group manager being updated. Exactly one of instanceGroupManager and instanceGroup must be set.
        instanceGroupManager?: string,
        // Fully-qualified URL of an instance template to apply.
        instanceTemplate?: string,
        // [Output Only] Type of the resource.
        kind?: string,
        // Fully-qualified URL of the instance template encountered while starting the update.
        oldInstanceTemplate?: string,
        // Parameters of the update process.
        policy?: {        
            // Number of instances to update before the updater pauses the rolling update.
            autoPauseAfterInstances?: number,
            // The maximum amount of time that the updater waits for a HEALTHY state after all of the update steps are complete. If the HEALTHY state is not received before the deadline, the instance update is considered a failure.
            instanceStartupTimeoutSec?: number,
            // The maximum number of instances that can be updated simultaneously. An instance update is considered complete only after the instance is restarted and initialized.
            maxNumConcurrentInstances?: number,
            // The maximum number of instance updates that can fail before the group update is considered a failure. An instance update is considered failed if any of its update actions (e.g. Stop call on Instance resource in Rolling Reboot) failed with permanent failure, or if the instance is in an UNHEALTHY state after it finishes all of the update actions.
            maxNumFailedInstances?: number,
            // The minimum amount of time that the updater spends to update each instance. Update time is the time it takes to complete all update actions (e.g. Stop call on Instance resource in Rolling Reboot), reboot, and initialize. If the instance update finishes early, the updater pauses for the remainder of the time before it starts the next instance update.
            minInstanceUpdateTimeSec?: number,
        },        
        // [Output Only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess at when the update will be complete. This number should be monotonically increasing as the update progresses.
        progress?: number,
        // [Output Only] The fully qualified URL for the resource.
        selfLink?: string,
        // [Output Only] Status of the update. Possible values are:  
        // - "ROLLING_FORWARD": The update is going forward. 
        // - "ROLLING_BACK": The update is being rolled back. 
        // - "PAUSED": The update is temporarily paused (inactive). 
        // - "ROLLED_OUT": The update is finished, all instances have been updated successfully. 
        // - "ROLLED_BACK": The update is finished, all instances have been reverted to the previous template. 
        // - "CANCELLED": The update is paused and no longer can be resumed, undefined how many instances are running in which template.
        status?: string,
        // [Output Only] An optional textual description of the current status of the update.
        statusMessage?: string,
        // [Output Only] User who requested the update, for example: user@example.com.
        user?: string,
    }
    
    interface RollingUpdateList {
        // Collection of requested updates.
        items?: RollingUpdate[],        
        // [Output Only] Type of the resource.
        kind?: string,
        // A token used to continue a truncated list request.
        nextPageToken?: string,
        // [Output Only] The fully qualified URL for the resource.
        selfLink?: string,
    }
    
    interface RollingUpdatesResource {
        // Cancels an update. The update must be PAUSED before it can be cancelled. This has no effect if the update is already CANCELLED.
        cancel (request: {        
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
            // The Google Developers Console project name.
            project: string,
            // The name of the update.
            rollingUpdate: string,
            // The name of the zone in which the update's target resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns information about an update.
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
            // The Google Developers Console project name.
            project: string,
            // The name of the update.
            rollingUpdate: string,
            // The name of the zone in which the update's target resides.
            zone: string,
        }) : gapi.client.Request<RollingUpdate>;        
        
        // Inserts and starts a new update.
        insert (request: {        
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
            // The Google Developers Console project name.
            project: string,
            // The name of the zone in which the update's target resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists recent updates for a given managed instance group, in reverse chronological order and paginated format.
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
            // Optional. Filter expression for filtering listed resources.
            filter?: string,
            // Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
            maxResults?: number,
            // Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
            pageToken?: string,
            // The Google Developers Console project name.
            project: string,
            // The name of the zone in which the update's target resides.
            zone: string,
        }) : gapi.client.Request<RollingUpdateList>;        
        
        // Lists the current status for each instance within a given update.
        listInstanceUpdates (request: {        
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
            // Optional. Filter expression for filtering listed resources.
            filter?: string,
            // Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
            maxResults?: number,
            // Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
            pageToken?: string,
            // The Google Developers Console project name.
            project: string,
            // The name of the update.
            rollingUpdate: string,
            // The name of the zone in which the update's target resides.
            zone: string,
        }) : gapi.client.Request<InstanceUpdateList>;        
        
        // Pauses the update in state from ROLLING_FORWARD or ROLLING_BACK. Has no effect if invoked when the state of the update is PAUSED.
        pause (request: {        
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
            // The Google Developers Console project name.
            project: string,
            // The name of the update.
            rollingUpdate: string,
            // The name of the zone in which the update's target resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Continues an update in PAUSED state. Has no effect if invoked when the state of the update is ROLLED_OUT.
        resume (request: {        
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
            // The Google Developers Console project name.
            project: string,
            // The name of the update.
            rollingUpdate: string,
            // The name of the zone in which the update's target resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Rolls back the update in state from ROLLING_FORWARD or PAUSED. Has no effect if invoked when the state of the update is ROLLED_BACK.
        rollback (request: {        
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
            // The Google Developers Console project name.
            project: string,
            // The name of the update.
            rollingUpdate: string,
            // The name of the zone in which the update's target resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface ZoneOperationsResource {
        // Retrieves the specified zone-specific operation resource.
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
            // Name of the operation resource to return.
            operation: string,
            // Name of the project scoping this request.
            project: string,
            // Name of the zone scoping this request.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of Operation resources contained within the specified zone.
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
            // Optional. Filter expression for filtering listed resources.
            filter?: string,
            // Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
            maxResults?: number,
            // Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
            pageToken?: string,
            // Name of the project scoping this request.
            project: string,
            // Name of the zone scoping this request.
            zone: string,
        }) : gapi.client.Request<OperationList>;        
        
    }
    
}

declare module gapi.client.replicapoolupdater {
    var rollingUpdates: gapi.client.replicapoolupdater.RollingUpdatesResource; 
    
    var zoneOperations: gapi.client.replicapoolupdater.ZoneOperationsResource; 
    
}
