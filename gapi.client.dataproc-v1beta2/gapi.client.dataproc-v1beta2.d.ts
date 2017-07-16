// Type definitions for Google Google Cloud Dataproc API v1beta2
// Project: https://cloud.google.com/dataproc/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.dataproc {
    
    interface ClusterOperation {
        // Output-only Error, if operation failed.
        error?: string,
        // Output-only The id of the cluster operation.
        operationId?: string,
    }
    
    interface WorkflowMetadata {
        // Output-only The "resource name" of the template.
        template?: string,
        // Output-only The delete cluster operation metadata.
        deleteCluster?: ClusterOperation,
        // Output-only The workflow state.
        state?: string,
        // Output-only The create cluster operation metadata.
        createCluster?: ClusterOperation,
        // Output-only The workflow graph.
        graph?: WorkflowGraph,
        // Output-only The version of template at the time of workflow instantiation.
        version?: number,
    }
    
    interface ListClustersResponse {
        // Output-only. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent <code>ListClustersRequest</code>.
        nextPageToken?: string,
        // Output-only. The clusters in the project.
        clusters?: Cluster[],        
    }
    
    interface Job {
        // Optional. The labels to associate with this job. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a job.
        labels?: any,
        // Output-only. A URI pointing to the location of the stdout of the job's driver program.
        driverOutputResourceUri?: string,
        // Output-only. The previous job status.
        statusHistory?: JobStatus[],        
        // Job is a SparkSql job.
        sparkSqlJob?: SparkSqlJob,
        // Job is a Spark job.
        sparkJob?: SparkJob,
        // Output-only. The collection of YARN applications spun up by this job.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
        yarnApplications?: YarnApplication[],        
        // Job is a Pyspark job.
        pysparkJob?: PySparkJob,
        // Optional. The fully qualified reference to the job, which can be used to obtain the equivalent REST path of the job resource. If this property is not specified when a job is created, the server generates a <code>job_id</code>.
        reference?: JobReference,
        // Job is a Hadoop job.
        hadoopJob?: HadoopJob,
        // Output-only. The job status. Additional application-specific status information may be contained in the <code>type_job</code> and <code>yarn_applications</code> fields.
        status?: JobStatus,
        // Required. Job information, including how, when, and where to run the job.
        placement?: JobPlacement,
        // Output-only. If present, the location of miscellaneous control files which may be used as part of job setup and handling. If not present, control files may be placed in the same location as driver_output_uri.
        driverControlFilesUri?: string,
        // Optional. Job scheduling configuration.
        scheduling?: JobScheduling,
        // Job is a Pig job.
        pigJob?: PigJob,
        // Job is a Hive job.
        hiveJob?: HiveJob,
    }
    
    interface SparkJob {
        // Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
        args?: string[],        
        // Optional. HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. Useful for naively parallel tasks.
        fileUris?: string[],        
        // The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris.
        mainClass?: string,
        // Optional. HCFS URIs of archives to be extracted in the working directory of Spark drivers and tasks. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
        archiveUris?: string[],        
        // The HCFS URI of the jar file that contains the main class.
        mainJarFileUri?: string,
        // Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.
        jarFileUris?: string[],        
        // Optional. The runtime log config for job execution.
        loggingConfig?: LoggingConfig,
        // Optional. A mapping of property names to values, used to configure Spark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
        properties?: any,
    }
    
    interface JobStatus {
        // Output-only. Additional state information, which includes status reported by the agent.
        substate?: string,
        // Output-only. The time when this state was entered.
        stateStartTime?: string,
        // Output-only. Optional job state details, such as an error description if the state is <code>ERROR</code>.
        details?: string,
        // Output-only. A state message specifying the overall job state.
        state?: string,
    }
    
    interface ManagedGroupConfig {
        // Output-only. The name of the Instance Group Manager for this group.
        instanceGroupManagerName?: string,
        // Output-only. The name of the Instance Template used for the Managed Instance Group.
        instanceTemplateName?: string,
    }
    
    interface ClusterOperationStatus {
        // Output-only. A message containing the detailed operation state.
        innerState?: string,
        // Output-only. The time this state was entered.
        stateStartTime?: string,
        // Output-only.A message containing any operation metadata details.
        details?: string,
        // Output-only. A message containing the operation state.
        state?: string,
    }
    
    interface YarnApplication {
        // Required. The application state.
        state?: string,
        // Required. The application name.
        name?: string,
        // Optional. The HTTP URL of the ApplicationMaster, HistoryServer, or TimelineServer that provides application-specific information. The URL uses the internal hostname, and requires a proxy server for resolution and, possibly, access.
        trackingUrl?: string,
        // Required. The numerical progress of the application, from 1 to 100.
        progress?: number,
    }
    
    interface QueryList {
        // Required. The queries to execute. You do not need to terminate a query with a semicolon. Multiple queries can be specified in one string by separating each with a semicolon. Here is an example of an Cloud Dataproc API snippet that uses a QueryList to specify a HiveJob:
        // "hiveJob": {
        //   "queryList": {
        //     "queries": [
        //       "query1",
        //       "query2",
        //       "query3;query4",
        //     ]
        //   }
        // }
        // 
        queries?: string[],        
    }
    
    interface HadoopJob {
        // The HCFS URI of the jar file containing the main class. Examples:  'gs://foo-bucket/analytics-binaries/extract-useful-metrics-mr.jar'  'hdfs:/tmp/test-samples/custom-wordcount.jar'  'file:///home/usr/lib/hadoop-mapreduce/hadoop-mapreduce-examples.jar'
        mainJarFileUri?: string,
        // Optional. Jar file URIs to add to the CLASSPATHs of the Hadoop driver and tasks.
        jarFileUris?: string[],        
        // Optional. The runtime log config for job execution.
        loggingConfig?: LoggingConfig,
        // Optional. A mapping of property names to values, used to configure Hadoop. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site and classes in user code.
        properties?: any,
        // Optional. The arguments to pass to the driver. Do not include arguments, such as -libjars or -Dfoo=bar, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
        args?: string[],        
        // Optional. HCFS (Hadoop Compatible Filesystem) URIs of files to be copied to the working directory of Hadoop drivers and distributed tasks. Useful for naively parallel tasks.
        fileUris?: string[],        
        // The name of the driver's main class. The jar file containing the class must be in the default CLASSPATH or specified in jar_file_uris.
        mainClass?: string,
        // Optional. HCFS URIs of archives to be extracted in the working directory of Hadoop drivers and tasks. Supported file types: .jar, .tar, .tar.gz, .tgz, or .zip.
        archiveUris?: string[],        
    }
    
    interface DiagnoseClusterRequest {
    }
    
    interface DiskConfig {
        // Optional. Size in GB of the boot disk (default is 500GB).
        bootDiskSizeGb?: number,
        // Optional. Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and HDFS (https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.
        numLocalSsds?: number,
    }
    
    interface ClusterOperationMetadata {
        // Output-only. Short description of operation.
        description?: string,
        // Output-only. Errors encountered during operation execution.
        warnings?: string[],        
        // Output-only. Labels associated with the operation
        labels?: any,
        // Output-only. Current operation status.
        status?: ClusterOperationStatus,
        // Output-only. The previous operation status.
        statusHistory?: ClusterOperationStatus[],        
        // Output-only. Name of the cluster for the operation.
        clusterName?: string,
        // Output-only. Cluster UUID for the operation.
        clusterUuid?: string,
        // Output-only. The operation type.
        operationType?: string,
    }
    
    interface Empty {
    }
    
    interface HiveJob {
        // Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries.
        continueOnFailure?: boolean,
        // A list of queries.
        queryList?: QueryList,
        // The HCFS URI of the script that contains Hive queries.
        queryFileUri?: string,
        // Optional. HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs.
        jarFileUris?: string[],        
        // Optional. Mapping of query variable names to values (equivalent to the Hive command: SET name="value";).
        scriptVariables?: any,
        // Optional. A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.
        properties?: any,
    }
    
    interface DiagnoseClusterResults {
        // Output-only. The Google Cloud Storage URI of the diagnostic output. The output report is a plain text file with a summary of collected diagnostics.
        outputUri?: string,
    }
    
    interface WorkflowGraph {
        // Output-only The workflow nodes.
        nodes?: WorkflowNode[],        
    }
    
    interface ClusterConfig {
        // Required. The shared Google Compute Engine config settings for all instances in a cluster.
        gceClusterConfig?: GceClusterConfig,
        // Optional. The config settings for software inside the cluster.
        softwareConfig?: SoftwareConfig,
        // Optional. The Google Compute Engine config settings for the master instance in a cluster.
        masterConfig?: InstanceGroupConfig,
        // Optional. The Google Compute Engine config settings for additional worker instances in a cluster.
        secondaryWorkerConfig?: InstanceGroupConfig,
        // Optional. Commands to execute on each node after config is completed. By default, executables are run on master and all worker nodes. You can test a node's <code>role</code> metadata to run an executable on a master or worker node, as shown below using curl (you can also use wget):
        // ROLE=$(curl -H Metadata-Flavor:Google http://metadata/computeMetadata/v1beta2/instance/attributes/dataproc-role)
        // if [[ "${ROLE}" == 'Master' ]]; then
        //   ... master specific actions ...
        // else
        //   ... worker specific actions ...
        // fi
        // 
        initializationActions?: NodeInitializationAction[],        
        // Optional. A Google Cloud Storage staging bucket used for sharing generated SSH keys and config. If you do not specify a staging bucket, Cloud Dataproc will determine an appropriate Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Google Compute Engine zone where your cluster is deployed, and then it will create and manage this project-level, per-location bucket for you.
        configBucket?: string,
        // Optional. The Google Compute Engine config settings for worker instances in a cluster.
        workerConfig?: InstanceGroupConfig,
    }
    
    interface PySparkJob {
        // Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
        args?: string[],        
        // Optional. HCFS URIs of files to be copied to the working directory of Python drivers and distributed tasks. Useful for naively parallel tasks.
        fileUris?: string[],        
        // Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.
        pythonFileUris?: string[],        
        // Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file.
        mainPythonFileUri?: string,
        // Optional. HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.
        archiveUris?: string[],        
        // Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.
        jarFileUris?: string[],        
        // Optional. The runtime log config for job execution.
        loggingConfig?: LoggingConfig,
        // Optional. A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
        properties?: any,
    }
    
    interface GceClusterConfig {
        // The Google Compute Engine metadata entries to add to all instances (see Project and instance metadata (https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).
        metadata?: any,
        // Optional. If true, all instances in the cluster will only have internal IP addresses. By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance. This internal_ip_only restriction can only be enabled for subnetwork enabled networks, and all off-cluster dependencies must be configured to be accessible without external IP addresses.
        internalIpOnly?: boolean,
        // Optional. The URIs of service account scopes to be included in Google Compute Engine instances. The following base set of scopes is always included:
        // https://www.googleapis.com/auth/cloud.useraccounts.readonly
        // https://www.googleapis.com/auth/devstorage.read_write
        // https://www.googleapis.com/auth/logging.writeIf no scopes are specified, the following defaults are also provided:
        // https://www.googleapis.com/auth/bigquery
        // https://www.googleapis.com/auth/bigtable.admin.table
        // https://www.googleapis.com/auth/bigtable.data
        // https://www.googleapis.com/auth/devstorage.full_control
        serviceAccountScopes?: string[],        
        // The Google Compute Engine tags to add to all instances (see Tagging instances).
        tags?: string[],        
        // Optional. The service account of the instances. Defaults to the default Google Compute Engine service account. Custom service accounts need permissions equivalent to the folloing IAM roles:
        // roles/logging.logWriter
        // roles/storage.objectAdmin(see https://cloud.google.com/compute/docs/access/service-accounts#custom_service_accounts for more information). Example: [account_id]@[project_id].iam.gserviceaccount.com
        serviceAccount?: string,
        // Optional. The Google Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri.A full URL, partial URI, or short name are valid. Examples:
        // https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/sub0
        // projects/[project_id]/regions/us-east1/sub0
        // sub0
        subnetworkUri?: string,
        // Optional. The Google Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither network_uri nor subnetwork_uri is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see Using Subnetworks for more information).A full URL, partial URI, or short name are valid. Examples:
        // https://www.googleapis.com/compute/v1/projects/[project_id]/regions/global/default
        // projects/[project_id]/regions/global/default
        // default
        networkUri?: string,
        // Optional. The zone where the Google Compute Engine cluster will be located. On a create request, it is required in the "global" region. If omitted in a non-global Cloud Dataproc region, the service will pick a zone in the corresponding Compute Engine region. On a get request, zone will always be present.A full URL, partial URI, or short name are valid. Examples:
        // https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]
        // projects/[project_id]/zones/[zone]
        // us-central1-f
        zoneUri?: string,
    }
    
    interface AcceleratorConfig {
        // The number of the accelerator cards of this type exposed to this instance.
        acceleratorCount?: number,
        // Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See Google Compute Engine AcceleratorTypes( /compute/docs/reference/beta/acceleratorTypes)Examples * https://www.googleapis.com/compute/beta/projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80 * projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80 * nvidia-tesla-k80
        acceleratorTypeUri?: string,
    }
    
    interface ClusterMetrics {
        // The HDFS metrics.
        hdfsMetrics?: any,
        // The YARN metrics.
        yarnMetrics?: any,
    }
    
    interface LoggingConfig {
        // The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples:  'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'
        driverLogLevels?: any,
    }
    
    interface WorkflowNode {
        // Output-only The node state.
        state?: string,
        // Output-only The error detail.
        error?: string,
        // Output-only The name of the node.
        stepId?: string,
        // Output-only The job id; populated after the node enters RUNNING state.
        jobId?: string,
        // Output-only Node's prerequisite nodes.
        prerequisiteStepIds?: string[],        
    }
    
    interface Operation {
        // The error result of the operation in case of failure or cancellation.
        error?: Status,
        // Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
        metadata?: any,
        // If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.
        done?: boolean,
        // The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.
        response?: any,
        // The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should have the format of operations/some/unique/name.
        name?: string,
    }
    
    interface JobReference {
        // Optional. The job ID, which must be unique within the project. The job ID is generated by the server upon job submission or provided by the user as a means to perform retries without creating duplicate jobs. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or hyphens (-). The maximum length is 100 characters.
        jobId?: string,
        // Required. The ID of the Google Cloud Platform project that the job belongs to.
        projectId?: string,
    }
    
    interface SubmitJobRequest {
        // Required. The job resource.
        job?: Job,
    }
    
    interface Status {
        // The status code, which should be an enum value of google.rpc.Code.
        code?: number,
        // A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
        message?: string,
        // A list of messages that carry the error details. There is a common set of message types for APIs to use.
        details?: any[],        
    }
    
    interface JobScheduling {
        // Optional. Maximum number of times per hour a driver may be restarted as a result of driver terminating with non-zero code before job is reported failed.A job may be reported as thrashing if driver exits with non-zero code 4 times within 10 minute window.Maximum value is 10.
        maxFailuresPerHour?: number,
    }
    
    interface InstanceGroupConfig {
        // Optional. The Google Compute Engine accelerator configuration for these instances.Beta Feature: This feature is still under development. It may be changed before final release.
        accelerators?: AcceleratorConfig[],        
        // Optional. The number of VM instances in the instance group. For master instance groups, must be set to 1.
        numInstances?: number,
        // Optional. Disk option config settings.
        diskConfig?: DiskConfig,
        // Optional. The Google Compute Engine machine type used for cluster instances.A full URL, partial URI, or short name are valid. Examples:
        // https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2
        // projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2
        // n1-standard-2
        machineTypeUri?: string,
        // Output-only. The Google Compute Engine image resource used for cluster instances. Inferred from SoftwareConfig.image_version.
        imageUri?: string,
        // Output-only. The config for Google Compute Engine Instance Group Manager that manages this group. This is only used for preemptible instance groups.
        managedGroupConfig?: ManagedGroupConfig,
        // Optional. Specifies that this instance group contains preemptible instances.
        isPreemptible?: boolean,
        // Optional. The list of instance names. Cloud Dataproc derives the names from cluster_name, num_instances, and the instance group if not set by user (recommended practice is to let Cloud Dataproc derive the name).
        instanceNames?: string[],        
    }
    
    interface NodeInitializationAction {
        // Required. Google Cloud Storage URI of executable file.
        executableFile?: string,
        // Optional. Amount of time executable has to complete. Default is 10 minutes. Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period.
        executionTimeout?: string,
    }
    
    interface ListJobsResponse {
        // Output-only. Jobs list.
        jobs?: Job[],        
        // Optional. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent <code>ListJobsRequest</code>.
        nextPageToken?: string,
    }
    
    interface CancelJobRequest {
    }
    
    interface SparkSqlJob {
        // The HCFS URI of the script that contains SQL queries.
        queryFileUri?: string,
        // A list of queries.
        queryList?: QueryList,
        // Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).
        scriptVariables?: any,
        // Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH.
        jarFileUris?: string[],        
        // Optional. The runtime log config for job execution.
        loggingConfig?: LoggingConfig,
        // Optional. A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Cloud Dataproc API may be overwritten.
        properties?: any,
    }
    
    interface Cluster {
        // Optional. The labels to associate with this cluster. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.
        labels?: any,
        // Contains cluster daemon metrics such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
        metrics?: ClusterMetrics,
        // Output-only. Cluster status.
        status?: ClusterStatus,
        // Output-only. The previous cluster status.
        statusHistory?: ClusterStatus[],        
        // Required. The cluster config. Note that Cloud Dataproc may set default values, and values may change when clusters are updated.
        config?: ClusterConfig,
        // Output-only. A cluster UUID (Unique Universal Identifier). Cloud Dataproc generates this value when it creates the cluster.
        clusterUuid?: string,
        // Required. The cluster name. Cluster names within a project must be unique. Names of deleted clusters can be reused.
        clusterName?: string,
        // Required. The Google Cloud Platform project ID that the cluster belongs to.
        projectId?: string,
    }
    
    interface ListOperationsResponse {
        // A list of operations that matches the specified filter in the request.
        operations?: Operation[],        
        // The standard List next-page token.
        nextPageToken?: string,
    }
    
    interface JobPlacement {
        // Output-only. A cluster UUID generated by the Cloud Dataproc service when the job is submitted.
        clusterUuid?: string,
        // Required. The name of the cluster where the job will be submitted.
        clusterName?: string,
    }
    
    interface SoftwareConfig {
        // Optional. The properties to set on daemon config files.Property keys are specified in prefix:property format, such as core:fs.defaultFS. The following are supported prefixes and their mappings:
        // capacity-scheduler: capacity-scheduler.xml
        // core: core-site.xml
        // distcp: distcp-default.xml
        // hdfs: hdfs-site.xml
        // hive: hive-site.xml
        // mapred: mapred-site.xml
        // pig: pig.properties
        // spark: spark-defaults.conf
        // yarn: yarn-site.xml
        properties?: any,
        // Optional. The version of software inside the cluster. It must match the regular expression [0-9]+\.[0-9]+. If unspecified, it defaults to the latest version (see Cloud Dataproc Versioning).
        imageVersion?: string,
    }
    
    interface ClusterStatus {
        // Output-only. Optional details of cluster's state.
        detail?: string,
        // Output-only. The cluster's state.
        state?: string,
        // Output-only. Additional state information that includes status reported by the agent.
        substate?: string,
        // Output-only. Time when this state was entered.
        stateStartTime?: string,
    }
    
    interface PigJob {
        // Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries.
        continueOnFailure?: boolean,
        // The HCFS URI of the script that contains the Pig queries.
        queryFileUri?: string,
        // A list of queries.
        queryList?: QueryList,
        // Optional. HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs.
        jarFileUris?: string[],        
        // Optional. Mapping of query variable names to values (equivalent to the Pig command: name=[value]).
        scriptVariables?: any,
        // Optional. The runtime log config for job execution.
        loggingConfig?: LoggingConfig,
        // Optional. A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code.
        properties?: any,
    }
    
    interface OperationsResource {
        // Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
        cancel (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
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
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // The name of the operation resource to be cancelled.
            name: string,
        }) : gapi.client.Request<Empty>;        
        
        // Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
        delete (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
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
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // The name of the operation resource to be deleted.
            name: string,
        }) : gapi.client.Request<Empty>;        
        
        // Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
        get (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
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
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // The name of the operation resource.
            name: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
        list (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
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
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // The standard list page size.
            pageSize?: number,
            // The standard list filter.
            filter?: string,
            // The standard list page token.
            pageToken?: string,
            // The name of the operation's parent resource.
            name: string,
        }) : gapi.client.Request<ListOperationsResponse>;        
        
    }
    
    
    interface JobsResource {
        // Gets the resource representation for a job in a project.
        get (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
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
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Required. The job ID.
            jobId: string,
            // Required. The ID of the Google Cloud Platform project that the job belongs to.
            projectId: string,
            // Required. The Cloud Dataproc region in which to handle the request.
            region: string,
        }) : gapi.client.Request<Job>;        
        
        // Updates a job in a project.
        patch (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
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
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Required. The job ID.
            jobId: string,
            // Required. The ID of the Google Cloud Platform project that the job belongs to.
            projectId: string,
            // Required. Specifies the path, relative to <code>Job</code>, of the field to update. For example, to update the labels of a Job the <code>update_mask</code> parameter would be specified as <code>labels</code>, and the PATCH request body would specify the new value. <strong>Note:</strong> Currently, <code>labels</code> is the only field that can be updated.
            updateMask?: string,
            // Required. The Cloud Dataproc region in which to handle the request.
            region: string,
        }) : gapi.client.Request<Job>;        
        
        // Submits a job to a cluster.
        submit (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
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
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Required. The Cloud Dataproc region in which to handle the request.
            region: string,
            // Required. The ID of the Google Cloud Platform project that the job belongs to.
            projectId: string,
        }) : gapi.client.Request<Job>;        
        
        // Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.
        delete (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
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
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Required. The Cloud Dataproc region in which to handle the request.
            region: string,
            // Required. The job ID.
            jobId: string,
            // Required. The ID of the Google Cloud Platform project that the job belongs to.
            projectId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Lists regions/{region}/jobs in a project.
        list (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
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
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Optional. The number of results to return in each response.
            pageSize?: number,
            // Required. The Cloud Dataproc region in which to handle the request.
            region: string,
            // Optional. If set, the returned jobs list includes only jobs that were submitted to the named cluster.
            clusterName?: string,
            // Required. The ID of the Google Cloud Platform project that the job belongs to.
            projectId: string,
            // Optional. A filter constraining the jobs to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is status.state or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be either ACTIVE or INACTIVE. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND labels.env = staging AND labels.starred = *
            filter?: string,
            // Optional. Specifies enumerated categories of jobs to list (default = match ALL jobs).
            jobStateMatcher?: string,
            // Optional. The page token, returned by a previous call, to request the next page of results.
            pageToken?: string,
        }) : gapi.client.Request<ListJobsResponse>;        
        
        // Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list or regions/{region}/jobs.get.
        cancel (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
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
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Required. The job ID.
            jobId: string,
            // Required. The ID of the Google Cloud Platform project that the job belongs to.
            projectId: string,
            // Required. The Cloud Dataproc region in which to handle the request.
            region: string,
        }) : gapi.client.Request<Job>;        
        
    }
    
    
    interface ClustersResource {
        // Updates a cluster in a project.
        patch (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
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
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Required. Specifies the path, relative to <code>Cluster</code>, of the field to update. For example, to change the number of workers in a cluster to 5, the <code>update_mask</code> parameter would be specified as <code>config.worker_config.num_instances</code>, and the PATCH request body would specify the new value, as follows:
            // {
            //   "config":{
            //     "workerConfig":{
            //       "numInstances":"5"
            //     }
            //   }
            // }
            // Similarly, to change the number of preemptible workers in a cluster to 5, the <code>update_mask</code> parameter would be <code>config.secondary_worker_config.num_instances</code>, and the PATCH request body would be set as follows:
            // {
            //   "config":{
            //     "secondaryWorkerConfig":{
            //       "numInstances":"5"
            //     }
            //   }
            // }
            // <strong>Note:</strong> currently only some fields can be updated: |Mask|Purpose| |labels|Updates labels| |config.worker_config.num_instances|Resize primary worker group| |config.secondary_worker_config.num_instances|Resize secondary worker group|
            updateMask?: string,
            // Required. The Cloud Dataproc region in which to handle the request.
            region: string,
            // Required. The cluster name.
            clusterName: string,
            // Required. The ID of the Google Cloud Platform project the cluster belongs to.
            projectId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Gets the resource representation for a cluster in a project.
        get (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
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
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Required. The ID of the Google Cloud Platform project that the cluster belongs to.
            projectId: string,
            // Required. The Cloud Dataproc region in which to handle the request.
            region: string,
            // Required. The cluster name.
            clusterName: string,
        }) : gapi.client.Request<Cluster>;        
        
        // Gets cluster diagnostic information. After the operation completes, the Operation.response field contains DiagnoseClusterOutputLocation.
        diagnose (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
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
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Required. The ID of the Google Cloud Platform project that the cluster belongs to.
            projectId: string,
            // Required. The Cloud Dataproc region in which to handle the request.
            region: string,
            // Required. The cluster name.
            clusterName: string,
        }) : gapi.client.Request<Operation>;        
        
        // Deletes a cluster in a project.
        delete (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
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
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Required. The Cloud Dataproc region in which to handle the request.
            region: string,
            // Required. The cluster name.
            clusterName: string,
            // Required. The ID of the Google Cloud Platform project that the cluster belongs to.
            projectId: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists all regions/{region}/clusters in a project.
        list (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
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
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Optional. A filter constraining the clusters to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is one of status.state, clusterName, or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be one of the following: ACTIVE, INACTIVE, CREATING, RUNNING, ERROR, DELETING, or UPDATING. ACTIVE contains the CREATING, UPDATING, and RUNNING states. INACTIVE contains the DELETING and ERROR states. clusterName is the name of the cluster provided at creation time. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND clusterName = mycluster AND labels.env = staging AND labels.starred = *
            filter?: string,
            // Required. The Cloud Dataproc region in which to handle the request.
            region: string,
            // Optional. The standard List page token.
            pageToken?: string,
            // Optional. The standard List page size.
            pageSize?: number,
            // Required. The ID of the Google Cloud Platform project that the cluster belongs to.
            projectId: string,
        }) : gapi.client.Request<ListClustersResponse>;        
        
        // Creates a cluster in a project.
        create (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
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
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Required. The Cloud Dataproc region in which to handle the request.
            region: string,
            // Required. The ID of the Google Cloud Platform project that the cluster belongs to.
            projectId: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface RegionsResource {
        operations: OperationsResource,
        jobs: JobsResource,
        clusters: ClustersResource,
    }
    
    
    interface ProjectsResource {
        regions: RegionsResource,
    }
    
}

declare module gapi.client.dataproc {
    var projects: gapi.client.dataproc.ProjectsResource; 
    
}
