// Type definitions for Google Google Compute Engine Instance Group Manager API v1beta2
// Project: https://developers.google.com/compute/docs/instance-groups/manager/v1beta2
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.replicapool {
    
    interface InstanceGroupManager {
        // The autohealing policy for this managed instance group. You can specify only one value.
        autoHealingPolicies?: ReplicaPoolAutoHealingPolicy[],        
        // The base instance name to use for instances in this group. The value must be a valid RFC1035 name. Supported characters are lowercase letters, numbers, and hyphens (-). Instances are named by appending a hyphen and a random four-character string to the base instance name.
        baseInstanceName?: string,
        // [Output only] The time the instance group manager was created, in RFC3339 text format.
        creationTimestamp?: string,
        // [Output only] The number of instances that currently exist and are a part of this group. This includes instances that are starting but are not yet RUNNING, and instances that are in the process of being deleted or abandoned.
        currentSize?: number,
        // An optional textual description of the instance group manager.
        description?: string,
        // [Output only] Fingerprint of the instance group manager. This field is used for optimistic locking. An up-to-date fingerprint must be provided in order to modify the Instance Group Manager resource.
        fingerprint?: string,
        // [Output only] The full URL of the instance group created by the manager. This group contains all of the instances being managed, and cannot contain non-managed instances.
        group?: string,
        // [Output only] A server-assigned unique identifier for the resource.
        id?: string,
        // The full URL to an instance template from which all new instances will be created.
        instanceTemplate?: string,
        // [Output only] The resource type. Always replicapool#instanceGroupManager.
        kind?: string,
        // The name of the instance group manager. Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens.
        name?: string,
        // [Output only] The fully qualified URL for this resource.
        selfLink?: string,
        // The full URL of all target pools to which new instances in the group are added. Updating the target pool values does not affect existing instances.
        targetPools?: string[],        
        // [Output only] The number of instances that the manager is attempting to maintain. Deleting or abandoning instances affects this number, as does resizing the group.
        targetSize?: number,
    }
    
    interface InstanceGroupManagerList {
        // Unique identifier for the resource; defined by the server (output only).
        id?: string,
        // A list of instance resources.
        items?: InstanceGroupManager[],        
        // Type of resource.
        kind?: string,
        // A token used to continue a truncated list request (output only).
        nextPageToken?: string,
        // Server defined URL for this resource (output only).
        selfLink?: string,
    }
    
    interface InstanceGroupManagersAbandonInstancesRequest {
        // The names of one or more instances to abandon. For example:
        // { 'instances': [ 'instance-c3po', 'instance-r2d2' ] }
        instances?: string[],        
    }
    
    interface InstanceGroupManagersDeleteInstancesRequest {
        // Names of instances to delete.
        // 
        // Example: 'instance-foo', 'instance-bar'
        instances?: string[],        
    }
    
    interface InstanceGroupManagersRecreateInstancesRequest {
        // The names of one or more instances to recreate. For example:
        // { 'instances': [ 'instance-c3po', 'instance-r2d2' ] }
        instances?: string[],        
    }
    
    interface InstanceGroupManagersSetInstanceTemplateRequest {
        // The full URL to an Instance Template from which all new instances will be created.
        instanceTemplate?: string,
    }
    
    interface InstanceGroupManagersSetTargetPoolsRequest {
        // The current fingerprint of the Instance Group Manager resource. If this does not match the server-side fingerprint of the resource, then the request will be rejected.
        fingerprint?: string,
        // A list of fully-qualified URLs to existing Target Pool resources. New instances in the Instance Group Manager will be added to the specified target pools; existing instances are not affected.
        targetPools?: string[],        
    }
    
    interface Operation {
        // [Output only] An optional identifier specified by the client when the mutation was initiated. Must be unique for all operation resources in the project.
        clientOperationId?: string,
        // [Output Only] The time that this operation was requested, in RFC3339 text format.
        creationTimestamp?: string,
        // [Output Only] The time that this operation was completed, in RFC3339 text format.
        endTime?: string,
        // [Output Only] If errors occurred during processing of this operation, this field will be populated.
        error?: {        
            // [Output Only] The array of errors encountered while processing this operation.
            errors?: {            
                // [Output Only] The error type identifier for this error.
                code?: string,
                // [Output Only] Indicates the field in the request which caused the error. This property is optional.
                location?: string,
                // [Output Only] An optional, human-readable error message.
                message?: string,
            }[],            
        },        
        // [Output only] If operation fails, the HTTP error message returned.
        httpErrorMessage?: string,
        // [Output only] If operation fails, the HTTP error status code returned.
        httpErrorStatusCode?: number,
        // [Output Only] Unique identifier for the resource, generated by the server.
        id?: string,
        // [Output Only] The time that this operation was requested, in RFC3339 text format.
        insertTime?: string,
        // [Output only] Type of the resource.
        kind?: string,
        // [Output Only] Name of the resource.
        name?: string,
        // [Output only] Type of the operation. Operations include insert, update, and delete.
        operationType?: string,
        // [Output only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess at when the operation will be complete. This number should be monotonically increasing as the operation progresses.
        progress?: number,
        // [Output Only] URL of the region where the operation resides. Only available when performing regional operations.
        region?: string,
        // [Output Only] Server-defined fully-qualified URL for this resource.
        selfLink?: string,
        // [Output Only] The time that this operation was started by the server, in RFC3339 text format.
        startTime?: string,
        // [Output Only] Status of the operation.
        status?: string,
        // [Output Only] An optional textual description of the current status of the operation.
        statusMessage?: string,
        // [Output Only] Unique target ID which identifies a particular incarnation of the target.
        targetId?: string,
        // [Output only] URL of the resource the operation is mutating.
        targetLink?: string,
        // [Output Only] User who requested the operation, for example: user@example.com.
        user?: string,
        // [Output Only] If there are issues with this operation, a warning is returned.
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
        // [Output Only] URL of the zone where the operation resides. Only available when performing per-zone operations.
        zone?: string,
    }
    
    interface OperationList {
        // Unique identifier for the resource; defined by the server (output only).
        id?: string,
        // The operation resources.
        items?: Operation[],        
        // Type of resource.
        kind?: string,
        // A token used to continue a truncated list request (output only).
        nextPageToken?: string,
        // Server defined URL for this resource (output only).
        selfLink?: string,
    }
    
    interface ReplicaPoolAutoHealingPolicy {
        // The action to perform when an instance becomes unhealthy. Possible values are RECREATE or REBOOT. RECREATE replaces an unhealthy instance with a new instance that is based on the instance template for this managed instance group. REBOOT performs a soft reboot on an instance. If the instance cannot reboot, the instance performs a hard restart.
        actionType?: string,
        // The URL for the HealthCheck that signals autohealing.
        healthCheck?: string,
    }
    
    interface InstanceGroupManagersResource {
        // Removes the specified instances from the managed instance group, and from any target pools of which they were members, without deleting the instances.
        abandonInstances (request: {        
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
            // The name of the instance group manager.
            instanceGroupManager: string,
            // The Google Developers Console project name.
            project: string,
            // The name of the zone in which the instance group manager resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Deletes the instance group manager and all instances contained within. If you'd like to delete the manager without deleting the instances, you must first abandon the instances to remove them from the group.
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
            // Name of the Instance Group Manager resource to delete.
            instanceGroupManager: string,
            // The Google Developers Console project name.
            project: string,
            // The name of the zone in which the instance group manager resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Deletes the specified instances. The instances are deleted, then removed from the instance group and any target pools of which they were a member. The targetSize of the instance group manager is reduced by the number of instances deleted.
        deleteInstances (request: {        
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
            // The name of the instance group manager.
            instanceGroupManager: string,
            // The Google Developers Console project name.
            project: string,
            // The name of the zone in which the instance group manager resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Returns the specified Instance Group Manager resource.
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
            // Name of the instance resource to return.
            instanceGroupManager: string,
            // The Google Developers Console project name.
            project: string,
            // The name of the zone in which the instance group manager resides.
            zone: string,
        }) : gapi.client.Request<InstanceGroupManager>;        
        
        // Creates an instance group manager, as well as the instance group and the specified number of instances.
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
            // Number of instances that should exist.
            size: number,
            // The name of the zone in which the instance group manager resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the list of Instance Group Manager resources contained within the specified zone.
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
            // The name of the zone in which the instance group manager resides.
            zone: string,
        }) : gapi.client.Request<InstanceGroupManagerList>;        
        
        // Recreates the specified instances. The instances are deleted, then recreated using the instance group manager's current instance template.
        recreateInstances (request: {        
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
            // The name of the instance group manager.
            instanceGroupManager: string,
            // The Google Developers Console project name.
            project: string,
            // The name of the zone in which the instance group manager resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Resizes the managed instance group up or down. If resized up, new instances are created using the current instance template. If resized down, instances are removed in the order outlined in Resizing a managed instance group.
        resize (request: {        
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
            // The name of the instance group manager.
            instanceGroupManager: string,
            // The Google Developers Console project name.
            project: string,
            // Number of instances that should exist in this Instance Group Manager.
            size: number,
            // The name of the zone in which the instance group manager resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets the instance template to use when creating new instances in this group. Existing instances are not affected.
        setInstanceTemplate (request: {        
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
            // The name of the instance group manager.
            instanceGroupManager: string,
            // The Google Developers Console project name.
            project: string,
            // The name of the zone in which the instance group manager resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected.
        setTargetPools (request: {        
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
            // The name of the instance group manager.
            instanceGroupManager: string,
            // The Google Developers Console project name.
            project: string,
            // The name of the zone in which the instance group manager resides.
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
        
        // Retrieves the list of operation resources contained within the specified zone.
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

declare module gapi.client.replicapool {
    var instanceGroupManagers: gapi.client.replicapool.InstanceGroupManagersResource; 
    
    var zoneOperations: gapi.client.replicapool.ZoneOperationsResource; 
    
}
