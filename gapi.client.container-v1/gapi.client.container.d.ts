// Type definitions for Google Google Container Engine API v1
// Project: https://cloud.google.com/container-engine/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.container {
    
    interface NodeManagement {
        // Specifies the Auto Upgrade knobs for the node pool.
        upgradeOptions?: AutoUpgradeOptions,
        // A flag that specifies whether the node auto-repair is enabled for the node
        // pool. If enabled, the nodes in this node pool will be monitored and, if
        // they fail health checks too many times, an automatic repair action will be
        // triggered.
        autoRepair?: boolean,
        // A flag that specifies whether node auto-upgrade is enabled for the node
        // pool. If enabled, node auto-upgrade helps keep the nodes in your node pool
        // up to date with the latest release version of Kubernetes.
        autoUpgrade?: boolean,
    }
    
    interface CancelOperationRequest {
    }
    
    interface SetLegacyAbacRequest {
        // Whether ABAC authorization will be enabled in the cluster.
        enabled?: boolean,
    }
    
    interface Operation {
        // The server-assigned ID for the operation.
        name?: string,
        // If an error has occurred, a textual description of the error.
        statusMessage?: string,
        // Server-defined URL for the resource.
        selfLink?: string,
        // Server-defined URL for the target of the operation.
        targetLink?: string,
        // Detailed operation progress, if available.
        detail?: string,
        // The operation type.
        operationType?: string,
        // The name of the Google Compute Engine
        // [zone](/compute/docs/zones#available) in which the operation
        // is taking place.
        zone?: string,
        // The current status of the operation.
        status?: string,
    }
    
    interface AddonsConfig {
        // Configuration for the HTTP (L7) load balancing controller addon, which
        // makes it easy to set up HTTP load balancers for services in a cluster.
        httpLoadBalancing?: HttpLoadBalancing,
        // Configuration for the horizontal pod autoscaling feature, which
        // increases or decreases the number of replica pods a replication controller
        // has based on the resource usage of the existing pods.
        horizontalPodAutoscaling?: HorizontalPodAutoscaling,
    }
    
    interface SetLocationsRequest {
        // The desired list of Google Compute Engine
        // [locations](/compute/docs/zones#available) in which the cluster's nodes
        // should be located. Changing the locations a cluster is in will result
        // in nodes being either created or removed from the cluster, depending on
        // whether locations are being added or removed.
        // 
        // This list must always include the cluster's primary zone.
        locations?: string[],        
    }
    
    interface RollbackNodePoolUpgradeRequest {
    }
    
    interface SetNodePoolSizeRequest {
        // The desired node count for the pool.
        nodeCount?: number,
    }
    
    interface UpdateClusterRequest {
        // A description of the update.
        update?: ClusterUpdate,
    }
    
    interface NetworkPolicy {
        // Whether network policy is enabled on the cluster.
        enabled?: boolean,
        // The selected network policy provider.
        provider?: string,
    }
    
    interface UpdateMasterRequest {
        // The Kubernetes version to change the master to. The only valid value is the
        // latest supported version. Use "-" to have the server automatically select
        // the latest version.
        masterVersion?: string,
    }
    
    interface Cluster {
        // Configurations for the various addons available to run in the cluster.
        addonsConfig?: AddonsConfig,
        // [Output only] The current status of this cluster.
        status?: string,
        // The name of the Google Compute Engine
        // [subnetwork](/compute/docs/subnetworks) to which the
        // cluster is connected.
        subnetwork?: string,
        // [Output only] The current version of the node software components.
        // If they are currently at multiple versions because they're in the process
        // of being upgraded, this reflects the minimum version of all nodes.
        currentNodeVersion?: string,
        // The resource labels for the cluster to use to annotate any related
        // Google Compute Engine resources.
        resourceLabels?: any,
        // The name of this cluster. The name must be unique within this project
        // and zone, and can be up to 40 characters with the following restrictions:
        // 
        // * Lowercase letters, numbers, and hyphens only.
        // * Must start with a letter.
        // * Must end with a number or a letter.
        name?: string,
        // The initial Kubernetes version for this cluster.  Valid versions are those
        // found in validMasterVersions returned by getServerConfig.  The version can
        // be upgraded over time; such upgrades are reflected in
        // currentMasterVersion and currentNodeVersion.
        initialClusterVersion?: string,
        // Configuration for cluster IP allocation.
        ipAllocationPolicy?: IPAllocationPolicy,
        // Configuration for the legacy ABAC authorization mode.
        legacyAbac?: LegacyAbac,
        // [Output only] The IP address of this cluster's master endpoint.
        // The endpoint can be accessed from the internet at
        // `https://username:password@endpoint/`.
        // 
        // See the `masterAuth` property of this resource for username and
        // password information.
        endpoint?: string,
        // [Output only] The time the cluster was created, in
        // [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
        createTime?: string,
        // The IP address range of the container pods in this cluster, in
        // [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
        // notation (e.g. `10.96.0.0/14`). Leave blank to have
        // one automatically chosen or specify a `/14` block in `10.0.0.0/8`.
        clusterIpv4Cidr?: string,
        // The number of nodes to create in this cluster. You must ensure that your
        // Compute Engine <a href="/compute/docs/resource-quotas">resource quota</a>
        // is sufficient for this number of instances. You must also have available
        // firewall and routes quota.
        // For requests, this field should only be used in lieu of a
        // "node_pool" object, since this configuration (along with the
        // "node_config") will be used to create a "NodePool" object with an
        // auto-generated name. Do not use this and a node_pool at the same time.
        initialNodeCount?: number,
        // The node pools associated with this cluster.
        // This field should not be set if "node_config" or "initial_node_count" are
        // specified.
        nodePools?: NodePool[],        
        // The list of Google Compute Engine
        // [locations](/compute/docs/zones#available) in which the cluster's nodes
        // should be located.
        locations?: string[],        
        // [Output only] Server-defined URL for the resource.
        selfLink?: string,
        // [Output only] The resource URLs of [instance
        // groups](/compute/docs/instance-groups/) associated with this
        // cluster.
        instanceGroupUrls?: string[],        
        // [Output only] The IP address range of the Kubernetes services in
        // this cluster, in
        // [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
        // notation (e.g. `1.2.3.4/29`). Service addresses are
        // typically put in the last `/16` from the container CIDR.
        servicesIpv4Cidr?: string,
        // Configuration options for the NetworkPolicy feature.
        networkPolicy?: NetworkPolicy,
        // Kubernetes alpha features are enabled on this cluster. This includes alpha
        // API groups (e.g. v1alpha1) and features that may not be production ready in
        // the kubernetes version of the master and nodes.
        // The cluster has no SLA for uptime and master/node upgrades are disabled.
        // Alpha enabled clusters are automatically deleted thirty days after
        // creation.
        enableKubernetesAlpha?: boolean,
        // An optional description of this cluster.
        description?: string,
        // [Output only] The number of nodes currently in the cluster.
        currentNodeCount?: number,
        // The monitoring service the cluster should use to write metrics.
        // Currently available options:
        // 
        // * `monitoring.googleapis.com` - the Google Cloud Monitoring service.
        // * `none` - no metrics will be exported from the cluster.
        // * if left as an empty string, `monitoring.googleapis.com` will be used.
        monitoringService?: string,
        // The name of the Google Compute Engine
        // [network](/compute/docs/networks-and-firewalls#networks) to which the
        // cluster is connected. If left unspecified, the `default` network
        // will be used.
        network?: string,
        // The fingerprint of the set of labels for this cluster.
        labelFingerprint?: string,
        // [Output only] The name of the Google Compute Engine
        // [zone](/compute/docs/zones#available) in which the cluster
        // resides.
        zone?: string,
        // The logging service the cluster should use to write logs.
        // Currently available options:
        // 
        // * `logging.googleapis.com` - the Google Cloud Logging service.
        // * `none` - no logs will be exported from the cluster.
        // * if left as an empty string,`logging.googleapis.com` will be used.
        loggingService?: string,
        // [Output only] The size of the address space on each node for hosting
        // containers. This is provisioned from within the `container_ipv4_cidr`
        // range.
        nodeIpv4CidrSize?: number,
        // [Output only] The time the cluster will be automatically
        // deleted in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
        expireTime?: string,
        // [Output only] Additional information about the current status of this
        // cluster, if available.
        statusMessage?: string,
        // The authentication information for accessing the master endpoint.
        masterAuth?: MasterAuth,
        // [Output only] The current software version of the master endpoint.
        currentMasterVersion?: string,
        // Parameters used in creating the cluster's nodes.
        // See `nodeConfig` for the description of its properties.
        // For requests, this field should only be used in lieu of a
        // "node_pool" object, since this configuration (along with the
        // "initial_node_count") will be used to create a "NodePool" object with an
        // auto-generated name. Do not use this and a node_pool at the same time.
        // For responses, this field will be populated with the node configuration of
        // the first node pool.
        // 
        // If unspecified, the defaults are used.
        nodeConfig?: NodeConfig,
    }
    
    interface ListOperationsResponse {
        // A list of operations in the project in the specified zone.
        operations?: Operation[],        
        // If any zones are listed here, the list of operations returned
        // may be missing the operations from those zones.
        missingZones?: string[],        
    }
    
    interface CreateNodePoolRequest {
        // The node pool to create.
        nodePool?: NodePool,
    }
    
    interface SetMonitoringServiceRequest {
        // The monitoring service the cluster should use to write metrics.
        // Currently available options:
        // 
        // * "monitoring.googleapis.com" - the Google Cloud Monitoring service
        // * "none" - no metrics will be exported from the cluster
        monitoringService?: string,
    }
    
    interface ServerConfig {
        // List of valid image types.
        validImageTypes?: string[],        
        // List of valid node upgrade target versions.
        validNodeVersions?: string[],        
        // List of valid master versions.
        validMasterVersions?: string[],        
        // Default image type.
        defaultImageType?: string,
        // Version of Kubernetes the service deploys by default.
        defaultClusterVersion?: string,
    }
    
    interface NodeConfig {
        // The list of instance tags applied to all nodes. Tags are used to identify
        // valid sources or targets for network firewalls and are specified by
        // the client during cluster or node pool creation. Each tag within the list
        // must comply with RFC1035.
        tags?: string[],        
        // The Google Cloud Platform Service Account to be used by the node VMs. If
        // no Service Account is specified, the "default" service account is used.
        serviceAccount?: string,
        // The name of a Google Compute Engine [machine
        // type](/compute/docs/machine-types) (e.g.
        // `n1-standard-1`).
        // 
        // If unspecified, the default machine type is
        // `n1-standard-1`.
        machineType?: string,
        // The image type to use for this node. Note that for a given image type,
        // the latest version of it will be used.
        imageType?: string,
        // The set of Google API scopes to be made available on all of the
        // node VMs under the "default" service account.
        // 
        // The following scopes are recommended, but not required, and by default are
        // not included:
        // 
        // * `https://www.googleapis.com/auth/compute` is required for mounting
        // persistent storage on your nodes.
        // * `https://www.googleapis.com/auth/devstorage.read_only` is required for
        // communicating with **gcr.io**
        // (the [Google Container Registry](/container-registry/)).
        // 
        // If unspecified, no scopes are added, unless Cloud Logging or Cloud
        // Monitoring are enabled, in which case their required scopes will be added.
        oauthScopes?: string[],        
        // Whether the nodes are created as preemptible VM instances. See:
        // https://cloud.google.com/compute/docs/instances/preemptible for more
        // information about preemptible VM instances.
        preemptible?: boolean,
        // The map of Kubernetes labels (key/value pairs) to be applied to each node.
        // These will added in addition to any default label(s) that
        // Kubernetes may apply to the node.
        // In case of conflict in label keys, the applied set may differ depending on
        // the Kubernetes version -- it's best to assume the behavior is undefined
        // and conflicts should be avoided.
        // For more information, including usage and the valid values, see:
        // http://kubernetes.io/v1.1/docs/user-guide/labels.html
        labels?: any,
        // The number of local SSD disks to be attached to the node.
        // 
        // The limit for this value is dependant upon the maximum number of
        // disks available on a machine per zone. See:
        // https://cloud.google.com/compute/docs/disks/local-ssd#local_ssd_limits
        // for more information.
        localSsdCount?: number,
        // The metadata key/value pairs assigned to instances in the cluster.
        // 
        // Keys must conform to the regexp [a-zA-Z0-9-_]+ and be less than 128 bytes
        // in length. These are reflected as part of a URL in the metadata server.
        // Additionally, to avoid ambiguity, keys must not conflict with any other
        // metadata keys for the project or be one of the four reserved keys:
        // "instance-template", "kube-env", "startup-script", and "user-data"
        // 
        // Values are free-form strings, and only have meaning as interpreted by
        // the image running in the instance. The only restriction placed on them is
        // that each value's size must be less than or equal to 32 KB.
        // 
        // The total size of all keys and values must be less than 512 KB.
        metadata?: any,
        // Size of the disk attached to each node, specified in GB.
        // The smallest allowed disk size is 10GB.
        // 
        // If unspecified, the default disk size is 100GB.
        diskSizeGb?: number,
    }
    
    interface MasterAuth {
        // [Output only] Base64-encoded public certificate that is the root of
        // trust for the cluster.
        clusterCaCertificate?: string,
        // [Output only] Base64-encoded public certificate used by clients to
        // authenticate to the cluster endpoint.
        clientCertificate?: string,
        // The username to use for HTTP basic authentication to the master endpoint.
        // For clusters v1.6.0 and later, you can disable basic authentication by
        // providing an empty username.
        username?: string,
        // The password to use for HTTP basic authentication to the master endpoint.
        // Because the master endpoint is open to the Internet, you should create a
        // strong password.  If a password is provided for cluster creation, username
        // must be non-empty.
        password?: string,
        // Configuration for client certificate authentication on the cluster.  If no
        // configuration is specified, a client certificate is issued.
        clientCertificateConfig?: ClientCertificateConfig,
        // [Output only] Base64-encoded private key used by clients to authenticate
        // to the cluster endpoint.
        clientKey?: string,
    }
    
    interface AutoUpgradeOptions {
        // [Output only] This field is set when upgrades are about to commence
        // with the description of the upgrade.
        description?: string,
        // [Output only] This field is set when upgrades are about to commence
        // with the approximate start time for the upgrades, in
        // [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
        autoUpgradeStartTime?: string,
    }
    
    interface ListClustersResponse {
        // If any zones are listed here, the list of clusters returned
        // may be missing those zones.
        missingZones?: string[],        
        // A list of clusters in the project in the specified zone, or
        // across all ones.
        clusters?: Cluster[],        
    }
    
    interface HttpLoadBalancing {
        // Whether the HTTP Load Balancing controller is enabled in the cluster.
        // When enabled, it runs a small pod in the cluster that manages the load
        // balancers.
        disabled?: boolean,
    }
    
    interface SetNetworkPolicyRequest {
        // Configuration options for the NetworkPolicy feature.
        networkPolicy?: NetworkPolicy,
    }
    
    interface ClientCertificateConfig {
        // Issue a client certificate.
        issueClientCertificate?: boolean,
    }
    
    interface NodePoolAutoscaling {
        // Is autoscaling enabled for this node pool.
        enabled?: boolean,
        // Maximum number of nodes in the NodePool. Must be >= min_node_count. There
        // has to enough quota to scale up the cluster.
        maxNodeCount?: number,
        // Minimum number of nodes in the NodePool. Must be >= 1 and <=
        // max_node_count.
        minNodeCount?: number,
    }
    
    interface SetMasterAuthRequest {
        // A description of the update.
        update?: MasterAuth,
        // The exact form of action to be taken on the master auth
        action?: string,
    }
    
    interface IPAllocationPolicy {
        // A custom subnetwork name to be used if `create_subnetwork` is true.  If
        // this field is empty, then an automatic name will choosen for the new
        // subnetwork.
        subnetworkName?: string,
        // The IP address range for the cluster pod IPs. If this field is set, then
        // `cluster.cluster_ipv4_cidr` must be left blank.
        // 
        // This field is only applicable when `use_ip_aliases` is true.
        // 
        // Set to blank to have a range will be chosen with the default size.
        // 
        // Set to /netmask (e.g. `/14`) to have a range be chosen with a specific
        // netmask.
        // 
        // Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
        // notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g.
        // `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range
        // to use.
        clusterIpv4Cidr?: string,
        // The IP address range of the instance IPs in this cluster.
        // 
        // This is applicable only if `create_subnetwork` is true.
        // 
        // Set to blank to have a range will be chosen with the default size.
        // 
        // Set to /netmask (e.g. `/14`) to have a range be chosen with a specific
        // netmask.
        // 
        // Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
        // notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g.
        // `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range
        // to use.
        nodeIpv4Cidr?: string,
        // The IP address range of the services IPs in this cluster. If blank, a range
        // will be automatically chosen with the default size.
        // 
        // This field is only applicable when `use_ip_aliases` is true.
        // 
        // Set to blank to have a range will be chosen with the default size.
        // 
        // Set to /netmask (e.g. `/14`) to have a range be chosen with a specific
        // netmask.
        // 
        // Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
        // notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g.
        // `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range
        // to use.
        servicesIpv4Cidr?: string,
        // Whether alias IPs will be used for pod IPs in the cluster.
        useIpAliases?: boolean,
        // Whether a new subnetwork will be created automatically for the cluster.
        // 
        // This field is only applicable when `use_ip_aliases` is true.
        createSubnetwork?: boolean,
    }
    
    interface ClusterUpdate {
        // Autoscaler configuration for the node pool specified in
        // desired_node_pool_id. If there is only one pool in the
        // cluster and desired_node_pool_id is not provided then
        // the change applies to that single node pool.
        desiredNodePoolAutoscaling?: NodePoolAutoscaling,
        // The desired list of Google Compute Engine
        // [locations](/compute/docs/zones#available) in which the cluster's nodes
        // should be located. Changing the locations a cluster is in will result
        // in nodes being either created or removed from the cluster, depending on
        // whether locations are being added or removed.
        // 
        // This list must always include the cluster's primary zone.
        desiredLocations?: string[],        
        // The monitoring service the cluster should use to write metrics.
        // Currently available options:
        // 
        // * "monitoring.googleapis.com" - the Google Cloud Monitoring service
        // * "none" - no metrics will be exported from the cluster
        desiredMonitoringService?: string,
        // The desired image type for the node pool.
        // NOTE: Set the "desired_node_pool" field as well.
        desiredImageType?: string,
        // Configurations for the various addons available to run in the cluster.
        desiredAddonsConfig?: AddonsConfig,
        // The node pool to be upgraded. This field is mandatory if
        // "desired_node_version", "desired_image_family" or
        // "desired_node_pool_autoscaling" is specified and there is more than one
        // node pool on the cluster.
        desiredNodePoolId?: string,
        // The Kubernetes version to change the nodes to (typically an
        // upgrade). Use `-` to upgrade to the latest version supported by
        // the server.
        desiredNodeVersion?: string,
        // The Kubernetes version to change the master to. The only valid value is the
        // latest supported version. Use "-" to have the server automatically select
        // the latest version.
        desiredMasterVersion?: string,
    }
    
    interface SetLoggingServiceRequest {
        // The logging service the cluster should use to write metrics.
        // Currently available options:
        // 
        // * "logging.googleapis.com" - the Google Cloud Logging service
        // * "none" - no metrics will be exported from the cluster
        loggingService?: string,
    }
    
    interface HorizontalPodAutoscaling {
        // Whether the Horizontal Pod Autoscaling feature is enabled in the cluster.
        // When enabled, it ensures that a Heapster pod is running in the cluster,
        // which is also used by the Cloud Monitoring service.
        disabled?: boolean,
    }
    
    interface Empty {
    }
    
    interface SetNodePoolManagementRequest {
        // NodeManagement configuration for the node pool.
        management?: NodeManagement,
    }
    
    interface SetNodePoolAutoscalingRequest {
        // Autoscaling configuration for the node pool.
        autoscaling?: NodePoolAutoscaling,
    }
    
    interface CreateClusterRequest {
        // A [cluster
        // resource](/container-engine/reference/rest/v1/projects.zones.clusters)
        cluster?: Cluster,
    }
    
    interface ListNodePoolsResponse {
        // A list of node pools for a cluster.
        nodePools?: NodePool[],        
    }
    
    interface CompleteIPRotationRequest {
    }
    
    interface StartIPRotationRequest {
    }
    
    interface LegacyAbac {
        // Whether the ABAC authorizer is enabled for this cluster. When enabled,
        // identities in the system, including service accounts, nodes, and
        // controllers, will have statically granted permissions beyond those
        // provided by the RBAC configuration or IAM.
        enabled?: boolean,
    }
    
    interface UpdateNodePoolRequest {
        // The desired image type for the node pool.
        imageType?: string,
        // The Kubernetes version to change the nodes to (typically an
        // upgrade). Use `-` to upgrade to the latest version supported by
        // the server.
        nodeVersion?: string,
    }
    
    interface SetAddonsConfigRequest {
        // The desired configurations for the various addons available to run in the
        // cluster.
        addonsConfig?: AddonsConfig,
    }
    
    interface NodePool {
        // [Output only] The status of the nodes in this pool instance.
        status?: string,
        // The node configuration of the pool.
        config?: NodeConfig,
        // [Output only] Additional information about the current status of this
        // node pool instance, if available.
        statusMessage?: string,
        // The name of the node pool.
        name?: string,
        // Autoscaler configuration for this NodePool. Autoscaler is enabled
        // only if a valid configuration is present.
        autoscaling?: NodePoolAutoscaling,
        // NodeManagement configuration for this NodePool.
        management?: NodeManagement,
        // The initial node count for the pool. You must ensure that your
        // Compute Engine <a href="/compute/docs/resource-quotas">resource quota</a>
        // is sufficient for this number of instances. You must also have available
        // firewall and routes quota.
        initialNodeCount?: number,
        // [Output only] Server-defined URL for the resource.
        selfLink?: string,
        // [Output only] The resource URLs of [instance
        // groups](/compute/docs/instance-groups/) associated with this
        // node pool.
        instanceGroupUrls?: string[],        
        // [Output only] The version of the Kubernetes of this node.
        version?: string,
    }
    
    interface SetLabelsRequest {
        // The labels to set for that cluster.
        resourceLabels?: any,
        // The fingerprint of the previous set of labels for this resource,
        // used to detect conflicts. The fingerprint is initially generated by
        // Container Engine and changes after every request to modify or update
        // labels. You must always provide an up-to-date fingerprint hash when
        // updating or changing labels. Make a <code>get()</code> request to the
        // resource to get the latest fingerprint.
        labelFingerprint?: string,
    }
    
    interface OperationsResource {
        // Cancels the specified operation.
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
            // The server-assigned `name` of the operation.
            operationId: string,
            // The Google Developers Console [project ID or project
            // number](https://support.google.com/cloud/answer/6158840).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the operation resides.
            zone: string,
        }) : gapi.client.Request<Empty>;        
        
        // Gets the specified operation.
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
            // The server-assigned `name` of the operation.
            operationId: string,
            // The Google Developers Console [project ID or project
            // number](https://support.google.com/cloud/answer/6158840).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the cluster
            // resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists all operations in a project in a specific zone or all zones.
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
            // The Google Developers Console [project ID or project
            // number](https://support.google.com/cloud/answer/6158840).
            projectId: string,
            // The name of the Google Compute Engine [zone](/compute/docs/zones#available)
            // to return operations for, or `-` for all zones.
            zone: string,
        }) : gapi.client.Request<ListOperationsResponse>;        
        
    }
    
    
    interface NodePoolsResource {
        // Sets the size of a specific node pool.
        setSize (request: {        
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
            // The Google Developers Console [project ID or project
            // number](https://support.google.com/cloud/answer/6158840).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the cluster
            // resides.
            zone: string,
            // The name of the cluster to update.
            clusterId: string,
            // The name of the node pool to update.
            nodePoolId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets the NodeManagement options for a node pool.
        setManagement (request: {        
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
            // The Google Developers Console [project ID or project
            // number](https://support.google.com/cloud/answer/6158840).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the cluster
            // resides.
            zone: string,
            // The name of the cluster to update.
            clusterId: string,
            // The name of the node pool to update.
            nodePoolId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Deletes a node pool from a cluster.
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
            // The Google Developers Console [project ID or project
            // number](https://developers.google.com/console/help/new/#projectnumber).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the cluster
            // resides.
            zone: string,
            // The name of the cluster.
            clusterId: string,
            // The name of the node pool to delete.
            nodePoolId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists the node pools for a cluster.
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
            // The Google Developers Console [project ID or project
            // number](https://developers.google.com/console/help/new/#projectnumber).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the cluster
            // resides.
            zone: string,
            // The name of the cluster.
            clusterId: string,
        }) : gapi.client.Request<ListNodePoolsResponse>;        
        
        // Roll back the previously Aborted or Failed NodePool upgrade.
        // This will be an no-op if the last upgrade successfully completed.
        rollback (request: {        
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
            // The name of the cluster to rollback.
            clusterId: string,
            // The name of the node pool to rollback.
            nodePoolId: string,
            // The Google Developers Console [project ID or project
            // number](https://support.google.com/cloud/answer/6158840).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the cluster
            // resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Creates a node pool for a cluster.
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
            // The name of the cluster.
            clusterId: string,
            // The Google Developers Console [project ID or project
            // number](https://developers.google.com/console/help/new/#projectnumber).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the cluster
            // resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets the autoscaling settings of a specific node pool.
        autoscaling (request: {        
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
            // The name of the cluster to upgrade.
            clusterId: string,
            // The name of the node pool to upgrade.
            nodePoolId: string,
            // The Google Developers Console [project ID or project
            // number](https://support.google.com/cloud/answer/6158840).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the cluster
            // resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Retrieves the node pool requested.
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
            // The name of the cluster.
            clusterId: string,
            // The name of the node pool.
            nodePoolId: string,
            // The Google Developers Console [project ID or project
            // number](https://developers.google.com/console/help/new/#projectnumber).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the cluster
            // resides.
            zone: string,
        }) : gapi.client.Request<NodePool>;        
        
        // Updates the version and/or image type of a specific node pool.
        update (request: {        
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
            // The Google Developers Console [project ID or project
            // number](https://support.google.com/cloud/answer/6158840).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the cluster
            // resides.
            zone: string,
            // The name of the cluster to upgrade.
            clusterId: string,
            // The name of the node pool to upgrade.
            nodePoolId: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface ClustersResource {
        // Updates the settings of a specific cluster.
        update (request: {        
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
            // The name of the cluster to upgrade.
            clusterId: string,
            // The Google Developers Console [project ID or project
            // number](https://support.google.com/cloud/answer/6158840).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the cluster
            // resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets the monitoring service of a specific cluster.
        monitoring (request: {        
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
            // The name of the cluster to upgrade.
            clusterId: string,
            // The Google Developers Console [project ID or project
            // number](https://support.google.com/cloud/answer/6158840).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the cluster
            // resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Updates the master of a specific cluster.
        master (request: {        
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
            // The Google Developers Console [project ID or project
            // number](https://support.google.com/cloud/answer/6158840).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the cluster
            // resides.
            zone: string,
            // The name of the cluster to upgrade.
            clusterId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Used to set master auth materials. Currently supports :-
        // Changing the admin password of a specific cluster.
        // This can be either via password generation or explicitly set the password.
        setMasterAuth (request: {        
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
            // The name of the cluster to upgrade.
            clusterId: string,
            // The Google Developers Console [project ID or project
            // number](https://support.google.com/cloud/answer/6158840).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the cluster
            // resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets the logging service of a specific cluster.
        logging (request: {        
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
            // The name of the cluster to upgrade.
            clusterId: string,
            // The Google Developers Console [project ID or project
            // number](https://support.google.com/cloud/answer/6158840).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the cluster
            // resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists all clusters owned by a project in either the specified zone or all
        // zones.
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
            // The Google Developers Console [project ID or project
            // number](https://support.google.com/cloud/answer/6158840).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the cluster
            // resides, or "-" for all zones.
            zone: string,
        }) : gapi.client.Request<ListClustersResponse>;        
        
        // Creates a cluster, consisting of the specified number and type of Google
        // Compute Engine instances.
        // 
        // By default, the cluster is created in the project's
        // [default network](/compute/docs/networks-and-firewalls#networks).
        // 
        // One firewall is added for the cluster. After cluster creation,
        // the cluster creates routes for each node to allow the containers
        // on that node to communicate with all other instances in the
        // cluster.
        // 
        // Finally, an entry is added to the project's global metadata indicating
        // which CIDR range is being used by the cluster.
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
            // The Google Developers Console [project ID or project
            // number](https://support.google.com/cloud/answer/6158840).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the cluster
            // resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets labels on a cluster.
        resourceLabels (request: {        
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
            // The name of the cluster.
            clusterId: string,
            // The Google Developers Console [project ID or project
            // number](https://developers.google.com/console/help/new/#projectnumber).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the cluster
            // resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Completes master IP rotation.
        completeIpRotation (request: {        
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
            // The name of the cluster.
            clusterId: string,
            // The Google Developers Console [project ID or project
            // number](https://developers.google.com/console/help/new/#projectnumber).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the cluster
            // resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Enables/Disables Network Policy for a cluster.
        setNetworkPolicy (request: {        
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
            // The Google Developers Console [project ID or project
            // number](https://developers.google.com/console/help/new/#projectnumber).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the cluster
            // resides.
            zone: string,
            // The name of the cluster.
            clusterId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Enables or disables the ABAC authorization mechanism on a cluster.
        legacyAbac (request: {        
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
            // The Google Developers Console [project ID or project
            // number](https://support.google.com/cloud/answer/6158840).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the cluster
            // resides.
            zone: string,
            // The name of the cluster to update.
            clusterId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Gets the details of a specific cluster.
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
            // The name of the cluster to retrieve.
            clusterId: string,
            // The Google Developers Console [project ID or project
            // number](https://support.google.com/cloud/answer/6158840).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the cluster
            // resides.
            zone: string,
        }) : gapi.client.Request<Cluster>;        
        
        // Start master IP rotation.
        startIpRotation (request: {        
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
            // The name of the cluster.
            clusterId: string,
            // The Google Developers Console [project ID or project
            // number](https://developers.google.com/console/help/new/#projectnumber).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the cluster
            // resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets the addons of a specific cluster.
        addons (request: {        
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
            // The name of the cluster to upgrade.
            clusterId: string,
            // The Google Developers Console [project ID or project
            // number](https://support.google.com/cloud/answer/6158840).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the cluster
            // resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Deletes the cluster, including the Kubernetes endpoint and all worker
        // nodes.
        // 
        // Firewalls and routes that were configured during cluster creation
        // are also deleted.
        // 
        // Other Google Compute Engine resources that might be in use by the cluster
        // (e.g. load balancer resources) will not be deleted if they weren't present
        // at the initial create time.
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
            // The name of the cluster to delete.
            clusterId: string,
            // The Google Developers Console [project ID or project
            // number](https://support.google.com/cloud/answer/6158840).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the cluster
            // resides.
            zone: string,
        }) : gapi.client.Request<Operation>;        
        
        // Sets the locations of a specific cluster.
        locations (request: {        
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
            // The Google Developers Console [project ID or project
            // number](https://support.google.com/cloud/answer/6158840).
            projectId: string,
            // The name of the Google Compute Engine
            // [zone](/compute/docs/zones#available) in which the cluster
            // resides.
            zone: string,
            // The name of the cluster to upgrade.
            clusterId: string,
        }) : gapi.client.Request<Operation>;        
        
        nodePools: NodePoolsResource,
    }
    
    
    interface ZonesResource {
        // Returns configuration info about the Container Engine service.
        getServerconfig (request: {        
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
            // The Google Developers Console [project ID or project
            // number](https://support.google.com/cloud/answer/6158840).
            projectId: string,
            // The name of the Google Compute Engine [zone](/compute/docs/zones#available)
            // to return operations for.
            zone: string,
        }) : gapi.client.Request<ServerConfig>;        
        
        operations: OperationsResource,
        clusters: ClustersResource,
    }
    
    
    interface ProjectsResource {
        zones: ZonesResource,
    }
    
}

declare module gapi.client.container {
    var projects: gapi.client.container.ProjectsResource; 
    
}
