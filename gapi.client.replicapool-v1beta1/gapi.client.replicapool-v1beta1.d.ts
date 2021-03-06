// Type definitions for Google Replica Pool API v1beta1
// Project: https://developers.google.com/compute/docs/replica-pool/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.replicapool {
    
    interface AccessConfig {
        // Name of this access configuration.
        name?: string,
        // An external IP address associated with this instance.
        natIp?: string,
        // Type of this access configuration file. Currently only ONE_TO_ONE_NAT is supported.
        type?: string,
    }
    
    interface Action {
        // A list of commands to run, one per line. If any command fails, the whole action is considered a failure and no further actions are run. This also marks the virtual machine or replica as a failure.
        commands?: string[],        
        // A list of environment variables to use for the commands in this action.
        envVariables?: EnvVariable[],        
        // If an action's commands on a particular replica do not finish in the specified timeoutMilliSeconds, the replica is considered to be in a FAILING state. No efforts are made to stop any processes that were spawned or created as the result of running the action's commands. The default is the max allowed value, 1 hour (i.e. 3600000 milliseconds).
        timeoutMilliSeconds?: number,
    }
    
    interface DiskAttachment {
        // The device name of this disk.
        deviceName?: string,
        // A zero-based index to assign to this disk, where 0 is reserved for the boot disk. If not specified, this is assigned by the server.
        index?: number,
    }
    
    interface EnvVariable {
        // Deprecated, do not use.
        hidden?: boolean,
        // The name of the environment variable.
        name?: string,
        // The value of the variable.
        value?: string,
    }
    
    interface ExistingDisk {
        // How the disk will be attached to the Replica.
        attachment?: DiskAttachment,
        // The name of the Persistent Disk resource. The Persistent Disk resource must be in the same zone as the Pool.
        source?: string,
    }
    
    interface HealthCheck {
        // How often (in seconds) to make HTTP requests for this healthcheck. The default value is 5 seconds.
        checkIntervalSec?: number,
        // The description for this health check.
        description?: string,
        // The number of consecutive health check requests that need to succeed before the replica is considered healthy again. The default value is 2.
        healthyThreshold?: number,
        // The value of the host header in the HTTP health check request. If left empty (default value), the localhost IP 127.0.0.1 will be used.
        host?: string,
        // The name of this health check.
        name?: string,
        // The localhost request path to send this health check, in the format /path/to/use. For example, /healthcheck.
        path?: string,
        // The TCP port for the health check requests.
        port?: number,
        // How long (in seconds) to wait before a timeout failure for this healthcheck. The default value is 5 seconds.
        timeoutSec?: number,
        // The number of consecutive health check requests that need to fail in order to consider the replica unhealthy. The default value is 2.
        unhealthyThreshold?: number,
    }
    
    interface Label {
        // The key for this label.
        key?: string,
        // The value of this label.
        value?: string,
    }
    
    interface Metadata {
        // The fingerprint of the metadata. Required for updating the metadata entries for this instance.
        fingerPrint?: string,
        // A list of metadata items.
        items?: MetadataItem[],        
    }
    
    interface MetadataItem {
        // A metadata key.
        key?: string,
        // A metadata value.
        value?: string,
    }
    
    interface NetworkInterface {
        // An array of configurations for this interface. This specifies how this interface is configured to interact with other network services.
        accessConfigs?: AccessConfig[],        
        // Name the Network resource to which this interface applies.
        network?: string,
        // An optional IPV4 internal network address to assign to the instance for this network interface.
        networkIp?: string,
    }
    
    interface NewDisk {
        // How the disk will be attached to the Replica.
        attachment?: DiskAttachment,
        // If true, then this disk will be deleted when the instance is deleted. The default value is true.
        autoDelete?: boolean,
        // If true, indicates that this is the root persistent disk.
        boot?: boolean,
        // Create the new disk using these parameters. The name of the disk will be <instance_name>-<four_random_charactersgt;.
        initializeParams?: NewDiskInitializeParams,
    }
    
    interface NewDiskInitializeParams {
        // The size of the created disk in gigabytes.
        diskSizeGb?: string,
        // Name of the disk type resource describing which disk type to use to create the disk. For example 'pd-ssd' or 'pd-standard'. Default is 'pd-standard'
        diskType?: string,
        // The name or fully-qualified URL of a source image to use to create this disk. If you provide a name of the source image, Replica Pool will look for an image with that name in your project. If you are specifying an image provided by Compute Engine, you will need to provide the full URL with the correct project, such as:
        // http://www.googleapis.com/compute/v1/projects/debian-cloud/ global/images/debian-wheezy-7-vYYYYMMDD
        sourceImage?: string,
    }
    
    interface Pool {
        // Whether replicas in this pool should be restarted if they experience a failure. The default value is true.
        autoRestart?: boolean,
        // The base instance name to use for the replicas in this pool. This must match the regex [a-z]([-a-z0-9]*[a-z0-9])?. If specified, the instances in this replica pool will be named in the format <base-instance-name>-<ID>. The <ID> postfix will be a four character alphanumeric identifier generated by the service.
        // 
        // If this is not specified by the user, a random base instance name is generated by the service.
        baseInstanceName?: string,
        // [Output Only] The current number of replicas in the pool.
        currentNumReplicas?: number,
        // An optional description of the replica pool.
        description?: string,
        // Deprecated. Please use template[].healthChecks instead.
        healthChecks?: HealthCheck[],        
        // The initial number of replicas this pool should have. You must provide a value greater than or equal to 0.
        initialNumReplicas?: number,
        // A list of labels to attach to this replica pool and all created virtual machines in this replica pool.
        labels?: Label[],        
        // The name of the replica pool. Must follow the regex [a-z]([-a-z0-9]*[a-z0-9])? and be 1-28 characters long.
        name?: string,
        // Deprecated! Use initial_num_replicas instead.
        numReplicas?: number,
        // The list of resource views that should be updated with all the replicas that are managed by this pool.
        resourceViews?: string[],        
        // [Output Only] A self-link to the replica pool.
        selfLink?: string,
        // Deprecated, please use target_pools instead.
        targetPool?: string,
        // A list of target pools to update with the replicas that are managed by this pool. If specified, the replicas in this replica pool will be added to the specified target pools for load balancing purposes. The replica pool must live in the same region as the specified target pools. These values must be the target pool resource names, and not fully qualified URLs.
        targetPools?: string[],        
        // The template to use when creating replicas in this pool. This template is used during initial instance creation of the pool, when growing the pool in size, or when a replica restarts.
        template?: Template,
        // Deprecated! Do not set.
        type?: string,
    }
    
    interface PoolsDeleteRequest {
        // If there are instances you would like to keep, you can specify them here. These instances won't be deleted, but the associated replica objects will be removed.
        abandonInstances?: string[],        
    }
    
    interface PoolsListResponse {
        // 
        nextPageToken?: string,
        // 
        resources?: Pool[],        
    }
    
    interface Replica {
        // [Output Only] The name of the Replica object.
        name?: string,
        // [Output Only] The self-link of the Replica.
        selfLink?: string,
        // [Output Only] Last known status of the Replica.
        status?: ReplicaStatus,
    }
    
    interface ReplicaStatus {
        // [Output Only] Human-readable details about the current state of the replica
        details?: string,
        // [Output Only] The state of the Replica.
        state?: string,
        // [Output Only] The template used to build the replica.
        templateVersion?: string,
        // [Output Only] Link to the virtual machine that this Replica represents.
        vmLink?: string,
        // [Output Only] The time that this Replica got to the RUNNING state, in RFC 3339 format. If the start time is unknown, UNKNOWN is returned.
        vmStartTime?: string,
    }
    
    interface ReplicasDeleteRequest {
        // Whether the instance resource represented by this replica should be deleted or abandoned. If abandoned, the replica will be deleted but the virtual machine instance will remain. By default, this is set to false and the instance will be deleted along with the replica.
        abandonInstance?: boolean,
    }
    
    interface ReplicasListResponse {
        // 
        nextPageToken?: string,
        // 
        resources?: Replica[],        
    }
    
    interface ServiceAccount {
        // The service account email address, for example: 123845678986@project.gserviceaccount.com
        email?: string,
        // The list of OAuth2 scopes to obtain for the service account, for example: https://www.googleapis.com/auth/devstorage.full_control
        scopes?: string[],        
    }
    
    interface Tag {
        // The fingerprint of the tag. Required for updating the list of tags.
        fingerPrint?: string,
        // Items contained in this tag.
        items?: string[],        
    }
    
    interface Template {
        // An action to run during initialization of your replicas. An action is run as shell commands which are executed one after the other in the same bash shell, so any state established by one command is inherited by later commands.
        action?: Action,
        // A list of HTTP Health Checks to configure for this replica pool and all virtual machines in this replica pool.
        healthChecks?: HealthCheck[],        
        // A free-form string describing the version of this template. You can provide any versioning string you would like. For example, version1 or template-v1.
        version?: string,
        // The virtual machine parameters to use for creating replicas. You can define settings such as the machine type and the image of replicas in this pool. This is required if replica type is SMART_VM.
        vmParams?: VmParams,
    }
    
    interface VmParams {
        // Deprecated. Please use baseInstanceName instead.
        baseInstanceName?: string,
        // Enables IP Forwarding, which allows this instance to receive packets destined for a different IP address, and send packets with a different source IP. See IP Forwarding for more information.
        canIpForward?: boolean,
        // An optional textual description of the instance.
        description?: string,
        // A list of existing Persistent Disk resources to attach to each replica in the pool. Each disk will be attached in read-only mode to every replica.
        disksToAttach?: ExistingDisk[],        
        // A list of Disk resources to create and attach to each Replica in the Pool. Currently, you can only define one disk and it must be a root persistent disk. Note that Replica Pool will create a root persistent disk for each replica.
        disksToCreate?: NewDisk[],        
        // The machine type for this instance. The resource name (e.g. n1-standard-1).
        machineType?: string,
        // The metadata key/value pairs assigned to this instance.
        metadata?: Metadata,
        // A list of network interfaces for the instance. Currently only one interface is supported by Google Compute Engine, ONE_TO_ONE_NAT.
        networkInterfaces?: NetworkInterface[],        
        // 
        onHostMaintenance?: string,
        // A list of Service Accounts to enable for this instance.
        serviceAccounts?: ServiceAccount[],        
        // A list of tags to apply to the Google Compute Engine instance to identify resources.
        tags?: Tag,
    }
    
    interface PoolsResource {
        // Deletes a replica pool.
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
            // The name of the replica pool for this request.
            poolName: string,
            // The project ID for this replica pool.
            projectName: string,
            // The zone for this replica pool.
            zone: string,
        }) : gapi.client.Request<void>;        
        
        // Gets information about a single replica pool.
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
            // The name of the replica pool for this request.
            poolName: string,
            // The project ID for this replica pool.
            projectName: string,
            // The zone for this replica pool.
            zone: string,
        }) : gapi.client.Request<Pool>;        
        
        // Inserts a new replica pool.
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
            // The project ID for this replica pool.
            projectName: string,
            // The zone for this replica pool.
            zone: string,
        }) : gapi.client.Request<Pool>;        
        
        // List all replica pools.
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
            // Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50)
            maxResults?: number,
            // Set this to the nextPageToken value returned by a previous list request to obtain the next page of results from the previous list request.
            pageToken?: string,
            // The project ID for this request.
            projectName: string,
            // The zone for this replica pool.
            zone: string,
        }) : gapi.client.Request<PoolsListResponse>;        
        
        // Resize a pool. This is an asynchronous operation, and multiple overlapping resize requests can be made. Replica Pools will use the information from the last resize request.
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
            // The desired number of replicas to resize to. If this number is larger than the existing number of replicas, new replicas will be added. If the number is smaller, then existing replicas will be deleted.
            numReplicas?: number,
            // The name of the replica pool for this request.
            poolName: string,
            // The project ID for this replica pool.
            projectName: string,
            // The zone for this replica pool.
            zone: string,
        }) : gapi.client.Request<Pool>;        
        
        // Update the template used by the pool.
        updatetemplate (request: {        
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
            // The name of the replica pool for this request.
            poolName: string,
            // The project ID for this replica pool.
            projectName: string,
            // The zone for this replica pool.
            zone: string,
        }) : gapi.client.Request<void>;        
        
    }
    
    
    interface ReplicasResource {
        // Deletes a replica from the pool.
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
            // The replica pool name for this request.
            poolName: string,
            // The project ID for this request.
            projectName: string,
            // The name of the replica for this request.
            replicaName: string,
            // The zone where the replica lives.
            zone: string,
        }) : gapi.client.Request<Replica>;        
        
        // Gets information about a specific replica.
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
            // The replica pool name for this request.
            poolName: string,
            // The project ID for this request.
            projectName: string,
            // The name of the replica for this request.
            replicaName: string,
            // The zone where the replica lives.
            zone: string,
        }) : gapi.client.Request<Replica>;        
        
        // Lists all replicas in a pool.
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
            // Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50)
            maxResults?: number,
            // Set this to the nextPageToken value returned by a previous list request to obtain the next page of results from the previous list request.
            pageToken?: string,
            // The replica pool name for this request.
            poolName: string,
            // The project ID for this request.
            projectName: string,
            // The zone where the replica pool lives.
            zone: string,
        }) : gapi.client.Request<ReplicasListResponse>;        
        
        // Restarts a replica in a pool.
        restart (request: {        
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
            // The replica pool name for this request.
            poolName: string,
            // The project ID for this request.
            projectName: string,
            // The name of the replica for this request.
            replicaName: string,
            // The zone where the replica lives.
            zone: string,
        }) : gapi.client.Request<Replica>;        
        
    }
    
}

declare module gapi.client.replicapool {
    var pools: gapi.client.replicapool.PoolsResource; 
    
    var replicas: gapi.client.replicapool.ReplicasResource; 
    
}
