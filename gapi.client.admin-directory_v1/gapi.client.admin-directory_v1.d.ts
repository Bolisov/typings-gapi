// Type definitions for Google Admin Directory API directory_v1
// Project: https://developers.google.com/admin-sdk/directory/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.admin {
    
    interface Alias {
        // A alias email
        alias?: string,
        // ETag of the resource.
        etag?: string,
        // Unique id of the group (Read-only) Unique id of the user (Read-only)
        id?: string,
        // Kind of resource this is.
        kind?: string,
        // Group's primary email (Read-only) User's primary email (Read-only)
        primaryEmail?: string,
    }
    
    interface Aliases {
        // List of alias objects.
        aliases?: any[],        
        // ETag of the resource.
        etag?: string,
        // Kind of resource this is.
        kind?: string,
    }
    
    interface Asp {
        // The unique ID of the ASP.
        codeId?: number,
        // The time when the ASP was created. Expressed in Unix time format.
        creationTime?: string,
        // ETag of the ASP.
        etag?: string,
        // The type of the API resource. This is always admin#directory#asp.
        kind?: string,
        // The time when the ASP was last used. Expressed in Unix time format.
        lastTimeUsed?: string,
        // The name of the application that the user, represented by their userId, entered when the ASP was created.
        name?: string,
        // The unique ID of the user who issued the ASP.
        userKey?: string,
    }
    
    interface Asps {
        // ETag of the resource.
        etag?: string,
        // A list of ASP resources.
        items?: Asp[],        
        // The type of the API resource. This is always admin#directory#aspList.
        kind?: string,
    }
    
    interface CalendarResource {
        // ETag of the resource.
        etags?: string,
        // The type of the resource. For calendar resources, the value is admin#directory#resources#calendars#CalendarResource.
        kind?: string,
        // The brief description of the calendar resource.
        resourceDescription?: string,
        // The read-only email ID for the calendar resource. Generated as part of creating a new calendar resource.
        resourceEmail?: string,
        // The unique ID for the calendar resource.
        resourceId?: string,
        // The name of the calendar resource. For example, Training Room 1A
        resourceName?: string,
        // The type of the calendar resource. Used for grouping resources in the calendar user interface.
        resourceType?: string,
    }
    
    interface CalendarResources {
        // ETag of the resource.
        etag?: string,
        // The CalendarResources in this page of results.
        items?: CalendarResource[],        
        // Identifies this as a collection of CalendarResources. This is always admin#directory#resources#calendars#calendarResourcesList.
        kind?: string,
        // The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
        nextPageToken?: string,
    }
    
    interface Channel {
        // The address where notifications are delivered for this channel.
        address?: string,
        // Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
        expiration?: string,
        // A UUID or similar unique string that identifies this channel.
        id?: string,
        // Identifies this as a notification channel used to watch for changes to a resource. Value: the fixed string "api#channel".
        kind?: string,
        // Additional parameters controlling delivery channel behavior. Optional.
        params?: any,
        // A Boolean value to indicate whether payload is wanted. Optional.
        payload?: boolean,
        // An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
        resourceId?: string,
        // A version-specific identifier for the watched resource.
        resourceUri?: string,
        // An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
        token?: string,
        // The type of delivery mechanism used for this channel.
        type?: string,
    }
    
    interface ChromeOsDevice {
        // List of active time ranges (Read-only)
        activeTimeRanges?: {        
            // Duration in milliseconds
            activeTime?: number,
            // Date of usage
            date?: string,
        }[],        
        // AssetId specified during enrollment or through later annotation
        annotatedAssetId?: string,
        // Address or location of the device as noted by the administrator
        annotatedLocation?: string,
        // User of the device
        annotatedUser?: string,
        // Chromebook boot mode (Read-only)
        bootMode?: string,
        // Unique identifier of Chrome OS Device (Read-only)
        deviceId?: string,
        // ETag of the resource.
        etag?: string,
        // Chromebook Mac Address on ethernet network interface (Read-only)
        ethernetMacAddress?: string,
        // Chromebook firmware version (Read-only)
        firmwareVersion?: string,
        // Kind of resource this is.
        kind?: string,
        // Date and time the device was last enrolled (Read-only)
        lastEnrollmentTime?: string,
        // Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel (Read-only)
        lastSync?: string,
        // Chromebook Mac Address on wifi network interface (Read-only)
        macAddress?: string,
        // Mobile Equipment identifier for the 3G mobile card in the Chromebook (Read-only)
        meid?: string,
        // Chromebook Model (Read-only)
        model?: string,
        // Notes added by the administrator
        notes?: string,
        // Chromebook order number (Read-only)
        orderNumber?: string,
        // OrgUnit of the device
        orgUnitPath?: string,
        // Chromebook Os Version (Read-only)
        osVersion?: string,
        // Chromebook platform version (Read-only)
        platformVersion?: string,
        // List of recent device users, in descending order by last login time (Read-only)
        recentUsers?: {        
            // Email address of the user. Present only if the user type is managed
            email?: string,
            // The type of the user
            type?: string,
        }[],        
        // Chromebook serial number (Read-only)
        serialNumber?: string,
        // status of the device (Read-only)
        status?: string,
        // Final date the device will be supported (Read-only)
        supportEndDate?: string,
        // Will Chromebook auto renew after support end date (Read-only)
        willAutoRenew?: boolean,
    }
    
    interface ChromeOsDeviceAction {
        // Action to be taken on the ChromeOs Device
        action?: string,
        // 
        deprovisionReason?: string,
    }
    
    interface ChromeOsDevices {
        // List of Chrome OS Device objects.
        chromeosdevices?: ChromeOsDevice[],        
        // ETag of the resource.
        etag?: string,
        // Kind of resource this is.
        kind?: string,
        // Token used to access next page of this result.
        nextPageToken?: string,
    }
    
    interface Customer {
        // The customer's secondary contact email address. This email address cannot be on the same domain as the customerDomain
        alternateEmail?: string,
        // The customer's creation time (Readonly)
        customerCreationTime?: string,
        // The customer's primary domain name string. Do not include the www prefix when creating a new customer.
        customerDomain?: string,
        // ETag of the resource.
        etag?: string,
        // The unique ID for the customer's G Suite account. (Readonly)
        id?: string,
        // Identifies the resource as a customer. Value: admin#directory#customer
        kind?: string,
        // The customer's ISO 639-2 language code. The default value is en-US
        language?: string,
        // The customer's contact phone number in E.164 format.
        phoneNumber?: string,
        // The customer's postal address information.
        postalAddress?: CustomerPostalAddress,
    }
    
    interface CustomerPostalAddress {
        // A customer's physical address. The address can be composed of one to three lines.
        addressLine1?: string,
        // Address line 2 of the address.
        addressLine2?: string,
        // Address line 3 of the address.
        addressLine3?: string,
        // The customer contact's name.
        contactName?: string,
        // This is a required property. For countryCode information see the ISO 3166 country code elements.
        countryCode?: string,
        // Name of the locality. An example of a locality value is the city of San Francisco.
        locality?: string,
        // The company or company division name.
        organizationName?: string,
        // The postal code. A postalCode example is a postal zip code such as 10009. This is in accordance with - http://portablecontacts.net/draft-spec.html#address_element.
        postalCode?: string,
        // Name of the region. An example of a region value is NY for the state of New York.
        region?: string,
    }
    
    interface DomainAlias {
        // The creation time of the domain alias. (Read-only).
        creationTime?: string,
        // The domain alias name.
        domainAliasName?: string,
        // ETag of the resource.
        etag?: string,
        // Kind of resource this is.
        kind?: string,
        // The parent domain name that the domain alias is associated with. This can either be a primary or secondary domain name within a customer.
        parentDomainName?: string,
        // Indicates the verification state of a domain alias. (Read-only)
        verified?: boolean,
    }
    
    interface DomainAliases {
        // List of domain alias objects.
        domainAliases?: DomainAlias[],        
        // ETag of the resource.
        etag?: string,
        // Kind of resource this is.
        kind?: string,
    }
    
    interface Domains {
        // Creation time of the domain. (Read-only).
        creationTime?: string,
        // List of domain alias objects. (Read-only)
        domainAliases?: DomainAlias[],        
        // The domain name of the customer.
        domainName?: string,
        // ETag of the resource.
        etag?: string,
        // Indicates if the domain is a primary domain (Read-only).
        isPrimary?: boolean,
        // Kind of resource this is.
        kind?: string,
        // Indicates the verification state of a domain. (Read-only).
        verified?: boolean,
    }
    
    interface Domains2 {
        // List of domain objects.
        domains?: Domains[],        
        // ETag of the resource.
        etag?: string,
        // Kind of resource this is.
        kind?: string,
    }
    
    interface Group {
        // Is the group created by admin (Read-only) *
        adminCreated?: boolean,
        // List of aliases (Read-only)
        aliases?: string[],        
        // Description of the group
        description?: string,
        // Group direct members count
        directMembersCount?: string,
        // Email of Group
        email?: string,
        // ETag of the resource.
        etag?: string,
        // Unique identifier of Group (Read-only)
        id?: string,
        // Kind of resource this is.
        kind?: string,
        // Group name
        name?: string,
        // List of non editable aliases (Read-only)
        nonEditableAliases?: string[],        
    }
    
    interface Groups {
        // ETag of the resource.
        etag?: string,
        // List of group objects.
        groups?: Group[],        
        // Kind of resource this is.
        kind?: string,
        // Token used to access next page of this result.
        nextPageToken?: string,
    }
    
    interface Member {
        // Email of member (Read-only)
        email?: string,
        // ETag of the resource.
        etag?: string,
        // Unique identifier of customer member (Read-only) Unique identifier of group (Read-only) Unique identifier of member (Read-only)
        id?: string,
        // Kind of resource this is.
        kind?: string,
        // Role of member
        role?: string,
        // Status of member (Immutable)
        status?: string,
        // Type of member (Immutable)
        type?: string,
    }
    
    interface Members {
        // ETag of the resource.
        etag?: string,
        // Kind of resource this is.
        kind?: string,
        // List of member objects.
        members?: Member[],        
        // Token used to access next page of this result.
        nextPageToken?: string,
    }
    
    interface MobileDevice {
        // Adb (USB debugging) enabled or disabled on device (Read-only)
        adbStatus?: boolean,
        // List of applications installed on Mobile Device
        applications?: {        
            // Display name of application
            displayName?: string,
            // Package name of application
            packageName?: string,
            // List of Permissions for application
            permission?: string[],            
            // Version code of application
            versionCode?: number,
            // Version name of application
            versionName?: string,
        }[],        
        // Mobile Device Baseband version (Read-only)
        basebandVersion?: string,
        // Mobile Device Bootloader version (Read-only)
        bootloaderVersion?: string,
        // Mobile Device Brand (Read-only)
        brand?: string,
        // Mobile Device Build number (Read-only)
        buildNumber?: string,
        // The default locale used on the Mobile Device (Read-only)
        defaultLanguage?: string,
        // Developer options enabled or disabled on device (Read-only)
        developerOptionsStatus?: boolean,
        // Mobile Device compromised status (Read-only)
        deviceCompromisedStatus?: string,
        // Mobile Device serial number (Read-only)
        deviceId?: string,
        // DevicePasswordStatus (Read-only)
        devicePasswordStatus?: string,
        // List of owner user's email addresses (Read-only)
        email?: string[],        
        // Mobile Device Encryption Status (Read-only)
        encryptionStatus?: string,
        // ETag of the resource.
        etag?: string,
        // Date and time the device was first synchronized with the policy settings in the G Suite administrator control panel (Read-only)
        firstSync?: string,
        // Mobile Device Hardware (Read-only)
        hardware?: string,
        // Mobile Device Hardware Id (Read-only)
        hardwareId?: string,
        // Mobile Device IMEI number (Read-only)
        imei?: string,
        // Mobile Device Kernel version (Read-only)
        kernelVersion?: string,
        // Kind of resource this is.
        kind?: string,
        // Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel (Read-only)
        lastSync?: string,
        // Boolean indicating if this account is on owner/primary profile or not (Read-only)
        managedAccountIsOnOwnerProfile?: boolean,
        // Mobile Device manufacturer (Read-only)
        manufacturer?: string,
        // Mobile Device MEID number (Read-only)
        meid?: string,
        // Name of the model of the device
        model?: string,
        // List of owner user's names (Read-only)
        name?: string[],        
        // Mobile Device mobile or network operator (if available) (Read-only)
        networkOperator?: string,
        // Name of the mobile operating system
        os?: string,
        // List of accounts added on device (Read-only)
        otherAccountsInfo?: string[],        
        // DMAgentPermission (Read-only)
        privilege?: string,
        // Mobile Device release version version (Read-only)
        releaseVersion?: string,
        // Unique identifier of Mobile Device (Read-only)
        resourceId?: string,
        // Mobile Device Security patch level (Read-only)
        securityPatchLevel?: string,
        // Mobile Device SSN or Serial Number (Read-only)
        serialNumber?: string,
        // Status of the device (Read-only)
        status?: string,
        // Work profile supported on device (Read-only)
        supportsWorkProfile?: boolean,
        // The type of device (Read-only)
        type?: string,
        // Unknown sources enabled or disabled on device (Read-only)
        unknownSourcesStatus?: boolean,
        // Mobile Device user agent
        userAgent?: string,
        // Mobile Device WiFi MAC address (Read-only)
        wifiMacAddress?: string,
    }
    
    interface MobileDeviceAction {
        // Action to be taken on the Mobile Device
        action?: string,
    }
    
    interface MobileDevices {
        // ETag of the resource.
        etag?: string,
        // Kind of resource this is.
        kind?: string,
        // List of Mobile Device objects.
        mobiledevices?: MobileDevice[],        
        // Token used to access next page of this result.
        nextPageToken?: string,
    }
    
    interface Notification {
        // Body of the notification (Read-only)
        body?: string,
        // ETag of the resource.
        etag?: string,
        // Address from which the notification is received (Read-only)
        fromAddress?: string,
        // Boolean indicating whether the notification is unread or not.
        isUnread?: boolean,
        // The type of the resource.
        kind?: string,
        // 
        notificationId?: string,
        // Time at which notification was sent (Read-only)
        sendTime?: string,
        // Subject of the notification (Read-only)
        subject?: string,
    }
    
    interface Notifications {
        // ETag of the resource.
        etag?: string,
        // List of notifications in this page.
        items?: Notification[],        
        // The type of the resource.
        kind?: string,
        // Token for fetching the next page of notifications.
        nextPageToken?: string,
        // Number of unread notification for the domain.
        unreadNotificationsCount?: number,
    }
    
    interface OrgUnit {
        // Should block inheritance
        blockInheritance?: boolean,
        // Description of OrgUnit
        description?: string,
        // ETag of the resource.
        etag?: string,
        // Kind of resource this is.
        kind?: string,
        // Name of OrgUnit
        name?: string,
        // Id of OrgUnit
        orgUnitId?: string,
        // Path of OrgUnit
        orgUnitPath?: string,
        // Id of parent OrgUnit
        parentOrgUnitId?: string,
        // Path of parent OrgUnit
        parentOrgUnitPath?: string,
    }
    
    interface OrgUnits {
        // ETag of the resource.
        etag?: string,
        // Kind of resource this is.
        kind?: string,
        // List of user objects.
        organizationUnits?: OrgUnit[],        
    }
    
    interface Privilege {
        // A list of child privileges. Privileges for a service form a tree. Each privilege can have a list of child privileges; this list is empty for a leaf privilege.
        childPrivileges?: Privilege[],        
        // ETag of the resource.
        etag?: string,
        // If the privilege can be restricted to an organization unit.
        isOuScopable?: boolean,
        // The type of the API resource. This is always admin#directory#privilege.
        kind?: string,
        // The name of the privilege.
        privilegeName?: string,
        // The obfuscated ID of the service this privilege is for.
        serviceId?: string,
        // The name of the service this privilege is for.
        serviceName?: string,
    }
    
    interface Privileges {
        // ETag of the resource.
        etag?: string,
        // A list of Privilege resources.
        items?: Privilege[],        
        // The type of the API resource. This is always admin#directory#privileges.
        kind?: string,
    }
    
    interface Role {
        // ETag of the resource.
        etag?: string,
        // Returns true if the role is a super admin role.
        isSuperAdminRole?: boolean,
        // Returns true if this is a pre-defined system role.
        isSystemRole?: boolean,
        // The type of the API resource. This is always admin#directory#role.
        kind?: string,
        // A short description of the role.
        roleDescription?: string,
        // ID of the role.
        roleId?: string,
        // Name of the role.
        roleName?: string,
        // The set of privileges that are granted to this role.
        rolePrivileges?: {        
            // The name of the privilege.
            privilegeName?: string,
            // The obfuscated ID of the service this privilege is for.
            serviceId?: string,
        }[],        
    }
    
    interface RoleAssignment {
        // The unique ID of the user this role is assigned to.
        assignedTo?: string,
        // ETag of the resource.
        etag?: string,
        // The type of the API resource. This is always admin#directory#roleAssignment.
        kind?: string,
        // If the role is restricted to an organization unit, this contains the ID for the organization unit the exercise of this role is restricted to.
        orgUnitId?: string,
        // ID of this roleAssignment.
        roleAssignmentId?: string,
        // The ID of the role that is assigned.
        roleId?: string,
        // The scope in which this role is assigned. Possible values are: 
        // - CUSTOMER
        // - ORG_UNIT
        scopeType?: string,
    }
    
    interface RoleAssignments {
        // ETag of the resource.
        etag?: string,
        // A list of RoleAssignment resources.
        items?: RoleAssignment[],        
        // The type of the API resource. This is always admin#directory#roleAssignments.
        kind?: string,
        // 
        nextPageToken?: string,
    }
    
    interface Roles {
        // ETag of the resource.
        etag?: string,
        // A list of Role resources.
        items?: Role[],        
        // The type of the API resource. This is always admin#directory#roles.
        kind?: string,
        // 
        nextPageToken?: string,
    }
    
    interface Schema {
        // ETag of the resource.
        etag?: string,
        // Fields of Schema
        fields?: SchemaFieldSpec[],        
        // Kind of resource this is.
        kind?: string,
        // Unique identifier of Schema (Read-only)
        schemaId?: string,
        // Schema name
        schemaName?: string,
    }
    
    interface SchemaFieldSpec {
        // ETag of the resource.
        etag?: string,
        // Unique identifier of Field (Read-only)
        fieldId?: string,
        // Name of the field.
        fieldName?: string,
        // Type of the field.
        fieldType?: string,
        // Boolean specifying whether the field is indexed or not.
        indexed?: boolean,
        // Kind of resource this is.
        kind?: string,
        // Boolean specifying whether this is a multi-valued field or not.
        multiValued?: boolean,
        // Indexing spec for a numeric field. By default, only exact match queries will be supported for numeric fields. Setting the numericIndexingSpec allows range queries to be supported.
        numericIndexingSpec?: {        
            // Maximum value of this field. This is meant to be indicative rather than enforced. Values outside this range will still be indexed, but search may not be as performant.
            maxValue?: number,
            // Minimum value of this field. This is meant to be indicative rather than enforced. Values outside this range will still be indexed, but search may not be as performant.
            minValue?: number,
        },        
        // Read ACLs on the field specifying who can view values of this field. Valid values are "ALL_DOMAIN_USERS" and "ADMINS_AND_SELF".
        readAccessType?: string,
    }
    
    interface Schemas {
        // ETag of the resource.
        etag?: string,
        // Kind of resource this is.
        kind?: string,
        // List of UserSchema objects.
        schemas?: Schema[],        
    }
    
    interface Token {
        // Whether the application is registered with Google. The value is true if the application has an anonymous Client ID.
        anonymous?: boolean,
        // The Client ID of the application the token is issued to.
        clientId?: string,
        // The displayable name of the application the token is issued to.
        displayText?: string,
        // ETag of the resource.
        etag?: string,
        // The type of the API resource. This is always admin#directory#token.
        kind?: string,
        // Whether the token is issued to an installed application. The value is true if the application is installed to a desktop or mobile device.
        nativeApp?: boolean,
        // A list of authorization scopes the application is granted.
        scopes?: string[],        
        // The unique ID of the user that issued the token.
        userKey?: string,
    }
    
    interface Tokens {
        // ETag of the resource.
        etag?: string,
        // A list of Token resources.
        items?: Token[],        
        // The type of the API resource. This is always admin#directory#tokenList.
        kind?: string,
    }
    
    interface User {
        // 
        addresses?: any,
        // Indicates if user has agreed to terms (Read-only)
        agreedToTerms?: boolean,
        // List of aliases (Read-only)
        aliases?: string[],        
        // Boolean indicating if the user should change password in next login
        changePasswordAtNextLogin?: boolean,
        // User's G Suite account creation time. (Read-only)
        creationTime?: string,
        // Custom fields of the user.
        customSchemas?: any,
        // CustomerId of User (Read-only)
        customerId?: string,
        // 
        deletionTime?: string,
        // 
        emails?: any,
        // ETag of the resource.
        etag?: string,
        // 
        externalIds?: any,
        // Hash function name for password. Supported are MD5, SHA-1 and crypt
        hashFunction?: string,
        // Unique identifier of User (Read-only)
        id?: string,
        // 
        ims?: any,
        // Boolean indicating if user is included in Global Address List
        includeInGlobalAddressList?: boolean,
        // Boolean indicating if ip is whitelisted
        ipWhitelisted?: boolean,
        // Boolean indicating if the user is admin (Read-only)
        isAdmin?: boolean,
        // Boolean indicating if the user is delegated admin (Read-only)
        isDelegatedAdmin?: boolean,
        // Is 2-step verification enforced (Read-only)
        isEnforcedIn2Sv?: boolean,
        // Is enrolled in 2-step verification (Read-only)
        isEnrolledIn2Sv?: boolean,
        // Is mailbox setup (Read-only)
        isMailboxSetup?: boolean,
        // Kind of resource this is.
        kind?: string,
        // 
        languages?: any,
        // User's last login time. (Read-only)
        lastLoginTime?: string,
        // 
        locations?: any,
        // User's name
        name?: UserName,
        // List of non editable aliases (Read-only)
        nonEditableAliases?: string[],        
        // 
        notes?: any,
        // OrgUnit of User
        orgUnitPath?: string,
        // 
        organizations?: any,
        // User's password
        password?: string,
        // 
        phones?: any,
        // 
        posixAccounts?: any,
        // username of User
        primaryEmail?: string,
        // 
        relations?: any,
        // 
        sshPublicKeys?: any,
        // Indicates if user is suspended
        suspended?: boolean,
        // Suspension reason if user is suspended (Read-only)
        suspensionReason?: string,
        // ETag of the user's photo (Read-only)
        thumbnailPhotoEtag?: string,
        // Photo Url of the user (Read-only)
        thumbnailPhotoUrl?: string,
        // 
        websites?: any,
    }
    
    interface UserAbout {
        // About entry can have a type which indicates the content type. It can either be plain or html. By default, notes contents are assumed to contain plain text.
        contentType?: string,
        // Actual value of notes.
        value?: string,
    }
    
    interface UserAddress {
        // Country.
        country?: string,
        // Country code.
        countryCode?: string,
        // Custom type.
        customType?: string,
        // Extended Address.
        extendedAddress?: string,
        // Formatted address.
        formatted?: string,
        // Locality.
        locality?: string,
        // Other parts of address.
        poBox?: string,
        // Postal code.
        postalCode?: string,
        // If this is user's primary address. Only one entry could be marked as primary.
        primary?: boolean,
        // Region.
        region?: string,
        // User supplied address was structured. Structured addresses are NOT supported at this time. You might be able to write structured addresses, but any values will eventually be clobbered.
        sourceIsStructured?: boolean,
        // Street.
        streetAddress?: string,
        // Each entry can have a type which indicates standard values of that entry. For example address could be of home, work etc. In addition to the standard type, an entry can have a custom type and can take any value. Such type should have the CUSTOM value as type and also have a customType value.
        type?: string,
    }
    
    interface UserCustomProperties {
    }
    
    interface UserEmail {
        // Email id of the user.
        address?: string,
        // Custom Type.
        customType?: string,
        // If this is user's primary email. Only one entry could be marked as primary.
        primary?: boolean,
        // Each entry can have a type which indicates standard types of that entry. For example email could be of home, work etc. In addition to the standard type, an entry can have a custom type and can take any value Such types should have the CUSTOM value as type and also have a customType value.
        type?: string,
    }
    
    interface UserExternalId {
        // Custom type.
        customType?: string,
        // The type of the Id.
        type?: string,
        // The value of the id.
        value?: string,
    }
    
    interface UserIm {
        // Custom protocol.
        customProtocol?: string,
        // Custom type.
        customType?: string,
        // Instant messenger id.
        im?: string,
        // If this is user's primary im. Only one entry could be marked as primary.
        primary?: boolean,
        // Protocol used in the instant messenger. It should be one of the values from ImProtocolTypes map. Similar to type, it can take a CUSTOM value and specify the custom name in customProtocol field.
        protocol?: string,
        // Each entry can have a type which indicates standard types of that entry. For example instant messengers could be of home, work etc. In addition to the standard type, an entry can have a custom type and can take any value. Such types should have the CUSTOM value as type and also have a customType value.
        type?: string,
    }
    
    interface UserLanguage {
        // Other language. User can provide own language name if there is no corresponding Google III language code. If this is set LanguageCode can't be set
        customLanguage?: string,
        // Language Code. Should be used for storing Google III LanguageCode string representation for language. Illegal values cause SchemaException.
        languageCode?: string,
    }
    
    interface UserLocation {
        // Textual location. This is most useful for display purposes to concisely describe the location. For example, "Mountain View, CA", "Near Seattle", "US-NYC-9TH 9A209A".
        area?: string,
        // Building Identifier.
        buildingId?: string,
        // Custom Type.
        customType?: string,
        // Most specific textual code of individual desk location.
        deskCode?: string,
        // Floor name/number.
        floorName?: string,
        // Floor section. More specific location within the floor. For example, if a floor is divided into sections "A", "B", and "C", this field would identify one of those values.
        floorSection?: string,
        // Each entry can have a type which indicates standard types of that entry. For example location could be of types default and desk. In addition to standard type, an entry can have a custom type and can give it any name. Such types should have "custom" as type and also have a customType value.
        type?: string,
    }
    
    interface UserMakeAdmin {
        // Boolean indicating new admin status of the user
        status?: boolean,
    }
    
    interface UserName {
        // Last Name
        familyName?: string,
        // Full Name
        fullName?: string,
        // First Name
        givenName?: string,
    }
    
    interface UserOrganization {
        // The cost center of the users department.
        costCenter?: string,
        // Custom type.
        customType?: string,
        // Department within the organization.
        department?: string,
        // Description of the organization.
        description?: string,
        // The domain to which the organization belongs to.
        domain?: string,
        // The full-time equivalent percent within the organization (100000 = 100%).
        fullTimeEquivalent?: number,
        // Location of the organization. This need not be fully qualified address.
        location?: string,
        // Name of the organization
        name?: string,
        // If it user's primary organization.
        primary?: boolean,
        // Symbol of the organization.
        symbol?: string,
        // Title (designation) of the user in the organization.
        title?: string,
        // Each entry can have a type which indicates standard types of that entry. For example organization could be of school, work etc. In addition to the standard type, an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a CustomType value.
        type?: string,
    }
    
    interface UserPhone {
        // Custom Type.
        customType?: string,
        // If this is user's primary phone or not.
        primary?: boolean,
        // Each entry can have a type which indicates standard types of that entry. For example phone could be of home_fax, work, mobile etc. In addition to the standard type, an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value.
        type?: string,
        // Phone number.
        value?: string,
    }
    
    interface UserPhoto {
        // ETag of the resource.
        etag?: string,
        // Height in pixels of the photo
        height?: number,
        // Unique identifier of User (Read-only)
        id?: string,
        // Kind of resource this is.
        kind?: string,
        // Mime Type of the photo
        mimeType?: string,
        // Base64 encoded photo data
        photoData?: string,
        // Primary email of User (Read-only)
        primaryEmail?: string,
        // Width in pixels of the photo
        width?: number,
    }
    
    interface UserPosixAccount {
        // The GECOS (user information) for this account.
        gecos?: string,
        // The default group ID.
        gid?: number,
        // The path to the home directory for this account.
        homeDirectory?: string,
        // If this is user's primary account within the SystemId.
        primary?: boolean,
        // The path to the login shell for this account.
        shell?: string,
        // System identifier for which account Username or Uid apply to.
        systemId?: string,
        // The POSIX compliant user ID.
        uid?: number,
        // The username of the account.
        username?: string,
    }
    
    interface UserRelation {
        // Custom Type.
        customType?: string,
        // The relation of the user. Some of the possible values are mother, father, sister, brother, manager, assistant, partner.
        type?: string,
        // The name of the relation.
        value?: string,
    }
    
    interface UserSshPublicKey {
        // An expiration time in microseconds since epoch.
        expirationTimeUsec?: string,
        // A SHA-256 fingerprint of the SSH public key. (Read-only)
        fingerprint?: string,
        // An SSH public key.
        key?: string,
    }
    
    interface UserUndelete {
        // OrgUnit of User
        orgUnitPath?: string,
    }
    
    interface UserWebsite {
        // Custom Type.
        customType?: string,
        // If this is user's primary website or not.
        primary?: boolean,
        // Each entry can have a type which indicates standard types of that entry. For example website could be of home, work, blog etc. In addition to the standard type, an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value.
        type?: string,
        // Website.
        value?: string,
    }
    
    interface Users {
        // ETag of the resource.
        etag?: string,
        // Kind of resource this is.
        kind?: string,
        // Token used to access next page of this result.
        nextPageToken?: string,
        // Event that triggered this response (only used in case of Push Response)
        trigger_event?: string,
        // List of user objects.
        users?: User[],        
    }
    
    interface VerificationCode {
        // ETag of the resource.
        etag?: string,
        // The type of the resource. This is always admin#directory#verificationCode.
        kind?: string,
        // The obfuscated unique ID of the user.
        userId?: string,
        // A current verification code for the user. Invalidated or used verification codes are not returned as part of the result.
        verificationCode?: string,
    }
    
    interface VerificationCodes {
        // ETag of the resource.
        etag?: string,
        // A list of verification code resources.
        items?: VerificationCode[],        
        // The type of the resource. This is always admin#directory#verificationCodesList.
        kind?: string,
    }
    
    interface AspsResource {
        // Delete an ASP issued by a user.
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
            // The unique ID of the ASP to be deleted.
            codeId: number,
            // Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
            userKey: string,
        }) : gapi.client.Request<void>;        
        
        // Get information about an ASP issued by a user.
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
            // The unique ID of the ASP.
            codeId: number,
            // Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
            userKey: string,
        }) : gapi.client.Request<Asp>;        
        
        // List the ASPs issued by a user.
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
            // Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
            userKey: string,
        }) : gapi.client.Request<Asps>;        
        
    }
    
    
    interface ChannelsResource {
        // Stop watching resources through this channel
        stop (request: {        
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
        }) : gapi.client.Request<void>;        
        
    }
    
    
    interface ChromeosdevicesResource {
        // Take action on Chrome OS Device
        action (request: {        
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
            // Immutable ID of the G Suite account
            customerId: string,
            // Immutable ID of Chrome OS Device
            resourceId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieve Chrome OS Device
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
            // Immutable ID of the G Suite account
            customerId: string,
            // Immutable ID of Chrome OS Device
            deviceId: string,
            // Restrict information returned to a set of selected fields.
            projection?: string,
        }) : gapi.client.Request<ChromeOsDevice>;        
        
        // Retrieve all Chrome OS Devices of a customer (paginated)
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
            // Immutable ID of the G Suite account
            customerId: string,
            // Maximum number of results to return. Default is 100
            maxResults?: number,
            // Column to use for sorting results
            orderBy?: string,
            // Full path of the organization unit or its Id
            orgUnitPath?: string,
            // Token to specify next page in the list
            pageToken?: string,
            // Restrict information returned to a set of selected fields.
            projection?: string,
            // Search string in the format given at http://support.google.com/chromeos/a/bin/answer.py?hl=en&answer=1698333
            query?: string,
            // Whether to return results in ascending or descending order. Only of use when orderBy is also used
            sortOrder?: string,
        }) : gapi.client.Request<ChromeOsDevices>;        
        
        // Update Chrome OS Device. This method supports patch semantics.
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
            // Immutable ID of the G Suite account
            customerId: string,
            // Immutable ID of Chrome OS Device
            deviceId: string,
            // Restrict information returned to a set of selected fields.
            projection?: string,
        }) : gapi.client.Request<ChromeOsDevice>;        
        
        // Update Chrome OS Device
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
            // Immutable ID of the G Suite account
            customerId: string,
            // Immutable ID of Chrome OS Device
            deviceId: string,
            // Restrict information returned to a set of selected fields.
            projection?: string,
        }) : gapi.client.Request<ChromeOsDevice>;        
        
    }
    
    
    interface CustomersResource {
        // Retrieves a customer.
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
            // Id of the customer to be retrieved
            customerKey: string,
        }) : gapi.client.Request<Customer>;        
        
        // Updates a customer. This method supports patch semantics.
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
            // Id of the customer to be updated
            customerKey: string,
        }) : gapi.client.Request<Customer>;        
        
        // Updates a customer.
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
            // Id of the customer to be updated
            customerKey: string,
        }) : gapi.client.Request<Customer>;        
        
    }
    
    
    interface DomainAliasesResource {
        // Deletes a Domain Alias of the customer.
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
            // Immutable ID of the G Suite account.
            customer: string,
            // Name of domain alias to be retrieved.
            domainAliasName: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves a domain alias of the customer.
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
            // Immutable ID of the G Suite account.
            customer: string,
            // Name of domain alias to be retrieved.
            domainAliasName: string,
        }) : gapi.client.Request<DomainAlias>;        
        
        // Inserts a Domain alias of the customer.
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
            // Immutable ID of the G Suite account.
            customer: string,
        }) : gapi.client.Request<DomainAlias>;        
        
        // Lists the domain aliases of the customer.
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
            // Immutable ID of the G Suite account.
            customer: string,
            // Name of the parent domain for which domain aliases are to be fetched.
            parentDomainName?: string,
        }) : gapi.client.Request<DomainAliases>;        
        
    }
    
    
    interface DomainsResource {
        // Deletes a domain of the customer.
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
            // Immutable ID of the G Suite account.
            customer: string,
            // Name of domain to be deleted
            domainName: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves a domain of the customer.
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
            // Immutable ID of the G Suite account.
            customer: string,
            // Name of domain to be retrieved
            domainName: string,
        }) : gapi.client.Request<Domains>;        
        
        // Inserts a domain of the customer.
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
            // Immutable ID of the G Suite account.
            customer: string,
        }) : gapi.client.Request<Domains>;        
        
        // Lists the domains of the customer.
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
            // Immutable ID of the G Suite account.
            customer: string,
        }) : gapi.client.Request<Domains2>;        
        
    }
    
    
    interface AliasesResource {
        // Remove a alias for the group
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
            // The alias to be removed
            alias: string,
            // Email or immutable Id of the group
            groupKey: string,
        }) : gapi.client.Request<void>;        
        
        // Add a alias for the group
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
            // Email or immutable Id of the group
            groupKey: string,
        }) : gapi.client.Request<Alias>;        
        
        // List all aliases for a group
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
            // Email or immutable Id of the group
            groupKey: string,
        }) : gapi.client.Request<Aliases>;        
        
    }
    
    
    interface GroupsResource {
        // Delete Group
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
            // Email or immutable Id of the group
            groupKey: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieve Group
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
            // Email or immutable Id of the group
            groupKey: string,
        }) : gapi.client.Request<Group>;        
        
        // Create Group
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
        }) : gapi.client.Request<Group>;        
        
        // Retrieve all groups in a domain (paginated)
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
            // Immutable ID of the G Suite account. In case of multi-domain, to fetch all groups for a customer, fill this field instead of domain.
            customer?: string,
            // Name of the domain. Fill this field to get groups from only this domain. To return all groups in a multi-domain fill customer field instead.
            domain?: string,
            // Maximum number of results to return. Default is 200
            maxResults?: number,
            // Token to specify next page in the list
            pageToken?: string,
            // Email or immutable Id of the user if only those groups are to be listed, the given user is a member of. If Id, it should match with id of user object
            userKey?: string,
        }) : gapi.client.Request<Groups>;        
        
        // Update Group. This method supports patch semantics.
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
            // Email or immutable Id of the group. If Id, it should match with id of group object
            groupKey: string,
        }) : gapi.client.Request<Group>;        
        
        // Update Group
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
            // Email or immutable Id of the group. If Id, it should match with id of group object
            groupKey: string,
        }) : gapi.client.Request<Group>;        
        
        aliases: AliasesResource,
    }
    
    
    interface MembersResource {
        // Remove membership.
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
            // Email or immutable Id of the group
            groupKey: string,
            // Email or immutable Id of the member
            memberKey: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieve Group Member
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
            // Email or immutable Id of the group
            groupKey: string,
            // Email or immutable Id of the member
            memberKey: string,
        }) : gapi.client.Request<Member>;        
        
        // Add user to the specified group.
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
            // Email or immutable Id of the group
            groupKey: string,
        }) : gapi.client.Request<Member>;        
        
        // Retrieve all members in a group (paginated)
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
            // Email or immutable Id of the group
            groupKey: string,
            // Maximum number of results to return. Default is 200
            maxResults?: number,
            // Token to specify next page in the list
            pageToken?: string,
            // Comma separated role values to filter list results on.
            roles?: string,
        }) : gapi.client.Request<Members>;        
        
        // Update membership of a user in the specified group. This method supports patch semantics.
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
            // Email or immutable Id of the group. If Id, it should match with id of group object
            groupKey: string,
            // Email or immutable Id of the user. If Id, it should match with id of member object
            memberKey: string,
        }) : gapi.client.Request<Member>;        
        
        // Update membership of a user in the specified group.
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
            // Email or immutable Id of the group. If Id, it should match with id of group object
            groupKey: string,
            // Email or immutable Id of the user. If Id, it should match with id of member object
            memberKey: string,
        }) : gapi.client.Request<Member>;        
        
    }
    
    
    interface MobiledevicesResource {
        // Take action on Mobile Device
        action (request: {        
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
            // Immutable ID of the G Suite account
            customerId: string,
            // Immutable ID of Mobile Device
            resourceId: string,
        }) : gapi.client.Request<void>;        
        
        // Delete Mobile Device
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
            // Immutable ID of the G Suite account
            customerId: string,
            // Immutable ID of Mobile Device
            resourceId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieve Mobile Device
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
            // Immutable ID of the G Suite account
            customerId: string,
            // Restrict information returned to a set of selected fields.
            projection?: string,
            // Immutable ID of Mobile Device
            resourceId: string,
        }) : gapi.client.Request<MobileDevice>;        
        
        // Retrieve all Mobile Devices of a customer (paginated)
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
            // Immutable ID of the G Suite account
            customerId: string,
            // Maximum number of results to return. Default is 100
            maxResults?: number,
            // Column to use for sorting results
            orderBy?: string,
            // Token to specify next page in the list
            pageToken?: string,
            // Restrict information returned to a set of selected fields.
            projection?: string,
            // Search string in the format given at http://support.google.com/a/bin/answer.py?hl=en&answer=1408863#search
            query?: string,
            // Whether to return results in ascending or descending order. Only of use when orderBy is also used
            sortOrder?: string,
        }) : gapi.client.Request<MobileDevices>;        
        
    }
    
    
    interface NotificationsResource {
        // Deletes a notification
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
            // The unique ID for the customer's G Suite account. The customerId is also returned as part of the Users resource.
            customer: string,
            // The unique ID of the notification.
            notificationId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves a notification.
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
            // The unique ID for the customer's G Suite account. The customerId is also returned as part of the Users resource.
            customer: string,
            // The unique ID of the notification.
            notificationId: string,
        }) : gapi.client.Request<Notification>;        
        
        // Retrieves a list of notifications.
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
            // The unique ID for the customer's G Suite account.
            customer: string,
            // The ISO 639-1 code of the language notifications are returned in. The default is English (en).
            language?: string,
            // Maximum number of notifications to return per page. The default is 100.
            maxResults?: number,
            // The token to specify the page of results to retrieve.
            pageToken?: string,
        }) : gapi.client.Request<Notifications>;        
        
        // Updates a notification. This method supports patch semantics.
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
            // The unique ID for the customer's G Suite account.
            customer: string,
            // The unique ID of the notification.
            notificationId: string,
        }) : gapi.client.Request<Notification>;        
        
        // Updates a notification.
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
            // The unique ID for the customer's G Suite account.
            customer: string,
            // The unique ID of the notification.
            notificationId: string,
        }) : gapi.client.Request<Notification>;        
        
    }
    
    
    interface OrgunitsResource {
        // Remove Organization Unit
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
            // Immutable ID of the G Suite account
            customerId: string,
            // Full path of the organization unit or its Id
            orgUnitPath: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieve Organization Unit
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
            // Immutable ID of the G Suite account
            customerId: string,
            // Full path of the organization unit or its Id
            orgUnitPath: string,
        }) : gapi.client.Request<OrgUnit>;        
        
        // Add Organization Unit
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
            // Immutable ID of the G Suite account
            customerId: string,
        }) : gapi.client.Request<OrgUnit>;        
        
        // Retrieve all Organization Units
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
            // Immutable ID of the G Suite account
            customerId: string,
            // the URL-encoded organization unit's path or its Id
            orgUnitPath?: string,
            // Whether to return all sub-organizations or just immediate children
            type?: string,
        }) : gapi.client.Request<OrgUnits>;        
        
        // Update Organization Unit. This method supports patch semantics.
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
            // Immutable ID of the G Suite account
            customerId: string,
            // Full path of the organization unit or its Id
            orgUnitPath: string,
        }) : gapi.client.Request<OrgUnit>;        
        
        // Update Organization Unit
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
            // Immutable ID of the G Suite account
            customerId: string,
            // Full path of the organization unit or its Id
            orgUnitPath: string,
        }) : gapi.client.Request<OrgUnit>;        
        
    }
    
    
    interface PrivilegesResource {
        // Retrieves a paginated list of all privileges for a customer.
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
            // Immutable ID of the G Suite account.
            customer: string,
        }) : gapi.client.Request<Privileges>;        
        
    }
    
    
    interface CalendarsResource {
        // Deletes a calendar resource.
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
            // The unique ID of the calendar resource to delete.
            calendarResourceId: string,
            // The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
            customer: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves a calendar resource.
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
            // The unique ID of the calendar resource to retrieve.
            calendarResourceId: string,
            // The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
            customer: string,
        }) : gapi.client.Request<CalendarResource>;        
        
        // Inserts a calendar resource.
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
            // The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
            customer: string,
        }) : gapi.client.Request<CalendarResource>;        
        
        // Retrieves a list of calendar resources for an account.
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
            // The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
            customer: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Token to specify the next page in the list.
            pageToken?: string,
        }) : gapi.client.Request<CalendarResources>;        
        
        // Updates a calendar resource. This method supports patch semantics.
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
            // The unique ID of the calendar resource to update.
            calendarResourceId: string,
            // The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
            customer: string,
        }) : gapi.client.Request<CalendarResource>;        
        
        // Updates a calendar resource.
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
            // The unique ID of the calendar resource to update.
            calendarResourceId: string,
            // The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
            customer: string,
        }) : gapi.client.Request<CalendarResource>;        
        
    }
    
    
    interface ResourcesResource {
        calendars: CalendarsResource,
    }
    
    
    interface RoleAssignmentsResource {
        // Deletes a role assignment.
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
            // Immutable ID of the G Suite account.
            customer: string,
            // Immutable ID of the role assignment.
            roleAssignmentId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieve a role assignment.
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
            // Immutable ID of the G Suite account.
            customer: string,
            // Immutable ID of the role assignment.
            roleAssignmentId: string,
        }) : gapi.client.Request<RoleAssignment>;        
        
        // Creates a role assignment.
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
            // Immutable ID of the G Suite account.
            customer: string,
        }) : gapi.client.Request<RoleAssignment>;        
        
        // Retrieves a paginated list of all roleAssignments.
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
            // Immutable ID of the G Suite account.
            customer: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Token to specify the next page in the list.
            pageToken?: string,
            // Immutable ID of a role. If included in the request, returns only role assignments containing this role ID.
            roleId?: string,
            // The user's primary email address, alias email address, or unique user ID. If included in the request, returns role assignments only for this user.
            userKey?: string,
        }) : gapi.client.Request<RoleAssignments>;        
        
    }
    
    
    interface RolesResource {
        // Deletes a role.
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
            // Immutable ID of the G Suite account.
            customer: string,
            // Immutable ID of the role.
            roleId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves a role.
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
            // Immutable ID of the G Suite account.
            customer: string,
            // Immutable ID of the role.
            roleId: string,
        }) : gapi.client.Request<Role>;        
        
        // Creates a role.
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
            // Immutable ID of the G Suite account.
            customer: string,
        }) : gapi.client.Request<Role>;        
        
        // Retrieves a paginated list of all the roles in a domain.
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
            // Immutable ID of the G Suite account.
            customer: string,
            // Maximum number of results to return.
            maxResults?: number,
            // Token to specify the next page in the list.
            pageToken?: string,
        }) : gapi.client.Request<Roles>;        
        
        // Updates a role. This method supports patch semantics.
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
            // Immutable ID of the G Suite account.
            customer: string,
            // Immutable ID of the role.
            roleId: string,
        }) : gapi.client.Request<Role>;        
        
        // Updates a role.
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
            // Immutable ID of the G Suite account.
            customer: string,
            // Immutable ID of the role.
            roleId: string,
        }) : gapi.client.Request<Role>;        
        
    }
    
    
    interface SchemasResource {
        // Delete schema
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
            // Immutable ID of the G Suite account
            customerId: string,
            // Name or immutable Id of the schema
            schemaKey: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieve schema
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
            // Immutable ID of the G Suite account
            customerId: string,
            // Name or immutable Id of the schema
            schemaKey: string,
        }) : gapi.client.Request<Schema>;        
        
        // Create schema.
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
            // Immutable ID of the G Suite account
            customerId: string,
        }) : gapi.client.Request<Schema>;        
        
        // Retrieve all schemas for a customer
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
            // Immutable ID of the G Suite account
            customerId: string,
        }) : gapi.client.Request<Schemas>;        
        
        // Update schema. This method supports patch semantics.
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
            // Immutable ID of the G Suite account
            customerId: string,
            // Name or immutable Id of the schema.
            schemaKey: string,
        }) : gapi.client.Request<Schema>;        
        
        // Update schema
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
            // Immutable ID of the G Suite account
            customerId: string,
            // Name or immutable Id of the schema.
            schemaKey: string,
        }) : gapi.client.Request<Schema>;        
        
    }
    
    
    interface TokensResource {
        // Delete all access tokens issued by a user for an application.
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
            // The Client ID of the application the token is issued to.
            clientId: string,
            // Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
            userKey: string,
        }) : gapi.client.Request<void>;        
        
        // Get information about an access token issued by a user.
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
            // The Client ID of the application the token is issued to.
            clientId: string,
            // Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
            userKey: string,
        }) : gapi.client.Request<Token>;        
        
        // Returns the set of tokens specified user has issued to 3rd party applications.
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
            // Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
            userKey: string,
        }) : gapi.client.Request<Tokens>;        
        
    }
    
    
    interface AliasesResource {
        // Remove a alias for the user
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
            // The alias to be removed
            alias: string,
            // Email or immutable Id of the user
            userKey: string,
        }) : gapi.client.Request<void>;        
        
        // Add a alias for the user
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
            // Email or immutable Id of the user
            userKey: string,
        }) : gapi.client.Request<Alias>;        
        
        // List all aliases for a user
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
            // Event on which subscription is intended (if subscribing)
            event?: string,
            // Email or immutable Id of the user
            userKey: string,
        }) : gapi.client.Request<Aliases>;        
        
        // Watch for changes in user aliases list
        watch (request: {        
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
            // Event on which subscription is intended (if subscribing)
            event?: string,
            // Email or immutable Id of the user
            userKey: string,
        }) : gapi.client.Request<Channel>;        
        
    }
    
    
    interface PhotosResource {
        // Remove photos for the user
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
            // Email or immutable Id of the user
            userKey: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieve photo of a user
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
            // Email or immutable Id of the user
            userKey: string,
        }) : gapi.client.Request<UserPhoto>;        
        
        // Add a photo for the user. This method supports patch semantics.
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
            // Email or immutable Id of the user
            userKey: string,
        }) : gapi.client.Request<UserPhoto>;        
        
        // Add a photo for the user
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
            // Email or immutable Id of the user
            userKey: string,
        }) : gapi.client.Request<UserPhoto>;        
        
    }
    
    
    interface UsersResource {
        // Delete user
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
            // Email or immutable Id of the user
            userKey: string,
        }) : gapi.client.Request<void>;        
        
        // retrieve user
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
            // Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.
            customFieldMask?: string,
            // What subset of fields to fetch for this user.
            projection?: string,
            // Email or immutable Id of the user
            userKey: string,
            // Whether to fetch the ADMIN_VIEW or DOMAIN_PUBLIC view of the user.
            viewType?: string,
        }) : gapi.client.Request<User>;        
        
        // create user.
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
        }) : gapi.client.Request<User>;        
        
        // Retrieve either deleted users or all users in a domain (paginated)
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
            // Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.
            customFieldMask?: string,
            // Immutable ID of the G Suite account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.
            customer?: string,
            // Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead.
            domain?: string,
            // Event on which subscription is intended (if subscribing)
            event?: string,
            // Maximum number of results to return. Default is 100. Max allowed is 500
            maxResults?: number,
            // Column to use for sorting results
            orderBy?: string,
            // Token to specify next page in the list
            pageToken?: string,
            // What subset of fields to fetch for this user.
            projection?: string,
            // Query string search. Should be of the form "". Complete documentation is at https://developers.google.com/admin-sdk/directory/v1/guides/search-users
            query?: string,
            // If set to true retrieves the list of deleted users. Default is false
            showDeleted?: string,
            // Whether to return results in ascending or descending order.
            sortOrder?: string,
            // Whether to fetch the ADMIN_VIEW or DOMAIN_PUBLIC view of the user.
            viewType?: string,
        }) : gapi.client.Request<Users>;        
        
        // change admin status of a user
        makeAdmin (request: {        
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
            // Email or immutable Id of the user as admin
            userKey: string,
        }) : gapi.client.Request<void>;        
        
        // update user. This method supports patch semantics.
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
            // Email or immutable Id of the user. If Id, it should match with id of user object
            userKey: string,
        }) : gapi.client.Request<User>;        
        
        // Undelete a deleted user
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
            // The immutable id of the user
            userKey: string,
        }) : gapi.client.Request<void>;        
        
        // update user
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
            // Email or immutable Id of the user. If Id, it should match with id of user object
            userKey: string,
        }) : gapi.client.Request<User>;        
        
        // Watch for changes in users list
        watch (request: {        
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
            // Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.
            customFieldMask?: string,
            // Immutable ID of the G Suite account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.
            customer?: string,
            // Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead.
            domain?: string,
            // Event on which subscription is intended (if subscribing)
            event?: string,
            // Maximum number of results to return. Default is 100. Max allowed is 500
            maxResults?: number,
            // Column to use for sorting results
            orderBy?: string,
            // Token to specify next page in the list
            pageToken?: string,
            // What subset of fields to fetch for this user.
            projection?: string,
            // Query string search. Should be of the form "". Complete documentation is at https://developers.google.com/admin-sdk/directory/v1/guides/search-users
            query?: string,
            // If set to true retrieves the list of deleted users. Default is false
            showDeleted?: string,
            // Whether to return results in ascending or descending order.
            sortOrder?: string,
            // Whether to fetch the ADMIN_VIEW or DOMAIN_PUBLIC view of the user.
            viewType?: string,
        }) : gapi.client.Request<Channel>;        
        
        aliases: AliasesResource,
        photos: PhotosResource,
    }
    
    
    interface VerificationCodesResource {
        // Generate new backup verification codes for the user.
        generate (request: {        
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
            // Email or immutable Id of the user
            userKey: string,
        }) : gapi.client.Request<void>;        
        
        // Invalidate the current backup verification codes for the user.
        invalidate (request: {        
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
            // Email or immutable Id of the user
            userKey: string,
        }) : gapi.client.Request<void>;        
        
        // Returns the current set of valid backup verification codes for the specified user.
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
            // Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
            userKey: string,
        }) : gapi.client.Request<VerificationCodes>;        
        
    }
    
}

