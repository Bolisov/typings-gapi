// Type definitions for Google Cloud SQL Administration API v1beta3
// Project: https://cloud.google.com/sql/docs/reference/latest
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.sqladmin {
    
    interface BackupConfiguration {
        // Whether binary log is enabled. If backup configuration is disabled, binary log must be disabled as well.
        binaryLogEnabled?: boolean,
        // Whether this configuration is enabled.
        enabled?: boolean,
        // Identifier for this configuration. This gets generated automatically when a backup configuration is created.
        id?: string,
        // This is always sql#backupConfiguration.
        kind?: string,
        // Start time for the daily backup configuration in UTC timezone in the 24 hour format - HH:MM.
        startTime?: string,
    }
    
    interface BackupRun {
        // Backup Configuration identifier.
        backupConfiguration?: string,
        // The due time of this run in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
        dueTime?: string,
        // The time the backup operation completed in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
        endTime?: string,
        // The time the run was enqueued in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
        enqueuedTime?: string,
        // Information about why the backup operation failed. This is only present if the run has the FAILED status.
        error?: OperationError,
        // Name of the database instance.
        instance?: string,
        // This is always sql#backupRun.
        kind?: string,
        // The time the backup operation actually started in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
        startTime?: string,
        // The status of this run.
        status?: string,
    }
    
    interface BackupRunsListResponse {
        // A list of backup runs in reverse chronological order of the enqueued time.
        items?: BackupRun[],        
        // This is always sql#backupRunsList.
        kind?: string,
        // The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
        nextPageToken?: string,
    }
    
    interface BinLogCoordinates {
        // Name of the binary log file for a Cloud SQL instance.
        binLogFileName?: string,
        // Position (offset) within the binary log file.
        binLogPosition?: string,
        // This is always sql#binLogCoordinates.
        kind?: string,
    }
    
    interface CloneContext {
        // Binary log coordinates, if specified, indentify the position up to which the source instance should be cloned. If not specified, the source instance is cloned up to the most recent binary log coordinates.
        binLogCoordinates?: BinLogCoordinates,
        // Name of the Cloud SQL instance to be created as a clone.
        destinationInstanceName?: string,
        // This is always sql#cloneContext.
        kind?: string,
        // Name of the Cloud SQL instance to be cloned.
        sourceInstanceName?: string,
    }
    
    interface DatabaseFlags {
        // The name of the flag. These flags are passed at instance startup, so include both MySQL server options and MySQL system variables. Flags should be specified with underscores, not hyphens. For more information, see Configuring MySQL Flags in the Google Cloud SQL documentation, as well as the official MySQL documentation for server options and system variables.
        name?: string,
        // The value of the flag. Booleans should be set to on for true and off for false. This field must be omitted if the flag doesn't take a value.
        value?: string,
    }
    
    interface DatabaseInstance {
        // Connection name of the Cloud SQL instance used in connection strings.
        connectionName?: string,
        // The current disk usage of the instance in bytes.
        currentDiskSize?: string,
        // The database engine type and version. Can be MYSQL_5_5 or MYSQL_5_6. Defaults to MYSQL_5_5. The databaseVersion cannot be changed after instance creation.
        databaseVersion?: string,
        // HTTP 1.1 Entity tag for the resource.
        etag?: string,
        // Name of the Cloud SQL instance. This does not include the project ID.
        instance?: string,
        // The instance type. This can be one of the following.
        // CLOUD_SQL_INSTANCE: Regular Cloud SQL instance.
        // READ_REPLICA_INSTANCE: Cloud SQL instance acting as a read-replica.
        instanceType?: string,
        // The assigned IP addresses for the instance.
        ipAddresses?: IpMapping[],        
        // The IPv6 address assigned to the instance.
        ipv6Address?: string,
        // This is always sql#instance.
        kind?: string,
        // The name of the instance which will act as master in the replication setup.
        masterInstanceName?: string,
        // The maximum disk size of the instance in bytes.
        maxDiskSize?: string,
        // The project ID of the project containing the Cloud SQL instance. The Google apps domain is prefixed if applicable.
        project?: string,
        // The geographical region. Can be us-central, asia-east1 or europe-west1. Defaults to us-central. The region can not be changed after instance creation.
        region?: string,
        // The replicas of the instance.
        replicaNames?: string[],        
        // SSL configuration.
        serverCaCert?: SslCert,
        // The service account email address assigned to the instance.
        serviceAccountEmailAddress?: string,
        // The user settings.
        settings?: Settings,
        // The current serving state of the Cloud SQL instance. This can be one of the following.
        // RUNNABLE: The instance is running, or is ready to run when accessed.
        // SUSPENDED: The instance is not available, for example due to problems with billing.
        // PENDING_CREATE: The instance is being created.
        // MAINTENANCE: The instance is down for maintenance.
        // UNKNOWN_STATE: The state of the instance is unknown.
        state?: string,
    }
    
    interface ExportContext {
        // Databases (for example, guestbook) from which the export is made. If unspecified, all databases are exported.
        database?: string[],        
        // This is always sql#exportContext.
        kind?: string,
        // Tables to export, or that were exported, from the specified database. If you specify tables, specify one and only one database.
        table?: string[],        
        // The path to the file in Google Cloud Storage where the export will be stored, or where it was already stored. The URI is in the form gs://bucketName/fileName. If the file already exists, the operation fails. If the filename ends with .gz, the contents are compressed.
        uri?: string,
    }
    
    interface Flag {
        // For STRING flags, a list of strings that the value can be set to.
        allowedStringValues?: string[],        
        // The database version this flag applies to. Currently this can only be [MYSQL_5_5].
        appliesTo?: string[],        
        // This is always sql#flag.
        kind?: string,
        // For INTEGER flags, the maximum allowed value.
        maxValue?: string,
        // For INTEGER flags, the minimum allowed value.
        minValue?: string,
        // This is the name of the flag. Flag names always use underscores, not hyphens, e.g. max_allowed_packet
        name?: string,
        // The type of the flag. Flags are typed to being BOOLEAN, STRING, INTEGER or NONE. NONE is used for flags which do not take a value, such as skip_grant_tables.
        type?: string,
    }
    
    interface FlagsListResponse {
        // List of flags.
        items?: Flag[],        
        // This is always sql#flagsList.
        kind?: string,
    }
    
    interface ImportContext {
        // The database (for example, guestbook) to which the import is made. If not set, it is assumed that the database is specified in the file to be imported.
        database?: string,
        // This is always sql#importContext.
        kind?: string,
        // A path to the MySQL dump file in Google Cloud Storage from which the import is made. The URI is in the form gs://bucketName/fileName. Compressed gzip files (.gz) are also supported.
        uri?: string[],        
    }
    
    interface InstanceOperation {
        // The time this operation finished in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
        endTime?: string,
        // The time this operation was enqueued in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
        enqueuedTime?: string,
        // The error(s) encountered by this operation. Only set if the operation results in an error.
        error?: OperationError[],        
        // The context for export operation, if applicable.
        exportContext?: ExportContext,
        // The context for import operation, if applicable.
        importContext?: ImportContext,
        // Name of the database instance.
        instance?: string,
        // This is always sql#instanceOperation.
        kind?: string,
        // An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.
        operation?: string,
        // The type of the operation. Valid values are CREATE, DELETE, UPDATE, RESTART, IMPORT, EXPORT, BACKUP_VOLUME, RESTORE_VOLUME.
        operationType?: string,
        // The time this operation actually started in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
        startTime?: string,
        // The state of an operation. Valid values are PENDING, RUNNING, DONE, UNKNOWN.
        state?: string,
        // The email address of the user who initiated this operation.
        userEmailAddress?: string,
    }
    
    interface InstanceSetRootPasswordRequest {
        // Set Root Password Context.
        setRootPasswordContext?: SetRootPasswordContext,
    }
    
    interface InstancesCloneRequest {
        // Contains details about the clone operation.
        cloneContext?: CloneContext,
    }
    
    interface InstancesCloneResponse {
        // This is always sql#instancesClone.
        kind?: string,
        // An unique identifier for the operation associated with the cloned instance. You can use this identifier to retrieve the Operations resource, which has information about the operation.
        operation?: string,
    }
    
    interface InstancesDeleteResponse {
        // This is always sql#instancesDelete.
        kind?: string,
        // An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.
        operation?: string,
    }
    
    interface InstancesExportRequest {
        // Contains details about the export operation.
        exportContext?: ExportContext,
    }
    
    interface InstancesExportResponse {
        // This is always sql#instancesExport.
        kind?: string,
        // An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.
        operation?: string,
    }
    
    interface InstancesImportRequest {
        // Contains details about the import operation.
        importContext?: ImportContext,
    }
    
    interface InstancesImportResponse {
        // This is always sql#instancesImport.
        kind?: string,
        // An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.
        operation?: string,
    }
    
    interface InstancesInsertResponse {
        // This is always sql#instancesInsert.
        kind?: string,
        // An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.
        operation?: string,
    }
    
    interface InstancesListResponse {
        // List of database instance resources.
        items?: DatabaseInstance[],        
        // This is always sql#instancesList.
        kind?: string,
        // The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
        nextPageToken?: string,
    }
    
    interface InstancesPromoteReplicaResponse {
        // This is always sql#instancesPromoteReplica.
        kind?: string,
        // An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.
        operation?: string,
    }
    
    interface InstancesResetSslConfigResponse {
        // This is always sql#instancesResetSslConfig.
        kind?: string,
        // An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation. All ssl client certificates will be deleted and a new server certificate will be created. Does not take effect until the next instance restart.
        operation?: string,
    }
    
    interface InstancesRestartResponse {
        // This is always sql#instancesRestart.
        kind?: string,
        // An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.
        operation?: string,
    }
    
    interface InstancesRestoreBackupResponse {
        // This is always sql#instancesRestoreBackup.
        kind?: string,
        // An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.
        operation?: string,
    }
    
    interface InstancesSetRootPasswordResponse {
        // This is always sql#instancesSetRootPassword.
        kind?: string,
        // An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.
        operation?: string,
    }
    
    interface InstancesUpdateResponse {
        // This is always sql#instancesUpdate.
        kind?: string,
        // An identifier that uniquely identifies the operation. You can use this identifier to retrieve information about the operation.
        operation?: string,
    }
    
    interface IpConfiguration {
        // The list of external networks that are allowed to connect to the instance using the IP. In CIDR notation, also known as 'slash' notation (e.g. 192.168.100.0/24).
        authorizedNetworks?: string[],        
        // Whether the instance should be assigned an IP address or not.
        enabled?: boolean,
        // This is always sql#ipConfiguration.
        kind?: string,
        // Whether the mysqld should default to 'REQUIRE X509' for users connecting over IP.
        requireSsl?: boolean,
    }
    
    interface IpMapping {
        // The IP address assigned.
        ipAddress?: string,
        // The due time for this IP to be retired in RFC 3339 format, for example 2012-11-15T16:19:00.094Z. This field is only available when the IP is scheduled to be retired.
        timeToRetire?: string,
    }
    
    interface LocationPreference {
        // The App Engine application to follow, it must be in the same region as the Cloud SQL instance.
        followGaeApplication?: string,
        // This is always sql#locationPreference.
        kind?: string,
        // The preferred Compute Engine zone (e.g. us-centra1-a, us-central1-b, etc.).
        zone?: string,
    }
    
    interface OperationError {
        // Identifies the specific error that occurred.
        code?: string,
        // This is always sql#operationError.
        kind?: string,
    }
    
    interface OperationsListResponse {
        // List of operation resources.
        items?: InstanceOperation[],        
        // This is always sql#operationsList.
        kind?: string,
        // The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
        nextPageToken?: string,
    }
    
    interface SetRootPasswordContext {
        // This is always sql#setRootUserContext.
        kind?: string,
        // The password for the root user.
        password?: string,
    }
    
    interface Settings {
        // The activation policy for this instance. This specifies when the instance should be activated and is applicable only when the instance state is RUNNABLE. This can be one of the following.
        // ALWAYS: The instance should always be active.
        // NEVER: The instance should never be activated.
        // ON_DEMAND: The instance is activated upon receiving requests.
        activationPolicy?: string,
        // The App Engine app IDs that can access this instance.
        authorizedGaeApplications?: string[],        
        // The daily backup configuration for the instance.
        backupConfiguration?: BackupConfiguration[],        
        // The database flags passed to the instance at startup.
        databaseFlags?: DatabaseFlags[],        
        // Configuration specific to read replica instance. Indicates whether replication is enabled or not.
        databaseReplicationEnabled?: boolean,
        // The settings for IP Management. This allows to enable or disable the instance IP and manage which external networks can connect to the instance.
        ipConfiguration?: IpConfiguration,
        // This is always sql#settings.
        kind?: string,
        // The location preference settings. This allows the instance to be located as near as possible to either an App Engine app or GCE zone for better performance.
        locationPreference?: LocationPreference,
        // The pricing plan for this instance. This can be either PER_USE or PACKAGE.
        pricingPlan?: string,
        // The type of replication this instance uses. This can be either ASYNCHRONOUS or SYNCHRONOUS.
        replicationType?: string,
        // The version of instance settings. This is a required field for update method to make sure concurrent updates are handled properly. During update, use the most recent settingsVersion value for this instance and do not try to update this value.
        settingsVersion?: string,
        // The tier of service for this instance, for example D1, D2. For more information, see pricing.
        tier?: string,
    }
    
    interface SslCert {
        // PEM representation.
        cert?: string,
        // Serial number, as extracted from the certificate.
        certSerialNumber?: string,
        // User supplied name. Constrained to [a-zA-Z.-_ ]+.
        commonName?: string,
        // Time when the certificate was created.
        createTime?: string,
        // Time when the certificate expires.
        expirationTime?: string,
        // Name of the database instance.
        instance?: string,
        // This is always sql#sslCert.
        kind?: string,
        // Sha1 Fingerprint.
        sha1Fingerprint?: string,
    }
    
    interface SslCertDetail {
        // The public information about the cert.
        certInfo?: SslCert,
        // The private key for the client cert, in pem format. Keep private in order to protect your security.
        certPrivateKey?: string,
    }
    
    interface SslCertsDeleteResponse {
        // This is always sql#sslCertsDelete.
        kind?: string,
        // An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.
        operation?: string,
    }
    
    interface SslCertsInsertRequest {
        // User supplied name. Must be a distinct name from the other certificates for this instance. New certificates will not be usable until the instance is restarted.
        commonName?: string,
    }
    
    interface SslCertsInsertResponse {
        // The new client certificate and private key. The new certificate will not work until the instance is restarted.
        clientCert?: SslCertDetail,
        // This is always sql#sslCertsInsert.
        kind?: string,
        // The server Certificate Authority's certificate. If this is missing you can force a new one to be generated by calling resetSslConfig method on instances resource..
        serverCaCert?: SslCert,
    }
    
    interface SslCertsListResponse {
        // List of client certificates for the instance.
        items?: SslCert[],        
        // This is always sql#sslCertsList.
        kind?: string,
    }
    
    interface Tier {
        // The maximum disk size of this tier in bytes.
        DiskQuota?: string,
        // The maximum RAM usage of this tier in bytes.
        RAM?: string,
        // This is always sql#tier.
        kind?: string,
        // The applicable regions for this tier.
        region?: string[],        
        // An identifier for the service tier, for example D1, D2 etc. For related information, see Pricing.
        tier?: string,
    }
    
    interface TiersListResponse {
        // List of tiers.
        items?: Tier[],        
        // This is always sql#tiersList.
        kind?: string,
    }
    
    interface BackupRunsResource {
        // Retrieves information about a specified backup run for a Cloud SQL instance.
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
            // Identifier for the backup configuration. This gets generated automatically when a backup configuration is created.
            backupConfiguration: string,
            // The start time of the four-hour backup window. The backup can occur any time in the window. The time is in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
            dueTime: string,
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<BackupRun>;        
        
        // Lists all backup runs associated with a Cloud SQL instance.
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
            // Identifier for the backup configuration. This gets generated automatically when a backup configuration is created.
            backupConfiguration: string,
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Maximum number of backup runs per response.
            maxResults?: number,
            // A previously-returned page token representing part of the larger set of results to view.
            pageToken?: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<BackupRunsListResponse>;        
        
    }
    
    
    interface FlagsResource {
        // Lists all database flags that can be set for Google Cloud SQL instances.
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
        }) : gapi.client.Request<FlagsListResponse>;        
        
    }
    
    
    interface InstancesResource {
        // Creates a Cloud SQL instance as a clone of a source instance.
        clone (request: {        
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
            // Project ID of the source as well as the clone Cloud SQL instance.
            project: string,
        }) : gapi.client.Request<InstancesCloneResponse>;        
        
        // Deletes a Cloud SQL instance.
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
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance to be deleted.
            project: string,
        }) : gapi.client.Request<InstancesDeleteResponse>;        
        
        // Exports data from a Cloud SQL instance to a Google Cloud Storage bucket as a MySQL dump file.
        export (request: {        
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
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance to be exported.
            project: string,
        }) : gapi.client.Request<InstancesExportResponse>;        
        
        // Retrieves information about a Cloud SQL instance.
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
            // Database instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<DatabaseInstance>;        
        
        // Imports data into a Cloud SQL instance from a MySQL dump file stored in a Google Cloud Storage bucket.
        import (request: {        
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
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<InstancesImportResponse>;        
        
        // Creates a new Cloud SQL instance.
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
            // Project ID of the project to which the newly created Cloud SQL instances should belong.
            project: string,
        }) : gapi.client.Request<InstancesInsertResponse>;        
        
        // Lists instances for a given project, in alphabetical order by instance name.
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
            // The maximum number of results to return per response.
            maxResults?: number,
            // A previously-returned page token representing part of the larger set of results to view.
            pageToken?: string,
            // Project ID of the project for which to list Cloud SQL instances.
            project: string,
        }) : gapi.client.Request<InstancesListResponse>;        
        
        // Updates the settings of a Cloud SQL instance. This method supports patch semantics.
        patch (request: {        
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
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<InstancesUpdateResponse>;        
        
        // Promotes the read replica instance to be a stand-alone Cloud SQL instance.
        promoteReplica (request: {        
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
            // Cloud SQL read replica instance name.
            instance: string,
            // ID of the project that contains the read replica.
            project: string,
        }) : gapi.client.Request<InstancesPromoteReplicaResponse>;        
        
        // Deletes all client certificates and generates a new server SSL certificate for a Cloud SQL instance.
        resetSslConfig (request: {        
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
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<InstancesResetSslConfigResponse>;        
        
        // Restarts a Cloud SQL instance.
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
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance to be restarted.
            project: string,
        }) : gapi.client.Request<InstancesRestartResponse>;        
        
        // Restores a backup of a Cloud SQL instance.
        restoreBackup (request: {        
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
            // The identifier of the backup configuration. This gets generated automatically when a backup configuration is created.
            backupConfiguration: string,
            // The start time of the four-hour backup window. The backup can occur any time in the window. The time is in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
            dueTime: string,
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<InstancesRestoreBackupResponse>;        
        
        // Sets the password for the root user of the specified Cloud SQL instance.
        setRootPassword (request: {        
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
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<InstancesSetRootPasswordResponse>;        
        
        // Updates the settings of a Cloud SQL instance.
        update (request: {        
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
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<InstancesUpdateResponse>;        
        
    }
    
    
    interface OperationsResource {
        // Retrieves information about a specific operation that was performed on a Cloud SQL instance.
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
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Instance operation ID.
            operation: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<InstanceOperation>;        
        
        // Lists all operations that have been performed on a Cloud SQL instance.
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
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Maximum number of operations per response.
            maxResults?: number,
            // A previously-returned page token representing part of the larger set of results to view.
            pageToken?: string,
            // Project ID of the project that contains the instance.
            project: string,
        }) : gapi.client.Request<OperationsListResponse>;        
        
    }
    
    
    interface SslCertsResource {
        // Deletes an SSL certificate from a Cloud SQL instance.
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
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance to be deleted.
            project: string,
            // Sha1 FingerPrint.
            sha1Fingerprint: string,
        }) : gapi.client.Request<SslCertsDeleteResponse>;        
        
        // Retrieves an SSL certificate as specified by its SHA-1 fingerprint.
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
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project that contains the instance.
            project: string,
            // Sha1 FingerPrint.
            sha1Fingerprint: string,
        }) : gapi.client.Request<SslCert>;        
        
        // Creates an SSL certificate and returns the certificate, the associated private key, and the server certificate authority.
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
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project to which the newly created Cloud SQL instances should belong.
            project: string,
        }) : gapi.client.Request<SslCertsInsertResponse>;        
        
        // Lists all of the current SSL certificates defined for a Cloud SQL instance.
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
            // Cloud SQL instance ID. This does not include the project ID.
            instance: string,
            // Project ID of the project for which to list Cloud SQL instances.
            project: string,
        }) : gapi.client.Request<SslCertsListResponse>;        
        
    }
    
    
    interface TiersResource {
        // Lists service tiers that can be used to create Google Cloud SQL instances.
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
            // Project ID of the project for which to list tiers.
            project: string,
        }) : gapi.client.Request<TiersListResponse>;        
        
    }
    
}

declare module gapi.client.sqladmin {
    var backupRuns: gapi.client.sqladmin.BackupRunsResource; 
    
    var flags: gapi.client.sqladmin.FlagsResource; 
    
    var instances: gapi.client.sqladmin.InstancesResource; 
    
    var operations: gapi.client.sqladmin.OperationsResource; 
    
    var sslCerts: gapi.client.sqladmin.SslCertsResource; 
    
    var tiers: gapi.client.sqladmin.TiersResource; 
    
}
