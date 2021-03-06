// Type definitions for Google Drive API v2
// Project: https://developers.google.com/drive/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.drive {
    
    interface About {
        // Information about supported additional roles per file type. The most specific type takes precedence.
        additionalRoleInfo?: {        
            // The supported additional roles per primary role.
            roleSets?: {            
                // The supported additional roles with the primary role.
                additionalRoles?: string[],                
                // A primary permission role.
                primaryRole?: string,
            }[],            
            // The content type that this additional role info applies to.
            type?: string,
        }[],        
        // The domain sharing policy for the current user. Possible values are:  
        // - allowed 
        // - allowedWithWarning 
        // - incomingOnly 
        // - disallowed
        domainSharingPolicy?: string,
        // The ETag of the item.
        etag?: string,
        // The allowable export formats.
        exportFormats?: {        
            // The content type to convert from.
            source?: string,
            // The possible content types to convert to.
            targets?: string[],            
        }[],        
        // List of additional features enabled on this account.
        features?: {        
            // The name of the feature.
            featureName?: string,
            // The request limit rate for this feature, in queries per second.
            featureRate?: number,
        }[],        
        // The palette of allowable folder colors as RGB hex strings.
        folderColorPalette?: string[],        
        // The allowable import formats.
        importFormats?: {        
            // The imported file's content type to convert from.
            source?: string,
            // The possible content types to convert to.
            targets?: string[],            
        }[],        
        // A boolean indicating whether the authenticated app is installed by the authenticated user.
        isCurrentAppInstalled?: boolean,
        // This is always drive#about.
        kind?: string,
        // The user's language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/).
        languageCode?: string,
        // The largest change id.
        largestChangeId?: string,
        // List of max upload sizes for each file type. The most specific type takes precedence.
        maxUploadSizes?: {        
            // The max upload size for this type.
            size?: string,
            // The file type.
            type?: string,
        }[],        
        // The name of the current user.
        name?: string,
        // The current user's ID as visible in the permissions collection.
        permissionId?: string,
        // The amount of storage quota used by different Google services.
        quotaBytesByService?: {        
            // The storage quota bytes used by the service.
            bytesUsed?: string,
            // The service's name, e.g. DRIVE, GMAIL, or PHOTOS.
            serviceName?: string,
        }[],        
        // The total number of quota bytes.
        quotaBytesTotal?: string,
        // The number of quota bytes used by Google Drive.
        quotaBytesUsed?: string,
        // The number of quota bytes used by all Google apps (Drive, Picasa, etc.).
        quotaBytesUsedAggregate?: string,
        // The number of quota bytes used by trashed items.
        quotaBytesUsedInTrash?: string,
        // The type of the user's storage quota. Possible values are:  
        // - LIMITED 
        // - UNLIMITED
        quotaType?: string,
        // The number of remaining change ids, limited to no more than 2500.
        remainingChangeIds?: string,
        // The id of the root folder.
        rootFolderId?: string,
        // A link back to this item.
        selfLink?: string,
        // A list of themes that are supported for Team Drives.
        teamDriveThemes?: {        
            // A link to this Team Drive theme's background image.
            backgroundImageLink?: string,
            // The color of this Team Drive theme as an RGB hex string.
            colorRgb?: string,
            // The ID of the theme.
            id?: string,
        }[],        
        // The authenticated user.
        user?: User,
    }
    
    interface App {
        // Whether the app is authorized to access data on the user's Drive.
        authorized?: boolean,
        // The template url to create a new file with this app in a given folder. The template will contain {folderId} to be replaced by the folder to create the new file in.
        createInFolderTemplate?: string,
        // The url to create a new file with this app.
        createUrl?: string,
        // Whether the app has drive-wide scope. An app with drive-wide scope can access all files in the user's drive.
        hasDriveWideScope?: boolean,
        // The various icons for the app.
        icons?: {        
            // Category of the icon. Allowed values are:  
            // - application - icon for the application 
            // - document - icon for a file associated with the app 
            // - documentShared - icon for a shared file associated with the app
            category?: string,
            // URL for the icon.
            iconUrl?: string,
            // Size of the icon. Represented as the maximum of the width and height.
            size?: number,
        }[],        
        // The ID of the app.
        id?: string,
        // Whether the app is installed.
        installed?: boolean,
        // This is always drive#app.
        kind?: string,
        // A long description of the app.
        longDescription?: string,
        // The name of the app.
        name?: string,
        // The type of object this app creates (e.g. Chart). If empty, the app name should be used instead.
        objectType?: string,
        // The template url for opening files with this app. The template will contain {ids} and/or {exportIds} to be replaced by the actual file ids. See  Open Files  for the full documentation.
        openUrlTemplate?: string,
        // The list of primary file extensions.
        primaryFileExtensions?: string[],        
        // The list of primary mime types.
        primaryMimeTypes?: string[],        
        // The ID of the product listing for this app.
        productId?: string,
        // A link to the product listing for this app.
        productUrl?: string,
        // The list of secondary file extensions.
        secondaryFileExtensions?: string[],        
        // The list of secondary mime types.
        secondaryMimeTypes?: string[],        
        // A short description of the app.
        shortDescription?: string,
        // Whether this app supports creating new objects.
        supportsCreate?: boolean,
        // Whether this app supports importing Google Docs.
        supportsImport?: boolean,
        // Whether this app supports opening more than one file.
        supportsMultiOpen?: boolean,
        // Whether this app supports creating new files when offline.
        supportsOfflineCreate?: boolean,
        // Whether the app is selected as the default handler for the types it supports.
        useByDefault?: boolean,
    }
    
    interface AppList {
        // List of app IDs that the user has specified to use by default. The list is in reverse-priority order (lowest to highest).
        defaultAppIds?: string[],        
        // The ETag of the list.
        etag?: string,
        // The list of apps.
        items?: App[],        
        // This is always drive#appList.
        kind?: string,
        // A link back to this list.
        selfLink?: string,
    }
    
    interface Change {
        // Whether the file or Team Drive has been removed from this list of changes, for example by deletion or loss of access.
        deleted?: boolean,
        // The updated state of the file. Present if the type is file and the file has not been removed from this list of changes.
        file?: File,
        // The ID of the file associated with this change.
        fileId?: string,
        // The ID of the change.
        id?: string,
        // This is always drive#change.
        kind?: string,
        // The time of this modification.
        modificationDate?: string,
        // A link back to this change.
        selfLink?: string,
        // The updated state of the Team Drive. Present if the type is teamDrive, the user is still a member of the Team Drive, and the Team Drive has not been deleted.
        teamDrive?: TeamDrive,
        // The ID of the Team Drive associated with this change.
        teamDriveId?: string,
        // The type of the change. Possible values are file and teamDrive.
        type?: string,
    }
    
    interface ChangeList {
        // The ETag of the list.
        etag?: string,
        // The list of changes. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
        items?: Change[],        
        // This is always drive#changeList.
        kind?: string,
        // The current largest change ID.
        largestChangeId?: string,
        // The starting page token for future changes. This will be present only if the end of the current changes list has been reached.
        newStartPageToken?: string,
        // A link to the next page of changes.
        nextLink?: string,
        // The page token for the next page of changes. This will be absent if the end of the changes list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
        nextPageToken?: string,
        // A link back to this list.
        selfLink?: string,
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
    
    interface ChildList {
        // The ETag of the list.
        etag?: string,
        // The list of children. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
        items?: ChildReference[],        
        // This is always drive#childList.
        kind?: string,
        // A link to the next page of children.
        nextLink?: string,
        // The page token for the next page of children. This will be absent if the end of the children list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
        nextPageToken?: string,
        // A link back to this list.
        selfLink?: string,
    }
    
    interface ChildReference {
        // A link to the child.
        childLink?: string,
        // The ID of the child.
        id?: string,
        // This is always drive#childReference.
        kind?: string,
        // A link back to this reference.
        selfLink?: string,
    }
    
    interface Comment {
        // A region of the document represented as a JSON string. See anchor documentation for details on how to define and interpret anchor properties.
        anchor?: string,
        // The user who wrote this comment.
        author?: User,
        // The ID of the comment.
        commentId?: string,
        // The plain text content used to create this comment. This is not HTML safe and should only be used as a starting point to make edits to a comment's content.
        content?: string,
        // The context of the file which is being commented on.
        context?: {        
            // The MIME type of the context snippet.
            type?: string,
            // Data representation of the segment of the file being commented on. In the case of a text file for example, this would be the actual text that the comment is about.
            value?: string,
        },        
        // The date when this comment was first created.
        createdDate?: string,
        // Whether this comment has been deleted. If a comment has been deleted the content will be cleared and this will only represent a comment that once existed.
        deleted?: boolean,
        // The file which this comment is addressing.
        fileId?: string,
        // The title of the file which this comment is addressing.
        fileTitle?: string,
        // HTML formatted content for this comment.
        htmlContent?: string,
        // This is always drive#comment.
        kind?: string,
        // The date when this comment or any of its replies were last modified.
        modifiedDate?: string,
        // Replies to this post.
        replies?: CommentReply[],        
        // A link back to this comment.
        selfLink?: string,
        // The status of this comment. Status can be changed by posting a reply to a comment with the desired status.  
        // - "open" - The comment is still open. 
        // - "resolved" - The comment has been resolved by one of its replies.
        status?: string,
    }
    
    interface CommentList {
        // The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
        items?: Comment[],        
        // This is always drive#commentList.
        kind?: string,
        // A link to the next page of comments.
        nextLink?: string,
        // The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
        nextPageToken?: string,
        // A link back to this list.
        selfLink?: string,
    }
    
    interface CommentReply {
        // The user who wrote this reply.
        author?: User,
        // The plain text content used to create this reply. This is not HTML safe and should only be used as a starting point to make edits to a reply's content. This field is required on inserts if no verb is specified (resolve/reopen).
        content?: string,
        // The date when this reply was first created.
        createdDate?: string,
        // Whether this reply has been deleted. If a reply has been deleted the content will be cleared and this will only represent a reply that once existed.
        deleted?: boolean,
        // HTML formatted content for this reply.
        htmlContent?: string,
        // This is always drive#commentReply.
        kind?: string,
        // The date when this reply was last modified.
        modifiedDate?: string,
        // The ID of the reply.
        replyId?: string,
        // The action this reply performed to the parent comment. When creating a new reply this is the action to be perform to the parent comment. Possible values are:  
        // - "resolve" - To resolve a comment. 
        // - "reopen" - To reopen (un-resolve) a comment.
        verb?: string,
    }
    
    interface CommentReplyList {
        // The list of replies. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
        items?: CommentReply[],        
        // This is always drive#commentReplyList.
        kind?: string,
        // A link to the next page of replies.
        nextLink?: string,
        // The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
        nextPageToken?: string,
        // A link back to this list.
        selfLink?: string,
    }
    
    interface File {
        // A link for opening the file in a relevant Google editor or viewer.
        alternateLink?: string,
        // Whether this file is in the Application Data folder.
        appDataContents?: boolean,
        // Deprecated: use capabilities/canComment.
        canComment?: boolean,
        // Deprecated: use capabilities/canReadRevisions.
        canReadRevisions?: boolean,
        // Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.
        capabilities?: {        
            // Whether the current user can add children to this folder. This is always false when the item is not a folder.
            canAddChildren?: boolean,
            // Whether the current user can change the restricted download label of this file.
            canChangeRestrictedDownload?: boolean,
            // Whether the current user can comment on this file.
            canComment?: boolean,
            // Whether the current user can copy this file. For a Team Drive item, whether the current user can copy non-folder descendants of this item, or this item itself if it is not a folder.
            canCopy?: boolean,
            // Whether the current user can delete this file.
            canDelete?: boolean,
            // Whether the current user can download this file.
            canDownload?: boolean,
            // Whether the current user can edit this file.
            canEdit?: boolean,
            // Whether the current user can list the children of this folder. This is always false when the item is not a folder.
            canListChildren?: boolean,
            // Whether the current user can move this item into a Team Drive. If the item is in a Team Drive, this field is equivalent to canMoveTeamDriveItem.
            canMoveItemIntoTeamDrive?: boolean,
            // Whether the current user can move this Team Drive item by changing its parent. Note that a request to change the parent for this item may still fail depending on the new parent that is being added. Only populated for Team Drive files.
            canMoveTeamDriveItem?: boolean,
            // Whether the current user can read the revisions resource of this file. For a Team Drive item, whether revisions of non-folder descendants of this item, or this item itself if it is not a folder, can be read.
            canReadRevisions?: boolean,
            // Whether the current user can read the Team Drive to which this file belongs. Only populated for Team Drive files.
            canReadTeamDrive?: boolean,
            // Whether the current user can remove children from this folder. This is always false when the item is not a folder.
            canRemoveChildren?: boolean,
            // Whether the current user can rename this file.
            canRename?: boolean,
            // Whether the current user can modify the sharing settings for this file.
            canShare?: boolean,
            // Whether the current user can move this file to trash.
            canTrash?: boolean,
            // Whether the current user can restore this file from trash.
            canUntrash?: boolean,
        },        
        // Deprecated: use capabilities/canCopy.
        copyable?: boolean,
        // Create time for this file (formatted RFC 3339 timestamp).
        createdDate?: string,
        // A link to open this file with the user's default app for this file. Only populated when the drive.apps.readonly scope is used.
        defaultOpenWithLink?: string,
        // A short description of the file.
        description?: string,
        // 
        downloadUrl?: string,
        // Deprecated: use capabilities/canEdit.
        editable?: boolean,
        // A link for embedding the file.
        embedLink?: string,
        // ETag of the file.
        etag?: string,
        // Whether this file has been explicitly trashed, as opposed to recursively trashed.
        explicitlyTrashed?: boolean,
        // Links for exporting Google Docs to specific formats.
        exportLinks?: any,
        // The final component of fullFileExtension with trailing text that does not appear to be part of the extension removed. This field is only populated for files with content stored in Drive; it is not populated for Google Docs or shortcut files.
        fileExtension?: string,
        // The size of the file in bytes. This field is only populated for files with content stored in Drive; it is not populated for Google Docs or shortcut files.
        fileSize?: string,
        // Folder color as an RGB hex string if the file is a folder. The list of supported colors is available in the folderColorPalette field of the About resource. If an unsupported color is specified, it will be changed to the closest color in the palette. Not populated for Team Drive files.
        folderColorRgb?: string,
        // The full file extension; extracted from the title. May contain multiple concatenated extensions, such as "tar.gz". Removing an extension from the title does not clear this field; however, changing the extension on the title does update this field. This field is only populated for files with content stored in Drive; it is not populated for Google Docs or shortcut files.
        fullFileExtension?: string,
        // Whether any users are granted file access directly on this file. This field is only populated for Team Drive files.
        hasAugmentedPermissions?: boolean,
        // Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field.
        hasThumbnail?: boolean,
        // The ID of the file's head revision. This field is only populated for files with content stored in Drive; it is not populated for Google Docs or shortcut files.
        headRevisionId?: string,
        // A link to the file's icon.
        iconLink?: string,
        // The ID of the file.
        id?: string,
        // Metadata about image media. This will only be present for image types, and its contents will depend on what can be parsed from the image content.
        imageMediaMetadata?: {        
            // The aperture used to create the photo (f-number).
            aperture?: number,
            // The make of the camera used to create the photo.
            cameraMake?: string,
            // The model of the camera used to create the photo.
            cameraModel?: string,
            // The color space of the photo.
            colorSpace?: string,
            // The date and time the photo was taken (EXIF format timestamp).
            date?: string,
            // The exposure bias of the photo (APEX value).
            exposureBias?: number,
            // The exposure mode used to create the photo.
            exposureMode?: string,
            // The length of the exposure, in seconds.
            exposureTime?: number,
            // Whether a flash was used to create the photo.
            flashUsed?: boolean,
            // The focal length used to create the photo, in millimeters.
            focalLength?: number,
            // The height of the image in pixels.
            height?: number,
            // The ISO speed used to create the photo.
            isoSpeed?: number,
            // The lens used to create the photo.
            lens?: string,
            // Geographic location information stored in the image.
            location?: {            
                // The altitude stored in the image.
                altitude?: number,
                // The latitude stored in the image.
                latitude?: number,
                // The longitude stored in the image.
                longitude?: number,
            },            
            // The smallest f-number of the lens at the focal length used to create the photo (APEX value).
            maxApertureValue?: number,
            // The metering mode used to create the photo.
            meteringMode?: string,
            // The rotation in clockwise degrees from the image's original orientation.
            rotation?: number,
            // The type of sensor used to create the photo.
            sensor?: string,
            // The distance to the subject of the photo, in meters.
            subjectDistance?: number,
            // The white balance mode used to create the photo.
            whiteBalance?: string,
            // The width of the image in pixels.
            width?: number,
        },        
        // Indexable text attributes for the file (can only be written)
        indexableText?: {        
            // The text to be indexed for this file.
            text?: string,
        },        
        // Whether the file was created or opened by the requesting app.
        isAppAuthorized?: boolean,
        // The type of file. This is always drive#file.
        kind?: string,
        // A group of labels for the file.
        labels?: {        
            // Deprecated.
            hidden?: boolean,
            // Whether the file has been modified by this user.
            modified?: boolean,
            // Whether viewers and commenters are prevented from downloading, printing, and copying this file.
            restricted?: boolean,
            // Whether this file is starred by the user.
            starred?: boolean,
            // Whether this file has been trashed. This label applies to all users accessing the file; however, only owners are allowed to see and untrash files.
            trashed?: boolean,
            // Whether this file has been viewed by this user.
            viewed?: boolean,
        },        
        // The last user to modify this file.
        lastModifyingUser?: User,
        // Name of the last user to modify this file.
        lastModifyingUserName?: string,
        // Last time this file was viewed by the user (formatted RFC 3339 timestamp).
        lastViewedByMeDate?: string,
        // Deprecated.
        markedViewedByMeDate?: string,
        // An MD5 checksum for the content of this file. This field is only populated for files with content stored in Drive; it is not populated for Google Docs or shortcut files.
        md5Checksum?: string,
        // The MIME type of the file. This is only mutable on update when uploading new content. This field can be left blank, and the mimetype will be determined from the uploaded content's MIME type.
        mimeType?: string,
        // Last time this file was modified by the user (formatted RFC 3339 timestamp). Note that setting modifiedDate will also update the modifiedByMe date for the user which set the date.
        modifiedByMeDate?: string,
        // Last time this file was modified by anyone (formatted RFC 3339 timestamp). This is only mutable on update when the setModifiedDate parameter is set.
        modifiedDate?: string,
        // A map of the id of each of the user's apps to a link to open this file with that app. Only populated when the drive.apps.readonly scope is used.
        openWithLinks?: any,
        // The original filename of the uploaded content if available, or else the original value of the title field. This is only available for files with binary content in Drive.
        originalFilename?: string,
        // Whether the file is owned by the current user. Not populated for Team Drive files.
        ownedByMe?: boolean,
        // Name(s) of the owner(s) of this file. Not populated for Team Drive files.
        ownerNames?: string[],        
        // The owner(s) of this file. Not populated for Team Drive files.
        owners?: User[],        
        // Collection of parent folders which contain this file.
        // Setting this field will put the file in all of the provided folders. On insert, if no folders are provided, the file will be placed in the default root folder.
        parents?: ParentReference[],        
        // The list of permissions for users with access to this file. Not populated for Team Drive files.
        permissions?: Permission[],        
        // The list of properties.
        properties?: Property[],        
        // The number of quota bytes used by this file.
        quotaBytesUsed?: string,
        // A link back to this file.
        selfLink?: string,
        // Deprecated: use capabilities/canShare.
        shareable?: boolean,
        // Whether the file has been shared. Not populated for Team Drive files.
        shared?: boolean,
        // Time at which this file was shared with the user (formatted RFC 3339 timestamp).
        sharedWithMeDate?: string,
        // User that shared the item with the current user, if available.
        sharingUser?: User,
        // The list of spaces which contain the file. Supported values are 'drive', 'appDataFolder' and 'photos'.
        spaces?: string[],        
        // ID of the Team Drive the file resides in.
        teamDriveId?: string,
        // A thumbnail for the file. This will only be used if Drive cannot generate a standard thumbnail.
        thumbnail?: {        
            // The URL-safe Base64 encoded bytes of the thumbnail image. It should conform to RFC 4648 section 5.
            image?: string,
            // The MIME type of the thumbnail.
            mimeType?: string,
        },        
        // A short-lived link to the file's thumbnail. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content.
        thumbnailLink?: string,
        // The thumbnail version for use in thumbnail cache invalidation.
        thumbnailVersion?: string,
        // The title of this file. Note that for immutable items such as the top level folders of Team Drives, My Drive root folder, and Application Data folder the title is constant.
        title?: string,
        // The time that the item was trashed (formatted RFC 3339 timestamp). Only populated for Team Drive files.
        trashedDate?: string,
        // If the file has been explicitly trashed, the user who trashed it. Only populated for Team Drive files.
        trashingUser?: User,
        // The permissions for the authenticated user on this file.
        userPermission?: Permission,
        // A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the requesting user.
        version?: string,
        // Metadata about video media. This will only be present for video types.
        videoMediaMetadata?: {        
            // The duration of the video in milliseconds.
            durationMillis?: string,
            // The height of the video in pixels.
            height?: number,
            // The width of the video in pixels.
            width?: number,
        },        
        // A link for downloading the content of the file in a browser using cookie based authentication. In cases where the content is shared publicly, the content can be downloaded without any credentials.
        webContentLink?: string,
        // A link only available on public folders for viewing their static web assets (HTML, CSS, JS, etc) via Google Drive's Website Hosting.
        webViewLink?: string,
        // Whether writers can share the document with other users. Not populated for Team Drive files.
        writersCanShare?: boolean,
    }
    
    interface FileList {
        // The ETag of the list.
        etag?: string,
        // Whether the search process was incomplete. If true, then some search results may be missing, since all documents were not searched. This may occur when searching multiple Team Drives with the "default,allTeamDrives" corpora, but all corpora could not be searched. When this happens, it is suggested that clients narrow their query by choosing a different corpus such as "default" or "teamDrive".
        incompleteSearch?: boolean,
        // The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
        items?: File[],        
        // This is always drive#fileList.
        kind?: string,
        // A link to the next page of files.
        nextLink?: string,
        // The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
        nextPageToken?: string,
        // A link back to this list.
        selfLink?: string,
    }
    
    interface GeneratedIds {
        // The IDs generated for the requesting user in the specified space.
        ids?: string[],        
        // This is always drive#generatedIds
        kind?: string,
        // The type of file that can be created with these IDs.
        space?: string,
    }
    
    interface ParentList {
        // The ETag of the list.
        etag?: string,
        // The list of parents.
        items?: ParentReference[],        
        // This is always drive#parentList.
        kind?: string,
        // A link back to this list.
        selfLink?: string,
    }
    
    interface ParentReference {
        // The ID of the parent.
        id?: string,
        // Whether or not the parent is the root folder.
        isRoot?: boolean,
        // This is always drive#parentReference.
        kind?: string,
        // A link to the parent.
        parentLink?: string,
        // A link back to this reference.
        selfLink?: string,
    }
    
    interface Permission {
        // Additional roles for this user. Only commenter is currently allowed, though more may be supported in the future.
        additionalRoles?: string[],        
        // Deprecated.
        authKey?: string,
        // Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.
        deleted?: boolean,
        // The domain name of the entity this permission refers to. This is an output-only field which is present when the permission type is user, group or domain.
        domain?: string,
        // The email address of the user or group this permission refers to. This is an output-only field which is present when the permission type is user or group.
        emailAddress?: string,
        // The ETag of the permission.
        etag?: string,
        // The time at which this permission will expire (RFC 3339 date-time). Expiration dates have the following restrictions:  
        // - They can only be set on user and group permissions 
        // - The date must be in the future 
        // - The date cannot be more than a year in the future 
        // - The date can only be set on drive.permissions.update requests
        expirationDate?: string,
        // The ID of the user this permission refers to, and identical to the permissionId in the About and Files resources. When making a drive.permissions.insert request, exactly one of the id or value fields must be specified unless the permission type is anyone, in which case both id and value are ignored.
        id?: string,
        // This is always drive#permission.
        kind?: string,
        // The name for this permission.
        name?: string,
        // A link to the profile photo, if available.
        photoLink?: string,
        // The primary role for this user. While new values may be supported in the future, the following are currently allowed:  
        // - organizer 
        // - owner 
        // - reader 
        // - writer
        role?: string,
        // A link back to this permission.
        selfLink?: string,
        // Details of whether the permissions on this Team Drive item are inherited or directly on this item. This is an output-only field which is present only for Team Drive items.
        teamDrivePermissionDetails?: {        
            // Additional roles for this user. Only commenter is currently possible, though more may be supported in the future.
            additionalRoles?: string[],            
            // Whether this permission is inherited. This field is always populated. This is an output-only field.
            inherited?: boolean,
            // The ID of the item from which this permission is inherited. This is an output-only field and is only populated for members of the Team Drive.
            inheritedFrom?: string,
            // The primary role for this user. While new values may be added in the future, the following are currently possible:  
            // - organizer 
            // - reader 
            // - writer
            role?: string,
            // The Team Drive permission type for this user. While new values may be added in future, the following are currently possible:  
            // - file 
            // - member
            teamDrivePermissionType?: string,
        }[],        
        // The account type. Allowed values are:  
        // - user 
        // - group 
        // - domain 
        // - anyone
        type?: string,
        // The email address or domain name for the entity. This is used during inserts and is not populated in responses. When making a drive.permissions.insert request, exactly one of the id or value fields must be specified unless the permission type is anyone, in which case both id and value are ignored.
        value?: string,
        // Whether the link is required for this permission.
        withLink?: boolean,
    }
    
    interface PermissionId {
        // The permission ID.
        id?: string,
        // This is always drive#permissionId.
        kind?: string,
    }
    
    interface PermissionList {
        // The ETag of the list.
        etag?: string,
        // The list of permissions.
        items?: Permission[],        
        // This is always drive#permissionList.
        kind?: string,
        // The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
        nextPageToken?: string,
        // A link back to this list.
        selfLink?: string,
    }
    
    interface Property {
        // ETag of the property.
        etag?: string,
        // The key of this property.
        key?: string,
        // This is always drive#property.
        kind?: string,
        // The link back to this property.
        selfLink?: string,
        // The value of this property.
        value?: string,
        // The visibility of this property.
        visibility?: string,
    }
    
    interface PropertyList {
        // The ETag of the list.
        etag?: string,
        // The list of properties.
        items?: Property[],        
        // This is always drive#propertyList.
        kind?: string,
        // The link back to this list.
        selfLink?: string,
    }
    
    interface Revision {
        // Short term download URL for the file. This will only be populated on files with content stored in Drive.
        downloadUrl?: string,
        // The ETag of the revision.
        etag?: string,
        // Links for exporting Google Docs to specific formats.
        exportLinks?: any,
        // The size of the revision in bytes. This will only be populated on files with content stored in Drive.
        fileSize?: string,
        // The ID of the revision.
        id?: string,
        // This is always drive#revision.
        kind?: string,
        // The last user to modify this revision.
        lastModifyingUser?: User,
        // Name of the last user to modify this revision.
        lastModifyingUserName?: string,
        // An MD5 checksum for the content of this revision. This will only be populated on files with content stored in Drive.
        md5Checksum?: string,
        // The MIME type of the revision.
        mimeType?: string,
        // Last time this revision was modified (formatted RFC 3339 timestamp).
        modifiedDate?: string,
        // The original filename when this revision was created. This will only be populated on files with content stored in Drive.
        originalFilename?: string,
        // Whether this revision is pinned to prevent automatic purging. This will only be populated and can only be modified on files with content stored in Drive which are not Google Docs. Revisions can also be pinned when they are created through the drive.files.insert/update/copy by using the pinned query parameter.
        pinned?: boolean,
        // Whether subsequent revisions will be automatically republished. This is only populated and can only be modified for Google Docs.
        publishAuto?: boolean,
        // Whether this revision is published. This is only populated and can only be modified for Google Docs.
        published?: boolean,
        // A link to the published revision.
        publishedLink?: string,
        // Whether this revision is published outside the domain. This is only populated and can only be modified for Google Docs.
        publishedOutsideDomain?: boolean,
        // A link back to this revision.
        selfLink?: string,
    }
    
    interface RevisionList {
        // The ETag of the list.
        etag?: string,
        // The list of revisions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
        items?: Revision[],        
        // This is always drive#revisionList.
        kind?: string,
        // The page token for the next page of revisions. This field will be absent if the end of the revisions list has been reached. If the token is rejected for any reason, it should be discarded and pagination should be restarted from the first page of results.
        nextPageToken?: string,
        // A link back to this list.
        selfLink?: string,
    }
    
    interface StartPageToken {
        // Identifies what kind of resource this is. Value: the fixed string "drive#startPageToken".
        kind?: string,
        // The starting page token for listing changes.
        startPageToken?: string,
    }
    
    interface TeamDrive {
        // An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on drive.teamdrives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set.
        backgroundImageFile?: {        
            // The ID of an image file in Drive to use for the background image.
            id?: string,
            // The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high.
            width?: number,
            // The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image.
            xCoordinate?: number,
            // The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image.
            yCoordinate?: number,
        },        
        // A short-lived link to this Team Drive's background image.
        backgroundImageLink?: string,
        // Capabilities the current user has on this Team Drive.
        capabilities?: {        
            // Whether the current user can add children to folders in this Team Drive.
            canAddChildren?: boolean,
            // Whether the current user can change the background of this Team Drive.
            canChangeTeamDriveBackground?: boolean,
            // Whether the current user can comment on files in this Team Drive.
            canComment?: boolean,
            // Whether the current user can copy files in this Team Drive.
            canCopy?: boolean,
            // Whether the current user can delete this Team Drive. Attempting to delete the Team Drive may still fail if there are untrashed items inside the Team Drive.
            canDeleteTeamDrive?: boolean,
            // Whether the current user can download files in this Team Drive.
            canDownload?: boolean,
            // Whether the current user can edit files in this Team Drive
            canEdit?: boolean,
            // Whether the current user can list the children of folders in this Team Drive.
            canListChildren?: boolean,
            // Whether the current user can add members to this Team Drive or remove them or change their role.
            canManageMembers?: boolean,
            // Whether the current user can read the revisions resource of files in this Team Drive.
            canReadRevisions?: boolean,
            // Whether the current user can remove children from folders in this Team Drive.
            canRemoveChildren?: boolean,
            // Whether the current user can rename files or folders in this Team Drive.
            canRename?: boolean,
            // Whether the current user can rename this Team Drive.
            canRenameTeamDrive?: boolean,
            // Whether the current user can share files or folders in this Team Drive.
            canShare?: boolean,
        },        
        // The color of this Team Drive as an RGB hex string. It can only be set on a drive.teamdrives.update request that does not set themeId.
        colorRgb?: string,
        // The ID of this Team Drive which is also the ID of the top level folder for this Team Drive.
        id?: string,
        // This is always drive#teamDrive
        kind?: string,
        // The name of this Team Drive.
        name?: string,
        // The ID of the theme from which the background image and color will be set. The set of possible teamDriveThemes can be retrieved from a drive.about.get response. When not specified on a drive.teamdrives.insert request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set colorRgb or backgroundImageFile.
        themeId?: string,
    }
    
    interface TeamDriveList {
        // The list of Team Drives.
        items?: TeamDrive[],        
        // This is always drive#teamDriveList
        kind?: string,
        // The page token for the next page of Team Drives.
        nextPageToken?: string,
    }
    
    interface User {
        // A plain text displayable name for this user.
        displayName?: string,
        // The email address of the user.
        emailAddress?: string,
        // Whether this user is the same as the authenticated user for whom the request was made.
        isAuthenticatedUser?: boolean,
        // This is always drive#user.
        kind?: string,
        // The user's ID as visible in the permissions collection.
        permissionId?: string,
        // The user's profile picture.
        picture?: {        
            // A URL that points to a profile picture of this user.
            url?: string,
        },        
    }
    
    interface AboutResource {
        // Gets the information about the current user along with Drive API settings
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
            // When calculating the number of remaining change IDs, whether to include public files the user has opened and shared files. When set to false, this counts only change IDs for owned files and any shared or public files that the user has explicitly added to a folder they own.
            includeSubscribed?: boolean,
            // Maximum number of remaining change IDs to count
            maxChangeIdCount?: string,
            // Change ID to start counting from when calculating number of remaining change IDs
            startChangeId?: string,
        }) : gapi.client.Request<About>;        
        
    }
    
    
    interface AppsResource {
        // Gets a specific app.
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
            // The ID of the app.
            appId: string,
        }) : gapi.client.Request<App>;        
        
        // Lists a user's installed apps.
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
            // A comma-separated list of file extensions for open with filtering. All apps within the given app query scope which can open any of the given file extensions will be included in the response. If appFilterMimeTypes are provided as well, the result is a union of the two resulting app lists.
            appFilterExtensions?: string,
            // A comma-separated list of MIME types for open with filtering. All apps within the given app query scope which can open any of the given MIME types will be included in the response. If appFilterExtensions are provided as well, the result is a union of the two resulting app lists.
            appFilterMimeTypes?: string,
            // A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/).
            languageCode?: string,
        }) : gapi.client.Request<AppList>;        
        
    }
    
    
    interface ChangesResource {
        // Gets a specific change.
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
            // The ID of the change.
            changeId: string,
            // Whether the requesting application supports Team Drives.
            supportsTeamDrives?: boolean,
            // The Team Drive from which the change will be returned.
            teamDriveId?: string,
        }) : gapi.client.Request<Change>;        
        
        // Gets the starting pageToken for listing future changes.
        getStartPageToken (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // Whether the requesting application supports Team Drives.
            supportsTeamDrives?: boolean,
            // The ID of the Team Drive for which the starting pageToken for listing future changes from that Team Drive will be returned.
            teamDriveId?: string,
        }) : gapi.client.Request<StartPageToken>;        
        
        // Lists the changes for a user or Team Drive.
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
            // Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
            includeCorpusRemovals?: boolean,
            // Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
            includeDeleted?: boolean,
            // Whether to include public files the user has opened and shared files. When set to false, the list only includes owned files plus any shared or public files the user has explicitly added to a folder they own.
            includeSubscribed?: boolean,
            // Whether Team Drive files or changes should be included in results.
            includeTeamDriveItems?: boolean,
            // Maximum number of changes to return.
            maxResults?: number,
            // The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
            pageToken?: string,
            // A comma-separated list of spaces to query. Supported values are 'drive', 'appDataFolder' and 'photos'.
            spaces?: string,
            // Change ID to start listing changes from.
            startChangeId?: string,
            // Whether the requesting application supports Team Drives.
            supportsTeamDrives?: boolean,
            // The Team Drive from which changes will be returned. If specified the change IDs will be reflective of the Team Drive; use the combined Team Drive ID and change ID as an identifier.
            teamDriveId?: string,
        }) : gapi.client.Request<ChangeList>;        
        
        // Subscribe to changes for a user.
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
            // Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
            includeCorpusRemovals?: boolean,
            // Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
            includeDeleted?: boolean,
            // Whether to include public files the user has opened and shared files. When set to false, the list only includes owned files plus any shared or public files the user has explicitly added to a folder they own.
            includeSubscribed?: boolean,
            // Whether Team Drive files or changes should be included in results.
            includeTeamDriveItems?: boolean,
            // Maximum number of changes to return.
            maxResults?: number,
            // The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
            pageToken?: string,
            // A comma-separated list of spaces to query. Supported values are 'drive', 'appDataFolder' and 'photos'.
            spaces?: string,
            // Change ID to start listing changes from.
            startChangeId?: string,
            // Whether the requesting application supports Team Drives.
            supportsTeamDrives?: boolean,
            // The Team Drive from which changes will be returned. If specified the change IDs will be reflective of the Team Drive; use the combined Team Drive ID and change ID as an identifier.
            teamDriveId?: string,
        }) : gapi.client.Request<Channel>;        
        
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
    
    
    interface ChildrenResource {
        // Removes a child from a folder.
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
            // The ID of the child.
            childId: string,
            // The ID of the folder.
            folderId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets a specific child reference.
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
            // The ID of the child.
            childId: string,
            // The ID of the folder.
            folderId: string,
        }) : gapi.client.Request<ChildReference>;        
        
        // Inserts a file into a folder.
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
            // The ID of the folder.
            folderId: string,
            // Whether the requesting application supports Team Drives.
            supportsTeamDrives?: boolean,
        }) : gapi.client.Request<ChildReference>;        
        
        // Lists a folder's children.
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
            // The ID of the folder.
            folderId: string,
            // Maximum number of children to return.
            maxResults?: number,
            // A comma-separated list of sort keys. Valid keys are 'createdDate', 'folder', 'lastViewedByMeDate', 'modifiedByMeDate', 'modifiedDate', 'quotaBytesUsed', 'recency', 'sharedWithMeDate', 'starred', and 'title'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedDate desc,title. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
            orderBy?: string,
            // Page token for children.
            pageToken?: string,
            // Query string for searching children.
            q?: string,
        }) : gapi.client.Request<ChildList>;        
        
    }
    
    
    interface CommentsResource {
        // Deletes a comment.
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
            // The ID of the comment.
            commentId: string,
            // The ID of the file.
            fileId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets a comment by ID.
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
            // The ID of the comment.
            commentId: string,
            // The ID of the file.
            fileId: string,
            // If set, this will succeed when retrieving a deleted comment, and will include any deleted replies.
            includeDeleted?: boolean,
        }) : gapi.client.Request<Comment>;        
        
        // Creates a new comment on the given file.
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
            // The ID of the file.
            fileId: string,
        }) : gapi.client.Request<Comment>;        
        
        // Lists a file's comments.
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
            // The ID of the file.
            fileId: string,
            // If set, all comments and replies, including deleted comments and replies (with content stripped) will be returned.
            includeDeleted?: boolean,
            // The maximum number of discussions to include in the response, used for paging.
            maxResults?: number,
            // The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
            // Only discussions that were updated after this timestamp will be returned. Formatted as an RFC 3339 timestamp.
            updatedMin?: string,
        }) : gapi.client.Request<CommentList>;        
        
        // Updates an existing comment. This method supports patch semantics.
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
            // The ID of the comment.
            commentId: string,
            // The ID of the file.
            fileId: string,
        }) : gapi.client.Request<Comment>;        
        
        // Updates an existing comment.
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
            // The ID of the comment.
            commentId: string,
            // The ID of the file.
            fileId: string,
        }) : gapi.client.Request<Comment>;        
        
    }
    
    
    interface FilesResource {
        // Creates a copy of the specified file.
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
            // Whether to convert this file to the corresponding Google Docs format.
            convert?: boolean,
            // The ID of the file to copy.
            fileId: string,
            // Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
            ocr?: boolean,
            // If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
            ocrLanguage?: string,
            // Whether to pin the head revision of the new copy. A file can have a maximum of 200 pinned revisions.
            pinned?: boolean,
            // Whether the requesting application supports Team Drives.
            supportsTeamDrives?: boolean,
            // The language of the timed text.
            timedTextLanguage?: string,
            // The timed text track name.
            timedTextTrackName?: string,
            // The visibility of the new file. This parameter is only relevant when the source is not a native Google Doc and convert=false.
            visibility?: string,
        }) : gapi.client.Request<File>;        
        
        // Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file or be an organizer on the parent for Team Drive files.
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
            // The ID of the file to delete.
            fileId: string,
            // Whether the requesting application supports Team Drives.
            supportsTeamDrives?: boolean,
        }) : gapi.client.Request<void>;        
        
        // Permanently deletes all of the user's trashed files.
        emptyTrash (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
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
        
        // Exports a Google Doc to the requested MIME type and returns the exported content. Please note that the exported content is limited to 10MB.
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
            // The ID of the file.
            fileId: string,
            // The MIME type of the format requested for this export.
            mimeType: string,
        }) : gapi.client.Request<void>;        
        
        // Generates a set of file IDs which can be provided in insert requests.
        generateIds (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // Maximum number of IDs to return.
            maxResults?: number,
            // The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'.
            space?: string,
        }) : gapi.client.Request<GeneratedIds>;        
        
        // Gets a file's metadata by ID.
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
            // Whether the user is acknowledging the risk of downloading known malware or other abusive files.
            acknowledgeAbuse?: boolean,
            // The ID for the file in question.
            fileId: string,
            // This parameter is deprecated and has no function.
            projection?: string,
            // Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified.
            revisionId?: string,
            // Whether the requesting application supports Team Drives.
            supportsTeamDrives?: boolean,
            // Deprecated: Use files.update with modifiedDateBehavior=noChange, updateViewedDate=true and an empty request body.
            updateViewedDate?: boolean,
        }) : gapi.client.Request<File>;        
        
        // Insert a new file.
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
            // Whether to convert this file to the corresponding Google Docs format.
            convert?: boolean,
            // Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
            ocr?: boolean,
            // If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
            ocrLanguage?: string,
            // Whether to pin the head revision of the uploaded file. A file can have a maximum of 200 pinned revisions.
            pinned?: boolean,
            // Whether the requesting application supports Team Drives.
            supportsTeamDrives?: boolean,
            // The language of the timed text.
            timedTextLanguage?: string,
            // The timed text track name.
            timedTextTrackName?: string,
            // Whether to use the content as indexable text.
            useContentAsIndexableText?: boolean,
            // The visibility of the new file. This parameter is only relevant when convert=false.
            visibility?: string,
        }) : gapi.client.Request<File>;        
        
        // Lists the user's files.
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
            // Comma-separated list of bodies of items (files/documents) to which the query applies. Supported bodies are 'default', 'domain', 'teamDrive' and 'allTeamDrives'. 'allTeamDrives' must be combined with 'default'; all other values must be used in isolation. Prefer 'default' or 'teamDrive' to 'allTeamDrives' for efficiency.
            corpora?: string,
            // The body of items (files/documents) to which the query applies. Deprecated: use 'corpora' instead.
            corpus?: string,
            // Whether Team Drive items should be included in results.
            includeTeamDriveItems?: boolean,
            // The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.
            maxResults?: number,
            // A comma-separated list of sort keys. Valid keys are 'createdDate', 'folder', 'lastViewedByMeDate', 'modifiedByMeDate', 'modifiedDate', 'quotaBytesUsed', 'recency', 'sharedWithMeDate', 'starred', and 'title'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedDate desc,title. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
            orderBy?: string,
            // Page token for files.
            pageToken?: string,
            // This parameter is deprecated and has no function.
            projection?: string,
            // Query string for searching files.
            q?: string,
            // A comma-separated list of spaces to query. Supported values are 'drive', 'appDataFolder' and 'photos'.
            spaces?: string,
            // Whether the requesting application supports Team Drives.
            supportsTeamDrives?: boolean,
            // ID of Team Drive to search.
            teamDriveId?: string,
        }) : gapi.client.Request<FileList>;        
        
        // Updates file metadata and/or content. This method supports patch semantics.
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
            // Comma-separated list of parent IDs to add.
            addParents?: string,
            // This parameter is deprecated and has no function.
            convert?: boolean,
            // The ID of the file to update.
            fileId: string,
            // Determines the behavior in which modifiedDate is updated. This overrides setModifiedDate.
            modifiedDateBehavior?: string,
            // Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the Drive Help Center.
            newRevision?: boolean,
            // Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
            ocr?: boolean,
            // If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
            ocrLanguage?: string,
            // Whether to pin the new revision. A file can have a maximum of 200 pinned revisions.
            pinned?: boolean,
            // Comma-separated list of parent IDs to remove.
            removeParents?: string,
            // Whether to set the modified date with the supplied modified date.
            setModifiedDate?: boolean,
            // Whether the requesting application supports Team Drives.
            supportsTeamDrives?: boolean,
            // The language of the timed text.
            timedTextLanguage?: string,
            // The timed text track name.
            timedTextTrackName?: string,
            // Whether to update the view date after successfully updating the file.
            updateViewedDate?: boolean,
            // Whether to use the content as indexable text.
            useContentAsIndexableText?: boolean,
        }) : gapi.client.Request<File>;        
        
        // Set the file's updated time to the current server time.
        touch (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the file to update.
            fileId: string,
            // Whether the requesting application supports Team Drives.
            supportsTeamDrives?: boolean,
        }) : gapi.client.Request<File>;        
        
        // Moves a file to the trash. The currently authenticated user must own the file or be an organizer on the parent for Team Drive files.
        trash (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the file to trash.
            fileId: string,
            // Whether the requesting application supports Team Drives.
            supportsTeamDrives?: boolean,
        }) : gapi.client.Request<File>;        
        
        // Restores a file from the trash.
        untrash (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the file to untrash.
            fileId: string,
            // Whether the requesting application supports Team Drives.
            supportsTeamDrives?: boolean,
        }) : gapi.client.Request<File>;        
        
        // Updates file metadata and/or content.
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
            // Comma-separated list of parent IDs to add.
            addParents?: string,
            // This parameter is deprecated and has no function.
            convert?: boolean,
            // The ID of the file to update.
            fileId: string,
            // Determines the behavior in which modifiedDate is updated. This overrides setModifiedDate.
            modifiedDateBehavior?: string,
            // Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the Drive Help Center.
            newRevision?: boolean,
            // Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
            ocr?: boolean,
            // If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
            ocrLanguage?: string,
            // Whether to pin the new revision. A file can have a maximum of 200 pinned revisions.
            pinned?: boolean,
            // Comma-separated list of parent IDs to remove.
            removeParents?: string,
            // Whether to set the modified date with the supplied modified date.
            setModifiedDate?: boolean,
            // Whether the requesting application supports Team Drives.
            supportsTeamDrives?: boolean,
            // The language of the timed text.
            timedTextLanguage?: string,
            // The timed text track name.
            timedTextTrackName?: string,
            // Whether to update the view date after successfully updating the file.
            updateViewedDate?: boolean,
            // Whether to use the content as indexable text.
            useContentAsIndexableText?: boolean,
        }) : gapi.client.Request<File>;        
        
        // Subscribe to changes on a file
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
            // Whether the user is acknowledging the risk of downloading known malware or other abusive files.
            acknowledgeAbuse?: boolean,
            // The ID for the file in question.
            fileId: string,
            // This parameter is deprecated and has no function.
            projection?: string,
            // Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified.
            revisionId?: string,
            // Whether the requesting application supports Team Drives.
            supportsTeamDrives?: boolean,
            // Deprecated: Use files.update with modifiedDateBehavior=noChange, updateViewedDate=true and an empty request body.
            updateViewedDate?: boolean,
        }) : gapi.client.Request<Channel>;        
        
    }
    
    
    interface ParentsResource {
        // Removes a parent from a file.
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
            // The ID of the file.
            fileId: string,
            // The ID of the parent.
            parentId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets a specific parent reference.
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
            // The ID of the file.
            fileId: string,
            // The ID of the parent.
            parentId: string,
        }) : gapi.client.Request<ParentReference>;        
        
        // Adds a parent folder for a file.
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
            // The ID of the file.
            fileId: string,
            // Whether the requesting application supports Team Drives.
            supportsTeamDrives?: boolean,
        }) : gapi.client.Request<ParentReference>;        
        
        // Lists a file's parents.
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
            // The ID of the file.
            fileId: string,
        }) : gapi.client.Request<ParentList>;        
        
    }
    
    
    interface PermissionsResource {
        // Deletes a permission from a file or Team Drive.
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
            // The ID for the file or Team Drive.
            fileId: string,
            // The ID for the permission.
            permissionId: string,
            // Whether the requesting application supports Team Drives.
            supportsTeamDrives?: boolean,
        }) : gapi.client.Request<void>;        
        
        // Gets a permission by ID.
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
            // The ID for the file or Team Drive.
            fileId: string,
            // The ID for the permission.
            permissionId: string,
            // Whether the requesting application supports Team Drives.
            supportsTeamDrives?: boolean,
        }) : gapi.client.Request<Permission>;        
        
        // Returns the permission ID for an email address.
        getIdForEmail (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The email address for which to return a permission ID
            email: string,
        }) : gapi.client.Request<PermissionId>;        
        
        // Inserts a permission for a file or Team Drive.
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
            // A custom message to include in notification emails.
            emailMessage?: string,
            // The ID for the file or Team Drive.
            fileId: string,
            // Whether to send notification emails when sharing to users or groups. This parameter is ignored and an email is sent if the role is owner.
            sendNotificationEmails?: boolean,
            // Whether the requesting application supports Team Drives.
            supportsTeamDrives?: boolean,
        }) : gapi.client.Request<Permission>;        
        
        // Lists a file's or Team Drive's permissions.
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
            // The ID for the file or Team Drive.
            fileId: string,
            // The maximum number of permissions to return per page. When not set for files in a Team Drive, at most 100 results will be returned. When not set for files that are not in a Team Drive, the entire list will be returned.
            maxResults?: number,
            // The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
            pageToken?: string,
            // Whether the requesting application supports Team Drives.
            supportsTeamDrives?: boolean,
        }) : gapi.client.Request<PermissionList>;        
        
        // Updates a permission using patch semantics.
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
            // The ID for the file or Team Drive.
            fileId: string,
            // The ID for the permission.
            permissionId: string,
            // Whether to remove the expiration date.
            removeExpiration?: boolean,
            // Whether the requesting application supports Team Drives.
            supportsTeamDrives?: boolean,
            // Whether changing a role to 'owner' downgrades the current owners to writers. Does nothing if the specified role is not 'owner'.
            transferOwnership?: boolean,
        }) : gapi.client.Request<Permission>;        
        
        // Updates a permission.
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
            // The ID for the file or Team Drive.
            fileId: string,
            // The ID for the permission.
            permissionId: string,
            // Whether to remove the expiration date.
            removeExpiration?: boolean,
            // Whether the requesting application supports Team Drives.
            supportsTeamDrives?: boolean,
            // Whether changing a role to 'owner' downgrades the current owners to writers. Does nothing if the specified role is not 'owner'.
            transferOwnership?: boolean,
        }) : gapi.client.Request<Permission>;        
        
    }
    
    
    interface PropertiesResource {
        // Deletes a property.
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
            // The ID of the file.
            fileId: string,
            // The key of the property.
            propertyKey: string,
            // The visibility of the property.
            visibility?: string,
        }) : gapi.client.Request<void>;        
        
        // Gets a property by its key.
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
            // The ID of the file.
            fileId: string,
            // The key of the property.
            propertyKey: string,
            // The visibility of the property.
            visibility?: string,
        }) : gapi.client.Request<Property>;        
        
        // Adds a property to a file, or updates it if it already exists.
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
            // The ID of the file.
            fileId: string,
        }) : gapi.client.Request<Property>;        
        
        // Lists a file's properties.
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
            // The ID of the file.
            fileId: string,
        }) : gapi.client.Request<PropertyList>;        
        
        // Updates a property, or adds it if it doesn't exist. This method supports patch semantics.
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
            // The ID of the file.
            fileId: string,
            // The key of the property.
            propertyKey: string,
            // The visibility of the property.
            visibility?: string,
        }) : gapi.client.Request<Property>;        
        
        // Updates a property, or adds it if it doesn't exist.
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
            // The ID of the file.
            fileId: string,
            // The key of the property.
            propertyKey: string,
            // The visibility of the property.
            visibility?: string,
        }) : gapi.client.Request<Property>;        
        
    }
    
    
    interface RealtimeResource {
        // Exports the contents of the Realtime API data model associated with this file as JSON.
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
            // The ID of the file that the Realtime API data model is associated with.
            fileId: string,
            // The revision of the Realtime API data model to export. Revisions start at 1 (the initial empty data model) and are incremented with each change. If this parameter is excluded, the most recent data model will be returned.
            revision?: number,
        }) : gapi.client.Request<void>;        
        
        // Overwrites the Realtime API data model associated with this file with the provided JSON data model.
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
            // The revision of the model to diff the uploaded model against. If set, the uploaded model is diffed against the provided revision and those differences are merged with any changes made to the model after the provided revision. If not set, the uploaded model replaces the current model on the server.
            baseRevision?: string,
            // The ID of the file that the Realtime API data model is associated with.
            fileId: string,
        }) : gapi.client.Request<void>;        
        
    }
    
    
    interface RepliesResource {
        // Deletes a reply.
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
            // The ID of the comment.
            commentId: string,
            // The ID of the file.
            fileId: string,
            // The ID of the reply.
            replyId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets a reply.
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
            // The ID of the comment.
            commentId: string,
            // The ID of the file.
            fileId: string,
            // If set, this will succeed when retrieving a deleted reply.
            includeDeleted?: boolean,
            // The ID of the reply.
            replyId: string,
        }) : gapi.client.Request<CommentReply>;        
        
        // Creates a new reply to the given comment.
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
            // The ID of the comment.
            commentId: string,
            // The ID of the file.
            fileId: string,
        }) : gapi.client.Request<CommentReply>;        
        
        // Lists all of the replies to a comment.
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
            // The ID of the comment.
            commentId: string,
            // The ID of the file.
            fileId: string,
            // If set, all replies, including deleted replies (with content stripped) will be returned.
            includeDeleted?: boolean,
            // The maximum number of replies to include in the response, used for paging.
            maxResults?: number,
            // The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<CommentReplyList>;        
        
        // Updates an existing reply. This method supports patch semantics.
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
            // The ID of the comment.
            commentId: string,
            // The ID of the file.
            fileId: string,
            // The ID of the reply.
            replyId: string,
        }) : gapi.client.Request<CommentReply>;        
        
        // Updates an existing reply.
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
            // The ID of the comment.
            commentId: string,
            // The ID of the file.
            fileId: string,
            // The ID of the reply.
            replyId: string,
        }) : gapi.client.Request<CommentReply>;        
        
    }
    
    
    interface RevisionsResource {
        // Removes a revision.
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
            // The ID of the file.
            fileId: string,
            // The ID of the revision.
            revisionId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets a specific revision.
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
            // The ID of the file.
            fileId: string,
            // The ID of the revision.
            revisionId: string,
        }) : gapi.client.Request<Revision>;        
        
        // Lists a file's revisions.
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
            // The ID of the file.
            fileId: string,
            // Maximum number of revisions to return.
            maxResults?: number,
            // Page token for revisions. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
            pageToken?: string,
        }) : gapi.client.Request<RevisionList>;        
        
        // Updates a revision. This method supports patch semantics.
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
            // The ID for the file.
            fileId: string,
            // The ID for the revision.
            revisionId: string,
        }) : gapi.client.Request<Revision>;        
        
        // Updates a revision.
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
            // The ID for the file.
            fileId: string,
            // The ID for the revision.
            revisionId: string,
        }) : gapi.client.Request<Revision>;        
        
    }
    
    
    interface TeamdrivesResource {
        // Permanently deletes a Team Drive for which the user is an organizer. The Team Drive cannot contain any untrashed items.
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
            // The ID of the Team Drive
            teamDriveId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets a Team Drive's metadata by ID.
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
            // The ID of the Team Drive
            teamDriveId: string,
        }) : gapi.client.Request<TeamDrive>;        
        
        // Creates a new Team Drive.
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
            // An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.
            requestId: string,
        }) : gapi.client.Request<TeamDrive>;        
        
        // Lists the user's Team Drives.
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
            // Maximum number of Team Drives to return.
            maxResults?: number,
            // Page token for Team Drives.
            pageToken?: string,
        }) : gapi.client.Request<TeamDriveList>;        
        
        // Updates a Team Drive's metadata
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
            // The ID of the Team Drive
            teamDriveId: string,
        }) : gapi.client.Request<TeamDrive>;        
        
    }
    
}

declare module gapi.client.drive {
    var about: gapi.client.drive.AboutResource; 
    
    var apps: gapi.client.drive.AppsResource; 
    
    var changes: gapi.client.drive.ChangesResource; 
    
    var channels: gapi.client.drive.ChannelsResource; 
    
    var children: gapi.client.drive.ChildrenResource; 
    
    var comments: gapi.client.drive.CommentsResource; 
    
    var files: gapi.client.drive.FilesResource; 
    
    var parents: gapi.client.drive.ParentsResource; 
    
    var permissions: gapi.client.drive.PermissionsResource; 
    
    var properties: gapi.client.drive.PropertiesResource; 
    
    var realtime: gapi.client.drive.RealtimeResource; 
    
    var replies: gapi.client.drive.RepliesResource; 
    
    var revisions: gapi.client.drive.RevisionsResource; 
    
    var teamdrives: gapi.client.drive.TeamdrivesResource; 
    
}
