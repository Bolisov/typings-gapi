// Type definitions for Google Google App Engine Admin API v1beta
// Project: https://cloud.google.com/appengine/docs/admin-api/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.appengine {
    
    interface ListInstancesResponse {
        // Continuation token for fetching the next page of results.
        nextPageToken?: string,
        // The instances belonging to the requested version.
        instances?: Instance[],        
    }
    
    interface ListDomainMappingsResponse {
        // Continuation token for fetching the next page of results.
        nextPageToken?: string,
        // The domain mappings for the application.
        domainMappings?: DomainMapping[],        
    }
    
    interface OperationMetadataV1Alpha {
        // Ephemeral message that may change every time the operation is polled. @OutputOnly
        ephemeralMessage?: string,
        // API method that initiated this operation. Example: google.appengine.v1alpha.Versions.CreateVersion.@OutputOnly
        method?: string,
        // Time that this operation completed.@OutputOnly
        endTime?: string,
        // Time that this operation was created.@OutputOnly
        insertTime?: string,
        // Durable messages that persist on every operation poll. @OutputOnly
        warning?: string[],        
        // Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly
        target?: string,
        // User who requested this operation.@OutputOnly
        user?: string,
    }
    
    interface UrlDispatchRule {
        // Resource ID of a service in this application that should serve the matched request. The service must already exist. Example: default.
        service?: string,
        // Domain name to match against. The wildcard "*" is supported if specified before a period: "*.".Defaults to matching all domains: "*".
        domain?: string,
        // Pathname within the host. Must start with a "/". A single "*" can be included at the end of the path.The sum of the lengths of the domain and path may not exceed 100 characters.
        path?: string,
    }
    
    interface ListVersionsResponse {
        // The versions belonging to the requested service.
        versions?: Version[],        
        // Continuation token for fetching the next page of results.
        nextPageToken?: string,
    }
    
    interface ListAuthorizedDomainsResponse {
        // Continuation token for fetching the next page of results.
        nextPageToken?: string,
        // The authorized domains belonging to the user.
        domains?: AuthorizedDomain[],        
    }
    
    interface ApiEndpointHandler {
        // Path to the script from the application root directory.
        scriptPath?: string,
    }
    
    interface Empty {
    }
    
    interface DomainMapping {
        // The resource records required to configure this domain mapping. These records must be added to the domain's DNS configuration in order to serve the application via this domain mapping.@OutputOnly
        resourceRecords?: ResourceRecord[],        
        // Relative name of the domain serving the application. Example: example.com.
        id?: string,
        // SSL configuration for this domain. If unconfigured, this domain will not serve with SSL.
        sslSettings?: SslSettings,
        // Full path to the DomainMapping resource in the API. Example: apps/myapp/domainMapping/example.com.@OutputOnly
        name?: string,
    }
    
    interface ZipInfo {
        // An estimate of the number of files in a zip for a zip deployment. If set, must be greater than or equal to the actual number of files. Used for optimizing performance; if not provided, deployment may be slow.
        filesCount?: number,
        // URL of the zip file to deploy from. Must be a URL to a resource in Google Cloud Storage in the form 'http(s)://storage.googleapis.com/<bucket>/<object>'.
        sourceUrl?: string,
    }
    
    interface AutomaticScaling {
        // Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.
        minPendingLatency?: string,
        // Scheduler settings for standard environment.
        standardSchedulerSettings?: StandardSchedulerSettings,
        // Target scaling by request utilization.
        requestUtilization?: RequestUtilization,
        // Maximum number of idle instances that should be maintained for this version.
        maxIdleInstances?: number,
        // Minimum number of idle instances that should be maintained for this version. Only applicable for the default version of a service.
        minIdleInstances?: number,
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
    }
    
    interface AuthorizedCertificate {
        // Aggregate count of the domain mappings with this certificate mapped. This count includes domain mappings on applications for which the user does not have VIEWER permissions.Only returned by GET requests when specifically requested by the view=FULL option.@OutputOnly
        domainMappingsCount?: number,
        // Topmost applicable domains of this certificate. This certificate applies to these domains and their subdomains. Example: example.com.@OutputOnly
        domainNames?: string[],        
        // Relative name of the certificate. This is a unique value autogenerated on AuthorizedCertificate resource creation. Example: 12345.@OutputOnly
        id?: string,
        // The user-specified display name of the certificate. This is not guaranteed to be unique. Example: My Certificate.
        displayName?: string,
        // The SSL certificate serving the AuthorizedCertificate resource. This must be obtained independently from a certificate authority.
        certificateRawData?: CertificateRawData,
        // The full paths to user visible Domain Mapping resources that have this certificate mapped. Example: apps/myapp/domainMappings/example.com.This may not represent the full list of mapped domain mappings if the user does not have VIEWER permissions on all of the applications that have this certificate mapped. See domain_mappings_count for a complete count.Only returned by GET requests when specifically requested by the view=FULL option.@OutputOnly
        visibleDomainMappings?: string[],        
        // The time when this certificate expires. To update the renewal time on this certificate, upload an SSL certificate with a different expiration time using AuthorizedCertificates.UpdateAuthorizedCertificate.@OutputOnly
        expireTime?: string,
        // Full path to the AuthorizedCertificate resource in the API. Example: apps/myapp/authorizedCertificates/12345.@OutputOnly
        name?: string,
    }
    
    interface ResourceRecord {
        // Relative name of the object affected by this record. Only applicable for CNAME records. Example: 'www'.
        name?: string,
        // Resource record type. Example: AAAA.
        type?: string,
        // Data for this record. Values vary by record type, as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).
        rrdata?: string,
    }
    
    interface Library {
        // Version of the library to select, or "latest".
        version?: string,
        // Name of the library. Example: "django".
        name?: string,
    }
    
    interface ListLocationsResponse {
        // The standard List next-page token.
        nextPageToken?: string,
        // A list of locations that matches the specified filter in the request.
        locations?: Location[],        
    }
    
    interface ContainerInfo {
        // URI to the hosted container image in Google Container Registry. The URI must be fully qualified and include a tag or digest. Examples: "gcr.io/my-project/image:tag" or "gcr.io/my-project/image@digest"
        image?: string,
    }
    
    interface RequestUtilization {
        // Target requests per second.
        targetRequestCountPerSecond?: number,
        // Target number of concurrent requests.
        targetConcurrentRequests?: number,
    }
    
    interface UrlMap {
        // 30x code to use when performing redirects for the secure field. Defaults to 302.
        redirectHttpResponseCode?: string,
        // Security (HTTPS) enforcement for this URL.
        securityLevel?: string,
        // Action to take when users access resources that require authentication. Defaults to redirect.
        authFailAction?: string,
        // Executes a script to handle the request that matches this URL pattern.
        script?: ScriptHandler,
        // URL prefix. Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings. All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.
        urlRegex?: string,
        // Level of login required to access this resource.
        login?: string,
        // Uses API Endpoints to handle requests.
        apiEndpoint?: ApiEndpointHandler,
        // Returns the contents of a file, such as an image, as the response.
        staticFiles?: StaticFilesHandler,
    }
    
    interface EndpointsApiService {
        // Endpoints service configuration id as specified by the Service Management API. For example "2016-09-19r1"
        configId?: string,
        // Endpoints service name which is the name of the "service" resource in the Service Management API. For example "myapi.endpoints.myproject.cloud.goog"
        name?: string,
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
        // URL to serve the endpoint at.
        url?: string,
        // Security (HTTPS) enforcement for this URL.
        securityLevel?: string,
        // Action to take when users access resources that require authentication. Defaults to redirect.
        authFailAction?: string,
        // Path to the script from the application root directory.
        script?: string,
        // Level of login required to access this resource. Defaults to optional.
        login?: string,
    }
    
    interface StaticFilesHandler {
        // Whether this handler should match the request if the file referenced by the handler does not exist.
        requireMatchingFile?: boolean,
        // Time a static file served by this handler should be cached by web proxies and browsers.
        expiration?: string,
        // HTTP headers to use for all responses from these URLs.
        httpHeaders?: any,
        // Whether files should also be uploaded as code data. By default, files declared in static file handlers are uploaded as static data and are only served to end users; they cannot be read by the application. If enabled, uploads are charged against both your code and static data storage resource quotas.
        applicationReadable?: boolean,
        // Regular expression that matches the file paths for all files that should be referenced by this handler.
        uploadPathRegex?: string,
        // Path to the static files matched by the URL pattern, from the application root directory. The path can refer to text matched in groupings in the URL pattern.
        path?: string,
        // MIME type used to serve all files served by this handler.Defaults to file-specific MIME types, which are derived from each file's filename extension.
        mimeType?: string,
    }
    
    interface DiskUtilization {
        // Target ops read per seconds.
        targetReadOpsPerSecond?: number,
        // Target bytes read per second.
        targetReadBytesPerSecond?: number,
        // Target ops written per second.
        targetWriteOpsPerSecond?: number,
        // Target bytes written per second.
        targetWriteBytesPerSecond?: number,
    }
    
    interface BasicScaling {
        // Maximum number of instances to create for this version.
        maxInstances?: number,
        // Duration of time after the last request that an instance must wait before the instance is shut down.
        idleTimeout?: string,
    }
    
    interface CpuUtilization {
        // Period of time over which CPU utilization is calculated.
        aggregationWindowLength?: string,
        // Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1.
        targetUtilization?: number,
    }
    
    interface IdentityAwareProxy {
        // OAuth2 client secret to use for the authentication flow.For security reasons, this value cannot be retrieved via the API. Instead, the SHA-256 hash of the value is returned in the oauth2_client_secret_sha256 field.@InputOnly
        oauth2ClientSecret?: string,
        // OAuth2 client ID to use for the authentication flow.
        oauth2ClientId?: string,
        // Hex-encoded SHA-256 hash of the client secret.@OutputOnly
        oauth2ClientSecretSha256?: string,
        // Whether the serving infrastructure will authenticate and authorize all incoming requests.If true, the oauth2_client_id and oauth2_client_secret fields must be non-empty.
        enabled?: boolean,
    }
    
    interface Status {
        // The status code, which should be an enum value of google.rpc.Code.
        code?: number,
        // A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
        message?: string,
        // A list of messages that carry the error details. There will be a common set of message types for APIs to use.
        details?: any[],        
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
    
    interface Service {
        // Full path to the Service resource in the API. Example: apps/myapp/services/default.@OutputOnly
        name?: string,
        // Mapping that defines fractional HTTP traffic diversion to different versions within the service.
        split?: TrafficSplit,
        // Relative name of the service within the application. Example: default.@OutputOnly
        id?: string,
    }
    
    interface ListOperationsResponse {
        // A list of operations that matches the specified filter in the request.
        operations?: Operation[],        
        // The standard List next-page token.
        nextPageToken?: string,
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
    
    interface FirewallRule {
        // An optional string description of this rule. This field has a maximum length of 100 characters.
        description?: string,
        // IP address or range, defined using CIDR notation, of requests that this rule applies to. You can use the wildcard character "*" to match all IPs equivalent to "0/0" and "::/0" together. Examples: 192.168.1.1 or 192.168.0.0/16 or 2001:db8::/32  or 2001:0db8:0000:0042:0000:8a2e:0370:7334.<p>Truncation will be silently performed on addresses which are not properly truncated. For example, 1.2.3.4/24 is accepted as the same address as 1.2.3.0/24. Similarly, for IPv6, 2001:db8::1/32 is accepted as the same address as 2001:db8::/32.
        sourceRange?: string,
        // A positive integer between 1, Int32.MaxValue-1 that defines the order of rule evaluation. Rules with the lowest priority are evaluated first.A default rule at priority Int32.MaxValue matches all IPv4 and IPv6 traffic when no previous rule matches. Only the action of this rule can be modified by the user.
        priority?: number,
        // The action to take on matched requests.
        action?: string,
    }
    
    interface ListAuthorizedCertificatesResponse {
        // Continuation token for fetching the next page of results.
        nextPageToken?: string,
        // The SSL certificates the user is authorized to administer.
        certificates?: AuthorizedCertificate[],        
    }
    
    interface FeatureSettings {
        // Boolean value indicating if split health checks should be used instead of the legacy health checks. At an app.yaml level, this means defaulting to 'readiness_check' and 'liveness_check' values instead of 'health_check' ones. Once the legacy 'health_check' behavior is deprecated, and this value is always true, this setting can be removed.
        splitHealthChecks?: boolean,
    }
    
    interface ErrorHandler {
        // MIME type of file. Defaults to text/html.
        mimeType?: string,
        // Error condition this handler applies to.
        errorCode?: string,
        // Static file content to be served for this error.
        staticFile?: string,
    }
    
    interface SslSettings {
        // ID of the AuthorizedCertificate resource configuring SSL for the application. Clearing this field will remove SSL support. Example: 12345.
        certificateId?: string,
    }
    
    interface OperationMetadataV1 {
        // Durable messages that persist on every operation poll. @OutputOnly
        warning?: string[],        
        // Time that this operation was created.@OutputOnly
        insertTime?: string,
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
    
    interface Application {
        // Identifier of the Application resource. This identifier is equivalent to the project ID of the Google Cloud Platform project where you want to deploy your application. Example: myapp.
        id?: string,
        // Cookie expiration policy for this application.
        defaultCookieExpiration?: string,
        // Location from which this application will be run. Application instances will run out of data centers in the chosen location, which is also where all of the application's end user content is stored.Defaults to us-central.Options are:us-central - Central USeurope-west - Western Europeus-east1 - Eastern US
        locationId?: string,
        // Serving status of this application.
        servingStatus?: string,
        // Hostname used to reach this application, as resolved by App Engine.@OutputOnly
        defaultHostname?: string,
        // The feature specific settings to be used in the application.
        featureSettings?: FeatureSettings,
        // Google Apps authentication domain that controls which users can access this application.Defaults to open access for any Google Account.
        authDomain?: string,
        // 
        iap?: IdentityAwareProxy,
        // Google Cloud Storage bucket that can be used for storing files associated with this application. This bucket is associated with the application and can be used by the gcloud deployment commands.@OutputOnly
        codeBucket?: string,
        // Google Cloud Storage bucket that can be used by this application to store content.@OutputOnly
        defaultBucket?: string,
        // HTTP path dispatch rules for requests to the application that do not explicitly target a service or version. Rules are order-dependent. Up to 20 dispatch rules can be supported.@OutputOnly
        dispatchRules?: UrlDispatchRule[],        
        // The Google Container Registry domain used for storing managed build docker images for this application.
        gcrDomain?: string,
        // Full path to the Application resource in the API. Example: apps/myapp.@OutputOnly
        name?: string,
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
        // Availability of the instance.@OutputOnly
        availability?: string,
        // Number of errors since this instance was started.@OutputOnly
        errors?: number,
        // Status of the virtual machine where this instance lives. Only applicable for instances in App Engine flexible environment.@OutputOnly
        vmStatus?: string,
        // Time that this instance was started.@OutputOnly
        startTime?: string,
        // Whether this instance is in debug mode. Only applicable for instances in App Engine flexible environment.@OutputOnly
        vmDebugEnabled?: boolean,
        // Number of requests since this instance was started.@OutputOnly
        requests?: number,
        // App Engine release this instance is running on.@OutputOnly
        appEngineRelease?: string,
        // Name of the virtual machine where this instance lives. Only applicable for instances in App Engine flexible environment.@OutputOnly
        vmName?: string,
        // Virtual machine ID of this instance. Only applicable for instances in App Engine flexible environment.@OutputOnly
        vmId?: string,
        // Average queries per second (QPS) over the last minute.@OutputOnly
        qps?: number,
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
    
    interface LivenessCheck {
        // Number of consecutive failed checks required before considering the VM unhealthy.
        failureThreshold?: number,
        // Time before the check is considered failed.
        timeout?: string,
        // The initial delay before starting to execute the checks.
        initialDelay?: string,
        // The request path.
        path?: string,
        // Number of consecutive successful checks required before considering the VM healthy.
        successThreshold?: number,
        // Host header to send when performing a HTTP Liveness check. Example: "myapp.appspot.com"
        host?: string,
        // Interval between health checks.
        checkInterval?: string,
    }
    
    interface BatchUpdateIngressRulesRequest {
        // A list of FirewallRules to replace the existing set.
        ingressRules?: FirewallRule[],        
    }
    
    interface NetworkUtilization {
        // Target packets received per second.
        targetReceivedPacketsPerSecond?: number,
        // Target bytes sent per second.
        targetSentBytesPerSecond?: number,
        // Target bytes received per second.
        targetReceivedBytesPerSecond?: number,
        // Target packets sent per second.
        targetSentPacketsPerSecond?: number,
    }
    
    interface Location {
        // The canonical id for this location. For example: "us-east1".
        locationId?: string,
        // Service-specific metadata. For example the available capacity at the given location.
        metadata?: any,
        // Cross-service attributes for the location. For example
        // {"cloud.googleapis.com/region": "us-east1"}
        // 
        labels?: any,
        // Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1"
        name?: string,
    }
    
    interface HealthCheck {
        // Host header to send when performing an HTTP health check. Example: "myapp.appspot.com"
        host?: string,
        // Number of consecutive failed health checks required before an instance is restarted.
        restartThreshold?: number,
        // Number of consecutive successful health checks required before receiving traffic.
        healthyThreshold?: number,
        // Interval between health checks.
        checkInterval?: string,
        // Time before the health check is considered failed.
        timeout?: string,
        // Number of consecutive failed health checks required before removing traffic.
        unhealthyThreshold?: number,
        // Whether to explicitly disable health checks for this instance.
        disableHealthCheck?: boolean,
    }
    
    interface ReadinessCheck {
        // Interval between health checks.
        checkInterval?: string,
        // Time before the check is considered failed.
        timeout?: string,
        // Number of consecutive failed checks required before removing traffic.
        failureThreshold?: number,
        // A maximum time limit on application initialization, measured from moment the application successfully replies to a healthcheck until it is ready to serve traffic.
        appStartTimeout?: string,
        // The request path.
        path?: string,
        // Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com"
        host?: string,
        // Number of consecutive successful checks required before receiving traffic.
        successThreshold?: number,
    }
    
    interface DebugInstanceRequest {
        // Public SSH key to add to the instance. Examples:
        // [USERNAME]:ssh-rsa [KEY_VALUE] [USERNAME]
        // [USERNAME]:ssh-rsa [KEY_VALUE] google-ssh {"userName":"[USERNAME]","expireOn":"[EXPIRE_TIME]"}For more information, see Adding and Removing SSH Keys (https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys).
        sshKey?: string,
    }
    
    interface StandardSchedulerSettings {
        // Minimum number of instances for an app version. Set to a non-positive value (0 by convention) to disable min_instances configuration.
        minInstances?: number,
        // Target CPU utilization ratio to maintain when scaling.
        targetCpuUtilization?: number,
        // Target throughput utilization ratio to maintain when scaling
        targetThroughputUtilization?: number,
        // Maximum number of instances for an app version. Set to a non-positive value (0 by convention) to disable max_instances configuration.
        maxInstances?: number,
    }
    
    interface OperationMetadataV1Beta5 {
        // Timestamp that this operation was created.@OutputOnly
        insertTime?: string,
        // Timestamp that this operation completed.@OutputOnly
        endTime?: string,
        // Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly
        target?: string,
        // User who requested this operation.@OutputOnly
        user?: string,
        // API method name that initiated this operation. Example: google.appengine.v1beta5.Version.CreateVersion.@OutputOnly
        method?: string,
    }
    
    interface Version {
        // Time that this version was created.@OutputOnly
        createTime?: string,
        // Machine resources for this version. Only applicable for VM runtimes.
        resources?: Resources,
        // Before an application can receive email or XMPP messages, the application must be configured to enable the service.
        inboundServices?: string[],        
        // Custom static error pages. Limited to 10KB per page.Only returned in GET requests if view=FULL is set.
        errorHandlers?: ErrorHandler[],        
        // Duration that static files should be cached by web proxies and browsers. Only applicable if the corresponding StaticFilesHandler (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#staticfileshandler) does not specify its own expiration time.Only returned in GET requests if view=FULL is set.
        defaultExpiration?: string,
        // Configuration for third-party Python runtime libraries that are required by the application.Only returned in GET requests if view=FULL is set.
        libraries?: Library[],        
        // Files that match this pattern will not be built into this version. Only applicable for Go runtimes.Only returned in GET requests if view=FULL is set.
        nobuildFilesRegex?: string,
        // A service with basic scaling will create an instance when the application receives a request. The instance will be turned down when the app becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.
        basicScaling?: BasicScaling,
        // Desired runtime. Example: python27.
        runtime?: string,
        // Relative name of the version within the service. Example: v1. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names: "default", "latest", and any name with the prefix "ah-".
        id?: string,
        // Email address of the user who created this version.@OutputOnly
        createdBy?: string,
        // Environment variables available to the application.Only returned in GET requests if view=FULL is set.
        envVariables?: any,
        // Configures liveness health checking for VM instances. Unhealthy instances are stopped and replaced with new instancesOnly returned in GET requests if view=FULL is set.
        livenessCheck?: LivenessCheck,
        // Extra network settings. Only applicable for VM runtimes.
        network?: Network,
        // Metadata settings that are supplied to this version to enable beta runtime features.
        betaSettings?: any,
        // App Engine execution environment for this version.Defaults to standard.
        env?: string,
        // An ordered list of URL-matching patterns that should be applied to incoming requests. The first matching URL handles the request and other request handlers are not attempted.Only returned in GET requests if view=FULL is set.
        handlers?: UrlMap[],        
        // Automatic scaling is based on request rate, response latencies, and other application metrics.
        automaticScaling?: AutomaticScaling,
        // Total size in bytes of all the files that are included in this version and curerntly hosted on the App Engine disk.@OutputOnly
        diskUsageBytes?: string,
        // Configures health checking for VM instances. Unhealthy instances are stopped and replaced with new instances. Only applicable for VM runtimes.Only returned in GET requests if view=FULL is set.
        healthCheck?: HealthCheck,
        // Whether multiple requests can be dispatched to this version at once.
        threadsafe?: boolean,
        // Configures readiness health checking for VM instances. Unhealthy instances are not put into the backend traffic rotation.Only returned in GET requests if view=FULL is set.
        readinessCheck?: ReadinessCheck,
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
        // Serving URL for this version. Example: "https://myversion-dot-myservice-dot-myapp.appspot.com"@OutputOnly
        versionUrl?: string,
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
    
    interface RepairApplicationRequest {
    }
    
    interface BuildInfo {
        // The Google Cloud Container Builder build id. Example: "f966068f-08b2-42c8-bdfe-74137dff2bf9"
        cloudBuildId?: string,
    }
    
    interface CertificateRawData {
        // Unencrypted PEM encoded RSA private key. This field is set once on certificate creation and then encrypted. The key size must be 2048 bits or fewer. Must include the header and footer. Example: <pre> -----BEGIN RSA PRIVATE KEY----- <unencrypted_key_value> -----END RSA PRIVATE KEY----- </pre> @InputOnly
        privateKey?: string,
        // PEM encoded x.509 public key certificate. This field is set once on certificate creation. Must include the header and footer. Example: <pre> -----BEGIN CERTIFICATE----- <certificate_value> -----END CERTIFICATE----- </pre>
        publicCertificate?: string,
    }
    
    interface FileInfo {
        // The MIME type of the file.Defaults to the value from Google Cloud Storage.
        mimeType?: string,
        // URL source to use to fetch this file. Must be a URL to a resource in Google Cloud Storage in the form 'http(s)://storage.googleapis.com/<bucket>/<object>'.
        sourceUrl?: string,
        // The SHA1 hash of the file, in hex.
        sha1Sum?: string,
    }
    
    interface ScriptHandler {
        // Path to the script from the application root directory.
        scriptPath?: string,
    }
    
    interface OperationMetadataExperimental {
        // Time that this operation was created.@OutputOnly
        insertTime?: string,
        // Time that this operation completed.@OutputOnly
        endTime?: string,
        // Name of the resource that this operation is acting on. Example: apps/myapp/customDomains/example.com.@OutputOnly
        target?: string,
        // User who requested this operation.@OutputOnly
        user?: string,
        // API method that initiated this operation. Example: google.appengine.experimental.CustomDomains.CreateCustomDomain.@OutputOnly
        method?: string,
    }
    
    interface AuthorizedDomain {
        // Fully qualified domain name of the domain authorized for use. Example: example.com.
        id?: string,
        // Full path to the AuthorizedDomain resource in the API. Example: apps/myapp/authorizedDomains/example.com.@OutputOnly
        name?: string,
    }
    
    interface TrafficSplit {
        // Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits.
        allocations?: any,
        // Mechanism used to determine which version a request is sent to. The traffic selection algorithm will be stable for either type until allocations are changed.
        shardBy?: string,
    }
    
    interface OperationMetadataV1Beta {
        // Durable messages that persist on every operation poll. @OutputOnly
        warning?: string[],        
        // Time that this operation was created.@OutputOnly
        insertTime?: string,
        // User who requested this operation.@OutputOnly
        user?: string,
        // Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly
        target?: string,
        // Ephemeral message that may change every time the operation is polled. @OutputOnly
        ephemeralMessage?: string,
        // API method that initiated this operation. Example: google.appengine.v1beta.Versions.CreateVersion.@OutputOnly
        method?: string,
        // Time that this operation completed.@OutputOnly
        endTime?: string,
    }
    
    interface ListIngressRulesResponse {
        // Continuation token for fetching the next page of results.
        nextPageToken?: string,
        // The ingress FirewallRules for this application.
        ingressRules?: FirewallRule[],        
    }
    
    interface ListServicesResponse {
        // Continuation token for fetching the next page of results.
        nextPageToken?: string,
        // The services belonging to the requested application.
        services?: Service[],        
    }
    
    interface Deployment {
        // The zip file for this deployment, if this is a zip deployment.
        zip?: ZipInfo,
        // The Docker image for the container that runs the version. Only applicable for instances running in the App Engine flexible environment.
        container?: ContainerInfo,
        // Google Cloud Container Builder build information.
        build?: BuildInfo,
        // Manifest of the files stored in Google Cloud Storage that are included as part of this version. All files must be readable using the credentials supplied with this call.
        files?: any,
    }
    
    interface Resources {
        // Memory (GB) needed.
        memoryGb?: number,
        // Number of CPU cores needed.
        cpu?: number,
        // User specified volumes.
        volumes?: Volume[],        
        // Disk size (GB) needed.
        diskGb?: number,
    }
    
    interface BatchUpdateIngressRulesResponse {
        // The full list of ingress FirewallRules for this application.
        ingressRules?: FirewallRule[],        
    }
    
    interface Volume {
        // Volume size in gigabytes.
        sizeGb?: number,
        // Unique name for the volume.
        name?: string,
        // Underlying volume type, e.g. 'tmpfs'.
        volumeType?: string,
    }
    
    interface IngressRulesResource {
        // Deletes the specified firewall rule.
        delete (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Part of `name`. Name of the Firewall resource to delete. Example: apps/myapp/firewall/ingressRules/100.
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            ingressRulesId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Lists the firewall rules of an application.
        list (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Continuation token for fetching the next page of results.
            pageToken?: string,
            // Part of `parent`. Name of the Firewall collection to retrieve. Example: apps/myapp/firewall/ingressRules.
            appsId: string,
            // Maximum results to return per page.
            pageSize?: number,
            // A valid IP Address. If set, only rules matching this address will be returned. The first returned rule will be the rule that fires on requests from this IP.
            matchingAddress?: string,
        }) : gapi.client.Request<ListIngressRulesResponse>;        
        
        // Creates a firewall rule for the application.
        create (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Part of `parent`. Name of the parent Firewall collection in which to create a new rule. Example: apps/myapp/firewall/ingressRules.
            appsId: string,
        }) : gapi.client.Request<FirewallRule>;        
        
        // Updates the specified firewall rule.
        patch (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Part of `name`. See documentation of `appsId`.
            ingressRulesId: string,
            // Standard field mask for the set of fields to be updated.
            updateMask?: string,
            // Part of `name`. Name of the Firewall resource to update. Example: apps/myapp/firewall/ingressRules/100.
            appsId: string,
        }) : gapi.client.Request<FirewallRule>;        
        
        // Gets the specified firewall rule.
        get (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Part of `name`. Name of the Firewall resource to retrieve. Example: apps/myapp/firewall/ingressRules/100.
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            ingressRulesId: string,
        }) : gapi.client.Request<FirewallRule>;        
        
        // Replaces the entire firewall ruleset in one bulk operation. This overrides and replaces the rules of an existing firewall with the new rules.If the final rule does not match traffic with the '*' wildcard IP range, then an "allow all" rule is explicitly added to the end of the list.
        batchUpdate (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Part of `name`. Name of the Firewall collection to set. Example: apps/myapp/firewall/ingressRules.
            appsId: string,
        }) : gapi.client.Request<BatchUpdateIngressRulesResponse>;        
        
    }
    
    
    interface FirewallResource {
        ingressRules: IngressRulesResource,
    }
    
    
    interface LocationsResource {
        // Get information about a location.
        get (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Part of `name`. See documentation of `appsId`.
            locationsId: string,
            // Part of `name`. Resource name for the location.
            appsId: string,
        }) : gapi.client.Request<Location>;        
        
        // Lists information about the supported locations for this service.
        list (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // The standard list page token.
            pageToken?: string,
            // Part of `name`. The resource that owns the locations collection, if applicable.
            appsId: string,
            // The standard list page size.
            pageSize?: number,
            // The standard list filter.
            filter?: string,
        }) : gapi.client.Request<ListLocationsResponse>;        
        
    }
    
    
    interface AuthorizedCertificatesResource {
        // Uploads the specified SSL certificate.
        create (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
            appsId: string,
        }) : gapi.client.Request<AuthorizedCertificate>;        
        
        // Deletes the specified SSL certificate.
        delete (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Part of `name`. Name of the resource to delete. Example: apps/myapp/authorizedCertificates/12345.
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            authorizedCertificatesId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
        patch (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Part of `name`. See documentation of `appsId`.
            authorizedCertificatesId: string,
            // Standard field mask for the set of fields to be updated. Updates are only supported on the certificate_raw_data and display_name fields.
            updateMask?: string,
            // Part of `name`. Name of the resource to update. Example: apps/myapp/authorizedCertificates/12345.
            appsId: string,
        }) : gapi.client.Request<AuthorizedCertificate>;        
        
        // Gets the specified SSL certificate.
        get (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Controls the set of fields returned in the GET response.
            view?: string,
            // Part of `name`. See documentation of `appsId`.
            authorizedCertificatesId: string,
            // Part of `name`. Name of the resource requested. Example: apps/myapp/authorizedCertificates/12345.
            appsId: string,
        }) : gapi.client.Request<AuthorizedCertificate>;        
        
        // Lists all SSL certificates the user is authorized to administer.
        list (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Continuation token for fetching the next page of results.
            pageToken?: string,
            // Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
            appsId: string,
            // Maximum results to return per page.
            pageSize?: number,
        }) : gapi.client.Request<ListAuthorizedCertificatesResponse>;        
        
    }
    
    
    interface InstancesResource {
        // Stops a running instance.
        delete (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Part of `name`. See documentation of `appsId`.
            versionsId: string,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
            // Part of `name`. See documentation of `appsId`.
            instancesId: string,
            // Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.
            appsId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Gets instance information.
        get (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Part of `name`. See documentation of `appsId`.
            versionsId: string,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
            // Part of `name`. See documentation of `appsId`.
            instancesId: string,
            // Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.
            appsId: string,
        }) : gapi.client.Request<Instance>;        
        
        // Lists the instances of a version.Tip: To aggregate details about instances over time, see the Stackdriver Monitoring API (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).
        list (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Part of `parent`. See documentation of `appsId`.
            servicesId: string,
            // Continuation token for fetching the next page of results.
            pageToken?: string,
            // Part of `parent`. Name of the parent Version resource. Example: apps/myapp/services/default/versions/v1.
            appsId: string,
            // Maximum results to return per page.
            pageSize?: number,
            // Part of `parent`. See documentation of `appsId`.
            versionsId: string,
        }) : gapi.client.Request<ListInstancesResponse>;        
        
        // Enables debugging on a VM instance. This allows you to use the SSH command to connect to the virtual machine where the instance lives. While in "debug mode", the instance continues to serve live traffic. You should delete the instance when you are done debugging and then allow the system to take over and determine if another instance should be started.Only applicable for instances in App Engine flexible environment.
        debug (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
        // Deletes an existing Version resource.
        delete (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            versionsId: string,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:
        // serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status):  For Version resources that use basic scaling, manual scaling, or run in  the App Engine flexible environment.
        // instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.instance_class):  For Version resources that run in the App Engine standard environment.
        // automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling):  For Version resources that use automatic scaling and run in the App  Engine standard environment.
        // automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling):  For Version resources that use automatic scaling and run in the App  Engine standard environment.
        patch (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Part of `name`. Name of the resource to update. Example: apps/myapp/services/default/versions/1.
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            versionsId: string,
            // Standard field mask for the set of fields to be updated.
            updateMask?: string,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Specify the FULL_VIEW parameter to get the full resource.
        get (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
            // Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.
            appsId: string,
            // Controls the set of fields returned in the Get response.
            view?: string,
            // Part of `name`. See documentation of `appsId`.
            versionsId: string,
        }) : gapi.client.Request<Version>;        
        
        // Lists the versions of a service.
        list (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Maximum results to return per page.
            pageSize?: number,
            // Controls the set of fields returned in the List response.
            view?: string,
            // Part of `parent`. See documentation of `appsId`.
            servicesId: string,
            // Continuation token for fetching the next page of results.
            pageToken?: string,
            // Part of `parent`. Name of the parent Service resource. Example: apps/myapp/services/default.
            appsId: string,
        }) : gapi.client.Request<ListVersionsResponse>;        
        
        // Deploys code and resource files to a new version.
        create (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Part of `parent`. Name of the parent resource to create this version under. Example: apps/myapp/services/default.
            appsId: string,
            // Part of `parent`. See documentation of `appsId`.
            servicesId: string,
        }) : gapi.client.Request<Operation>;        
        
        instances: InstancesResource,
    }
    
    
    interface ServicesResource {
        // Deletes the specified service and all enclosed versions.
        delete (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Part of `name`. Name of the resource requested. Example: apps/myapp/services/default.
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Updates the configuration of the specified service.
        patch (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Part of `name`. Name of the resource to update. Example: apps/myapp/services/default.
            appsId: string,
            // Set to true to gradually shift traffic to one or more versions that you specify. By default, traffic is shifted immediately. For gradual traffic migration, the target versions must be located within instances that are configured for both warmup requests (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#inboundservicetype) and automatic scaling (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#automaticscaling). You must specify the shardBy (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services#shardby) field in the Service resource. Gradual traffic migration is not supported in the App Engine flexible environment. For examples, see Migrating and Splitting Traffic (https://cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic).
            migrateTraffic?: boolean,
            // Standard field mask for the set of fields to be updated.
            updateMask?: string,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Gets the current configuration of the specified service.
        get (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Part of `name`. See documentation of `appsId`.
            servicesId: string,
            // Part of `name`. Name of the resource requested. Example: apps/myapp/services/default.
            appsId: string,
        }) : gapi.client.Request<Service>;        
        
        // Lists all the services in the application.
        list (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Continuation token for fetching the next page of results.
            pageToken?: string,
            // Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
            appsId: string,
            // Maximum results to return per page.
            pageSize?: number,
        }) : gapi.client.Request<ListServicesResponse>;        
        
        versions: VersionsResource,
    }
    
    
    interface AuthorizedDomainsResource {
        // Lists all domains the user is authorized to administer.
        list (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Maximum results to return per page.
            pageSize?: number,
            // Continuation token for fetching the next page of results.
            pageToken?: string,
            // Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
            appsId: string,
        }) : gapi.client.Request<ListAuthorizedDomainsResponse>;        
        
    }
    
    
    interface OperationsResource {
        // Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
        get (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Part of `name`. The name of the operation resource.
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            operationsId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
        list (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // The standard list filter.
            filter?: string,
            // The standard list page token.
            pageToken?: string,
            // Part of `name`. The name of the operation's parent resource.
            appsId: string,
            // The standard list page size.
            pageSize?: number,
        }) : gapi.client.Request<ListOperationsResponse>;        
        
    }
    
    
    interface DomainMappingsResource {
        // Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
        delete (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Part of `name`. See documentation of `appsId`.
            domainMappingsId: string,
            // Part of `name`. Name of the resource to delete. Example: apps/myapp/domainMappings/example.com.
            appsId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
        patch (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Part of `name`. Name of the resource to update. Example: apps/myapp/domainMappings/example.com.
            appsId: string,
            // Part of `name`. See documentation of `appsId`.
            domainMappingsId: string,
            // Standard field mask for the set of fields to be updated.
            updateMask?: string,
        }) : gapi.client.Request<Operation>;        
        
        // Gets the specified domain mapping.
        get (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Part of `name`. See documentation of `appsId`.
            domainMappingsId: string,
            // Part of `name`. Name of the resource requested. Example: apps/myapp/domainMappings/example.com.
            appsId: string,
        }) : gapi.client.Request<DomainMapping>;        
        
        // Lists the domain mappings on an application.
        list (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Continuation token for fetching the next page of results.
            pageToken?: string,
            // Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
            appsId: string,
            // Maximum results to return per page.
            pageSize?: number,
        }) : gapi.client.Request<ListDomainMappingsResponse>;        
        
        // Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
        create (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
            appsId: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface AppsResource {
        // Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account.
        repair (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Part of `name`. Name of the application to repair. Example: apps/myapp
            appsId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Updates the specified Application resource. You can update the following fields:
        // auth_domain - Google authentication domain for controlling user access to the application.
        // default_cookie_expiration - Cookie expiration policy for the application.
        patch (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Standard field mask for the set of fields to be updated.
            updateMask?: string,
            // Part of `name`. Name of the Application resource to update. Example: apps/myapp.
            appsId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Gets information about an application.
        get (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Part of `name`. Name of the Application resource to get. Example: apps/myapp.
            appsId: string,
        }) : gapi.client.Request<Application>;        
        
        // Creates an App Engine application for a Google Cloud Platform project. Required fields:
        // id - The ID of the target Cloud Platform project.
        // location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/python/console/).
        create (request: {        
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
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
        }) : gapi.client.Request<Operation>;        
        
        firewall: FirewallResource,
        locations: LocationsResource,
        authorizedCertificates: AuthorizedCertificatesResource,
        services: ServicesResource,
        authorizedDomains: AuthorizedDomainsResource,
        operations: OperationsResource,
        domainMappings: DomainMappingsResource,
    }
    
}

declare module gapi.client.appengine {
    var apps: gapi.client.appengine.AppsResource; 
    
}
