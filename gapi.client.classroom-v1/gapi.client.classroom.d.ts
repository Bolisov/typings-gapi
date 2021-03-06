// Type definitions for Google Google Classroom API v1
// Project: https://developers.google.com/classroom/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.classroom {
    
    interface ShortAnswerSubmission {
        // Student response to a short-answer question.
        answer?: string,
    }
    
    interface StudentSubmission {
        // State of this submission.
        // 
        // Read-only.
        state?: string,
        // Identifier for the student that owns this submission.
        // 
        // Read-only.
        userId?: string,
        // Identifier for the course work this corresponds to.
        // 
        // Read-only.
        courseWorkId?: string,
        // Identifier of the course.
        // 
        // Read-only.
        courseId?: string,
        // Classroom-assigned Identifier for the student submission.
        // This is unique among submissions for the relevant course work.
        // 
        // Read-only.
        id?: string,
        // Optional grade. If unset, no grade was set.
        // This must be a non-negative integer value.
        // 
        // This may be modified only by course teachers.
        assignedGrade?: number,
        // Submission content when course_work_type is MULTIPLE_CHOICE_QUESTION.
        multipleChoiceSubmission?: MultipleChoiceSubmission,
        // Submission content when course_work_type is ASSIGNMENT .
        assignmentSubmission?: AssignmentSubmission,
        // Submission content when course_work_type is SHORT_ANSWER_QUESTION.
        shortAnswerSubmission?: ShortAnswerSubmission,
        // Whether this student submission is associated with the Developer Console
        // project making the request.
        // 
        // See google.classroom.Work.CreateCourseWork for more
        // details.
        // 
        // Read-only.
        associatedWithDeveloper?: boolean,
        // Last update time of this submission.
        // This may be unset if the student has not accessed this item.
        // 
        // Read-only.
        updateTime?: string,
        // Absolute link to the submission in the Classroom web UI.
        // 
        // Read-only.
        alternateLink?: string,
        // Optional pending grade. If unset, no grade was set.
        // This must be a non-negative integer value.
        // 
        // This is only visible to and modifiable by course teachers.
        draftGrade?: number,
        // Whether this submission is late.
        // 
        // Read-only.
        late?: boolean,
        // Type of course work this submission is for.
        // 
        // Read-only.
        courseWorkType?: string,
        // Creation time of this submission.
        // This may be unset if the student has not accessed this item.
        // 
        // Read-only.
        creationTime?: string,
    }
    
    interface ListStudentSubmissionsResponse {
        // Token identifying the next page of results to return. If empty, no further
        // results are available.
        nextPageToken?: string,
        // Student work that matches the request.
        studentSubmissions?: StudentSubmission[],        
    }
    
    interface TurnInStudentSubmissionRequest {
    }
    
    interface ListCourseWorkResponse {
        // Token identifying the next page of results to return. If empty, no further
        // results are available.
        nextPageToken?: string,
        // Course work items that match the request.
        courseWork?: CourseWork[],        
    }
    
    interface ModifyAttachmentsRequest {
        // Attachments to add.
        // A student submission may not have more than 20 attachments.
        // 
        // Form attachments are not supported.
        addAttachments?: Attachment[],        
    }
    
    interface YouTubeVideo {
        // URL of a thumbnail image of the YouTube video.
        // 
        // Read-only.
        thumbnailUrl?: string,
        // YouTube API resource ID.
        id?: string,
        // Title of the YouTube video.
        // 
        // Read-only.
        title?: string,
        // URL that can be used to view the YouTube video.
        // 
        // Read-only.
        alternateLink?: string,
    }
    
    interface ListInvitationsResponse {
        // Token identifying the next page of results to return. If empty, no further
        // results are available.
        nextPageToken?: string,
        // Invitations that match the list request.
        invitations?: Invitation[],        
    }
    
    interface GuardianInvitation {
        // Email address that the invitation was sent to.
        // This field is only visible to domain administrators.
        invitedEmailAddress?: string,
        // The time that this invitation was created.
        // 
        // Read-only.
        creationTime?: string,
        // Unique identifier for this invitation.
        // 
        // Read-only.
        invitationId?: string,
        // The state that this invitation is in.
        state?: string,
        // ID of the student (in standard format)
        studentId?: string,
    }
    
    interface Attachment {
        // Google Forms attachment.
        form?: Form,
        // Link attachment.
        link?: Link,
        // Youtube video attachment.
        youTubeVideo?: YouTubeVideo,
        // Google Drive file attachment.
        driveFile?: DriveFile,
    }
    
    interface CourseMaterialSet {
        // Materials attached to this set.
        materials?: CourseMaterial[],        
        // Title for this set.
        title?: string,
    }
    
    interface TimeOfDay {
        // Hours of day in 24 hour format. Should be from 0 to 23. An API may choose
        // to allow the value "24:00:00" for scenarios like business closing time.
        hours?: number,
        // Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
        nanos?: number,
        // Seconds of minutes of the time. Must normally be from 0 to 59. An API may
        // allow the value 60 if it allows leap-seconds.
        seconds?: number,
        // Minutes of hour of day. Must be from 0 to 59.
        minutes?: number,
    }
    
    interface ListCoursesResponse {
        // Courses that match the list request.
        courses?: Course[],        
        // Token identifying the next page of results to return. If empty, no further
        // results are available.
        nextPageToken?: string,
    }
    
    interface Form {
        // URL of a thumbnail image of the Form.
        // 
        // Read-only.
        thumbnailUrl?: string,
        // URL of the form responses document.
        // Only set if respsonses have been recorded and only when the
        // requesting user is an editor of the form.
        // 
        // Read-only.
        responseUrl?: string,
        // URL of the form.
        formUrl?: string,
        // Title of the Form.
        // 
        // Read-only.
        title?: string,
    }
    
    interface ListTeachersResponse {
        // Token identifying the next page of results to return. If empty, no further
        // results are available.
        nextPageToken?: string,
        // Teachers who match the list request.
        teachers?: Teacher[],        
    }
    
    interface Link {
        // URL of a thumbnail image of the target URL.
        // 
        // Read-only.
        thumbnailUrl?: string,
        // URL to link to.
        // This must be a valid UTF-8 string containing between 1 and 2024 characters.
        url?: string,
        // Title of the target of the URL.
        // 
        // Read-only.
        title?: string,
    }
    
    interface ListGuardiansResponse {
        // Token identifying the next page of results to return. If empty, no further
        // results are available.
        nextPageToken?: string,
        // Guardians on this page of results that met the criteria specified in
        // the request.
        guardians?: Guardian[],        
    }
    
    interface ListGuardianInvitationsResponse {
        // Guardian invitations that matched the list request.
        guardianInvitations?: GuardianInvitation[],        
        // Token identifying the next page of results to return. If empty, no further
        // results are available.
        nextPageToken?: string,
    }
    
    interface ListCourseAliasesResponse {
        // Token identifying the next page of results to return. If empty, no further
        // results are available.
        nextPageToken?: string,
        // The course aliases.
        aliases?: CourseAlias[],        
    }
    
    interface CourseAlias {
        // Alias string. The format of the string indicates the desired alias scoping.
        // 
        // * `d:<name>` indicates a domain-scoped alias.
        //   Example: `d:math_101`
        // * `p:<name>` indicates a project-scoped alias.
        //   Example: `p:abc123`
        // 
        // This field has a maximum length of 256 characters.
        alias?: string,
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
    
    interface MultipleChoiceSubmission {
        // Student's select choice.
        answer?: string,
    }
    
    interface CourseMaterial {
        // Youtube video attachment.
        youTubeVideo?: YouTubeVideo,
        // Google Drive file attachment.
        driveFile?: DriveFile,
        // Google Forms attachment.
        form?: Form,
        // Link atatchment.
        link?: Link,
    }
    
    interface Name {
        // The user's last name.
        // 
        // Read-only.
        familyName?: string,
        // The user's first name.
        // 
        // Read-only.
        givenName?: string,
        // The user's full name formed by concatenating the first and last name
        // values.
        // 
        // Read-only.
        fullName?: string,
    }
    
    interface Assignment {
        // Drive folder where attachments from student submissions are placed.
        // This is only populated for course teachers.
        studentWorkFolder?: DriveFolder,
    }
    
    interface SharedDriveFile {
        // Mechanism by which students access the Drive item.
        shareMode?: string,
        // Drive file details.
        driveFile?: DriveFile,
    }
    
    interface Empty {
    }
    
    interface MultipleChoiceQuestion {
        // Possible choices.
        choices?: string[],        
    }
    
    interface Course {
        // Optional description.
        // For example, "We'll be learning about the structure of living
        // creatures from a combination of textbooks, guest lectures, and lab work.
        // Expect to be excited!"
        // If set, this field must be a valid UTF-8 string and no longer than 30,000
        // characters.
        description?: string,
        // The email address of a Google group containing all teachers of the course.
        // This group does not accept email and can only be used for permissions.
        // 
        // Read-only.
        teacherGroupEmail?: string,
        // Creation time of the course.
        // Specifying this field in a course update mask results in an error.
        // 
        // Read-only.
        creationTime?: string,
        // Name of the course.
        // For example, "10th Grade Biology".
        // The name is required. It must be between 1 and 750 characters and a valid
        // UTF-8 string.
        name?: string,
        // Information about a Drive Folder that is shared with all teachers of the
        // course.
        // 
        // This field will only be set for teachers of the course and domain administrators.
        // 
        // Read-only.
        teacherFolder?: DriveFolder,
        // Section of the course.
        // For example, "Period 2".
        // If set, this field must be a valid UTF-8 string and no longer than 2800
        // characters.
        section?: string,
        // Identifier for this course assigned by Classroom.
        // 
        // When
        // creating a course,
        // you may optionally set this identifier to an
        // alias string in the
        // request to create a corresponding alias. The `id` is still assigned by
        // Classroom and cannot be updated after the course is created.
        // 
        // Specifying this field in a course update mask results in an error.
        id?: string,
        // Optional room location.
        // For example, "301".
        // If set, this field must be a valid UTF-8 string and no longer than 650
        // characters.
        room?: string,
        // The email address of a Google group containing all members of the course.
        // This group does not accept email and can only be used for permissions.
        // 
        // Read-only.
        courseGroupEmail?: string,
        // Sets of materials that appear on the "about" page of this course.
        // 
        // Read-only.
        courseMaterialSets?: CourseMaterialSet[],        
        // Enrollment code to use when joining this course.
        // Specifying this field in a course update mask results in an error.
        // 
        // Read-only.
        enrollmentCode?: string,
        // Optional heading for the description.
        // For example, "Welcome to 10th Grade Biology."
        // If set, this field must be a valid UTF-8 string and no longer than 3600
        // characters.
        descriptionHeading?: string,
        // Time of the most recent update to this course.
        // Specifying this field in a course update mask results in an error.
        // 
        // Read-only.
        updateTime?: string,
        // The Calendar ID for a calendar that all course members can see, to which
        // Classroom adds events for course work and announcements in the course.
        // 
        // Read-only.
        calendarId?: string,
        // Absolute link to this course in the Classroom web UI.
        // 
        // Read-only.
        alternateLink?: string,
        // Whether or not guardian notifications are enabled for this course.
        // 
        // Read-only.
        guardiansEnabled?: boolean,
        // State of the course.
        // If unspecified, the default state is `PROVISIONED`.
        courseState?: string,
        // The identifier of the owner of a course.
        // 
        // When specified as a parameter of a
        // create course request, this
        // field is required.
        // The identifier can be one of the following:
        // 
        // * the numeric identifier for the user
        // * the email address of the user
        // * the string literal `"me"`, indicating the requesting user
        // 
        // This must be set in a create request. Specifying this field in a course
        // update mask results in an `INVALID_ARGUMENT` error.
        ownerId?: string,
    }
    
    interface DriveFile {
        // Drive API resource ID.
        id?: string,
        // Title of the Drive item.
        // 
        // Read-only.
        title?: string,
        // URL that can be used to access the Drive item.
        // 
        // Read-only.
        alternateLink?: string,
        // URL of a thumbnail image of the Drive item.
        // 
        // Read-only.
        thumbnailUrl?: string,
    }
    
    interface ReturnStudentSubmissionRequest {
    }
    
    interface GlobalPermission {
        // Permission value.
        permission?: string,
    }
    
    interface Teacher {
        // Identifier of the course.
        // 
        // Read-only.
        courseId?: string,
        // Global user information for the teacher.
        // 
        // Read-only.
        profile?: UserProfile,
        // Identifier of the user.
        // 
        // When specified as a parameter of a request, this identifier can be one of
        // the following:
        // 
        // * the numeric identifier for the user
        // * the email address of the user
        // * the string literal `"me"`, indicating the requesting user
        userId?: string,
    }
    
    interface ReclaimStudentSubmissionRequest {
    }
    
    interface AssignmentSubmission {
        // Attachments added by the student.
        // Drive files that correspond to materials with a share mode of
        // STUDENT_COPY may not exist yet if the student has not accessed the
        // assignment in Classroom.
        // 
        // Some attachment metadata is only populated if the requesting user has
        // permission to access it. Identifier and alternate_link fields are always
        // available, but others (e.g. title) may not be.
        attachments?: Attachment[],        
    }
    
    interface Material {
        // Google Drive file material.
        driveFile?: SharedDriveFile,
        // Google Forms material.
        form?: Form,
        // Link material. On creation, will be upgraded to a more appropriate type
        // if possible, and this will be reflected in the response.
        link?: Link,
        // YouTube video material.
        youtubeVideo?: YouTubeVideo,
    }
    
    interface CourseWork {
        // Whether this course work item is associated with the Developer Console
        // project making the request.
        // 
        // See google.classroom.Work.CreateCourseWork for more
        // details.
        // 
        // Read-only.
        associatedWithDeveloper?: boolean,
        // Additional materials.
        // 
        // CourseWork must have no more than 20 material items.
        materials?: Material[],        
        // Timestamp of the most recent change to this course work.
        // 
        // Read-only.
        updateTime?: string,
        // Absolute link to this course work in the Classroom web UI.
        // This is only populated if `state` is `PUBLISHED`.
        // 
        // Read-only.
        alternateLink?: string,
        // Maximum grade for this course work.
        // If zero or unspecified, this assignment is considered ungraded.
        // This must be a non-negative integer value.
        maxPoints?: number,
        // Multiple choice question details.
        // For read operations, this field is populated only when `work_type` is
        // `MULTIPLE_CHOICE_QUESTION`.
        // For write operations, this field must be specified when creating course
        // work with a `work_type` of `MULTIPLE_CHOICE_QUESTION`, and it must not be
        // set otherwise.
        multipleChoiceQuestion?: MultipleChoiceQuestion,
        // Assignment details.
        // This is populated only when `work_type` is `ASSIGNMENT`.
        // 
        // Read-only.
        assignment?: Assignment,
        // Type of this course work.
        // 
        // The type is set when the course work is created and cannot be changed.
        workType?: string,
        // Optional description of this course work.
        // If set, the description must be a valid UTF-8 string containing no more
        // than 30,000 characters.
        description?: string,
        // Optional timestamp when this course work is scheduled to be published.
        scheduledTime?: string,
        // Timestamp when this course work was created.
        // 
        // Read-only.
        creationTime?: string,
        // Optional date, in UTC, that submissions for this this course work are due.
        // This must be specified if `due_time` is specified.
        dueDate?: Date,
        // Setting to determine when students are allowed to modify submissions.
        // If unspecified, the default value is `MODIFIABLE_UNTIL_TURNED_IN`.
        submissionModificationMode?: string,
        // Status of this course work.
        // If unspecified, the default state is `DRAFT`.
        state?: string,
        // Identifier of the course.
        // 
        // Read-only.
        courseId?: string,
        // Classroom-assigned identifier of this course work, unique per course.
        // 
        // Read-only.
        id?: string,
        // Optional time of day, in UTC, that submissions for this this course work
        // are due.
        // This must be specified if `due_date` is specified.
        dueTime?: TimeOfDay,
        // Title of this course work.
        // The title must be a valid UTF-8 string containing between 1 and 3000
        // characters.
        title?: string,
    }
    
    interface Guardian {
        // Identifier for the student to whom the guardian relationship applies.
        studentId?: string,
        // The email address to which the initial guardian invitation was sent.
        // This field is only visible to domain administrators.
        invitedEmailAddress?: string,
        // Identifier for the guardian.
        guardianId?: string,
        // User profile for the guardian.
        guardianProfile?: UserProfile,
    }
    
    interface ListStudentsResponse {
        // Token identifying the next page of results to return. If empty, no further
        // results are available.
        nextPageToken?: string,
        // Students who match the list request.
        students?: Student[],        
    }
    
    interface UserProfile {
        // Email address of the user.
        // 
        // Read-only.
        emailAddress?: string,
        // URL of user's profile photo.
        // 
        // Read-only.
        photoUrl?: string,
        // Global permissions of the user.
        // 
        // Read-only.
        permissions?: GlobalPermission[],        
        // Name of the user.
        // 
        // Read-only.
        name?: Name,
        // Identifier of the user.
        // 
        // Read-only.
        id?: string,
        // Represents whether a G Suite for Education user's domain administrator has
        // explicitly verified them as being a teacher. If the user is not a member of
        // a G Suite for Education domain, than this field will always be false.
        // 
        // Read-only
        verifiedTeacher?: boolean,
    }
    
    interface Student {
        // Identifier of the course.
        // 
        // Read-only.
        courseId?: string,
        // Information about a Drive Folder for this student's work in this course.
        // Only visible to the student and domain administrators.
        // 
        // Read-only.
        studentWorkFolder?: DriveFolder,
        // Global user information for the student.
        // 
        // Read-only.
        profile?: UserProfile,
        // Identifier of the user.
        // 
        // When specified as a parameter of a request, this identifier can be one of
        // the following:
        // 
        // * the numeric identifier for the user
        // * the email address of the user
        // * the string literal `"me"`, indicating the requesting user
        userId?: string,
    }
    
    interface Invitation {
        // Identifier of the invited user.
        // 
        // When specified as a parameter of a request, this identifier can be set to
        // one of the following:
        // 
        // * the numeric identifier for the user
        // * the email address of the user
        // * the string literal `"me"`, indicating the requesting user
        userId?: string,
        // Identifier of the course to invite the user to.
        courseId?: string,
        // Identifier assigned by Classroom.
        // 
        // Read-only.
        id?: string,
        // Role to invite the user to have.
        // Must not be `COURSE_ROLE_UNSPECIFIED`.
        role?: string,
    }
    
    interface DriveFolder {
        // Title of the Drive folder.
        // 
        // Read-only.
        title?: string,
        // URL that can be used to access the Drive folder.
        // 
        // Read-only.
        alternateLink?: string,
        // Drive API resource ID.
        id?: string,
    }
    
    interface InvitationsResource {
        // Accepts an invitation, removing it and adding the invited user to the
        // teachers or students (as appropriate) of the specified course. Only the
        // invited user may accept an invitation.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to accept the
        // requested invitation or for access errors.
        // * `FAILED_PRECONDITION` for the following request errors:
        //     * CourseMemberLimitReached
        //     * CourseNotModifiable
        //     * CourseTeacherLimitReached
        //     * UserGroupsMembershipLimitReached
        // * `NOT_FOUND` if no invitation exists with the requested ID.
        accept (request: {        
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
            // Identifier of the invitation to accept.
            id: string,
        }) : gapi.client.Request<Empty>;        
        
        // Deletes an invitation.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to delete the
        // requested invitation or for access errors.
        // * `NOT_FOUND` if no invitation exists with the requested ID.
        delete (request: {        
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
            // Identifier of the invitation to delete.
            id: string,
        }) : gapi.client.Request<Empty>;        
        
        // Returns a list of invitations that the requesting user is permitted to
        // view, restricted to those that match the list request.
        // 
        // *Note:* At least one of `user_id` or `course_id` must be supplied. Both
        // fields can be supplied.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` for access errors.
        list (request: {        
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
            // nextPageToken
            // value returned from a previous
            // list call, indicating
            // that the subsequent page of results should be returned.
            // 
            // The list request must be
            // otherwise identical to the one that resulted in this token.
            pageToken?: string,
            // Restricts returned invitations to those for a specific user. The identifier
            // can be one of the following:
            // 
            // * the numeric identifier for the user
            // * the email address of the user
            // * the string literal `"me"`, indicating the requesting user
            userId?: string,
            // Maximum number of items to return. Zero means no maximum.
            // 
            // The server may return fewer than the specified number of results.
            pageSize?: number,
            // Restricts returned invitations to those for a course with the specified
            // identifier.
            courseId?: string,
        }) : gapi.client.Request<ListInvitationsResponse>;        
        
        // Returns an invitation.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to view the
        // requested invitation or for access errors.
        // * `NOT_FOUND` if no invitation exists with the requested ID.
        get (request: {        
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
            // Identifier of the invitation to return.
            id: string,
        }) : gapi.client.Request<Invitation>;        
        
        // Creates an invitation. Only one invitation for a user and course may exist
        // at a time. Delete and re-create an invitation to make changes.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to create
        // invitations for this course or for access errors.
        // * `NOT_FOUND` if the course or the user does not exist.
        // * `FAILED_PRECONDITION` if the requested user's account is disabled or if
        // the user already has this role or a role with greater permissions.
        // * `ALREADY_EXISTS` if an invitation for the specified user and course
        // already exists.
        create (request: {        
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
        }) : gapi.client.Request<Invitation>;        
        
    }
    
    
    interface GuardianInvitationsResource {
        // Creates a guardian invitation, and sends an email to the guardian asking
        // them to confirm that they are the student's guardian.
        // 
        // Once the guardian accepts the invitation, their `state` will change to
        // `COMPLETED` and they will start receiving guardian notifications. A
        // `Guardian` resource will also be created to represent the active guardian.
        // 
        // The request object must have the `student_id` and
        // `invited_email_address` fields set. Failing to set these fields, or
        // setting any other fields in the request, will result in an error.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the current user does not have permission to
        //   manage guardians, if the guardian in question has already rejected
        //   too many requests for that student, if guardians are not enabled for the
        //   domain in question, or for other access errors.
        // * `RESOURCE_EXHAUSTED` if the student or guardian has exceeded the guardian
        //   link limit.
        // * `INVALID_ARGUMENT` if the guardian email address is not valid (for
        //   example, if it is too long), or if the format of the student ID provided
        //   cannot be recognized (it is not an email address, nor a `user_id` from
        //   this API). This error will also be returned if read-only fields are set,
        //   or if the `state` field is set to to a value other than `PENDING`.
        // * `NOT_FOUND` if the student ID provided is a valid student ID, but
        //   Classroom has no record of that student.
        // * `ALREADY_EXISTS` if there is already a pending guardian invitation for
        //   the student and `invited_email_address` provided, or if the provided
        //   `invited_email_address` matches the Google account of an existing
        //   `Guardian` for this user.
        create (request: {        
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
            // ID of the student (in standard format)
            studentId: string,
        }) : gapi.client.Request<GuardianInvitation>;        
        
        // Modifies a guardian invitation.
        // 
        // Currently, the only valid modification is to change the `state` from
        // `PENDING` to `COMPLETE`. This has the effect of withdrawing the invitation.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the current user does not have permission to
        //   manage guardians, if guardians are not enabled for the domain in question
        //   or for other access errors.
        // * `FAILED_PRECONDITION` if the guardian link is not in the `PENDING` state.
        // * `INVALID_ARGUMENT` if the format of the student ID provided
        //   cannot be recognized (it is not an email address, nor a `user_id` from
        //   this API), or if the passed `GuardianInvitation` has a `state` other than
        //   `COMPLETE`, or if it modifies fields other than `state`.
        // * `NOT_FOUND` if the student ID provided is a valid student ID, but
        //   Classroom has no record of that student, or if the `id` field does not
        //   refer to a guardian invitation known to Classroom.
        patch (request: {        
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
            // Mask that identifies which fields on the course to update.
            // This field is required to do an update. The update will fail if invalid
            // fields are specified. The following fields are valid:
            // 
            // * `state`
            // 
            // When set in a query parameter, this field should be specified as
            // 
            // `updateMask=<field1>,<field2>,...`
            updateMask?: string,
            // The `id` field of the `GuardianInvitation` to be modified.
            invitationId: string,
            // The ID of the student whose guardian invitation is to be modified.
            studentId: string,
        }) : gapi.client.Request<GuardianInvitation>;        
        
        // Returns a specific guardian invitation.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to view
        //   guardian invitations for the student identified by the `student_id`, if
        //   guardians are not enabled for the domain in question, or for other
        //   access errors.
        // * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot
        //   be recognized (it is not an email address, nor a `student_id` from the
        //   API, nor the literal string `me`).
        // * `NOT_FOUND` if Classroom cannot find any record of the given student or
        //   `invitation_id`. May also be returned if the student exists, but the
        //   requesting user does not have access to see that student.
        get (request: {        
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
            // The `id` field of the `GuardianInvitation` being requested.
            invitationId: string,
            // The ID of the student whose guardian invitation is being requested.
            studentId: string,
        }) : gapi.client.Request<GuardianInvitation>;        
        
        // Returns a list of guardian invitations that the requesting user is
        // permitted to view, filtered by the parameters provided.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting
        //   user is not permitted to view guardian invitations for that student, if
        //   `"-"` is specified as the `student_id` and the user is not a domain
        //   administrator, if guardians are not enabled for the domain in question,
        //   or for other access errors.
        // * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot
        //   be recognized (it is not an email address, nor a `student_id` from the
        //   API, nor the literal string `me`). May also be returned if an invalid
        //   `page_token` or `state` is provided.
        // * `NOT_FOUND` if a `student_id` is specified, and its format can be
        //   recognized, but Classroom has no record of that student.
        list (request: {        
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
            // The ID of the student whose guardian invitations are to be returned.
            // The identifier can be one of the following:
            // 
            // * the numeric identifier for the user
            // * the email address of the user
            // * the string literal `"me"`, indicating the requesting user
            // * the string literal `"-"`, indicating that results should be returned for
            //   all students that the requesting user is permitted to view guardian
            //   invitations.
            studentId: string,
            // nextPageToken
            // value returned from a previous
            // list call,
            // indicating that the subsequent page of results should be returned.
            // 
            // The list request
            // must be otherwise identical to the one that resulted in this token.
            pageToken?: string,
            // Maximum number of items to return. Zero or unspecified indicates that the
            // server may assign a maximum.
            // 
            // The server may return fewer than the specified number of results.
            pageSize?: number,
            // If specified, only results with the specified `state` values will be
            // returned. Otherwise, results with a `state` of `PENDING` will be returned.
            states?: string,
            // If specified, only results with the specified `invited_email_address`
            // will be returned.
            invitedEmailAddress?: string,
        }) : gapi.client.Request<ListGuardianInvitationsResponse>;        
        
    }
    
    
    interface GuardiansResource {
        // Deletes a guardian.
        // 
        // The guardian will no longer receive guardian notifications and the guardian
        // will no longer be accessible via the API.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if no user that matches the provided `student_id`
        //   is visible to the requesting user, if the requesting user is not
        //   permitted to manage guardians for the student identified by the
        //   `student_id`, if guardians are not enabled for the domain in question,
        //   or for other access errors.
        // * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot
        //   be recognized (it is not an email address, nor a `student_id` from the
        //   API).
        // * `NOT_FOUND` if the requesting user is permitted to modify guardians for
        //   the requested `student_id`, but no `Guardian` record exists for that
        //   student with the provided `guardian_id`.
        delete (request: {        
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
            // The student whose guardian is to be deleted. One of the following:
            // 
            // * the numeric identifier for the user
            // * the email address of the user
            // * the string literal `"me"`, indicating the requesting user
            studentId: string,
            // The `id` field from a `Guardian`.
            guardianId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Returns a specific guardian.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if no user that matches the provided `student_id`
        //   is visible to the requesting user, if the requesting user is not
        //   permitted to view guardian information for the student identified by the
        //   `student_id`, if guardians are not enabled for the domain in question,
        //   or for other access errors.
        // * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot
        //   be recognized (it is not an email address, nor a `student_id` from the
        //   API, nor the literal string `me`).
        // * `NOT_FOUND` if the requesting user is permitted to view guardians for
        //   the requested `student_id`, but no `Guardian` record exists for that
        //   student that matches the provided `guardian_id`.
        get (request: {        
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
            // The student whose guardian is being requested. One of the following:
            // 
            // * the numeric identifier for the user
            // * the email address of the user
            // * the string literal `"me"`, indicating the requesting user
            studentId: string,
            // The `id` field from a `Guardian`.
            guardianId: string,
        }) : gapi.client.Request<Guardian>;        
        
        // Returns a list of guardians that the requesting user is permitted to
        // view, restricted to those that match the request.
        // 
        // To list guardians for any student that the requesting user may view
        // guardians for, use the literal character `-` for the student ID.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting
        //   user is not permitted to view guardian information for that student, if
        //   `"-"` is specified as the `student_id` and the user is not a domain
        //   administrator, if guardians are not enabled for the domain in question,
        //   if the `invited_email_address` filter is set by a user who is not a
        //   domain administrator, or for other access errors.
        // * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot
        //   be recognized (it is not an email address, nor a `student_id` from the
        //   API, nor the literal string `me`). May also be returned if an invalid
        //   `page_token` is provided.
        // * `NOT_FOUND` if a `student_id` is specified, and its format can be
        //   recognized, but Classroom has no record of that student.
        list (request: {        
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
            // Filter results by the student who the guardian is linked to.
            // The identifier can be one of the following:
            // 
            // * the numeric identifier for the user
            // * the email address of the user
            // * the string literal `"me"`, indicating the requesting user
            // * the string literal `"-"`, indicating that results should be returned for
            //   all students that the requesting user has access to view.
            studentId: string,
            // nextPageToken
            // value returned from a previous
            // list call,
            // indicating that the subsequent page of results should be returned.
            // 
            // The list request
            // must be otherwise identical to the one that resulted in this token.
            pageToken?: string,
            // Maximum number of items to return. Zero or unspecified indicates that the
            // server may assign a maximum.
            // 
            // The server may return fewer than the specified number of results.
            pageSize?: number,
            // Filter results by the email address that the original invitation was sent
            // to, resulting in this guardian link.
            // This filter can only be used by domain administrators.
            invitedEmailAddress?: string,
        }) : gapi.client.Request<ListGuardiansResponse>;        
        
    }
    
    
    interface UserProfilesResource {
        // Returns a user profile.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to access
        // this user profile, if no profile exists with the requested ID, or for
        // access errors.
        get (request: {        
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
            // Identifier of the profile to return. The identifier can be one of the
            // following:
            // 
            // * the numeric identifier for the user
            // * the email address of the user
            // * the string literal `"me"`, indicating the requesting user
            userId: string,
        }) : gapi.client.Request<UserProfile>;        
        
        guardianInvitations: GuardianInvitationsResource,
        guardians: GuardiansResource,
    }
    
    
    interface AliasesResource {
        // Deletes an alias of a course.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to remove the
        // alias or for access errors.
        // * `NOT_FOUND` if the alias does not exist.
        // * `FAILED_PRECONDITION` if the alias requested does not make sense for the
        //   requesting user or course (for example, if a user not in a domain
        //   attempts to delete a domain-scoped alias).
        delete (request: {        
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
            // Alias to delete.
            // This may not be the Classroom-assigned identifier.
            alias: string,
            // Identifier of the course whose alias should be deleted.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            courseId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Returns a list of aliases for a course.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
        // course or for access errors.
        // * `NOT_FOUND` if the course does not exist.
        list (request: {        
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
            // nextPageToken
            // value returned from a previous
            // list call,
            // indicating that the subsequent page of results should be returned.
            // 
            // The list request
            // must be otherwise identical to the one that resulted in this token.
            pageToken?: string,
            // Maximum number of items to return. Zero or unspecified indicates that the
            // server may assign a maximum.
            // 
            // The server may return fewer than the specified number of results.
            pageSize?: number,
            // The identifier of the course.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            courseId: string,
        }) : gapi.client.Request<ListCourseAliasesResponse>;        
        
        // Creates an alias for a course.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to create the
        // alias or for access errors.
        // * `NOT_FOUND` if the course does not exist.
        // * `ALREADY_EXISTS` if the alias already exists.
        // * `FAILED_PRECONDITION` if the alias requested does not make sense for the
        //   requesting user or course (for example, if a user not in a domain
        //   attempts to access a domain-scoped alias).
        create (request: {        
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
            // Identifier of the course to alias.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            courseId: string,
        }) : gapi.client.Request<CourseAlias>;        
        
    }
    
    
    interface StudentsResource {
        // Returns a list of students of this course that the requester
        // is permitted to view.
        // 
        // This method returns the following error codes:
        // 
        // * `NOT_FOUND` if the course does not exist.
        // * `PERMISSION_DENIED` for access errors.
        list (request: {        
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
            // nextPageToken
            // value returned from a previous
            // list call, indicating that
            // the subsequent page of results should be returned.
            // 
            // The list request must be
            // otherwise identical to the one that resulted in this token.
            pageToken?: string,
            // Maximum number of items to return. Zero means no maximum.
            // 
            // The server may return fewer than the specified number of results.
            pageSize?: number,
            // Identifier of the course.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            courseId: string,
        }) : gapi.client.Request<ListStudentsResponse>;        
        
        // Returns a student of a course.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to view
        // students of this course or for access errors.
        // * `NOT_FOUND` if no student of this course has the requested ID or if the
        // course does not exist.
        get (request: {        
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
            // Identifier of the course.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            courseId: string,
            // Identifier of the student to return. The identifier can be one of the
            // following:
            // 
            // * the numeric identifier for the user
            // * the email address of the user
            // * the string literal `"me"`, indicating the requesting user
            userId: string,
        }) : gapi.client.Request<Student>;        
        
        // Adds a user as a student of a course.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to create
        // students in this course or for access errors.
        // * `NOT_FOUND` if the requested course ID does not exist.
        // * `FAILED_PRECONDITION` if the requested user's account is disabled,
        // for the following request errors:
        //     * CourseMemberLimitReached
        //     * CourseNotModifiable
        //     * UserGroupsMembershipLimitReached
        // * `ALREADY_EXISTS` if the user is already a student or teacher in the
        // course.
        create (request: {        
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
            // Enrollment code of the course to create the student in.
            // This code is required if userId
            // corresponds to the requesting user; it may be omitted if the requesting
            // user has administrative permissions to create students for any user.
            enrollmentCode?: string,
            // Identifier of the course to create the student in.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            courseId: string,
        }) : gapi.client.Request<Student>;        
        
        // Deletes a student of a course.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to delete
        // students of this course or for access errors.
        // * `NOT_FOUND` if no student of this course has the requested ID or if the
        // course does not exist.
        delete (request: {        
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
            // Identifier of the course.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            courseId: string,
            // Identifier of the student to delete. The identifier can be one of the
            // following:
            // 
            // * the numeric identifier for the user
            // * the email address of the user
            // * the string literal `"me"`, indicating the requesting user
            userId: string,
        }) : gapi.client.Request<Empty>;        
        
    }
    
    
    interface StudentSubmissionsResource {
        // Returns a student submission.
        // 
        // Returning a student submission transfers ownership of attached Drive
        // files to the student and may also update the submission state.
        // Unlike the Classroom application, returning a student submission does not
        // set assignedGrade to the draftGrade value.
        // 
        // Only a teacher of the course that contains the requested student submission
        // may call this method.
        // 
        // This request must be made by the Developer Console project of the
        // [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
        // create the corresponding course work item.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
        // requested course or course work, return the requested student submission,
        // or for access errors.
        // * `INVALID_ARGUMENT` if the request is malformed.
        // * `NOT_FOUND` if the requested course, course work, or student submission
        // does not exist.
        return (request: {        
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
            // Identifier of the course work.
            courseWorkId: string,
            // Identifier of the course.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            courseId: string,
            // Identifier of the student submission.
            id: string,
        }) : gapi.client.Request<Empty>;        
        
        // Reclaims a student submission on behalf of the student that owns it.
        // 
        // Reclaiming a student submission transfers ownership of attached Drive
        // files to the student and update the submission state.
        // 
        // Only the student that owns the requested student submission may call this
        // method, and only for a student submission that has been turned in.
        // 
        // This request must be made by the Developer Console project of the
        // [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
        // create the corresponding course work item.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
        // requested course or course work, unsubmit the requested student submission,
        // or for access errors.
        // * `FAILED_PRECONDITION` if the student submission has not been turned in.
        // * `INVALID_ARGUMENT` if the request is malformed.
        // * `NOT_FOUND` if the requested course, course work, or student submission
        // does not exist.
        reclaim (request: {        
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
            // Identifier of the course work.
            courseWorkId: string,
            // Identifier of the course.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            courseId: string,
            // Identifier of the student submission.
            id: string,
        }) : gapi.client.Request<Empty>;        
        
        // Turns in a student submission.
        // 
        // Turning in a student submission transfers ownership of attached Drive
        // files to the teacher and may also update the submission state.
        // 
        // This may only be called by the student that owns the specified student
        // submission.
        // 
        // This request must be made by the Developer Console project of the
        // [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
        // create the corresponding course work item.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
        // requested course or course work, turn in the requested student submission,
        // or for access errors.
        // * `INVALID_ARGUMENT` if the request is malformed.
        // * `NOT_FOUND` if the requested course, course work, or student submission
        // does not exist.
        turnIn (request: {        
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
            // Identifier of the course work.
            courseWorkId: string,
            // Identifier of the course.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            courseId: string,
            // Identifier of the student submission.
            id: string,
        }) : gapi.client.Request<Empty>;        
        
        // Returns a list of student submissions that the requester is permitted to
        // view, factoring in the OAuth scopes of the request.
        // `-` may be specified as the `course_work_id` to include student
        // submissions for multiple course work items.
        // 
        // Course students may only view their own work. Course teachers
        // and domain administrators may view all student submissions.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
        // requested course or course work, or for access errors.
        // * `INVALID_ARGUMENT` if the request is malformed.
        // * `NOT_FOUND` if the requested course does not exist.
        list (request: {        
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
            // nextPageToken
            // value returned from a previous
            // list call,
            // indicating that the subsequent page of results should be returned.
            // 
            // The list request
            // must be otherwise identical to the one that resulted in this token.
            pageToken?: string,
            // Requested submission states. If specified, returned student submissions
            // match one of the specified submission states.
            states?: string,
            // Maximum number of items to return. Zero or unspecified indicates that the
            // server may assign a maximum.
            // 
            // The server may return fewer than the specified number of results.
            pageSize?: number,
            // Optional argument to restrict returned student work to those owned by the
            // student with the specified identifier. The identifier can be one of the
            // following:
            // 
            // * the numeric identifier for the user
            // * the email address of the user
            // * the string literal `"me"`, indicating the requesting user
            userId?: string,
            // Identifer of the student work to request.
            // This may be set to the string literal `"-"` to request student work for
            // all course work in the specified course.
            courseWorkId: string,
            // Identifier of the course.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            courseId: string,
            // Requested lateness value. If specified, returned student submissions are
            // restricted by the requested value.
            // If unspecified, submissions are returned regardless of `late` value.
            late?: string,
        }) : gapi.client.Request<ListStudentSubmissionsResponse>;        
        
        // Modifies attachments of student submission.
        // 
        // Attachments may only be added to student submissions belonging to course
        // work objects with a `workType` of `ASSIGNMENT`.
        // 
        // This request must be made by the Developer Console project of the
        // [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
        // create the corresponding course work item.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
        // requested course or course work, if the user is not permitted to modify
        // attachments on the requested student submission, or for
        // access errors.
        // * `INVALID_ARGUMENT` if the request is malformed.
        // * `NOT_FOUND` if the requested course, course work, or student submission
        // does not exist.
        modifyAttachments (request: {        
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
            // Identifier of the course work.
            courseWorkId: string,
            // Identifier of the course.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            courseId: string,
            // Identifier of the student submission.
            id: string,
        }) : gapi.client.Request<StudentSubmission>;        
        
        // Updates one or more fields of a student submission.
        // 
        // See google.classroom.v1.StudentSubmission for details
        // of which fields may be updated and who may change them.
        // 
        // This request must be made by the Developer Console project of the
        // [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
        // create the corresponding course work item.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting developer project did not create
        // the corresponding course work, if the user is not permitted to make the
        // requested modification to the student submission, or for
        // access errors.
        // * `INVALID_ARGUMENT` if the request is malformed.
        // * `NOT_FOUND` if the requested course, course work, or student submission
        // does not exist.
        patch (request: {        
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
            // Mask that identifies which fields on the student submission to update.
            // This field is required to do an update. The update fails if invalid
            // fields are specified.
            // 
            // The following fields may be specified by teachers:
            // * `draft_grade`
            // * `assigned_grade`
            updateMask?: string,
            // Identifier of the course work.
            courseWorkId: string,
            // Identifier of the course.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            courseId: string,
            // Identifier of the student submission.
            id: string,
        }) : gapi.client.Request<StudentSubmission>;        
        
        // Returns a student submission.
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
        // requested course, course work, or student submission or for
        // access errors.
        // * `INVALID_ARGUMENT` if the request is malformed.
        // * `NOT_FOUND` if the requested course, course work, or student submission
        // does not exist.
        get (request: {        
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
            // Identifier of the course work.
            courseWorkId: string,
            // Identifier of the course.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            courseId: string,
            // Identifier of the student submission.
            id: string,
        }) : gapi.client.Request<StudentSubmission>;        
        
    }
    
    
    interface CourseWorkResource {
        // Deletes a course work.
        // 
        // This request must be made by the Developer Console project of the
        // [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
        // create the corresponding course work item.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting developer project did not create
        // the corresponding course work, if the requesting user is not permitted
        // to delete the requested course or for access errors.
        // * `FAILED_PRECONDITION` if the requested course work has already been
        // deleted.
        // * `NOT_FOUND` if no course exists with the requested ID.
        delete (request: {        
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
            // Identifier of the course.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            courseId: string,
            // Identifier of the course work to delete.
            // This identifier is a Classroom-assigned identifier.
            id: string,
        }) : gapi.client.Request<Empty>;        
        
        // Returns a list of course work that the requester is permitted to view.
        // 
        // Course students may only view `PUBLISHED` course work. Course teachers
        // and domain administrators may view all course work.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to access
        // the requested course or for access errors.
        // * `INVALID_ARGUMENT` if the request is malformed.
        // * `NOT_FOUND` if the requested course does not exist.
        list (request: {        
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
            // Maximum number of items to return. Zero or unspecified indicates that the
            // server may assign a maximum.
            // 
            // The server may return fewer than the specified number of results.
            pageSize?: number,
            // Restriction on the work status to return. Only courseWork that matches
            // is returned. If unspecified, items with a work status of `PUBLISHED`
            // is returned.
            courseWorkStates?: string,
            // Identifier of the course.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            courseId: string,
            // nextPageToken
            // value returned from a previous
            // list call,
            // indicating that the subsequent page of results should be returned.
            // 
            // The list request
            // must be otherwise identical to the one that resulted in this token.
            pageToken?: string,
            // Optional sort ordering for results. A comma-separated list of fields with
            // an optional sort direction keyword. Supported fields are `updateTime`
            // and `dueDate`. Supported direction keywords are `asc` and `desc`.
            // If not specified, `updateTime desc` is the default behavior.
            // Examples: `dueDate asc,updateTime desc`, `updateTime,dueDate desc`
            orderBy?: string,
        }) : gapi.client.Request<ListCourseWorkResponse>;        
        
        // Returns course work.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
        // requested course or course work, or for access errors.
        // * `INVALID_ARGUMENT` if the request is malformed.
        // * `NOT_FOUND` if the requested course or course work does not exist.
        get (request: {        
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
            // Identifier of the course.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            courseId: string,
            // Identifier of the course work.
            id: string,
        }) : gapi.client.Request<CourseWork>;        
        
        // Updates one or more fields of a course work.
        // 
        // See google.classroom.v1.CourseWork for details
        // of which fields may be updated and who may change them.
        // 
        // This request must be made by the Developer Console project of the
        // [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
        // create the corresponding course work item.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting developer project did not create
        // the corresponding course work, if the user is not permitted to make the
        // requested modification to the student submission, or for
        // access errors.
        // * `INVALID_ARGUMENT` if the request is malformed.
        // * `FAILED_PRECONDITION` if the requested course work has already been
        // deleted.
        // * `NOT_FOUND` if the requested course, course work, or student submission
        // does not exist.
        patch (request: {        
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
            // Identifier of the course.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            courseId: string,
            // Identifier of the course work.
            id: string,
            // Mask that identifies which fields on the course work to update.
            // This field is required to do an update. The update fails if invalid
            // fields are specified. If a field supports empty values, it can be cleared
            // by specifying it in the update mask and not in the CourseWork object. If a
            // field that does not support empty values is included in the update mask and
            // not set in the CourseWork object, an `INVALID_ARGUMENT` error will be
            // returned.
            // 
            // The following fields may be specified by teachers:
            // * `title`
            // * `description`
            // * `state`
            // * `due_date`
            // * `due_time`
            // * `max_points`
            // * `scheduled_time`
            // * `submission_modification_mode`
            updateMask?: string,
        }) : gapi.client.Request<CourseWork>;        
        
        // Creates course work.
        // 
        // The resulting course work (and corresponding student submissions) are
        // associated with the Developer Console project of the
        // [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
        // make the request. Classroom API requests to modify course work and student
        // submissions must be made with an OAuth client ID from the associated
        // Developer Console project.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
        // requested course, create course work in the requested course, share a
        // Drive attachment, or for access errors.
        // * `INVALID_ARGUMENT` if the request is malformed.
        // * `NOT_FOUND` if the requested course does not exist.
        // * `FAILED_PRECONDITION` for the following request error:
        //     * AttachmentNotVisible
        create (request: {        
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
            // Identifier of the course.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            courseId: string,
        }) : gapi.client.Request<CourseWork>;        
        
        studentSubmissions: StudentSubmissionsResource,
    }
    
    
    interface TeachersResource {
        // Deletes a teacher of a course.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to delete
        // teachers of this course or for access errors.
        // * `NOT_FOUND` if no teacher of this course has the requested ID or if the
        // course does not exist.
        // * `FAILED_PRECONDITION` if the requested ID belongs to the primary teacher
        // of this course.
        delete (request: {        
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
            // Identifier of the course.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            courseId: string,
            // Identifier of the teacher to delete. The identifier can be one of the
            // following:
            // 
            // * the numeric identifier for the user
            // * the email address of the user
            // * the string literal `"me"`, indicating the requesting user
            userId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Returns a list of teachers of this course that the requester
        // is permitted to view.
        // 
        // This method returns the following error codes:
        // 
        // * `NOT_FOUND` if the course does not exist.
        // * `PERMISSION_DENIED` for access errors.
        list (request: {        
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
            // nextPageToken
            // value returned from a previous
            // list call, indicating that
            // the subsequent page of results should be returned.
            // 
            // The list request must be
            // otherwise identical to the one that resulted in this token.
            pageToken?: string,
            // Maximum number of items to return. Zero means no maximum.
            // 
            // The server may return fewer than the specified number of results.
            pageSize?: number,
            // Identifier of the course.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            courseId: string,
        }) : gapi.client.Request<ListTeachersResponse>;        
        
        // Returns a teacher of a course.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to view
        // teachers of this course or for access errors.
        // * `NOT_FOUND` if no teacher of this course has the requested ID or if the
        // course does not exist.
        get (request: {        
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
            // Identifier of the course.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            courseId: string,
            // Identifier of the teacher to return. The identifier can be one of the
            // following:
            // 
            // * the numeric identifier for the user
            // * the email address of the user
            // * the string literal `"me"`, indicating the requesting user
            userId: string,
        }) : gapi.client.Request<Teacher>;        
        
        // Creates a teacher of a course.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not  permitted to create
        // teachers in this course or for access errors.
        // * `NOT_FOUND` if the requested course ID does not exist.
        // * `FAILED_PRECONDITION` if the requested user's account is disabled,
        // for the following request errors:
        //     * CourseMemberLimitReached
        //     * CourseNotModifiable
        //     * CourseTeacherLimitReached
        //     * UserGroupsMembershipLimitReached
        // * `ALREADY_EXISTS` if the user is already a teacher or student in the
        // course.
        create (request: {        
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
            // Identifier of the course.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            courseId: string,
        }) : gapi.client.Request<Teacher>;        
        
    }
    
    
    interface CoursesResource {
        // Returns a course.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
        // requested course or for access errors.
        // * `NOT_FOUND` if no course exists with the requested ID.
        get (request: {        
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
            // Identifier of the course to return.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            id: string,
        }) : gapi.client.Request<Course>;        
        
        // Updates one or more fields in a course.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to modify the
        // requested course or for access errors.
        // * `NOT_FOUND` if no course exists with the requested ID.
        // * `INVALID_ARGUMENT` if invalid fields are specified in the update mask or
        // if no update mask is supplied.
        // * `FAILED_PRECONDITION` for the following request errors:
        //     * CourseNotModifiable
        patch (request: {        
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
            // Identifier of the course to update.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            id: string,
            // Mask that identifies which fields on the course to update.
            // This field is required to do an update. The update will fail if invalid
            // fields are specified. The following fields are valid:
            // 
            // * `name`
            // * `section`
            // * `descriptionHeading`
            // * `description`
            // * `room`
            // * `courseState`
            // 
            // When set in a query parameter, this field should be specified as
            // 
            // `updateMask=<field1>,<field2>,...`
            updateMask?: string,
        }) : gapi.client.Request<Course>;        
        
        // Updates a course.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to modify the
        // requested course or for access errors.
        // * `NOT_FOUND` if no course exists with the requested ID.
        // * `FAILED_PRECONDITION` for the following request errors:
        //     * CourseNotModifiable
        update (request: {        
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
            // Identifier of the course to update.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            id: string,
        }) : gapi.client.Request<Course>;        
        
        // Deletes a course.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to delete the
        // requested course or for access errors.
        // * `NOT_FOUND` if no course exists with the requested ID.
        delete (request: {        
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
            // Identifier of the course to delete.
            // This identifier can be either the Classroom-assigned identifier or an
            // alias.
            id: string,
        }) : gapi.client.Request<Empty>;        
        
        // Returns a list of courses that the requesting user is permitted to view,
        // restricted to those that match the request.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` for access errors.
        // * `INVALID_ARGUMENT` if the query argument is malformed.
        // * `NOT_FOUND` if any users specified in the query arguments do not exist.
        list (request: {        
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
            // Restricts returned courses to those having a student with the specified
            // identifier. The identifier can be one of the following:
            // 
            // * the numeric identifier for the user
            // * the email address of the user
            // * the string literal `"me"`, indicating the requesting user
            studentId?: string,
            // nextPageToken
            // value returned from a previous
            // list call,
            // indicating that the subsequent page of results should be returned.
            // 
            // The list request must be
            // otherwise identical to the one that resulted in this token.
            pageToken?: string,
            // Maximum number of items to return. Zero or unspecified indicates that the
            // server may assign a maximum.
            // 
            // The server may return fewer than the specified number of results.
            pageSize?: number,
            // Restricts returned courses to those in one of the specified states
            // The default value is ACTIVE, ARCHIVED, PROVISIONED, DECLINED.
            courseStates?: string,
            // Restricts returned courses to those having a teacher with the specified
            // identifier. The identifier can be one of the following:
            // 
            // * the numeric identifier for the user
            // * the email address of the user
            // * the string literal `"me"`, indicating the requesting user
            teacherId?: string,
        }) : gapi.client.Request<ListCoursesResponse>;        
        
        // Creates a course.
        // 
        // The user specified in `ownerId` is the owner of the created course
        // and added as a teacher.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to create
        // courses or for access errors.
        // * `NOT_FOUND` if the primary teacher is not a valid user.
        // * `FAILED_PRECONDITION` if the course owner's account is disabled or for
        // the following request errors:
        //     * UserGroupsMembershipLimitReached
        // * `ALREADY_EXISTS` if an alias was specified in the `id` and
        // already exists.
        create (request: {        
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
        }) : gapi.client.Request<Course>;        
        
        aliases: AliasesResource,
        students: StudentsResource,
        courseWork: CourseWorkResource,
        teachers: TeachersResource,
    }
    
}

declare module gapi.client.classroom {
    var invitations: gapi.client.classroom.InvitationsResource; 
    
    var userProfiles: gapi.client.classroom.UserProfilesResource; 
    
    var courses: gapi.client.classroom.CoursesResource; 
    
}
