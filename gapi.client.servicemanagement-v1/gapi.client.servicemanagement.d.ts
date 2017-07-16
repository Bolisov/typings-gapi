// Type definitions for Google Google Service Management API v1
// Project: https://cloud.google.com/service-management/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.servicemanagement {
    
    interface Control {
        // The service control environment to use. If empty, no control plane
        // feature (like quota and billing) will be enabled.
        environment?: string,
    }
    
    interface SystemParameter {
        // Define the HTTP header name to use for the parameter. It is case
        // insensitive.
        httpHeader?: string,
        // Define the name of the parameter, such as "api_key" . It is case sensitive.
        name?: string,
        // Define the URL query parameter name to use for the parameter. It is case
        // sensitive.
        urlQueryParameter?: string,
    }
    
    interface Monitoring {
        // Monitoring configurations for sending metrics to the consumer project.
        // There can be multiple consumer destinations, each one must have a
        // different monitored resource type. A metric can be used in at most
        // one consumer destination.
        consumerDestinations?: MonitoringDestination[],        
        // Monitoring configurations for sending metrics to the producer project.
        // There can be multiple producer destinations, each one must have a
        // different monitored resource type. A metric can be used in at most
        // one producer destination.
        producerDestinations?: MonitoringDestination[],        
    }
    
    interface Field {
        // The field JSON name.
        jsonName?: string,
        // The field type.
        kind?: string,
        // The protocol buffer options.
        options?: Option[],        
        // The index of the field type in `Type.oneofs`, for message or enumeration
        // types. The first type has index 1; zero means the type is not in the list.
        oneofIndex?: number,
        // Whether to use alternative packed wire representation.
        packed?: boolean,
        // The field cardinality.
        cardinality?: string,
        // The string value of the default value of this field. Proto2 syntax only.
        defaultValue?: string,
        // The field name.
        name?: string,
        // The field type URL, without the scheme, for message or enumeration
        // types. Example: `"type.googleapis.com/google.protobuf.Timestamp"`.
        typeUrl?: string,
        // The field number.
        number?: number,
    }
    
    interface TestIamPermissionsRequest {
        // The set of permissions to check for the `resource`. Permissions with
        // wildcards (such as '*' or 'storage.*') are not allowed. For more
        // information see
        // [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
        permissions?: string[],        
    }
    
    interface Enum {
        // Enum value definitions.
        enumvalue?: EnumValue[],        
        // Enum type name.
        name?: string,
        // Protocol buffer options.
        options?: Option[],        
        // The source syntax.
        syntax?: string,
        // The source context.
        sourceContext?: SourceContext,
    }
    
    interface EnableServiceRequest {
        // The identity of consumer resource which service enablement will be
        // applied to.
        // 
        // The Google Service Management implementation accepts the following
        // forms:
        // - "project:<project_id>"
        // 
        // Note: this is made compatible with
        // google.api.servicecontrol.v1.Operation.consumer_id.
        consumerId?: string,
    }
    
    interface Diagnostic {
        // File name and line number of the error or warning.
        location?: string,
        // The kind of diagnostic information provided.
        kind?: string,
        // Message describing the error or warning.
        message?: string,
    }
    
    interface LabelDescriptor {
        // The label key.
        key?: string,
        // A human-readable description for the label.
        description?: string,
        // The type of data that can be assigned to the label.
        valueType?: string,
    }
    
    interface Type {
        // The list of types appearing in `oneof` definitions in this type.
        oneofs?: string[],        
        // The source syntax.
        syntax?: string,
        // The source context.
        sourceContext?: SourceContext,
        // The protocol buffer options.
        options?: Option[],        
        // The list of fields.
        fields?: Field[],        
        // The fully qualified message name.
        name?: string,
    }
    
    interface GenerateConfigReportResponse {
        // Errors / Linter warnings associated with the service definition this
        // report
        // belongs to.
        diagnostics?: Diagnostic[],        
        // Name of the service this report belongs to.
        serviceName?: string,
        // list of ChangeReport, each corresponding to comparison between two
        // service configurations.
        changeReports?: ChangeReport[],        
        // ID of the service configuration this report belongs to.
        id?: string,
    }
    
    interface ListServiceConfigsResponse {
        // The list of service configuration resources.
        serviceConfigs?: Service[],        
        // The token of the next page of results.
        nextPageToken?: string,
    }
    
    interface Experimental {
        // Authorization configuration.
        authorization?: AuthorizationConfig,
    }
    
    interface Backend {
        // A list of API backend rules that apply to individual API methods.
        // 
        // **NOTE:** All service configuration rules follow "last one wins" order.
        rules?: BackendRule[],        
    }
    
    interface AuditConfig {
        // The configuration for logging of each type of permission.
        // Next ID: 4
        auditLogConfigs?: AuditLogConfig[],        
        // 
        exemptedMembers?: string[],        
        // Specifies a service that will be enabled for audit logging.
        // For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
        // `allServices` is a special value that covers all services.
        service?: string,
    }
    
    interface SubmitConfigSourceRequest {
        // The source configuration for the service.
        configSource?: ConfigSource,
        // Optional. If set, this will result in the generation of a
        // `google.api.Service` configuration based on the `ConfigSource` provided,
        // but the generated config and the sources will NOT be persisted.
        validateOnly?: boolean,
    }
    
    interface AuthorizationConfig {
        // The name of the authorization provider, such as
        // firebaserules.googleapis.com.
        provider?: string,
    }
    
    interface DocumentationRule {
        // Description of the selected API(s).
        description?: string,
        // Deprecation description of the selected element(s). It can be provided if an
        // element is marked as `deprecated`.
        deprecationDescription?: string,
        // The selector is a comma-separated list of patterns. Each pattern is a
        // qualified name of the element which may end in "*", indicating a wildcard.
        // Wildcards are only allowed at the end and for a whole component of the
        // qualified name, i.e. "foo.*" is ok, but not "foo.b*" or "foo.*.bar". To
        // specify a default for all applicable elements, the whole pattern "*"
        // is used.
        selector?: string,
    }
    
    interface CloudAuditOptions {
        // The log_name to populate in the Cloud Audit Record.
        logName?: string,
        // True if the log is for a permission of type DATA_READ or ADMIN_READ.
        isReadPermissionType?: boolean,
    }
    
    interface ContextRule {
        // A list of full type names of provided contexts.
        provided?: string[],        
        // A list of full type names of requested contexts.
        requested?: string[],        
        // Selects the methods to which this rule applies.
        // 
        // Refer to selector for syntax details.
        selector?: string,
    }
    
    interface SourceContext {
        // The path-qualified name of the .proto file that contained the associated
        // protobuf element.  For example: `"google/protobuf/source_context.proto"`.
        fileName?: string,
    }
    
    interface MetricDescriptor {
        // The set of labels that can be used to describe a specific
        // instance of this metric type. For example, the
        // `appengine.googleapis.com/http/server/response_latencies` metric
        // type has a label for the HTTP response code, `response_code`, so
        // you can look at latencies for successful responses or just
        // for responses that failed.
        labels?: LabelDescriptor[],        
        // The resource name of the metric descriptor. Depending on the
        // implementation, the name typically includes: (1) the parent resource name
        // that defines the scope of the metric type or of its data; and (2) the
        // metric's URL-encoded type, which also appears in the `type` field of this
        // descriptor. For example, following is the resource name of a custom
        // metric within the GCP project `my-project-id`:
        // 
        //     "projects/my-project-id/metricDescriptors/custom.googleapis.com%2Finvoice%2Fpaid%2Famount"
        name?: string,
        // The metric type, including its DNS name prefix. The type is not
        // URL-encoded.  All user-defined custom metric types have the DNS name
        // `custom.googleapis.com`.  Metric types should use a natural hierarchical
        // grouping. For example:
        // 
        //     "custom.googleapis.com/invoice/paid/amount"
        //     "appengine.googleapis.com/http/server/response_latencies"
        type?: string,
        // Whether the measurement is an integer, a floating-point number, etc.
        // Some combinations of `metric_kind` and `value_type` might not be supported.
        valueType?: string,
        // Whether the metric records instantaneous values, changes to a value, etc.
        // Some combinations of `metric_kind` and `value_type` might not be supported.
        metricKind?: string,
        // A concise name for the metric, which can be displayed in user interfaces.
        // Use sentence case without an ending period, for example "Request count".
        displayName?: string,
        // A detailed description of the metric, which can be used in documentation.
        description?: string,
        // The unit in which the metric value is reported. It is only applicable
        // if the `value_type` is `INT64`, `DOUBLE`, or `DISTRIBUTION`. The
        // supported units are a subset of [The Unified Code for Units of
        // Measure](http://unitsofmeasure.org/ucum.html) standard:
        // 
        // **Basic units (UNIT)**
        // 
        // * `bit`   bit
        // * `By`    byte
        // * `s`     second
        // * `min`   minute
        // * `h`     hour
        // * `d`     day
        // 
        // **Prefixes (PREFIX)**
        // 
        // * `k`     kilo    (10**3)
        // * `M`     mega    (10**6)
        // * `G`     giga    (10**9)
        // * `T`     tera    (10**12)
        // * `P`     peta    (10**15)
        // * `E`     exa     (10**18)
        // * `Z`     zetta   (10**21)
        // * `Y`     yotta   (10**24)
        // * `m`     milli   (10**-3)
        // * `u`     micro   (10**-6)
        // * `n`     nano    (10**-9)
        // * `p`     pico    (10**-12)
        // * `f`     femto   (10**-15)
        // * `a`     atto    (10**-18)
        // * `z`     zepto   (10**-21)
        // * `y`     yocto   (10**-24)
        // * `Ki`    kibi    (2**10)
        // * `Mi`    mebi    (2**20)
        // * `Gi`    gibi    (2**30)
        // * `Ti`    tebi    (2**40)
        // 
        // **Grammar**
        // 
        // The grammar includes the dimensionless unit `1`, such as `1/s`.
        // 
        // The grammar also includes these connectors:
        // 
        // * `/`    division (as an infix operator, e.g. `1/s`).
        // * `.`    multiplication (as an infix operator, e.g. `GBy.d`)
        // 
        // The grammar for a unit is as follows:
        // 
        //     Expression = Component { "." Component } { "/" Component } ;
        // 
        //     Component = [ PREFIX ] UNIT [ Annotation ]
        //               | Annotation
        //               | "1"
        //               ;
        // 
        //     Annotation = "{" NAME "}" ;
        // 
        // Notes:
        // 
        // * `Annotation` is just a comment if it follows a `UNIT` and is
        //    equivalent to `1` if it is used alone. For examples,
        //    `{requests}/s == 1/s`, `By{transmitted}/s == By/s`.
        // * `NAME` is a sequence of non-blank printable ASCII characters not
        //    containing '{' or '}'.
        unit?: string,
    }
    
    interface Expr {
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
    
    interface ListServicesResponse {
        // Token that can be passed to `ListServices` to resume a paginated query.
        nextPageToken?: string,
        // The returned services will only have the name field set.
        services?: ManagedService[],        
    }
    
    interface Endpoint {
        // The list of features enabled on this endpoint.
        features?: string[],        
        // The list of APIs served by this endpoint.
        // 
        // If no APIs are specified this translates to "all APIs" exported by the
        // service, as defined in the top-level service configuration.
        apis?: string[],        
        // Allowing
        // [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), aka
        // cross-domain traffic, would allow the backends served from this endpoint to
        // receive and respond to HTTP OPTIONS requests. The response will be used by
        // the browser to determine whether the subsequent cross-origin request is
        // allowed to proceed.
        allowCors?: boolean,
        // DEPRECATED: This field is no longer supported. Instead of using aliases,
        // please specify multiple google.api.Endpoint for each of the intented
        // alias.
        // 
        // Additional names that this endpoint will be hosted on.
        aliases?: string[],        
        // The canonical name of this endpoint.
        name?: string,
        // The specification of an Internet routable address of API frontend that will
        // handle requests to this [API Endpoint](https://cloud.google.com/apis/design/glossary).
        // It should be either a valid IPv4 address or a fully-qualified domain name.
        // For example, "8.8.8.8" or "myservice.appspot.com".
        target?: string,
    }
    
    interface OAuthRequirements {
        // The list of publicly documented OAuth scopes that are allowed access. An
        // OAuth token containing any of these scopes will be accepted.
        // 
        // Example:
        // 
        //      canonical_scopes: https://www.googleapis.com/auth/calendar,
        //                        https://www.googleapis.com/auth/calendar.read
        canonicalScopes?: string,
    }
    
    interface GetIamPolicyRequest {
    }
    
    interface Usage {
        // The full resource name of a channel used for sending notifications to the
        // service producer.
        // 
        // Google Service Management currently only supports
        // [Google Cloud Pub/Sub](https://cloud.google.com/pubsub) as a notification
        // channel. To use Google Cloud Pub/Sub as the channel, this must be the name
        // of a Cloud Pub/Sub topic that uses the Cloud Pub/Sub topic name format
        // documented in https://cloud.google.com/pubsub/docs/overview.
        producerNotificationChannel?: string,
        // A list of usage rules that apply to individual API methods.
        // 
        // **NOTE:** All service configuration rules follow "last one wins" order.
        rules?: UsageRule[],        
        // Requirements that must be satisfied before a consumer project can use the
        // service. Each requirement is of the form <service.name>/<requirement-id>;
        // for example 'serviceusage.googleapis.com/billing-enabled'.
        requirements?: string[],        
    }
    
    interface TestIamPermissionsResponse {
        // A subset of `TestPermissionsRequest.permissions` that the caller is
        // allowed.
        permissions?: string[],        
    }
    
    interface Context {
        // A list of RPC context rules that apply to individual API methods.
        // 
        // **NOTE:** All service configuration rules follow "last one wins" order.
        rules?: ContextRule[],        
    }
    
    interface Rule {
        // If one or more 'not_in' clauses are specified, the rule matches
        // if the PRINCIPAL/AUTHORITY_SELECTOR is in none of the entries.
        // The format for in and not_in entries is the same as for members in a
        // Binding (see google/iam/v1/policy.proto).
        notIn?: string[],        
        // Human-readable description of the rule.
        description?: string,
        // Additional restrictions that must be met
        conditions?: Condition[],        
        // The config returned to callers of tech.iam.IAM.CheckPolicy for any entries
        // that match the LOG action.
        logConfig?: LogConfig[],        
        // If one or more 'in' clauses are specified, the rule matches if
        // the PRINCIPAL/AUTHORITY_SELECTOR is in at least one of these entries.
        in?: string[],        
        // A permission is a string of form '<service>.<resource type>.<verb>'
        // (e.g., 'storage.buckets.list'). A value of '*' matches all permissions,
        // and a verb part of '*' (e.g., 'storage.buckets.*') matches all verbs.
        permissions?: string[],        
        // Required
        action?: string,
    }
    
    interface LogConfig {
        // Counter options.
        counter?: CounterOptions,
        // Data access options.
        dataAccess?: DataAccessOptions,
        // Cloud audit options.
        cloudAudit?: CloudAuditOptions,
    }
    
    interface LogDescriptor {
        // The human-readable name for this log. This information appears on
        // the user interface and should be concise.
        displayName?: string,
        // A human-readable description of this log. This information appears in
        // the documentation and can contain details.
        description?: string,
        // The set of labels that are available to describe a specific log entry.
        // Runtime requests that contain labels not specified here are
        // considered invalid.
        labels?: LabelDescriptor[],        
        // The name of the log. It must be less than 512 characters long and can
        // include the following characters: upper- and lower-case alphanumeric
        // characters [A-Za-z0-9], and punctuation characters including
        // slash, underscore, hyphen, period [/_-.].
        name?: string,
    }
    
    interface ConfigFile {
        // The bytes that constitute the file.
        fileContents?: string,
        // The file name of the configuration file (full or relative path).
        filePath?: string,
        // The type of configuration file this represents.
        fileType?: string,
    }
    
    interface CustomErrorRule {
        // Mark this message as possible payload in error response.  Otherwise,
        // objects of this type will be filtered when they appear in error payload.
        isErrorType?: boolean,
        // Selects messages to which this rule applies.
        // 
        // Refer to selector for syntax details.
        selector?: string,
    }
    
    interface MonitoredResourceDescriptor {
        // Required. A set of labels used to describe instances of this monitored
        // resource type. For example, an individual Google Cloud SQL database is
        // identified by values for the labels `"database_id"` and `"zone"`.
        labels?: LabelDescriptor[],        
        // Optional. The resource name of the monitored resource descriptor:
        // `"projects/{project_id}/monitoredResourceDescriptors/{type}"` where
        // {type} is the value of the `type` field in this object and
        // {project_id} is a project ID that provides API-specific context for
        // accessing the type.  APIs that do not use project information can use the
        // resource name format `"monitoredResourceDescriptors/{type}"`.
        name?: string,
        // Optional. A detailed description of the monitored resource type that might
        // be used in documentation.
        description?: string,
        // Optional. A concise name for the monitored resource type that might be
        // displayed in user interfaces. It should be a Title Cased Noun Phrase,
        // without any article or other determiners. For example,
        // `"Google Cloud SQL Database"`.
        displayName?: string,
        // Required. The monitored resource type. For example, the type
        // `"cloudsql_database"` represents databases in Google Cloud SQL.
        // The maximum length of this value is 256 characters.
        type?: string,
    }
    
    interface CustomAuthRequirements {
        // A configuration string containing connection information for the
        // authentication provider, typically formatted as a SmartService string
        // (go/smartservice).
        provider?: string,
    }
    
    interface MediaDownload {
        // Whether download is enabled.
        enabled?: boolean,
        // DO NOT USE FIELDS BELOW THIS LINE UNTIL THIS WARNING IS REMOVED.
        // 
        // Specify name of the download service if one is used for download.
        downloadService?: string,
        // A boolean that determines whether a notification for the completion of a
        // download should be sent to the backend.
        completeNotification?: boolean,
        // Name of the Scotty dropzone to use for the current API.
        dropzone?: string,
        // Optional maximum acceptable size for direct download.
        // The size is specified in bytes.
        maxDirectDownloadSize?: string,
        // A boolean that determines if direct download from ESF should be used for
        // download of this media.
        useDirectDownload?: boolean,
    }
    
    interface ChangeReport {
        // List of changes between two service configurations.
        // The changes will be alphabetically sorted based on the identifier
        // of each change.
        // A ConfigChange identifier is a dot separated path to the configuration.
        // Example: visibility.rules[selector='LibraryService.CreateBook'].restriction
        configChanges?: ConfigChange[],        
    }
    
    interface DisableServiceRequest {
        // The identity of consumer resource which service disablement will be
        // applied to.
        // 
        // The Google Service Management implementation accepts the following
        // forms:
        // - "project:<project_id>"
        // 
        // Note: this is made compatible with
        // google.api.servicecontrol.v1.Operation.consumer_id.
        consumerId?: string,
    }
    
    interface SubmitConfigSourceResponse {
        // The generated service configuration.
        serviceConfig?: Service,
    }
    
    interface MediaUpload {
        // A boolean that determines whether a notification for the completion of an
        // upload should be sent to the backend. These notifications will not be seen
        // by the client and will not consume quota.
        completeNotification?: boolean,
        // Whether to receive a notification for progress changes of media upload.
        progressNotification?: boolean,
        // Whether upload is enabled.
        enabled?: boolean,
        // Name of the Scotty dropzone to use for the current API.
        dropzone?: string,
        // Whether to receive a notification on the start of media upload.
        startNotification?: boolean,
        // DO NOT USE FIELDS BELOW THIS LINE UNTIL THIS WARNING IS REMOVED.
        // 
        // Specify name of the upload service if one is used for upload.
        uploadService?: string,
        // An array of mimetype patterns. Esf will only accept uploads that match one
        // of the given patterns.
        mimeTypes?: string[],        
        // Optional maximum acceptable size for an upload.
        // The size is specified in bytes.
        maxSize?: string,
    }
    
    interface Advice {
        // Useful description for why this advice was applied and what actions should
        // be taken to mitigate any implied risks.
        description?: string,
    }
    
    interface ManagedService {
        // The name of the service. See the [overview](/service-management/overview)
        // for naming requirements.
        serviceName?: string,
        // ID of the project that produces and owns this service.
        producerProjectId?: string,
    }
    
    interface UsageRule {
        // Selects the methods to which this rule applies. Use '*' to indicate all
        // methods in all APIs.
        // 
        // Refer to selector for syntax details.
        selector?: string,
        // True, if the method should skip service control. If so, no control plane
        // feature (like quota and billing) will be enabled.
        skipServiceControl?: boolean,
        // True, if the method allows unregistered calls; false otherwise.
        allowUnregisteredCalls?: boolean,
    }
    
    interface TrafficPercentStrategy {
        // Maps service configuration IDs to their corresponding traffic percentage.
        // Key is the service configuration ID, Value is the traffic percentage
        // which must be greater than 0.0 and the sum must equal to 100.0.
        percentages?: any,
    }
    
    interface AuthRequirement {
        // NOTE: This will be deprecated soon, once AuthProvider.audiences is
        // implemented and accepted in all the runtime components.
        // 
        // The list of JWT
        // [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3).
        // that are allowed to access. A JWT containing any of these audiences will
        // be accepted. When this setting is absent, only JWTs with audience
        // "https://Service_name/API_name"
        // will be accepted. For example, if no audiences are in the setting,
        // LibraryService API will only accept JWTs with the following audience
        // "https://library-example.googleapis.com/google.example.library.v1.LibraryService".
        // 
        // Example:
        // 
        //     audiences: bookstore_android.apps.googleusercontent.com,
        //                bookstore_web.apps.googleusercontent.com
        audiences?: string,
        // id from authentication provider.
        // 
        // Example:
        // 
        //     provider_id: bookstore_auth
        providerId?: string,
    }
    
    interface Condition {
        // An operator to apply the subject with.
        op?: string,
        // Trusted attributes discharged by the service.
        svc?: string,
        // DEPRECATED. Use 'values' instead.
        value?: string,
        // Trusted attributes supplied by any service that owns resources and uses
        // the IAM system for access control.
        sys?: string,
        // Trusted attributes supplied by the IAM system.
        iam?: string,
        // The objects of the condition. This is mutually exclusive with 'value'.
        values?: string[],        
    }
    
    interface Documentation {
        // The top level pages for the documentation set.
        pages?: Page[],        
        // A short summary of what the service does. Can only be provided by
        // plain text.
        summary?: string,
        // The URL to the root of documentation.
        documentationRootUrl?: string,
        // Declares a single overview page. For example:
        // <pre><code>documentation:
        //   summary: ...
        //   overview: &#40;== include overview.md ==&#41;
        // </code></pre>
        // This is a shortcut for the following declaration (using pages style):
        // <pre><code>documentation:
        //   summary: ...
        //   pages:
        //   - name: Overview
        //     content: &#40;== include overview.md ==&#41;
        // </code></pre>
        // Note: you cannot specify both `overview` field and `pages` field.
        overview?: string,
        // A list of documentation rules that apply to individual API elements.
        // 
        // **NOTE:** All service configuration rules follow "last one wins" order.
        rules?: DocumentationRule[],        
    }
    
    interface AuditLogConfig {
        // The log type that this config enables.
        logType?: string,
        // Specifies the identities that do not cause logging for this type of
        // permission.
        // Follows the same format of Binding.members.
        exemptedMembers?: string[],        
    }
    
    interface ConfigSource {
        // Set of source configuration files that are used to generate a service
        // configuration (`google.api.Service`).
        files?: ConfigFile[],        
        // A unique ID for a specific instance of this message, typically assigned
        // by the client for tracking purpose. If empty, the server may choose to
        // generate one instead.
        id?: string,
    }
    
    interface AuthenticationRule {
        // Configuration for custom authentication.
        customAuth?: CustomAuthRequirements,
        // The requirements for OAuth credentials.
        oauth?: OAuthRequirements,
        // Requirements for additional authentication providers.
        requirements?: AuthRequirement[],        
        // Whether to allow requests without a credential. The credential can be
        // an OAuth token, Google cookies (first-party auth) or EndUserCreds.
        // 
        // For requests without credentials, if the service control environment is
        // specified, each incoming request **must** be associated with a service
        // consumer. This can be done by passing an API key that belongs to a consumer
        // project.
        allowWithoutCredential?: boolean,
        // Selects the methods to which this rule applies.
        // 
        // Refer to selector for syntax details.
        selector?: string,
    }
    
    interface BackendRule {
        // The number of seconds to wait for a response from a request.  The
        // default depends on the deployment context.
        deadline?: number,
        // Minimum deadline in seconds needed for this method. Calls having deadline
        // value lower than this will be rejected.
        minDeadline?: number,
        // The address of the API backend.
        address?: string,
        // Selects the methods to which this rule applies.
        // 
        // Refer to selector for syntax details.
        selector?: string,
    }
    
    interface Policy {
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
        rules?: Rule[],        
        // Version of the `Policy`. The default version is 0.
        version?: number,
        // Specifies cloud audit logging configuration for this policy.
        auditConfigs?: AuditConfig[],        
        // Associates a list of `members` to a `role`.
        // `bindings` with no members will result in an error.
        bindings?: Binding[],        
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
    }
    
    interface UndeleteServiceResponse {
        // Revived service resource.
        service?: ManagedService,
    }
    
    interface Api {
        // Any metadata attached to the API.
        options?: Option[],        
        // The methods of this api, in unspecified order.
        methods?: Method[],        
        // The fully qualified name of this api, including package name
        // followed by the api's simple name.
        name?: string,
        // The source syntax of the service.
        syntax?: string,
        // Source context for the protocol buffer service represented by this
        // message.
        sourceContext?: SourceContext,
        // A version string for this api. If specified, must have the form
        // `major-version.minor-version`, as in `1.10`. If the minor version
        // is omitted, it defaults to zero. If the entire version field is
        // empty, the major version is derived from the package name, as
        // outlined below. If the field is not empty, the version in the
        // package name will be verified to be consistent with what is
        // provided here.
        // 
        // The versioning schema uses [semantic
        // versioning](http://semver.org) where the major version number
        // indicates a breaking change and the minor version an additive,
        // non-breaking change. Both version numbers are signals to users
        // what to expect from different versions, and should be carefully
        // chosen based on the product plan.
        // 
        // The major version is also reflected in the package name of the
        // API, which must end in `v<major-version>`, as in
        // `google.feature.v1`. For major versions 0 and 1, the suffix can
        // be omitted. Zero major versions must only be used for
        // experimental, none-GA apis.
        // 
        version?: string,
        // Included APIs. See Mixin.
        mixins?: Mixin[],        
    }
    
    interface MetricRule {
        // Metrics to update when the selected methods are called, and the associated
        // cost applied to each metric.
        // 
        // The key of the map is the metric name, and the values are the amount
        // increased for the metric against which the quota limits are defined.
        // The value must not be negative.
        metricCosts?: any,
        // Selects the methods to which this rule applies.
        // 
        // Refer to selector for syntax details.
        selector?: string,
    }
    
    interface DataAccessOptions {
    }
    
    interface Authentication {
        // A list of authentication rules that apply to individual API methods.
        // 
        // **NOTE:** All service configuration rules follow "last one wins" order.
        rules?: AuthenticationRule[],        
        // Defines a set of authentication providers that a service supports.
        providers?: AuthProvider[],        
    }
    
    interface Operation {
        // If the value is `false`, it means the operation is still in progress.
        // If true, the operation is completed, and either `error` or `response` is
        // available.
        done?: boolean,
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
        error?: Status,
        // Service-specific metadata associated with the operation.  It typically
        // contains progress information and common metadata such as create time.
        // Some services might not provide such metadata.  Any method that returns a
        // long-running operation should document the metadata type, if any.
        metadata?: any,
    }
    
    interface Page {
        // Subpages of this page. The order of subpages specified here will be
        // honored in the generated docset.
        subpages?: Page[],        
        // The name of the page. It will be used as an identity of the page to
        // generate URI of the page, text of the link to this page in navigation,
        // etc. The full page name (start from the root page name to this page
        // concatenated with `.`) can be used as reference to the page in your
        // documentation. For example:
        // <pre><code>pages:
        // - name: Tutorial
        //   content: &#40;== include tutorial.md ==&#41;
        //   subpages:
        //   - name: Java
        //     content: &#40;== include tutorial_java.md ==&#41;
        // </code></pre>
        // You can reference `Java` page using Markdown reference link syntax:
        // `Java`.
        name?: string,
        // The Markdown content of the page. You can use <code>&#40;== include {path} ==&#41;</code>
        // to include content from a Markdown file.
        content?: string,
    }
    
    interface Status {
        // A list of messages that carry the error details.  There is a common set of
        // message types for APIs to use.
        details?: any[],        
        // The status code, which should be an enum value of google.rpc.Code.
        code?: number,
        // A developer-facing error message, which should be in English. Any
        // user-facing error message should be localized and sent in the
        // google.rpc.Status.details field, or localized by the client.
        message?: string,
    }
    
    interface Binding {
        // The condition that is associated with this binding.
        // NOTE: an unsatisfied condition will not allow user access via current
        // binding. Different bindings, including their conditions, are examined
        // independently.
        // This field is GOOGLE_INTERNAL.
        condition?: Expr,
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
    
    interface AuthProvider {
        // The list of JWT
        // [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3).
        // that are allowed to access. A JWT containing any of these audiences will
        // be accepted. When this setting is absent, only JWTs with audience
        // "https://Service_name/API_name"
        // will be accepted. For example, if no audiences are in the setting,
        // LibraryService API will only accept JWTs with the following audience
        // "https://library-example.googleapis.com/google.example.library.v1.LibraryService".
        // 
        // Example:
        // 
        //     audiences: bookstore_android.apps.googleusercontent.com,
        //                bookstore_web.apps.googleusercontent.com
        audiences?: string,
        // Identifies the principal that issued the JWT. See
        // https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.1
        // Usually a URL or an email address.
        // 
        // Example: https://securetoken.google.com
        // Example: 1234567-compute@developer.gserviceaccount.com
        issuer?: string,
        // The unique identifier of the auth provider. It will be referred to by
        // `AuthRequirement.provider_id`.
        // 
        // Example: "bookstore_auth".
        id?: string,
        // URL of the provider's public key set to validate signature of the JWT. See
        // [OpenID Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
        // Optional if the key set document:
        //  - can be retrieved from
        //    [OpenID Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html
        //    of the issuer.
        //  - can be inferred from the email domain of the issuer (e.g. a Google service account).
        // 
        // Example: https://www.googleapis.com/oauth2/v1/certs
        jwksUri?: string,
    }
    
    interface EnumValue {
        // Enum value name.
        name?: string,
        // Protocol buffer options.
        options?: Option[],        
        // Enum value number.
        number?: number,
    }
    
    interface Service {
        // Output only. The source information for this configuration if available.
        sourceInfo?: SourceInfo,
        // HTTP configuration.
        http?: Http,
        // API backend configuration.
        backend?: Backend,
        // System parameter configuration.
        systemParameters?: SystemParameters,
        // Additional API documentation.
        documentation?: Documentation,
        // Logging configuration.
        logging?: Logging,
        // Defines the monitored resources used by this service. This is required
        // by the Service.monitoring and Service.logging configurations.
        monitoredResources?: MonitoredResourceDescriptor[],        
        // Context configuration.
        context?: Context,
        // A list of all enum types included in this API service.  Enums
        // referenced directly or indirectly by the `apis` are automatically
        // included.  Enums which are not referenced but shall be included
        // should be listed here by name. Example:
        // 
        //     enums:
        //     - name: google.someapi.v1.SomeEnum
        enums?: Enum[],        
        // A unique ID for a specific instance of this message, typically assigned
        // by the client for tracking purpose. If empty, the server may choose to
        // generate one instead.
        id?: string,
        // Configuration controlling usage of this service.
        usage?: Usage,
        // Defines the metrics used by this service.
        metrics?: MetricDescriptor[],        
        // Auth configuration.
        authentication?: Authentication,
        // Experimental configuration.
        experimental?: Experimental,
        // Configuration for the service control plane.
        control?: Control,
        // The version of the service configuration. The config version may
        // influence interpretation of the configuration, for example, to
        // determine defaults. This is documented together with applicable
        // options. The current default for the config version itself is `3`.
        configVersion?: number,
        // Monitoring configuration.
        monitoring?: Monitoring,
        // The Google project that owns this service.
        producerProjectId?: string,
        // A list of all proto message types included in this API service.
        // It serves similar purpose as [google.api.Service.types], except that
        // these types are not needed by user-defined APIs. Therefore, they will not
        // show up in the generated discovery doc. This field should only be used
        // to define system APIs in ESF.
        systemTypes?: Type[],        
        // API visibility configuration.
        visibility?: Visibility,
        // Quota configuration.
        quota?: Quota,
        // The DNS address at which this service is available,
        // e.g. `calendar.googleapis.com`.
        name?: string,
        // Custom error configuration.
        customError?: CustomError,
        // The product title for this service.
        title?: string,
        // Configuration for network endpoints.  If this is empty, then an endpoint
        // with the same name as the service is automatically generated to service all
        // defined APIs.
        endpoints?: Endpoint[],        
        // Defines the logs used by this service.
        logs?: LogDescriptor[],        
        // A list of API interfaces exported by this service. Only the `name` field
        // of the google.protobuf.Api needs to be provided by the configuration
        // author, as the remaining fields will be derived from the IDL during the
        // normalization process. It is an error to specify an API interface here
        // which cannot be resolved against the associated IDL files.
        apis?: Api[],        
        // A list of all proto message types included in this API service.
        // Types referenced directly or indirectly by the `apis` are
        // automatically included.  Messages which are not referenced but
        // shall be included, such as types used by the `google.protobuf.Any` type,
        // should be listed here by name. Example:
        // 
        //     types:
        //     - name: google.protobuf.Int32
        types?: Type[],        
    }
    
    interface ListOperationsResponse {
        // A list of operations that matches the specified filter in the request.
        operations?: Operation[],        
        // The standard List next-page token.
        nextPageToken?: string,
    }
    
    interface OperationMetadata {
        // Detailed status information for each step. The order is undetermined.
        steps?: Step[],        
        // The full name of the resources that this operation is directly
        // associated with.
        resourceNames?: string[],        
        // Percentage of completion of this operation, ranging from 0 to 100.
        progressPercentage?: number,
        // The start time of the operation.
        startTime?: string,
    }
    
    interface CustomHttpPattern {
        // The name of this custom HTTP verb.
        kind?: string,
        // The path matched by this custom verb.
        path?: string,
    }
    
    interface SystemParameterRule {
        // Selects the methods to which this rule applies. Use '*' to indicate all
        // methods in all APIs.
        // 
        // Refer to selector for syntax details.
        selector?: string,
        // Define parameters. Multiple names may be defined for a parameter.
        // For a given method call, only one of them should be used. If multiple
        // names are used the behavior is implementation-dependent.
        // If none of the specified names are present the behavior is
        // parameter-dependent.
        parameters?: SystemParameter[],        
    }
    
    interface VisibilityRule {
        // A comma-separated list of visibility labels that apply to the `selector`.
        // Any of the listed labels can be used to grant the visibility.
        // 
        // If a rule has multiple labels, removing one of the labels but not all of
        // them can break clients.
        // 
        // Example:
        // 
        //     visibility:
        //       rules:
        //       - selector: google.calendar.Calendar.EnhancedSearch
        //         restriction: GOOGLE_INTERNAL, TRUSTED_TESTER
        // 
        // Removing GOOGLE_INTERNAL from this restriction will break clients that
        // rely on this method and only had access to it through GOOGLE_INTERNAL.
        restriction?: string,
        // Selects methods, messages, fields, enums, etc. to which this rule applies.
        // 
        // Refer to selector for syntax details.
        selector?: string,
    }
    
    interface HttpRule {
        // The custom pattern is used for specifying an HTTP method that is not
        // included in the `pattern` field, such as HEAD, or "*" to leave the
        // HTTP method unspecified for this rule. The wild-card rule is useful
        // for services that provide content to Web (HTML) clients.
        custom?: CustomHttpPattern,
        // Used for updating a resource.
        patch?: string,
        // Used for listing and getting information about resources.
        get?: string,
        // Used for updating a resource.
        put?: string,
        // Used for deleting a resource.
        delete?: string,
        // The name of the request field whose value is mapped to the HTTP body, or
        // `*` for mapping all fields not captured by the path pattern to the HTTP
        // body. NOTE: the referred field must not be a repeated field and must be
        // present at the top-level of request message type.
        body?: string,
        // Use this only for Scotty Requests. Do not use this for bytestream methods.
        // For media support, add instead [][google.bytestream.RestByteStream] as an
        // API to your configuration.
        mediaDownload?: MediaDownload,
        // Used for creating a resource.
        post?: string,
        // Optional. The rest method name is by default derived from the URL
        // pattern. If specified, this field overrides the default method name.
        // Example:
        // 
        //     rpc CreateResource(CreateResourceRequest)
        //         returns (CreateResourceResponse) {
        //       option (google.api.http) = {
        //         post: "/v1/resources",
        //         body: "resource",
        //         rest_method_name: "insert"
        //       };
        //     }
        // 
        // This method has the automatically derived rest method name "create", but
        //  for backwards compatability with apiary, it is specified as insert.
        restMethodName?: string,
        // Additional HTTP bindings for the selector. Nested bindings must
        // not contain an `additional_bindings` field themselves (that is,
        // the nesting may only be one level deep).
        additionalBindings?: HttpRule[],        
        // Optional. The REST collection name is by default derived from the URL
        // pattern. If specified, this field overrides the default collection name.
        // Example:
        // 
        //     rpc AddressesAggregatedList(AddressesAggregatedListRequest)
        //         returns (AddressesAggregatedListResponse) {
        //       option (google.api.http) = {
        //         get: "/v1/projects/{project_id}/aggregated/addresses"
        //         rest_collection: "projects.addresses"
        //       };
        //     }
        // 
        // This method has the automatically derived collection name
        // "projects.aggregated". Because, semantically, this rpc is actually an
        // operation on the "projects.addresses" collection, the `rest_collection`
        // field is configured to override the derived collection name.
        restCollection?: string,
        // The name of the response field whose value is mapped to the HTTP body of
        // response. Other response fields are ignored. This field is optional. When
        // not set, the response message will be used as HTTP body of response.
        // NOTE: the referred field must be not a repeated field and must be present
        // at the top-level of response message type.
        responseBody?: string,
        // Use this only for Scotty Requests. Do not use this for media support using
        // Bytestream, add instead
        // [][google.bytestream.RestByteStream] as an API to your
        // configuration for Bytestream methods.
        mediaUpload?: MediaUpload,
        // Selects methods to which this rule applies.
        // 
        // Refer to selector for syntax details.
        selector?: string,
    }
    
    interface MonitoringDestination {
        // Names of the metrics to report to this monitoring destination.
        // Each name must be defined in Service.metrics section.
        metrics?: string[],        
        // The monitored resource type. The type must be defined in
        // Service.monitored_resources section.
        monitoredResource?: string,
    }
    
    interface Visibility {
        // A list of visibility rules that apply to individual API elements.
        // 
        // **NOTE:** All service configuration rules follow "last one wins" order.
        rules?: VisibilityRule[],        
    }
    
    interface ConfigChange {
        // Value of the changed object in the new Service configuration,
        // in JSON format. This field will not be populated if ChangeType == REMOVED.
        newValue?: string,
        // The type for this change, either ADDED, REMOVED, or MODIFIED.
        changeType?: string,
        // Object hierarchy path to the change, with levels separated by a '.'
        // character. For repeated fields, an applicable unique identifier field is
        // used for the index (usually selector, name, or id). For maps, the term
        // 'key' is used. If the field has no unique identifier, the numeric index
        // is used.
        // Examples:
        // - visibility.rules[selector=="google.LibraryService.CreateBook"].restriction
        // - quota.metric_rules[selector=="google"].metric_costs[key=="reads"].value
        // - logging.producer_destinations[0]
        element?: string,
        // Collection of advice provided for this change, useful for determining the
        // possible impact of this change.
        advices?: Advice[],        
        // Value of the changed object in the old Service configuration,
        // in JSON format. This field will not be populated if ChangeType == ADDED.
        oldValue?: string,
    }
    
    interface SystemParameters {
        // Define system parameters.
        // 
        // The parameters defined here will override the default parameters
        // implemented by the system. If this field is missing from the service
        // config, default system parameters will be used. Default system parameters
        // and names is implementation-dependent.
        // 
        // Example: define api key for all methods
        // 
        //     system_parameters
        //       rules:
        //         - selector: "*"
        //           parameters:
        //             - name: api_key
        //               url_query_parameter: api_key
        // 
        // 
        // Example: define 2 api key names for a specific method.
        // 
        //     system_parameters
        //       rules:
        //         - selector: "/ListShelves"
        //           parameters:
        //             - name: api_key
        //               http_header: Api-Key1
        //             - name: api_key
        //               http_header: Api-Key2
        // 
        // **NOTE:** All service configuration rules follow "last one wins" order.
        rules?: SystemParameterRule[],        
    }
    
    interface Rollout {
        // The strategy associated with a rollout to delete a `ManagedService`.
        // Readonly.
        deleteServiceStrategy?: DeleteServiceStrategy,
        // Creation time of the rollout. Readonly.
        createTime?: string,
        // The status of this rollout. Readonly. In case of a failed rollout,
        // the system will automatically rollback to the current Rollout
        // version. Readonly.
        status?: string,
        // The name of the service associated with this Rollout.
        serviceName?: string,
        // Google Service Control selects service configurations based on
        // traffic percentage.
        trafficPercentStrategy?: TrafficPercentStrategy,
        // The user who created the Rollout. Readonly.
        createdBy?: string,
        // Optional unique identifier of this Rollout. Only lower case letters, digits
        //  and '-' are allowed.
        // 
        // If not specified by client, the server will generate one. The generated id
        // will have the form of <date><revision number>, where "date" is the create
        // date in ISO 8601 format.  "revision number" is a monotonically increasing
        // positive number that is reset every day for each service.
        // An example of the generated rollout_id is '2016-02-16r1'
        rolloutId?: string,
    }
    
    interface Quota {
        // List of `QuotaLimit` definitions for the service.
        limits?: QuotaLimit[],        
        // List of `MetricRule` definitions, each one mapping a selected method to one
        // or more metrics.
        metricRules?: MetricRule[],        
    }
    
    interface GenerateConfigReportRequest {
        // Service configuration against which the comparison will be done.
        // For this version of API, the supported types are
        // google.api.servicemanagement.v1.ConfigRef,
        // google.api.servicemanagement.v1.ConfigSource,
        // and google.api.Service
        oldConfig?: any,
        // Service configuration for which we want to generate the report.
        // For this version of API, the supported types are
        // google.api.servicemanagement.v1.ConfigRef,
        // google.api.servicemanagement.v1.ConfigSource,
        // and google.api.Service
        newConfig?: any,
    }
    
    interface SetIamPolicyRequest {
        // REQUIRED: The complete policy to be applied to the `resource`. The size of
        // the policy is limited to a few 10s of KB. An empty policy is a
        // valid policy but certain Cloud Platform services (such as Projects)
        // might reject them.
        policy?: Policy,
        // OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
        // the fields in the mask will be modified. If no mask is provided, the
        // following default mask is used:
        // paths: "bindings, etag"
        // This field is only used by Cloud IAM.
        updateMask?: string,
    }
    
    interface Step {
        // The status code.
        status?: string,
        // The short description of the step.
        description?: string,
    }
    
    interface DeleteServiceStrategy {
    }
    
    interface LoggingDestination {
        // Names of the logs to be sent to this destination. Each name must
        // be defined in the Service.logs section. If the log name is
        // not a domain scoped name, it will be automatically prefixed with
        // the service name followed by "/".
        logs?: string[],        
        // The monitored resource type. The type must be defined in the
        // Service.monitored_resources section.
        monitoredResource?: string,
    }
    
    interface Option {
        // The option's value packed in an Any message. If the value is a primitive,
        // the corresponding wrapper type defined in google/protobuf/wrappers.proto
        // should be used. If the value is an enum, it should be stored as an int32
        // value using the google.protobuf.Int32Value type.
        value?: any,
        // The option's name. For protobuf built-in options (options defined in
        // descriptor.proto), this is the short name. For example, `"map_entry"`.
        // For custom options, it should be the fully-qualified name. For example,
        // `"google.api.http"`.
        name?: string,
    }
    
    interface Logging {
        // Logging configurations for sending logs to the consumer project.
        // There can be multiple consumer destinations, each one must have a
        // different monitored resource type. A log can be used in at most
        // one consumer destination.
        consumerDestinations?: LoggingDestination[],        
        // Logging configurations for sending logs to the producer project.
        // There can be multiple producer destinations, each one must have a
        // different monitored resource type. A log can be used in at most
        // one producer destination.
        producerDestinations?: LoggingDestination[],        
    }
    
    interface Method {
        // If true, the response is streamed.
        responseStreaming?: boolean,
        // The simple name of this method.
        name?: string,
        // A URL of the input message type.
        requestTypeUrl?: string,
        // If true, the request is streamed.
        requestStreaming?: boolean,
        // The source syntax of this method.
        syntax?: string,
        // The URL of the output message type.
        responseTypeUrl?: string,
        // Any metadata attached to the method.
        options?: Option[],        
    }
    
    interface QuotaLimit {
        // Maximum number of tokens that can be consumed during the specified
        // duration. Client application developers can override the default limit up
        // to this maximum. If specified, this value cannot be set to a value less
        // than the default limit. If not specified, it is set to the default limit.
        // 
        // To allow clients to apply overrides with no upper bound, set this to -1,
        // indicating unlimited maximum quota.
        // 
        // Used by group-based quotas only.
        maxLimit?: string,
        // Name of the quota limit. The name is used to refer to the limit when
        // overriding the default limit on per-consumer basis.
        // 
        // For metric-based quota limits, the name must be provided, and it must be
        // unique within the service. The name can only include alphanumeric
        // characters as well as '-'.
        // 
        // The maximum length of the limit name is 64 characters.
        // 
        // The name of a limit is used as a unique identifier for this limit.
        // Therefore, once a limit has been put into use, its name should be
        // immutable. You can use the display_name field to provide a user-friendly
        // name for the limit. The display name can be evolved over time without
        // affecting the identity of the limit.
        name?: string,
        // Duration of this limit in textual notation. Example: "100s", "24h", "1d".
        // For duration longer than a day, only multiple of days is supported. We
        // support only "100s" and "1d" for now. Additional support will be added in
        // the future. "0" indicates indefinite duration.
        // 
        // Used by group-based quotas only.
        duration?: string,
        // Free tier value displayed in the Developers Console for this limit.
        // The free tier is the number of tokens that will be subtracted from the
        // billed amount when billing is enabled.
        // This field can only be set on a limit with duration "1d", in a billable
        // group; it is invalid on any other limit. If this field is not set, it
        // defaults to 0, indicating that there is no free tier for this service.
        // 
        // Used by group-based quotas only.
        freeTier?: string,
        // Default number of tokens that can be consumed during the specified
        // duration. This is the number of tokens assigned when a client
        // application developer activates the service for his/her project.
        // 
        // Specifying a value of 0 will block all requests. This can be used if you
        // are provisioning quota to selected consumers and blocking others.
        // Similarly, a value of -1 will indicate an unlimited quota. No other
        // negative values are allowed.
        // 
        // Used by group-based quotas only.
        defaultLimit?: string,
        // Optional. User-visible, extended description for this quota limit.
        // Should be used only when more context is needed to understand this limit
        // than provided by the limit's display name (see: `display_name`).
        description?: string,
        // The name of the metric this quota limit applies to. The quota limits with
        // the same metric will be checked together during runtime. The metric must be
        // defined within the service config.
        // 
        // Used by metric-based quotas only.
        metric?: string,
        // User-visible display name for this limit.
        // Optional. If not set, the UI will provide a default display name based on
        // the quota configuration. This field can be used to override the default
        // display name generated from the configuration.
        displayName?: string,
        // Tiered limit values, currently only STANDARD is supported.
        values?: any,
        // Specify the unit of the quota limit. It uses the same syntax as
        // Metric.unit. The supported unit kinds are determined by the quota
        // backend system.
        // 
        // The [Google Service Control](https://cloud.google.com/service-control)
        // supports the following unit components:
        // * One of the time intevals:
        //   * "/min"  for quota every minute.
        //   * "/d"  for quota every 24 hours, starting 00:00 US Pacific Time.
        //   * Otherwise the quota won't be reset by time, such as storage limit.
        // * One and only one of the granted containers:
        //   * "/{project}" quota for a project
        // 
        // Here are some examples:
        // * "1/min/{project}" for quota per minute per project.
        // 
        // Note: the order of unit components is insignificant.
        // The "1" at the beginning is required to follow the metric unit syntax.
        // 
        // Used by metric-based quotas only.
        unit?: string,
    }
    
    interface ConfigRef {
        // Resource name of a service config. It must have the following
        // format: "services/{service name}/configs/{config id}".
        name?: string,
    }
    
    interface ListServiceRolloutsResponse {
        // The list of rollout resources.
        rollouts?: Rollout[],        
        // The token of the next page of results.
        nextPageToken?: string,
    }
    
    interface Mixin {
        // If non-empty specifies a path under which inherited HTTP paths
        // are rooted.
        root?: string,
        // The fully qualified name of the API which is included.
        name?: string,
    }
    
    interface FlowOperationMetadata {
        // Deadline for the flow to complete, to prevent orphaned Operations.
        // 
        // If the flow has not completed by this time, it may be terminated by
        // the engine, or force-failed by Operation lookup.
        // 
        // Note that this is not a hard deadline after which the Flow will
        // definitely be failed, rather it is a deadline after which it is reasonable
        // to suspect a problem and other parts of the system may kill operation
        // to ensure we don't have orphans.
        // see also: go/prevent-orphaned-operations
        deadline?: string,
        // The state of the operation with respect to cancellation.
        cancelState?: string,
        // The start time of the operation.
        startTime?: string,
        // The full name of the resources that this flow is directly associated with.
        resourceNames?: string[],        
        // The name of the top-level flow corresponding to this operation.
        // Must be equal to the "name" field for a FlowName enum.
        flowName?: string,
    }
    
    interface CustomError {
        // The list of custom error detail types, e.g. 'google.foo.v1.CustomError'.
        types?: string[],        
        // The list of custom error rules that apply to individual API messages.
        // 
        // **NOTE:** All service configuration rules follow "last one wins" order.
        rules?: CustomErrorRule[],        
    }
    
    interface CounterOptions {
        // The field value to attribute.
        field?: string,
        // The metric to update.
        metric?: string,
    }
    
    interface Http {
        // When set to true, URL path parmeters will be fully URI-decoded except in
        // cases of single segment matches in reserved expansion, where "%2F" will be
        // left encoded.
        // 
        // The default behavior is to not decode RFC 6570 reserved characters in multi
        // segment matches.
        fullyDecodeReservedExpansion?: boolean,
        // A list of HTTP configuration rules that apply to individual API methods.
        // 
        // **NOTE:** All service configuration rules follow "last one wins" order.
        rules?: HttpRule[],        
    }
    
    interface SourceInfo {
        // All files used during config generation.
        sourceFiles?: any[],        
    }
    
    interface OperationsResource {
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
        }) : gapi.client.Request<Operation>;        
        
        // Lists service operations that match the specified filter in the request.
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
            // A string for filtering Operations.
            //   The following filter fields are supported&#58;
            // 
            //   * serviceName&#58; Required. Only `=` operator is allowed.
            //   * startTime&#58; The time this job was started, in ISO 8601 format.
            //     Allowed operators are `>=`,  `>`, `<=`, and `<`.
            //   * status&#58; Can be `done`, `in_progress`, or `failed`. Allowed
            //     operators are `=`, and `!=`.
            // 
            //   Filter expression supports conjunction (AND) and disjunction (OR)
            //   logical operators. However, the serviceName restriction must be at the
            //   top-level and can only be combined with other restrictions via the AND
            //   logical operator.
            // 
            //   Examples&#58;
            // 
            //   * `serviceName={some-service}.googleapis.com`
            //   * `serviceName={some-service}.googleapis.com AND startTime>="2017-02-01"`
            //   * `serviceName={some-service}.googleapis.com AND status=done`
            //   * `serviceName={some-service}.googleapis.com AND (status=done OR startTime>="2017-02-01")`
            filter?: string,
            // The standard list page token.
            pageToken?: string,
            // Not used.
            name?: string,
            // The maximum number of operations to return. If unspecified, defaults to
            // 50. The maximum value is 100.
            pageSize?: number,
        }) : gapi.client.Request<ListOperationsResponse>;        
        
    }
    
    
    interface RolloutsResource {
        // Gets a service configuration rollout.
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
            // The name of the service.  See the [overview](/service-management/overview)
            // for naming requirements.  For example: `example.googleapis.com`.
            serviceName: string,
            // The id of the rollout resource.
            rolloutId: string,
        }) : gapi.client.Request<Rollout>;        
        
        // Lists the history of the service configuration rollouts for a managed
        // service, from the newest to the oldest.
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
            // The max number of items to include in the response list.
            pageSize?: number,
            // Use `filter` to return subset of rollouts.
            // The following filters are supported:
            //   -- To limit the results to only those in
            //      [status](google.api.servicemanagement.v1.RolloutStatus) 'SUCCESS',
            //      use filter='status=SUCCESS'
            //   -- To limit the results to those in
            //      [status](google.api.servicemanagement.v1.RolloutStatus) 'CANCELLED'
            //      or 'FAILED', use filter='status=CANCELLED OR status=FAILED'
            filter?: string,
            // The name of the service.  See the [overview](/service-management/overview)
            // for naming requirements.  For example: `example.googleapis.com`.
            serviceName: string,
            // The token of the page to retrieve.
            pageToken?: string,
        }) : gapi.client.Request<ListServiceRolloutsResponse>;        
        
        // Creates a new service configuration rollout. Based on rollout, the
        // Google Service Management will roll out the service configurations to
        // different backend services. For example, the logging configuration will be
        // pushed to Google Cloud Logging.
        // 
        // Please note that any previous pending and running Rollouts and associated
        // Operations will be automatically cancelled so that the latest Rollout will
        // not be blocked by previous Rollouts.
        // 
        // Operation<response: Rollout>
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
            // The name of the service.  See the [overview](/service-management/overview)
            // for naming requirements.  For example: `example.googleapis.com`.
            serviceName: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface ConfigsResource {
        // Gets a service configuration (version) for a managed service.
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
            // Specifies which parts of the Service Config should be returned in the
            // response.
            view?: string,
            // The name of the service.  See the [overview](/service-management/overview)
            // for naming requirements.  For example: `example.googleapis.com`.
            serviceName: string,
            // The id of the service configuration resource.
            configId: string,
        }) : gapi.client.Request<Service>;        
        
        // Lists the history of the service configuration for a managed service,
        // from the newest to the oldest.
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
            // The max number of items to include in the response list.
            pageSize?: number,
            // The name of the service.  See the [overview](/service-management/overview)
            // for naming requirements.  For example: `example.googleapis.com`.
            serviceName: string,
            // The token of the page to retrieve.
            pageToken?: string,
        }) : gapi.client.Request<ListServiceConfigsResponse>;        
        
        // Creates a new service configuration (version) for a managed service.
        // This method only stores the service configuration. To roll out the service
        // configuration to backend systems please call
        // CreateServiceRollout.
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
            // The name of the service.  See the [overview](/service-management/overview)
            // for naming requirements.  For example: `example.googleapis.com`.
            serviceName: string,
        }) : gapi.client.Request<Service>;        
        
        // Creates a new service configuration (version) for a managed service based
        // on
        // user-supplied configuration source files (for example: OpenAPI
        // Specification). This method stores the source configurations as well as the
        // generated service configuration. To rollout the service configuration to
        // other services,
        // please call CreateServiceRollout.
        // 
        // Operation<response: SubmitConfigSourceResponse>
        submit (request: {        
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
            // The name of the service.  See the [overview](/service-management/overview)
            // for naming requirements.  For example: `example.googleapis.com`.
            serviceName: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface ConsumersResource {
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
        }) : gapi.client.Request<Policy>;        
        
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
        }) : gapi.client.Request<TestIamPermissionsResponse>;        
        
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
        }) : gapi.client.Request<Policy>;        
        
    }
    
    
    interface ServicesResource {
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
        }) : gapi.client.Request<TestIamPermissionsResponse>;        
        
        // Gets a service configuration (version) for a managed service.
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
            // Specifies which parts of the Service Config should be returned in the
            // response.
            view?: string,
            // The name of the service.  See the [overview](/service-management/overview)
            // for naming requirements.  For example: `example.googleapis.com`.
            serviceName: string,
            // The id of the service configuration resource.
            configId?: string,
        }) : gapi.client.Request<Service>;        
        
        // Deletes a managed service. This method will change the service to the
        // `Soft-Delete` state for 30 days. Within this period, service producers may
        // call UndeleteService to restore the service.
        // After 30 days, the service will be permanently deleted.
        // 
        // Operation<response: google.protobuf.Empty>
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
            // The name of the service.  See the [overview](/service-management/overview)
            // for naming requirements.  For example: `example.googleapis.com`.
            serviceName: string,
        }) : gapi.client.Request<Operation>;        
        
        // Enables a service for a project, so it can be used
        // for the project. See
        // [Cloud Auth Guide](https://cloud.google.com/docs/authentication) for
        // more information.
        // 
        // Operation<response: EnableServiceResponse>
        enable (request: {        
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
            // Name of the service to enable. Specifying an unknown service name will
            // cause the request to fail.
            serviceName: string,
        }) : gapi.client.Request<Operation>;        
        
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
        }) : gapi.client.Request<Policy>;        
        
        // Disables a service for a project, so it can no longer be
        // be used for the project. It prevents accidental usage that may cause
        // unexpected billing charges or security leaks.
        // 
        // Operation<response: DisableServiceResponse>
        disable (request: {        
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
            // Name of the service to disable. Specifying an unknown service name
            // will cause the request to fail.
            serviceName: string,
        }) : gapi.client.Request<Operation>;        
        
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
        }) : gapi.client.Request<Policy>;        
        
        // Revives a previously deleted managed service. The method restores the
        // service using the configuration at the time the service was deleted.
        // The target service must exist and must have been deleted within the
        // last 30 days.
        // 
        // Operation<response: UndeleteServiceResponse>
        undelete (request: {        
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
            // The name of the service. See the [overview](/service-management/overview)
            // for naming requirements. For example: `example.googleapis.com`.
            serviceName: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists managed services.
        // 
        // Returns all public services. For authenticated users, also returns all
        // services the calling user has "servicemanagement.services.get" permission
        // for.
        // 
        // **BETA:** If the caller specifies the `consumer_id`, it returns only the
        // services enabled on the consumer. The `consumer_id` must have the format
        // of "project:{PROJECT-ID}".
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
            // Requested size of the next page of data.
            pageSize?: number,
            // Include services produced by the specified project.
            producerProjectId?: string,
            // Include services consumed by the specified consumer.
            // 
            // The Google Service Management implementation accepts the following
            // forms:
            // - project:<project_id>
            consumerId?: string,
            // Token identifying which result to start with; returned by a previous list
            // call.
            pageToken?: string,
        }) : gapi.client.Request<ListServicesResponse>;        
        
        // Creates a new managed service.
        // Please note one producer project can own no more than 20 services.
        // 
        // Operation<response: ManagedService>
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
        }) : gapi.client.Request<Operation>;        
        
        // Generates and returns a report (errors, warnings and changes from
        // existing configurations) associated with
        // GenerateConfigReportRequest.new_value
        // 
        // If GenerateConfigReportRequest.old_value is specified,
        // GenerateConfigReportRequest will contain a single ChangeReport based on the
        // comparison between GenerateConfigReportRequest.new_value and
        // GenerateConfigReportRequest.old_value.
        // If GenerateConfigReportRequest.old_value is not specified, this method
        // will compare GenerateConfigReportRequest.new_value with the last pushed
        // service configuration.
        generateConfigReport (request: {        
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
        }) : gapi.client.Request<GenerateConfigReportResponse>;        
        
        // Gets a managed service. Authentication is required unless the service is
        // public.
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
            // The name of the service.  See the `ServiceManager` overview for naming
            // requirements.  For example: `example.googleapis.com`.
            serviceName: string,
        }) : gapi.client.Request<ManagedService>;        
        
        rollouts: RolloutsResource,
        configs: ConfigsResource,
        consumers: ConsumersResource,
    }
    
}

declare module gapi.client.servicemanagement {
    var operations: gapi.client.servicemanagement.OperationsResource; 
    
    var services: gapi.client.servicemanagement.ServicesResource; 
    
}