declare module gapi.client.admin {
    var asps: gapi.client.admin.AspsResource; 
    
    var channels: gapi.client.admin.ChannelsResource; 
    
    var chromeosdevices: gapi.client.admin.ChromeosdevicesResource; 
    
    var customers: gapi.client.admin.CustomersResource; 
    
    var domainAliases: gapi.client.admin.DomainAliasesResource; 
    
    var domains: gapi.client.admin.DomainsResource; 
    
    var groups: gapi.client.admin.GroupsResource; 
    
    var members: gapi.client.admin.MembersResource; 
    
    var mobiledevices: gapi.client.admin.MobiledevicesResource; 
    
    var notifications: gapi.client.admin.NotificationsResource; 
    
    var orgunits: gapi.client.admin.OrgunitsResource; 
    
    var privileges: gapi.client.admin.PrivilegesResource; 
    
    var resources: gapi.client.admin.ResourcesResource; 
    
    var roleAssignments: gapi.client.admin.RoleAssignmentsResource; 
    
    var roles: gapi.client.admin.RolesResource; 
    
    var schemas: gapi.client.admin.SchemasResource; 
    
    var tokens: gapi.client.admin.TokensResource; 
    
    var users: gapi.client.admin.UsersResource; 
    
    var verificationCodes: gapi.client.admin.VerificationCodesResource; 
    
}
