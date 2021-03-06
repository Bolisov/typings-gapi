// Type definitions for Google Calendar API v3
// Project: https://developers.google.com/google-apps/calendar/firstapp
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.calendar {
    
    interface Acl {
        // ETag of the collection.
        etag?: string,
        // List of rules on the access control list.
        items?: AclRule[],        
        // Type of the collection ("calendar#acl").
        kind?: string,
        // Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.
        nextPageToken?: string,
        // Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.
        nextSyncToken?: string,
    }
    
    interface AclRule {
        // ETag of the resource.
        etag?: string,
        // Identifier of the ACL rule.
        id?: string,
        // Type of the resource ("calendar#aclRule").
        kind?: string,
        // The role assigned to the scope. Possible values are:  
        // - "none" - Provides no access. 
        // - "freeBusyReader" - Provides read access to free/busy information. 
        // - "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden. 
        // - "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible. 
        // - "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.
        role?: string,
        // The scope of the rule.
        scope?: {        
            // The type of the scope. Possible values are:  
            // - "default" - The public scope. This is the default value. 
            // - "user" - Limits the scope to a single user. 
            // - "group" - Limits the scope to a group. 
            // - "domain" - Limits the scope to a domain.  Note: The permissions granted to the "default", or public, scope apply to any user, authenticated or not.
            type?: string,
            // The email address of a user or group, or the name of a domain, depending on the scope type. Omitted for type "default".
            value?: string,
        },        
    }
    
    interface Calendar {
        // Description of the calendar. Optional.
        description?: string,
        // ETag of the resource.
        etag?: string,
        // Identifier of the calendar. To retrieve IDs call the calendarList.list() method.
        id?: string,
        // Type of the resource ("calendar#calendar").
        kind?: string,
        // Geographic location of the calendar as free-form text. Optional.
        location?: string,
        // Title of the calendar.
        summary?: string,
        // The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) Optional.
        timeZone?: string,
    }
    
    interface CalendarList {
        // ETag of the collection.
        etag?: string,
        // Calendars that are present on the user's calendar list.
        items?: CalendarListEntry[],        
        // Type of the collection ("calendar#calendarList").
        kind?: string,
        // Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.
        nextPageToken?: string,
        // Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.
        nextSyncToken?: string,
    }
    
    interface CalendarListEntry {
        // The effective access role that the authenticated user has on the calendar. Read-only. Possible values are:  
        // - "freeBusyReader" - Provides read access to free/busy information. 
        // - "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden. 
        // - "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible. 
        // - "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.
        accessRole?: string,
        // The main color of the calendar in the hexadecimal format "#0088aa". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.
        backgroundColor?: string,
        // The color of the calendar. This is an ID referring to an entry in the calendar section of the colors definition (see the colors endpoint). This property is superseded by the backgroundColor and foregroundColor properties and can be ignored when using these properties. Optional.
        colorId?: string,
        // The default reminders that the authenticated user has for this calendar.
        defaultReminders?: EventReminder[],        
        // Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False.
        deleted?: boolean,
        // Description of the calendar. Optional. Read-only.
        description?: string,
        // ETag of the resource.
        etag?: string,
        // The foreground color of the calendar in the hexadecimal format "#ffffff". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.
        foregroundColor?: string,
        // Whether the calendar has been hidden from the list. Optional. The default is False.
        hidden?: boolean,
        // Identifier of the calendar.
        id?: string,
        // Type of the resource ("calendar#calendarListEntry").
        kind?: string,
        // Geographic location of the calendar as free-form text. Optional. Read-only.
        location?: string,
        // The notifications that the authenticated user is receiving for this calendar.
        notificationSettings?: {        
            // The list of notifications set for this calendar.
            notifications?: CalendarNotification[],            
        },        
        // Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False.
        primary?: boolean,
        // Whether the calendar content shows up in the calendar UI. Optional. The default is False.
        selected?: boolean,
        // Title of the calendar. Read-only.
        summary?: string,
        // The summary that the authenticated user has set for this calendar. Optional.
        summaryOverride?: string,
        // The time zone of the calendar. Optional. Read-only.
        timeZone?: string,
    }
    
    interface CalendarNotification {
        // The method used to deliver the notification. Possible values are:  
        // - "email" - Reminders are sent via email. 
        // - "sms" - Reminders are sent via SMS. This value is read-only and is ignored on inserts and updates. SMS reminders are only available for G Suite customers.
        method?: string,
        // The type of notification. Possible values are:  
        // - "eventCreation" - Notification sent when a new event is put on the calendar. 
        // - "eventChange" - Notification sent when an event is changed. 
        // - "eventCancellation" - Notification sent when an event is cancelled. 
        // - "eventResponse" - Notification sent when an event is changed. 
        // - "agenda" - An agenda with the events of the day (sent out in the morning).
        type?: string,
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
    
    interface ColorDefinition {
        // The background color associated with this color definition.
        background?: string,
        // The foreground color that can be used to write on top of a background with 'background' color.
        foreground?: string,
    }
    
    interface Colors {
        // A global palette of calendar colors, mapping from the color ID to its definition. A calendarListEntry resource refers to one of these color IDs in its color field. Read-only.
        calendar?: any,
        // A global palette of event colors, mapping from the color ID to its definition. An event resource may refer to one of these color IDs in its color field. Read-only.
        event?: any,
        // Type of the resource ("calendar#colors").
        kind?: string,
        // Last modification time of the color palette (as a RFC3339 timestamp). Read-only.
        updated?: string,
    }
    
    interface DeepLinkData {
        // 
        links?: Link[],        
        // 
        url?: string,
    }
    
    interface DisplayInfo {
        // 
        appIconUrl?: string,
        // 
        appShortTitle?: string,
        // 
        appTitle?: string,
        // 
        linkShortTitle?: string,
        // 
        linkTitle?: string,
    }
    
    interface Error {
        // Domain, or broad category, of the error.
        domain?: string,
        // Specific reason for the error. Some of the possible values are:  
        // - "groupTooBig" - The group of users requested is too large for a single query. 
        // - "tooManyCalendarsRequested" - The number of calendars requested is too large for a single query. 
        // - "notFound" - The requested resource was not found. 
        // - "internalError" - The API service has encountered an internal error.  Additional error types may be added in the future, so clients should gracefully handle additional error statuses not included in this list.
        reason?: string,
    }
    
    interface Event {
        // Whether anyone can invite themselves to the event (currently works for Google+ events only). Optional. The default is False.
        anyoneCanAddSelf?: boolean,
        // File attachments for the event. Currently only Google Drive attachments are supported.
        // In order to modify attachments the supportsAttachments request parameter should be set to true.
        // There can be at most 25 attachments per event,
        attachments?: EventAttachment[],        
        // The attendees of the event. See the Events with attendees guide for more information on scheduling events with other calendar users.
        attendees?: EventAttendee[],        
        // Whether attendees may have been omitted from the event's representation. When retrieving an event, this may be due to a restriction specified by the maxAttendee query parameter. When updating an event, this can be used to only update the participant's response. Optional. The default is False.
        attendeesOmitted?: boolean,
        // The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the  colors endpoint). Optional.
        colorId?: string,
        // Creation time of the event (as a RFC3339 timestamp). Read-only.
        created?: string,
        // The creator of the event. Read-only.
        creator?: {        
            // The creator's name, if available.
            displayName?: string,
            // The creator's email address, if available.
            email?: string,
            // The creator's Profile ID, if available. It corresponds to theid field in the People collection of the Google+ API
            id?: string,
            // Whether the creator corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.
            self?: boolean,
        },        
        // Description of the event. Optional.
        description?: string,
        // The (exclusive) end time of the event. For a recurring event, this is the end time of the first instance.
        end?: EventDateTime,
        // Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True. The default is False.
        endTimeUnspecified?: boolean,
        // ETag of the resource.
        etag?: string,
        // Extended properties of the event.
        extendedProperties?: {        
            // Properties that are private to the copy of the event that appears on this calendar.
            private?: any,
            // Properties that are shared between copies of the event on other attendees' calendars.
            shared?: any,
        },        
        // A gadget that extends this event.
        gadget?: {        
            // The gadget's display mode. Optional. Possible values are:  
            // - "icon" - The gadget displays next to the event's title in the calendar view. 
            // - "chip" - The gadget displays when the event is clicked.
            display?: string,
            // The gadget's height in pixels. The height must be an integer greater than 0. Optional.
            height?: number,
            // The gadget's icon URL. The URL scheme must be HTTPS.
            iconLink?: string,
            // The gadget's URL. The URL scheme must be HTTPS.
            link?: string,
            // Preferences.
            preferences?: any,
            // The gadget's title.
            title?: string,
            // The gadget's type.
            type?: string,
            // The gadget's width in pixels. The width must be an integer greater than 0. Optional.
            width?: number,
        },        
        // Whether attendees other than the organizer can invite others to the event. Optional. The default is True.
        guestsCanInviteOthers?: boolean,
        // Whether attendees other than the organizer can modify the event. Optional. The default is False.
        guestsCanModify?: boolean,
        // Whether attendees other than the organizer can see who the event's attendees are. Optional. The default is True.
        guestsCanSeeOtherGuests?: boolean,
        // An absolute link to the Google+ hangout associated with this event. Read-only.
        hangoutLink?: string,
        // An absolute link to this event in the Google Calendar Web UI. Read-only.
        htmlLink?: string,
        // Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method.
        // Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.
        iCalUID?: string,
        // Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:  
        // - characters allowed in the ID are those used in base32hex encoding, i.e. lowercase letters a-v and digits 0-9, see section 3.1.2 in RFC2938 
        // - the length of the ID must be between 5 and 1024 characters 
        // - the ID must be unique per calendar  Due to the globally distributed nature of the system, we cannot guarantee that ID collisions will be detected at event creation time. To minimize the risk of collisions we recommend using an established UUID algorithm such as one described in RFC4122.
        // If you do not specify an ID, it will be automatically generated by the server.
        // Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.
        id?: string,
        // Type of the resource ("calendar#event").
        kind?: string,
        // Geographic location of the event as free-form text. Optional.
        location?: string,
        // Whether this is a locked event copy where no changes can be made to the main event fields "summary", "description", "location", "start", "end" or "recurrence". The default is False. Read-Only.
        locked?: boolean,
        // The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event.
        organizer?: {        
            // The organizer's name, if available.
            displayName?: string,
            // The organizer's email address, if available. It must be a valid email address as per RFC5322.
            email?: string,
            // The organizer's Profile ID, if available. It corresponds to theid field in the People collection of the Google+ API
            id?: string,
            // Whether the organizer corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.
            self?: boolean,
        },        
        // For an instance of a recurring event, this is the time at which this event would start according to the recurrence data in the recurring event identified by recurringEventId. Immutable.
        originalStartTime?: EventDateTime,
        // Whether this is a private event copy where changes are not shared with other copies on other calendars. Optional. Immutable. The default is False.
        privateCopy?: boolean,
        // List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545. Note that DTSTART and DTEND lines are not allowed in this field; event start and end times are specified in the start and end fields. This field is omitted for single events or instances of recurring events.
        recurrence?: string[],        
        // For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable.
        recurringEventId?: string,
        // Information about the event's reminders for the authenticated user.
        reminders?: {        
            // If the event doesn't use the default reminders, this lists the reminders specific to the event, or, if not set, indicates that no reminders are set for this event. The maximum number of override reminders is 5.
            overrides?: EventReminder[],            
            // Whether the default reminders of the calendar apply to the event.
            useDefault?: boolean,
        },        
        // Sequence number as per iCalendar.
        sequence?: number,
        // Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event.
        source?: {        
            // Title of the source; for example a title of a web page or an email subject.
            title?: string,
            // URL of the source pointing to a resource. The URL scheme must be HTTP or HTTPS.
            url?: string,
        },        
        // The (inclusive) start time of the event. For a recurring event, this is the start time of the first instance.
        start?: EventDateTime,
        // Status of the event. Optional. Possible values are:  
        // - "confirmed" - The event is confirmed. This is the default status. 
        // - "tentative" - The event is tentatively confirmed. 
        // - "cancelled" - The event is cancelled.
        status?: string,
        // Title of the event.
        summary?: string,
        // Whether the event blocks time on the calendar. Optional. Possible values are:  
        // - "opaque" - The event blocks time on the calendar. This is the default value. 
        // - "transparent" - The event does not block time on the calendar.
        transparency?: string,
        // Last modification time of the event (as a RFC3339 timestamp). Read-only.
        updated?: string,
        // Visibility of the event. Optional. Possible values are:  
        // - "default" - Uses the default visibility for events on the calendar. This is the default value. 
        // - "public" - The event is public and event details are visible to all readers of the calendar. 
        // - "private" - The event is private and only event attendees may view event details. 
        // - "confidential" - The event is private. This value is provided for compatibility reasons.
        visibility?: string,
    }
    
    interface EventAttachment {
        // ID of the attached file. Read-only.
        // For Google Drive files, this is the ID of the corresponding Files resource entry in the Drive API.
        fileId?: string,
        // URL link to the attachment.
        // For adding Google Drive file attachments use the same format as in alternateLink property of the Files resource in the Drive API.
        fileUrl?: string,
        // URL link to the attachment's icon. Read-only.
        iconLink?: string,
        // Internet media type (MIME type) of the attachment.
        mimeType?: string,
        // Attachment title.
        title?: string,
    }
    
    interface EventAttendee {
        // Number of additional guests. Optional. The default is 0.
        additionalGuests?: number,
        // The attendee's response comment. Optional.
        comment?: string,
        // The attendee's name, if available. Optional.
        displayName?: string,
        // The attendee's email address, if available. This field must be present when adding an attendee. It must be a valid email address as per RFC5322.
        email?: string,
        // The attendee's Profile ID, if available. It corresponds to theid field in the People collection of the Google+ API
        id?: string,
        // Whether this is an optional attendee. Optional. The default is False.
        optional?: boolean,
        // Whether the attendee is the organizer of the event. Read-only. The default is False.
        organizer?: boolean,
        // Whether the attendee is a resource. Read-only. The default is False.
        resource?: boolean,
        // The attendee's response status. Possible values are:  
        // - "needsAction" - The attendee has not responded to the invitation. 
        // - "declined" - The attendee has declined the invitation. 
        // - "tentative" - The attendee has tentatively accepted the invitation. 
        // - "accepted" - The attendee has accepted the invitation.
        responseStatus?: string,
        // Whether this entry represents the calendar on which this copy of the event appears. Read-only. The default is False.
        self?: boolean,
    }
    
    interface EventDateTime {
        // The date, in the format "yyyy-mm-dd", if this is an all-day event.
        date?: string,
        // The time, as a combined date-time value (formatted according to RFC3339). A time zone offset is required unless a time zone is explicitly specified in timeZone.
        dateTime?: string,
        // The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) For recurring events this field is required and specifies the time zone in which the recurrence is expanded. For single events this field is optional and indicates a custom time zone for the event start/end.
        timeZone?: string,
    }
    
    interface EventHabitInstance {
        // Metadata specific to this instance.
        data?: HabitInstanceData,
        // Id of the habit this instance belongs to.
        parentId?: string,
    }
    
    interface EventReminder {
        // The method used by this reminder. Possible values are:  
        // - "email" - Reminders are sent via email. 
        // - "sms" - Reminders are sent via SMS. These are only available for G Suite customers. Requests to set SMS reminders for other account types are ignored. 
        // - "popup" - Reminders are sent via a UI popup.
        method?: string,
        // Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).
        minutes?: number,
    }
    
    interface Events {
        // The user's access role for this calendar. Read-only. Possible values are:  
        // - "none" - The user has no access. 
        // - "freeBusyReader" - The user has read access to free/busy information. 
        // - "reader" - The user has read access to the calendar. Private events will appear to users with reader access, but event details will be hidden. 
        // - "writer" - The user has read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible. 
        // - "owner" - The user has ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.
        accessRole?: string,
        // The default reminders on the calendar for the authenticated user. These reminders apply to all events on this calendar that do not explicitly override them (i.e. do not have reminders.useDefault set to True).
        defaultReminders?: EventReminder[],        
        // Description of the calendar. Read-only.
        description?: string,
        // ETag of the collection.
        etag?: string,
        // List of events on the calendar.
        items?: Event[],        
        // Type of the collection ("calendar#events").
        kind?: string,
        // Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.
        nextPageToken?: string,
        // Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.
        nextSyncToken?: string,
        // Title of the calendar. Read-only.
        summary?: string,
        // The time zone of the calendar. Read-only.
        timeZone?: string,
        // Last modification time of the calendar (as a RFC3339 timestamp). Read-only.
        updated?: string,
    }
    
    interface FreeBusyCalendar {
        // List of time ranges during which this calendar should be regarded as busy.
        busy?: TimePeriod[],        
        // Optional error(s) (if computation for the calendar failed).
        errors?: Error[],        
    }
    
    interface FreeBusyGroup {
        // List of calendars' identifiers within a group.
        calendars?: string[],        
        // Optional error(s) (if computation for the group failed).
        errors?: Error[],        
    }
    
    interface FreeBusyRequest {
        // Maximal number of calendars for which FreeBusy information is to be provided. Optional.
        calendarExpansionMax?: number,
        // Maximal number of calendar identifiers to be provided for a single group. Optional. An error will be returned for a group with more members than this value.
        groupExpansionMax?: number,
        // List of calendars and/or groups to query.
        items?: FreeBusyRequestItem[],        
        // The end of the interval for the query.
        timeMax?: string,
        // The start of the interval for the query.
        timeMin?: string,
        // Time zone used in the response. Optional. The default is UTC.
        timeZone?: string,
    }
    
    interface FreeBusyRequestItem {
        // The identifier of a calendar or a group.
        id?: string,
    }
    
    interface FreeBusyResponse {
        // List of free/busy information for calendars.
        calendars?: any,
        // Expansion of groups.
        groups?: any,
        // Type of the resource ("calendar#freeBusy").
        kind?: string,
        // The end of the interval.
        timeMax?: string,
        // The start of the interval.
        timeMin?: string,
    }
    
    interface HabitInstanceData {
        // 
        status?: string,
        // 
        statusInferred?: boolean,
        // 
        type?: string,
    }
    
    interface LaunchInfo {
        // 
        appId?: string,
        // 
        installUrl?: string,
        // 
        intentAction?: string,
        // 
        uri?: string,
    }
    
    interface Link {
        // 
        applinkingSource?: string,
        // 
        displayInfo?: DisplayInfo,
        // 
        launchInfo?: LaunchInfo,
        // 
        platform?: string,
        // 
        url?: string,
    }
    
    interface Setting {
        // ETag of the resource.
        etag?: string,
        // The id of the user setting.
        id?: string,
        // Type of the resource ("calendar#setting").
        kind?: string,
        // Value of the user setting. The format of the value depends on the ID of the setting. It must always be a UTF-8 string of length up to 1024 characters.
        value?: string,
    }
    
    interface Settings {
        // Etag of the collection.
        etag?: string,
        // List of user settings.
        items?: Setting[],        
        // Type of the collection ("calendar#settings").
        kind?: string,
        // Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.
        nextPageToken?: string,
        // Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.
        nextSyncToken?: string,
    }
    
    interface TimePeriod {
        // The (exclusive) end of the time period.
        end?: string,
        // The (inclusive) start of the time period.
        start?: string,
    }
    
    interface AclResource {
        // Deletes an access control rule.
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
            // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
            calendarId: string,
            // ACL rule identifier.
            ruleId: string,
        }) : gapi.client.Request<void>;        
        
        // Returns an access control rule.
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
            // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
            calendarId: string,
            // ACL rule identifier.
            ruleId: string,
        }) : gapi.client.Request<AclRule>;        
        
        // Creates an access control rule.
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
            // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
            calendarId: string,
        }) : gapi.client.Request<AclRule>;        
        
        // Returns the rules in the access control list for the calendar.
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
            // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
            calendarId: string,
            // Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
            maxResults?: number,
            // Token specifying which result page to return. Optional.
            pageToken?: string,
            // Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False.
            showDeleted?: boolean,
            // Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
            // If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
            // Learn more about incremental synchronization.
            // Optional. The default is to return all entries.
            syncToken?: string,
        }) : gapi.client.Request<Acl>;        
        
        // Updates an access control rule. This method supports patch semantics.
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
            // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
            calendarId: string,
            // ACL rule identifier.
            ruleId: string,
        }) : gapi.client.Request<AclRule>;        
        
        // Updates an access control rule.
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
            // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
            calendarId: string,
            // ACL rule identifier.
            ruleId: string,
        }) : gapi.client.Request<AclRule>;        
        
        // Watch for changes to ACL resources.
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
            // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
            calendarId: string,
            // Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
            maxResults?: number,
            // Token specifying which result page to return. Optional.
            pageToken?: string,
            // Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False.
            showDeleted?: boolean,
            // Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
            // If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
            // Learn more about incremental synchronization.
            // Optional. The default is to return all entries.
            syncToken?: string,
        }) : gapi.client.Request<Channel>;        
        
    }
    
    
    interface CalendarListResource {
        // Deletes an entry on the user's calendar list.
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
            // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
            calendarId: string,
        }) : gapi.client.Request<void>;        
        
        // Returns an entry on the user's calendar list.
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
            // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
            calendarId: string,
        }) : gapi.client.Request<CalendarListEntry>;        
        
        // Adds an entry to the user's calendar list.
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
            // Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
            colorRgbFormat?: boolean,
        }) : gapi.client.Request<CalendarListEntry>;        
        
        // Returns entries on the user's calendar list.
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
            // Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
            maxResults?: number,
            // The minimum access role for the user in the returned entries. Optional. The default is no restriction.
            minAccessRole?: string,
            // Token specifying which result page to return. Optional.
            pageToken?: string,
            // Whether to include deleted calendar list entries in the result. Optional. The default is False.
            showDeleted?: boolean,
            // Whether to show hidden entries. Optional. The default is False.
            showHidden?: boolean,
            // Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.
            // To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken.
            // If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
            // Learn more about incremental synchronization.
            // Optional. The default is to return all entries.
            syncToken?: string,
        }) : gapi.client.Request<CalendarList>;        
        
        // Updates an entry on the user's calendar list. This method supports patch semantics.
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
            // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
            calendarId: string,
            // Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
            colorRgbFormat?: boolean,
        }) : gapi.client.Request<CalendarListEntry>;        
        
        // Updates an entry on the user's calendar list.
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
            // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
            calendarId: string,
            // Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
            colorRgbFormat?: boolean,
        }) : gapi.client.Request<CalendarListEntry>;        
        
        // Watch for changes to CalendarList resources.
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
            // Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
            maxResults?: number,
            // The minimum access role for the user in the returned entries. Optional. The default is no restriction.
            minAccessRole?: string,
            // Token specifying which result page to return. Optional.
            pageToken?: string,
            // Whether to include deleted calendar list entries in the result. Optional. The default is False.
            showDeleted?: boolean,
            // Whether to show hidden entries. Optional. The default is False.
            showHidden?: boolean,
            // Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.
            // To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken.
            // If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
            // Learn more about incremental synchronization.
            // Optional. The default is to return all entries.
            syncToken?: string,
        }) : gapi.client.Request<Channel>;        
        
    }
    
    
    interface CalendarsResource {
        // Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.
        clear (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
            calendarId: string,
        }) : gapi.client.Request<void>;        
        
        // Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
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
            // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
            calendarId: string,
        }) : gapi.client.Request<void>;        
        
        // Returns metadata for a calendar.
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
            // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
            calendarId: string,
        }) : gapi.client.Request<Calendar>;        
        
        // Creates a secondary calendar.
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
        }) : gapi.client.Request<Calendar>;        
        
        // Updates metadata for a calendar. This method supports patch semantics.
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
            // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
            calendarId: string,
        }) : gapi.client.Request<Calendar>;        
        
        // Updates metadata for a calendar.
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
            // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
            calendarId: string,
        }) : gapi.client.Request<Calendar>;        
        
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
    
    
    interface ColorsResource {
        // Returns the color definitions for calendars and events.
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
        }) : gapi.client.Request<Colors>;        
        
    }
    
    
    interface EventsResource {
        // Deletes an event.
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
            // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
            calendarId: string,
            // Event identifier.
            eventId: string,
            // Whether to send notifications about the deletion of the event. Optional. The default is False.
            sendNotifications?: boolean,
        }) : gapi.client.Request<void>;        
        
        // Returns an event.
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
            // Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
            alwaysIncludeEmail?: boolean,
            // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
            calendarId: string,
            // Event identifier.
            eventId: string,
            // The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
            maxAttendees?: number,
            // Time zone used in the response. Optional. The default is the time zone of the calendar.
            timeZone?: string,
        }) : gapi.client.Request<Event>;        
        
        // Imports an event. This operation is used to add a private copy of an existing event to a calendar.
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
            // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
            calendarId: string,
            // Whether API client performing operation supports event attachments. Optional. The default is False.
            supportsAttachments?: boolean,
        }) : gapi.client.Request<Event>;        
        
        // Creates an event.
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
            // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
            calendarId: string,
            // The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
            maxAttendees?: number,
            // Whether to send notifications about the creation of the new event. Optional. The default is False.
            sendNotifications?: boolean,
            // Whether API client performing operation supports event attachments. Optional. The default is False.
            supportsAttachments?: boolean,
        }) : gapi.client.Request<Event>;        
        
        // Returns instances of the specified recurring event.
        instances (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
            alwaysIncludeEmail?: boolean,
            // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
            calendarId: string,
            // Recurring event identifier.
            eventId: string,
            // The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
            maxAttendees?: number,
            // Maximum number of events returned on one result page. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
            maxResults?: number,
            // The original start time of the instance in the result. Optional.
            originalStart?: string,
            // Token specifying which result page to return. Optional.
            pageToken?: string,
            // Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events will still be included if singleEvents is False. Optional. The default is False.
            showDeleted?: boolean,
            // Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset.
            timeMax?: string,
            // Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset.
            timeMin?: string,
            // Time zone used in the response. Optional. The default is the time zone of the calendar.
            timeZone?: string,
        }) : gapi.client.Request<Events>;        
        
        // Returns events on the specified calendar.
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
            // Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
            alwaysIncludeEmail?: boolean,
            // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
            calendarId: string,
            // Specifies event ID in the iCalendar format to be included in the response. Optional.
            iCalUID?: string,
            // The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
            maxAttendees?: number,
            // Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
            maxResults?: number,
            // The order of the events returned in the result. Optional. The default is an unspecified, stable order.
            orderBy?: string,
            // Token specifying which result page to return. Optional.
            pageToken?: string,
            // Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.
            privateExtendedProperty?: string,
            // Free text search terms to find events that match these terms in any field, except for extended properties. Optional.
            q?: string,
            // Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.
            sharedExtendedProperty?: string,
            // Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.
            showDeleted?: boolean,
            // Whether to include hidden invitations in the result. Optional. The default is False.
            showHiddenInvitations?: boolean,
            // Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.
            singleEvents?: boolean,
            // Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
            // There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.
            // 
            // These are: 
            // - iCalUID 
            // - orderBy 
            // - privateExtendedProperty 
            // - q 
            // - sharedExtendedProperty 
            // - timeMin 
            // - timeMax 
            // - updatedMin If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
            // Learn more about incremental synchronization.
            // Optional. The default is to return all entries.
            syncToken?: string,
            // Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, e.g., 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but will be ignored.
            timeMax?: string,
            // Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, e.g., 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but will be ignored.
            timeMin?: string,
            // Time zone used in the response. Optional. The default is the time zone of the calendar.
            timeZone?: string,
            // Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.
            updatedMin?: string,
        }) : gapi.client.Request<Events>;        
        
        // Moves an event to another calendar, i.e. changes an event's organizer.
        move (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // Calendar identifier of the source calendar where the event currently is on.
            calendarId: string,
            // Calendar identifier of the target calendar where the event is to be moved to.
            destination: string,
            // Event identifier.
            eventId: string,
            // Whether to send notifications about the change of the event's organizer. Optional. The default is False.
            sendNotifications?: boolean,
        }) : gapi.client.Request<Event>;        
        
        // Updates an event. This method supports patch semantics.
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
            // Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
            alwaysIncludeEmail?: boolean,
            // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
            calendarId: string,
            // Event identifier.
            eventId: string,
            // The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
            maxAttendees?: number,
            // Whether to send notifications about the event update (e.g. attendee's responses, title changes, etc.). Optional. The default is False.
            sendNotifications?: boolean,
            // Whether API client performing operation supports event attachments. Optional. The default is False.
            supportsAttachments?: boolean,
        }) : gapi.client.Request<Event>;        
        
        // Creates an event based on a simple text string.
        quickAdd (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
            calendarId: string,
            // Whether to send notifications about the creation of the event. Optional. The default is False.
            sendNotifications?: boolean,
            // The text describing the event to be created.
            text: string,
        }) : gapi.client.Request<Event>;        
        
        // Updates an event.
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
            // Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
            alwaysIncludeEmail?: boolean,
            // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
            calendarId: string,
            // Event identifier.
            eventId: string,
            // The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
            maxAttendees?: number,
            // Whether to send notifications about the event update (e.g. attendee's responses, title changes, etc.). Optional. The default is False.
            sendNotifications?: boolean,
            // Whether API client performing operation supports event attachments. Optional. The default is False.
            supportsAttachments?: boolean,
        }) : gapi.client.Request<Event>;        
        
        // Watch for changes to Events resources.
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
            // Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
            alwaysIncludeEmail?: boolean,
            // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
            calendarId: string,
            // Specifies event ID in the iCalendar format to be included in the response. Optional.
            iCalUID?: string,
            // The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
            maxAttendees?: number,
            // Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
            maxResults?: number,
            // The order of the events returned in the result. Optional. The default is an unspecified, stable order.
            orderBy?: string,
            // Token specifying which result page to return. Optional.
            pageToken?: string,
            // Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.
            privateExtendedProperty?: string,
            // Free text search terms to find events that match these terms in any field, except for extended properties. Optional.
            q?: string,
            // Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.
            sharedExtendedProperty?: string,
            // Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.
            showDeleted?: boolean,
            // Whether to include hidden invitations in the result. Optional. The default is False.
            showHiddenInvitations?: boolean,
            // Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.
            singleEvents?: boolean,
            // Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
            // There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.
            // 
            // These are: 
            // - iCalUID 
            // - orderBy 
            // - privateExtendedProperty 
            // - q 
            // - sharedExtendedProperty 
            // - timeMin 
            // - timeMax 
            // - updatedMin If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
            // Learn more about incremental synchronization.
            // Optional. The default is to return all entries.
            syncToken?: string,
            // Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, e.g., 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but will be ignored.
            timeMax?: string,
            // Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, e.g., 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but will be ignored.
            timeMin?: string,
            // Time zone used in the response. Optional. The default is the time zone of the calendar.
            timeZone?: string,
            // Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.
            updatedMin?: string,
        }) : gapi.client.Request<Channel>;        
        
    }
    
    
    interface FreebusyResource {
        // Returns free/busy information for a set of calendars.
        query (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
        }) : gapi.client.Request<FreeBusyResponse>;        
        
    }
    
    
    interface SettingsResource {
        // Returns a single user setting.
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
            // The id of the user setting.
            setting: string,
        }) : gapi.client.Request<Setting>;        
        
        // Returns all user settings for the authenticated user.
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
            // Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
            maxResults?: number,
            // Token specifying which result page to return. Optional.
            pageToken?: string,
            // Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.
            // If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
            // Learn more about incremental synchronization.
            // Optional. The default is to return all entries.
            syncToken?: string,
        }) : gapi.client.Request<Settings>;        
        
        // Watch for changes to Settings resources.
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
            // Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
            maxResults?: number,
            // Token specifying which result page to return. Optional.
            pageToken?: string,
            // Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.
            // If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
            // Learn more about incremental synchronization.
            // Optional. The default is to return all entries.
            syncToken?: string,
        }) : gapi.client.Request<Channel>;        
        
    }
    
}

declare module gapi.client.calendar {
    var acl: gapi.client.calendar.AclResource; 
    
    var calendarList: gapi.client.calendar.CalendarListResource; 
    
    var calendars: gapi.client.calendar.CalendarsResource; 
    
    var channels: gapi.client.calendar.ChannelsResource; 
    
    var colors: gapi.client.calendar.ColorsResource; 
    
    var events: gapi.client.calendar.EventsResource; 
    
    var freebusy: gapi.client.calendar.FreebusyResource; 
    
    var settings: gapi.client.calendar.SettingsResource; 
    
}
