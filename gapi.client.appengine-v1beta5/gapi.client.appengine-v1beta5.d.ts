// Type definitions for Google Google App Engine Admin API v1beta5
// Project: https://cloud.google.com/appengine/docs/admin-api/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.appengine {
    
    interface HealthCheck {
        // Whether to explicitly disable health checks for this instance.
        disableHealthCheck?: boolean,
        // Host header to send when performing an HTTP health check. Example: "myapp.appspot.com"
        host?: string,
        // Number of consecutive successful health checks required before receiving traffic.
        healthyThreshold?: number,
        // Number of consecutive failed health checks required before an instance is restarted.
        restartThreshold?: number,
        // Interval between health checks.
        checkInterval?: string,
        // Time before the health check is considered failed.
        timeout?: string,
        // Number of consecutive failed health checks required before removing traffic.
        unhealthyThreshold?: number,
    }
    
    interface DebugInstanceRequest {
        // Public SSH key to add to the instance. Examples:
        // [USERNAME]:ssh-rsa [KEY_VALUE] [USERNAME]
        // [USERNAME]:ssh-rsa [KEY_VALUE] google-ssh {"userName":"[USERNAME]","expireOn":"[EXPIRE_TIME]"}For more information, see Adding and Removing SSH Keys (https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys).
        sshKey?: string,
    }
    
    interface SourceReference {
        // URI string identifying the repository. Example: "https://source.developers.google.com/p/app-123/r/default"
        repository?: string,
        // The canonical, persistent identifier of the deployed revision. Aliases that include tags or branch names are not allowed. Example (git): "2198322f89e0bb2e25021667c2ed489d1fd34e6b"
        revisionId?: string,
    }
    
    interface OperationMetadataV1Beta5 {
        // Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly
        target?: string,
        // User who requested this operation.@OutputOnly
        user?: string,
        // API method name that initiated this operation. Example: google.appengine.v1beta5.Version.CreateVersion.@OutputOnly
        method?: string,
        // Timestamp that this operation was created.@OutputOnly
        insertTime?: string,
        // Timestamp that this operation completed.@OutputOnly
        endTime?: string,
    }
    
    interface Library {
        // Version of the library to select, or "latest".
        version?: string,
        // Name of the library. Example: "django".
        name?: string,
    }
    
    interface ListLocationsResponse {
        // A list of locations that matches the specified filter in the request.
        locations?: Location[],        
        // The standard List next-page token.
        nextPageToken?: string,
    }
    
    interface Version {
        // Before an application can receive email or XMPP messages, the application must be configured to enable the service.
        inboundServices?: string[],        
        // Machine resources for this version. Only applicable for VM runtimes.
        resources?: Resources,
        // Custom static error pages. Limited to 10KB per page.Only returned in GET requests if view=FULL is set.
        errorHandlers?: ErrorHandler[],        
        // Duration that static files should be cached by web proxies and browsers. Only applicable if the corresponding StaticFilesHandler (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#staticfileshandler) does not specify its own expiration time.Only returned in GET requests if view=FULL is set.
        defaultExpiration?: string,
        // Configuration for third-party Python runtime libraries required by the application.Only returned in GET requests if view=FULL is set.
        libraries?: Library[],        
        // Files that match this pattern will not be built into this version. Only applicable for Go runtimes.Only returned in GET requests if view=FULL is set.
        nobuildFilesRegex?: string,
        // Time that this version was created.@OutputOnly
        creationTime?: string,
        // A service with basic scaling will create an instance when the application receives a request. The instance will be turned down when the app becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.
        basicScaling?: BasicScaling,
        // Desired runtime. Example: python27.
        runtime?: string,
        // Relative name of the version within the module. Example: v1. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names: "default", "latest", and any name with the prefix "ah-".
        id?: string,
        // Environment variables made available to the application.Only returned in GET requests if view=FULL is set.
        envVariables?: any,
        // Extra network settings. Only applicable for VM runtimes.
        network?: Network,
        // Metadata settings that are supplied to this version to enable beta runtime features.
        betaSettings?: any,
        // App Engine execution environment to use for this version.Defaults to 1.
        env?: string,
        // An ordered list of URL-matching patterns that should be applied to incoming requests. The first matching URL handles the request and other request handlers are not attempted.Only returned in GET requests if view=FULL is set.
        handlers?: UrlMap[],        
        // Email address of the user who created this version.@OutputOnly
        deployer?: string,
        // Automatic scaling is based on request rate, response latencies, and other application metrics.
        automaticScaling?: AutomaticScaling,
        // Total size of version files hosted on App Engine disk in bytes.@OutputOnly
        diskUsageBytes?: string,
        // Configures health checking for VM instances. Unhealthy instances are be stopped and replaced with new instances. Only applicable for VM runtimes.Only returned in GET requests if view=FULL is set.
        healthCheck?: HealthCheck,
        // Whether multiple requests can be dispatched to this version at once.
        threadsafe?: boolean,
        // A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
        manualScaling?: ManualScaling,
        // Full path to the Version resource in the API. Example: apps/myapp/services/default/versions/v1.@OutputOnly
        name?: string,
        // Serving configuration for Google Cloud Endpoints (https://cloud.google.com/appengine/docs/python/endpoints/).Only returned in GET requests if view=FULL is set.
        apiConfig?: ApiConfigHandler,
        // Cloud Endpoints configuration.If endpoints_api_service is set, the Cloud Endpoints Extensible Service Proxy will be provided to serve the API implemented by the app.
        endpointsApiService?: EndpointsApiService,
        // Whether to deploy this version in a container on a virtual machine.
        vm?: boolean,
        // Instance class that is used to run this version. Valid values are:
        // AutomaticScaling: F1, F2, F4, F4_1G
        // ManualScaling or BasicScaling: B1, B2, B4, B8, B4_1GDefaults to F1 for AutomaticScaling and B1 for ManualScaling or BasicScaling.
        instanceClass?: string,
        // Current serving status of this version. Only the versions with a SERVING status create instances and can be billed.SERVING_STATUS_UNSPECIFIED is an invalid value. Defaults to SERVING.
        servingStatus?: string,
        // Code and application artifacts that make up this version.Only returned in GET requests if view=FULL is set.
        deployment?: Deployment,
        // The version of the API in the given runtime environment. Please see the app.yaml reference for valid values at https://cloud.google.com/appengine/docs/standard/<language>/config/appref
        runtimeApiVersion?: string,
    }
    
    interface ContainerInfo {
        // URI to the hosted container image in Google Container Registry. The URI must be fully qualified and include a tag or digest. Examples: "gcr.io/my-project/image:tag" or "gcr.io/my-project/image@digest"
        image?: string,
    }
    
    interface RequestUtilization {
        // Target number of concurrent requests.
        targetConcurrentRequests?: number,
        // Target requests per second.
        targetRequestCountPerSec?: number,
    }
    
    interface EndpointsApiService {
        // Endpoints service configuration id as specified by the Service Management API. For example "2016-09-19r1"
        configId?: string,
        // Endpoints service name which is the name of the "service" resource in the Service Management API. For example "myapi.endpoints.myproject.cloud.goog"
        name?: string,
    }
    
    interface UrlMap {
        // Security (HTTPS) enforcement for this URL.
        securityLevel?: string,
        // Action to take when users access resources that require authentication. Defaults to redirect.
        authFailAction?: string,
        // Executes a script to handle the request that matches this URL pattern.
        script?: ScriptHandler,
        // A URL prefix. Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings. All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.
        urlRegex?: string,
        // Level of login required to access this resource.
        login?: string,
        // Uses API Endpoints to handle requests.
        apiEndpoint?: ApiEndpointHandler,
        // Returns the contents of a file, such as an image, as the response.
        staticFiles?: StaticFilesHandler,
        // 30x code to use when performing redirects for the secure field. Defaults to 302.
        redirectHttpResponseCode?: string,
    }
    
    interface Operation {
        // If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.
        done?: boolean,
        // The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.
        response?: any,
        // The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should have the format of operations/some/unique/name.
        name?: string,
        // The error result of the operation in case of failure or cancellation.
        error?: Status,
        // Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
        metadata?: any,
    }
    
    interface ApiConfigHandler {
        // Path to the script from the application root directory.
        script?: string,
        // Level of login required to access this resource. Defaults to optional.
        login?: string,
        // URL to serve the endpoint at.
        url?: string,
        // Security (HTTPS) enforcement for this URL.
        securityLevel?: string,
        // Action to take when users access resources that require authentication. Defaults to redirect.
        authFailAction?: string,
    }
    
    interface ScriptHandler {
        // Path to the script from the application root directory.
        scriptPath?: string,
    }
    
    interface StaticFilesHandler {
        // Whether this handler should match the request if the file referenced by the handler does not exist.
        requireMatchingFile?: boolean,
        // Time a static file served by this handler should be cached.
        expiration?: string,
        // Whether files should also be uploaded as code data. By default, files declared in static file handlers are uploaded as static data and are only served to end users; they cannot be read by the application. If enabled, uploads are charged against both your code and static data storage resource quotas.
        applicationReadable?: boolean,
        // HTTP headers to use for all responses from these URLs.
        httpHeaders?: any,
        // Regular expression that matches the file paths for all files that should be referenced by this handler.
        uploadPathRegex?: string,
        // Path to the static files matched by the URL pattern, from the application root directory. The path can refer to text matched in groupings in the URL pattern.
        path?: string,
        // MIME type used to serve all files served by this handler. Defaults to file-specific MIME types, which are derived from each file's filename extension.
        mimeType?: string,
    }
    
    interface FileInfo {
        // The MIME type of the file.Defaults to the value from Google Cloud Storage.
        mimeType?: string,
        // URL source to use to fetch this file. Must be a URL to a resource in Google Cloud Storage in the form 'http(s)://storage.googleapis.com/<bucket>/<object>'.
        sourceUrl?: string,
        // The SHA1 hash of the file, in hex.
        sha1Sum?: string,
    }
    
    interface BasicScaling {
        // Maximum number of instances to create for this version.
        maxInstances?: number,
        // Duration of time after the last request that an instance must wait before the instance is shut down.
        idleTimeout?: string,
    }
    
    interface DiskUtilization {
        // Target bytes read per second.
        targetReadBytesPerSec?: number,
        // Target ops written per second.
        targetWriteOpsPerSec?: number,
        // Target bytes written per second.
        targetWriteBytesPerSec?: number,
        // Target ops read per second.
        targetReadOpsPerSec?: number,
    }
    
    interface OperationMetadataExperimental {
        // API method that initiated this operation. Example: google.appengine.experimental.CustomDomains.CreateCustomDomain.@OutputOnly
        method?: string,
        // Time that this operation was created.@OutputOnly
        insertTime?: string,
        // Time that this operation completed.@OutputOnly
        endTime?: string,
        // Name of the resource that this operation is acting on. Example: apps/myapp/customDomains/example.com.@OutputOnly
        target?: string,
        // User who requested this operation.@OutputOnly
        user?: string,
    }
    
    interface CpuUtilization {
        // Period of time over which CPU utilization is calculated.
        aggregationWindowLength?: string,
        // Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1.
        targetUtilization?: number,
    }
    
    interface Status {
        // A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
        message?: string,
        // A list of messages that carry the error details. There will be a common set of message types for APIs to use.
        details?: any[],        
        // The status code, which should be an enum value of google.rpc.Code.
        code?: number,
    }
    
    interface IdentityAwareProxy {
        // For security reasons, this value cannot be retrieved via the API. Instead, the SHA-256 hash of the value is returned in the oauth2_client_secret_sha256 field.@InputOnly
        oauth2ClientSecret?: string,
        // OAuth2 client ID to use for the authentication flow.
        oauth2ClientId?: string,
        // Hex-encoded SHA-256 hash of the client secret.@OutputOnly
        oauth2ClientSecretSha256?: string,
        // Whether the serving infrastructure will authenticate and authorize all incoming requests.If true, the oauth2_client_id and oauth2_client_secret fields must be non-empty.
        enabled?: boolean,
    }
    
    interface TrafficSplit {
        // Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits.
        allocations?: any,
        // Mechanism used to determine which version a request is sent to. The traffic selection algorithm will be stable for either type until allocations are changed.
        shardBy?: string,
    }
    
    interface ManualScaling {
        // Number of instances to assign to the service at the start. This number can later be altered by using the Modules API (https://cloud.google.com/appengine/docs/python/modules/functions) set_num_instances() function.
        instances?: number,
    }
    
    interface LocationMetadata {
        // App Engine Flexible Environment is available in the given location.@OutputOnly
        flexibleEnvironmentAvailable?: boolean,
        // App Engine Standard Environment is available in the given location.@OutputOnly
        standardEnvironmentAvailable?: boolean,
    }
    
    interface OperationMetadataV1Beta {
        // Durable messages that persist on every operation poll. @OutputOnly
        warning?: string[],        
        // Time that this operation was created.@OutputOnly
        insertTime?: string,
        // Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly
        target?: string,
        // User who requested this operation.@OutputOnly
        user?: string,
        // Ephemeral message that may change every time the operation is polled. @OutputOnly
        ephemeralMessage?: string,
        // API method that initiated this operation. Example: google.appengine.v1beta.Versions.CreateVersion.@OutputOnly
        method?: string,
        // Time that this operation completed.@OutputOnly
        endTime?: string,
    }
    
    interface ListServicesResponse {
        // Continuation token for fetching the next page of results.
        nextPageToken?: string,
        // The services belonging to the requested application.
        services?: Service[],        
    }
    
    interface Deployment {
        // Origin of the source code for this deployment. There can be more than one source reference per version if source code is distributed among multiple repositories.
        sourceReferences?: SourceReference[],        
        // The Docker image for the container that runs the version. Only applicable for instances running in the App Engine flexible environment.
        container?: ContainerInfo,
        // Manifest of the files stored in Google Cloud Storage that are included as part of this version. All files must be readable using the credentials supplied with this call.
        files?: any,
    }
    
    interface Resources {
        // Volumes mounted within the app container.
        volumes?: Volume[],        
        // Disk size (GB) needed.
        diskGb?: number,
        // Memory (GB) needed.
        memoryGb?: number,
        // Number of CPU cores needed.
        cpu?: number,
    }
    
    interface Service {
        // Full path to the Service resource in the API. Example: apps/myapp/services/default.@OutputOnly
        name?: string,
        // Mapping that defines fractional HTTP traffic diversion to different versions within the service.
        split?: TrafficSplit,
        // Relative name of the service within the application. Example: default.@OutputOnly
        id?: string,
    }
    
    interface Volume {
        // Underlying volume type, e.g. 'tmpfs'.
        volumeType?: string,
        // Volume size in gigabytes.
        sizeGb?: number,
        // Unique name for the volume.
        name?: string,
    }
    
    interface ListOperationsResponse {
        // The standard List next-page token.
        nextPageToken?: string,
        // A list of operations that matches the specified filter in the request.
        operations?: Operation[],        
    }
    
    interface OperationMetadata {
        // Name of the resource that this operation is acting on. Example: apps/myapp/modules/default.@OutputOnly
        target?: string,
        // User who requested this operation.@OutputOnly
        user?: string,
        // API method that initiated this operation. Example: google.appengine.v1beta4.Version.CreateVersion.@OutputOnly
        method?: string,
        // Timestamp that this operation completed.@OutputOnly
        endTime?: string,
        // Type of this operation. Deprecated, use method field instead. Example: "create_version".@OutputOnly
        operationType?: string,
        // Timestamp that this operation was created.@OutputOnly
        insertTime?: string,
    }
    
    interface ListInstancesResponse {
        // Continuation token for fetching the next page of results.
        nextPageToken?: string,
        // The instances belonging to the requested version.
        instances?: Instance[],        
    }
    
    interface ErrorHandler {
        // MIME type of file. Defaults to text/html.
        mimeType?: string,
        // Error condition this handler applies to.
        errorCode?: string,
        // Static file content to be served for this error.
        staticFile?: string,
    }
    
    interface OperationMetadataV1 {
        // Time that this operation was created.@OutputOnly
        insertTime?: string,
        // Durable messages that persist on every operation poll. @OutputOnly
        warning?: string[],        
        // User who requested this operation.@OutputOnly
        user?: string,
        // Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly
        target?: string,
        // Ephemeral message that may change every time the operation is polled. @OutputOnly
        ephemeralMessage?: string,
        // API method that initiated this operation. Example: google.appengine.v1.Versions.CreateVersion.@OutputOnly
        method?: string,
        // Time that this operation completed.@OutputOnly
        endTime?: string,
    }
    
    interface OperationMetadataV1Alpha {
        // Durable messages that persist on every operation poll. @OutputOnly
        warning?: string[],        
        // Time that this operation was created.@OutputOnly
        insertTime?: string,
        // Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly
        target?: string,
        // User who requested this operation.@OutputOnly
        user?: string,
        // Ephemeral message that may change every time the operation is polled. @OutputOnly
        ephemeralMessage?: string,
        // API method that initiated this operation. Example: google.appengine.v1alpha.Versions.CreateVersion.@OutputOnly
        method?: string,
        // Time that this operation completed.@OutputOnly
        endTime?: string,
    }
    
    interface Application {
        // A Google Cloud Storage bucket that can be used for storing files associated with this application. This bucket is associated with the application and can be used by the gcloud deployment commands.@OutputOnly
        codeBucket?: string,
        // Location from which this application will be run. Application instances will run out of data centers in the chosen location, which is also where all of the application's end user content is stored.Defaults to us-central.Options are:us-central - Central USeurope-west - Western Europeus-east1 - Eastern US
        location?: string,
        // A Google Cloud Storage bucket that can be used by the application to store content.@OutputOnly
        defaultBucket?: string,
        // HTTP path dispatch rules for requests to the application that do not explicitly target a service or version. Rules are order-dependent.@OutputOnly
        dispatchRules?: UrlDispatchRule[],        
        // Hostname used to reach the application, as resolved by App Engine.@OutputOnly
        defaultHostname?: string,
        // Full path to the Application resource in the API. Example: apps/myapp.@OutputOnly
        name?: string,
        // Google Apps authentication domain that controls which users can access this application.Defaults to open access for any Google Account.
        authDomain?: string,
        // 
        iap?: IdentityAwareProxy,
        // Cookie expiration policy for this application.
        defaultCookieExpiration?: string,
        // Identifier of the Application resource. This identifier is equivalent to the project ID of the Google Cloud Platform project where you want to deploy your application. Example: myapp.
        id?: string,
    }
    
    interface Network {
        // Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path.If a subnetwork name is specified, a network name will also be required unless it is for the default network.
        // If the network the VM instance is being created in is a Legacy network, then the IP address is allocated from the IPv4Range.
        // If the network the VM instance is being created in is an auto Subnet Mode Network, then only network name should be specified (not the subnetwork_name) and the IP address is created from the IPCidrRange of the subnetwork that exists in that zone for that network.
        // If the network the VM instance is being created in is a custom Subnet Mode Network, then the subnetwork_name must be specified and the IP address is created from the IPCidrRange of the subnetwork.If specified, the subnetwork must exist in the same region as the Flex app.
        subnetworkName?: string,
        // Tag to apply to the VM instance during creation.
        instanceTag?: string,
        // List of ports, or port pairs, to forward from the virtual machine to the application container.
        forwardedPorts?: string[],        
        // Google Cloud Platform network where the virtual machines are created. Specify the short name, not the resource path.Defaults to default.
        name?: string,
    }
    
    interface Instance {
        // Status of the virtual machine where this instance lives. Only applicable for instances in App Engine flexible environment.@OutputOnly
        vmStatus?: string,
        // Availability of the instance.@OutputOnly
        availability?: string,
        // Number of errors since this instance was started.@OutputOnly
        errors?: number,
        // Number of requests since this instance was started.@OutputOnly
        requests?: number,
        // App Engine release this instance is running on.@OutputOnly
        appEngineRelease?: string,
        // Time that this instance was started.@OutputOnly
        startTimestamp?: string,
        // Name of the virtual machine where this instance lives. Only applicable for instances in App Engine flexible environment.@OutputOnly
        vmName?: string,
        // Virtual machine ID of this instance. Only applicable for instances in App Engine flexible environment.@OutputOnly
        vmId?: string,
        // Average queries per second (QPS) over the last minute.@OutputOnly
        qps?: number,
        // Whether this instance is in debug mode. Only applicable for instances in App Engine flexible environment.@OutputOnly
        vmUnlocked?: boolean,
        // Full path to the Instance resource in the API. Example: apps/myapp/services/default/versions/v1/instances/instance-1.@OutputOnly
        name?: string,
        // Zone where the virtual machine is located. Only applicable for instances in App Engine flexible environment.@OutputOnly
        vmZoneName?: string,
        // Average latency (ms) over the last minute.@OutputOnly
        averageLatency?: number,
        // The IP address of this instance. Only applicable for instances in App Engine flexible environment.@OutputOnly
        vmIp?: string,
        // Total memory in use (bytes).@OutputOnly
        memoryUsage?: string,
        // Relative name of the instance within the version. Example: instance-1.@OutputOnly
        id?: string,
    }
    
    interface UrlDispatchRule {
        // Resource id of a service in this application that should serve the matched request. The service must already exist. Example: default.
        service?: string,
        // Domain name to match against. The wildcard "*" is supported if specified before a period: "*.".Defaults to matching all domains: "*".
        domain?: string,
        // Pathname within the host. Must start with a "/". A single "*" can be included at the end of the path. The sum of the lengths of the domain and path may not exceed 100 characters.
        path?: string,
    }
    
    interface ListVersionsResponse {
        // The versions belonging to the requested service.
        versions?: Version[],        
        // Continuation token for fetching the next page of results.
        nextPageToken?: string,
    }
    
    interface ApiEndpointHandler {
        // Path to the script from the application root directory.
        scriptPath?: string,
    }
    
    interface AutomaticScaling {
        // Maximum number of instances that should be started to handle requests.
        maxTotalInstances?: number,
        // Minimum number of instances that should be maintained for this version.
        minTotalInstances?: number,
        // Target scaling by network usage.
        networkUtilization?: NetworkUtilization,
        // Amount of time that the Autoscaler (https://cloud.google.com/compute/docs/autoscaler/) should wait between changes to the number of virtual machines. Only applicable for VM runtimes.
        coolDownPeriod?: string,
        // Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.Defaults to a runtime-specific value.
        maxConcurrentRequests?: number,
        // Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.
        maxPendingLatency?: string,
        // Target scaling by CPU usage.
        cpuUtilization?: CpuUtilization,
        // Target scaling by disk usage.
        diskUtilization?: DiskUtilization,
        // Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.
        minPendingLatency?: string,
        // Target scaling by request utilization.
        requestUtilization?: RequestUtilization,
        // Maximum number of idle instances that should be maintained for this version.
        maxIdleInstances?: number,
        // Minimum number of idle instances that should be maintained for this version. Only applicable for the default version of a module.
        minIdleInstances?: number,
    }
    
    interface NetworkUtilization {
        // Target packets received per second.
        targetReceivedPacketsPerSec?: number,
        // Target bytes sent per second.
        targetSentBytesPerSec?: number,
        // Target bytes received per second.
        targetReceivedBytesPerSec?: number,
        // Target packets sent per second.
        targetSentPacketsPerSec?: number,
    }
    
    interface Location {
        // Cross-service attributes for the location. For example
        // {"cloud.googleapis.com/region": "us-east1"}
        // 
        labels?: any,
        // Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1"
        name?: string,
        // The canonical id for this location. For example: "us-east1".
        locationId?: string,
        // Service-specific metadata. For example the available capacity at the given location.
        metadata?: any,
    }
    
    interface OperationsResource {
        // Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
        get (request: {        
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Part of `name`. The name of the operation resource.
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            operationsId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
        list (request: {        
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // The standard list page size.
            pageSize?: number,
            // The standard list filter.
            filter?: string,
            // The standard list page token.
            pageToken?: string,
            // Part of `name`. The name of the operation's parent resource.
            appsId: string,
        }) : gapi.client.Request<ListOperationsResponse>;        
        
    }
    
    
    interface LocationsResource {
        // Get information about a location.
        get (request: {        
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Part of `name`. See documentation of `appsId`.
            locationsId: string,
            // Part of `name`. Resource name for the location.
            appsId: string,
        }) : gapi.client.Request<Location>;        
        
        // Lists information about the supported locations for this service.
        list (request: {        
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // The standard list filter.
            filter?: string,
            // The standard list page token.
            pageToken?: string,
            // Part of `name`. The resource that owns the locations collection, if applicable.
            appsId: string,
            // The standard list page size.
            pageSize?: number,
        }) : gapi.client.Request<ListLocationsResponse>;        
        
    }
    
    
    interface InstancesResource {
        // Stops a running instance.
        delete (request: {        
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Part of `name`. See documentation of `appsId`.
            versionsId: string,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
            // Part of `name`. See documentation of `appsId`.
            instancesId: string,
            // Part of `name`. Name of the resource requested. For example: "apps/myapp/services/default/versions/v1/instances/instance-1".
            appsId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists the instances of a version.Tip: To aggregate details about instances over time, see the Stackdriver Monitoring API (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).
        list (request: {        
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
            // Continuation token for fetching the next page of results.
            pageToken?: string,
            // Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.
            appsId: string,
            // Maximum results to return per page.
            pageSize?: number,
            // Part of `name`. See documentation of `appsId`.
            versionsId: string,
        }) : gapi.client.Request<ListInstancesResponse>;        
        
        // Gets instance information.
        get (request: {        
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Part of `name`. See documentation of `appsId`.
            instancesId: string,
            // Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            versionsId: string,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
        }) : gapi.client.Request<Instance>;        
        
        // Enables debugging on a VM instance. This allows you to use the SSH command to connect to the virtual machine where the instance lives. While in "debug mode", the instance continues to serve live traffic. You should delete the instance when you are done debugging and then allow the system to take over and determine if another instance should be started.Only applicable for instances in App Engine flexible environment.
        debug (request: {        
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
            // Part of `name`. See documentation of `appsId`.
            instancesId: string,
            // Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            versionsId: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface VersionsResource {
        // Deletes an existing version.
        delete (request: {        
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            versionsId: string,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:
        // serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta5/apps.services.versions#Version.FIELDS.serving_status):  For Version resources that use basic scaling, manual scaling, or run in  the App Engine flexible environment.
        // instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta5/apps.services.versions#Version.FIELDS.instance_class):  For Version resources that run in the App Engine standard environment.
        // automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta5/apps.services.versions#Version.FIELDS.automatic_scaling):  For Version resources that use automatic scaling and run in the App  Engine standard environment.
        // automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta5/apps.services.versions#Version.FIELDS.automatic_scaling):  For Version resources that use automatic scaling and run in the App  Engine standard environment.
        patch (request: {        
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Standard field mask for the set of fields to be updated.
            mask?: string,
            // Part of `name`. See documentation of `appsId`.
            versionsId: string,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
            // Part of `name`. Name of the resource to update. Example: apps/myapp/services/default/versions/1.
            appsId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists the versions of a service.
        list (request: {        
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Maximum results to return per page.
            pageSize?: number,
            // Controls the set of fields returned in the List response.
            view?: string,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
            // Continuation token for fetching the next page of results.
            pageToken?: string,
            // Part of `name`. Name of the resource requested. Example: apps/myapp/services/default.
            appsId: string,
        }) : gapi.client.Request<ListVersionsResponse>;        
        
        // Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Specify the FULL_VIEW parameter to get the full resource.
        get (request: {        
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
            // Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.
            appsId: string,
            // Controls the set of fields returned in the Get response.
            view?: string,
            // Part of `name`. See documentation of `appsId`.
            versionsId: string,
        }) : gapi.client.Request<Version>;        
        
        // Deploys new code and resource files to a new version.
        create (request: {        
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Part of `name`. Name of the resource to update. For example: "apps/myapp/services/default".
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
        }) : gapi.client.Request<Operation>;        
        
        instances: InstancesResource,
    }
    
    
    interface ServicesResource {
        // Deletes the specified service and all enclosed versions.
        delete (request: {        
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Part of `name`. Name of the resource requested. Example: apps/myapp/services/default.
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Updates the configuration of the specified service.
        patch (request: {        
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
            // Part of `name`. Name of the resource to update. Example: apps/myapp/services/default.
            appsId: string,
            // Set to true to gradually shift traffic to one or more versions that you specify. By default, traffic is shifted immediately. For gradual traffic migration, the target versions must be located within instances that are configured for both warmup requests (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta5/apps.services.versions#inboundservicetype) and automatic scaling (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta5/apps.services.versions#automaticscaling). You must specify the shardBy (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta5/apps.services#shardby) field in the Service resource. Gradual traffic migration is not supported in the App Engine flexible environment. For examples, see Migrating and Splitting Traffic (https://cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic).
            migrateTraffic?: boolean,
            // Standard field mask for the set of fields to be updated.
            mask?: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists all the services in the application.
        list (request: {        
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Continuation token for fetching the next page of results.
            pageToken?: string,
            // Part of `name`. Name of the resource requested. Example: apps/myapp.
            appsId: string,
            // Maximum results to return per page.
            pageSize?: number,
        }) : gapi.client.Request<ListServicesResponse>;        
        
        // Gets the current configuration of the specified service.
        get (request: {        
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
            // Part of `name`. Name of the resource requested. Example: apps/myapp/services/default.
            appsId: string,
        }) : gapi.client.Request<Service>;        
        
        versions: VersionsResource,
    }
    
    
    interface AppsResource {
        // Updates the specified Application resource. You can update the following fields:
        // auth_domain (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta5/apps#Application.FIELDS.auth_domain)
        // default_cookie_expiration (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta5/apps#Application.FIELDS.default_cookie_expiration)
        patch (request: {        
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Part of `name`. Name of the Application resource to update. Example: apps/myapp.
            appsId: string,
            // Standard field mask for the set of fields to be updated.
            mask?: string,
        }) : gapi.client.Request<Operation>;        
        
        // Gets information about an application.
        get (request: {        
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Certain resources associated with an application are created on-demand. Controls whether these resources should be created when performing the GET operation. If specified and any resources could not be created, the request will fail with an error code. Additionally, this parameter can cause the request to take longer to complete. Note: This parameter will be deprecated in a future version of the API.
            ensureResourcesExist?: boolean,
            // Part of `name`. Name of the application to get. Example: apps/myapp.
            appsId: string,
        }) : gapi.client.Request<Application>;        
        
        // Creates an App Engine application for a Google Cloud Platform project. Required fields:
        // id - The ID of the target Cloud Platform project.
        // location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/python/console/).
        create (request: {        
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
        }) : gapi.client.Request<Operation>;        
        
        operations: OperationsResource,
        locations: LocationsResource,
        services: ServicesResource,
    }
    
}

declare module gapi.client.appengine {
    var apps: gapi.client.appengine.AppsResource; 
    
}
