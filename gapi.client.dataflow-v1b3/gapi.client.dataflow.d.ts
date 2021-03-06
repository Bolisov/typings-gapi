// Type definitions for Google Google Dataflow API v1b3
// Project: https://cloud.google.com/dataflow
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.dataflow {
    
    interface CounterUpdate {
        // Integer value for Sum, Max, Min.
        integer?: SplitInt64,
        // Counter structured name and metadata.
        structuredNameAndMetadata?: CounterStructuredNameAndMetadata,
        // List of integers, for Set.
        integerList?: IntegerList,
        // Floating point value for Sum, Max, Min.
        floatingPoint?: number,
        // Integer mean aggregation value for Mean.
        integerMean?: IntegerMean,
        // Value for internally-defined counters used by the Dataflow service.
        internal?: any,
        // True if this counter is reported as the total cumulative aggregate
        // value accumulated since the worker started working on this WorkItem.
        // By default this is false, indicating that this counter is reported
        // as a delta.
        cumulative?: boolean,
        // Floating point mean aggregation value for Mean.
        floatingPointMean?: FloatingPointMean,
        // Boolean value for And, Or.
        boolean?: boolean,
        // Counter name and aggregation type.
        nameAndKind?: NameAndKind,
        // Distribution data
        distribution?: DistributionUpdate,
        // List of strings, for Set.
        stringList?: StringList,
        // The service-generated short identifier for this counter.
        // The short_id -> (name, metadata) mapping is constant for the lifetime of
        // a job.
        shortId?: string,
        // List of floating point numbers, for Set.
        floatingPointList?: FloatingPointList,
    }
    
    interface SourceMetadata {
        // An estimate of the total size (in bytes) of the data that would be
        // read from this source.  This estimate is in terms of external storage
        // size, before any decompression or other processing done by the reader.
        estimatedSizeBytes?: string,
        // Specifies that the size of this source is known to be infinite
        // (this is a streaming source).
        infinite?: boolean,
        // Whether this source is known to produce key/value pairs with
        // the (encoded) keys in lexicographically sorted order.
        producesSortedKeys?: boolean,
    }
    
    interface DistributionUpdate {
        // The maximum value present in the distribution.
        max?: SplitInt64,
        // (Optional) Logarithmic histogram of values.
        // Each log may be in no more than one bucket. Order does not matter.
        logBuckets?: LogBucket[],        
        // The count of the number of elements present in the distribution.
        count?: SplitInt64,
        // Use a double since the sum of squares is likely to overflow int64.
        sumOfSquares?: number,
        // The minimum value present in the distribution.
        min?: SplitInt64,
        // Use an int64 since we'd prefer the added precision. If overflow is a common
        // problem we can detect it and use an additional int64 or a double.
        sum?: SplitInt64,
    }
    
    interface SourceFork {
        // DEPRECATED
        residualSource?: DerivedSource,
        // DEPRECATED
        primary?: SourceSplitShard,
        // DEPRECATED
        primarySource?: DerivedSource,
        // DEPRECATED
        residual?: SourceSplitShard,
    }
    
    interface WorkerHealthReportResponse {
        // A positive value indicates the worker should change its reporting interval
        // to the specified value.
        // 
        // The default value of zero means no change in report rate is requested by
        // the server.
        reportInterval?: string,
    }
    
    interface WorkItemStatus {
        // True if the WorkItem was completed (successfully or unsuccessfully).
        completed?: boolean,
        // The worker's progress through this WorkItem.
        reportedProgress?: ApproximateReportedProgress,
        // DEPRECATED in favor of dynamic_source_split.
        sourceFork?: SourceFork,
        // Worker output counters for this WorkItem.
        counterUpdates?: CounterUpdate[],        
        // Identifies the WorkItem.
        workItemId?: string,
        // DEPRECATED in favor of counter_updates.
        metricUpdates?: MetricUpdate[],        
        // Specifies errors which occurred during processing.  If errors are
        // provided, and completed = true, then the WorkItem is considered
        // to have failed.
        errors?: Status[],        
        // See documentation of stop_position.
        dynamicSourceSplit?: DynamicSourceSplit,
        // If the work item represented a SourceOperationRequest, and the work
        // is completed, contains the result of the operation.
        sourceOperationResponse?: SourceOperationResponse,
        // DEPRECATED in favor of reported_progress.
        progress?: ApproximateProgress,
        // Amount of time the worker requests for its lease.
        requestedLeaseDuration?: string,
        // The report index.  When a WorkItem is leased, the lease will
        // contain an initial report index.  When a WorkItem's status is
        // reported to the system, the report should be sent with
        // that report index, and the response will contain the index the
        // worker should use for the next report.  Reports received with
        // unexpected index values will be rejected by the service.
        // 
        // In order to preserve idempotency, the worker should not alter the
        // contents of a report, even if the worker must submit the same
        // report multiple times before getting back a response.  The worker
        // should not submit a subsequent report until the response for the
        // previous report had been received from the service.
        reportIndex?: string,
        // A worker may split an active map task in two parts, "primary" and
        // "residual", continuing to process the primary part and returning the
        // residual part into the pool of available work.
        // This event is called a "dynamic split" and is critical to the dynamic
        // work rebalancing feature. The two obtained sub-tasks are called
        // "parts" of the split.
        // The parts, if concatenated, must represent the same input as would
        // be read by the current task if the split did not happen.
        // The exact way in which the original task is decomposed into the two
        // parts is specified either as a position demarcating them
        // (stop_position), or explicitly as two DerivedSources, if this
        // task consumes a user-defined source type (dynamic_source_split).
        // 
        // The "current" task is adjusted as a result of the split: after a task
        // with range [A, B) sends a stop_position update at C, its range is
        // considered to be [A, C), e.g.:
        // * Progress should be interpreted relative to the new range, e.g.
        //   "75% completed" means "75% of [A, C) completed"
        // * The worker should interpret proposed_stop_position relative to the
        //   new range, e.g. "split at 68%" should be interpreted as
        //   "split at 68% of [A, C)".
        // * If the worker chooses to split again using stop_position, only
        //   stop_positions in [A, C) will be accepted.
        // * Etc.
        // dynamic_source_split has similar semantics: e.g., if a task with
        // source S splits using dynamic_source_split into {P, R}
        // (where P and R must be together equivalent to S), then subsequent
        // progress and proposed_stop_position should be interpreted relative
        // to P, and in a potential subsequent dynamic_source_split into {P', R'},
        // P' and R' must be together equivalent to P, etc.
        stopPosition?: Position,
    }
    
    interface ComponentSource {
        // User name for the original user transform or collection with which this
        // source is most closely associated.
        originalTransformOrCollection?: string,
        // Dataflow service generated name for this source.
        name?: string,
        // Human-readable name for this transform; may be user or system generated.
        userName?: string,
    }
    
    interface WorkItemServiceState {
        // The progress point in the WorkItem where the Dataflow service
        // suggests that the worker truncate the task.
        splitRequest?: ApproximateSplitRequest,
        // Obsolete, always empty.
        suggestedStopPosition?: Position,
        // New recommended reporting interval.
        reportStatusInterval?: string,
        // Other data returned by the service, specific to the particular
        // worker harness.
        harnessData?: any,
        // Time at which the current lease will expire.
        leaseExpireTime?: string,
        // The short ids that workers should use in subsequent metric updates.
        // Workers should strive to use short ids whenever possible, but it is ok
        // to request the short_id again if a worker lost track of it
        // (e.g. if the worker is recovering from a crash).
        // NOTE: it is possible that the response may have short ids for a subset
        // of the metrics.
        metricShortId?: MetricShortId[],        
        // The index value to use for the next report sent by the worker.
        // Note: If the report call fails for whatever reason, the worker should
        // reuse this index for subsequent report attempts.
        nextReportIndex?: string,
        // DEPRECATED in favor of split_request.
        suggestedStopPoint?: ApproximateProgress,
    }
    
    interface MetricStructuredName {
        // Zero or more labeled fields which identify the part of the job this
        // metric is associated with, such as the name of a step or collection.
        // 
        // For example, built-in counters associated with steps will have
        // context['step'] = <step-name>. Counters associated with PCollections
        // in the SDK will have context['pcollection'] = <pcollection-name>.
        context?: any,
        // Worker-defined metric name.
        name?: string,
        // Origin (namespace) of metric name. May be blank for user-define metrics;
        // will be "dataflow" for metrics defined by the Dataflow service or SDK.
        origin?: string,
    }
    
    interface SeqMapTaskOutputInfo {
        // The id of the TupleTag the user code will tag the output value by.
        tag?: string,
        // The sink to write the output value to.
        sink?: Sink,
    }
    
    interface JobExecutionStageInfo {
        // The steps associated with the execution stage.
        // Note that stages may have several steps, and that a given step
        // might be run by more than one stage.
        stepName?: string[],        
    }
    
    interface KeyRangeLocation {
        // The name of the data disk where data for this range is stored.
        // This name is local to the Google Cloud Platform project and uniquely
        // identifies the disk within that project, for example
        // "myproject-1014-104817-4c2-harness-0-disk-1".
        dataDisk?: string,
        // The start (inclusive) of the key range.
        start?: string,
        // The end (exclusive) of the key range.
        end?: string,
        // DEPRECATED. The location of the persistent state for this range, as a
        // persistent directory in the worker local filesystem.
        deprecatedPersistentDirectory?: string,
        // The physical location of this range assignment to be used for
        // streaming computation cross-worker message delivery.
        deliveryEndpoint?: string,
    }
    
    interface SourceGetMetadataRequest {
        // Specification of the source whose metadata should be computed.
        source?: Source,
    }
    
    interface SeqMapTask {
        // The user function to invoke.
        userFn?: any,
        // The user-provided name of the SeqDo operation.
        name?: string,
        // Information about each of the outputs.
        outputInfos?: SeqMapTaskOutputInfo[],        
        // Information about each of the inputs.
        inputs?: SideInputInfo[],        
        // System-defined name of the stage containing the SeqDo operation.
        // Unique across the workflow.
        stageName?: string,
        // System-defined name of the SeqDo operation.
        // Unique across the workflow.
        systemName?: string,
    }
    
    interface NameAndKind {
        // Name of the counter.
        name?: string,
        // Counter aggregation kind.
        kind?: string,
    }
    
    interface WorkerMessageCode {
        // The code is a string intended for consumption by a machine that identifies
        // the type of message being sent.
        // Examples:
        //  1. "HARNESS_STARTED" might be used to indicate the worker harness has
        //      started.
        //  2. "GCS_DOWNLOAD_ERROR" might be used to indicate an error downloading
        //     a GCS file as part of the boot process of one of the worker containers.
        // 
        // This is a string and not an enum to make it easy to add new codes without
        // waiting for an API change.
        code?: string,
        // Parameters contains specific information about the code.
        // 
        // This is a struct to allow parameters of different types.
        // 
        // Examples:
        //  1. For a "HARNESS_STARTED" message parameters might provide the name
        //     of the worker and additional data like timing information.
        //  2. For a "GCS_DOWNLOAD_ERROR" parameters might contain fields listing
        //     the GCS objects being downloaded and fields containing errors.
        // 
        // In general complex data structures should be avoided. If a worker
        // needs to send a specific and complicated data structure then please
        // consider defining a new proto and adding it to the data oneof in
        // WorkerMessageResponse.
        // 
        // Conventions:
        //  Parameters should only be used for information that isn't typically passed
        //  as a label.
        //  hostname and other worker identifiers should almost always be passed
        //  as labels since they will be included on most messages.
        parameters?: any,
    }
    
    interface CustomSourceLocation {
        // Whether this source is stateful.
        stateful?: boolean,
    }
    
    interface MapTask {
        // System-defined name of the stage containing this MapTask.
        // Unique across the workflow.
        stageName?: string,
        // System-defined name of this MapTask.
        // Unique across the workflow.
        systemName?: string,
        // The instructions in the MapTask.
        instructions?: ParallelInstruction[],        
    }
    
    interface FloatingPointMean {
        // The number of values being aggregated.
        count?: SplitInt64,
        // The sum of all values being aggregated.
        sum?: number,
    }
    
    interface ReportWorkItemStatusResponse {
        // A set of messages indicating the service-side state for each
        // WorkItem whose status was reported, in the same order as the
        // WorkItemStatus messages in the ReportWorkItemStatusRequest which
        // resulting in this response.
        workItemServiceStates?: WorkItemServiceState[],        
    }
    
    interface InstructionOutput {
        // The codec to use to encode data being written via this output.
        codec?: any,
        // The user-provided name of this output.
        name?: string,
        // System-defined name for this output in the original workflow graph.
        // Outputs that do not contribute to an original instruction do not set this.
        originalName?: string,
        // System-defined name of this output.
        // Unique across the workflow.
        systemName?: string,
        // For system-generated byte and mean byte metrics, certain instructions
        // should only report the key size.
        onlyCountKeyBytes?: boolean,
        // For system-generated byte and mean byte metrics, certain instructions
        // should only report the value size.
        onlyCountValueBytes?: boolean,
    }
    
    interface CreateJobFromTemplateRequest {
        // Required. The job name to use for the created job.
        jobName?: string,
        // Required. A Cloud Storage path to the template from which to
        // create the job.
        // Must be a valid Cloud Storage URL, beginning with `gs://`.
        gcsPath?: string,
        // The runtime environment for the job.
        environment?: RuntimeEnvironment,
        // The location to which to direct the request.
        location?: string,
        // The runtime parameters to pass to the job.
        parameters?: any,
    }
    
    interface IntegerMean {
        // The number of values being aggregated.
        count?: SplitInt64,
        // The sum of all values being aggregated.
        sum?: SplitInt64,
    }
    
    interface ListJobsResponse {
        // A subset of the requested job information.
        jobs?: Job[],        
        // Zero or more messages describing locations that failed to respond.
        failedLocation?: FailedLocation[],        
        // Set if there may be more results than fit in this response.
        nextPageToken?: string,
    }
    
    interface ComputationTopology {
        // The outputs from the computation.
        outputs?: StreamLocation[],        
        // The state family values.
        stateFamilies?: StateFamilyConfig[],        
        // The system stage name.
        systemStageName?: string,
        // The inputs to the computation.
        inputs?: StreamLocation[],        
        // The ID of the computation.
        computationId?: string,
        // The key ranges processed by the computation.
        keyRanges?: KeyRangeLocation[],        
    }
    
    interface RuntimeEnvironment {
        // The Compute Engine [availability
        // zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones)
        // for launching worker instances to run your pipeline.
        zone?: string,
        // The maximum number of Google Compute Engine instances to be made
        // available to your pipeline during execution, from 1 to 1000.
        maxWorkers?: number,
        // The email address of the service account to run the job as.
        serviceAccountEmail?: string,
        // The Cloud Storage path to use for temporary files.
        // Must be a valid Cloud Storage URL, beginning with `gs://`.
        tempLocation?: string,
        // Whether to bypass the safety checks for the job's temporary directory.
        // Use with caution.
        bypassTempDirValidation?: boolean,
        // The machine type to use for the job. Defaults to the value from the
        // template if not specified.
        machineType?: string,
    }
    
    interface MountedDataDisk {
        // The name of the data disk.
        // This name is local to the Google Cloud Platform project and uniquely
        // identifies the disk within that project, for example
        // "myproject-1014-104817-4c2-harness-0-disk-1".
        dataDisk?: string,
    }
    
    interface StreamingSideInputLocation {
        // Identifies the state family where this side input is stored.
        stateFamily?: string,
        // Identifies the particular side input within the streaming Dataflow job.
        tag?: string,
    }
    
    interface LaunchTemplateResponse {
        // The job that was launched, if the request was not a dry run and
        // the job was successfully launched.
        job?: Job,
    }
    
    interface Job {
        // Preliminary field: The format of this data may change at any time.
        // A description of the user pipeline and stages through which it is executed.
        // Created by Cloud Dataflow service.  Only retrieved with
        // JOB_VIEW_DESCRIPTION or JOB_VIEW_ALL.
        pipelineDescription?: PipelineDescription,
        // If this job is an update of an existing job, this field is the job ID
        // of the job it replaced.
        // 
        // When sending a `CreateJobRequest`, you can update a job by specifying it
        // here. The job named here is stopped, and its intermediate state is
        // transferred to this job.
        replaceJobId?: string,
        // The job's requested state.
        // 
        // `UpdateJob` may be used to switch between the `JOB_STATE_STOPPED` and
        // `JOB_STATE_RUNNING` states, by setting requested_state.  `UpdateJob` may
        // also be used to directly set a job's requested state to
        // `JOB_STATE_CANCELLED` or `JOB_STATE_DONE`, irrevocably terminating the
        // job if it has not already reached a terminal state.
        requestedState?: string,
        // A set of files the system should be aware of that are used
        // for temporary storage. These temporary files will be
        // removed on job completion.
        // No duplicates are allowed.
        // No file patterns are supported.
        // 
        // The supported files are:
        // 
        // Google Cloud Storage:
        // 
        //    storage.googleapis.com/{bucket}/{object}
        //    bucket.storage.googleapis.com/{object}
        tempFiles?: string[],        
        // The client's unique identifier of the job, re-used across retried attempts.
        // If this field is set, the service will ensure its uniqueness.
        // The request to create a job will fail if the service has knowledge of a
        // previously submitted job with the same client's ID and job name.
        // The caller may use this field to ensure idempotence of job
        // creation across retried attempts to create a job.
        // By default, the field is empty and, in that case, the service ignores it.
        clientRequestId?: string,
        // The user-specified Cloud Dataflow job name.
        // 
        // Only one Job with a given name may exist in a project at any
        // given time. If a caller attempts to create a Job with the same
        // name as an already-existing Job, the attempt returns the
        // existing Job.
        // 
        // The name must match the regular expression
        // `[a-z]([-a-z0-9]{0,38}[a-z0-9])?`
        name?: string,
        // If another job is an update of this job (and thus, this job is in
        // `JOB_STATE_UPDATED`), this field contains the ID of that job.
        replacedByJobId?: string,
        // The top-level steps that constitute the entire job.
        steps?: Step[],        
        // The unique ID of this job.
        // 
        // This field is set by the Cloud Dataflow service when the Job is
        // created, and is immutable for the life of the job.
        id?: string,
        // Deprecated.
        executionInfo?: JobExecutionInfo,
        // The current state of the job.
        // 
        // Jobs are created in the `JOB_STATE_STOPPED` state unless otherwise
        // specified.
        // 
        // A job in the `JOB_STATE_RUNNING` state may asynchronously enter a
        // terminal state. After a job has reached a terminal state, no
        // further state updates may be made.
        // 
        // This field may be mutated by the Cloud Dataflow service;
        // callers cannot mutate it.
        currentState?: string,
        // The location that contains this job.
        location?: string,
        // The timestamp associated with the current state.
        currentStateTime?: string,
        // The map of transform name prefixes of the job to be replaced to the
        // corresponding name prefixes of the new job.
        transformNameMapping?: any,
        // The timestamp when the job was initially created. Immutable and set by the
        // Cloud Dataflow service.
        createTime?: string,
        // The environment for the job.
        environment?: Environment,
        // User-defined labels for this job.
        // 
        // The labels map can contain no more than 64 entries.  Entries of the labels
        // map are UTF8 strings that comply with the following restrictions:
        // 
        // * Keys must conform to regexp:  \p{Ll}\p{Lo}{0,62}
        // * Values must conform to regexp:  [\p{Ll}\p{Lo}\p{N}_-]{0,63}
        // * Both keys and values are additionally constrained to be <= 128 bytes in
        // size.
        labels?: any,
        // This field may be mutated by the Cloud Dataflow service;
        // callers cannot mutate it.
        stageStates?: ExecutionStageState[],        
        // The ID of the Cloud Platform project that the job belongs to.
        projectId?: string,
        // The type of Cloud Dataflow job.
        type?: string,
    }
    
    interface DynamicSourceSplit {
        // Primary part (continued to be processed by worker).
        // Specified relative to the previously-current source.
        // Becomes current.
        primary?: DerivedSource,
        // Residual part (returned to the pool of work).
        // Specified relative to the previously-current source.
        residual?: DerivedSource,
    }
    
    interface DerivedSource {
        // What source to base the produced source on (if any).
        derivationMode?: string,
        // Specification of the source.
        source?: Source,
    }
    
    interface SourceOperationResponse {
        // A response to a request to get metadata about a source.
        getMetadata?: SourceGetMetadataResponse,
        // A response to a request to split a source.
        split?: SourceSplitResponse,
    }
    
    interface SideInputInfo {
        // The id of the tag the user code will access this side input by;
        // this should correspond to the tag of some MultiOutputInfo.
        tag?: string,
        // How to interpret the source element(s) as a side input value.
        kind?: any,
        // The source(s) to read element(s) from to get the value of this side input.
        // If more than one source, then the elements are taken from the
        // sources, in the specified order if order matters.
        // At least one source is required.
        sources?: Source[],        
    }
    
    interface SendDebugCaptureResponse {
    }
    
    interface WriteInstruction {
        // The sink to write to.
        sink?: Sink,
        // The input.
        input?: InstructionInput,
    }
    
    interface ConcatPosition {
        // Position within the inner source.
        position?: Position,
        // Index of the inner source.
        index?: number,
    }
    
    interface CounterStructuredNameAndMetadata {
        // Metadata associated with a counter
        metadata?: CounterMetadata,
        // Structured name of the counter.
        name?: CounterStructuredName,
    }
    
    interface AutoscalingSettings {
        // The algorithm to use for autoscaling.
        algorithm?: string,
        // The maximum number of workers to cap scaling at.
        maxNumWorkers?: number,
    }
    
    interface StreamingComputationRanges {
        // Data disk assignments for ranges from this computation.
        rangeAssignments?: KeyRangeDataDiskAssignment[],        
        // The ID of the computation.
        computationId?: string,
    }
    
    interface ExecutionStageSummary {
        // Collections produced and consumed by component transforms of this stage.
        componentSource?: ComponentSource[],        
        // Type of tranform this stage is executing.
        kind?: string,
        // Output sources for this stage.
        outputSource?: StageSource[],        
        // Dataflow service generated name for this stage.
        name?: string,
        // Input sources for this stage.
        inputSource?: StageSource[],        
        // Dataflow service generated id for this stage.
        id?: string,
        // Transforms that comprise this execution stage.
        componentTransform?: ComponentTransform[],        
    }
    
    interface LogBucket {
        // Number of values in this bucket.
        count?: string,
        // floor(log2(value)); defined to be zero for nonpositive values.
        //   log(-1) = 0
        //   log(0) = 0
        //   log(1) = 0
        //   log(2) = 1
        //   log(3) = 1
        //   log(4) = 2
        //   log(5) = 2
        log?: number,
    }
    
    interface SendWorkerMessagesRequest {
        // The WorkerMessages to send.
        workerMessages?: WorkerMessage[],        
        // The location which contains the job
        location?: string,
    }
    
    interface SourceSplitShard {
        // DEPRECATED
        derivationMode?: string,
        // DEPRECATED
        source?: Source,
    }
    
    interface CPUTime {
        // Average CPU utilization rate (% non-idle cpu / second) since previous
        // sample.
        rate?: number,
        // Timestamp of the measurement.
        timestamp?: string,
        // Total active CPU time across all cores (ie., non-idle) in milliseconds
        // since start-up.
        totalMs?: string,
    }
    
    interface Environment {
        // A description of the process that generated the request.
        userAgent?: any,
        // The Cloud Dataflow SDK pipeline options specified by the user. These
        // options are passed through the service and are used to recreate the
        // SDK pipeline options on the worker in a language agnostic and platform
        // independent way.
        sdkPipelineOptions?: any,
        // The type of cluster manager API to use.  If unknown or
        // unspecified, the service will attempt to choose a reasonable
        // default.  This should be in the form of the API service name,
        // e.g. "compute.googleapis.com".
        clusterManagerApiService?: string,
        // The prefix of the resources the system should use for temporary
        // storage.  The system will append the suffix "/temp-{JOBNAME} to
        // this resource prefix, where {JOBNAME} is the value of the
        // job_name field.  The resulting bucket and object prefix is used
        // as the prefix of the resources used to store temporary data
        // needed during the job execution.  NOTE: This will override the
        // value in taskrunner_settings.
        // The supported resource type is:
        // 
        // Google Cloud Storage:
        // 
        //   storage.googleapis.com/{bucket}/{object}
        //   bucket.storage.googleapis.com/{object}
        tempStoragePrefix?: string,
        // The worker pools. At least one "harness" worker pool must be
        // specified in order for the job to have workers.
        workerPools?: WorkerPool[],        
        // The dataset for the current project where various workflow
        // related tables are stored.
        // 
        // The supported resource type is:
        // 
        // Google BigQuery:
        //   bigquery.googleapis.com/{dataset}
        dataset?: string,
        // The list of experiments to enable.
        experiments?: string[],        
        // Experimental settings.
        internalExperiments?: any,
        // A structure describing which components and their versions of the service
        // are required in order to run the job.
        version?: any,
        // Identity to run virtual machines as. Defaults to the default account.
        serviceAccountEmail?: string,
    }
    
    interface StreamingComputationTask {
        // Contains ranges of a streaming computation this task should apply to.
        computationRanges?: StreamingComputationRanges[],        
        // Describes the set of data disks this task should apply to.
        dataDisks?: MountedDataDisk[],        
        // A type of streaming computation task.
        taskType?: string,
    }
    
    interface SendDebugCaptureRequest {
        // The internal component id for which debug information is sent.
        componentId?: string,
        // The worker id, i.e., VM hostname.
        workerId?: string,
        // The location which contains the job specified by job_id.
        location?: string,
        // The encoded debug information.
        data?: string,
    }
    
    interface GetDebugConfigResponse {
        // The encoded debug configuration for the requested component.
        config?: string,
    }
    
    interface ComponentTransform {
        // User name for the original user transform with which this transform is
        // most closely associated.
        originalTransform?: string,
        // Dataflow service generated name for this source.
        name?: string,
        // Human-readable name for this transform; may be user or system generated.
        userName?: string,
    }
    
    interface StreamingSetupTask {
        // The TCP port on which the worker should listen for messages from
        // other streaming computation workers.
        receiveWorkPort?: number,
        // The global topology of the streaming Dataflow job.
        streamingComputationTopology?: TopologyConfig,
        // The user has requested drain.
        drain?: boolean,
        // The TCP port used by the worker to communicate with the Dataflow
        // worker harness.
        workerHarnessPort?: number,
    }
    
    interface PubsubLocation {
        // If set, contains a pubsub label from which to extract record ids.
        // If left empty, record deduplication will be strictly best effort.
        idLabel?: string,
        // A pubsub topic, in the form of
        // "pubsub.googleapis.com/topics/<project-id>/<topic-name>"
        topic?: string,
        // If set, contains a pubsub label from which to extract record timestamps.
        // If left empty, record timestamps will be generated upon arrival.
        timestampLabel?: string,
        // A pubsub subscription, in the form of
        // "pubsub.googleapis.com/subscriptions/<project-id>/<subscription-name>"
        subscription?: string,
        // Indicates whether the pipeline allows late-arriving data.
        dropLateData?: boolean,
        // If set, specifies the pubsub subscription that will be used for tracking
        // custom time timestamps for watermark estimation.
        trackingSubscription?: string,
        // If true, then the client has requested to get pubsub attributes.
        withAttributes?: boolean,
    }
    
    interface WorkerHealthReport {
        // The interval at which the worker is sending health reports.
        // The default value of 0 should be interpreted as the field is not being
        // explicitly set by the worker.
        reportInterval?: string,
        // Whether the VM is healthy.
        vmIsHealthy?: boolean,
        // The pods running on the worker. See:
        // http://kubernetes.io/v1.1/docs/api-reference/v1/definitions.html#_v1_pod
        // 
        // This field is used by the worker to send the status of the indvidual
        // containers running on each worker.
        pods?: any[],        
        // The time the VM was booted.
        vmStartupTime?: string,
    }
    
    interface JobMessage {
        // Deprecated.
        id?: string,
        // Importance level of the message.
        messageImportance?: string,
        // The text of the message.
        messageText?: string,
        // The timestamp of the message.
        time?: string,
    }
    
    interface ParameterMetadata {
        // Optional. Whether the parameter is optional. Defaults to false.
        isOptional?: boolean,
        // Required. The name of the parameter.
        name?: string,
        // Optional. Regexes that the parameter must match.
        regexes?: string[],        
        // Required. The label to display for the parameter.
        label?: string,
        // Required. The help text to display for the parameter.
        helpText?: string,
    }
    
    interface MultiOutputInfo {
        // The id of the tag the user code will emit to this output by; this
        // should correspond to the tag of some SideInputInfo.
        tag?: string,
    }
    
    interface SourceSplitRequest {
        // Hints for tuning the splitting process.
        options?: SourceSplitOptions,
        // Specification of the source to be split.
        source?: Source,
    }
    
    interface SourceGetMetadataResponse {
        // The computed metadata.
        metadata?: SourceMetadata,
    }
    
    interface ShellTask {
        // The shell command to run.
        command?: string,
        // Exit code for the task.
        exitCode?: number,
    }
    
    interface MetricShortId {
        // The index of the corresponding metric in
        // the ReportWorkItemStatusRequest. Required.
        metricIndex?: number,
        // The service-generated short identifier for the metric.
        shortId?: string,
    }
    
    interface AutoscalingEvent {
        // The type of autoscaling event to report.
        eventType?: string,
        // The target number of workers the worker pool wants to resize to use.
        targetNumWorkers?: string,
        // The current number of workers the job has.
        currentNumWorkers?: string,
        // The time this event was emitted to indicate a new target or current
        // num_workers value.
        time?: string,
        // A message describing why the system decided to adjust the current
        // number of workers, why it failed, or why the system decided to
        // not make any changes to the number of workers.
        description?: StructuredMessage,
    }
    
    interface TaskRunnerSettings {
        // The UNIX group ID on the worker VM to use for tasks launched by
        // taskrunner; e.g. "wheel".
        taskGroup?: string,
        // The command to launch the worker harness.
        harnessCommand?: string,
        // The directory on the VM to store logs.
        logDir?: string,
        // The API version of endpoint, e.g. "v1b3"
        dataflowApiVersion?: string,
        // The OAuth2 scopes to be requested by the taskrunner in order to
        // access the Cloud Dataflow API.
        oauthScopes?: string[],        
        // The streaming worker main class name.
        streamingWorkerMainClass?: string,
        // Indicates where to put logs.  If this is not specified, the logs
        // will not be uploaded.
        // 
        // The supported resource type is:
        // 
        // Google Cloud Storage:
        //   storage.googleapis.com/{bucket}/{object}
        //   bucket.storage.googleapis.com/{object}
        logUploadLocation?: string,
        // The file to store the workflow in.
        workflowFileName?: string,
        // The prefix of the resources the taskrunner should use for
        // temporary storage.
        // 
        // The supported resource type is:
        // 
        // Google Cloud Storage:
        //   storage.googleapis.com/{bucket}/{object}
        //   bucket.storage.googleapis.com/{object}
        tempStoragePrefix?: string,
        // The location on the worker for task-specific subdirectories.
        baseTaskDir?: string,
        // The suggested backend language.
        languageHint?: string,
        // The file to store preprocessing commands in.
        commandlinesFileName?: string,
        // The base URL for the taskrunner to use when accessing Google Cloud APIs.
        // 
        // When workers access Google Cloud APIs, they logically do so via
        // relative URLs.  If this field is specified, it supplies the base
        // URL to use for resolving these relative URLs.  The normative
        // algorithm used is defined by RFC 1808, "Relative Uniform Resource
        // Locators".
        // 
        // If not specified, the default value is "http://www.googleapis.com/"
        baseUrl?: string,
        // Whether to send taskrunner log info to Google Compute Engine VM serial
        // console.
        logToSerialconsole?: boolean,
        // Whether to continue taskrunner if an exception is hit.
        continueOnException?: boolean,
        // The settings to pass to the parallel worker harness.
        parallelWorkerSettings?: WorkerSettings,
        // The ID string of the VM.
        vmId?: string,
        // The UNIX user ID on the worker VM to use for tasks launched by
        // taskrunner; e.g. "root".
        taskUser?: string,
        // Whether to also send taskrunner log info to stderr.
        alsologtostderr?: boolean,
    }
    
    interface Position {
        // Position is a string key, ordered lexicographically.
        key?: string,
        // Position is a record index.
        recordIndex?: string,
        // CloudPosition is a base64 encoded BatchShufflePosition (with FIXED
        // sharding).
        shufflePosition?: string,
        // CloudPosition is a concat position.
        concatPosition?: ConcatPosition,
        // Position is a byte offset.
        byteOffset?: string,
        // Position is past all other positions. Also useful for the end
        // position of an unbounded range.
        end?: boolean,
    }
    
    interface Source {
        // Optionally, metadata for this source can be supplied right away,
        // avoiding a SourceGetMetadataOperation roundtrip
        // (see SourceOperationRequest).
        // 
        // This field is meaningful only in the Source objects populated
        // by the user (e.g. when filling in a DerivedSource).
        // Source objects supplied by the framework to the user don't have
        // this field populated.
        metadata?: SourceMetadata,
        // While splitting, sources may specify the produced bundles
        // as differences against another source, in order to save backend-side
        // memory and allow bigger jobs. For details, see SourceSplitRequest.
        // To support this use case, the full set of parameters of the source
        // is logically obtained by taking the latest explicitly specified value
        // of each parameter in the order:
        // base_specs (later items win), spec (overrides anything in base_specs).
        baseSpecs?: any[],        
        // Setting this value to true hints to the framework that the source
        // doesn't need splitting, and using SourceSplitRequest on it would
        // yield SOURCE_SPLIT_OUTCOME_USE_CURRENT.
        // 
        // E.g. a file splitter may set this to true when splitting a single file
        // into a set of byte ranges of appropriate size, and set this
        // to false when splitting a filepattern into individual files.
        // However, for efficiency, a file splitter may decide to produce
        // file subranges directly from the filepattern to avoid a splitting
        // round-trip.
        // 
        // See SourceSplitRequest for an overview of the splitting process.
        // 
        // This field is meaningful only in the Source objects populated
        // by the user (e.g. when filling in a DerivedSource).
        // Source objects supplied by the framework to the user don't have
        // this field populated.
        doesNotNeedSplitting?: boolean,
        // The codec to use to decode data read from the source.
        codec?: any,
        // The source to read from, plus its parameters.
        spec?: any,
    }
    
    interface SplitInt64 {
        // The low order bits: n & 0xffffffff.
        lowBits?: number,
        // The high order bits, including the sign: n >> 32.
        highBits?: number,
    }
    
    interface WorkerPool {
        // Zone to run the worker pools in.  If empty or unspecified, the service
        // will attempt to choose a reasonable default.
        zone?: string,
        // Number of Google Compute Engine workers in this pool needed to
        // execute the job.  If zero or unspecified, the service will
        // attempt to choose a reasonable default.
        numWorkers?: number,
        // The number of threads per worker harness. If empty or unspecified, the
        // service will choose a number of threads (according to the number of cores
        // on the selected machine type for batch, or 1 by convention for streaming).
        numThreadsPerWorker?: number,
        // Fully qualified source image for disks.
        diskSourceImage?: string,
        // Packages to be installed on workers.
        packages?: Package[],        
        // Sets the policy for determining when to turndown worker pool.
        // Allowed values are: `TEARDOWN_ALWAYS`, `TEARDOWN_ON_SUCCESS`, and
        // `TEARDOWN_NEVER`.
        // `TEARDOWN_ALWAYS` means workers are always torn down regardless of whether
        // the job succeeds. `TEARDOWN_ON_SUCCESS` means workers are torn down
        // if the job succeeds. `TEARDOWN_NEVER` means the workers are never torn
        // down.
        // 
        // If the workers are not torn down by the service, they will
        // continue to run and use Google Compute Engine VM resources in the
        // user's project until they are explicitly terminated by the user.
        // Because of this, Google recommends using the `TEARDOWN_ALWAYS`
        // policy except for small, manually supervised test jobs.
        // 
        // If unknown or unspecified, the service will attempt to choose a reasonable
        // default.
        teardownPolicy?: string,
        // The action to take on host maintenance, as defined by the Google
        // Compute Engine API.
        onHostMaintenance?: string,
        // Extra arguments for this worker pool.
        poolArgs?: any,
        // Size of root disk for VMs, in GB.  If zero or unspecified, the service will
        // attempt to choose a reasonable default.
        diskSizeGb?: number,
        // Required. Docker container image that executes the Cloud Dataflow worker
        // harness, residing in Google Container Registry.
        workerHarnessContainerImage?: string,
        // Machine type (e.g. "n1-standard-1").  If empty or unspecified, the
        // service will attempt to choose a reasonable default.
        machineType?: string,
        // Type of root disk for VMs.  If empty or unspecified, the service will
        // attempt to choose a reasonable default.
        diskType?: string,
        // The kind of the worker pool; currently only `harness` and `shuffle`
        // are supported.
        kind?: string,
        // Data disks that are used by a VM in this workflow.
        dataDisks?: Disk[],        
        // Subnetwork to which VMs will be assigned, if desired.  Expected to be of
        // the form "regions/REGION/subnetworks/SUBNETWORK".
        subnetwork?: string,
        // Configuration for VM IPs.
        ipConfiguration?: string,
        // Settings passed through to Google Compute Engine workers when
        // using the standard Dataflow task runner.  Users should ignore
        // this field.
        taskrunnerSettings?: TaskRunnerSettings,
        // Settings for autoscaling of this WorkerPool.
        autoscalingSettings?: AutoscalingSettings,
        // Metadata to set on the Google Compute Engine VMs.
        metadata?: any,
        // The default package set to install.  This allows the service to
        // select a default set of packages which are useful to worker
        // harnesses written in a particular language.
        defaultPackageSet?: string,
        // Network to which VMs will be assigned.  If empty or unspecified,
        // the service will use the network "default".
        network?: string,
    }
    
    interface SourceOperationRequest {
        // Information about a request to get metadata about a source.
        getMetadata?: SourceGetMetadataRequest,
        // Information about a request to split a source.
        split?: SourceSplitRequest,
    }
    
    interface StructuredMessage {
        // Idenfier for this message type.  Used by external systems to
        // internationalize or personalize message.
        messageKey?: string,
        // Human-readable version of message.
        messageText?: string,
        // The structured data associated with this message.
        parameters?: Parameter[],        
    }
    
    interface WorkItem {
        // Identifies this WorkItem.
        id?: string,
        // Work item-specific configuration as an opaque blob.
        configuration?: string,
        // Additional information for MapTask WorkItems.
        mapTask?: MapTask,
        // Additional information for SeqMapTask WorkItems.
        seqMapTask?: SeqMapTask,
        // Any required packages that need to be fetched in order to execute
        // this WorkItem.
        packages?: Package[],        
        // Identifies the cloud project this WorkItem belongs to.
        projectId?: string,
        // Recommended reporting interval.
        reportStatusInterval?: string,
        // Additional information for source operation WorkItems.
        sourceOperationTask?: SourceOperationRequest,
        // Additional information for StreamingSetupTask WorkItems.
        streamingSetupTask?: StreamingSetupTask,
        // Time when the lease on this Work will expire.
        leaseExpireTime?: string,
        // Additional information for StreamingConfigTask WorkItems.
        streamingConfigTask?: StreamingConfigTask,
        // The initial index to use when reporting the status of the WorkItem.
        initialReportIndex?: string,
        // Additional information for ShellTask WorkItems.
        shellTask?: ShellTask,
        // Additional information for StreamingComputationTask WorkItems.
        streamingComputationTask?: StreamingComputationTask,
        // Identifies the workflow job this WorkItem belongs to.
        jobId?: string,
    }
    
    interface ResourceUtilizationReport {
        // CPU utilization samples.
        cpuTime?: CPUTime[],        
    }
    
    interface ReportedParallelism {
        // Specifies whether the parallelism is infinite. If true, "value" is
        // ignored.
        // Infinite parallelism means the service will assume that the work item
        // can always be split into more non-empty work items by dynamic splitting.
        // This is a work-around for lack of support for infinity by the current
        // JSON-based Java RPC stack.
        isInfinite?: boolean,
        // Specifies the level of parallelism in case it is finite.
        value?: number,
    }
    
    interface TopologyConfig {
        // Maps user stage names to stable computation names.
        userStageToComputationNameMap?: any,
        // The computations associated with a streaming Dataflow job.
        computations?: ComputationTopology[],        
        // Version number for persistent state.
        persistentStateVersion?: number,
        // The disks assigned to a streaming Dataflow job.
        dataDiskAssignments?: DataDiskAssignment[],        
        // The size (in bits) of keys that will be assigned to source messages.
        forwardingKeyBits?: number,
    }
    
    interface SourceSplitOptions {
        // The source should be split into a set of bundles where the estimated size
        // of each is approximately this many bytes.
        desiredBundleSizeBytes?: string,
        // DEPRECATED in favor of desired_bundle_size_bytes.
        desiredShardSizeBytes?: string,
    }
    
    interface ReadInstruction {
        // The source to read from.
        source?: Source,
    }
    
    interface WorkerSettings {
        // The prefix of the resources the system should use for temporary
        // storage.
        // 
        // The supported resource type is:
        // 
        // Google Cloud Storage:
        // 
        //   storage.googleapis.com/{bucket}/{object}
        //   bucket.storage.googleapis.com/{object}
        tempStoragePrefix?: string,
        // The base URL for accessing Google Cloud APIs.
        // 
        // When workers access Google Cloud APIs, they logically do so via
        // relative URLs.  If this field is specified, it supplies the base
        // URL to use for resolving these relative URLs.  The normative
        // algorithm used is defined by RFC 1808, "Relative Uniform Resource
        // Locators".
        // 
        // If not specified, the default value is "http://www.googleapis.com/"
        baseUrl?: string,
        // Whether to send work progress updates to the service.
        reportingEnabled?: boolean,
        // The Cloud Dataflow service path relative to the root URL, for example,
        // "dataflow/v1b3/projects".
        servicePath?: string,
        // The Shuffle service path relative to the root URL, for example,
        // "shuffle/v1beta1".
        shuffleServicePath?: string,
        // The ID of the worker running this pipeline.
        workerId?: string,
    }
    
    interface DataDiskAssignment {
        // VM instance name the data disks mounted to, for example
        // "myproject-1014-104817-4c2-harness-0".
        vmInstance?: string,
        // Mounted data disks. The order is important a data disk's 0-based index in
        // this list defines which persistent directory the disk is mounted to, for
        // example the list of { "myproject-1014-104817-4c2-harness-0-disk-0" },
        // { "myproject-1014-104817-4c2-harness-0-disk-1" }.
        dataDisks?: string[],        
    }
    
    interface StreamingStageLocation {
        // Identifies the particular stream within the streaming Dataflow
        // job.
        streamId?: string,
    }
    
    interface ApproximateSplitRequest {
        // A Position at which to split the work item.
        position?: Position,
        // A fraction at which to split the work item, from 0.0 (beginning of the
        // input) to 1.0 (end of the input).
        fractionConsumed?: number,
    }
    
    interface Status {
        // A developer-facing error message, which should be in English. Any
        // user-facing error message should be localized and sent in the
        // google.rpc.Status.details field, or localized by the client.
        message?: string,
        // A list of messages that carry the error details.  There is a common set of
        // message types for APIs to use.
        details?: any[],        
        // The status code, which should be an enum value of google.rpc.Code.
        code?: number,
    }
    
    interface ExecutionStageState {
        // The name of the execution stage.
        executionStageName?: string,
        // The time at which the stage transitioned to this state.
        currentStateTime?: string,
        // Executions stage states allow the same set of values as JobState.
        executionStageState?: string,
    }
    
    interface StreamLocation {
        // The stream is a custom source.
        customSourceLocation?: CustomSourceLocation,
        // The stream is a streaming side input.
        sideInputLocation?: StreamingSideInputLocation,
        // The stream is a pubsub stream.
        pubsubLocation?: PubsubLocation,
        // The stream is part of another computation within the current
        // streaming Dataflow job.
        streamingStageLocation?: StreamingStageLocation,
    }
    
    interface SendWorkerMessagesResponse {
        // The servers response to the worker messages.
        workerMessageResponses?: WorkerMessageResponse[],        
    }
    
    interface StreamingComputationConfig {
        // Unique identifier for this computation.
        computationId?: string,
        // Stage name of this computation.
        stageName?: string,
        // System defined name for this computation.
        systemName?: string,
        // Instructions that comprise the computation.
        instructions?: ParallelInstruction[],        
    }
    
    interface TransformSummary {
        // Transform-specific display data.
        displayData?: DisplayData[],        
        // User  names for all collection outputs to this transform.
        outputCollectionName?: string[],        
        // Type of transform.
        kind?: string,
        // User names for all collection inputs to this transform.
        inputCollectionName?: string[],        
        // User provided name for this transform instance.
        name?: string,
        // SDK generated id of this transform instance.
        id?: string,
    }
    
    interface LeaseWorkItemResponse {
        // A list of the leased WorkItems.
        workItems?: WorkItem[],        
    }
    
    interface LaunchTemplateParameters {
        // The runtime parameters to pass to the job.
        parameters?: any,
        // Required. The job name to use for the created job.
        jobName?: string,
        // The runtime environment for the job.
        environment?: RuntimeEnvironment,
    }
    
    interface Sink {
        // The codec to use to encode data written to the sink.
        codec?: any,
        // The sink to write to, plus its parameters.
        spec?: any,
    }
    
    interface FlattenInstruction {
        // Describes the inputs to the flatten instruction.
        inputs?: InstructionInput[],        
    }
    
    interface PartialGroupByKeyInstruction {
        // The codec to use for interpreting an element in the input PTable.
        inputElementCodec?: any,
        // The value combining function to invoke.
        valueCombiningFn?: any,
        // If this instruction includes a combining function this is the name of the
        // intermediate store between the GBK and the CombineValues.
        originalCombineValuesInputStoreName?: string,
        // Zero or more side inputs.
        sideInputs?: SideInputInfo[],        
        // If this instruction includes a combining function, this is the name of the
        // CombineValues instruction lifted into this instruction.
        originalCombineValuesStepName?: string,
        // Describes the input to the partial group-by-key instruction.
        input?: InstructionInput,
    }
    
    interface StageSource {
        // Size of the source, if measurable.
        sizeBytes?: string,
        // Dataflow service generated name for this source.
        name?: string,
        // Human-readable name for this source; may be user or system generated.
        userName?: string,
        // User name for the original user transform or collection with which this
        // source is most closely associated.
        originalTransformOrCollection?: string,
    }
    
    interface InstructionInput {
        // The index (origin zero) of the parallel instruction that produces
        // the output to be consumed by this input.  This index is relative
        // to the list of instructions in this input's instruction's
        // containing MapTask.
        producerInstructionIndex?: number,
        // The output index (origin zero) within the producer.
        outputNum?: number,
    }
    
    interface StringList {
        // Elements of the list.
        elements?: string[],        
    }
    
    interface DisplayData {
        // Contains value if the data is of string type.
        strValue?: string,
        // Contains value if the data is of duration type.
        durationValue?: string,
        // Contains value if the data is of int64 type.
        int64Value?: string,
        // The namespace for the key. This is usually a class name or programming
        // language namespace (i.e. python module) which defines the display data.
        // This allows a dax monitoring system to specially handle the data
        // and perform custom rendering.
        namespace?: string,
        // Contains value if the data is of float type.
        floatValue?: number,
        // The key identifying the display data.
        // This is intended to be used as a label for the display data
        // when viewed in a dax monitoring system.
        key?: string,
        // A possible additional shorter value to display.
        // For example a java_class_name_value of com.mypackage.MyDoFn
        // will be stored with MyDoFn as the short_str_value and
        // com.mypackage.MyDoFn as the java_class_name value.
        // short_str_value can be displayed and java_class_name_value
        // will be displayed as a tooltip.
        shortStrValue?: string,
        // An optional full URL.
        url?: string,
        // An optional label to display in a dax UI for the element.
        label?: string,
        // Contains value if the data is of timestamp type.
        timestampValue?: string,
        // Contains value if the data is of java class type.
        javaClassValue?: string,
        // Contains value if the data is of a boolean type.
        boolValue?: boolean,
    }
    
    interface GetDebugConfigRequest {
        // The location which contains the job specified by job_id.
        location?: string,
        // The internal component id for which debug configuration is
        // requested.
        componentId?: string,
        // The worker id, i.e., VM hostname.
        workerId?: string,
    }
    
    interface LeaseWorkItemRequest {
        // The current timestamp at the worker.
        currentWorkerTime?: string,
        // The location which contains the WorkItem's job.
        location?: string,
        // Filter for WorkItem type.
        workItemTypes?: string[],        
        // Worker capabilities. WorkItems might be limited to workers with specific
        // capabilities.
        workerCapabilities?: string[],        
        // Identifies the worker leasing work -- typically the ID of the
        // virtual machine running the worker.
        workerId?: string,
        // The initial lease period.
        requestedLeaseDuration?: string,
    }
    
    interface GetTemplateResponse {
        // The status of the get template request. Any problems with the
        // request will be indicated in the error_details.
        status?: Status,
        // The template metadata describing the template name, available
        // parameters, etc.
        metadata?: TemplateMetadata,
    }
    
    interface Parameter {
        // Key or name for this parameter.
        key?: string,
        // Value for this parameter.
        value?: any,
    }
    
    interface ReportWorkItemStatusRequest {
        // The order is unimportant, except that the order of the
        // WorkItemServiceState messages in the ReportWorkItemStatusResponse
        // corresponds to the order of WorkItemStatus messages here.
        workItemStatuses?: WorkItemStatus[],        
        // The current timestamp at the worker.
        currentWorkerTime?: string,
        // The ID of the worker reporting the WorkItem status.  If this
        // does not match the ID of the worker which the Dataflow service
        // believes currently has the lease on the WorkItem, the report
        // will be dropped (with an error response).
        workerId?: string,
        // The location which contains the WorkItem's job.
        location?: string,
    }
    
    interface PipelineDescription {
        // Pipeline level display data.
        displayData?: DisplayData[],        
        // Description of each stage of execution of the pipeline.
        executionPipelineStage?: ExecutionStageSummary[],        
        // Description of each transform in the pipeline and collections between them.
        originalPipelineTransform?: TransformSummary[],        
    }
    
    interface StreamingConfigTask {
        // Set of computation configuration information.
        streamingComputationConfigs?: StreamingComputationConfig[],        
        // If present, the worker must use this endpoint to communicate with Windmill
        // Service dispatchers, otherwise the worker must continue to use whatever
        // endpoint it had been using.
        windmillServiceEndpoint?: string,
        // Map from user step names to state families.
        userStepToStateFamilyNameMap?: any,
        // If present, the worker must use this port to communicate with Windmill
        // Service dispatchers. Only applicable when windmill_service_endpoint is
        // specified.
        windmillServicePort?: string,
    }
    
    interface JobExecutionInfo {
        // A mapping from each stage to the information about that stage.
        stages?: any,
    }
    
    interface Step {
        // The name that identifies the step. This must be unique for each
        // step with respect to all other steps in the Cloud Dataflow job.
        name?: string,
        // The kind of step in the Cloud Dataflow job.
        kind?: string,
        // Named properties associated with the step. Each kind of
        // predefined step has its own required set of properties.
        // Must be provided on Create.  Only retrieved with JOB_VIEW_ALL.
        properties?: any,
    }
    
    interface FailedLocation {
        // The name of the failed location.
        name?: string,
    }
    
    interface Disk {
        // Disk storage type, as defined by Google Compute Engine.  This
        // must be a disk type appropriate to the project and zone in which
        // the workers will run.  If unknown or unspecified, the service
        // will attempt to choose a reasonable default.
        // 
        // For example, the standard persistent disk type is a resource name
        // typically ending in "pd-standard".  If SSD persistent disks are
        // available, the resource name typically ends with "pd-ssd".  The
        // actual valid values are defined the Google Compute Engine API,
        // not by the Cloud Dataflow API; consult the Google Compute Engine
        // documentation for more information about determining the set of
        // available disk types for a particular project and zone.
        // 
        // Google Compute Engine Disk types are local to a particular
        // project in a particular zone, and so the resource name will
        // typically look something like this:
        // 
        // compute.googleapis.com/projects/project-id/zones/zone/diskTypes/pd-standard
        diskType?: string,
        // Size of disk in GB.  If zero or unspecified, the service will
        // attempt to choose a reasonable default.
        sizeGb?: number,
        // Directory in a VM where disk is mounted.
        mountPoint?: string,
    }
    
    interface CounterMetadata {
        // Human-readable description of the counter semantics.
        description?: string,
        // Counter aggregation kind.
        kind?: string,
        // System defined Units, see above enum.
        standardUnits?: string,
        // A string referring to the unit type.
        otherUnits?: string,
    }
    
    interface ListJobMessagesResponse {
        // Autoscaling events in ascending timestamp order.
        autoscalingEvents?: AutoscalingEvent[],        
        // Messages in ascending timestamp order.
        jobMessages?: JobMessage[],        
        // The token to obtain the next page of results if there are more.
        nextPageToken?: string,
    }
    
    interface ApproximateReportedProgress {
        // Completion as fraction of the input consumed, from 0.0 (beginning, nothing
        // consumed), to 1.0 (end of the input, entire input consumed).
        fractionConsumed?: number,
        // Total amount of parallelism in the portion of input of this task that has
        // already been consumed and is no longer active. In the first two examples
        // above (see remaining_parallelism), the value should be 29 or 2
        // respectively.  The sum of remaining_parallelism and consumed_parallelism
        // should equal the total amount of parallelism in this work item.  If
        // specified, must be finite.
        consumedParallelism?: ReportedParallelism,
        // Total amount of parallelism in the input of this task that remains,
        // (i.e. can be delegated to this task and any new tasks via dynamic
        // splitting). Always at least 1 for non-finished work items and 0 for
        // finished.
        // 
        // "Amount of parallelism" refers to how many non-empty parts of the input
        // can be read in parallel. This does not necessarily equal number
        // of records. An input that can be read in parallel down to the
        // individual records is called "perfectly splittable".
        // An example of non-perfectly parallelizable input is a block-compressed
        // file format where a block of records has to be read as a whole,
        // but different blocks can be read in parallel.
        // 
        // Examples:
        // * If we are processing record #30 (starting at 1) out of 50 in a perfectly
        //   splittable 50-record input, this value should be 21 (20 remaining + 1
        //   current).
        // * If we are reading through block 3 in a block-compressed file consisting
        //   of 5 blocks, this value should be 3 (since blocks 4 and 5 can be
        //   processed in parallel by new tasks via dynamic splitting and the current
        //   task remains processing block 3).
        // * If we are reading through the last block in a block-compressed file,
        //   or reading or processing the last record in a perfectly splittable
        //   input, this value should be 1, because apart from the current task, no
        //   additional remainder can be split off.
        remainingParallelism?: ReportedParallelism,
        // A Position within the work to represent a progress.
        position?: Position,
    }
    
    interface IntegerList {
        // Elements of the list.
        elements?: SplitInt64[],        
    }
    
    interface StateFamilyConfig {
        // The state family value.
        stateFamily?: string,
        // If true, this family corresponds to a read operation.
        isRead?: boolean,
    }
    
    interface ResourceUtilizationReportResponse {
    }
    
    interface SourceSplitResponse {
        // Indicates whether splitting happened and produced a list of bundles.
        // If this is USE_CURRENT_SOURCE_AS_IS, the current source should
        // be processed "as is" without splitting. "bundles" is ignored in this case.
        // If this is SPLITTING_HAPPENED, then "bundles" contains a list of
        // bundles into which the source was split.
        outcome?: string,
        // If outcome is SPLITTING_HAPPENED, then this is a list of bundles
        // into which the source was split. Otherwise this field is ignored.
        // This list can be empty, which means the source represents an empty input.
        bundles?: DerivedSource[],        
        // DEPRECATED in favor of bundles.
        shards?: SourceSplitShard[],        
    }
    
    interface ParallelInstruction {
        // Additional information for ParDo instructions.
        parDo?: ParDoInstruction,
        // Additional information for Read instructions.
        read?: ReadInstruction,
        // Additional information for Flatten instructions.
        flatten?: FlattenInstruction,
        // System-defined name for the operation in the original workflow graph.
        originalName?: string,
        // System-defined name of this operation.
        // Unique across the workflow.
        systemName?: string,
        // Additional information for Write instructions.
        write?: WriteInstruction,
        // Additional information for PartialGroupByKey instructions.
        partialGroupByKey?: PartialGroupByKeyInstruction,
        // Describes the outputs of the instruction.
        outputs?: InstructionOutput[],        
        // User-provided name of this operation.
        name?: string,
    }
    
    interface Package {
        // The resource to read the package from. The supported resource type is:
        // 
        // Google Cloud Storage:
        // 
        //   storage.googleapis.com/{bucket}
        //   bucket.storage.googleapis.com/
        location?: string,
        // The name of the package.
        name?: string,
    }
    
    interface KeyRangeDataDiskAssignment {
        // The end (exclusive) of the key range.
        end?: string,
        // The name of the data disk where data for this range is stored.
        // This name is local to the Google Cloud Platform project and uniquely
        // identifies the disk within that project, for example
        // "myproject-1014-104817-4c2-harness-0-disk-1".
        dataDisk?: string,
        // The start (inclusive) of the key range.
        start?: string,
    }
    
    interface ParDoInstruction {
        // Zero or more side inputs.
        sideInputs?: SideInputInfo[],        
        // Information about each of the outputs, if user_fn is a  MultiDoFn.
        multiOutputInfos?: MultiOutputInfo[],        
        // The user function to invoke.
        userFn?: any,
        // The input.
        input?: InstructionInput,
        // The number of outputs.
        numOutputs?: number,
    }
    
    interface CounterStructuredName {
        // A string containing a more specific namespace of the counter's origin.
        originNamespace?: string,
        // One of the standard Origins defined above.
        origin?: string,
        // Counter name. Not necessarily globally-unique, but unique within the
        // context of the other fields.
        // Required.
        name?: string,
        // Name of the stage. An execution step contains multiple component steps.
        executionStepName?: string,
        // Name of the optimized step being executed by the workers.
        componentStepName?: string,
        // Portion of this counter, either key or value.
        portion?: string,
        // System generated name of the original step in the user's graph, before
        // optimization.
        originalStepName?: string,
        // ID of a particular worker.
        workerId?: string,
    }
    
    interface MetricUpdate {
        // Timestamp associated with the metric value. Optional when workers are
        // reporting work progress; it will be filled in responses from the
        // metrics API.
        updateTime?: string,
        // Name of the metric.
        name?: MetricStructuredName,
        // A struct value describing properties of a distribution of numeric values.
        distribution?: any,
        // Worker-computed aggregate value for the "Set" aggregation kind.  The only
        // possible value type is a list of Values whose type can be Long, Double,
        // or String, according to the metric's type.  All Values in the list must
        // be of the same type.
        set?: any,
        // Worker-computed aggregate value for internal use by the Dataflow
        // service.
        internal?: any,
        // True if this metric is reported as the total cumulative aggregate
        // value accumulated since the worker started working on this WorkItem.
        // By default this is false, indicating that this metric is reported
        // as a delta that is not associated with any WorkItem.
        cumulative?: boolean,
        // Metric aggregation kind.  The possible metric aggregation kinds are
        // "Sum", "Max", "Min", "Mean", "Set", "And", "Or", and "Distribution".
        // The specified aggregation kind is case-insensitive.
        // 
        // If omitted, this is not an aggregated value but instead
        // a single metric sample value.
        kind?: string,
        // Worker-computed aggregate value for aggregation kinds "Sum", "Max", "Min",
        // "And", and "Or".  The possible value types are Long, Double, and Boolean.
        scalar?: any,
        // Worker-computed aggregate value for the "Mean" aggregation kind.
        // This holds the count of the aggregated values and is used in combination
        // with mean_sum above to obtain the actual mean aggregate value.
        // The only possible value type is Long.
        meanCount?: any,
        // Worker-computed aggregate value for the "Mean" aggregation kind.
        // This holds the sum of the aggregated values and is used in combination
        // with mean_count below to obtain the actual mean aggregate value.
        // The only possible value types are Long and Double.
        meanSum?: any,
    }
    
    interface ApproximateProgress {
        // Obsolete.
        percentComplete?: number,
        // Obsolete.
        remainingTime?: string,
        // Obsolete.
        position?: Position,
    }
    
    interface WorkerMessageResponse {
        // Service's response to reporting worker metrics (currently empty).
        workerMetricsResponse?: ResourceUtilizationReportResponse,
        // The service's response to a worker's health report.
        workerHealthReportResponse?: WorkerHealthReportResponse,
    }
    
    interface TemplateMetadata {
        // The parameters for the template.
        parameters?: ParameterMetadata[],        
        // Required. The name of the template.
        name?: string,
        // Optional. A description of the template.
        description?: string,
    }
    
    interface WorkerMessage {
        // The timestamp of the worker_message.
        time?: string,
        // The health of a worker.
        workerHealthReport?: WorkerHealthReport,
        // Resource metrics reported by workers.
        workerMetrics?: ResourceUtilizationReport,
        // A worker message code.
        workerMessageCode?: WorkerMessageCode,
        // Labels are used to group WorkerMessages.
        // For example, a worker_message about a particular container
        // might have the labels:
        // { "JOB_ID": "2015-04-22",
        //   "WORKER_ID": "wordcount-vm-2015…"
        //   "CONTAINER_TYPE": "worker",
        //   "CONTAINER_ID": "ac1234def"}
        // Label tags typically correspond to Label enum values. However, for ease
        // of development other strings can be used as tags. LABEL_UNSPECIFIED should
        // not be used here.
        labels?: any,
    }
    
    interface JobMetrics {
        // All metrics for this job.
        metrics?: MetricUpdate[],        
        // Timestamp as of which metric values are current.
        metricTime?: string,
    }
    
    interface FloatingPointList {
        // Elements of the list.
        elements?: number[],        
    }
    
    interface TemplatesResource {
        // Launch a template.
        launch (request: {        
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
            // If true, the request is validated but not actually executed.
            // Defaults to false.
            validateOnly?: boolean,
            // Required. The ID of the Cloud Platform project that the job belongs to.
            projectId: string,
            // Required. A Cloud Storage path to the template from which to create
            // the job.
            // Must be valid Cloud Storage URL, beginning with 'gs://'.
            gcsPath?: string,
            // The location to which to direct the request.
            location: string,
        }) : gapi.client.Request<LaunchTemplateResponse>;        
        
        // Get the template associated with a template.
        get (request: {        
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
            // The view to retrieve. Defaults to METADATA_ONLY.
            view?: string,
            // Required. The ID of the Cloud Platform project that the job belongs to.
            projectId: string,
            // Required. A Cloud Storage path to the template from which to
            // create the job.
            // Must be a valid Cloud Storage URL, beginning with `gs://`.
            gcsPath?: string,
            // The location to which to direct the request.
            location: string,
        }) : gapi.client.Request<GetTemplateResponse>;        
        
        // Creates a Cloud Dataflow job from a template.
        create (request: {        
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
            // Required. The ID of the Cloud Platform project that the job belongs to.
            projectId: string,
            // The location to which to direct the request.
            location: string,
        }) : gapi.client.Request<Job>;        
        
    }
    
    
    interface WorkItemsResource {
        // Reports the status of dataflow WorkItems leased by a worker.
        reportStatus (request: {        
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
            // The location which contains the WorkItem's job.
            location: string,
            // The job which the WorkItem is part of.
            jobId: string,
            // The project which owns the WorkItem's job.
            projectId: string,
        }) : gapi.client.Request<ReportWorkItemStatusResponse>;        
        
        // Leases a dataflow WorkItem to run.
        lease (request: {        
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
            // The location which contains the WorkItem's job.
            location: string,
            // Identifies the workflow job this worker belongs to.
            jobId: string,
            // Identifies the project this worker belongs to.
            projectId: string,
        }) : gapi.client.Request<LeaseWorkItemResponse>;        
        
    }
    
    
    interface DebugResource {
        // Send encoded debug capture data for component.
        sendCapture (request: {        
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
            // The location which contains the job specified by job_id.
            location: string,
            // The job id.
            jobId: string,
            // The project id.
            projectId: string,
        }) : gapi.client.Request<SendDebugCaptureResponse>;        
        
        // Get encoded debug configuration for component. Not cacheable.
        getConfig (request: {        
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
            // The location which contains the job specified by job_id.
            location: string,
            // The job id.
            jobId: string,
            // The project id.
            projectId: string,
        }) : gapi.client.Request<GetDebugConfigResponse>;        
        
    }
    
    
    interface MessagesResource {
        // Request the job status.
        list (request: {        
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
            // The job to get messages about.
            jobId: string,
            // A project id.
            projectId: string,
            // Return only messages with timestamps < end_time. The default is now
            // (i.e. return up to the latest messages available).
            endTime?: string,
            // The location which contains the job specified by job_id.
            location: string,
            // If supplied, this should be the value of next_page_token returned
            // by an earlier call. This will cause the next page of results to
            // be returned.
            pageToken?: string,
            // If specified, return only messages with timestamps >= start_time.
            // The default is the job creation time (i.e. beginning of messages).
            startTime?: string,
            // If specified, determines the maximum number of messages to
            // return.  If unspecified, the service may choose an appropriate
            // default, or may return an arbitrarily large number of results.
            pageSize?: number,
            // Filter to only get messages with importance >= level
            minimumImportance?: string,
        }) : gapi.client.Request<ListJobMessagesResponse>;        
        
    }
    
    
    interface JobsResource {
        // Request the job status.
        getMetrics (request: {        
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
            // The location which contains the job specified by job_id.
            location: string,
            // Return only metric data that has changed since this time.
            // Default is to return all information about all metrics for the job.
            startTime?: string,
            // The job to get messages for.
            jobId: string,
            // A project id.
            projectId: string,
        }) : gapi.client.Request<JobMetrics>;        
        
        // List the jobs of a project.
        list (request: {        
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
            // If there are many jobs, limit response to at most this many.
            // The actual number of jobs returned will be the lesser of max_responses
            // and an unspecified server-defined limit.
            pageSize?: number,
            // Level of information requested in response. Default is `JOB_VIEW_SUMMARY`.
            view?: string,
            // The project which owns the jobs.
            projectId: string,
            // The kind of filter to use.
            filter?: string,
            // The location that contains this job.
            location: string,
            // Set this to the 'next_page_token' field of a previous response
            // to request additional results in a long list.
            pageToken?: string,
        }) : gapi.client.Request<ListJobsResponse>;        
        
        // Gets the state of the specified Cloud Dataflow job.
        get (request: {        
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
            // The location that contains this job.
            location: string,
            // The level of information requested in response.
            view?: string,
            // The job ID.
            jobId: string,
            // The ID of the Cloud Platform project that the job belongs to.
            projectId: string,
        }) : gapi.client.Request<Job>;        
        
        // Updates the state of an existing Cloud Dataflow job.
        update (request: {        
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
            // The job ID.
            jobId: string,
            // The ID of the Cloud Platform project that the job belongs to.
            projectId: string,
            // The location that contains this job.
            location: string,
        }) : gapi.client.Request<Job>;        
        
        // Creates a Cloud Dataflow job.
        create (request: {        
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
            // The location that contains this job.
            location: string,
            // Deprecated. This field is now in the Job message.
            replaceJobId?: string,
            // The level of information requested in response.
            view?: string,
            // The ID of the Cloud Platform project that the job belongs to.
            projectId: string,
        }) : gapi.client.Request<Job>;        
        
        workItems: WorkItemsResource,
        debug: DebugResource,
        messages: MessagesResource,
    }
    
    
    interface LocationsResource {
        // Send a worker_message to the service.
        workerMessages (request: {        
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
            // The project to send the WorkerMessages to.
            projectId: string,
            // The location which contains the job
            location: string,
        }) : gapi.client.Request<SendWorkerMessagesResponse>;        
        
        templates: TemplatesResource,
        jobs: JobsResource,
    }
    
    
    interface TemplatesResource {
        // Creates a Cloud Dataflow job from a template.
        create (request: {        
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
            // Required. The ID of the Cloud Platform project that the job belongs to.
            projectId: string,
        }) : gapi.client.Request<Job>;        
        
        // Launch a template.
        launch (request: {        
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
            // Required. A Cloud Storage path to the template from which to create
            // the job.
            // Must be valid Cloud Storage URL, beginning with 'gs://'.
            gcsPath?: string,
            // The location to which to direct the request.
            location?: string,
            // If true, the request is validated but not actually executed.
            // Defaults to false.
            validateOnly?: boolean,
            // Required. The ID of the Cloud Platform project that the job belongs to.
            projectId: string,
        }) : gapi.client.Request<LaunchTemplateResponse>;        
        
        // Get the template associated with a template.
        get (request: {        
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
            // The view to retrieve. Defaults to METADATA_ONLY.
            view?: string,
            // Required. The ID of the Cloud Platform project that the job belongs to.
            projectId: string,
            // Required. A Cloud Storage path to the template from which to
            // create the job.
            // Must be a valid Cloud Storage URL, beginning with `gs://`.
            gcsPath?: string,
            // The location to which to direct the request.
            location?: string,
        }) : gapi.client.Request<GetTemplateResponse>;        
        
    }
    
    
    interface WorkItemsResource {
        // Reports the status of dataflow WorkItems leased by a worker.
        reportStatus (request: {        
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
            // The job which the WorkItem is part of.
            jobId: string,
            // The project which owns the WorkItem's job.
            projectId: string,
        }) : gapi.client.Request<ReportWorkItemStatusResponse>;        
        
        // Leases a dataflow WorkItem to run.
        lease (request: {        
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
            // Identifies the workflow job this worker belongs to.
            jobId: string,
            // Identifies the project this worker belongs to.
            projectId: string,
        }) : gapi.client.Request<LeaseWorkItemResponse>;        
        
    }
    
    
    interface DebugResource {
        // Send encoded debug capture data for component.
        sendCapture (request: {        
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
            // The job id.
            jobId: string,
            // The project id.
            projectId: string,
        }) : gapi.client.Request<SendDebugCaptureResponse>;        
        
        // Get encoded debug configuration for component. Not cacheable.
        getConfig (request: {        
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
            // The job id.
            jobId: string,
            // The project id.
            projectId: string,
        }) : gapi.client.Request<GetDebugConfigResponse>;        
        
    }
    
    
    interface MessagesResource {
        // Request the job status.
        list (request: {        
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
            // A project id.
            projectId: string,
            // The job to get messages about.
            jobId: string,
            // The location which contains the job specified by job_id.
            location?: string,
            // Return only messages with timestamps < end_time. The default is now
            // (i.e. return up to the latest messages available).
            endTime?: string,
            // If specified, return only messages with timestamps >= start_time.
            // The default is the job creation time (i.e. beginning of messages).
            startTime?: string,
            // If supplied, this should be the value of next_page_token returned
            // by an earlier call. This will cause the next page of results to
            // be returned.
            pageToken?: string,
            // If specified, determines the maximum number of messages to
            // return.  If unspecified, the service may choose an appropriate
            // default, or may return an arbitrarily large number of results.
            pageSize?: number,
            // Filter to only get messages with importance >= level
            minimumImportance?: string,
        }) : gapi.client.Request<ListJobMessagesResponse>;        
        
    }
    
    
    interface JobsResource {
        // Creates a Cloud Dataflow job.
        create (request: {        
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
            // The location that contains this job.
            location?: string,
            // Deprecated. This field is now in the Job message.
            replaceJobId?: string,
            // The level of information requested in response.
            view?: string,
            // The ID of the Cloud Platform project that the job belongs to.
            projectId: string,
        }) : gapi.client.Request<Job>;        
        
        // Request the job status.
        getMetrics (request: {        
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
            // The job to get messages for.
            jobId: string,
            // A project id.
            projectId: string,
            // The location which contains the job specified by job_id.
            location?: string,
            // Return only metric data that has changed since this time.
            // Default is to return all information about all metrics for the job.
            startTime?: string,
        }) : gapi.client.Request<JobMetrics>;        
        
        // List the jobs of a project.
        list (request: {        
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
            // The kind of filter to use.
            filter?: string,
            // The location that contains this job.
            location?: string,
            // Set this to the 'next_page_token' field of a previous response
            // to request additional results in a long list.
            pageToken?: string,
            // If there are many jobs, limit response to at most this many.
            // The actual number of jobs returned will be the lesser of max_responses
            // and an unspecified server-defined limit.
            pageSize?: number,
            // Level of information requested in response. Default is `JOB_VIEW_SUMMARY`.
            view?: string,
            // The project which owns the jobs.
            projectId: string,
        }) : gapi.client.Request<ListJobsResponse>;        
        
        // Gets the state of the specified Cloud Dataflow job.
        get (request: {        
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
            // The level of information requested in response.
            view?: string,
            // The job ID.
            jobId: string,
            // The ID of the Cloud Platform project that the job belongs to.
            projectId: string,
            // The location that contains this job.
            location?: string,
        }) : gapi.client.Request<Job>;        
        
        // Updates the state of an existing Cloud Dataflow job.
        update (request: {        
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
            // The job ID.
            jobId: string,
            // The ID of the Cloud Platform project that the job belongs to.
            projectId: string,
            // The location that contains this job.
            location?: string,
        }) : gapi.client.Request<Job>;        
        
        workItems: WorkItemsResource,
        debug: DebugResource,
        messages: MessagesResource,
    }
    
    
    interface ProjectsResource {
        // Send a worker_message to the service.
        workerMessages (request: {        
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
            // The project to send the WorkerMessages to.
            projectId: string,
        }) : gapi.client.Request<SendWorkerMessagesResponse>;        
        
        locations: LocationsResource,
        templates: TemplatesResource,
        jobs: JobsResource,
    }
    
}

declare module gapi.client.dataflow {
    var projects: gapi.client.dataflow.ProjectsResource; 
    
}
