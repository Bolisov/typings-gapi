// Type definitions for Google Fusion Tables API v1
// Project: https://developers.google.com/fusiontables
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.fusiontables {
    
    interface Bucket {
        // Color of line or the interior of a polygon in #RRGGBB format.
        color?: string,
        // Icon name used for a point.
        icon?: string,
        // Maximum value in the selected column for a row to be styled according to the bucket color, opacity, icon, or weight.
        max?: number,
        // Minimum value in the selected column for a row to be styled according to the bucket color, opacity, icon, or weight.
        min?: number,
        // Opacity of the color: 0.0 (transparent) to 1.0 (opaque).
        opacity?: number,
        // Width of a line (in pixels).
        weight?: number,
    }
    
    interface Column {
        // Optional identifier of the base column. If present, this column is derived from the specified base column.
        baseColumn?: {        
            // The id of the column in the base table from which this column is derived.
            columnId?: number,
            // Offset to the entry in the list of base tables in the table definition.
            tableIndex?: number,
        },        
        // Identifier for the column.
        columnId?: number,
        // Optional column description.
        description?: string,
        // Optional column predicate. Used to map table to graph data model (subject,predicate,object) See http://www.w3.org/TR/2014/REC-rdf11-concepts-20140225/#data-model
        graph_predicate?: string,
        // Type name: a template for an individual column.
        kind?: string,
        // Required name of the column.
        name?: string,
        // Required type of the column.
        type?: string,
    }
    
    interface ColumnList {
        // List of all requested columns.
        items?: Column[],        
        // Type name: a list of all columns.
        kind?: string,
        // Token used to access the next page of this result. No token is displayed if there are no more pages left.
        nextPageToken?: string,
        // Total number of columns for the table.
        totalItems?: number,
    }
    
    interface Geometry {
        // The list of geometries in this geometry collection.
        geometries?: any[],        
        // 
        geometry?: any,
        // Type: A collection of geometries.
        type?: string,
    }
    
    interface Import {
        // Type name: a template for an import request.
        kind?: string,
        // The number of rows received from the import request.
        numRowsReceived?: string,
    }
    
    interface Line {
        // The coordinates that define the line.
        coordinates?: number[][],        
        // Type: A line geometry.
        type?: string,
    }
    
    interface LineStyle {
        // Color of the line in #RRGGBB format.
        strokeColor?: string,
        // Column-value, gradient or buckets styler that is used to determine the line color and opacity.
        strokeColorStyler?: StyleFunction,
        // Opacity of the line : 0.0 (transparent) to 1.0 (opaque).
        strokeOpacity?: number,
        // Width of the line in pixels.
        strokeWeight?: number,
        // Column-value or bucket styler that is used to determine the width of the line.
        strokeWeightStyler?: StyleFunction,
    }
    
    interface Point {
        // The coordinates that define the point.
        coordinates?: number[],        
        // Point: A point geometry.
        type?: string,
    }
    
    interface PointStyle {
        // Name of the icon. Use values defined in http://www.google.com/fusiontables/DataSource?dsrcid=308519
        iconName?: string,
        // Column or a bucket value from which the icon name is to be determined.
        iconStyler?: StyleFunction,
    }
    
    interface Polygon {
        // The coordinates that define the polygon.
        coordinates?: number[][][],        
        // Type: A polygon geometry.
        type?: string,
    }
    
    interface PolygonStyle {
        // Color of the interior of the polygon in #RRGGBB format.
        fillColor?: string,
        // Column-value, gradient, or bucket styler that is used to determine the interior color and opacity of the polygon.
        fillColorStyler?: StyleFunction,
        // Opacity of the interior of the polygon: 0.0 (transparent) to 1.0 (opaque).
        fillOpacity?: number,
        // Color of the polygon border in #RRGGBB format.
        strokeColor?: string,
        // Column-value, gradient or buckets styler that is used to determine the border color and opacity.
        strokeColorStyler?: StyleFunction,
        // Opacity of the polygon border: 0.0 (transparent) to 1.0 (opaque).
        strokeOpacity?: number,
        // Width of the polyon border in pixels.
        strokeWeight?: number,
        // Column-value or bucket styler that is used to determine the width of the polygon border.
        strokeWeightStyler?: StyleFunction,
    }
    
    interface Sqlresponse {
        // Columns in the table.
        columns?: string[],        
        // Type name: a template for an individual table.
        kind?: string,
        // The rows in the table. For each cell we print out whatever cell value (e.g., numeric, string) exists. Thus it is important that each cell contains only one value.
        rows?: any[][],        
    }
    
    interface StyleFunction {
        // Bucket function that assigns a style based on the range a column value falls into.
        buckets?: Bucket[],        
        // Name of the column whose value is used in the style.
        columnName?: string,
        // Gradient function that interpolates a range of colors based on column value.
        gradient?: {        
            // Array with two or more colors.
            colors?: {            
                // Color in #RRGGBB format.
                color?: string,
                // Opacity of the color: 0.0 (transparent) to 1.0 (opaque).
                opacity?: number,
            }[],            
            // Higher-end of the interpolation range: rows with this value will be assigned to colors[n-1].
            max?: number,
            // Lower-end of the interpolation range: rows with this value will be assigned to colors[0].
            min?: number,
        },        
        // Stylers can be one of three kinds: "fusiontables#fromColumn" if the column value is to be used as is, i.e., the column values can have colors in #RRGGBBAA format or integer line widths or icon names; "fusiontables#gradient" if the styling of the row is to be based on applying the gradient function on the column value; or "fusiontables#buckets" if the styling is to based on the bucket into which the the column value falls.
        kind?: string,
    }
    
    interface StyleSetting {
        // Type name: an individual style setting. A StyleSetting contains the style defintions for points, lines, and polygons in a table. Since a table can have any one or all of them, a style definition can have point, line and polygon style definitions.
        kind?: string,
        // Style definition for points in the table.
        markerOptions?: PointStyle,
        // Optional name for the style setting.
        name?: string,
        // Style definition for polygons in the table.
        polygonOptions?: PolygonStyle,
        // Style definition for lines in the table.
        polylineOptions?: LineStyle,
        // Identifier for the style setting (unique only within tables).
        styleId?: number,
        // Identifier for the table.
        tableId?: string,
    }
    
    interface StyleSettingList {
        // All requested style settings.
        items?: StyleSetting[],        
        // Type name: in this case, a list of style settings.
        kind?: string,
        // Token used to access the next page of this result. No token is displayed if there are no more pages left.
        nextPageToken?: string,
        // Total number of styles for the table.
        totalItems?: number,
    }
    
    interface Table {
        // Optional attribution assigned to the table.
        attribution?: string,
        // Optional link for attribution.
        attributionLink?: string,
        // Optional base table identifier if this table is a view or merged table.
        baseTableIds?: string[],        
        // Columns in the table.
        columns?: Column[],        
        // Optional description assigned to the table.
        description?: string,
        // Variable for whether table is exportable.
        isExportable?: boolean,
        // Type name: a template for an individual table.
        kind?: string,
        // Name assigned to a table.
        name?: string,
        // Optional sql that encodes the table definition for derived tables.
        sql?: string,
        // Encrypted unique alphanumeric identifier for the table.
        tableId?: string,
    }
    
    interface TableList {
        // List of all requested tables.
        items?: Table[],        
        // Type name: a list of all tables.
        kind?: string,
        // Token used to access the next page of this result. No token is displayed if there are no more pages left.
        nextPageToken?: string,
    }
    
    interface Task {
        // Type of the resource. This is always "fusiontables#task".
        kind?: string,
        // An indication of task progress.
        progress?: string,
        // false while the table is busy with some other task. true if this background task is currently running.
        started?: boolean,
        // Identifier for the task.
        taskId?: string,
        // Type of background task. One of  DELETE_ROWS Deletes one or more rows from the table. ADD_ROWS "Adds one or more rows to a table. Includes importing data into a new table and importing more rows into an existing table. ADD_COLUMN Adds a new column to the table. CHANGE_TYPE Changes the type of a column.
        type?: string,
    }
    
    interface TaskList {
        // List of all requested tasks.
        items?: Task[],        
        // Type of the resource. This is always "fusiontables#taskList".
        kind?: string,
        // Token used to access the next page of this result. No token is displayed if there are no more pages left.
        nextPageToken?: string,
        // Total number of tasks for the table.
        totalItems?: number,
    }
    
    interface Template {
        // List of columns from which the template is to be automatically constructed. Only one of body or automaticColumns can be specified.
        automaticColumnNames?: string[],        
        // Body of the template. It contains HTML with {column_name} to insert values from a particular column. The body is sanitized to remove certain tags, e.g., script. Only one of body or automaticColumns can be specified.
        body?: string,
        // Type name: a template for the info window contents. The template can either include an HTML body or a list of columns from which the template is computed automatically.
        kind?: string,
        // Optional name assigned to a template.
        name?: string,
        // Identifier for the table for which the template is defined.
        tableId?: string,
        // Identifier for the template, unique within the context of a particular table.
        templateId?: number,
    }
    
    interface TemplateList {
        // List of all requested templates.
        items?: Template[],        
        // Type name: a list of all templates.
        kind?: string,
        // Token used to access the next page of this result. No token is displayed if there are no more pages left.
        nextPageToken?: string,
        // Total number of templates for the table.
        totalItems?: number,
    }
    
    interface ColumnResource {
        // Deletes the column.
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
            // Name or identifier for the column being deleted.
            columnId: string,
            // Table from which the column is being deleted.
            tableId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves a specific column by its id.
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
            // Name or identifier for the column that is being requested.
            columnId: string,
            // Table to which the column belongs.
            tableId: string,
        }) : gapi.client.Request<Column>;        
        
        // Adds a new column to the table.
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
            // Table for which a new column is being added.
            tableId: string,
        }) : gapi.client.Request<Column>;        
        
        // Retrieves a list of columns.
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
            // Maximum number of columns to return. Optional. Default is 5.
            maxResults?: number,
            // Continuation token specifying which result page to return. Optional.
            pageToken?: string,
            // Table whose columns are being listed.
            tableId: string,
        }) : gapi.client.Request<ColumnList>;        
        
        // Updates the name or type of an existing column. This method supports patch semantics.
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
            // Name or identifier for the column that is being updated.
            columnId: string,
            // Table for which the column is being updated.
            tableId: string,
        }) : gapi.client.Request<Column>;        
        
        // Updates the name or type of an existing column.
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
            // Name or identifier for the column that is being updated.
            columnId: string,
            // Table for which the column is being updated.
            tableId: string,
        }) : gapi.client.Request<Column>;        
        
    }
    
    
    interface QueryResource {
        // Executes an SQL SELECT/INSERT/UPDATE/DELETE/SHOW/DESCRIBE/CREATE statement.
        sql (request: {        
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
            // Should column names be included (in the first row)?. Default is true.
            hdrs?: boolean,
            // An SQL SELECT/SHOW/DESCRIBE/INSERT/UPDATE/DELETE/CREATE statement.
            sql: string,
            // Should typed values be returned in the (JSON) response -- numbers for numeric values and parsed geometries for KML values? Default is true.
            typed?: boolean,
        }) : gapi.client.Request<Sqlresponse>;        
        
        // Executes an SQL SELECT/SHOW/DESCRIBE statement.
        sqlGet (request: {        
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
            // Should column names be included (in the first row)?. Default is true.
            hdrs?: boolean,
            // An SQL SELECT/SHOW/DESCRIBE statement.
            sql: string,
            // Should typed values be returned in the (JSON) response -- numbers for numeric values and parsed geometries for KML values? Default is true.
            typed?: boolean,
        }) : gapi.client.Request<Sqlresponse>;        
        
    }
    
    
    interface StyleResource {
        // Deletes a style.
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
            // Identifier (within a table) for the style being deleted
            styleId: number,
            // Table from which the style is being deleted
            tableId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets a specific style.
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
            // Identifier (integer) for a specific style in a table
            styleId: number,
            // Table to which the requested style belongs
            tableId: string,
        }) : gapi.client.Request<StyleSetting>;        
        
        // Adds a new style for the table.
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
            // Table for which a new style is being added
            tableId: string,
        }) : gapi.client.Request<StyleSetting>;        
        
        // Retrieves a list of styles.
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
            // Maximum number of styles to return. Optional. Default is 5.
            maxResults?: number,
            // Continuation token specifying which result page to return. Optional.
            pageToken?: string,
            // Table whose styles are being listed
            tableId: string,
        }) : gapi.client.Request<StyleSettingList>;        
        
        // Updates an existing style. This method supports patch semantics.
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
            // Identifier (within a table) for the style being updated.
            styleId: number,
            // Table whose style is being updated.
            tableId: string,
        }) : gapi.client.Request<StyleSetting>;        
        
        // Updates an existing style.
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
            // Identifier (within a table) for the style being updated.
            styleId: number,
            // Table whose style is being updated.
            tableId: string,
        }) : gapi.client.Request<StyleSetting>;        
        
    }
    
    
    interface TableResource {
        // Copies a table.
        copy (request: {        
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
            // Whether to also copy tabs, styles, and templates. Default is false.
            copyPresentation?: boolean,
            // ID of the table that is being copied.
            tableId: string,
        }) : gapi.client.Request<Table>;        
        
        // Deletes a table.
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
            // ID of the table that is being deleted.
            tableId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves a specific table by its id.
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
            // Identifier(ID) for the table being requested.
            tableId: string,
        }) : gapi.client.Request<Table>;        
        
        // Import more rows into a table.
        importRows (request: {        
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
            // The delimiter used to separate cell values. This can only consist of a single character. Default is ','.
            delimiter?: string,
            // The encoding of the content. Default is UTF-8. Use 'auto-detect' if you are unsure of the encoding.
            encoding?: string,
            // The index of the last line from which to start importing, exclusive. Thus, the number of imported lines is endLine - startLine. If this parameter is not provided, the file will be imported until the last line of the file. If endLine is negative, then the imported content will exclude the last endLine lines. That is, if endline is negative, no line will be imported whose index is greater than N + endLine where N is the number of lines in the file, and the number of imported lines will be N + endLine - startLine.
            endLine?: number,
            // Whether the CSV must have the same number of values for each row. If false, rows with fewer values will be padded with empty values. Default is true.
            isStrict?: boolean,
            // The index of the first line from which to start importing, inclusive. Default is 0.
            startLine?: number,
            // The table into which new rows are being imported.
            tableId: string,
        }) : gapi.client.Request<Import>;        
        
        // Import a new table.
        importTable (request: {        
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
            // The delimiter used to separate cell values. This can only consist of a single character. Default is ','.
            delimiter?: string,
            // The encoding of the content. Default is UTF-8. Use 'auto-detect' if you are unsure of the encoding.
            encoding?: string,
            // The name to be assigned to the new table.
            name: string,
        }) : gapi.client.Request<Table>;        
        
        // Creates a new table.
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
        }) : gapi.client.Request<Table>;        
        
        // Retrieves a list of tables a user owns.
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
            // Maximum number of styles to return. Optional. Default is 5.
            maxResults?: number,
            // Continuation token specifying which result page to return. Optional.
            pageToken?: string,
        }) : gapi.client.Request<TableList>;        
        
        // Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated. This method supports patch semantics.
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
            // Should the view definition also be updated? The specified view definition replaces the existing one. Only a view can be updated with a new definition.
            replaceViewDefinition?: boolean,
            // ID of the table that is being updated.
            tableId: string,
        }) : gapi.client.Request<Table>;        
        
        // Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated.
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
            // Should the view definition also be updated? The specified view definition replaces the existing one. Only a view can be updated with a new definition.
            replaceViewDefinition?: boolean,
            // ID of the table that is being updated.
            tableId: string,
        }) : gapi.client.Request<Table>;        
        
    }
    
    
    interface TaskResource {
        // Deletes the task, unless already started.
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
            // Table from which the task is being deleted.
            tableId: string,
            // 
            taskId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves a specific task by its id.
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
            // Table to which the task belongs.
            tableId: string,
            // 
            taskId: string,
        }) : gapi.client.Request<Task>;        
        
        // Retrieves a list of tasks.
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
            // Maximum number of columns to return. Optional. Default is 5.
            maxResults?: number,
            // 
            pageToken?: string,
            // 
            startIndex?: number,
            // Table whose tasks are being listed.
            tableId: string,
        }) : gapi.client.Request<TaskList>;        
        
    }
    
    
    interface TemplateResource {
        // Deletes a template
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
            // Table from which the template is being deleted
            tableId: string,
            // Identifier for the template which is being deleted
            templateId: number,
        }) : gapi.client.Request<void>;        
        
        // Retrieves a specific template by its id
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
            // Table to which the template belongs
            tableId: string,
            // Identifier for the template that is being requested
            templateId: number,
        }) : gapi.client.Request<Template>;        
        
        // Creates a new template for the table.
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
            // Table for which a new template is being created
            tableId: string,
        }) : gapi.client.Request<Template>;        
        
        // Retrieves a list of templates.
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
            // Maximum number of templates to return. Optional. Default is 5.
            maxResults?: number,
            // Continuation token specifying which results page to return. Optional.
            pageToken?: string,
            // Identifier for the table whose templates are being requested
            tableId: string,
        }) : gapi.client.Request<TemplateList>;        
        
        // Updates an existing template. This method supports patch semantics.
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
            // Table to which the updated template belongs
            tableId: string,
            // Identifier for the template that is being updated
            templateId: number,
        }) : gapi.client.Request<Template>;        
        
        // Updates an existing template
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
            // Table to which the updated template belongs
            tableId: string,
            // Identifier for the template that is being updated
            templateId: number,
        }) : gapi.client.Request<Template>;        
        
    }
    
}

declare module gapi.client.fusiontables {
    var column: gapi.client.fusiontables.ColumnResource; 
    
    var query: gapi.client.fusiontables.QueryResource; 
    
    var style: gapi.client.fusiontables.StyleResource; 
    
    var table: gapi.client.fusiontables.TableResource; 
    
    var task: gapi.client.fusiontables.TaskResource; 
    
    var template: gapi.client.fusiontables.TemplateResource; 
    
}
