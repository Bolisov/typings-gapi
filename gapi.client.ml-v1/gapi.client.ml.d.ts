// Type definitions for Google Google Cloud Machine Learning Engine v1
// Project: https://cloud.google.com/ml/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.ml {
    
    interface GoogleCloudMlV1__ListVersionsResponse {
        // Optional. Pass this token as the `page_token` field of the request for a
        // subsequent call.
        nextPageToken?: string,
        // The list of versions.
        versions?: GoogleCloudMlV1__Version[],        
    }
    
    interface GoogleCloudMlV1__CancelJobRequest {
    }
    
    interface GoogleIamV1__TestIamPermissionsRequest {
        // The set of permissions to check for the `resource`. Permissions with
        // wildcards (such as '*' or 'storage.*') are not allowed. For more
        // information see
        // [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
        permissions?: string[],        
    }
    
    interface GoogleCloudMlV1beta1__ManualScaling {
        // The number of nodes to allocate for this model. These nodes are always up,
        // starting from the time the model is deployed, so the cost of operating
        // this model will be proportional to `nodes` * number of hours since
        // last billing cycle plus the cost for each prediction performed.
        nodes?: number,
    }
    
    interface GoogleIamV1__LogConfig {
        // Counter options.
        counter?: GoogleIamV1_LogConfig_CounterOptions,
        // Data access options.
        dataAccess?: GoogleIamV1_LogConfig_DataAccessOptions,
        // Cloud audit options.
        cloudAudit?: GoogleIamV1_LogConfig_CloudAuditOptions,
    }
    
    interface GoogleCloudMlV1__AutoScaling {
        // Optional. The minimum number of nodes to allocate for this model. These
        // nodes are always up, starting from the time the model is deployed, so the
        // cost of operating this model will be at least
        // `rate` * `min_nodes` * number of hours since last billing cycle,
        // where `rate` is the cost per node-hour as documented in
        // [pricing](https://cloud.google.com/ml-engine/pricing#prediction_pricing),
        // even if no predictions are performed. There is additional cost for each
        // prediction performed.
        // 
        // Unlike manual scaling, if the load gets too heavy for the nodes
        // that are up, the service will automatically add nodes to handle the
        // increased load as well as scale back as traffic drops, always maintaining
        // at least `min_nodes`. You will be charged for the time in which additional
        // nodes are used.
        // 
        // If not specified, `min_nodes` defaults to 0, in which case, when traffic
        // to a model stops (and after a cool-down period), nodes will be shut down
        // and no charges will be incurred until traffic to the model resumes.
        minNodes?: number,
    }
    
    interface GoogleRpc__Status {
        // The status code, which should be an enum value of google.rpc.Code.
        code?: number,
        // A developer-facing error message, which should be in English. Any
        // user-facing error message should be localized and sent in the
        // google.rpc.Status.details field, or localized by the client.
        message?: string,
        // A list of messages that carry the error details.  There is a common set of
        // message types for APIs to use.
        details?: any[],        
    }
    
    interface GoogleCloudMlV1__TrainingInput {
        // Optional. The number of parameter server replicas to use for the training
        // job. Each replica in the cluster will be of the type specified in
        // `parameter_server_type`.
        // 
        // This value can only be used when `scale_tier` is set to `CUSTOM`.If you
        // set this value, you must also set `parameter_server_type`.
        parameterServerCount?: string,
        // Required. The Google Cloud Storage location of the packages with
        // the training program and any additional dependencies.
        // The maximum number of package URIs is 100.
        packageUris?: string[],        
        // Optional. The number of worker replicas to use for the training job. Each
        // replica in the cluster will be of the type specified in `worker_type`.
        // 
        // This value can only be used when `scale_tier` is set to `CUSTOM`. If you
        // set this value, you must also set `worker_type`.
        workerCount?: string,
        // Optional. Specifies the type of virtual machine to use for your training
        // job's master worker.
        // 
        // The following types are supported:
        // 
        // <dl>
        //   <dt>standard</dt>
        //   <dd>
        //   A basic machine configuration suitable for training simple models with
        //   small to moderate datasets.
        //   </dd>
        //   <dt>large_model</dt>
        //   <dd>
        //   A machine with a lot of memory, specially suited for parameter servers
        //   when your model is large (having many hidden layers or layers with very
        //   large numbers of nodes).
        //   </dd>
        //   <dt>complex_model_s</dt>
        //   <dd>
        //   A machine suitable for the master and workers of the cluster when your
        //   model requires more computation than the standard machine can handle
        //   satisfactorily.
        //   </dd>
        //   <dt>complex_model_m</dt>
        //   <dd>
        //   A machine with roughly twice the number of cores and roughly double the
        //   memory of <code suppresswarning="true">complex_model_s</code>.
        //   </dd>
        //   <dt>complex_model_l</dt>
        //   <dd>
        //   A machine with roughly twice the number of cores and roughly double the
        //   memory of <code suppresswarning="true">complex_model_m</code>.
        //   </dd>
        //   <dt>standard_gpu</dt>
        //   <dd>
        //   A machine equivalent to <code suppresswarning="true">standard</code> that
        //   also includes a
        //   <a href="/ml-engine/docs/how-tos/using-gpus">
        //   GPU that you can use in your trainer</a>.
        //   </dd>
        //   <dt>complex_model_m_gpu</dt>
        //   <dd>
        //   A machine equivalent to
        //   <code suppresswarning="true">complex_model_m</code> that also includes
        //   four GPUs.
        //   </dd>
        // </dl>
        // 
        // You must set this value when `scaleTier` is set to `CUSTOM`.
        masterType?: string,
        // Optional. The Google Cloud ML runtime version to use for training.  If not
        // set, Google Cloud ML will choose the latest stable version.
        runtimeVersion?: string,
        // Required. The Python module name to run after installing the packages.
        pythonModule?: string,
        // Optional. Specifies the type of virtual machine to use for your training
        // job's worker nodes.
        // 
        // The supported values are the same as those described in the entry for
        // `masterType`.
        // 
        // This value must be present when `scaleTier` is set to `CUSTOM` and
        // `workerCount` is greater than zero.
        workerType?: string,
        // Optional. Command line arguments to pass to the program.
        args?: string[],        
        // Required. The Google Compute Engine region to run the training job in.
        region?: string,
        // Optional. Specifies the type of virtual machine to use for your training
        // job's parameter server.
        // 
        // The supported values are the same as those described in the entry for
        // `master_type`.
        // 
        // This value must be present when `scaleTier` is set to `CUSTOM` and
        // `parameter_server_count` is greater than zero.
        parameterServerType?: string,
        // Required. Specifies the machine types, the number of replicas for workers
        // and parameter servers.
        scaleTier?: string,
        // Optional. A Google Cloud Storage path in which to store training outputs
        // and other data needed for training. This path is passed to your TensorFlow
        // program as the 'job_dir' command-line argument. The benefit of specifying
        // this field is that Cloud ML validates the path for use in training.
        jobDir?: string,
        // Optional. The set of Hyperparameters to tune.
        hyperparameters?: GoogleCloudMlV1__HyperparameterSpec,
    }
    
    interface GoogleCloudMlV1__ListModelsResponse {
        // Optional. Pass this token as the `page_token` field of the request for a
        // subsequent call.
        nextPageToken?: string,
        // The list of models.
        models?: GoogleCloudMlV1__Model[],        
    }
    
    interface GoogleCloudMlV1__Job {
        // Required. The user-specified id of the job.
        jobId?: string,
        // Output only. The details of a failure or a cancellation.
        errorMessage?: string,
        // Output only. When the job processing was completed.
        endTime?: string,
        // Output only. When the job processing was started.
        startTime?: string,
        // The current prediction job result.
        predictionOutput?: GoogleCloudMlV1__PredictionOutput,
        // The current training job result.
        trainingOutput?: GoogleCloudMlV1__TrainingOutput,
        // Output only. When the job was created.
        createTime?: string,
        // Input parameters to create a training job.
        trainingInput?: GoogleCloudMlV1__TrainingInput,
        // Input parameters to create a prediction job.
        predictionInput?: GoogleCloudMlV1__PredictionInput,
        // Output only. The detailed state of a job.
        state?: string,
    }
    
    interface GoogleApi__HttpBody {
        // The HTTP Content-Type string representing the content type of the body.
        contentType?: string,
        // Application specific response metadata. Must be set in the first response
        // for streaming APIs.
        extensions?: any[],        
        // HTTP body binary data.
        data?: string,
    }
    
    interface GoogleCloudMlV1__GetConfigResponse {
        // The project number for `service_account`.
        serviceAccountProject?: string,
        // The service account Cloud ML uses to access resources in the project.
        serviceAccount?: string,
    }
    
    interface GoogleCloudMlV1beta1__Version {
        // Optional. The description specified for the version when it was created.
        description?: string,
        // Required. The Google Cloud Storage location of the trained model used to
        // create the version. See the
        // [overview of model
        // deployment](/ml-engine/docs/concepts/deployment-overview) for more
        // information.
        // 
        // When passing Version to
        // [projects.models.versions.create](/ml-engine/reference/rest/v1beta1/projects.models.versions/create)
        // the model service uses the specified location as the source of the model.
        // Once deployed, the model version is hosted by the prediction service, so
        // this location is useful only as a historical record.
        // The total number of model files can't exceed 1000.
        deploymentUri?: string,
        // Output only. If true, this version will be used to handle prediction
        // requests that do not specify a version.
        // 
        // You can change the default version by calling
        // [projects.methods.versions.setDefault](/ml-engine/reference/rest/v1beta1/projects.models.versions/setDefault).
        isDefault?: boolean,
        // Automatically scale the number of nodes used to serve the model in
        // response to increases and decreases in traffic. Care should be
        // taken to ramp up traffic according to the model's ability to scale
        // or you will start seeing increases in latency and 429 response codes.
        autoScaling?: GoogleCloudMlV1beta1__AutoScaling,
        // Output only. The time the version was created.
        createTime?: string,
        // Output only. The state of a version.
        state?: string,
        // Manually select the number of nodes to use for serving the
        // model. You should generally use `auto_scaling` with an appropriate
        // `min_nodes` instead, but this option is available if you want more
        // predictable billing. Beware that latency and error rates will increase
        // if the traffic exceeds that capability of the system to serve it based
        // on the selected number of nodes.
        manualScaling?: GoogleCloudMlV1beta1__ManualScaling,
        // Required.The name specified for the version when it was created.
        // 
        // The version name must be unique within the model it is created in.
        name?: string,
        // Output only. The details of a failure or a cancellation.
        errorMessage?: string,
        // Output only. The time the version was last used for prediction.
        lastUseTime?: string,
        // Optional. The Google Cloud ML runtime version to use for this deployment.
        // If not set, Google Cloud ML will choose a version.
        runtimeVersion?: string,
    }
    
    interface GoogleIamV1__TestIamPermissionsResponse {
        // A subset of `TestPermissionsRequest.permissions` that the caller is
        // allowed.
        permissions?: string[],        
    }
    
    interface GoogleIamV1__SetIamPolicyRequest {
        // REQUIRED: The complete policy to be applied to the `resource`. The size of
        // the policy is limited to a few 10s of KB. An empty policy is a
        // valid policy but certain Cloud Platform services (such as Projects)
        // might reject them.
        policy?: GoogleIamV1__Policy,
        // OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
        // the fields in the mask will be modified. If no mask is provided, the
        // following default mask is used:
        // paths: "bindings, etag"
        // This field is only used by Cloud IAM.
        updateMask?: string,
    }
    
    interface GoogleCloudMlV1__HyperparameterOutput {
        // All recorded object metrics for this trial.
        allMetrics?: GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric[],        
        // The final objective metric seen for this trial.
        finalMetric?: GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric,
        // The hyperparameters given to this trial.
        hyperparameters?: any,
        // The trial id for these results.
        trialId?: string,
    }
    
    interface GoogleCloudMlV1__PredictionOutput {
        // Node hours used by the batch prediction job.
        nodeHours?: number,
        // The output Google Cloud Storage location provided at the job creation time.
        outputPath?: string,
        // The number of generated predictions.
        predictionCount?: string,
        // The number of data instances which resulted in errors.
        errorCount?: string,
    }
    
    interface GoogleIamV1__Policy {
        // `etag` is used for optimistic concurrency control as a way to help
        // prevent simultaneous updates of a policy from overwriting each other.
        // It is strongly suggested that systems make use of the `etag` in the
        // read-modify-write cycle to perform policy updates in order to avoid race
        // conditions: An `etag` is returned in the response to `getIamPolicy`, and
        // systems are expected to put that etag in the request to `setIamPolicy` to
        // ensure that their change will be applied to the same version of the policy.
        // 
        // If no `etag` is provided in the call to `setIamPolicy`, then the existing
        // policy is overwritten blindly.
        etag?: string,
        // 
        iamOwned?: boolean,
        // If more than one rule is specified, the rules are applied in the following
        // manner:
        // - All matching LOG rules are always applied.
        // - If any DENY/DENY_WITH_LOG rule matches, permission is denied.
        //   Logging will be applied if one or more matching rule requires logging.
        // - Otherwise, if any ALLOW/ALLOW_WITH_LOG rule matches, permission is
        //   granted.
        //   Logging will be applied if one or more matching rule requires logging.
        // - Otherwise, if no rule applies, permission is denied.
        rules?: GoogleIamV1__Rule[],        
        // Version of the `Policy`. The default version is 0.
        version?: number,
        // Specifies cloud audit logging configuration for this policy.
        auditConfigs?: GoogleIamV1__AuditConfig[],        
        // Associates a list of `members` to a `role`.
        // `bindings` with no members will result in an error.
        bindings?: GoogleIamV1__Binding[],        
    }
    
    interface GoogleLongrunning__ListOperationsResponse {
        // The standard List next-page token.
        nextPageToken?: string,
        // A list of operations that matches the specified filter in the request.
        operations?: GoogleLongrunning__Operation[],        
    }
    
    interface GoogleIamV1__Condition {
        // DEPRECATED. Use 'values' instead.
        value?: string,
        // Trusted attributes supplied by any service that owns resources and uses
        // the IAM system for access control.
        sys?: string,
        // The objects of the condition. This is mutually exclusive with 'value'.
        values?: string[],        
        // Trusted attributes supplied by the IAM system.
        iam?: string,
        // An operator to apply the subject with.
        op?: string,
        // Trusted attributes discharged by the service.
        svc?: string,
    }
    
    interface GoogleCloudMlV1__ManualScaling {
        // The number of nodes to allocate for this model. These nodes are always up,
        // starting from the time the model is deployed, so the cost of operating
        // this model will be proportional to `nodes` * number of hours since
        // last billing cycle plus the cost for each prediction performed.
        nodes?: number,
    }
    
    interface GoogleCloudMlV1__TrainingOutput {
        // Whether this job is a hyperparameter tuning job.
        isHyperparameterTuningJob?: boolean,
        // The amount of ML units consumed by the job.
        consumedMLUnits?: number,
        // Results for individual Hyperparameter trials.
        // Only set for hyperparameter tuning jobs.
        trials?: GoogleCloudMlV1__HyperparameterOutput[],        
        // The number of hyperparameter tuning trials that completed successfully.
        // Only set for hyperparameter tuning jobs.
        completedTrialCount?: string,
    }
    
    interface GoogleIamV1__Binding {
        // The condition that is associated with this binding.
        // NOTE: an unsatisfied condition will not allow user access via current
        // binding. Different bindings, including their conditions, are examined
        // independently.
        // This field is GOOGLE_INTERNAL.
        condition?: GoogleType__Expr,
        // Specifies the identities requesting access for a Cloud Platform resource.
        // `members` can have the following values:
        // 
        // * `allUsers`: A special identifier that represents anyone who is
        //    on the internet; with or without a Google account.
        // 
        // * `allAuthenticatedUsers`: A special identifier that represents anyone
        //    who is authenticated with a Google account or a service account.
        // 
        // * `user:{emailid}`: An email address that represents a specific Google
        //    account. For example, `alice@gmail.com` or `joe@example.com`.
        // 
        // 
        // * `serviceAccount:{emailid}`: An email address that represents a service
        //    account. For example, `my-other-app@appspot.gserviceaccount.com`.
        // 
        // * `group:{emailid}`: An email address that represents a Google group.
        //    For example, `admins@example.com`.
        // 
        // 
        // * `domain:{domain}`: A Google Apps domain name that represents all the
        //    users of that domain. For example, `google.com` or `example.com`.
        // 
        // 
        members?: string[],        
        // Role that is assigned to `members`.
        // For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
        // Required
        role?: string,
    }
    
    interface GoogleIamV1__Rule {
        // The config returned to callers of tech.iam.IAM.CheckPolicy for any entries
        // that match the LOG action.
        logConfig?: GoogleIamV1__LogConfig[],        
        // If one or more 'in' clauses are specified, the rule matches if
        // the PRINCIPAL/AUTHORITY_SELECTOR is in at least one of these entries.
        in?: string[],        
        // A permission is a string of form '<service>.<resource type>.<verb>'
        // (e.g., 'storage.buckets.list'). A value of '*' matches all permissions,
        // and a verb part of '*' (e.g., 'storage.buckets.*') matches all verbs.
        permissions?: string[],        
        // Required
        action?: string,
        // If one or more 'not_in' clauses are specified, the rule matches
        // if the PRINCIPAL/AUTHORITY_SELECTOR is in none of the entries.
        // The format for in and not_in entries is the same as for members in a
        // Binding (see google/iam/v1/policy.proto).
        notIn?: string[],        
        // Human-readable description of the rule.
        description?: string,
        // Additional restrictions that must be met
        conditions?: GoogleIamV1__Condition[],        
    }
    
    interface GoogleCloudMlV1beta1__AutoScaling {
        // Optional. The minimum number of nodes to allocate for this model. These
        // nodes are always up, starting from the time the model is deployed, so the
        // cost of operating this model will be at least
        // `rate` * `min_nodes` * number of hours since last billing cycle,
        // where `rate` is the cost per node-hour as documented in
        // [pricing](https://cloud.google.com/ml-engine/pricing#prediction_pricing),
        // even if no predictions are performed. There is additional cost for each
        // prediction performed.
        // 
        // Unlike manual scaling, if the load gets too heavy for the nodes
        // that are up, the service will automatically add nodes to handle the
        // increased load as well as scale back as traffic drops, always maintaining
        // at least `min_nodes`. You will be charged for the time in which additional
        // nodes are used.
        // 
        // If not specified, `min_nodes` defaults to 0, in which case, when traffic
        // to a model stops (and after a cool-down period), nodes will be shut down
        // and no charges will be incurred until traffic to the model resumes.
        minNodes?: number,
    }
    
    interface GoogleIamV1_LogConfig_CounterOptions {
        // The field value to attribute.
        field?: string,
        // The metric to update.
        metric?: string,
    }
    
    interface GoogleCloudMlV1__PredictRequest {
        // 
        // Required. The prediction request body.
        httpBody?: GoogleApi__HttpBody,
    }
    
    interface GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric {
        // The global training step for this metric.
        trainingStep?: string,
        // The objective value at this training step.
        objectiveValue?: number,
    }
    
    interface GoogleIamV1_LogConfig_CloudAuditOptions {
        // The log_name to populate in the Cloud Audit Record.
        logName?: string,
        // True if the log is for a permission of type DATA_READ or ADMIN_READ.
        isReadPermissionType?: boolean,
    }
    
    interface GoogleCloudMlV1__Version {
        // Optional. The description specified for the version when it was created.
        description?: string,
        // Required. The Google Cloud Storage location of the trained model used to
        // create the version. See the
        // [overview of model
        // deployment](/ml-engine/docs/concepts/deployment-overview) for more
        // information.
        // 
        // When passing Version to
        // [projects.models.versions.create](/ml-engine/reference/rest/v1/projects.models.versions/create)
        // the model service uses the specified location as the source of the model.
        // Once deployed, the model version is hosted by the prediction service, so
        // this location is useful only as a historical record.
        // The total number of model files can't exceed 1000.
        deploymentUri?: string,
        // Output only. If true, this version will be used to handle prediction
        // requests that do not specify a version.
        // 
        // You can change the default version by calling
        // [projects.methods.versions.setDefault](/ml-engine/reference/rest/v1/projects.models.versions/setDefault).
        isDefault?: boolean,
        // Automatically scale the number of nodes used to serve the model in
        // response to increases and decreases in traffic. Care should be
        // taken to ramp up traffic according to the model's ability to scale
        // or you will start seeing increases in latency and 429 response codes.
        autoScaling?: GoogleCloudMlV1__AutoScaling,
        // Output only. The time the version was created.
        createTime?: string,
        // Manually select the number of nodes to use for serving the
        // model. You should generally use `auto_scaling` with an appropriate
        // `min_nodes` instead, but this option is available if you want more
        // predictable billing. Beware that latency and error rates will increase
        // if the traffic exceeds that capability of the system to serve it based
        // on the selected number of nodes.
        manualScaling?: GoogleCloudMlV1__ManualScaling,
        // Output only. The state of a version.
        state?: string,
        // Required.The name specified for the version when it was created.
        // 
        // The version name must be unique within the model it is created in.
        name?: string,
        // Output only. The details of a failure or a cancellation.
        errorMessage?: string,
        // Output only. The time the version was last used for prediction.
        lastUseTime?: string,
        // Optional. The Google Cloud ML runtime version to use for this deployment.
        // If not set, Google Cloud ML will choose a version.
        runtimeVersion?: string,
    }
    
    interface GoogleCloudMlV1__ParameterSpec {
        // Required if type is `DOUBLE` or `INTEGER`. This field
        // should be unset if type is `CATEGORICAL`. This value should be integers if
        // type is INTEGER.
        minValue?: number,
        // Required if type is `DISCRETE`.
        // A list of feasible points.
        // The list should be in strictly increasing order. For instance, this
        // parameter might have possible settings of 1.5, 2.5, and 4.0. This list
        // should not contain more than 1,000 values.
        discreteValues?: number[],        
        // Optional. How the parameter should be scaled to the hypercube.
        // Leave unset for categorical parameters.
        // Some kind of scaling is strongly recommended for real or integral
        // parameters (e.g., `UNIT_LINEAR_SCALE`).
        scaleType?: string,
        // Required if typeis `DOUBLE` or `INTEGER`. This field
        // should be unset if type is `CATEGORICAL`. This value should be integers if
        // type is `INTEGER`.
        maxValue?: number,
        // Required. The type of the parameter.
        type?: string,
        // Required. The parameter name must be unique amongst all ParameterConfigs in
        // a HyperparameterSpec message. E.g., "learning_rate".
        parameterName?: string,
        // Required if type is `CATEGORICAL`. The list of possible categories.
        categoricalValues?: string[],        
    }
    
    interface GoogleIamV1_LogConfig_DataAccessOptions {
    }
    
    interface GoogleCloudMlV1__PredictionInput {
        // Required. The format of the input data files.
        dataFormat?: string,
        // Optional. The Google Cloud ML runtime version to use for this batch
        // prediction. If not set, Google Cloud ML will pick the runtime version used
        // during the CreateVersion request for this model version, or choose the
        // latest stable version when model version information is not available
        // such as when the model is specified by uri.
        runtimeVersion?: string,
        // Required. The Google Cloud Storage location of the input data files.
        // May contain wildcards.
        inputPaths?: string[],        
        // Required. The Google Compute Engine region to run the prediction job in.
        region?: string,
        // Use this field if you want to specify a version of the model to use. The
        // string is formatted the same way as `model_version`, with the addition
        // of the version information:
        // 
        // `"projects/<var>[YOUR_PROJECT]</var>/models/<var>YOUR_MODEL/versions/<var>[YOUR_VERSION]</var>"`
        versionName?: string,
        // Use this field if you want to use the default version for the specified
        // model. The string must use the following format:
        // 
        // `"projects/<var>[YOUR_PROJECT]</var>/models/<var>[YOUR_MODEL]</var>"`
        modelName?: string,
        // Required. The output Google Cloud Storage location.
        outputPath?: string,
        // Optional. The maximum number of workers to be used for parallel processing.
        // Defaults to 10 if not specified.
        maxWorkerCount?: string,
        // Use this field if you want to specify a Google Cloud Storage path for
        // the model to use.
        uri?: string,
    }
    
    interface GoogleCloudMlV1__OperationMetadata {
        // Indicates whether a request to cancel this operation has been made.
        isCancellationRequested?: boolean,
        // The time the operation was submitted.
        createTime?: string,
        // Contains the name of the model associated with the operation.
        modelName?: string,
        // Contains the version associated with the operation.
        version?: GoogleCloudMlV1__Version,
        // The time operation processing completed.
        endTime?: string,
        // The operation type.
        operationType?: string,
        // The time operation processing started.
        startTime?: string,
    }
    
    interface GoogleCloudMlV1beta1__OperationMetadata {
        // Contains the name of the model associated with the operation.
        modelName?: string,
        // Contains the version associated with the operation.
        version?: GoogleCloudMlV1beta1__Version,
        // The time operation processing completed.
        endTime?: string,
        // The operation type.
        operationType?: string,
        // The time operation processing started.
        startTime?: string,
        // Indicates whether a request to cancel this operation has been made.
        isCancellationRequested?: boolean,
        // The time the operation was submitted.
        createTime?: string,
    }
    
    interface GoogleIamV1__AuditLogConfig {
        // Specifies the identities that do not cause logging for this type of
        // permission.
        // Follows the same format of Binding.members.
        exemptedMembers?: string[],        
        // The log type that this config enables.
        logType?: string,
    }
    
    interface GoogleType__Expr {
        // An optional string indicating the location of the expression for error
        // reporting, e.g. a file name and a position in the file.
        location?: string,
        // An optional title for the expression, i.e. a short string describing
        // its purpose. This can be used e.g. in UIs which allow to enter the
        // expression.
        title?: string,
        // An optional description of the expression. This is a longer text which
        // describes the expression, e.g. when hovered over it in a UI.
        description?: string,
        // Textual representation of an expression in
        // Common Expression Language syntax.
        // 
        // The application context of the containing message determines which
        // well-known feature set of CEL is supported.
        expression?: string,
    }
    
    interface GoogleCloudMlV1__HyperparameterSpec {
        // Optional. The number of training trials to run concurrently.
        // You can reduce the time it takes to perform hyperparameter tuning by adding
        // trials in parallel. However, each trail only benefits from the information
        // gained in completed trials. That means that a trial does not get access to
        // the results of trials running at the same time, which could reduce the
        // quality of the overall optimization.
        // 
        // Each trial will use the same scale tier and machine types.
        // 
        // Defaults to one.
        maxParallelTrials?: number,
        // Optional. The Tensorflow summary tag name to use for optimizing trials. For
        // current versions of Tensorflow, this tag name should exactly match what is
        // shown in Tensorboard, including all scopes.  For versions of Tensorflow
        // prior to 0.12, this should be only the tag passed to tf.Summary.
        // By default, "training/hptuning/metric" will be used.
        hyperparameterMetricTag?: string,
        // Required. The type of goal to use for tuning. Available types are
        // `MAXIMIZE` and `MINIMIZE`.
        // 
        // Defaults to `MAXIMIZE`.
        goal?: string,
        // Optional. How many training trials should be attempted to optimize
        // the specified hyperparameters.
        // 
        // Defaults to one.
        maxTrials?: number,
        // Required. The set of parameters to tune.
        params?: GoogleCloudMlV1__ParameterSpec[],        
    }
    
    interface GoogleCloudMlV1__ListJobsResponse {
        // Optional. Pass this token as the `page_token` field of the request for a
        // subsequent call.
        nextPageToken?: string,
        // The list of jobs.
        jobs?: GoogleCloudMlV1__Job[],        
    }
    
    interface GoogleCloudMlV1__SetDefaultVersionRequest {
    }
    
    interface GoogleLongrunning__Operation {
        // The normal response of the operation in case of success.  If the original
        // method returns no data on success, such as `Delete`, the response is
        // `google.protobuf.Empty`.  If the original method is standard
        // `Get`/`Create`/`Update`, the response should be the resource.  For other
        // methods, the response should have the type `XxxResponse`, where `Xxx`
        // is the original method name.  For example, if the original method name
        // is `TakeSnapshot()`, the inferred response type is
        // `TakeSnapshotResponse`.
        response?: any,
        // The server-assigned name, which is only unique within the same service that
        // originally returns it. If you use the default HTTP mapping, the
        // `name` should have the format of `operations/some/unique/name`.
        name?: string,
        // The error result of the operation in case of failure or cancellation.
        error?: GoogleRpc__Status,
        // Service-specific metadata associated with the operation.  It typically
        // contains progress information and common metadata such as create time.
        // Some services might not provide such metadata.  Any method that returns a
        // long-running operation should document the metadata type, if any.
        metadata?: any,
        // If the value is `false`, it means the operation is still in progress.
        // If true, the operation is completed, and either `error` or `response` is
        // available.
        done?: boolean,
    }
    
    interface GoogleCloudMlV1__Model {
        // Optional. The list of regions where the model is going to be deployed.
        // Currently only one region per model is supported.
        // Defaults to 'us-central1' if nothing is set.
        // Note:
        // *   No matter where a model is deployed, it can always be accessed by
        //     users from anywhere, both for online and batch prediction.
        // *   The region for a batch prediction job is set by the region field when
        //     submitting the batch prediction job and does not take its value from
        //     this field.
        regions?: string[],        
        // Required. The name specified for the model when it was created.
        // 
        // The model name must be unique within the project it is created in.
        name?: string,
        // Optional. The description specified for the model when it was created.
        description?: string,
        // Optional. If true, enables StackDriver Logging for online prediction.
        // Default is false.
        onlinePredictionLogging?: boolean,
        // Output only. The default version of the model. This version will be used to
        // handle prediction requests that do not specify a version.
        // 
        // You can change the default version by calling
        // [projects.methods.versions.setDefault](/ml-engine/reference/rest/v1/projects.models.versions/setDefault).
        defaultVersion?: GoogleCloudMlV1__Version,
    }
    
    interface GoogleIamV1__AuditConfig {
        // Specifies a service that will be enabled for audit logging.
        // For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
        // `allServices` is a special value that covers all services.
        service?: string,
        // The configuration for logging of each type of permission.
        // Next ID: 4
        auditLogConfigs?: GoogleIamV1__AuditLogConfig[],        
        // 
        exemptedMembers?: string[],        
    }
    
    interface GoogleProtobuf__Empty {
    }
    
    interface JobsResource {
        // Describes a job.
        get (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // Required. The name of the job to get the description of.
            name: string,
        }) : gapi.client.Request<GoogleCloudMlV1__Job>;        
        
        // Lists the jobs in the project.
        list (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // Required. The name of the project for which to list jobs.
            parent: string,
            // Optional. Specifies the subset of jobs to retrieve.
            filter?: string,
            // Optional. A page token to request the next page of results.
            // 
            // You get the token from the `next_page_token` field of the response from
            // the previous call.
            pageToken?: string,
            // Optional. The number of jobs to retrieve per "page" of results. If there
            // are more remaining results than this number, the response message will
            // contain a valid value in the `next_page_token` field.
            // 
            // The default value is 20, and the maximum page size is 100.
            pageSize?: number,
        }) : gapi.client.Request<GoogleCloudMlV1__ListJobsResponse>;        
        
        // Creates a training or a batch prediction job.
        create (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // Required. The project name.
            parent: string,
        }) : gapi.client.Request<GoogleCloudMlV1__Job>;        
        
        // Cancels a running job.
        cancel (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // Required. The name of the job to cancel.
            name: string,
        }) : gapi.client.Request<GoogleProtobuf__Empty>;        
        
    }
    
    
    interface VersionsResource {
        // Deletes a model version.
        // 
        // Each model can have multiple versions deployed and in use at any given
        // time. Use this method to remove a single version.
        // 
        // Note: You cannot delete the version that is set as the default version
        // of the model unless it is the only remaining version.
        delete (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // Required. The name of the version. You can get the names of all the
            // versions of a model by calling
            // [projects.models.versions.list](/ml-engine/reference/rest/v1/projects.models.versions/list).
            name: string,
        }) : gapi.client.Request<GoogleLongrunning__Operation>;        
        
        // Gets information about a model version.
        // 
        // Models can have multiple versions. You can call
        // [projects.models.versions.list](/ml-engine/reference/rest/v1/projects.models.versions/list)
        // to get the same information that this method returns for all of the
        // versions of a model.
        get (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // Required. The name of the version.
            name: string,
        }) : gapi.client.Request<GoogleCloudMlV1__Version>;        
        
        // Gets basic information about all the versions of a model.
        // 
        // If you expect that a model has a lot of versions, or if you need to handle
        // only a limited number of results at a time, you can request that the list
        // be retrieved in batches (called pages):
        list (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // Required. The name of the model for which to list the version.
            parent: string,
            // Optional. A page token to request the next page of results.
            // 
            // You get the token from the `next_page_token` field of the response from
            // the previous call.
            pageToken?: string,
            // Optional. The number of versions to retrieve per "page" of results. If
            // there are more remaining results than this number, the response message
            // will contain a valid value in the `next_page_token` field.
            // 
            // The default value is 20, and the maximum page size is 100.
            pageSize?: number,
        }) : gapi.client.Request<GoogleCloudMlV1__ListVersionsResponse>;        
        
        // Creates a new version of a model from a trained TensorFlow model.
        // 
        // If the version created in the cloud by this call is the first deployed
        // version of the specified model, it will be made the default version of the
        // model. When you add a version to a model that already has one or more
        // versions, the default version does not automatically change. If you want a
        // new version to be the default, you must call
        // [projects.models.versions.setDefault](/ml-engine/reference/rest/v1/projects.models.versions/setDefault).
        create (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // Required. The name of the model.
            parent: string,
        }) : gapi.client.Request<GoogleLongrunning__Operation>;        
        
        // Designates a version to be the default for the model.
        // 
        // The default version is used for prediction requests made against the model
        // that don't specify a version.
        // 
        // The first version to be created for a model is automatically set as the
        // default. You must make any subsequent changes to the default version
        // setting manually using this method.
        setDefault (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // Required. The name of the version to make the default for the model. You
            // can get the names of all the versions of a model by calling
            // [projects.models.versions.list](/ml-engine/reference/rest/v1/projects.models.versions/list).
            // 
            // Authorization: `ml.models.update` permission is required on the parent model.
            name: string,
        }) : gapi.client.Request<GoogleCloudMlV1__Version>;        
        
    }
    
    
    interface ModelsResource {
        // Creates a model which will later contain one or more versions.
        // 
        // You must add at least one version before you can request predictions from
        // the model. Add versions by calling
        // [projects.models.versions.create](/ml-engine/reference/rest/v1/projects.models.versions/create).
        create (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // Required. The project name.
            parent: string,
        }) : gapi.client.Request<GoogleCloudMlV1__Model>;        
        
        // Sets the access control policy on the specified resource. Replaces any
        // existing policy.
        setIamPolicy (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // REQUIRED: The resource for which the policy is being specified.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<GoogleIamV1__Policy>;        
        
        // Gets the access control policy for a resource.
        // Returns an empty policy if the resource exists and does not have a policy
        // set.
        getIamPolicy (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // REQUIRED: The resource for which the policy is being requested.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<GoogleIamV1__Policy>;        
        
        // Gets information about a model, including its name, the description (if
        // set), and the default version (if at least one version of the model has
        // been deployed).
        get (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // Required. The name of the model.
            name: string,
        }) : gapi.client.Request<GoogleCloudMlV1__Model>;        
        
        // Returns permissions that a caller has on the specified resource.
        // If the resource does not exist, this will return an empty set of
        // permissions, not a NOT_FOUND error.
        // 
        // Note: This operation is designed to be used for building permission-aware
        // UIs and command-line tools, not for authorization checking. This operation
        // may "fail open" without warning.
        testIamPermissions (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // REQUIRED: The resource for which the policy detail is being requested.
            // See the operation documentation for the appropriate value for this field.
            resource: string,
        }) : gapi.client.Request<GoogleIamV1__TestIamPermissionsResponse>;        
        
        // Deletes a model.
        // 
        // You can only delete a model if there are no versions in it. You can delete
        // versions by calling
        // [projects.models.versions.delete](/ml-engine/reference/rest/v1/projects.models.versions/delete).
        delete (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // Required. The name of the model.
            name: string,
        }) : gapi.client.Request<GoogleLongrunning__Operation>;        
        
        // Lists the models in a project.
        // 
        // Each project can contain multiple models, and each model can have multiple
        // versions.
        list (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // Optional. A page token to request the next page of results.
            // 
            // You get the token from the `next_page_token` field of the response from
            // the previous call.
            pageToken?: string,
            // Optional. The number of models to retrieve per "page" of results. If there
            // are more remaining results than this number, the response message will
            // contain a valid value in the `next_page_token` field.
            // 
            // The default value is 20, and the maximum page size is 100.
            pageSize?: number,
            // Required. The name of the project whose models are to be listed.
            parent: string,
        }) : gapi.client.Request<GoogleCloudMlV1__ListModelsResponse>;        
        
        versions: VersionsResource,
    }
    
    
    interface OperationsResource {
        // Starts asynchronous cancellation on a long-running operation.  The server
        // makes a best effort to cancel the operation, but success is not
        // guaranteed.  If the server doesn't support this method, it returns
        // `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
        // Operations.GetOperation or
        // other methods to check whether the cancellation succeeded or whether the
        // operation completed despite cancellation. On successful cancellation,
        // the operation is not deleted; instead, it becomes an operation with
        // an Operation.error value with a google.rpc.Status.code of 1,
        // corresponding to `Code.CANCELLED`.
        cancel (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // The name of the operation resource to be cancelled.
            name: string,
        }) : gapi.client.Request<GoogleProtobuf__Empty>;        
        
        // Deletes a long-running operation. This method indicates that the client is
        // no longer interested in the operation result. It does not cancel the
        // operation. If the server doesn't support this method, it returns
        // `google.rpc.Code.UNIMPLEMENTED`.
        delete (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // The name of the operation resource to be deleted.
            name: string,
        }) : gapi.client.Request<GoogleProtobuf__Empty>;        
        
        // Gets the latest state of a long-running operation.  Clients can use this
        // method to poll the operation result at intervals as recommended by the API
        // service.
        get (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // The name of the operation resource.
            name: string,
        }) : gapi.client.Request<GoogleLongrunning__Operation>;        
        
        // Lists operations that match the specified filter in the request. If the
        // server doesn't support this method, it returns `UNIMPLEMENTED`.
        // 
        // NOTE: the `name` binding allows API services to override the binding
        // to use different resource name schemes, such as `users/*/operations`. To
        // override the binding, API services can add a binding such as
        // `"/v1/{name=users/*}/operations"` to their service configuration.
        // For backwards compatibility, the default name includes the operations
        // collection id, however overriding users must ensure the name binding
        // is the parent resource, without the operations collection id.
        list (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // The standard list page token.
            pageToken?: string,
            // The name of the operation's parent resource.
            name: string,
            // The standard list page size.
            pageSize?: number,
            // The standard list filter.
            filter?: string,
        }) : gapi.client.Request<GoogleLongrunning__ListOperationsResponse>;        
        
    }
    
    
    interface ProjectsResource {
        // Get the service account information associated with your project. You need
        // this information in order to grant the service account persmissions for
        // the Google Cloud Storage location where you put your model training code
        // for training the model with Google Cloud Machine Learning.
        getConfig (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // Required. The project name.
            name: string,
        }) : gapi.client.Request<GoogleCloudMlV1__GetConfigResponse>;        
        
        // Performs prediction on the data in the request.
        // 
        // **** REMOVE FROM GENERATED DOCUMENTATION
        predict (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // Required. The resource name of a model or a version.
            // 
            // Authorization: requires the `predict` permission on the specified resource.
            name: string,
        }) : gapi.client.Request<GoogleApi__HttpBody>;        
        
        jobs: JobsResource,
        models: ModelsResource,
        operations: OperationsResource,
    }
    
}

declare module gapi.client.ml {
    var projects: gapi.client.ml.ProjectsResource; 
    
}
