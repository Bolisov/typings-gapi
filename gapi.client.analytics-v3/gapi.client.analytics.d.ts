// Type definitions for Google Google Analytics API v3
// Project: https://developers.google.com/analytics/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.analytics {
    
    interface Account {
        // Child link for an account entry. Points to the list of web properties for this account.
        childLink?: {        
            // Link to the list of web properties for this account.
            href?: string,
            // Type of the child link. Its value is "analytics#webproperties".
            type?: string,
        },        
        // Time the account was created.
        created?: string,
        // Account ID.
        id?: string,
        // Resource type for Analytics account.
        kind?: string,
        // Account name.
        name?: string,
        // Permissions the user has for this account.
        permissions?: {        
            // All the permissions that the user has for this account. These include any implied permissions (e.g., EDIT implies VIEW).
            effective?: string[],            
        },        
        // Link for this account.
        selfLink?: string,
        // Indicates whether this account is starred or not.
        starred?: boolean,
        // Time the account was last modified.
        updated?: string,
    }
    
    interface AccountRef {
        // Link for this account.
        href?: string,
        // Account ID.
        id?: string,
        // Analytics account reference.
        kind?: string,
        // Account name.
        name?: string,
    }
    
    interface AccountSummaries {
        // A list of AccountSummaries.
        items?: AccountSummary[],        
        // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
        itemsPerPage?: number,
        // Collection type.
        kind?: string,
        // Link to next page for this AccountSummary collection.
        nextLink?: string,
        // Link to previous page for this AccountSummary collection.
        previousLink?: string,
        // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
        startIndex?: number,
        // The total number of results for the query, regardless of the number of results in the response.
        totalResults?: number,
        // Email ID of the authenticated user
        username?: string,
    }
    
    interface AccountSummary {
        // Account ID.
        id?: string,
        // Resource type for Analytics AccountSummary.
        kind?: string,
        // Account name.
        name?: string,
        // Indicates whether this account is starred or not.
        starred?: boolean,
        // List of web properties under this account.
        webProperties?: WebPropertySummary[],        
    }
    
    interface AccountTicket {
        // Account for this ticket.
        account?: Account,
        // Account ticket ID used to access the account ticket.
        id?: string,
        // Resource type for account ticket.
        kind?: string,
        // View (Profile) for the account.
        profile?: Profile,
        // Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in APIs console as a callback URL.
        redirectUri?: string,
        // Web property for the account.
        webproperty?: Webproperty,
    }
    
    interface Accounts {
        // A list of accounts.
        items?: Account[],        
        // The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
        itemsPerPage?: number,
        // Collection type.
        kind?: string,
        // Next link for this account collection.
        nextLink?: string,
        // Previous link for this account collection.
        previousLink?: string,
        // The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter.
        startIndex?: number,
        // The total number of results for the query, regardless of the number of results in the response.
        totalResults?: number,
        // Email ID of the authenticated user
        username?: string,
    }
    
    interface AdWordsAccount {
        // True if auto-tagging is enabled on the AdWords account. Read-only after the insert operation.
        autoTaggingEnabled?: boolean,
        // Customer ID. This field is required when creating an AdWords link.
        customerId?: string,
        // Resource type for AdWords account.
        kind?: string,
    }
    
    interface AnalyticsDataimportDeleteUploadDataRequest {
        // A list of upload UIDs.
        customDataImportUids?: string[],        
    }
    
    interface Column {
        // Map of attribute name and value for this column.
        attributes?: any,
        // Column id.
        id?: string,
        // Resource type for Analytics column.
        kind?: string,
    }
    
    interface Columns {
        // List of attributes names returned by columns.
        attributeNames?: string[],        
        // Etag of collection. This etag can be compared with the last response etag to check if response has changed.
        etag?: string,
        // List of columns for a report type.
        items?: Column[],        
        // Collection type.
        kind?: string,
        // Total number of columns returned in the response.
        totalResults?: number,
    }
    
    interface CustomDataSource {
        // Account ID to which this custom data source belongs.
        accountId?: string,
        // 
        childLink?: {        
            // Link to the list of daily uploads for this custom data source. Link to the list of uploads for this custom data source.
            href?: string,
            // Value is "analytics#dailyUploads". Value is "analytics#uploads".
            type?: string,
        },        
        // Time this custom data source was created.
        created?: string,
        // Description of custom data source.
        description?: string,
        // Custom data source ID.
        id?: string,
        // 
        importBehavior?: string,
        // Resource type for Analytics custom data source.
        kind?: string,
        // Name of this custom data source.
        name?: string,
        // Parent link for this custom data source. Points to the web property to which this custom data source belongs.
        parentLink?: {        
            // Link to the web property to which this custom data source belongs.
            href?: string,
            // Value is "analytics#webproperty".
            type?: string,
        },        
        // IDs of views (profiles) linked to the custom data source.
        profilesLinked?: string[],        
        // Link for this Analytics custom data source.
        selfLink?: string,
        // Type of the custom data source.
        type?: string,
        // Time this custom data source was last modified.
        updated?: string,
        // 
        uploadType?: string,
        // Web property ID of the form UA-XXXXX-YY to which this custom data source belongs.
        webPropertyId?: string,
    }
    
    interface CustomDataSources {
        // Collection of custom data sources.
        items?: CustomDataSource[],        
        // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
        itemsPerPage?: number,
        // Collection type.
        kind?: string,
        // Link to next page for this custom data source collection.
        nextLink?: string,
        // Link to previous page for this custom data source collection.
        previousLink?: string,
        // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
        startIndex?: number,
        // The total number of results for the query, regardless of the number of results in the response.
        totalResults?: number,
        // Email ID of the authenticated user
        username?: string,
    }
    
    interface CustomDimension {
        // Account ID.
        accountId?: string,
        // Boolean indicating whether the custom dimension is active.
        active?: boolean,
        // Time the custom dimension was created.
        created?: string,
        // Custom dimension ID.
        id?: string,
        // Index of the custom dimension.
        index?: number,
        // Kind value for a custom dimension. Set to "analytics#customDimension". It is a read-only field.
        kind?: string,
        // Name of the custom dimension.
        name?: string,
        // Parent link for the custom dimension. Points to the property to which the custom dimension belongs.
        parentLink?: {        
            // Link to the property to which the custom dimension belongs.
            href?: string,
            // Type of the parent link. Set to "analytics#webproperty".
            type?: string,
        },        
        // Scope of the custom dimension: HIT, SESSION, USER or PRODUCT.
        scope?: string,
        // Link for the custom dimension
        selfLink?: string,
        // Time the custom dimension was last modified.
        updated?: string,
        // Property ID.
        webPropertyId?: string,
    }
    
    interface CustomDimensions {
        // Collection of custom dimensions.
        items?: CustomDimension[],        
        // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
        itemsPerPage?: number,
        // Collection type.
        kind?: string,
        // Link to next page for this custom dimension collection.
        nextLink?: string,
        // Link to previous page for this custom dimension collection.
        previousLink?: string,
        // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
        startIndex?: number,
        // The total number of results for the query, regardless of the number of results in the response.
        totalResults?: number,
        // Email ID of the authenticated user
        username?: string,
    }
    
    interface CustomMetric {
        // Account ID.
        accountId?: string,
        // Boolean indicating whether the custom metric is active.
        active?: boolean,
        // Time the custom metric was created.
        created?: string,
        // Custom metric ID.
        id?: string,
        // Index of the custom metric.
        index?: number,
        // Kind value for a custom metric. Set to "analytics#customMetric". It is a read-only field.
        kind?: string,
        // Max value of custom metric.
        max_value?: string,
        // Min value of custom metric.
        min_value?: string,
        // Name of the custom metric.
        name?: string,
        // Parent link for the custom metric. Points to the property to which the custom metric belongs.
        parentLink?: {        
            // Link to the property to which the custom metric belongs.
            href?: string,
            // Type of the parent link. Set to "analytics#webproperty".
            type?: string,
        },        
        // Scope of the custom metric: HIT or PRODUCT.
        scope?: string,
        // Link for the custom metric
        selfLink?: string,
        // Data type of custom metric.
        type?: string,
        // Time the custom metric was last modified.
        updated?: string,
        // Property ID.
        webPropertyId?: string,
    }
    
    interface CustomMetrics {
        // Collection of custom metrics.
        items?: CustomMetric[],        
        // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
        itemsPerPage?: number,
        // Collection type.
        kind?: string,
        // Link to next page for this custom metric collection.
        nextLink?: string,
        // Link to previous page for this custom metric collection.
        previousLink?: string,
        // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
        startIndex?: number,
        // The total number of results for the query, regardless of the number of results in the response.
        totalResults?: number,
        // Email ID of the authenticated user
        username?: string,
    }
    
    interface EntityAdWordsLink {
        // A list of AdWords client accounts. These cannot be MCC accounts. This field is required when creating an AdWords link. It cannot be empty.
        adWordsAccounts?: AdWordsAccount[],        
        // Web property being linked.
        entity?: {        
            // 
            webPropertyRef?: WebPropertyRef,
        },        
        // Entity AdWords link ID
        id?: string,
        // Resource type for entity AdWords link.
        kind?: string,
        // Name of the link. This field is required when creating an AdWords link.
        name?: string,
        // IDs of linked Views (Profiles) represented as strings.
        profileIds?: string[],        
        // URL link for this Google Analytics - Google AdWords link.
        selfLink?: string,
    }
    
    interface EntityAdWordsLinks {
        // A list of entity AdWords links.
        items?: EntityAdWordsLink[],        
        // The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
        itemsPerPage?: number,
        // Collection type.
        kind?: string,
        // Next link for this AdWords link collection.
        nextLink?: string,
        // Previous link for this AdWords link collection.
        previousLink?: string,
        // The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter.
        startIndex?: number,
        // The total number of results for the query, regardless of the number of results in the response.
        totalResults?: number,
    }
    
    interface EntityUserLink {
        // Entity for this link. It can be an account, a web property, or a view (profile).
        entity?: {        
            // Account for this link.
            accountRef?: AccountRef,
            // View (Profile) for this link.
            profileRef?: ProfileRef,
            // Web property for this link.
            webPropertyRef?: WebPropertyRef,
        },        
        // Entity user link ID
        id?: string,
        // Resource type for entity user link.
        kind?: string,
        // Permissions the user has for this entity.
        permissions?: {        
            // Effective permissions represent all the permissions that a user has for this entity. These include any implied permissions (e.g., EDIT implies VIEW) or inherited permissions from the parent entity. Effective permissions are read-only.
            effective?: string[],            
            // Permissions that a user has been assigned at this very level. Does not include any implied or inherited permissions. Local permissions are modifiable.
            local?: string[],            
        },        
        // Self link for this resource.
        selfLink?: string,
        // User reference.
        userRef?: UserRef,
    }
    
    interface EntityUserLinks {
        // A list of entity user links.
        items?: EntityUserLink[],        
        // The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
        itemsPerPage?: number,
        // Collection type.
        kind?: string,
        // Next link for this account collection.
        nextLink?: string,
        // Previous link for this account collection.
        previousLink?: string,
        // The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter.
        startIndex?: number,
        // The total number of results for the query, regardless of the number of results in the response.
        totalResults?: number,
    }
    
    interface Experiment {
        // Account ID to which this experiment belongs. This field is read-only.
        accountId?: string,
        // Time the experiment was created. This field is read-only.
        created?: string,
        // Notes about this experiment.
        description?: string,
        // If true, the end user will be able to edit the experiment via the Google Analytics user interface.
        editableInGaUi?: boolean,
        // The ending time of the experiment (the time the status changed from RUNNING to ENDED). This field is present only if the experiment has ended. This field is read-only.
        endTime?: string,
        // Boolean specifying whether to distribute traffic evenly across all variations. If the value is False, content experiments follows the default behavior of adjusting traffic dynamically based on variation performance. Optional -- defaults to False. This field may not be changed for an experiment whose status is ENDED.
        equalWeighting?: boolean,
        // Experiment ID. Required for patch and update. Disallowed for create.
        id?: string,
        // Internal ID for the web property to which this experiment belongs. This field is read-only.
        internalWebPropertyId?: string,
        // Resource type for an Analytics experiment. This field is read-only.
        kind?: string,
        // An integer number in [3, 90]. Specifies the minimum length of the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED.
        minimumExperimentLengthInDays?: number,
        // Experiment name. This field may not be changed for an experiment whose status is ENDED. This field is required when creating an experiment.
        name?: string,
        // The metric that the experiment is optimizing. Valid values: "ga:goal(n)Completions", "ga:adsenseAdsClicks", "ga:adsenseAdsViewed", "ga:adsenseRevenue", "ga:bounces", "ga:pageviews", "ga:sessionDuration", "ga:transactions", "ga:transactionRevenue". This field is required if status is "RUNNING" and servingFramework is one of "REDIRECT" or "API".
        objectiveMetric?: string,
        // Whether the objectiveMetric should be minimized or maximized. Possible values: "MAXIMUM", "MINIMUM". Optional--defaults to "MAXIMUM". Cannot be specified without objectiveMetric. Cannot be modified when status is "RUNNING" or "ENDED".
        optimizationType?: string,
        // Parent link for an experiment. Points to the view (profile) to which this experiment belongs.
        parentLink?: {        
            // Link to the view (profile) to which this experiment belongs. This field is read-only.
            href?: string,
            // Value is "analytics#profile". This field is read-only.
            type?: string,
        },        
        // View (Profile) ID to which this experiment belongs. This field is read-only.
        profileId?: string,
        // Why the experiment ended. Possible values: "STOPPED_BY_USER", "WINNER_FOUND", "EXPERIMENT_EXPIRED", "ENDED_WITH_NO_WINNER", "GOAL_OBJECTIVE_CHANGED". "ENDED_WITH_NO_WINNER" means that the experiment didn't expire but no winner was projected to be found. If the experiment status is changed via the API to ENDED this field is set to STOPPED_BY_USER. This field is read-only.
        reasonExperimentEnded?: string,
        // Boolean specifying whether variations URLS are rewritten to match those of the original. This field may not be changed for an experiments whose status is ENDED.
        rewriteVariationUrlsAsOriginal?: boolean,
        // Link for this experiment. This field is read-only.
        selfLink?: string,
        // The framework used to serve the experiment variations and evaluate the results. One of:  
        // - REDIRECT: Google Analytics redirects traffic to different variation pages, reports the chosen variation and evaluates the results.
        // - API: Google Analytics chooses and reports the variation to serve and evaluates the results; the caller is responsible for serving the selected variation.
        // - EXTERNAL: The variations will be served externally and the chosen variation reported to Google Analytics. The caller is responsible for serving the selected variation and evaluating the results.
        servingFramework?: string,
        // The snippet of code to include on the control page(s). This field is read-only.
        snippet?: string,
        // The starting time of the experiment (the time the status changed from READY_TO_RUN to RUNNING). This field is present only if the experiment has started. This field is read-only.
        startTime?: string,
        // Experiment status. Possible values: "DRAFT", "READY_TO_RUN", "RUNNING", "ENDED". Experiments can be created in the "DRAFT", "READY_TO_RUN" or "RUNNING" state. This field is required when creating an experiment.
        status?: string,
        // A floating-point number in (0, 1]. Specifies the fraction of the traffic that participates in the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED.
        trafficCoverage?: number,
        // Time the experiment was last modified. This field is read-only.
        updated?: string,
        // Array of variations. The first variation in the array is the original. The number of variations may not change once an experiment is in the RUNNING state. At least two variations are required before status can be set to RUNNING.
        variations?: {        
            // The name of the variation. This field is required when creating an experiment. This field may not be changed for an experiment whose status is ENDED.
            name?: string,
            // Status of the variation. Possible values: "ACTIVE", "INACTIVE". INACTIVE variations are not served. This field may not be changed for an experiment whose status is ENDED.
            status?: string,
            // The URL of the variation. This field may not be changed for an experiment whose status is RUNNING or ENDED.
            url?: string,
            // Weight that this variation should receive. Only present if the experiment is running. This field is read-only.
            weight?: number,
            // True if the experiment has ended and this variation performed (statistically) significantly better than the original. This field is read-only.
            won?: boolean,
        }[],        
        // Web property ID to which this experiment belongs. The web property ID is of the form UA-XXXXX-YY. This field is read-only.
        webPropertyId?: string,
        // A floating-point number in (0, 1). Specifies the necessary confidence level to choose a winner. This field may not be changed for an experiments whose status is ENDED.
        winnerConfidenceLevel?: number,
        // Boolean specifying whether a winner has been found for this experiment. This field is read-only.
        winnerFound?: boolean,
    }
    
    interface Experiments {
        // A list of experiments.
        items?: Experiment[],        
        // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
        itemsPerPage?: number,
        // Collection type.
        kind?: string,
        // Link to next page for this experiment collection.
        nextLink?: string,
        // Link to previous page for this experiment collection.
        previousLink?: string,
        // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
        startIndex?: number,
        // The total number of results for the query, regardless of the number of resources in the result.
        totalResults?: number,
        // Email ID of the authenticated user
        username?: string,
    }
    
    interface Filter {
        // Account ID to which this filter belongs.
        accountId?: string,
        // Details for the filter of the type ADVANCED.
        advancedDetails?: {        
            // Indicates if the filter expressions are case sensitive.
            caseSensitive?: boolean,
            // Expression to extract from field A.
            extractA?: string,
            // Expression to extract from field B.
            extractB?: string,
            // Field A.
            fieldA?: string,
            // The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
            fieldAIndex?: number,
            // Indicates if field A is required to match.
            fieldARequired?: boolean,
            // Field B.
            fieldB?: string,
            // The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
            fieldBIndex?: number,
            // Indicates if field B is required to match.
            fieldBRequired?: boolean,
            // Expression used to construct the output value.
            outputConstructor?: string,
            // Output field.
            outputToField?: string,
            // The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
            outputToFieldIndex?: number,
            // Indicates if the existing value of the output field, if any, should be overridden by the output expression.
            overrideOutputField?: boolean,
        },        
        // Time this filter was created.
        created?: string,
        // Details for the filter of the type EXCLUDE.
        excludeDetails?: FilterExpression,
        // Filter ID.
        id?: string,
        // Details for the filter of the type INCLUDE.
        includeDetails?: FilterExpression,
        // Resource type for Analytics filter.
        kind?: string,
        // Details for the filter of the type LOWER.
        lowercaseDetails?: {        
            // Field to use in the filter.
            field?: string,
            // The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
            fieldIndex?: number,
        },        
        // Name of this filter.
        name?: string,
        // Parent link for this filter. Points to the account to which this filter belongs.
        parentLink?: {        
            // Link to the account to which this filter belongs.
            href?: string,
            // Value is "analytics#account".
            type?: string,
        },        
        // Details for the filter of the type SEARCH_AND_REPLACE.
        searchAndReplaceDetails?: {        
            // Determines if the filter is case sensitive.
            caseSensitive?: boolean,
            // Field to use in the filter.
            field?: string,
            // The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
            fieldIndex?: number,
            // Term to replace the search term with.
            replaceString?: string,
            // Term to search.
            searchString?: string,
        },        
        // Link for this filter.
        selfLink?: string,
        // Type of this filter. Possible values are INCLUDE, EXCLUDE, LOWERCASE, UPPERCASE, SEARCH_AND_REPLACE and ADVANCED.
        type?: string,
        // Time this filter was last modified.
        updated?: string,
        // Details for the filter of the type UPPER.
        uppercaseDetails?: {        
            // Field to use in the filter.
            field?: string,
            // The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
            fieldIndex?: number,
        },        
    }
    
    interface FilterExpression {
        // Determines if the filter is case sensitive.
        caseSensitive?: boolean,
        // Filter expression value
        expressionValue?: string,
        // Field to filter. Possible values:  
        // - Content and Traffic  
        // - PAGE_REQUEST_URI, 
        // - PAGE_HOSTNAME, 
        // - PAGE_TITLE, 
        // - REFERRAL, 
        // - COST_DATA_URI (Campaign target URL), 
        // - HIT_TYPE, 
        // - INTERNAL_SEARCH_TERM, 
        // - INTERNAL_SEARCH_TYPE, 
        // - SOURCE_PROPERTY_TRACKING_ID,   
        // - Campaign or AdGroup  
        // - CAMPAIGN_SOURCE, 
        // - CAMPAIGN_MEDIUM, 
        // - CAMPAIGN_NAME, 
        // - CAMPAIGN_AD_GROUP, 
        // - CAMPAIGN_TERM, 
        // - CAMPAIGN_CONTENT, 
        // - CAMPAIGN_CODE, 
        // - CAMPAIGN_REFERRAL_PATH,   
        // - E-Commerce  
        // - TRANSACTION_COUNTRY, 
        // - TRANSACTION_REGION, 
        // - TRANSACTION_CITY, 
        // - TRANSACTION_AFFILIATION (Store or order location), 
        // - ITEM_NAME, 
        // - ITEM_CODE, 
        // - ITEM_VARIATION, 
        // - TRANSACTION_ID, 
        // - TRANSACTION_CURRENCY_CODE, 
        // - PRODUCT_ACTION_TYPE,   
        // - Audience/Users  
        // - BROWSER, 
        // - BROWSER_VERSION, 
        // - BROWSER_SIZE, 
        // - PLATFORM, 
        // - PLATFORM_VERSION, 
        // - LANGUAGE, 
        // - SCREEN_RESOLUTION, 
        // - SCREEN_COLORS, 
        // - JAVA_ENABLED (Boolean Field), 
        // - FLASH_VERSION, 
        // - GEO_SPEED (Connection speed), 
        // - VISITOR_TYPE, 
        // - GEO_ORGANIZATION (ISP organization), 
        // - GEO_DOMAIN, 
        // - GEO_IP_ADDRESS, 
        // - GEO_IP_VERSION,   
        // - Location  
        // - GEO_COUNTRY, 
        // - GEO_REGION, 
        // - GEO_CITY,   
        // - Event  
        // - EVENT_CATEGORY, 
        // - EVENT_ACTION, 
        // - EVENT_LABEL,   
        // - Other  
        // - CUSTOM_FIELD_1, 
        // - CUSTOM_FIELD_2, 
        // - USER_DEFINED_VALUE,   
        // - Application  
        // - APP_ID, 
        // - APP_INSTALLER_ID, 
        // - APP_NAME, 
        // - APP_VERSION, 
        // - SCREEN, 
        // - IS_APP (Boolean Field), 
        // - IS_FATAL_EXCEPTION (Boolean Field), 
        // - EXCEPTION_DESCRIPTION,   
        // - Mobile device  
        // - IS_MOBILE (Boolean Field, Deprecated. Use DEVICE_CATEGORY=mobile), 
        // - IS_TABLET (Boolean Field, Deprecated. Use DEVICE_CATEGORY=tablet), 
        // - DEVICE_CATEGORY, 
        // - MOBILE_HAS_QWERTY_KEYBOARD (Boolean Field), 
        // - MOBILE_HAS_NFC_SUPPORT (Boolean Field), 
        // - MOBILE_HAS_CELLULAR_RADIO (Boolean Field), 
        // - MOBILE_HAS_WIFI_SUPPORT (Boolean Field), 
        // - MOBILE_BRAND_NAME, 
        // - MOBILE_MODEL_NAME, 
        // - MOBILE_MARKETING_NAME, 
        // - MOBILE_POINTING_METHOD,   
        // - Social  
        // - SOCIAL_NETWORK, 
        // - SOCIAL_ACTION, 
        // - SOCIAL_ACTION_TARGET,   
        // - Custom dimension  
        // - CUSTOM_DIMENSION (See accompanying field index),
        field?: string,
        // The Index of the custom dimension. Set only if the field is a is CUSTOM_DIMENSION.
        fieldIndex?: number,
        // Kind value for filter expression
        kind?: string,
        // Match type for this filter. Possible values are BEGINS_WITH, EQUAL, ENDS_WITH, CONTAINS, or MATCHES. GEO_DOMAIN, GEO_IP_ADDRESS, PAGE_REQUEST_URI, or PAGE_HOSTNAME filters can use any match type; all other filters must use MATCHES.
        matchType?: string,
    }
    
    interface FilterRef {
        // Account ID to which this filter belongs.
        accountId?: string,
        // Link for this filter.
        href?: string,
        // Filter ID.
        id?: string,
        // Kind value for filter reference.
        kind?: string,
        // Name of this filter.
        name?: string,
    }
    
    interface Filters {
        // A list of filters.
        items?: Filter[],        
        // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
        itemsPerPage?: number,
        // Collection type.
        kind?: string,
        // Link to next page for this filter collection.
        nextLink?: string,
        // Link to previous page for this filter collection.
        previousLink?: string,
        // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
        startIndex?: number,
        // The total number of results for the query, regardless of the number of results in the response.
        totalResults?: number,
        // Email ID of the authenticated user
        username?: string,
    }
    
    interface GaData {
        // Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.
        columnHeaders?: {        
            // Column Type. Either DIMENSION or METRIC.
            columnType?: string,
            // Data type. Dimension column headers have only STRING as the data type. Metric column headers have data types for metric values such as INTEGER, DOUBLE, CURRENCY etc.
            dataType?: string,
            // Column name.
            name?: string,
        }[],        
        // Determines if Analytics data contains samples.
        containsSampledData?: boolean,
        // The last refreshed time in seconds for Analytics data.
        dataLastRefreshed?: string,
        // 
        dataTable?: {        
            // 
            cols?: {            
                // 
                id?: string,
                // 
                label?: string,
                // 
                type?: string,
            }[],            
            // 
            rows?: {            
                // 
                c?: {                
                    // 
                    v?: string,
                }[],                
            }[],            
        },        
        // Unique ID for this data response.
        id?: string,
        // The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
        itemsPerPage?: number,
        // Resource type.
        kind?: string,
        // Link to next page for this Analytics data query.
        nextLink?: string,
        // Link to previous page for this Analytics data query.
        previousLink?: string,
        // Information for the view (profile), for which the Analytics data was requested.
        profileInfo?: {        
            // Account ID to which this view (profile) belongs.
            accountId?: string,
            // Internal ID for the web property to which this view (profile) belongs.
            internalWebPropertyId?: string,
            // View (Profile) ID.
            profileId?: string,
            // View (Profile) name.
            profileName?: string,
            // Table ID for view (profile).
            tableId?: string,
            // Web Property ID to which this view (profile) belongs.
            webPropertyId?: string,
        },        
        // Analytics data request query parameters.
        query?: {        
            // List of analytics dimensions.
            dimensions?: string,
            // End date.
            end-date?: string,
            // Comma-separated list of dimension or metric filters.
            filters?: string,
            // Unique table ID.
            ids?: string,
            // Maximum results per page.
            max-results?: number,
            // List of analytics metrics.
            metrics?: string[],            
            // Desired sampling level
            samplingLevel?: string,
            // Analytics advanced segment.
            segment?: string,
            // List of dimensions or metrics based on which Analytics data is sorted.
            sort?: string[],            
            // Start date.
            start-date?: string,
            // Start index.
            start-index?: number,
        },        
        // Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request.
        rows?: string[][],        
        // The number of samples used to calculate the result.
        sampleSize?: string,
        // Total size of the sample space from which the samples were selected.
        sampleSpace?: string,
        // Link to this page.
        selfLink?: string,
        // The total number of rows for the query, regardless of the number of rows in the response.
        totalResults?: number,
        // Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request.
        totalsForAllResults?: any,
    }
    
    interface Goal {
        // Account ID to which this goal belongs.
        accountId?: string,
        // Determines whether this goal is active.
        active?: boolean,
        // Time this goal was created.
        created?: string,
        // Details for the goal of the type EVENT.
        eventDetails?: {        
            // List of event conditions.
            eventConditions?: {            
                // Type of comparison. Possible values are LESS_THAN, GREATER_THAN or EQUAL.
                comparisonType?: string,
                // Value used for this comparison.
                comparisonValue?: string,
                // Expression used for this match.
                expression?: string,
                // Type of the match to be performed. Possible values are REGEXP, BEGINS_WITH, or EXACT.
                matchType?: string,
                // Type of this event condition. Possible values are CATEGORY, ACTION, LABEL, or VALUE.
                type?: string,
            }[],            
            // Determines if the event value should be used as the value for this goal.
            useEventValue?: boolean,
        },        
        // Goal ID.
        id?: string,
        // Internal ID for the web property to which this goal belongs.
        internalWebPropertyId?: string,
        // Resource type for an Analytics goal.
        kind?: string,
        // Goal name.
        name?: string,
        // Parent link for a goal. Points to the view (profile) to which this goal belongs.
        parentLink?: {        
            // Link to the view (profile) to which this goal belongs.
            href?: string,
            // Value is "analytics#profile".
            type?: string,
        },        
        // View (Profile) ID to which this goal belongs.
        profileId?: string,
        // Link for this goal.
        selfLink?: string,
        // Goal type. Possible values are URL_DESTINATION, VISIT_TIME_ON_SITE, VISIT_NUM_PAGES, AND EVENT.
        type?: string,
        // Time this goal was last modified.
        updated?: string,
        // Details for the goal of the type URL_DESTINATION.
        urlDestinationDetails?: {        
            // Determines if the goal URL must exactly match the capitalization of visited URLs.
            caseSensitive?: boolean,
            // Determines if the first step in this goal is required.
            firstStepRequired?: boolean,
            // Match type for the goal URL. Possible values are HEAD, EXACT, or REGEX.
            matchType?: string,
            // List of steps configured for this goal funnel.
            steps?: {            
                // Step name.
                name?: string,
                // Step number.
                number?: number,
                // URL for this step.
                url?: string,
            }[],            
            // URL for this goal.
            url?: string,
        },        
        // Goal value.
        value?: number,
        // Details for the goal of the type VISIT_NUM_PAGES.
        visitNumPagesDetails?: {        
            // Type of comparison. Possible values are LESS_THAN, GREATER_THAN, or EQUAL.
            comparisonType?: string,
            // Value used for this comparison.
            comparisonValue?: string,
        },        
        // Details for the goal of the type VISIT_TIME_ON_SITE.
        visitTimeOnSiteDetails?: {        
            // Type of comparison. Possible values are LESS_THAN or GREATER_THAN.
            comparisonType?: string,
            // Value used for this comparison.
            comparisonValue?: string,
        },        
        // Web property ID to which this goal belongs. The web property ID is of the form UA-XXXXX-YY.
        webPropertyId?: string,
    }
    
    interface Goals {
        // A list of goals.
        items?: Goal[],        
        // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
        itemsPerPage?: number,
        // Collection type.
        kind?: string,
        // Link to next page for this goal collection.
        nextLink?: string,
        // Link to previous page for this goal collection.
        previousLink?: string,
        // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
        startIndex?: number,
        // The total number of results for the query, regardless of the number of resources in the result.
        totalResults?: number,
        // Email ID of the authenticated user
        username?: string,
    }
    
    interface IncludeConditions {
        // The look-back window lets you specify a time frame for evaluating the behavior that qualifies users for your audience. For example, if your filters include users from Central Asia, and Transactions Greater than 2, and you set the look-back window to 14 days, then any user from Central Asia whose cumulative transactions exceed 2 during the last 14 days is added to the audience.
        daysToLookBack?: number,
        // Boolean indicating whether this segment is a smart list. https://support.google.com/analytics/answer/4628577
        isSmartList?: boolean,
        // Resource type for include conditions.
        kind?: string,
        // Number of days (in the range 1 to 540) a user remains in the audience.
        membershipDurationDays?: number,
        // The segment condition that will cause a user to be added to an audience.
        segment?: string,
    }
    
    interface LinkedForeignAccount {
        // Account ID to which this linked foreign account belongs.
        accountId?: string,
        // Boolean indicating whether this is eligible for search.
        eligibleForSearch?: boolean,
        // Entity ad account link ID.
        id?: string,
        // Internal ID for the web property to which this linked foreign account belongs.
        internalWebPropertyId?: string,
        // Resource type for linked foreign account.
        kind?: string,
        // The foreign account ID. For example the an AdWords `linkedAccountId` has the following format XXX-XXX-XXXX.
        linkedAccountId?: string,
        // Remarketing audience ID to which this linked foreign account belongs.
        remarketingAudienceId?: string,
        // The status of this foreign account link.
        status?: string,
        // The type of the foreign account. For example `ADWORDS_LINKS`.
        type?: string,
        // Web property ID of the form UA-XXXXX-YY to which this linked foreign account belongs.
        webPropertyId?: string,
    }
    
    interface McfData {
        // Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.
        columnHeaders?: {        
            // Column Type. Either DIMENSION or METRIC.
            columnType?: string,
            // Data type. Dimension and metric values data types such as INTEGER, DOUBLE, CURRENCY, MCF_SEQUENCE etc.
            dataType?: string,
            // Column name.
            name?: string,
        }[],        
        // Determines if the Analytics data contains sampled data.
        containsSampledData?: boolean,
        // Unique ID for this data response.
        id?: string,
        // The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
        itemsPerPage?: number,
        // Resource type.
        kind?: string,
        // Link to next page for this Analytics data query.
        nextLink?: string,
        // Link to previous page for this Analytics data query.
        previousLink?: string,
        // Information for the view (profile), for which the Analytics data was requested.
        profileInfo?: {        
            // Account ID to which this view (profile) belongs.
            accountId?: string,
            // Internal ID for the web property to which this view (profile) belongs.
            internalWebPropertyId?: string,
            // View (Profile) ID.
            profileId?: string,
            // View (Profile) name.
            profileName?: string,
            // Table ID for view (profile).
            tableId?: string,
            // Web Property ID to which this view (profile) belongs.
            webPropertyId?: string,
        },        
        // Analytics data request query parameters.
        query?: {        
            // List of analytics dimensions.
            dimensions?: string,
            // End date.
            end-date?: string,
            // Comma-separated list of dimension or metric filters.
            filters?: string,
            // Unique table ID.
            ids?: string,
            // Maximum results per page.
            max-results?: number,
            // List of analytics metrics.
            metrics?: string[],            
            // Desired sampling level
            samplingLevel?: string,
            // Analytics advanced segment.
            segment?: string,
            // List of dimensions or metrics based on which Analytics data is sorted.
            sort?: string[],            
            // Start date.
            start-date?: string,
            // Start index.
            start-index?: number,
        },        
        // Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request.
        rows?: {        
            // A conversion path dimension value, containing a list of interactions with their attributes.
            conversionPathValue?: {            
                // Type of an interaction on conversion path. Such as CLICK, IMPRESSION etc.
                interactionType?: string,
                // Node value of an interaction on conversion path. Such as source, medium etc.
                nodeValue?: string,
            }[],            
            // A primitive dimension value. A primitive metric value.
            primitiveValue?: string,
        }[][],        
        // The number of samples used to calculate the result.
        sampleSize?: string,
        // Total size of the sample space from which the samples were selected.
        sampleSpace?: string,
        // Link to this page.
        selfLink?: string,
        // The total number of rows for the query, regardless of the number of rows in the response.
        totalResults?: number,
        // Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request.
        totalsForAllResults?: any,
    }
    
    interface Profile {
        // Account ID to which this view (profile) belongs.
        accountId?: string,
        // Indicates whether bot filtering is enabled for this view (profile).
        botFilteringEnabled?: boolean,
        // Child link for this view (profile). Points to the list of goals for this view (profile).
        childLink?: {        
            // Link to the list of goals for this view (profile).
            href?: string,
            // Value is "analytics#goals".
            type?: string,
        },        
        // Time this view (profile) was created.
        created?: string,
        // The currency type associated with this view (profile), defaults to USD. The supported values are:
        // USD, JPY, EUR, GBP, AUD, KRW, BRL, CNY, DKK, RUB, SEK, NOK, PLN, TRY, TWD, HKD, THB, IDR, ARS, MXN, VND, PHP, INR, CHF, CAD, CZK, NZD, HUF, BGN, LTL, ZAR, UAH, AED, BOB, CLP, COP, EGP, HRK, ILS, MAD, MYR, PEN, PKR, RON, RSD, SAR, SGD, VEF, LVL
        currency?: string,
        // Default page for this view (profile).
        defaultPage?: string,
        // Indicates whether ecommerce tracking is enabled for this view (profile).
        eCommerceTracking?: boolean,
        // Indicates whether enhanced ecommerce tracking is enabled for this view (profile). This property can only be enabled if ecommerce tracking is enabled.
        enhancedECommerceTracking?: boolean,
        // The query parameters that are excluded from this view (profile).
        excludeQueryParameters?: string,
        // View (Profile) ID.
        id?: string,
        // Internal ID for the web property to which this view (profile) belongs.
        internalWebPropertyId?: string,
        // Resource type for Analytics view (profile).
        kind?: string,
        // Name of this view (profile).
        name?: string,
        // Parent link for this view (profile). Points to the web property to which this view (profile) belongs.
        parentLink?: {        
            // Link to the web property to which this view (profile) belongs.
            href?: string,
            // Value is "analytics#webproperty".
            type?: string,
        },        
        // Permissions the user has for this view (profile).
        permissions?: {        
            // All the permissions that the user has for this view (profile). These include any implied permissions (e.g., EDIT implies VIEW) or inherited permissions from the parent web property.
            effective?: string[],            
        },        
        // Link for this view (profile).
        selfLink?: string,
        // Site search category parameters for this view (profile).
        siteSearchCategoryParameters?: string,
        // The site search query parameters for this view (profile).
        siteSearchQueryParameters?: string,
        // Indicates whether this view (profile) is starred or not.
        starred?: boolean,
        // Whether or not Analytics will strip search category parameters from the URLs in your reports.
        stripSiteSearchCategoryParameters?: boolean,
        // Whether or not Analytics will strip search query parameters from the URLs in your reports.
        stripSiteSearchQueryParameters?: boolean,
        // Time zone for which this view (profile) has been configured. Time zones are identified by strings from the TZ database.
        timezone?: string,
        // View (Profile) type. Supported types: WEB or APP.
        type?: string,
        // Time this view (profile) was last modified.
        updated?: string,
        // Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs.
        webPropertyId?: string,
        // Website URL for this view (profile).
        websiteUrl?: string,
    }
    
    interface ProfileFilterLink {
        // Filter for this link.
        filterRef?: FilterRef,
        // Profile filter link ID.
        id?: string,
        // Resource type for Analytics filter.
        kind?: string,
        // View (Profile) for this link.
        profileRef?: ProfileRef,
        // The rank of this profile filter link relative to the other filters linked to the same profile.
        // For readonly (i.e., list and get) operations, the rank always starts at 1.
        // For write (i.e., create, update, or delete) operations, you may specify a value between 0 and 255 inclusively, [0, 255]. In order to insert a link at the end of the list, either don't specify a rank or set a rank to a number greater than the largest rank in the list. In order to insert a link to the beginning of the list specify a rank that is less than or equal to 1. The new link will move all existing filters with the same or lower rank down the list. After the link is inserted/updated/deleted all profile filter links will be renumbered starting at 1.
        rank?: number,
        // Link for this profile filter link.
        selfLink?: string,
    }
    
    interface ProfileFilterLinks {
        // A list of profile filter links.
        items?: ProfileFilterLink[],        
        // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
        itemsPerPage?: number,
        // Collection type.
        kind?: string,
        // Link to next page for this profile filter link collection.
        nextLink?: string,
        // Link to previous page for this profile filter link collection.
        previousLink?: string,
        // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
        startIndex?: number,
        // The total number of results for the query, regardless of the number of results in the response.
        totalResults?: number,
        // Email ID of the authenticated user
        username?: string,
    }
    
    interface ProfileRef {
        // Account ID to which this view (profile) belongs.
        accountId?: string,
        // Link for this view (profile).
        href?: string,
        // View (Profile) ID.
        id?: string,
        // Internal ID for the web property to which this view (profile) belongs.
        internalWebPropertyId?: string,
        // Analytics view (profile) reference.
        kind?: string,
        // Name of this view (profile).
        name?: string,
        // Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs.
        webPropertyId?: string,
    }
    
    interface ProfileSummary {
        // View (profile) ID.
        id?: string,
        // Resource type for Analytics ProfileSummary.
        kind?: string,
        // View (profile) name.
        name?: string,
        // Indicates whether this view (profile) is starred or not.
        starred?: boolean,
        // View (Profile) type. Supported types: WEB or APP.
        type?: string,
    }
    
    interface Profiles {
        // A list of views (profiles).
        items?: Profile[],        
        // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
        itemsPerPage?: number,
        // Collection type.
        kind?: string,
        // Link to next page for this view (profile) collection.
        nextLink?: string,
        // Link to previous page for this view (profile) collection.
        previousLink?: string,
        // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
        startIndex?: number,
        // The total number of results for the query, regardless of the number of results in the response.
        totalResults?: number,
        // Email ID of the authenticated user
        username?: string,
    }
    
    interface RealtimeData {
        // Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.
        columnHeaders?: {        
            // Column Type. Either DIMENSION or METRIC.
            columnType?: string,
            // Data type. Dimension column headers have only STRING as the data type. Metric column headers have data types for metric values such as INTEGER, DOUBLE, CURRENCY etc.
            dataType?: string,
            // Column name.
            name?: string,
        }[],        
        // Unique ID for this data response.
        id?: string,
        // Resource type.
        kind?: string,
        // Information for the view (profile), for which the real time data was requested.
        profileInfo?: {        
            // Account ID to which this view (profile) belongs.
            accountId?: string,
            // Internal ID for the web property to which this view (profile) belongs.
            internalWebPropertyId?: string,
            // View (Profile) ID.
            profileId?: string,
            // View (Profile) name.
            profileName?: string,
            // Table ID for view (profile).
            tableId?: string,
            // Web Property ID to which this view (profile) belongs.
            webPropertyId?: string,
        },        
        // Real time data request query parameters.
        query?: {        
            // List of real time dimensions.
            dimensions?: string,
            // Comma-separated list of dimension or metric filters.
            filters?: string,
            // Unique table ID.
            ids?: string,
            // Maximum results per page.
            max-results?: number,
            // List of real time metrics.
            metrics?: string[],            
            // List of dimensions or metrics based on which real time data is sorted.
            sort?: string[],            
        },        
        // Real time data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request.
        rows?: string[][],        
        // Link to this page.
        selfLink?: string,
        // The total number of rows for the query, regardless of the number of rows in the response.
        totalResults?: number,
        // Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request.
        totalsForAllResults?: any,
    }
    
    interface RemarketingAudience {
        // Account ID to which this remarketing audience belongs.
        accountId?: string,
        // The simple audience definition that will cause a user to be added to an audience.
        audienceDefinition?: {        
            // Defines the conditions to include users to the audience.
            includeConditions?: IncludeConditions,
        },        
        // The type of audience, either SIMPLE or STATE_BASED.
        audienceType?: string,
        // Time this remarketing audience was created.
        created?: string,
        // The description of this remarketing audience.
        description?: string,
        // Remarketing Audience ID.
        id?: string,
        // Internal ID for the web property to which this remarketing audience belongs.
        internalWebPropertyId?: string,
        // Collection type.
        kind?: string,
        // The linked ad accounts associated with this remarketing audience. A remarketing audience can have only one linkedAdAccount currently.
        linkedAdAccounts?: LinkedForeignAccount[],        
        // The views (profiles) that this remarketing audience is linked to.
        linkedViews?: string[],        
        // The name of this remarketing audience.
        name?: string,
        // A state based audience definition that will cause a user to be added or removed from an audience.
        stateBasedAudienceDefinition?: {        
            // Defines the conditions to exclude users from the audience.
            excludeConditions?: {            
                // Whether to make the exclusion TEMPORARY or PERMANENT.
                exclusionDuration?: string,
                // The segment condition that will cause a user to be removed from an audience.
                segment?: string,
            },            
            // Defines the conditions to include users to the audience.
            includeConditions?: IncludeConditions,
        },        
        // Time this remarketing audience was last modified.
        updated?: string,
        // Web property ID of the form UA-XXXXX-YY to which this remarketing audience belongs.
        webPropertyId?: string,
    }
    
    interface RemarketingAudiences {
        // A list of remarketing audiences.
        items?: RemarketingAudience[],        
        // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
        itemsPerPage?: number,
        // Collection type.
        kind?: string,
        // Link to next page for this remarketing audience collection.
        nextLink?: string,
        // Link to previous page for this view (profile) collection.
        previousLink?: string,
        // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
        startIndex?: number,
        // The total number of results for the query, regardless of the number of results in the response.
        totalResults?: number,
        // Email ID of the authenticated user
        username?: string,
    }
    
    interface Segment {
        // Time the segment was created.
        created?: string,
        // Segment definition.
        definition?: string,
        // Segment ID.
        id?: string,
        // Resource type for Analytics segment.
        kind?: string,
        // Segment name.
        name?: string,
        // Segment ID. Can be used with the 'segment' parameter in Core Reporting API.
        segmentId?: string,
        // Link for this segment.
        selfLink?: string,
        // Type for a segment. Possible values are "BUILT_IN" or "CUSTOM".
        type?: string,
        // Time the segment was last modified.
        updated?: string,
    }
    
    interface Segments {
        // A list of segments.
        items?: Segment[],        
        // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
        itemsPerPage?: number,
        // Collection type for segments.
        kind?: string,
        // Link to next page for this segment collection.
        nextLink?: string,
        // Link to previous page for this segment collection.
        previousLink?: string,
        // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
        startIndex?: number,
        // The total number of results for the query, regardless of the number of results in the response.
        totalResults?: number,
        // Email ID of the authenticated user
        username?: string,
    }
    
    interface UnsampledReport {
        // Account ID to which this unsampled report belongs.
        accountId?: string,
        // Download details for a file stored in Google Cloud Storage.
        cloudStorageDownloadDetails?: {        
            // Id of the bucket the file object is stored in.
            bucketId?: string,
            // Id of the file object containing the report data.
            objectId?: string,
        },        
        // Time this unsampled report was created.
        created?: string,
        // The dimensions for the unsampled report.
        dimensions?: string,
        // The type of download you need to use for the report data file. Possible values include `GOOGLE_DRIVE` and `GOOGLE_CLOUD_STORAGE`. If the value is `GOOGLE_DRIVE`, see the `driveDownloadDetails` field. If the value is `GOOGLE_CLOUD_STORAGE`, see the `cloudStorageDownloadDetails` field.
        downloadType?: string,
        // Download details for a file stored in Google Drive.
        driveDownloadDetails?: {        
            // Id of the document/file containing the report data.
            documentId?: string,
        },        
        // The end date for the unsampled report.
        end-date?: string,
        // The filters for the unsampled report.
        filters?: string,
        // Unsampled report ID.
        id?: string,
        // Resource type for an Analytics unsampled report.
        kind?: string,
        // The metrics for the unsampled report.
        metrics?: string,
        // View (Profile) ID to which this unsampled report belongs.
        profileId?: string,
        // The segment for the unsampled report.
        segment?: string,
        // Link for this unsampled report.
        selfLink?: string,
        // The start date for the unsampled report.
        start-date?: string,
        // Status of this unsampled report. Possible values are PENDING, COMPLETED, or FAILED.
        status?: string,
        // Title of the unsampled report.
        title?: string,
        // Time this unsampled report was last modified.
        updated?: string,
        // Web property ID to which this unsampled report belongs. The web property ID is of the form UA-XXXXX-YY.
        webPropertyId?: string,
    }
    
    interface UnsampledReports {
        // A list of unsampled reports.
        items?: UnsampledReport[],        
        // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
        itemsPerPage?: number,
        // Collection type.
        kind?: string,
        // Link to next page for this unsampled report collection.
        nextLink?: string,
        // Link to previous page for this unsampled report collection.
        previousLink?: string,
        // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
        startIndex?: number,
        // The total number of results for the query, regardless of the number of resources in the result.
        totalResults?: number,
        // Email ID of the authenticated user
        username?: string,
    }
    
    interface Upload {
        // Account Id to which this upload belongs.
        accountId?: string,
        // Custom data source Id to which this data import belongs.
        customDataSourceId?: string,
        // Data import errors collection.
        errors?: string[],        
        // A unique ID for this upload.
        id?: string,
        // Resource type for Analytics upload.
        kind?: string,
        // Upload status. Possible values: PENDING, COMPLETED, FAILED, DELETING, DELETED.
        status?: string,
    }
    
    interface Uploads {
        // A list of uploads.
        items?: Upload[],        
        // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
        itemsPerPage?: number,
        // Collection type.
        kind?: string,
        // Link to next page for this upload collection.
        nextLink?: string,
        // Link to previous page for this upload collection.
        previousLink?: string,
        // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
        startIndex?: number,
        // The total number of results for the query, regardless of the number of resources in the result.
        totalResults?: number,
    }
    
    interface UserRef {
        // Email ID of this user.
        email?: string,
        // User ID.
        id?: string,
        // 
        kind?: string,
    }
    
    interface WebPropertyRef {
        // Account ID to which this web property belongs.
        accountId?: string,
        // Link for this web property.
        href?: string,
        // Web property ID of the form UA-XXXXX-YY.
        id?: string,
        // Internal ID for this web property.
        internalWebPropertyId?: string,
        // Analytics web property reference.
        kind?: string,
        // Name of this web property.
        name?: string,
    }
    
    interface WebPropertySummary {
        // Web property ID of the form UA-XXXXX-YY.
        id?: string,
        // Internal ID for this web property.
        internalWebPropertyId?: string,
        // Resource type for Analytics WebPropertySummary.
        kind?: string,
        // Level for this web property. Possible values are STANDARD or PREMIUM.
        level?: string,
        // Web property name.
        name?: string,
        // List of profiles under this web property.
        profiles?: ProfileSummary[],        
        // Indicates whether this web property is starred or not.
        starred?: boolean,
        // Website url for this web property.
        websiteUrl?: string,
    }
    
    interface Webproperties {
        // A list of web properties.
        items?: Webproperty[],        
        // The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
        itemsPerPage?: number,
        // Collection type.
        kind?: string,
        // Link to next page for this web property collection.
        nextLink?: string,
        // Link to previous page for this web property collection.
        previousLink?: string,
        // The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
        startIndex?: number,
        // The total number of results for the query, regardless of the number of results in the response.
        totalResults?: number,
        // Email ID of the authenticated user
        username?: string,
    }
    
    interface Webproperty {
        // Account ID to which this web property belongs.
        accountId?: string,
        // Child link for this web property. Points to the list of views (profiles) for this web property.
        childLink?: {        
            // Link to the list of views (profiles) for this web property.
            href?: string,
            // Type of the parent link. Its value is "analytics#profiles".
            type?: string,
        },        
        // Time this web property was created.
        created?: string,
        // Default view (profile) ID.
        defaultProfileId?: string,
        // Web property ID of the form UA-XXXXX-YY.
        id?: string,
        // The industry vertical/category selected for this web property.
        industryVertical?: string,
        // Internal ID for this web property.
        internalWebPropertyId?: string,
        // Resource type for Analytics WebProperty.
        kind?: string,
        // Level for this web property. Possible values are STANDARD or PREMIUM.
        level?: string,
        // Name of this web property.
        name?: string,
        // Parent link for this web property. Points to the account to which this web property belongs.
        parentLink?: {        
            // Link to the account for this web property.
            href?: string,
            // Type of the parent link. Its value is "analytics#account".
            type?: string,
        },        
        // Permissions the user has for this web property.
        permissions?: {        
            // All the permissions that the user has for this web property. These include any implied permissions (e.g., EDIT implies VIEW) or inherited permissions from the parent account.
            effective?: string[],            
        },        
        // View (Profile) count for this web property.
        profileCount?: number,
        // Link for this web property.
        selfLink?: string,
        // Indicates whether this web property is starred or not.
        starred?: boolean,
        // Time this web property was last modified.
        updated?: string,
        // Website url for this web property.
        websiteUrl?: string,
    }
    
    interface GaResource {
        // Returns Analytics data for a view (profile).
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
            // A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.
            dimensions?: string,
            // End date for fetching Analytics data. Request can should specify an end date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is yesterday.
            end-date: string,
            // A comma-separated list of dimension or metric filters to be applied to Analytics data.
            filters?: string,
            // Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
            ids: string,
            // The response will include empty rows if this parameter is set to true, the default is true
            include-empty-rows?: boolean,
            // The maximum number of entries to include in this feed.
            max-results?: number,
            // A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified.
            metrics: string,
            // The selected format for the response. Default format is JSON.
            output?: string,
            // The desired sampling level.
            samplingLevel?: string,
            // An Analytics segment to be applied to data.
            segment?: string,
            // A comma-separated list of dimensions or metrics that determine the sort order for Analytics data.
            sort?: string,
            // Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
            start-date: string,
            // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
        }) : gapi.client.Request<GaData>;        
        
    }
    
    
    interface McfResource {
        // Returns Analytics Multi-Channel Funnels data for a view (profile).
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
            // A comma-separated list of Multi-Channel Funnels dimensions. E.g., 'mcf:source,mcf:medium'.
            dimensions?: string,
            // End date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
            end-date: string,
            // A comma-separated list of dimension or metric filters to be applied to the Analytics data.
            filters?: string,
            // Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
            ids: string,
            // The maximum number of entries to include in this feed.
            max-results?: number,
            // A comma-separated list of Multi-Channel Funnels metrics. E.g., 'mcf:totalConversions,mcf:totalConversionValue'. At least one metric must be specified.
            metrics: string,
            // The desired sampling level.
            samplingLevel?: string,
            // A comma-separated list of dimensions or metrics that determine the sort order for the Analytics data.
            sort?: string,
            // Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
            start-date: string,
            // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
        }) : gapi.client.Request<McfData>;        
        
    }
    
    
    interface RealtimeResource {
        // Returns real time data for a view (profile).
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
            // A comma-separated list of real time dimensions. E.g., 'rt:medium,rt:city'.
            dimensions?: string,
            // A comma-separated list of dimension or metric filters to be applied to real time data.
            filters?: string,
            // Unique table ID for retrieving real time data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
            ids: string,
            // The maximum number of entries to include in this feed.
            max-results?: number,
            // A comma-separated list of real time metrics. E.g., 'rt:activeUsers'. At least one metric must be specified.
            metrics: string,
            // A comma-separated list of dimensions or metrics that determine the sort order for real time data.
            sort?: string,
        }) : gapi.client.Request<RealtimeData>;        
        
    }
    
    
    interface DataResource {
        ga: GaResource,
        mcf: McfResource,
        realtime: RealtimeResource,
    }
    
    
    interface AccountSummariesResource {
        // Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.
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
            // The maximum number of account summaries to include in this response, where the largest acceptable value is 1000.
            max-results?: number,
            // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
        }) : gapi.client.Request<AccountSummaries>;        
        
    }
    
    
    interface AccountUserLinksResource {
        // Removes a user from the given account.
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
            // Account ID to delete the user link for.
            accountId: string,
            // Link ID to delete the user link for.
            linkId: string,
        }) : gapi.client.Request<void>;        
        
        // Adds a new user to the given account.
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
            // Account ID to create the user link for.
            accountId: string,
        }) : gapi.client.Request<EntityUserLink>;        
        
        // Lists account-user links for a given account.
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
            // Account ID to retrieve the user links for.
            accountId: string,
            // The maximum number of account-user links to include in this response.
            max-results?: number,
            // An index of the first account-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
        }) : gapi.client.Request<EntityUserLinks>;        
        
        // Updates permissions for an existing user on the given account.
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
            // Account ID to update the account-user link for.
            accountId: string,
            // Link ID to update the account-user link for.
            linkId: string,
        }) : gapi.client.Request<EntityUserLink>;        
        
    }
    
    
    interface AccountsResource {
        // Lists all accounts to which the user has access.
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
            // The maximum number of accounts to include in this response.
            max-results?: number,
            // An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
        }) : gapi.client.Request<Accounts>;        
        
    }
    
    
    interface CustomDataSourcesResource {
        // List custom data sources to which the user has access.
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
            // Account Id for the custom data sources to retrieve.
            accountId: string,
            // The maximum number of custom data sources to include in this response.
            max-results?: number,
            // A 1-based index of the first custom data source to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
            // Web property Id for the custom data sources to retrieve.
            webPropertyId: string,
        }) : gapi.client.Request<CustomDataSources>;        
        
    }
    
    
    interface CustomDimensionsResource {
        // Get a custom dimension to which the user has access.
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
            // Account ID for the custom dimension to retrieve.
            accountId: string,
            // The ID of the custom dimension to retrieve.
            customDimensionId: string,
            // Web property ID for the custom dimension to retrieve.
            webPropertyId: string,
        }) : gapi.client.Request<CustomDimension>;        
        
        // Create a new custom dimension.
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
            // Account ID for the custom dimension to create.
            accountId: string,
            // Web property ID for the custom dimension to create.
            webPropertyId: string,
        }) : gapi.client.Request<CustomDimension>;        
        
        // Lists custom dimensions to which the user has access.
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
            // Account ID for the custom dimensions to retrieve.
            accountId: string,
            // The maximum number of custom dimensions to include in this response.
            max-results?: number,
            // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
            // Web property ID for the custom dimensions to retrieve.
            webPropertyId: string,
        }) : gapi.client.Request<CustomDimensions>;        
        
        // Updates an existing custom dimension. This method supports patch semantics.
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
            // Account ID for the custom dimension to update.
            accountId: string,
            // Custom dimension ID for the custom dimension to update.
            customDimensionId: string,
            // Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.
            ignoreCustomDataSourceLinks?: boolean,
            // Web property ID for the custom dimension to update.
            webPropertyId: string,
        }) : gapi.client.Request<CustomDimension>;        
        
        // Updates an existing custom dimension.
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
            // Account ID for the custom dimension to update.
            accountId: string,
            // Custom dimension ID for the custom dimension to update.
            customDimensionId: string,
            // Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.
            ignoreCustomDataSourceLinks?: boolean,
            // Web property ID for the custom dimension to update.
            webPropertyId: string,
        }) : gapi.client.Request<CustomDimension>;        
        
    }
    
    
    interface CustomMetricsResource {
        // Get a custom metric to which the user has access.
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
            // Account ID for the custom metric to retrieve.
            accountId: string,
            // The ID of the custom metric to retrieve.
            customMetricId: string,
            // Web property ID for the custom metric to retrieve.
            webPropertyId: string,
        }) : gapi.client.Request<CustomMetric>;        
        
        // Create a new custom metric.
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
            // Account ID for the custom metric to create.
            accountId: string,
            // Web property ID for the custom dimension to create.
            webPropertyId: string,
        }) : gapi.client.Request<CustomMetric>;        
        
        // Lists custom metrics to which the user has access.
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
            // Account ID for the custom metrics to retrieve.
            accountId: string,
            // The maximum number of custom metrics to include in this response.
            max-results?: number,
            // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
            // Web property ID for the custom metrics to retrieve.
            webPropertyId: string,
        }) : gapi.client.Request<CustomMetrics>;        
        
        // Updates an existing custom metric. This method supports patch semantics.
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
            // Account ID for the custom metric to update.
            accountId: string,
            // Custom metric ID for the custom metric to update.
            customMetricId: string,
            // Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.
            ignoreCustomDataSourceLinks?: boolean,
            // Web property ID for the custom metric to update.
            webPropertyId: string,
        }) : gapi.client.Request<CustomMetric>;        
        
        // Updates an existing custom metric.
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
            // Account ID for the custom metric to update.
            accountId: string,
            // Custom metric ID for the custom metric to update.
            customMetricId: string,
            // Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.
            ignoreCustomDataSourceLinks?: boolean,
            // Web property ID for the custom metric to update.
            webPropertyId: string,
        }) : gapi.client.Request<CustomMetric>;        
        
    }
    
    
    interface ExperimentsResource {
        // Delete an experiment.
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
            // Account ID to which the experiment belongs
            accountId: string,
            // ID of the experiment to delete
            experimentId: string,
            // View (Profile) ID to which the experiment belongs
            profileId: string,
            // Web property ID to which the experiment belongs
            webPropertyId: string,
        }) : gapi.client.Request<void>;        
        
        // Returns an experiment to which the user has access.
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
            // Account ID to retrieve the experiment for.
            accountId: string,
            // Experiment ID to retrieve the experiment for.
            experimentId: string,
            // View (Profile) ID to retrieve the experiment for.
            profileId: string,
            // Web property ID to retrieve the experiment for.
            webPropertyId: string,
        }) : gapi.client.Request<Experiment>;        
        
        // Create a new experiment.
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
            // Account ID to create the experiment for.
            accountId: string,
            // View (Profile) ID to create the experiment for.
            profileId: string,
            // Web property ID to create the experiment for.
            webPropertyId: string,
        }) : gapi.client.Request<Experiment>;        
        
        // Lists experiments to which the user has access.
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
            // Account ID to retrieve experiments for.
            accountId: string,
            // The maximum number of experiments to include in this response.
            max-results?: number,
            // View (Profile) ID to retrieve experiments for.
            profileId: string,
            // An index of the first experiment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
            // Web property ID to retrieve experiments for.
            webPropertyId: string,
        }) : gapi.client.Request<Experiments>;        
        
        // Update an existing experiment. This method supports patch semantics.
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
            // Account ID of the experiment to update.
            accountId: string,
            // Experiment ID of the experiment to update.
            experimentId: string,
            // View (Profile) ID of the experiment to update.
            profileId: string,
            // Web property ID of the experiment to update.
            webPropertyId: string,
        }) : gapi.client.Request<Experiment>;        
        
        // Update an existing experiment.
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
            // Account ID of the experiment to update.
            accountId: string,
            // Experiment ID of the experiment to update.
            experimentId: string,
            // View (Profile) ID of the experiment to update.
            profileId: string,
            // Web property ID of the experiment to update.
            webPropertyId: string,
        }) : gapi.client.Request<Experiment>;        
        
    }
    
    
    interface FiltersResource {
        // Delete a filter.
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
            // Account ID to delete the filter for.
            accountId: string,
            // ID of the filter to be deleted.
            filterId: string,
        }) : gapi.client.Request<Filter>;        
        
        // Returns a filters to which the user has access.
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
            // Account ID to retrieve filters for.
            accountId: string,
            // Filter ID to retrieve filters for.
            filterId: string,
        }) : gapi.client.Request<Filter>;        
        
        // Create a new filter.
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
            // Account ID to create filter for.
            accountId: string,
        }) : gapi.client.Request<Filter>;        
        
        // Lists all filters for an account
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
            // Account ID to retrieve filters for.
            accountId: string,
            // The maximum number of filters to include in this response.
            max-results?: number,
            // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
        }) : gapi.client.Request<Filters>;        
        
        // Updates an existing filter. This method supports patch semantics.
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
            // Account ID to which the filter belongs.
            accountId: string,
            // ID of the filter to be updated.
            filterId: string,
        }) : gapi.client.Request<Filter>;        
        
        // Updates an existing filter.
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
            // Account ID to which the filter belongs.
            accountId: string,
            // ID of the filter to be updated.
            filterId: string,
        }) : gapi.client.Request<Filter>;        
        
    }
    
    
    interface GoalsResource {
        // Gets a goal to which the user has access.
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
            // Account ID to retrieve the goal for.
            accountId: string,
            // Goal ID to retrieve the goal for.
            goalId: string,
            // View (Profile) ID to retrieve the goal for.
            profileId: string,
            // Web property ID to retrieve the goal for.
            webPropertyId: string,
        }) : gapi.client.Request<Goal>;        
        
        // Create a new goal.
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
            // Account ID to create the goal for.
            accountId: string,
            // View (Profile) ID to create the goal for.
            profileId: string,
            // Web property ID to create the goal for.
            webPropertyId: string,
        }) : gapi.client.Request<Goal>;        
        
        // Lists goals to which the user has access.
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
            // Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
            accountId: string,
            // The maximum number of goals to include in this response.
            max-results?: number,
            // View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to.
            profileId: string,
            // An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
            // Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
            webPropertyId: string,
        }) : gapi.client.Request<Goals>;        
        
        // Updates an existing goal. This method supports patch semantics.
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
            // Account ID to update the goal.
            accountId: string,
            // Index of the goal to be updated.
            goalId: string,
            // View (Profile) ID to update the goal.
            profileId: string,
            // Web property ID to update the goal.
            webPropertyId: string,
        }) : gapi.client.Request<Goal>;        
        
        // Updates an existing goal.
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
            // Account ID to update the goal.
            accountId: string,
            // Index of the goal to be updated.
            goalId: string,
            // View (Profile) ID to update the goal.
            profileId: string,
            // Web property ID to update the goal.
            webPropertyId: string,
        }) : gapi.client.Request<Goal>;        
        
    }
    
    
    interface ProfileFilterLinksResource {
        // Delete a profile filter link.
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
            // Account ID to which the profile filter link belongs.
            accountId: string,
            // ID of the profile filter link to delete.
            linkId: string,
            // Profile ID to which the filter link belongs.
            profileId: string,
            // Web property Id to which the profile filter link belongs.
            webPropertyId: string,
        }) : gapi.client.Request<void>;        
        
        // Returns a single profile filter link.
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
            // Account ID to retrieve profile filter link for.
            accountId: string,
            // ID of the profile filter link.
            linkId: string,
            // Profile ID to retrieve filter link for.
            profileId: string,
            // Web property Id to retrieve profile filter link for.
            webPropertyId: string,
        }) : gapi.client.Request<ProfileFilterLink>;        
        
        // Create a new profile filter link.
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
            // Account ID to create profile filter link for.
            accountId: string,
            // Profile ID to create filter link for.
            profileId: string,
            // Web property Id to create profile filter link for.
            webPropertyId: string,
        }) : gapi.client.Request<ProfileFilterLink>;        
        
        // Lists all profile filter links for a profile.
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
            // Account ID to retrieve profile filter links for.
            accountId: string,
            // The maximum number of profile filter links to include in this response.
            max-results?: number,
            // Profile ID to retrieve filter links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
            profileId: string,
            // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
            // Web property Id for profile filter links for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
            webPropertyId: string,
        }) : gapi.client.Request<ProfileFilterLinks>;        
        
        // Update an existing profile filter link. This method supports patch semantics.
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
            // Account ID to which profile filter link belongs.
            accountId: string,
            // ID of the profile filter link to be updated.
            linkId: string,
            // Profile ID to which filter link belongs
            profileId: string,
            // Web property Id to which profile filter link belongs
            webPropertyId: string,
        }) : gapi.client.Request<ProfileFilterLink>;        
        
        // Update an existing profile filter link.
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
            // Account ID to which profile filter link belongs.
            accountId: string,
            // ID of the profile filter link to be updated.
            linkId: string,
            // Profile ID to which filter link belongs
            profileId: string,
            // Web property Id to which profile filter link belongs
            webPropertyId: string,
        }) : gapi.client.Request<ProfileFilterLink>;        
        
    }
    
    
    interface ProfileUserLinksResource {
        // Removes a user from the given view (profile).
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
            // Account ID to delete the user link for.
            accountId: string,
            // Link ID to delete the user link for.
            linkId: string,
            // View (Profile) ID to delete the user link for.
            profileId: string,
            // Web Property ID to delete the user link for.
            webPropertyId: string,
        }) : gapi.client.Request<void>;        
        
        // Adds a new user to the given view (profile).
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
            // Account ID to create the user link for.
            accountId: string,
            // View (Profile) ID to create the user link for.
            profileId: string,
            // Web Property ID to create the user link for.
            webPropertyId: string,
        }) : gapi.client.Request<EntityUserLink>;        
        
        // Lists profile-user links for a given view (profile).
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
            // Account ID which the given view (profile) belongs to.
            accountId: string,
            // The maximum number of profile-user links to include in this response.
            max-results?: number,
            // View (Profile) ID to retrieve the profile-user links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
            profileId: string,
            // An index of the first profile-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
            // Web Property ID which the given view (profile) belongs to. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
            webPropertyId: string,
        }) : gapi.client.Request<EntityUserLinks>;        
        
        // Updates permissions for an existing user on the given view (profile).
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
            // Account ID to update the user link for.
            accountId: string,
            // Link ID to update the user link for.
            linkId: string,
            // View (Profile ID) to update the user link for.
            profileId: string,
            // Web Property ID to update the user link for.
            webPropertyId: string,
        }) : gapi.client.Request<EntityUserLink>;        
        
    }
    
    
    interface ProfilesResource {
        // Deletes a view (profile).
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
            // Account ID to delete the view (profile) for.
            accountId: string,
            // ID of the view (profile) to be deleted.
            profileId: string,
            // Web property ID to delete the view (profile) for.
            webPropertyId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets a view (profile) to which the user has access.
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
            // Account ID to retrieve the view (profile) for.
            accountId: string,
            // View (Profile) ID to retrieve the view (profile) for.
            profileId: string,
            // Web property ID to retrieve the view (profile) for.
            webPropertyId: string,
        }) : gapi.client.Request<Profile>;        
        
        // Create a new view (profile).
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
            // Account ID to create the view (profile) for.
            accountId: string,
            // Web property ID to create the view (profile) for.
            webPropertyId: string,
        }) : gapi.client.Request<Profile>;        
        
        // Lists views (profiles) to which the user has access.
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
            // Account ID for the view (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access.
            accountId: string,
            // The maximum number of views (profiles) to include in this response.
            max-results?: number,
            // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
            // Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access.
            webPropertyId: string,
        }) : gapi.client.Request<Profiles>;        
        
        // Updates an existing view (profile). This method supports patch semantics.
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
            // Account ID to which the view (profile) belongs
            accountId: string,
            // ID of the view (profile) to be updated.
            profileId: string,
            // Web property ID to which the view (profile) belongs
            webPropertyId: string,
        }) : gapi.client.Request<Profile>;        
        
        // Updates an existing view (profile).
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
            // Account ID to which the view (profile) belongs
            accountId: string,
            // ID of the view (profile) to be updated.
            profileId: string,
            // Web property ID to which the view (profile) belongs
            webPropertyId: string,
        }) : gapi.client.Request<Profile>;        
        
    }
    
    
    interface RemarketingAudienceResource {
        // Delete a remarketing audience.
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
            // Account ID to which the remarketing audience belongs.
            accountId: string,
            // The ID of the remarketing audience to delete.
            remarketingAudienceId: string,
            // Web property ID to which the remarketing audience belongs.
            webPropertyId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets a remarketing audience to which the user has access.
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
            // The account ID of the remarketing audience to retrieve.
            accountId: string,
            // The ID of the remarketing audience to retrieve.
            remarketingAudienceId: string,
            // The web property ID of the remarketing audience to retrieve.
            webPropertyId: string,
        }) : gapi.client.Request<RemarketingAudience>;        
        
        // Creates a new remarketing audience.
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
            // The account ID for which to create the remarketing audience.
            accountId: string,
            // Web property ID for which to create the remarketing audience.
            webPropertyId: string,
        }) : gapi.client.Request<RemarketingAudience>;        
        
        // Lists remarketing audiences to which the user has access.
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
            // The account ID of the remarketing audiences to retrieve.
            accountId: string,
            // The maximum number of remarketing audiences to include in this response.
            max-results?: number,
            // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
            // 
            type?: string,
            // The web property ID of the remarketing audiences to retrieve.
            webPropertyId: string,
        }) : gapi.client.Request<RemarketingAudiences>;        
        
        // Updates an existing remarketing audience. This method supports patch semantics.
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
            // The account ID of the remarketing audience to update.
            accountId: string,
            // The ID of the remarketing audience to update.
            remarketingAudienceId: string,
            // The web property ID of the remarketing audience to update.
            webPropertyId: string,
        }) : gapi.client.Request<RemarketingAudience>;        
        
        // Updates an existing remarketing audience.
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
            // The account ID of the remarketing audience to update.
            accountId: string,
            // The ID of the remarketing audience to update.
            remarketingAudienceId: string,
            // The web property ID of the remarketing audience to update.
            webPropertyId: string,
        }) : gapi.client.Request<RemarketingAudience>;        
        
    }
    
    
    interface SegmentsResource {
        // Lists segments to which the user has access.
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
            // The maximum number of segments to include in this response.
            max-results?: number,
            // An index of the first segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
        }) : gapi.client.Request<Segments>;        
        
    }
    
    
    interface UnsampledReportsResource {
        // Deletes an unsampled report.
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
            // Account ID to delete the unsampled report for.
            accountId: string,
            // View (Profile) ID to delete the unsampled report for.
            profileId: string,
            // ID of the unsampled report to be deleted.
            unsampledReportId: string,
            // Web property ID to delete the unsampled reports for.
            webPropertyId: string,
        }) : gapi.client.Request<void>;        
        
        // Returns a single unsampled report.
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
            // Account ID to retrieve unsampled report for.
            accountId: string,
            // View (Profile) ID to retrieve unsampled report for.
            profileId: string,
            // ID of the unsampled report to retrieve.
            unsampledReportId: string,
            // Web property ID to retrieve unsampled reports for.
            webPropertyId: string,
        }) : gapi.client.Request<UnsampledReport>;        
        
        // Create a new unsampled report.
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
            // Account ID to create the unsampled report for.
            accountId: string,
            // View (Profile) ID to create the unsampled report for.
            profileId: string,
            // Web property ID to create the unsampled report for.
            webPropertyId: string,
        }) : gapi.client.Request<UnsampledReport>;        
        
        // Lists unsampled reports to which the user has access.
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
            // Account ID to retrieve unsampled reports for. Must be a specific account ID, ~all is not supported.
            accountId: string,
            // The maximum number of unsampled reports to include in this response.
            max-results?: number,
            // View (Profile) ID to retrieve unsampled reports for. Must be a specific view (profile) ID, ~all is not supported.
            profileId: string,
            // An index of the first unsampled report to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
            // Web property ID to retrieve unsampled reports for. Must be a specific web property ID, ~all is not supported.
            webPropertyId: string,
        }) : gapi.client.Request<UnsampledReports>;        
        
    }
    
    
    interface UploadsResource {
        // Delete data associated with a previous upload.
        deleteUploadData (request: {        
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
            // Account Id for the uploads to be deleted.
            accountId: string,
            // Custom data source Id for the uploads to be deleted.
            customDataSourceId: string,
            // Web property Id for the uploads to be deleted.
            webPropertyId: string,
        }) : gapi.client.Request<void>;        
        
        // List uploads to which the user has access.
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
            // Account Id for the upload to retrieve.
            accountId: string,
            // Custom data source Id for upload to retrieve.
            customDataSourceId: string,
            // Upload Id to retrieve.
            uploadId: string,
            // Web property Id for the upload to retrieve.
            webPropertyId: string,
        }) : gapi.client.Request<Upload>;        
        
        // List uploads to which the user has access.
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
            // Account Id for the uploads to retrieve.
            accountId: string,
            // Custom data source Id for uploads to retrieve.
            customDataSourceId: string,
            // The maximum number of uploads to include in this response.
            max-results?: number,
            // A 1-based index of the first upload to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
            // Web property Id for the uploads to retrieve.
            webPropertyId: string,
        }) : gapi.client.Request<Uploads>;        
        
        // Upload data for a custom data source.
        uploadData (request: {        
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
            // Account Id associated with the upload.
            accountId: string,
            // Custom data source Id to which the data being uploaded belongs.
            customDataSourceId: string,
            // Web property UA-string associated with the upload.
            webPropertyId: string,
        }) : gapi.client.Request<Upload>;        
        
    }
    
    
    interface WebPropertyAdWordsLinksResource {
        // Deletes a web property-AdWords link.
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
            // ID of the account which the given web property belongs to.
            accountId: string,
            // Web property AdWords link ID.
            webPropertyAdWordsLinkId: string,
            // Web property ID to delete the AdWords link for.
            webPropertyId: string,
        }) : gapi.client.Request<void>;        
        
        // Returns a web property-AdWords link to which the user has access.
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
            // ID of the account which the given web property belongs to.
            accountId: string,
            // Web property-AdWords link ID.
            webPropertyAdWordsLinkId: string,
            // Web property ID to retrieve the AdWords link for.
            webPropertyId: string,
        }) : gapi.client.Request<EntityAdWordsLink>;        
        
        // Creates a webProperty-AdWords link.
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
            // ID of the Google Analytics account to create the link for.
            accountId: string,
            // Web property ID to create the link for.
            webPropertyId: string,
        }) : gapi.client.Request<EntityAdWordsLink>;        
        
        // Lists webProperty-AdWords links for a given web property.
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
            // ID of the account which the given web property belongs to.
            accountId: string,
            // The maximum number of webProperty-AdWords links to include in this response.
            max-results?: number,
            // An index of the first webProperty-AdWords link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
            // Web property ID to retrieve the AdWords links for.
            webPropertyId: string,
        }) : gapi.client.Request<EntityAdWordsLinks>;        
        
        // Updates an existing webProperty-AdWords link. This method supports patch semantics.
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
            // ID of the account which the given web property belongs to.
            accountId: string,
            // Web property-AdWords link ID.
            webPropertyAdWordsLinkId: string,
            // Web property ID to retrieve the AdWords link for.
            webPropertyId: string,
        }) : gapi.client.Request<EntityAdWordsLink>;        
        
        // Updates an existing webProperty-AdWords link.
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
            // ID of the account which the given web property belongs to.
            accountId: string,
            // Web property-AdWords link ID.
            webPropertyAdWordsLinkId: string,
            // Web property ID to retrieve the AdWords link for.
            webPropertyId: string,
        }) : gapi.client.Request<EntityAdWordsLink>;        
        
    }
    
    
    interface WebpropertiesResource {
        // Gets a web property to which the user has access.
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
            // Account ID to retrieve the web property for.
            accountId: string,
            // ID to retrieve the web property for.
            webPropertyId: string,
        }) : gapi.client.Request<Webproperty>;        
        
        // Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.
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
            // Account ID to create the web property for.
            accountId: string,
        }) : gapi.client.Request<Webproperty>;        
        
        // Lists web properties to which the user has access.
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
            // Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
            accountId: string,
            // The maximum number of web properties to include in this response.
            max-results?: number,
            // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
        }) : gapi.client.Request<Webproperties>;        
        
        // Updates an existing web property. This method supports patch semantics.
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
            // Account ID to which the web property belongs
            accountId: string,
            // Web property ID
            webPropertyId: string,
        }) : gapi.client.Request<Webproperty>;        
        
        // Updates an existing web property.
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
            // Account ID to which the web property belongs
            accountId: string,
            // Web property ID
            webPropertyId: string,
        }) : gapi.client.Request<Webproperty>;        
        
    }
    
    
    interface WebpropertyUserLinksResource {
        // Removes a user from the given web property.
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
            // Account ID to delete the user link for.
            accountId: string,
            // Link ID to delete the user link for.
            linkId: string,
            // Web Property ID to delete the user link for.
            webPropertyId: string,
        }) : gapi.client.Request<void>;        
        
        // Adds a new user to the given web property.
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
            // Account ID to create the user link for.
            accountId: string,
            // Web Property ID to create the user link for.
            webPropertyId: string,
        }) : gapi.client.Request<EntityUserLink>;        
        
        // Lists webProperty-user links for a given web property.
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
            // Account ID which the given web property belongs to.
            accountId: string,
            // The maximum number of webProperty-user Links to include in this response.
            max-results?: number,
            // An index of the first webProperty-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
            start-index?: number,
            // Web Property ID for the webProperty-user links to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
            webPropertyId: string,
        }) : gapi.client.Request<EntityUserLinks>;        
        
        // Updates permissions for an existing user on the given web property.
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
            // Account ID to update the account-user link for.
            accountId: string,
            // Link ID to update the account-user link for.
            linkId: string,
            // Web property ID to update the account-user link for.
            webPropertyId: string,
        }) : gapi.client.Request<EntityUserLink>;        
        
    }
    
    
    interface ManagementResource {
        accountSummaries: AccountSummariesResource,
        accountUserLinks: AccountUserLinksResource,
        accounts: AccountsResource,
        customDataSources: CustomDataSourcesResource,
        customDimensions: CustomDimensionsResource,
        customMetrics: CustomMetricsResource,
        experiments: ExperimentsResource,
        filters: FiltersResource,
        goals: GoalsResource,
        profileFilterLinks: ProfileFilterLinksResource,
        profileUserLinks: ProfileUserLinksResource,
        profiles: ProfilesResource,
        remarketingAudience: RemarketingAudienceResource,
        segments: SegmentsResource,
        unsampledReports: UnsampledReportsResource,
        uploads: UploadsResource,
        webPropertyAdWordsLinks: WebPropertyAdWordsLinksResource,
        webproperties: WebpropertiesResource,
        webpropertyUserLinks: WebpropertyUserLinksResource,
    }
    
    
    interface ColumnsResource {
        // Lists all columns for a report type
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
            // Report type. Allowed Values: 'ga'. Where 'ga' corresponds to the Core Reporting API
            reportType: string,
        }) : gapi.client.Request<Columns>;        
        
    }
    
    
    interface MetadataResource {
        columns: ColumnsResource,
    }
    
    
    interface ProvisioningResource {
        // Creates an account ticket.
        createAccountTicket (request: {        
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
        }) : gapi.client.Request<AccountTicket>;        
        
    }
    
}

declare module gapi.client.analytics {
    var data: gapi.client.analytics.DataResource; 
    
    var management: gapi.client.analytics.ManagementResource; 
    
    var metadata: gapi.client.analytics.MetadataResource; 
    
    var provisioning: gapi.client.analytics.ProvisioningResource; 
    
}
