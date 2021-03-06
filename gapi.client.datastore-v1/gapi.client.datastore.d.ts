// Type definitions for Google Google Cloud Datastore API v1
// Project: https://cloud.google.com/datastore/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.datastore {
    
    interface MutationResult {
        // The version of the entity on the server after processing the mutation. If
        // the mutation doesn't change anything on the server, then the version will
        // be the version of the current entity or, if no entity is present, a version
        // that is strictly greater than the version of any previous entity and less
        // than the version of any possible future entity.
        version?: string,
        // Whether a conflict was detected for this mutation. Always false when a
        // conflict detection strategy field is not set in the mutation.
        conflictDetected?: boolean,
        // The automatically allocated key.
        // Set only when the mutation allocated a key.
        key?: Key,
    }
    
    interface GqlQuery {
        // A string of the format described
        // [here](https://cloud.google.com/datastore/docs/apis/gql/gql_reference).
        queryString?: string,
        // When false, the query string must not contain any literals and instead must
        // bind all values. For example,
        // `SELECT * FROM Kind WHERE a = 'string literal'` is not allowed, while
        // `SELECT * FROM Kind WHERE a = @value` is.
        allowLiterals?: boolean,
        // For each non-reserved named binding site in the query string, there must be
        // a named parameter with that name, but not necessarily the inverse.
        // 
        // Key must match regex `A-Za-z_$*`, must not match regex
        // `__.*__`, and must not be `""`.
        namedBindings?: any,
        // Numbered binding site @1 references the first numbered parameter,
        // effectively using 1-based indexing, rather than the usual 0.
        // 
        // For each binding site numbered i in `query_string`, there must be an i-th
        // numbered parameter. The inverse must also be true.
        positionalBindings?: GqlQueryParameter[],        
    }
    
    interface Filter {
        // A composite filter.
        compositeFilter?: CompositeFilter,
        // A filter on a property.
        propertyFilter?: PropertyFilter,
    }
    
    interface RunQueryRequest {
        // The query to run.
        query?: Query,
        // Entities are partitioned into subsets, identified by a partition ID.
        // Queries are scoped to a single partition.
        // This partition ID is normalized with the standard default context
        // partition ID.
        partitionId?: PartitionId,
        // The GQL query to run.
        gqlQuery?: GqlQuery,
        // The options for this query.
        readOptions?: ReadOptions,
    }
    
    interface RollbackRequest {
        // The transaction identifier, returned by a call to
        // Datastore.BeginTransaction.
        transaction?: string,
    }
    
    interface CompositeFilter {
        // The list of filters to combine.
        // Must contain at least one filter.
        filters?: Filter[],        
        // The operator for combining multiple filters.
        op?: string,
    }
    
    interface AllocateIdsResponse {
        // The keys specified in the request (in the same order), each with
        // its key path completed with a newly allocated ID.
        keys?: Key[],        
    }
    
    interface Query {
        // The projection to return. Defaults to returning all properties.
        projection?: Projection[],        
        // An ending point for the query results. Query cursors are
        // returned in query result batches and
        // [can only be used to limit the same query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets).
        endCursor?: string,
        // The filter to apply.
        filter?: Filter,
        // The maximum number of results to return. Applies after all other
        // constraints. Optional.
        // Unspecified is interpreted as no limit.
        // Must be >= 0 if specified.
        limit?: number,
        // A starting point for the query results. Query cursors are
        // returned in query result batches and
        // [can only be used to continue the same query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets).
        startCursor?: string,
        // The number of results to skip. Applies before limit, but after all other
        // constraints. Optional. Must be >= 0 if specified.
        offset?: number,
        // The kinds to query (if empty, returns entities of all kinds).
        // Currently at most 1 kind may be specified.
        kind?: KindExpression[],        
        // The properties to make distinct. The query results will contain the first
        // result for each distinct combination of values for the given properties
        // (if empty, all results are returned).
        distinctOn?: PropertyReference[],        
        // The order to apply to the query results (if empty, order is unspecified).
        order?: PropertyOrder[],        
    }
    
    interface PropertyFilter {
        // The value to compare the property to.
        value?: Value,
        // The property to filter by.
        property?: PropertyReference,
        // The operator to filter by.
        op?: string,
    }
    
    interface EntityResult {
        // The resulting entity.
        entity?: Entity,
        // A cursor that points to the position after the result entity.
        // Set only when the `EntityResult` is part of a `QueryResultBatch` message.
        cursor?: string,
        // The version of the entity, a strictly positive number that monotonically
        // increases with changes to the entity.
        // 
        // This field is set for `FULL` entity
        // results.
        // 
        // For missing entities in `LookupResponse`, this
        // is the version of the snapshot that was used to look up the entity, and it
        // is always set except for eventually consistent reads.
        version?: string,
    }
    
    interface CommitResponse {
        // The number of index entries updated during the commit, or zero if none were
        // updated.
        indexUpdates?: number,
        // The result of performing the mutations.
        // The i-th mutation result corresponds to the i-th mutation in the request.
        mutationResults?: MutationResult[],        
    }
    
    interface Value {
        // An entity value.
        // 
        // - May have no key.
        // - May have a key with an incomplete key path.
        // - May have a reserved/read-only key.
        entityValue?: Entity,
        // A geo point value representing a point on the surface of Earth.
        geoPointValue?: LatLng,
        // A key value.
        keyValue?: Key,
        // An integer value.
        integerValue?: string,
        // A UTF-8 encoded string value.
        // When `exclude_from_indexes` is false (it is indexed) , may have at most 1500 bytes.
        // Otherwise, may be set to at least 1,000,000 bytes.
        stringValue?: string,
        // If the value should be excluded from all indexes including those defined
        // explicitly.
        excludeFromIndexes?: boolean,
        // A double value.
        doubleValue?: number,
        // A timestamp value.
        // When stored in the Datastore, precise only to microseconds;
        // any additional precision is rounded down.
        timestampValue?: string,
        // A null value.
        nullValue?: string,
        // A boolean value.
        booleanValue?: boolean,
        // A blob value.
        // May have at most 1,000,000 bytes.
        // When `exclude_from_indexes` is false, may have at most 1500 bytes.
        // In JSON requests, must be base64-encoded.
        blobValue?: string,
        // The `meaning` field should only be populated for backwards compatibility.
        meaning?: number,
        // An array value.
        // Cannot contain another array value.
        // A `Value` instance that sets field `array_value` must not set fields
        // `meaning` or `exclude_from_indexes`.
        arrayValue?: ArrayValue,
    }
    
    interface PartitionId {
        // The ID of the project to which the entities belong.
        projectId?: string,
        // If not empty, the ID of the namespace to which the entities belong.
        namespaceId?: string,
    }
    
    interface Entity {
        // The entity's properties.
        // The map's keys are property names.
        // A property name matching regex `__.*__` is reserved.
        // A reserved property name is forbidden in certain documented contexts.
        // The name must not contain more than 500 characters.
        // The name cannot be `""`.
        properties?: any,
        // The entity's key.
        // 
        // An entity must have a key, unless otherwise documented (for example,
        // an entity in `Value.entity_value` may have no key).
        // An entity's kind is its key path's last element's kind,
        // or null if it has no key.
        key?: Key,
    }
    
    interface LookupRequest {
        // Keys of entities to look up.
        keys?: Key[],        
        // The options for this lookup request.
        readOptions?: ReadOptions,
    }
    
    interface QueryResultBatch {
        // The number of results skipped, typically because of an offset.
        skippedResults?: number,
        // The result type for every entity in `entity_results`.
        entityResultType?: string,
        // The results for this batch.
        entityResults?: EntityResult[],        
        // A cursor that points to the position after the last result in the batch.
        endCursor?: string,
        // The state of the query after the current batch.
        moreResults?: string,
        // The version number of the snapshot this batch was returned from.
        // This applies to the range of results from the query's `start_cursor` (or
        // the beginning of the query if no cursor was given) to this batch's
        // `end_cursor` (not the query's `end_cursor`).
        // 
        // In a single transaction, subsequent query result batches for the same query
        // can have a greater snapshot version number. Each batch's snapshot version
        // is valid for all preceding batches.
        // The value will be zero for eventually consistent queries.
        snapshotVersion?: string,
        // A cursor that points to the position after the last skipped result.
        // Will be set when `skipped_results` != 0.
        skippedCursor?: string,
    }
    
    interface PathElement {
        // The name of the entity.
        // A name matching regex `__.*__` is reserved/read-only.
        // A name must not be more than 1500 bytes when UTF-8 encoded.
        // Cannot be `""`.
        name?: string,
        // The kind of the entity.
        // A kind matching regex `__.*__` is reserved/read-only.
        // A kind must not contain more than 1500 bytes when UTF-8 encoded.
        // Cannot be `""`.
        kind?: string,
        // The auto-allocated ID of the entity.
        // Never equal to zero. Values less than zero are discouraged and may not
        // be supported in the future.
        id?: string,
    }
    
    interface GqlQueryParameter {
        // A query cursor. Query cursors are returned in query
        // result batches.
        cursor?: string,
        // A value parameter.
        value?: Value,
    }
    
    interface BeginTransactionResponse {
        // The transaction identifier (always present).
        transaction?: string,
    }
    
    interface RunQueryResponse {
        // The parsed form of the `GqlQuery` from the request, if it was set.
        query?: Query,
        // A batch of query results (always present).
        batch?: QueryResultBatch,
    }
    
    interface LookupResponse {
        // A list of keys that were not looked up due to resource constraints. The
        // order of results in this field is undefined and has no relation to the
        // order of the keys in the input.
        deferred?: Key[],        
        // Entities found as `ResultType.FULL` entities. The order of results in this
        // field is undefined and has no relation to the order of the keys in the
        // input.
        found?: EntityResult[],        
        // Entities not found as `ResultType.KEY_ONLY` entities. The order of results
        // in this field is undefined and has no relation to the order of the keys
        // in the input.
        missing?: EntityResult[],        
    }
    
    interface AllocateIdsRequest {
        // A list of keys with incomplete key paths for which to allocate IDs.
        // No key may be reserved/read-only.
        keys?: Key[],        
    }
    
    interface CommitRequest {
        // The mutations to perform.
        // 
        // When mode is `TRANSACTIONAL`, mutations affecting a single entity are
        // applied in order. The following sequences of mutations affecting a single
        // entity are not permitted in a single `Commit` request:
        // 
        // - `insert` followed by `insert`
        // - `update` followed by `insert`
        // - `upsert` followed by `insert`
        // - `delete` followed by `update`
        // 
        // When mode is `NON_TRANSACTIONAL`, no two mutations may affect a single
        // entity.
        mutations?: Mutation[],        
        // The identifier of the transaction associated with the commit. A
        // transaction identifier is returned by a call to
        // Datastore.BeginTransaction.
        transaction?: string,
        // The type of commit to perform. Defaults to `TRANSACTIONAL`.
        mode?: string,
    }
    
    interface BeginTransactionRequest {
    }
    
    interface PropertyOrder {
        // The property to order by.
        property?: PropertyReference,
        // The direction to order by. Defaults to `ASCENDING`.
        direction?: string,
    }
    
    interface KindExpression {
        // The name of the kind.
        name?: string,
    }
    
    interface Key {
        // Entities are partitioned into subsets, currently identified by a project
        // ID and namespace ID.
        // Queries are scoped to a single partition.
        partitionId?: PartitionId,
        // The entity path.
        // An entity path consists of one or more elements composed of a kind and a
        // string or numerical identifier, which identify entities. The first
        // element identifies a _root entity_, the second element identifies
        // a _child_ of the root entity, the third element identifies a child of the
        // second entity, and so forth. The entities identified by all prefixes of
        // the path are called the element's _ancestors_.
        // 
        // An entity path is always fully complete: *all* of the entity's ancestors
        // are required to be in the path along with the entity identifier itself.
        // The only exception is that in some documented cases, the identifier in the
        // last path element (for the entity) itself may be omitted. For example,
        // the last path element of the key of `Mutation.insert` may have no
        // identifier.
        // 
        // A path can never be empty, and a path can have at most 100 elements.
        path?: PathElement[],        
    }
    
    interface LatLng {
        // The latitude in degrees. It must be in the range [-90.0, +90.0].
        latitude?: number,
        // The longitude in degrees. It must be in the range [-180.0, +180.0].
        longitude?: number,
    }
    
    interface PropertyReference {
        // The name of the property.
        // If name includes "."s, it may be interpreted as a property name path.
        name?: string,
    }
    
    interface Projection {
        // The property to project.
        property?: PropertyReference,
    }
    
    interface ArrayValue {
        // Values in the array.
        // The order of this array may not be preserved if it contains a mix of
        // indexed and unindexed values.
        values?: Value[],        
    }
    
    interface Mutation {
        // The key of the entity to delete. The entity may or may not already exist.
        // Must have a complete key path and must not be reserved/read-only.
        delete?: Key,
        // The entity to insert. The entity must not already exist.
        // The entity key's final path element may be incomplete.
        insert?: Entity,
        // The version of the entity that this mutation is being applied to. If this
        // does not match the current version on the server, the mutation conflicts.
        baseVersion?: string,
        // The entity to update. The entity must already exist.
        // Must have a complete key path.
        update?: Entity,
        // The entity to upsert. The entity may or may not already exist.
        // The entity key's final path element may be incomplete.
        upsert?: Entity,
    }
    
    interface ReadOptions {
        // The non-transactional read consistency to use.
        // Cannot be set to `STRONG` for global queries.
        readConsistency?: string,
        // The identifier of the transaction in which to read. A
        // transaction identifier is returned by a call to
        // Datastore.BeginTransaction.
        transaction?: string,
    }
    
    interface RollbackResponse {
    }
    
    interface ProjectsResource {
        // Allocates IDs for the given keys, which is useful for referencing an entity
        // before it is inserted.
        allocateIds (request: {        
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
            // The ID of the project against which to make the request.
            projectId: string,
        }) : gapi.client.Request<AllocateIdsResponse>;        
        
        // Begins a new transaction.
        beginTransaction (request: {        
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
            // The ID of the project against which to make the request.
            projectId: string,
        }) : gapi.client.Request<BeginTransactionResponse>;        
        
        // Commits a transaction, optionally creating, deleting or modifying some
        // entities.
        commit (request: {        
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
            // The ID of the project against which to make the request.
            projectId: string,
        }) : gapi.client.Request<CommitResponse>;        
        
        // Queries for entities.
        runQuery (request: {        
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
            // The ID of the project against which to make the request.
            projectId: string,
        }) : gapi.client.Request<RunQueryResponse>;        
        
        // Rolls back a transaction.
        rollback (request: {        
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
            // The ID of the project against which to make the request.
            projectId: string,
        }) : gapi.client.Request<RollbackResponse>;        
        
        // Looks up entities by key.
        lookup (request: {        
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
            // The ID of the project against which to make the request.
            projectId: string,
        }) : gapi.client.Request<LookupResponse>;        
        
    }
    
}

declare module gapi.client.datastore {
    var projects: gapi.client.datastore.ProjectsResource; 
    
}
