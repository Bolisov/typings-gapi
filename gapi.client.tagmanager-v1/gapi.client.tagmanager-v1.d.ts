// Type definitions for Google Tag Manager API v1
// Project: https://developers.google.com/tag-manager/api/v1/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.tagmanager {
    
    interface Account {
        // The Account ID uniquely identifies the GTM Account.
        accountId?: string,
        // The fingerprint of the GTM Account as computed at storage time. This value is recomputed whenever the account is modified.
        fingerprint?: string,
        // Account display name.
        name?: string,
        // Whether the account shares data anonymously with Google and others.
        shareData?: boolean,
    }
    
    interface AccountAccess {
        // List of Account permissions. Valid account permissions are read and manage.
        permission?: string[],        
    }
    
    interface Condition {
        // A list of named parameters (key/value), depending on the condition's type. Notes: 
        // - For binary operators, include parameters named arg0 and arg1 for specifying the left and right operands, respectively. 
        // - At this time, the left operand (arg0) must be a reference to a variable. 
        // - For case-insensitive Regex matching, include a boolean parameter named ignore_case that is set to true. If not specified or set to any other value, the matching will be case sensitive. 
        // - To negate an operator, include a boolean parameter named negate boolean parameter that is set to true.
        parameter?: Parameter[],        
        // The type of operator for this condition.
        type?: string,
    }
    
    interface Container {
        // GTM Account ID.
        accountId?: string,
        // The Container ID uniquely identifies the GTM Container.
        containerId?: string,
        // Optional list of domain names associated with the Container.
        domainName?: string[],        
        // List of enabled built-in variables. Valid values include: pageUrl, pageHostname, pagePath, referrer, event, clickElement, clickClasses, clickId, clickTarget, clickUrl, clickText, formElement, formClasses, formId, formTarget, formUrl, formText, errorMessage, errorUrl, errorLine, newHistoryFragment, oldHistoryFragment, newHistoryState, oldHistoryState, historySource, containerVersion, debugMode, randomNumber, containerId.
        enabledBuiltInVariable?: string[],        
        // The fingerprint of the GTM Container as computed at storage time. This value is recomputed whenever the account is modified.
        fingerprint?: string,
        // Container display name.
        name?: string,
        // Container Notes.
        notes?: string,
        // Container Public ID.
        publicId?: string,
        // Container Country ID.
        timeZoneCountryId?: string,
        // Container Time Zone ID.
        timeZoneId?: string,
        // List of Usage Contexts for the Container. Valid values include: web, android, ios.
        usageContext?: string[],        
    }
    
    interface ContainerAccess {
        // GTM Container ID.
        containerId?: string,
        // List of Container permissions. Valid container permissions are: read, edit, delete, publish.
        permission?: string[],        
    }
    
    interface ContainerVersion {
        // GTM Account ID.
        accountId?: string,
        // The container that this version was taken from.
        container?: Container,
        // GTM Container ID.
        containerId?: string,
        // The Container Version ID uniquely identifies the GTM Container Version.
        containerVersionId?: string,
        // A value of true indicates this container version has been deleted.
        deleted?: boolean,
        // The fingerprint of the GTM Container Version as computed at storage time. This value is recomputed whenever the container version is modified.
        fingerprint?: string,
        // The folders in the container that this version was taken from.
        folder?: Folder[],        
        // The macros in the container that this version was taken from.
        macro?: Macro[],        
        // Container version display name.
        name?: string,
        // User notes on how to apply this container version in the container.
        notes?: string,
        // The rules in the container that this version was taken from.
        rule?: Rule[],        
        // The tags in the container that this version was taken from.
        tag?: Tag[],        
        // The triggers in the container that this version was taken from.
        trigger?: Trigger[],        
        // The variables in the container that this version was taken from.
        variable?: Variable[],        
    }
    
    interface ContainerVersionHeader {
        // GTM Account ID.
        accountId?: string,
        // GTM Container ID.
        containerId?: string,
        // The Container Version ID uniquely identifies the GTM Container Version.
        containerVersionId?: string,
        // A value of true indicates this container version has been deleted.
        deleted?: boolean,
        // Container version display name.
        name?: string,
        // Number of macros in the container version.
        numMacros?: string,
        // Number of rules in the container version.
        numRules?: string,
        // Number of tags in the container version.
        numTags?: string,
        // Number of triggers in the container version.
        numTriggers?: string,
        // Number of variables in the container version.
        numVariables?: string,
    }
    
    interface CreateContainerVersionRequestVersionOptions {
        // The name of the container version to be created.
        name?: string,
        // The notes of the container version to be created.
        notes?: string,
        // The creation of this version may be for quick preview and shouldn't be saved.
        quickPreview?: boolean,
    }
    
    interface CreateContainerVersionResponse {
        // Compiler errors or not.
        compilerError?: boolean,
        // The container version created.
        containerVersion?: ContainerVersion,
    }
    
    interface Environment {
        // GTM Account ID.
        accountId?: string,
        // The environment authorization code.
        authorizationCode?: string,
        // The last update time-stamp for the authorization code.
        authorizationTimestampMs?: string,
        // GTM Container ID.
        containerId?: string,
        // 
        containerVersionId?: string,
        // The environment description. Can be set or changed only on USER type environments.
        description?: string,
        // Whether or not to enable debug by default on for the environment.
        enableDebug?: boolean,
        // GTM Environment ID uniquely identifies the GTM Environment.
        environmentId?: string,
        // The fingerprint of the GTM environment as computed at storage time. This value is recomputed whenever the environment is modified.
        fingerprint?: string,
        // The environment display name. Can be set or changed only on USER type environments.
        name?: string,
        // The type of this environment.
        type?: string,
        // Default preview page url for the environment.
        url?: string,
    }
    
    interface Folder {
        // GTM Account ID.
        accountId?: string,
        // GTM Container ID.
        containerId?: string,
        // The fingerprint of the GTM Folder as computed at storage time. This value is recomputed whenever the folder is modified.
        fingerprint?: string,
        // The Folder ID uniquely identifies the GTM Folder.
        folderId?: string,
        // Folder display name.
        name?: string,
    }
    
    interface FolderEntities {
        // The list of tags inside the folder.
        tag?: Tag[],        
        // The list of triggers inside the folder.
        trigger?: Trigger[],        
        // The list of variables inside the folder.
        variable?: Variable[],        
    }
    
    interface ListAccountUsersResponse {
        // All GTM AccountUsers of a GTM Account.
        userAccess?: UserAccess[],        
    }
    
    interface ListAccountsResponse {
        // List of GTM Accounts that a user has access to.
        accounts?: Account[],        
    }
    
    interface ListContainerVersionsResponse {
        // All versions of a GTM Container.
        containerVersion?: ContainerVersion[],        
        // All container version headers of a GTM Container.
        containerVersionHeader?: ContainerVersionHeader[],        
    }
    
    interface ListContainersResponse {
        // All Containers of a GTM Account.
        containers?: Container[],        
    }
    
    interface ListEnvironmentsResponse {
        // All Environments of a GTM Container.
        environments?: Environment[],        
    }
    
    interface ListFoldersResponse {
        // All GTM Folders of a GTM Container.
        folders?: Folder[],        
    }
    
    interface ListTagsResponse {
        // All GTM Tags of a GTM Container.
        tags?: Tag[],        
    }
    
    interface ListTriggersResponse {
        // All GTM Triggers of a GTM Container.
        triggers?: Trigger[],        
    }
    
    interface ListVariablesResponse {
        // All GTM Variables of a GTM Container.
        variables?: Variable[],        
    }
    
    interface Macro {
        // GTM Account ID.
        accountId?: string,
        // GTM Container ID.
        containerId?: string,
        // For mobile containers only: A list of rule IDs for disabling conditional macros; the macro is enabled if one of the enabling rules is true while all the disabling rules are false. Treated as an unordered set.
        disablingRuleId?: string[],        
        // For mobile containers only: A list of rule IDs for enabling conditional macros; the macro is enabled if one of the enabling rules is true while all the disabling rules are false. Treated as an unordered set.
        enablingRuleId?: string[],        
        // The fingerprint of the GTM Macro as computed at storage time. This value is recomputed whenever the macro is modified.
        fingerprint?: string,
        // The Macro ID uniquely identifies the GTM Macro.
        macroId?: string,
        // Macro display name.
        name?: string,
        // User notes on how to apply this macro in the container.
        notes?: string,
        // The macro's parameters.
        parameter?: Parameter[],        
        // Parent folder id.
        parentFolderId?: string,
        // The end timestamp in milliseconds to schedule a macro.
        scheduleEndMs?: string,
        // The start timestamp in milliseconds to schedule a macro.
        scheduleStartMs?: string,
        // GTM Macro Type.
        type?: string,
    }
    
    interface Parameter {
        // The named key that uniquely identifies a parameter. Required for top-level parameters, as well as map values. Ignored for list values.
        key?: string,
        // This list parameter's parameters (keys will be ignored).
        list?: Parameter[],        
        // This map parameter's parameters (must have keys; keys must be unique).
        map?: Parameter[],        
        // The parameter type. Valid values are: 
        // - boolean: The value represents a boolean, represented as 'true' or 'false' 
        // - integer: The value represents a 64-bit signed integer value, in base 10 
        // - list: A list of parameters should be specified 
        // - map: A map of parameters should be specified 
        // - template: The value represents any text; this can include variable references (even variable references that might return non-string types)
        type?: string,
        // A parameter's value (may contain variable references such as "{{myVariable}}") as appropriate to the specified type.
        value?: string,
    }
    
    interface PublishContainerVersionResponse {
        // Compiler errors or not.
        compilerError?: boolean,
        // The container version created.
        containerVersion?: ContainerVersion,
    }
    
    interface Rule {
        // GTM Account ID.
        accountId?: string,
        // The list of conditions that make up this rule (implicit AND between them).
        condition?: Condition[],        
        // GTM Container ID.
        containerId?: string,
        // The fingerprint of the GTM Rule as computed at storage time. This value is recomputed whenever the rule is modified.
        fingerprint?: string,
        // Rule display name.
        name?: string,
        // User notes on how to apply this rule in the container.
        notes?: string,
        // The Rule ID uniquely identifies the GTM Rule.
        ruleId?: string,
    }
    
    interface SetupTag {
        // If true, fire the main tag if and only if the setup tag fires successfully. If false, fire the main tag regardless of setup tag firing status.
        stopOnSetupFailure?: boolean,
        // The name of the setup tag.
        tagName?: string,
    }
    
    interface Tag {
        // GTM Account ID.
        accountId?: string,
        // Blocking rule IDs. If any of the listed rules evaluate to true, the tag will not fire.
        blockingRuleId?: string[],        
        // Blocking trigger IDs. If any of the listed triggers evaluate to true, the tag will not fire.
        blockingTriggerId?: string[],        
        // GTM Container ID.
        containerId?: string,
        // The fingerprint of the GTM Tag as computed at storage time. This value is recomputed whenever the tag is modified.
        fingerprint?: string,
        // Firing rule IDs. A tag will fire when any of the listed rules are true and all of its blockingRuleIds (if any specified) are false.
        firingRuleId?: string[],        
        // Firing trigger IDs. A tag will fire when any of the listed triggers are true and all of its blockingTriggerIds (if any specified) are false.
        firingTriggerId?: string[],        
        // If set to true, this tag will only fire in the live environment (e.g. not in preview or debug mode).
        liveOnly?: boolean,
        // Tag display name.
        name?: string,
        // User notes on how to apply this tag in the container.
        notes?: string,
        // The tag's parameters.
        parameter?: Parameter[],        
        // Parent folder id.
        parentFolderId?: string,
        // User defined numeric priority of the tag. Tags are fired asynchronously in order of priority. Tags with higher numeric value fire first. A tag's priority can be a positive or negative value. The default value is 0.
        priority?: Parameter,
        // The end timestamp in milliseconds to schedule a tag.
        scheduleEndMs?: string,
        // The start timestamp in milliseconds to schedule a tag.
        scheduleStartMs?: string,
        // The list of setup tags. Currently we only allow one.
        setupTag?: SetupTag[],        
        // Option to fire this tag.
        tagFiringOption?: string,
        // The Tag ID uniquely identifies the GTM Tag.
        tagId?: string,
        // The list of teardown tags. Currently we only allow one.
        teardownTag?: TeardownTag[],        
        // GTM Tag Type.
        type?: string,
    }
    
    interface TeardownTag {
        // If true, fire the teardown tag if and only if the main tag fires successfully. If false, fire the teardown tag regardless of main tag firing status.
        stopTeardownOnFailure?: boolean,
        // The name of the teardown tag.
        tagName?: string,
    }
    
    interface Trigger {
        // GTM Account ID.
        accountId?: string,
        // Used in the case of auto event tracking.
        autoEventFilter?: Condition[],        
        // Whether or not we should only fire tags if the form submit or link click event is not cancelled by some other event handler (e.g. because of validation). Only valid for Form Submission and Link Click triggers.
        checkValidation?: Parameter,
        // GTM Container ID.
        containerId?: string,
        // Used in the case of custom event, which is fired iff all Conditions are true.
        customEventFilter?: Condition[],        
        // Reloads the videos in the page that don't already have the YT API enabled. If false, only capture events from videos that already have the API enabled. Only valid for YouTube triggers.
        enableAllVideos?: Parameter,
        // Name of the GTM event that is fired. Only valid for Timer triggers.
        eventName?: Parameter,
        // The trigger will only fire iff all Conditions are true.
        filter?: Condition[],        
        // The fingerprint of the GTM Trigger as computed at storage time. This value is recomputed whenever the trigger is modified.
        fingerprint?: string,
        // Time between triggering recurring Timer Events (in milliseconds). Only valid for Timer triggers.
        interval?: Parameter,
        // Limit of the number of GTM events this Timer Trigger will fire. If no limit is set, we will continue to fire GTM events until the user leaves the page. Only valid for Timer triggers.
        limit?: Parameter,
        // Trigger display name.
        name?: string,
        // Parent folder id.
        parentFolderId?: string,
        // The Trigger ID uniquely identifies the GTM Trigger.
        triggerId?: string,
        // Defines the data layer event that causes this trigger.
        type?: string,
        // Globally unique id of the trigger that auto-generates this (a Form Submit, Link Click or Timer listener) if any. Used to make incompatible auto-events work together with trigger filtering based on trigger ids. This value is populated during output generation since the tags implied by triggers don't exist until then. Only valid for Form Submit, Link Click and Timer triggers.
        uniqueTriggerId?: Parameter,
        // List of integer percentage values. The trigger will fire as each percentage is reached in any instrumented videos. Only valid for YouTube triggers.
        videoPercentageList?: Parameter,
        // Whether or not we should delay the form submissions or link opening until all of the tags have fired (by preventing the default action and later simulating the default action). Only valid for Form Submission and Link Click triggers.
        waitForTags?: Parameter,
        // How long to wait (in milliseconds) for tags to fire when 'waits_for_tags' above evaluates to true. Only valid for Form Submission and Link Click triggers.
        waitForTagsTimeout?: Parameter,
    }
    
    interface UserAccess {
        // GTM Account access permissions.
        accountAccess?: AccountAccess,
        // GTM Account ID.
        accountId?: string,
        // GTM Container access permissions.
        containerAccess?: ContainerAccess[],        
        // User's email address.
        emailAddress?: string,
        // Account Permission ID.
        permissionId?: string,
    }
    
    interface Variable {
        // GTM Account ID.
        accountId?: string,
        // GTM Container ID.
        containerId?: string,
        // For mobile containers only: A list of trigger IDs for disabling conditional variables; the variable is enabled if one of the enabling trigger is true while all the disabling trigger are false. Treated as an unordered set.
        disablingTriggerId?: string[],        
        // For mobile containers only: A list of trigger IDs for enabling conditional variables; the variable is enabled if one of the enabling triggers is true while all the disabling triggers are false. Treated as an unordered set.
        enablingTriggerId?: string[],        
        // The fingerprint of the GTM Variable as computed at storage time. This value is recomputed whenever the variable is modified.
        fingerprint?: string,
        // Variable display name.
        name?: string,
        // User notes on how to apply this variable in the container.
        notes?: string,
        // The variable's parameters.
        parameter?: Parameter[],        
        // Parent folder id.
        parentFolderId?: string,
        // The end timestamp in milliseconds to schedule a variable.
        scheduleEndMs?: string,
        // The start timestamp in milliseconds to schedule a variable.
        scheduleStartMs?: string,
        // GTM Variable Type.
        type?: string,
        // The Variable ID uniquely identifies the GTM Variable.
        variableId?: string,
    }
    
    interface EnvironmentsResource {
        // Creates a GTM Environment.
        create (request: {        
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
        }) : gapi.client.Request<Environment>;        
        
        // Deletes a GTM Environment.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // The GTM Environment ID.
            environmentId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets a GTM Environment.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // The GTM Environment ID.
            environmentId: string,
        }) : gapi.client.Request<Environment>;        
        
        // Lists all GTM Environments of a GTM Container.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
        }) : gapi.client.Request<ListEnvironmentsResponse>;        
        
        // Updates a GTM Environment. This method supports patch semantics.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // The GTM Environment ID.
            environmentId: string,
            // When provided, this fingerprint must match the fingerprint of the environment in storage.
            fingerprint?: string,
        }) : gapi.client.Request<Environment>;        
        
        // Updates a GTM Environment.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // The GTM Environment ID.
            environmentId: string,
            // When provided, this fingerprint must match the fingerprint of the environment in storage.
            fingerprint?: string,
        }) : gapi.client.Request<Environment>;        
        
    }
    
    
    interface EntitiesResource {
        // List all entities in a GTM Folder.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // The GTM Folder ID.
            folderId: string,
        }) : gapi.client.Request<FolderEntities>;        
        
    }
    
    
    interface FoldersResource {
        // Creates a GTM Folder.
        create (request: {        
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
        }) : gapi.client.Request<Folder>;        
        
        // Deletes a GTM Folder.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // The GTM Folder ID.
            folderId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets a GTM Folder.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // The GTM Folder ID.
            folderId: string,
        }) : gapi.client.Request<Folder>;        
        
        // Lists all GTM Folders of a Container.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
        }) : gapi.client.Request<ListFoldersResponse>;        
        
        // Updates a GTM Folder.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // When provided, this fingerprint must match the fingerprint of the folder in storage.
            fingerprint?: string,
            // The GTM Folder ID.
            folderId: string,
        }) : gapi.client.Request<Folder>;        
        
        entities: EntitiesResource,
    }
    
    
    interface Move_foldersResource {
        // Moves entities to a GTM Folder.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // The GTM Folder ID.
            folderId: string,
            // The tags to be moved to the folder.
            tagId?: string,
            // The triggers to be moved to the folder.
            triggerId?: string,
            // The variables to be moved to the folder.
            variableId?: string,
        }) : gapi.client.Request<void>;        
        
    }
    
    
    interface Reauthorize_environmentsResource {
        // Re-generates the authorization code for a GTM Environment.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // The GTM Environment ID.
            environmentId: string,
        }) : gapi.client.Request<Environment>;        
        
    }
    
    
    interface TagsResource {
        // Creates a GTM Tag.
        create (request: {        
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
        }) : gapi.client.Request<Tag>;        
        
        // Deletes a GTM Tag.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // The GTM Tag ID.
            tagId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets a GTM Tag.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // The GTM Tag ID.
            tagId: string,
        }) : gapi.client.Request<Tag>;        
        
        // Lists all GTM Tags of a Container.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
        }) : gapi.client.Request<ListTagsResponse>;        
        
        // Updates a GTM Tag.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // When provided, this fingerprint must match the fingerprint of the tag in storage.
            fingerprint?: string,
            // The GTM Tag ID.
            tagId: string,
        }) : gapi.client.Request<Tag>;        
        
    }
    
    
    interface TriggersResource {
        // Creates a GTM Trigger.
        create (request: {        
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
        }) : gapi.client.Request<Trigger>;        
        
        // Deletes a GTM Trigger.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // The GTM Trigger ID.
            triggerId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets a GTM Trigger.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // The GTM Trigger ID.
            triggerId: string,
        }) : gapi.client.Request<Trigger>;        
        
        // Lists all GTM Triggers of a Container.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
        }) : gapi.client.Request<ListTriggersResponse>;        
        
        // Updates a GTM Trigger.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // When provided, this fingerprint must match the fingerprint of the trigger in storage.
            fingerprint?: string,
            // The GTM Trigger ID.
            triggerId: string,
        }) : gapi.client.Request<Trigger>;        
        
    }
    
    
    interface VariablesResource {
        // Creates a GTM Variable.
        create (request: {        
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
        }) : gapi.client.Request<Variable>;        
        
        // Deletes a GTM Variable.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // The GTM Variable ID.
            variableId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets a GTM Variable.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // The GTM Variable ID.
            variableId: string,
        }) : gapi.client.Request<Variable>;        
        
        // Lists all GTM Variables of a Container.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
        }) : gapi.client.Request<ListVariablesResponse>;        
        
        // Updates a GTM Variable.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // When provided, this fingerprint must match the fingerprint of the variable in storage.
            fingerprint?: string,
            // The GTM Variable ID.
            variableId: string,
        }) : gapi.client.Request<Variable>;        
        
    }
    
    
    interface VersionsResource {
        // Creates a Container Version.
        create (request: {        
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
        }) : gapi.client.Request<CreateContainerVersionResponse>;        
        
        // Deletes a Container Version.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // The GTM Container Version ID.
            containerVersionId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets a Container Version.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // The GTM Container Version ID. Specify published to retrieve the currently published version.
            containerVersionId: string,
        }) : gapi.client.Request<ContainerVersion>;        
        
        // Lists all Container Versions of a GTM Container.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // Retrieve headers only when true.
            headers?: boolean,
            // Also retrieve deleted (archived) versions when true.
            includeDeleted?: boolean,
        }) : gapi.client.Request<ListContainerVersionsResponse>;        
        
        // Publishes a Container Version.
        publish (request: {        
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // The GTM Container Version ID.
            containerVersionId: string,
            // When provided, this fingerprint must match the fingerprint of the container version in storage.
            fingerprint?: string,
        }) : gapi.client.Request<PublishContainerVersionResponse>;        
        
        // Restores a Container Version. This will overwrite the container's current configuration (including its variables, triggers and tags). The operation will not have any effect on the version that is being served (i.e. the published version).
        restore (request: {        
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // The GTM Container Version ID.
            containerVersionId: string,
        }) : gapi.client.Request<ContainerVersion>;        
        
        // Undeletes a Container Version.
        undelete (request: {        
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // The GTM Container Version ID.
            containerVersionId: string,
        }) : gapi.client.Request<ContainerVersion>;        
        
        // Updates a Container Version.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // The GTM Container Version ID.
            containerVersionId: string,
            // When provided, this fingerprint must match the fingerprint of the container version in storage.
            fingerprint?: string,
        }) : gapi.client.Request<ContainerVersion>;        
        
    }
    
    
    interface ContainersResource {
        // Creates a Container.
        create (request: {        
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
            // The GTM Account ID.
            accountId: string,
        }) : gapi.client.Request<Container>;        
        
        // Deletes a Container.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets a Container.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
        }) : gapi.client.Request<Container>;        
        
        // Lists all Containers that belongs to a GTM Account.
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
            // The GTM Account ID.
            accountId: string,
        }) : gapi.client.Request<ListContainersResponse>;        
        
        // Updates a Container.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM Container ID.
            containerId: string,
            // When provided, this fingerprint must match the fingerprint of the container in storage.
            fingerprint?: string,
        }) : gapi.client.Request<Container>;        
        
        environments: EnvironmentsResource,
        folders: FoldersResource,
        move_folders: Move_foldersResource,
        reauthorize_environments: Reauthorize_environmentsResource,
        tags: TagsResource,
        triggers: TriggersResource,
        variables: VariablesResource,
        versions: VersionsResource,
    }
    
    
    interface PermissionsResource {
        // Creates a user's Account & Container Permissions.
        create (request: {        
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
            // The GTM Account ID.
            accountId: string,
        }) : gapi.client.Request<UserAccess>;        
        
        // Removes a user from the account, revoking access to it and all of its containers.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM User ID.
            permissionId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets a user's Account & Container Permissions.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM User ID.
            permissionId: string,
        }) : gapi.client.Request<UserAccess>;        
        
        // List all users that have access to the account along with Account and Container Permissions granted to each of them.
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
            // The GTM Account ID. @required tagmanager.accounts.permissions.list
            accountId: string,
        }) : gapi.client.Request<ListAccountUsersResponse>;        
        
        // Updates a user's Account & Container Permissions.
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
            // The GTM Account ID.
            accountId: string,
            // The GTM User ID.
            permissionId: string,
        }) : gapi.client.Request<UserAccess>;        
        
    }
    
    
    interface AccountsResource {
        // Gets a GTM Account.
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
            // The GTM Account ID.
            accountId: string,
        }) : gapi.client.Request<Account>;        
        
        // Lists all GTM Accounts that a user has access to.
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
        }) : gapi.client.Request<ListAccountsResponse>;        
        
        // Updates a GTM Account.
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
            // The GTM Account ID.
            accountId: string,
            // When provided, this fingerprint must match the fingerprint of the account in storage.
            fingerprint?: string,
        }) : gapi.client.Request<Account>;        
        
        containers: ContainersResource,
        permissions: PermissionsResource,
    }
    
}

declare module gapi.client.tagmanager {
    var accounts: gapi.client.tagmanager.AccountsResource; 
    
}
