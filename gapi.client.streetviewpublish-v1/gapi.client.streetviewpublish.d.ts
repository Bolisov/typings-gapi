// Type definitions for Google Street View Publish API v1
// Project: https://developers.google.com/streetview/publish/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.streetviewpublish {
    
    interface UpdatePhotoRequest {
        // Mask that identifies fields on the photo metadata to update.
        // If not present, the old Photo metadata will be entirely replaced with the
        // new Photo metadata in this request. The update fails if invalid fields are
        // specified. Multiple fields can be specified in a comma-delimited list.
        // 
        // The following fields are valid:
        // 
        // * `pose.heading`
        // * `pose.latlngpair`
        // * `pose.pitch`
        // * `pose.roll`
        // * `pose.level`
        // * `pose.altitude`
        // * `connections`
        // * `places`
        // 
        // 
        // <aside class="note"><b>Note:</b> Repeated fields in `update_mask` mean the
        // entire set of repeated values will be replaced with the new contents. For
        // example, if `UpdatePhotoRequest.photo.update_mask` contains `connections`
        // and `UpdatePhotoRequest.photo.connections` is empty, all connections will
        // be removed.</aside>
        updateMask?: string,
        // Required. Photo object containing the new metadata. Only the fields
        // specified in `update_mask` are used. If `update_mask` is not present, the
        // update applies to all fields.
        // <aside class="note"><b>Note:</b> To update `pose.altitude`,
        // `pose.latlngpair` has to be filled as well. Otherwise, the request will
        // fail.
        photo?: Photo,
    }
    
    interface PhotoId {
        // Required. A base64 encoded identifier.
        id?: string,
    }
    
    interface Pose {
        // Level (the floor in a building) used to configure vertical navigation.
        level?: Level,
        // Compass heading, measured at the center of the photo in degrees clockwise
        // from North. Value must be >=0 and <360.
        // NaN indicates an unmeasured quantity.
        heading?: number,
        // Altitude of the pose in meters above ground level (as defined by WGS84).
        // NaN indicates an unmeasured quantity.
        altitude?: number,
        // Pitch, measured at the center of the photo in degrees. Value must be >=-90
        // and <= 90. A value of -90 means looking directly down, and a value of 90
        // means looking directly up.
        // NaN indicates an unmeasured quantity.
        pitch?: number,
        // Latitude and longitude pair of the pose, as explained here:
        // https://cloud.google.com/datastore/docs/reference/rest/Shared.Types/LatLng
        // When creating a photo, if the latitude and longitude pair are not provided
        // here, the geolocation from the exif header will be used.
        // If the latitude and longitude pair is not provided and cannot be found in
        // the exif header, the create photo process will fail.
        latLngPair?: LatLng,
        // Roll, measured in degrees. Value must be >= 0 and <360. A value of 0
        // means level with the horizon.
        // NaN indicates an unmeasured quantity.
        roll?: number,
    }
    
    interface BatchUpdatePhotosRequest {
        // Required. List of update photo requests.
        updatePhotoRequests?: UpdatePhotoRequest[],        
    }
    
    interface ListPhotosResponse {
        // List of photos. The maximum number of items returned is based on the
        // `page_size` field in the request.
        photos?: Photo[],        
        // Token to retrieve the next page of results, or empty if there are no
        // more results in the list.
        nextPageToken?: string,
    }
    
    interface Photo {
        // Absolute time when the photo was captured.
        // When the photo has no exif timestamp, this is used to set a timestamp in
        // the photo metadata.
        captureTime?: string,
        // Output only. The thumbnail URL for showing a preview of the given photo.
        thumbnailUrl?: string,
        // Output only. View count of the photo.
        viewCount?: string,
        // Output only. The download URL for the photo bytes. This field is set only
        // when the `view` parameter in a `GetPhotoRequest` is set to
        // `INCLUDE_DOWNLOAD_URL`.
        downloadUrl?: string,
        // Connections to other photos. A connection represents the link from this
        // photo to another photo.
        connections?: Connection[],        
        // Places where this photo belongs.
        places?: Place[],        
        // Required (when creating photo). Input only. The resource URL where the
        // photo bytes are uploaded to.
        uploadReference?: UploadRef,
        // Output only. Identifier for the photo, which is unique among all photos in
        // Google.
        photoId?: PhotoId,
        // Pose of the photo.
        pose?: Pose,
        // Output only. The share link for the photo.
        shareLink?: string,
    }
    
    interface PhotoResponse {
        // The photo resource, if the request was successful.
        photo?: Photo,
        // The status for the operation to get or update a single photo in the batch
        // request.
        status?: Status,
    }
    
    interface Connection {
        // Required. The destination of the connection from the containing photo to
        // another photo.
        target?: PhotoId,
    }
    
    interface BatchUpdatePhotosResponse {
        // List of results for each individual photo updated, in the same order as
        // the request.
        results?: PhotoResponse[],        
    }
    
    interface BatchDeletePhotosResponse {
        // The status for the operation to delete a single photo in the batch request.
        status?: Status[],        
    }
    
    interface Status {
        // A developer-facing error message, which should be in English. Any
        // user-facing error message should be localized and sent in the
        // google.rpc.Status.details field, or localized by the client.
        message?: string,
        // A list of messages that carry the error details.  There is a common set of
        // message types for APIs to use.
        details?: any[],        
        // The status code, which should be an enum value of google.rpc.Code.
        code?: number,
    }
    
    interface Level {
        // Required. A name assigned to this Level, restricted to 3 characters.
        // Consider how the elevator buttons would be labeled for this level if there
        // was an elevator.
        name?: string,
        // Floor number, used for ordering. 0 indicates the ground level, 1 indicates
        // the first level above ground level, -1 indicates the first level under
        // ground level. Non-integer values are OK.
        number?: number,
    }
    
    interface Empty {
    }
    
    interface BatchGetPhotosResponse {
        // List of results for each individual photo requested, in the same order as
        // the request.
        results?: PhotoResponse[],        
    }
    
    interface Place {
        // Required. Place identifier, as described in
        // https://developers.google.com/places/place-id.
        placeId?: string,
    }
    
    interface UploadRef {
        // Required. An upload reference should be unique for each user. It follows
        // the form:
        // "https://streetviewpublish.googleapis.com/media/user/{account_id}/photo/{upload_reference}"
        uploadUrl?: string,
    }
    
    interface LatLng {
        // The latitude in degrees. It must be in the range [-90.0, +90.0].
        latitude?: number,
        // The longitude in degrees. It must be in the range [-180.0, +180.0].
        longitude?: number,
    }
    
    interface BatchDeletePhotosRequest {
        // Required. List of delete photo requests. For HTTP GET requests, the URL
        // query parameter should be `photoIds=<id1>&photoIds=<id2>&...`.
        photoIds?: string[],        
    }
    
    interface PhotosResource {
        // Gets the metadata of the specified `Photo` batch.
        // 
        // Note that if `photos.batchGet` fails, either critical fields are
        // missing or there was an authentication error.
        // Even if `photos.batchGet` succeeds, there may have been failures
        // for single photos in the batch. These failures will be specified in
        // `BatchGetPhotosResponse.results.status`.
        // See `photo.get` for specific failures that can occur per photo.
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
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Required. IDs of the photos. For HTTP GET requests, the URL query parameter
            // should be `photoIds=<id1>&photoIds=<id2>&...`.
            photoIds?: string,
            // Specifies if a download URL for the photo bytes should be returned in the
            // Photo response.
            view?: string,
        }) : gapi.client.Request<BatchGetPhotosResponse>;        
        
        // Lists all the photos that belong to the user.
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
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // The filter expression.
            // Example: `placeId=ChIJj61dQgK6j4AR4GeTYWZsKWw`
            filter?: string,
            // The `next_page_token` value returned from a previous List request, if any.
            pageToken?: string,
            // The maximum number of photos to return.
            // `page_size` must be non-negative. If `page_size` is zero or is not
            // provided, the default page size of 100 will be used.
            // The number of photos returned in the response may be less than `page_size`
            // if the number of photos that belong to the user is less than `page_size`.
            pageSize?: number,
            // Specifies if a download URL for the photos bytes should be returned in the
            // Photos response.
            view?: string,
        }) : gapi.client.Request<ListPhotosResponse>;        
        
        // Deletes a list of photos and their metadata.
        // 
        // Note that if `photos.batchDelete` fails, either critical fields
        // are missing or there was an authentication error.
        // Even if `photos.batchDelete` succeeds, there may have been
        // failures for single photos in the batch. These failures will be specified
        // in `BatchDeletePhotosResponse.status`.
        // See `photo.update` for specific failures that can occur per photo.
        batchDelete (request: {        
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
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
        }) : gapi.client.Request<BatchDeletePhotosResponse>;        
        
        // Updates the metadata of photos, such as pose, place association, etc.
        // Changing the pixels of a photo is not supported.
        // 
        // Note that if `photos.batchUpdate` fails, either critical fields
        // are missing or there was an authentication error.
        // Even if `photos.batchUpdate` succeeds, there may have been
        // failures for single photos in the batch. These failures will be specified
        // in `BatchUpdatePhotosResponse.results.status`.
        // See `UpdatePhoto` for specific failures that can occur per photo.
        batchUpdate (request: {        
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
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
        }) : gapi.client.Request<BatchUpdatePhotosResponse>;        
        
    }
    
    
    interface PhotoResource {
        // After the client finishes uploading the photo with the returned
        // `UploadRef`, `photo.create` publishes the uploaded photo to Street View on
        // Google Maps.
        // 
        // This method returns the following error codes:
        // 
        // * `INVALID_ARGUMENT` if the request is malformed.
        // * `NOT_FOUND` if the upload reference does not exist.
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
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
        }) : gapi.client.Request<Photo>;        
        
        // Creates an upload session to start uploading photo data. The upload URL of
        // the returned `UploadRef` is used to upload the data for the photo.
        // 
        // In addition to the photo requirements shown in
        // https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604,
        // the photo must also meet the following requirements:
        // 
        // * Photo Sphere XMP metadata must be included in the photo medadata. See
        // https://developers.google.com/streetview/spherical-metadata for the
        // required fields.
        // * The pixel size of the photo must meet the size requirements listed in
        // https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604, and
        // the photo must be a full 360 horizontally.
        // 
        // After the upload is complete, the `UploadRef` is used with
        // `StreetViewPublishService:CreatePhoto()` to create the `Photo` object
        // entry.
        startUpload (request: {        
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
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
        }) : gapi.client.Request<UploadRef>;        
        
        // Deletes a photo and its metadata.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user did not create the requested
        // photo.
        // * `NOT_FOUND` if the photo ID does not exist.
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
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Required. ID of the photo.
            photoId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Gets the metadata of the specified `Photo`.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user did not create the requested
        // photo.
        // * `NOT_FOUND` if the requested photo does not exist.
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
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Specifies if a download URL for the photo bytes should be returned in the
            // Photo response.
            view?: string,
            // Required. ID of the photo.
            photoId: string,
        }) : gapi.client.Request<Photo>;        
        
        // Updates the metadata of a photo, such as pose, place association, etc.
        // Changing the pixels of a photo is not supported.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user did not create the requested
        // photo.
        // * `INVALID_ARGUMENT` if the request is malformed.
        // * `NOT_FOUND` if the photo ID does not exist.
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
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Required. A base64 encoded identifier.
            id: string,
            // Mask that identifies fields on the photo metadata to update.
            // If not present, the old Photo metadata will be entirely replaced with the
            // new Photo metadata in this request. The update fails if invalid fields are
            // specified. Multiple fields can be specified in a comma-delimited list.
            // 
            // The following fields are valid:
            // 
            // * `pose.heading`
            // * `pose.latlngpair`
            // * `pose.pitch`
            // * `pose.roll`
            // * `pose.level`
            // * `pose.altitude`
            // * `connections`
            // * `places`
            // 
            // 
            // <aside class="note"><b>Note:</b> Repeated fields in `update_mask` mean the
            // entire set of repeated values will be replaced with the new contents. For
            // example, if `UpdatePhotoRequest.photo.update_mask` contains `connections`
            // and `UpdatePhotoRequest.photo.connections` is empty, all connections will
            // be removed.</aside>
            updateMask?: string,
        }) : gapi.client.Request<Photo>;        
        
    }
    
}

declare module gapi.client.streetviewpublish {
    var photos: gapi.client.streetviewpublish.PhotosResource; 
    
    var photo: gapi.client.streetviewpublish.PhotoResource; 
    
}
