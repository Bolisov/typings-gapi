// Type definitions for Google Google+ API v1
// Project: https://developers.google.com/+/api/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.plus {
    
    interface Acl {
        // Description of the access granted, suitable for display.
        description?: string,
        // The list of access entries.
        items?: PlusAclentryResource[],        
        // Identifies this resource as a collection of access controls. Value: "plus#acl".
        kind?: string,
    }
    
    interface Activity {
        // Identifies who has access to see this activity.
        access?: Acl,
        // The person who performed this activity.
        actor?: {        
            // Actor info specific to particular clients.
            clientSpecificActorInfo?: {            
                // Actor info specific to YouTube clients.
                youtubeActorInfo?: {                
                    // ID of the YouTube channel owned by the Actor.
                    channelId?: string,
                },                
            },            
            // The name of the actor, suitable for display.
            displayName?: string,
            // The ID of the actor's Person resource.
            id?: string,
            // The image representation of the actor.
            image?: {            
                // The URL of the actor's profile photo. To resize the image and crop it to a square, append the query string ?sz=x, where x is the dimension in pixels of each side.
                url?: string,
            },            
            // An object representation of the individual components of name.
            name?: {            
                // The family name ("last name") of the actor.
                familyName?: string,
                // The given name ("first name") of the actor.
                givenName?: string,
            },            
            // The link to the actor's Google profile.
            url?: string,
            // Verification status of actor.
            verification?: {            
                // Verification for one-time or manual processes.
                adHocVerified?: string,
            },            
        },        
        // Street address where this activity occurred.
        address?: string,
        // Additional content added by the person who shared this activity, applicable only when resharing an activity.
        annotation?: string,
        // If this activity is a crosspost from another system, this property specifies the ID of the original activity.
        crosspostSource?: string,
        // ETag of this response for caching purposes.
        etag?: string,
        // Latitude and longitude where this activity occurred. Format is latitude followed by longitude, space separated.
        geocode?: string,
        // The ID of this activity.
        id?: string,
        // Identifies this resource as an activity. Value: "plus#activity".
        kind?: string,
        // The location where this activity occurred.
        location?: Place,
        // The object of this activity.
        object?: {        
            // If this activity's object is itself another activity, such as when a person reshares an activity, this property specifies the original activity's actor.
            actor?: {            
                // Actor info specific to particular clients.
                clientSpecificActorInfo?: {                
                    // Actor info specific to YouTube clients.
                    youtubeActorInfo?: {                    
                        // ID of the YouTube channel owned by the Actor.
                        channelId?: string,
                    },                    
                },                
                // The original actor's name, which is suitable for display.
                displayName?: string,
                // ID of the original actor.
                id?: string,
                // The image representation of the original actor.
                image?: {                
                    // A URL that points to a thumbnail photo of the original actor.
                    url?: string,
                },                
                // A link to the original actor's Google profile.
                url?: string,
                // Verification status of actor.
                verification?: {                
                    // Verification for one-time or manual processes.
                    adHocVerified?: string,
                },                
            },            
            // The media objects attached to this activity.
            attachments?: {            
                // If the attachment is an article, this property contains a snippet of text from the article. It can also include descriptions for other types.
                content?: string,
                // The title of the attachment, such as a photo caption or an article title.
                displayName?: string,
                // If the attachment is a video, the embeddable link.
                embed?: {                
                    // Media type of the link.
                    type?: string,
                    // URL of the link.
                    url?: string,
                },                
                // The full image URL for photo attachments.
                fullImage?: {                
                    // The height, in pixels, of the linked resource.
                    height?: number,
                    // Media type of the link.
                    type?: string,
                    // URL of the image.
                    url?: string,
                    // The width, in pixels, of the linked resource.
                    width?: number,
                },                
                // The ID of the attachment.
                id?: string,
                // The preview image for photos or videos.
                image?: {                
                    // The height, in pixels, of the linked resource.
                    height?: number,
                    // Media type of the link.
                    type?: string,
                    // Image URL.
                    url?: string,
                    // The width, in pixels, of the linked resource.
                    width?: number,
                },                
                // The type of media object. Possible values include, but are not limited to, the following values:  
                // - "photo" - A photo. 
                // - "album" - A photo album. 
                // - "video" - A video. 
                // - "article" - An article, specified by a link.
                objectType?: string,
                // If the attachment is an album, this property is a list of potential additional thumbnails from the album.
                thumbnails?: {                
                    // Potential name of the thumbnail.
                    description?: string,
                    // Image resource.
                    image?: {                    
                        // The height, in pixels, of the linked resource.
                        height?: number,
                        // Media type of the link.
                        type?: string,
                        // Image url.
                        url?: string,
                        // The width, in pixels, of the linked resource.
                        width?: number,
                    },                    
                    // URL of the webpage containing the image.
                    url?: string,
                }[],                
                // The link to the attachment, which should be of type text/html.
                url?: string,
            }[],            
            // The HTML-formatted content, which is suitable for display.
            content?: string,
            // The ID of the object. When resharing an activity, this is the ID of the activity that is being reshared.
            id?: string,
            // The type of the object. Possible values include, but are not limited to, the following values:  
            // - "note" - Textual content. 
            // - "activity" - A Google+ activity.
            objectType?: string,
            // The content (text) as provided by the author, which is stored without any HTML formatting. When creating or updating an activity, this value must be supplied as plain text in the request.
            originalContent?: string,
            // People who +1'd this activity.
            plusoners?: {            
                // The URL for the collection of people who +1'd this activity.
                selfLink?: string,
                // Total number of people who +1'd this activity.
                totalItems?: number,
            },            
            // Comments in reply to this activity.
            replies?: {            
                // The URL for the collection of comments in reply to this activity.
                selfLink?: string,
                // Total number of comments on this activity.
                totalItems?: number,
            },            
            // People who reshared this activity.
            resharers?: {            
                // The URL for the collection of resharers.
                selfLink?: string,
                // Total number of people who reshared this activity.
                totalItems?: number,
            },            
            // The URL that points to the linked resource.
            url?: string,
        },        
        // ID of the place where this activity occurred.
        placeId?: string,
        // Name of the place where this activity occurred.
        placeName?: string,
        // The service provider that initially published this activity.
        provider?: {        
            // Name of the service provider.
            title?: string,
        },        
        // The time at which this activity was initially published. Formatted as an RFC 3339 timestamp.
        published?: string,
        // Radius, in meters, of the region where this activity occurred, centered at the latitude and longitude identified in geocode.
        radius?: string,
        // Title of this activity.
        title?: string,
        // The time at which this activity was last updated. Formatted as an RFC 3339 timestamp.
        updated?: string,
        // The link to this activity.
        url?: string,
        // This activity's verb, which indicates the action that was performed. Possible values include, but are not limited to, the following values:  
        // - "post" - Publish content to the stream. 
        // - "share" - Reshare an activity.
        verb?: string,
    }
    
    interface ActivityFeed {
        // ETag of this response for caching purposes.
        etag?: string,
        // The ID of this collection of activities. Deprecated.
        id?: string,
        // The activities in this page of results.
        items?: Activity[],        
        // Identifies this resource as a collection of activities. Value: "plus#activityFeed".
        kind?: string,
        // Link to the next page of activities.
        nextLink?: string,
        // The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
        nextPageToken?: string,
        // Link to this activity resource.
        selfLink?: string,
        // The title of this collection of activities, which is a truncated portion of the content.
        title?: string,
        // The time at which this collection of activities was last updated. Formatted as an RFC 3339 timestamp.
        updated?: string,
    }
    
    interface Comment {
        // The person who posted this comment.
        actor?: {        
            // Actor info specific to particular clients.
            clientSpecificActorInfo?: {            
                // Actor info specific to YouTube clients.
                youtubeActorInfo?: {                
                    // ID of the YouTube channel owned by the Actor.
                    channelId?: string,
                },                
            },            
            // The name of this actor, suitable for display.
            displayName?: string,
            // The ID of the actor.
            id?: string,
            // The image representation of this actor.
            image?: {            
                // The URL of the actor's profile photo. To resize the image and crop it to a square, append the query string ?sz=x, where x is the dimension in pixels of each side.
                url?: string,
            },            
            // A link to the Person resource for this actor.
            url?: string,
            // Verification status of actor.
            verification?: {            
                // Verification for one-time or manual processes.
                adHocVerified?: string,
            },            
        },        
        // ETag of this response for caching purposes.
        etag?: string,
        // The ID of this comment.
        id?: string,
        // The activity this comment replied to.
        inReplyTo?: {        
            // The ID of the activity.
            id?: string,
            // The URL of the activity.
            url?: string,
        }[],        
        // Identifies this resource as a comment. Value: "plus#comment".
        kind?: string,
        // The object of this comment.
        object?: {        
            // The HTML-formatted content, suitable for display.
            content?: string,
            // The object type of this comment. Possible values are:  
            // - "comment" - A comment in reply to an activity.
            objectType?: string,
            // The content (text) as provided by the author, stored without any HTML formatting. When creating or updating a comment, this value must be supplied as plain text in the request.
            originalContent?: string,
        },        
        // People who +1'd this comment.
        plusoners?: {        
            // Total number of people who +1'd this comment.
            totalItems?: number,
        },        
        // The time at which this comment was initially published. Formatted as an RFC 3339 timestamp.
        published?: string,
        // Link to this comment resource.
        selfLink?: string,
        // The time at which this comment was last updated. Formatted as an RFC 3339 timestamp.
        updated?: string,
        // This comment's verb, indicating what action was performed. Possible values are:  
        // - "post" - Publish content to the stream.
        verb?: string,
    }
    
    interface CommentFeed {
        // ETag of this response for caching purposes.
        etag?: string,
        // The ID of this collection of comments.
        id?: string,
        // The comments in this page of results.
        items?: Comment[],        
        // Identifies this resource as a collection of comments. Value: "plus#commentFeed".
        kind?: string,
        // Link to the next page of activities.
        nextLink?: string,
        // The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
        nextPageToken?: string,
        // The title of this collection of comments.
        title?: string,
        // The time at which this collection of comments was last updated. Formatted as an RFC 3339 timestamp.
        updated?: string,
    }
    
    interface PeopleFeed {
        // ETag of this response for caching purposes.
        etag?: string,
        // The people in this page of results. Each item includes the id, displayName, image, and url for the person. To retrieve additional profile data, see the people.get method.
        items?: Person[],        
        // Identifies this resource as a collection of people. Value: "plus#peopleFeed".
        kind?: string,
        // The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
        nextPageToken?: string,
        // Link to this resource.
        selfLink?: string,
        // The title of this collection of people.
        title?: string,
        // The total number of people available in this list. The number of people in a response might be smaller due to paging. This might not be set for all collections.
        totalItems?: number,
    }
    
    interface Person {
        // A short biography for this person.
        aboutMe?: string,
        // The age range of the person. Valid ranges are 17 or younger, 18 to 20, and 21 or older. Age is determined from the user's birthday using Western age reckoning.
        ageRange?: {        
            // The age range's upper bound, if any. Possible values include, but are not limited to, the following:  
            // - "17" - for age 17 
            // - "20" - for age 20
            max?: number,
            // The age range's lower bound, if any. Possible values include, but are not limited to, the following:  
            // - "21" - for age 21 
            // - "18" - for age 18
            min?: number,
        },        
        // The person's date of birth, represented as YYYY-MM-DD.
        birthday?: string,
        // The "bragging rights" line of this person.
        braggingRights?: string,
        // For followers who are visible, the number of people who have added this person or page to a circle.
        circledByCount?: number,
        // The cover photo content.
        cover?: {        
            // Extra information about the cover photo.
            coverInfo?: {            
                // The difference between the left position of the cover image and the actual displayed cover image. Only valid for banner layout.
                leftImageOffset?: number,
                // The difference between the top position of the cover image and the actual displayed cover image. Only valid for banner layout.
                topImageOffset?: number,
            },            
            // The person's primary cover image.
            coverPhoto?: {            
                // The height of the image.
                height?: number,
                // The URL of the image.
                url?: string,
                // The width of the image.
                width?: number,
            },            
            // The layout of the cover art. Possible values include, but are not limited to, the following values:  
            // - "banner" - One large image banner.
            layout?: string,
        },        
        // (this field is not currently used)
        currentLocation?: string,
        // The name of this person, which is suitable for display.
        displayName?: string,
        // The hosted domain name for the user's Google Apps account. For instance, example.com. The plus.profile.emails.read or email scope is needed to get this domain name.
        domain?: string,
        // A list of email addresses that this person has, including their Google account email address, and the public verified email addresses on their Google+ profile. The plus.profile.emails.read scope is needed to retrieve these email addresses, or the email scope can be used to retrieve just the Google account email address.
        emails?: {        
            // The type of address. Possible values include, but are not limited to, the following values:  
            // - "account" - Google account email address. 
            // - "home" - Home email address. 
            // - "work" - Work email address. 
            // - "other" - Other.
            type?: string,
            // The email address.
            value?: string,
        }[],        
        // ETag of this response for caching purposes.
        etag?: string,
        // The person's gender. Possible values include, but are not limited to, the following values:  
        // - "male" - Male gender. 
        // - "female" - Female gender. 
        // - "other" - Other.
        gender?: string,
        // The ID of this person.
        id?: string,
        // The representation of the person's profile photo.
        image?: {        
            // Whether the person's profile photo is the default one
            isDefault?: boolean,
            // The URL of the person's profile photo. To resize the image and crop it to a square, append the query string ?sz=x, where x is the dimension in pixels of each side.
            url?: string,
        },        
        // Whether this user has signed up for Google+.
        isPlusUser?: boolean,
        // Identifies this resource as a person. Value: "plus#person".
        kind?: string,
        // The user's preferred language for rendering.
        language?: string,
        // An object representation of the individual components of a person's name.
        name?: {        
            // The family name (last name) of this person.
            familyName?: string,
            // The full name of this person, including middle names, suffixes, etc.
            formatted?: string,
            // The given name (first name) of this person.
            givenName?: string,
            // The honorific prefixes (such as "Dr." or "Mrs.") for this person.
            honorificPrefix?: string,
            // The honorific suffixes (such as "Jr.") for this person.
            honorificSuffix?: string,
            // The middle name of this person.
            middleName?: string,
        },        
        // The nickname of this person.
        nickname?: string,
        // Type of person within Google+. Possible values include, but are not limited to, the following values:  
        // - "person" - represents an actual person. 
        // - "page" - represents a page.
        objectType?: string,
        // The occupation of this person.
        occupation?: string,
        // A list of current or past organizations with which this person is associated.
        organizations?: {        
            // The department within the organization. Deprecated.
            department?: string,
            // A short description of the person's role in this organization. Deprecated.
            description?: string,
            // The date that the person left this organization.
            endDate?: string,
            // The location of this organization. Deprecated.
            location?: string,
            // The name of the organization.
            name?: string,
            // If "true", indicates this organization is the person's primary one, which is typically interpreted as the current one.
            primary?: boolean,
            // The date that the person joined this organization.
            startDate?: string,
            // The person's job title or role within the organization.
            title?: string,
            // The type of organization. Possible values include, but are not limited to, the following values:  
            // - "work" - Work. 
            // - "school" - School.
            type?: string,
        }[],        
        // A list of places where this person has lived.
        placesLived?: {        
            // If "true", this place of residence is this person's primary residence.
            primary?: boolean,
            // A place where this person has lived. For example: "Seattle, WA", "Near Toronto".
            value?: string,
        }[],        
        // If a Google+ Page, the number of people who have +1'd this page.
        plusOneCount?: number,
        // The person's relationship status. Possible values include, but are not limited to, the following values:  
        // - "single" - Person is single. 
        // - "in_a_relationship" - Person is in a relationship. 
        // - "engaged" - Person is engaged. 
        // - "married" - Person is married. 
        // - "its_complicated" - The relationship is complicated. 
        // - "open_relationship" - Person is in an open relationship. 
        // - "widowed" - Person is widowed. 
        // - "in_domestic_partnership" - Person is in a domestic partnership. 
        // - "in_civil_union" - Person is in a civil union.
        relationshipStatus?: string,
        // The person's skills.
        skills?: string,
        // The brief description (tagline) of this person.
        tagline?: string,
        // The URL of this person's profile.
        url?: string,
        // A list of URLs for this person.
        urls?: {        
            // The label of the URL.
            label?: string,
            // The type of URL. Possible values include, but are not limited to, the following values:  
            // - "otherProfile" - URL for another profile. 
            // - "contributor" - URL to a site for which this person is a contributor. 
            // - "website" - URL for this Google+ Page's primary website. 
            // - "other" - Other URL.
            type?: string,
            // The URL value.
            value?: string,
        }[],        
        // Whether the person or Google+ Page has been verified.
        verified?: boolean,
    }
    
    interface Place {
        // The physical address of the place.
        address?: {        
            // The formatted address for display.
            formatted?: string,
        },        
        // The display name of the place.
        displayName?: string,
        // The id of the place.
        id?: string,
        // Identifies this resource as a place. Value: "plus#place".
        kind?: string,
        // The position of the place.
        position?: {        
            // The latitude of this position.
            latitude?: number,
            // The longitude of this position.
            longitude?: number,
        },        
    }
    
    interface PlusAclentryResource {
        // A descriptive name for this entry. Suitable for display.
        displayName?: string,
        // The ID of the entry. For entries of type "person" or "circle", this is the ID of the resource. For other types, this property is not set.
        id?: string,
        // The type of entry describing to whom access is granted. Possible values are:  
        // - "person" - Access to an individual. 
        // - "circle" - Access to members of a circle. 
        // - "myCircles" - Access to members of all the person's circles. 
        // - "extendedCircles" - Access to members of all the person's circles, plus all of the people in their circles. 
        // - "domain" - Access to members of the person's Google Apps domain. 
        // - "public" - Access to anyone on the web.
        type?: string,
    }
    
    interface ActivitiesResource {
        // Get an activity.
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
            // The ID of the activity to get.
            activityId: string,
        }) : gapi.client.Request<Activity>;        
        
        // List all of the activities in the specified collection for a particular user.
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
            // The collection of activities to list.
            collection: string,
            // The maximum number of activities to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
            maxResults?: number,
            // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
            // The ID of the user to get activities for. The special value "me" can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<ActivityFeed>;        
        
        // Search public activities.
        search (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // Specify the preferred language to search with. See search language codes for available values.
            language?: string,
            // The maximum number of activities to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
            maxResults?: number,
            // Specifies how to order search results.
            orderBy?: string,
            // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. This token can be of any length.
            pageToken?: string,
            // Full-text search query string.
            query: string,
        }) : gapi.client.Request<ActivityFeed>;        
        
    }
    
    
    interface CommentsResource {
        // Get a comment.
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
            // The ID of the comment to get.
            commentId: string,
        }) : gapi.client.Request<Comment>;        
        
        // List all of the comments for an activity.
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
            // The ID of the activity to get comments for.
            activityId: string,
            // The maximum number of comments to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
            maxResults?: number,
            // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
            // The order in which to sort the list of comments.
            sortOrder?: string,
        }) : gapi.client.Request<CommentFeed>;        
        
    }
    
    
    interface PeopleResource {
        // Get a person's profile. If your app uses scope https://www.googleapis.com/auth/plus.login, this method is guaranteed to return ageRange and language.
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
            // The ID of the person to get the profile for. The special value "me" can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<Person>;        
        
        // List all of the people in the specified collection.
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
            // The collection of people to list.
            collection: string,
            // The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
            maxResults?: number,
            // The order to return people in.
            orderBy?: string,
            // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
            // Get the collection of people for the person identified. Use "me" to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<PeopleFeed>;        
        
        // List all of the people in the specified collection for a particular activity.
        listByActivity (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the activity to get the list of people for.
            activityId: string,
            // The collection of people to list.
            collection: string,
            // The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
            maxResults?: number,
            // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<PeopleFeed>;        
        
        // Search all public profiles.
        search (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // Specify the preferred language to search with. See search language codes for available values.
            language?: string,
            // The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
            maxResults?: number,
            // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. This token can be of any length.
            pageToken?: string,
            // Specify a query string for full text search of public text in all profiles.
            query: string,
        }) : gapi.client.Request<PeopleFeed>;        
        
    }
    
}

declare module gapi.client.plus {
    var activities: gapi.client.plus.ActivitiesResource; 
    
    var comments: gapi.client.plus.CommentsResource; 
    
    var people: gapi.client.plus.PeopleResource; 
    
}
