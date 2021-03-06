// Type definitions for Google Google People API v1
// Project: https://developers.google.com/people/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.people {
    
    interface Occupation {
        // Metadata about the occupation.
        metadata?: FieldMetadata,
        // The occupation; for example, `carpenter`.
        value?: string,
    }
    
    interface ContactGroup {
        // The read-only name translated and formatted in the viewer's account locale
        // or the `Accept-Language` HTTP header locale for system groups names.
        // Group names set by the owner are the same as name.
        formattedName?: string,
        // The read-only contact group type.
        groupType?: string,
        // The list of contact person resource names that are members of the contact
        // group. The field is not populated for LIST requests and can only be updated
        // through the
        // [ModifyContactGroupMembers](/people/api/rest/v1/contactgroups/members/modify).
        memberResourceNames?: string[],        
        // The contact group name set by the group owner or a system provided name
        // for system groups.
        name?: string,
        // The total number of contacts in the group irrespective of max members in
        // specified in the request.
        memberCount?: number,
        // Metadata about the contact group.
        metadata?: ContactGroupMetadata,
        // The resource name for the contact group, assigned by the server. An ASCII
        // string, in the form of `contactGroups/`<var>contact_group_id</var>.
        resourceName?: string,
        // The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the
        // resource. Used for web cache validation.
        etag?: string,
    }
    
    interface Person {
        // The person's nicknames.
        nicknames?: Nickname[],        
        // The person's relations.
        relations?: Relation[],        
        // The person's names.
        names?: Name[],        
        // The person's occupations.
        occupations?: Occupation[],        
        // The person's email addresses.
        emailAddresses?: EmailAddress[],        
        // The person's past or current organizations.
        organizations?: Organization[],        
        // The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the
        // resource. Used for web cache validation.
        etag?: string,
        // The person's bragging rights.
        braggingRights?: BraggingRights[],        
        // Read-only metadata about the person.
        metadata?: PersonMetadata,
        // The person's residences.
        residences?: Residence[],        
        // The person's genders.
        genders?: Gender[],        
        // The person's interests.
        interests?: Interest[],        
        // The resource name for the person, assigned by the server. An ASCII string
        // with a max length of 27 characters, in the form of
        // `people/`<var>person_id</var>.
        resourceName?: string,
        // The person's biographies.
        biographies?: Biography[],        
        // The person's skills.
        skills?: Skill[],        
        // The person's read-only relationship statuses.
        relationshipStatuses?: RelationshipStatus[],        
        // The person's read-only photos.
        photos?: Photo[],        
        // **DEPRECATED** (Please use `person.ageRanges` instead)**
        // 
        // The person's read-only age range.
        ageRange?: string,
        // The person's read-only taglines.
        taglines?: Tagline[],        
        // The person's read-only age ranges.
        ageRanges?: AgeRangeType[],        
        // The person's street addresses.
        addresses?: Address[],        
        // The person's events.
        events?: Event[],        
        // The person's read-only group memberships.
        memberships?: Membership[],        
        // The person's phone numbers.
        phoneNumbers?: PhoneNumber[],        
        // The person's read-only cover photos.
        coverPhotos?: CoverPhoto[],        
        // The person's instant messaging clients.
        imClients?: ImClient[],        
        // The person's birthdays.
        birthdays?: Birthday[],        
        // The person's locale preferences.
        locales?: Locale[],        
        // The person's read-only relationship interests.
        relationshipInterests?: RelationshipInterest[],        
        // The person's associated URLs.
        urls?: Url[],        
    }
    
    interface UpdateContactGroupRequest {
        // The contact group to update.
        contactGroup?: ContactGroup,
    }
    
    interface ContactGroupMetadata {
        // True if the contact group resource has been deleted. Populated only for
        // [`ListContactGroups`](/people/api/rest/v1/contactgroups/list) requests
        // that include a sync token.
        deleted?: boolean,
        // The time the group was last updated.
        updateTime?: string,
    }
    
    interface Residence {
        // True if the residence is the person's current residence;
        // false if the residence is a past residence.
        current?: boolean,
        // Metadata about the residence.
        metadata?: FieldMetadata,
        // The address of the residence.
        value?: string,
    }
    
    interface Event {
        // The type of the event. The type can be custom or predefined.
        // Possible values include, but are not limited to, the following:
        // 
        // * `anniversary`
        // * `other`
        type?: string,
        // Metadata about the event.
        metadata?: FieldMetadata,
        // The date of the event.
        date?: Date,
        // The read-only type of the event translated and formatted in the
        // viewer's account locale or the `Accept-Language` HTTP header locale.
        formattedType?: string,
    }
    
    interface ModifyContactGroupMembersResponse {
        // The contact people resource names that were not found.
        notFoundResourceNames?: string[],        
    }
    
    interface ProfileMetadata {
        // The profile object type.
        objectType?: string,
        // The user types.
        userTypes?: string[],        
    }
    
    interface Gender {
        // The read-only value of the gender translated and formatted in the viewer's
        // account locale or the `Accept-Language` HTTP header locale.
        formattedValue?: string,
        // Metadata about the gender.
        metadata?: FieldMetadata,
        // The gender for the person. The gender can be custom or predefined.
        // Possible values include, but are not limited to, the
        // following:
        // 
        // * `male`
        // * `female`
        // * `other`
        // * `unknown`
        value?: string,
    }
    
    interface CoverPhoto {
        // True if the cover photo is the default cover photo;
        // false if the cover photo is a user-provided cover photo.
        default?: boolean,
        // Metadata about the cover photo.
        metadata?: FieldMetadata,
        // The URL of the cover photo.
        url?: string,
    }
    
    interface Interest {
        // Metadata about the interest.
        metadata?: FieldMetadata,
        // The interest; for example, `stargazing`.
        value?: string,
    }
    
    interface EmailAddress {
        // The display name of the email.
        displayName?: string,
        // The type of the email address. The type can be custom or predefined.
        // Possible values include, but are not limited to, the following:
        // 
        // * `home`
        // * `work`
        // * `other`
        type?: string,
        // Metadata about the email address.
        metadata?: FieldMetadata,
        // The email address.
        value?: string,
        // The read-only type of the email address translated and formatted in the
        // viewer's account locale or the `Accept-Language` HTTP header locale.
        formattedType?: string,
    }
    
    interface Nickname {
        // The type of the nickname.
        type?: string,
        // Metadata about the nickname.
        metadata?: FieldMetadata,
        // The nickname.
        value?: string,
    }
    
    interface Skill {
        // Metadata about the skill.
        metadata?: FieldMetadata,
        // The skill; for example, `underwater basket weaving`.
        value?: string,
    }
    
    interface Date {
        // Day of month. Must be from 1 to 31 and valid for the year and month, or 0
        // if specifying a year/month where the day is not significant.
        day?: number,
        // Year of date. Must be from 1 to 9999, or 0 if specifying a date without
        // a year.
        year?: number,
        // Month of year. Must be from 1 to 12.
        month?: number,
    }
    
    interface Tagline {
        // Metadata about the tagline.
        metadata?: FieldMetadata,
        // The tagline.
        value?: string,
    }
    
    interface Name {
        // The honorific prefixes, such as `Mrs.` or `Dr.`
        honorificPrefix?: string,
        // The honorific suffixes spelled as they sound.
        phoneticHonorificSuffix?: string,
        // The middle name(s).
        middleName?: string,
        // The given name.
        givenName?: string,
        // The honorific prefixes spelled as they sound.
        phoneticHonorificPrefix?: string,
        // The given name spelled as it sounds.
        phoneticGivenName?: string,
        // The family name spelled as it sounds.
        phoneticFamilyName?: string,
        // The family name.
        familyName?: string,
        // The middle name(s) spelled as they sound.
        phoneticMiddleName?: string,
        // Metadata about the name.
        metadata?: FieldMetadata,
        // The full name spelled as it sounds.
        phoneticFullName?: string,
        // The read-only display name with the last name first formatted according to
        // the locale specified by the viewer's account or the
        // `Accept-Language` HTTP header.
        displayNameLastFirst?: string,
        // The read-only display name formatted according to the locale specified by
        // the viewer's account or the `Accept-Language` HTTP header.
        displayName?: string,
        // The honorific suffixes, such as `Jr.`
        honorificSuffix?: string,
    }
    
    interface Locale {
        // Metadata about the locale.
        metadata?: FieldMetadata,
        // The well-formed [IETF BCP 47](https://tools.ietf.org/html/bcp47)
        // language tag representing the locale.
        value?: string,
    }
    
    interface Empty {
    }
    
    interface Biography {
        // Metadata about the biography.
        metadata?: FieldMetadata,
        // The short biography.
        value?: string,
        // The content type of the biography.
        contentType?: string,
    }
    
    interface FieldMetadata {
        // True if the field is verified; false if the field is unverified. A
        // verified field is typically a name, email address, phone number, or
        // website that has been confirmed to be owned by the person.
        verified?: boolean,
        // True if the field is the primary field; false if the field is a secondary
        // field.
        primary?: boolean,
        // The source of the field.
        source?: Source,
    }
    
    interface Source {
        // The source type.
        type?: string,
        // **Only populated in `person.metadata.sources`.**
        // 
        // The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the
        // source. Used for web cache validation.
        etag?: string,
        // The unique identifier within the source type generated by the server.
        id?: string,
        // **Only populated in `person.metadata.sources`.**
        // 
        // Metadata about a source of type PROFILE.
        profileMetadata?: ProfileMetadata,
        // **Only populated in `person.metadata.sources`.**
        // 
        // Last update timestamp of this source.
        updateTime?: string,
    }
    
    interface RelationshipInterest {
        // The value of the relationship interest translated and formatted in the
        // viewer's account locale or the locale specified in the Accept-Language
        // HTTP header.
        formattedValue?: string,
        // Metadata about the relationship interest.
        metadata?: FieldMetadata,
        // The kind of relationship the person is looking for. The value can be custom
        // or predefined. Possible values include, but are not limited to, the
        // following values:
        // 
        // * `friend`
        // * `date`
        // * `relationship`
        // * `networking`
        value?: string,
    }
    
    interface GetPeopleResponse {
        // The response for each requested resource name.
        responses?: PersonResponse[],        
    }
    
    interface Photo {
        // Metadata about the photo.
        metadata?: FieldMetadata,
        // The URL of the photo. You can change the desired size by appending a query
        // parameter `sz=`<var>size</var> at the end of the url. Example:
        // `https://lh3.googleusercontent.com/-T_wVWLlmg7w/AAAAAAAAAAI/AAAAAAAABa8/00gzXvDBYqw/s100/photo.jpg?sz=50`
        url?: string,
    }
    
    interface PhoneNumber {
        // The read-only type of the phone number translated and formatted in the
        // viewer's account locale or the `Accept-Language` HTTP header locale.
        formattedType?: string,
        // The read-only canonicalized [ITU-T E.164](https://law.resource.org/pub/us/cfr/ibr/004/itu-t.E.164.1.2008.pdf)
        // form of the phone number.
        canonicalForm?: string,
        // The type of the phone number. The type can be custom or predefined.
        // Possible values include, but are not limited to, the following:
        // 
        // * `home`
        // * `work`
        // * `mobile`
        // * `homeFax`
        // * `workFax`
        // * `otherFax`
        // * `pager`
        // * `workMobile`
        // * `workPager`
        // * `main`
        // * `googleVoice`
        // * `other`
        type?: string,
        // Metadata about the phone number.
        metadata?: FieldMetadata,
        // The phone number.
        value?: string,
    }
    
    interface ListConnectionsResponse {
        // **DEPRECATED** (Please use totalItems)
        // The total number of people in the list without pagination.
        totalPeople?: number,
        // The token that can be used to retrieve the next page of results.
        nextPageToken?: string,
        // The total number of items in the list without pagination.
        totalItems?: number,
        // The token that can be used to retrieve changes since the last request.
        nextSyncToken?: string,
        // The list of people that the requestor is connected to.
        connections?: Person[],        
    }
    
    interface Birthday {
        // A free-form string representing the user's birthday.
        text?: string,
        // Metadata about the birthday.
        metadata?: FieldMetadata,
        // The date of the birthday.
        date?: Date,
    }
    
    interface CreateContactGroupRequest {
        // The contact group to create.
        contactGroup?: ContactGroup,
    }
    
    interface Address {
        // The extended address of the address; for example, the apartment number.
        extendedAddress?: string,
        // The P.O. box of the address.
        poBox?: string,
        // The postal code of the address.
        postalCode?: string,
        // The region of the address; for example, the state or province.
        region?: string,
        // The street address.
        streetAddress?: string,
        // Metadata about the address.
        metadata?: FieldMetadata,
        // The [ISO 3166-1 alpha-2](http://www.iso.org/iso/country_codes.htm) country
        // code of the address.
        countryCode?: string,
        // The read-only type of the address translated and formatted in the viewer's
        // account locale or the `Accept-Language` HTTP header locale.
        formattedType?: string,
        // The city of the address.
        city?: string,
        // The unstructured value of the address. If this is not set by the user it
        // will be automatically constructed from structured values.
        formattedValue?: string,
        // The country of the address.
        country?: string,
        // The type of the address. The type can be custom or predefined.
        // Possible values include, but are not limited to, the following:
        // 
        // * `home`
        // * `work`
        // * `other`
        type?: string,
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
    
    interface ContactGroupMembership {
        // The contact group ID for the contact group membership. The contact group
        // ID can be custom or predefined. Possible values include, but are not
        // limited to, the following:
        // 
        // *  `myContacts`
        // *  `starred`
        // *  A numerical ID for user-created groups.
        contactGroupId?: string,
    }
    
    interface PersonMetadata {
        // Any former resource names this person has had. Populated only for
        // [`connections.list`](/people/api/rest/v1/people.connections/list) requests
        // that include a sync token.
        // 
        // The resource name may change when adding or removing fields that link a
        // contact and profile such as a verified email, verified phone number, or
        // profile URL.
        previousResourceNames?: string[],        
        // The sources of data for the person.
        sources?: Source[],        
        // True if the person resource has been deleted. Populated only for
        // [`connections.list`](/people/api/rest/v1/people.connections/list) requests
        // that include a sync token.
        deleted?: boolean,
        // **DEPRECATED** (Please use
        // `person.metadata.sources.profileMetadata.objectType` instead)
        // 
        // The type of the person object.
        objectType?: string,
        // Resource names of people linked to this resource.
        linkedPeopleResourceNames?: string[],        
    }
    
    interface ModifyContactGroupMembersRequest {
        // The resource names of the contact people to add in the form of in the form
        // `people/`<var>person_id</var>.
        resourceNamesToAdd?: string[],        
        // The resource names of the contact people to remove in the form of in the
        // form of `people/`<var>person_id</var>.
        resourceNamesToRemove?: string[],        
    }
    
    interface ContactGroupResponse {
        // The status of the response.
        status?: Status,
        // The original requested resource name.
        requestedResourceName?: string,
        // The contact group.
        contactGroup?: ContactGroup,
    }
    
    interface Url {
        // The read-only type of the URL translated and formatted in the viewer's
        // account locale or the `Accept-Language` HTTP header locale.
        formattedType?: string,
        // The type of the URL. The type can be custom or predefined.
        // Possible values include, but are not limited to, the following:
        // 
        // * `home`
        // * `work`
        // * `blog`
        // * `profile`
        // * `homePage`
        // * `ftp`
        // * `reservations`
        // * `appInstallPage`: website for a Google+ application.
        // * `other`
        type?: string,
        // Metadata about the URL.
        metadata?: FieldMetadata,
        // The URL.
        value?: string,
    }
    
    interface ImClient {
        // The read-only protocol of the IM client formatted in the viewer's account
        // locale or the `Accept-Language` HTTP header locale.
        formattedProtocol?: string,
        // The read-only type of the IM client translated and formatted in the
        // viewer's account locale or the `Accept-Language` HTTP header locale.
        formattedType?: string,
        // The protocol of the IM client. The protocol can be custom or predefined.
        // Possible values include, but are not limited to, the following:
        // 
        // * `aim`
        // * `msn`
        // * `yahoo`
        // * `skype`
        // * `qq`
        // * `googleTalk`
        // * `icq`
        // * `jabber`
        // * `netMeeting`
        protocol?: string,
        // Metadata about the IM client.
        metadata?: FieldMetadata,
        // The type of the IM client. The type can be custom or predefined.
        // Possible values include, but are not limited to, the following:
        // 
        // * `home`
        // * `work`
        // * `other`
        type?: string,
        // The user name used in the IM client.
        username?: string,
    }
    
    interface DomainMembership {
        // True if the person is in the viewer's Google Apps domain.
        inViewerDomain?: boolean,
    }
    
    interface Membership {
        // Metadata about the membership.
        metadata?: FieldMetadata,
        // The domain membership.
        domainMembership?: DomainMembership,
        // The contact group membership.
        contactGroupMembership?: ContactGroupMembership,
    }
    
    interface BatchGetContactGroupsResponse {
        // The list of responses for each requested contact group resource.
        responses?: ContactGroupResponse[],        
    }
    
    interface RelationshipStatus {
        // Metadata about the relationship status.
        metadata?: FieldMetadata,
        // The relationship status. The value can be custom or predefined.
        // Possible values include, but are not limited to, the following:
        // 
        // * `single`
        // * `inARelationship`
        // * `engaged`
        // * `married`
        // * `itsComplicated`
        // * `openRelationship`
        // * `widowed`
        // * `inDomesticPartnership`
        // * `inCivilUnion`
        value?: string,
        // The read-only value of the relationship status translated and formatted in
        // the viewer's account locale or the `Accept-Language` HTTP header locale.
        formattedValue?: string,
    }
    
    interface BraggingRights {
        // Metadata about the bragging rights.
        metadata?: FieldMetadata,
        // The bragging rights; for example, `climbed mount everest`.
        value?: string,
    }
    
    interface Organization {
        // Metadata about the organization.
        metadata?: FieldMetadata,
        // The location of the organization office the person works at.
        location?: string,
        // The person's job title at the organization.
        title?: string,
        // True if the organization is the person's current organization;
        // false if the organization is a past organization.
        current?: boolean,
        // The read-only type of the organization translated and formatted in the
        // viewer's account locale or the `Accept-Language` HTTP header locale.
        formattedType?: string,
        // The start date when the person joined the organization.
        startDate?: Date,
        // The domain name associated with the organization; for example, `google.com`.
        domain?: string,
        // The person's department at the organization.
        department?: string,
        // The phonetic name of the organization.
        phoneticName?: string,
        // The type of the organization. The type can be custom or predefined.
        // Possible values include, but are not limited to, the following:
        // 
        // * `work`
        // * `school`
        type?: string,
        // The person's job description at the organization.
        jobDescription?: string,
        // The end date when the person left the organization.
        endDate?: Date,
        // The symbol associated with the organization; for example, a stock ticker
        // symbol, abbreviation, or acronym.
        symbol?: string,
        // The name of the organization.
        name?: string,
    }
    
    interface AgeRangeType {
        // The age range.
        ageRange?: string,
        // Metadata about the age range.
        metadata?: FieldMetadata,
    }
    
    interface ListContactGroupsResponse {
        // The list of contact groups. Members of the contact groups are not
        // populated.
        contactGroups?: ContactGroup[],        
        // The token that can be used to retrieve the next page of results.
        nextPageToken?: string,
        // The token that can be used to retrieve changes since the last request.
        nextSyncToken?: string,
        // The total number of items in the list without pagination.
        totalItems?: number,
    }
    
    interface PersonResponse {
        // The person.
        person?: Person,
        // The status of the response.
        status?: Status,
        // **DEPRECATED** (Please use status instead)
        // 
        // [HTTP 1.1 status code]
        // (http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).
        httpStatusCode?: number,
        // The original requested resource name. May be different than the resource
        // name on the returned person.
        // 
        // The resource name can change when adding or removing fields that link a
        // contact and profile such as a verified email, verified phone number, or a
        // profile URL.
        requestedResourceName?: string,
    }
    
    interface Relation {
        // The type of the relation translated and formatted in the viewer's account
        // locale or the locale specified in the Accept-Language HTTP header.
        formattedType?: string,
        // The name of the other person this relation refers to.
        person?: string,
        // The person's relation to the other person. The type can be custom or predefined.
        // Possible values include, but are not limited to, the following values:
        // 
        // * `spouse`
        // * `child`
        // * `mother`
        // * `father`
        // * `parent`
        // * `brother`
        // * `sister`
        // * `friend`
        // * `relative`
        // * `domesticPartner`
        // * `manager`
        // * `assistant`
        // * `referredBy`
        // * `partner`
        type?: string,
        // Metadata about the relation.
        metadata?: FieldMetadata,
    }
    
    interface MembersResource {
        // Modify the members of a contact group owned by the authenticated user.
        modify (request: {        
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
            // The resource name of the contact group to modify.
            resourceName: string,
        }) : gapi.client.Request<ModifyContactGroupMembersResponse>;        
        
    }
    
    
    interface ContactGroupsResource {
        // List all contact groups owned by the authenticated user. Members of the
        // contact groups are not populated.
        list (request: {        
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
            // A sync token, returned by a previous call to `contactgroups.list`.
            // Only resources changed since the sync token was created will be returned.
            syncToken?: string,
            // The next_page_token value returned from a previous call to
            // [ListContactGroups](/people/api/rest/v1/contactgroups/list).
            // Requests the next page of resources.
            pageToken?: string,
            // The maximum number of resources to return.
            pageSize?: number,
        }) : gapi.client.Request<ListContactGroupsResponse>;        
        
        // Create a new contact group owned by the authenticated user.
        create (request: {        
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
        }) : gapi.client.Request<ContactGroup>;        
        
        // Get a specific contact group owned by the authenticated user by specifying
        // a contact group resource name.
        get (request: {        
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
            // Specifies the maximum number of members to return.
            maxMembers?: number,
            // The resource name of the contact group to get.
            resourceName: string,
        }) : gapi.client.Request<ContactGroup>;        
        
        // Update the name of an existing contact group owned by the authenticated
        // user.
        update (request: {        
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
            // The resource name for the contact group, assigned by the server. An ASCII
            // string, in the form of `contactGroups/`<var>contact_group_id</var>.
            resourceName: string,
        }) : gapi.client.Request<ContactGroup>;        
        
        // Get a list of contact groups owned by the authenticated user by specifying
        // a list of contact group resource names.
        batchGet (request: {        
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
            // Specifies the maximum number of members to return for each group.
            maxMembers?: number,
            // The resource names of the contact groups to get.
            resourceNames?: string,
        }) : gapi.client.Request<BatchGetContactGroupsResponse>;        
        
        // Delete an existing contact group owned by the authenticated user by
        // specifying a contact group resource name.
        delete (request: {        
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
            // The resource name of the contact group to delete.
            resourceName: string,
            // Set to true to also delete the contacts in the specified group.
            deleteContacts?: boolean,
        }) : gapi.client.Request<Empty>;        
        
        members: MembersResource,
    }
    
    
    interface ConnectionsResource {
        // Provides a list of the authenticated user's contacts merged with any
        // connected profiles.
        // <br>
        // The request throws a 400 error if 'personFields' is not specified.
        list (request: {        
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
            // The number of connections to include in the response. Valid values are
            // between 1 and 2000, inclusive. Defaults to 100.
            pageSize?: number,
            // **Required.** Comma-separated list of person fields to be included in the
            // response. Each path should start with `person.`: for example,
            // `person.names` or `person.photos`.
            requestMask.includeField?: string,
            // A sync token, returned by a previous call to `people.connections.list`.
            // Only resources changed since the sync token was created will be returned.
            syncToken?: string,
            // **Required.** A field mask to restrict which fields on each person are
            // returned. Valid values are:
            // 
            // * addresses
            // * ageRanges
            // * biographies
            // * birthdays
            // * braggingRights
            // * coverPhotos
            // * emailAddresses
            // * events
            // * genders
            // * imClients
            // * interests
            // * locales
            // * memberships
            // * metadata
            // * names
            // * nicknames
            // * occupations
            // * organizations
            // * phoneNumbers
            // * photos
            // * relations
            // * relationshipInterests
            // * relationshipStatuses
            // * residences
            // * skills
            // * taglines
            // * urls
            personFields?: string,
            // The order in which the connections should be sorted. Defaults to
            // `LAST_MODIFIED_ASCENDING`.
            sortOrder?: string,
            // Whether the response should include a sync token, which can be used to get
            // all changes since the last request.
            requestSyncToken?: boolean,
            // The token of the page to be returned.
            pageToken?: string,
            // The resource name to return connections for. Only `people/me` is valid.
            resourceName: string,
        }) : gapi.client.Request<ListConnectionsResponse>;        
        
    }
    
    
    interface PeopleResource {
        // Provides information about a list of specific people by specifying a list
        // of requested resource names. Use `people/me` to indicate the authenticated
        // user.
        // <br>
        // The request throws a 400 error if 'personFields' is not specified.
        getBatchGet (request: {        
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
            // **Required.** Comma-separated list of person fields to be included in the
            // response. Each path should start with `person.`: for example,
            // `person.names` or `person.photos`.
            requestMask.includeField?: string,
            // The resource names of the people to provide information about.
            // 
            // - To get information about the authenticated user, specify `people/me`.
            // - To get information about a google account, specify
            //   `people/`<var>account_id</var>.
            // - To get information about a contact, specify the resource name that
            //   identifies the contact as returned by
            // [`people.connections.list`](/people/api/rest/v1/people.connections/list).
            // 
            // You can include up to 50 resource names in one request.
            resourceNames?: string,
            // **Required.** A field mask to restrict which fields on each person are
            // returned. Valid values are:
            // 
            // * addresses
            // * ageRanges
            // * biographies
            // * birthdays
            // * braggingRights
            // * coverPhotos
            // * emailAddresses
            // * events
            // * genders
            // * imClients
            // * interests
            // * locales
            // * memberships
            // * metadata
            // * names
            // * nicknames
            // * occupations
            // * organizations
            // * phoneNumbers
            // * photos
            // * relations
            // * relationshipInterests
            // * relationshipStatuses
            // * residences
            // * skills
            // * taglines
            // * urls
            personFields?: string,
        }) : gapi.client.Request<GetPeopleResponse>;        
        
        // Provides information about a person by specifying a resource name. Use
        // `people/me` to indicate the authenticated user.
        // <br>
        // The request throws a 400 error if 'personFields' is not specified.
        get (request: {        
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
            // **Required.** A field mask to restrict which fields on the person are
            // returned. Valid values are:
            // 
            // * addresses
            // * ageRanges
            // * biographies
            // * birthdays
            // * braggingRights
            // * coverPhotos
            // * emailAddresses
            // * events
            // * genders
            // * imClients
            // * interests
            // * locales
            // * memberships
            // * metadata
            // * names
            // * nicknames
            // * occupations
            // * organizations
            // * phoneNumbers
            // * photos
            // * relations
            // * relationshipInterests
            // * relationshipStatuses
            // * residences
            // * skills
            // * taglines
            // * urls
            personFields?: string,
            // The resource name of the person to provide information about.
            // 
            // - To get information about the authenticated user, specify `people/me`.
            // - To get information about a google account, specify
            //  `people/`<var>account_id</var>.
            // - To get information about a contact, specify the resource name that
            //   identifies the contact as returned by
            // [`people.connections.list`](/people/api/rest/v1/people.connections/list).
            resourceName: string,
            // **Required.** Comma-separated list of person fields to be included in the
            // response. Each path should start with `person.`: for example,
            // `person.names` or `person.photos`.
            requestMask.includeField?: string,
        }) : gapi.client.Request<Person>;        
        
        // Update contact data for an existing contact person. Any non-contact data
        // will not be modified.
        // 
        // The request throws a 400 error if `updatePersonFields` is not specified.
        // <br>
        // The request throws a 400 error if `person.metadata.sources` is not
        // specified for the contact to be updated.
        // <br>
        // The request throws a 412 error if `person.metadata.sources.etag` is
        // different than the contact's etag, which indicates the contact has changed
        // since its data was read. Clients should get the latest person and re-apply
        // their updates to the latest person.
        updateContact (request: {        
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
            // The resource name for the person, assigned by the server. An ASCII string
            // with a max length of 27 characters, in the form of
            // `people/`<var>person_id</var>.
            resourceName: string,
            // **Required.** A field mask to restrict which fields on the person are
            // updated. Valid values are:
            // 
            // * addresses
            // * biographies
            // * birthdays
            // * braggingRights
            // * emailAddresses
            // * events
            // * genders
            // * imClients
            // * interests
            // * locales
            // * names
            // * nicknames
            // * occupations
            // * organizations
            // * phoneNumbers
            // * relations
            // * residences
            // * skills
            // * urls
            updatePersonFields?: string,
        }) : gapi.client.Request<Person>;        
        
        // Create a new contact and return the person resource for that contact.
        createContact (request: {        
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
            // The resource name of the owning person resource.
            parent?: string,
        }) : gapi.client.Request<Person>;        
        
        // Delete a contact person. Any non-contact data will not be deleted.
        deleteContact (request: {        
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
            // The resource name of the contact to delete.
            resourceName: string,
        }) : gapi.client.Request<Empty>;        
        
        connections: ConnectionsResource,
    }
    
}

declare module gapi.client.people {
    var contactGroups: gapi.client.people.ContactGroupsResource; 
    
    var people: gapi.client.people.PeopleResource; 
    
}
