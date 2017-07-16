// Type definitions for Google Gmail API v1
// Project: https://developers.google.com/gmail/api/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.gmail {
    
    interface AutoForwarding {
        // The state that a message should be left in after it has been forwarded.
        disposition?: string,
        // Email address to which all incoming messages are forwarded. This email address must be a verified member of the forwarding addresses.
        emailAddress?: string,
        // Whether all incoming mail is automatically forwarded to another address.
        enabled?: boolean,
    }
    
    interface BatchDeleteMessagesRequest {
        // The IDs of the messages to delete.
        ids?: string[],        
    }
    
    interface BatchModifyMessagesRequest {
        // A list of label IDs to add to messages.
        addLabelIds?: string[],        
        // The IDs of the messages to modify. There is a limit of 1000 ids per request.
        ids?: string[],        
        // A list of label IDs to remove from messages.
        removeLabelIds?: string[],        
    }
    
    interface Draft {
        // The immutable ID of the draft.
        id?: string,
        // The message content of the draft.
        message?: Message,
    }
    
    interface Filter {
        // Action that the filter performs.
        action?: FilterAction,
        // Matching criteria for the filter.
        criteria?: FilterCriteria,
        // The server assigned ID of the filter.
        id?: string,
    }
    
    interface FilterAction {
        // List of labels to add to the message.
        addLabelIds?: string[],        
        // Email address that the message should be forwarded to.
        forward?: string,
        // List of labels to remove from the message.
        removeLabelIds?: string[],        
    }
    
    interface FilterCriteria {
        // Whether the response should exclude chats.
        excludeChats?: boolean,
        // The sender's display name or email address.
        from?: string,
        // Whether the message has any attachment.
        hasAttachment?: boolean,
        // Only return messages not matching the specified query. Supports the same query format as the Gmail search box. For example, "from:someuser@example.com rfc822msgid: is:unread".
        negatedQuery?: string,
        // Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, "from:someuser@example.com rfc822msgid: is:unread".
        query?: string,
        // The size of the entire RFC822 message in bytes, including all headers and attachments.
        size?: number,
        // How the message size in bytes should be in relation to the size field.
        sizeComparison?: string,
        // Case-insensitive phrase found in the message's subject. Trailing and leading whitespace are be trimmed and adjacent spaces are collapsed.
        subject?: string,
        // The recipient's display name or email address. Includes recipients in the "to", "cc", and "bcc" header fields. You can use simply the local part of the email address. For example, "example" and "example@" both match "example@gmail.com". This field is case-insensitive.
        to?: string,
    }
    
    interface ForwardingAddress {
        // An email address to which messages can be forwarded.
        forwardingEmail?: string,
        // Indicates whether this address has been verified and is usable for forwarding. Read-only.
        verificationStatus?: string,
    }
    
    interface History {
        // The mailbox sequence ID.
        id?: string,
        // Labels added to messages in this history record.
        labelsAdded?: HistoryLabelAdded[],        
        // Labels removed from messages in this history record.
        labelsRemoved?: HistoryLabelRemoved[],        
        // List of messages changed in this history record. The fields for specific change types, such as messagesAdded may duplicate messages in this field. We recommend using the specific change-type fields instead of this.
        messages?: Message[],        
        // Messages added to the mailbox in this history record.
        messagesAdded?: HistoryMessageAdded[],        
        // Messages deleted (not Trashed) from the mailbox in this history record.
        messagesDeleted?: HistoryMessageDeleted[],        
    }
    
    interface HistoryLabelAdded {
        // Label IDs added to the message.
        labelIds?: string[],        
        // 
        message?: Message,
    }
    
    interface HistoryLabelRemoved {
        // Label IDs removed from the message.
        labelIds?: string[],        
        // 
        message?: Message,
    }
    
    interface HistoryMessageAdded {
        // 
        message?: Message,
    }
    
    interface HistoryMessageDeleted {
        // 
        message?: Message,
    }
    
    interface ImapSettings {
        // If this value is true, Gmail will immediately expunge a message when it is marked as deleted in IMAP. Otherwise, Gmail will wait for an update from the client before expunging messages marked as deleted.
        autoExpunge?: boolean,
        // Whether IMAP is enabled for the account.
        enabled?: boolean,
        // The action that will be executed on a message when it is marked as deleted and expunged from the last visible IMAP folder.
        expungeBehavior?: string,
        // An optional limit on the number of messages that an IMAP folder may contain. Legal values are 0, 1000, 2000, 5000 or 10000. A value of zero is interpreted to mean that there is no limit.
        maxFolderSize?: number,
    }
    
    interface Label {
        // The immutable ID of the label.
        id?: string,
        // The visibility of the label in the label list in the Gmail web interface.
        labelListVisibility?: string,
        // The visibility of the label in the message list in the Gmail web interface.
        messageListVisibility?: string,
        // The total number of messages with the label.
        messagesTotal?: number,
        // The number of unread messages with the label.
        messagesUnread?: number,
        // The display name of the label.
        name?: string,
        // The total number of threads with the label.
        threadsTotal?: number,
        // The number of unread threads with the label.
        threadsUnread?: number,
        // The owner type for the label. User labels are created by the user and can be modified and deleted by the user and can be applied to any message or thread. System labels are internally created and cannot be added, modified, or deleted. System labels may be able to be applied to or removed from messages and threads under some circumstances but this is not guaranteed. For example, users can apply and remove the INBOX and UNREAD labels from messages and threads, but cannot apply or remove the DRAFTS or SENT labels from messages or threads.
        type?: string,
    }
    
    interface ListDraftsResponse {
        // List of drafts.
        drafts?: Draft[],        
        // Token to retrieve the next page of results in the list.
        nextPageToken?: string,
        // Estimated total number of results.
        resultSizeEstimate?: number,
    }
    
    interface ListFiltersResponse {
        // List of a user's filters.
        filter?: Filter[],        
    }
    
    interface ListForwardingAddressesResponse {
        // List of addresses that may be used for forwarding.
        forwardingAddresses?: ForwardingAddress[],        
    }
    
    interface ListHistoryResponse {
        // List of history records. Any messages contained in the response will typically only have id and threadId fields populated.
        history?: History[],        
        // The ID of the mailbox's current history record.
        historyId?: string,
        // Page token to retrieve the next page of results in the list.
        nextPageToken?: string,
    }
    
    interface ListLabelsResponse {
        // List of labels.
        labels?: Label[],        
    }
    
    interface ListMessagesResponse {
        // List of messages.
        messages?: Message[],        
        // Token to retrieve the next page of results in the list.
        nextPageToken?: string,
        // Estimated total number of results.
        resultSizeEstimate?: number,
    }
    
    interface ListSendAsResponse {
        // List of send-as aliases.
        sendAs?: SendAs[],        
    }
    
    interface ListSmimeInfoResponse {
        // List of SmimeInfo.
        smimeInfo?: SmimeInfo[],        
    }
    
    interface ListThreadsResponse {
        // Page token to retrieve the next page of results in the list.
        nextPageToken?: string,
        // Estimated total number of results.
        resultSizeEstimate?: number,
        // List of threads.
        threads?: Thread[],        
    }
    
    interface Message {
        // The ID of the last history record that modified this message.
        historyId?: string,
        // The immutable ID of the message.
        id?: string,
        // The internal message creation timestamp (epoch ms), which determines ordering in the inbox. For normal SMTP-received email, this represents the time the message was originally accepted by Google, which is more reliable than the Date header. However, for API-migrated mail, it can be configured by client to be based on the Date header.
        internalDate?: string,
        // List of IDs of labels applied to this message.
        labelIds?: string[],        
        // The parsed email structure in the message parts.
        payload?: MessagePart,
        // The entire email message in an RFC 2822 formatted and base64url encoded string. Returned in messages.get and drafts.get responses when the format=RAW parameter is supplied.
        raw?: string,
        // Estimated size in bytes of the message.
        sizeEstimate?: number,
        // A short part of the message text.
        snippet?: string,
        // The ID of the thread the message belongs to. To add a message or draft to a thread, the following criteria must be met: 
        // - The requested threadId must be specified on the Message or Draft.Message you supply with your request. 
        // - The References and In-Reply-To headers must be set in compliance with the RFC 2822 standard. 
        // - The Subject headers must match.
        threadId?: string,
    }
    
    interface MessagePart {
        // The message part body for this part, which may be empty for container MIME message parts.
        body?: MessagePartBody,
        // The filename of the attachment. Only present if this message part represents an attachment.
        filename?: string,
        // List of headers on this message part. For the top-level message part, representing the entire message payload, it will contain the standard RFC 2822 email headers such as To, From, and Subject.
        headers?: MessagePartHeader[],        
        // The MIME type of the message part.
        mimeType?: string,
        // The immutable ID of the message part.
        partId?: string,
        // The child MIME message parts of this part. This only applies to container MIME message parts, for example multipart/*. For non- container MIME message part types, such as text/plain, this field is empty. For more information, see RFC 1521.
        parts?: MessagePart[],        
    }
    
    interface MessagePartBody {
        // When present, contains the ID of an external attachment that can be retrieved in a separate messages.attachments.get request. When not present, the entire content of the message part body is contained in the data field.
        attachmentId?: string,
        // The body data of a MIME message part as a base64url encoded string. May be empty for MIME container types that have no message body or when the body data is sent as a separate attachment. An attachment ID is present if the body data is contained in a separate attachment.
        data?: string,
        // Number of bytes for the message part data (encoding notwithstanding).
        size?: number,
    }
    
    interface MessagePartHeader {
        // The name of the header before the : separator. For example, To.
        name?: string,
        // The value of the header after the : separator. For example, someuser@example.com.
        value?: string,
    }
    
    interface ModifyMessageRequest {
        // A list of IDs of labels to add to this message.
        addLabelIds?: string[],        
        // A list IDs of labels to remove from this message.
        removeLabelIds?: string[],        
    }
    
    interface ModifyThreadRequest {
        // A list of IDs of labels to add to this thread.
        addLabelIds?: string[],        
        // A list of IDs of labels to remove from this thread.
        removeLabelIds?: string[],        
    }
    
    interface PopSettings {
        // The range of messages which are accessible via POP.
        accessWindow?: string,
        // The action that will be executed on a message after it has been fetched via POP.
        disposition?: string,
    }
    
    interface Profile {
        // The user's email address.
        emailAddress?: string,
        // The ID of the mailbox's current history record.
        historyId?: string,
        // The total number of messages in the mailbox.
        messagesTotal?: number,
        // The total number of threads in the mailbox.
        threadsTotal?: number,
    }
    
    interface SendAs {
        // A name that appears in the "From:" header for mail sent using this alias. For custom "from" addresses, when this is empty, Gmail will populate the "From:" header with the name that is used for the primary address associated with the account.
        displayName?: string,
        // Whether this address is selected as the default "From:" address in situations such as composing a new message or sending a vacation auto-reply. Every Gmail account has exactly one default send-as address, so the only legal value that clients may write to this field is true. Changing this from false to true for an address will result in this field becoming false for the other previous default address.
        isDefault?: boolean,
        // Whether this address is the primary address used to login to the account. Every Gmail account has exactly one primary address, and it cannot be deleted from the collection of send-as aliases. This field is read-only.
        isPrimary?: boolean,
        // An optional email address that is included in a "Reply-To:" header for mail sent using this alias. If this is empty, Gmail will not generate a "Reply-To:" header.
        replyToAddress?: string,
        // The email address that appears in the "From:" header for mail sent using this alias. This is read-only for all operations except create.
        sendAsEmail?: string,
        // An optional HTML signature that is included in messages composed with this alias in the Gmail web UI.
        signature?: string,
        // An optional SMTP service that will be used as an outbound relay for mail sent using this alias. If this is empty, outbound mail will be sent directly from Gmail's servers to the destination SMTP service. This setting only applies to custom "from" aliases.
        smtpMsa?: SmtpMsa,
        // Whether Gmail should  treat this address as an alias for the user's primary email address. This setting only applies to custom "from" aliases.
        treatAsAlias?: boolean,
        // Indicates whether this address has been verified for use as a send-as alias. Read-only. This setting only applies to custom "from" aliases.
        verificationStatus?: string,
    }
    
    interface SmimeInfo {
        // Encrypted key password, when key is encrypted.
        encryptedKeyPassword?: string,
        // When the certificate expires (in milliseconds since epoch).
        expiration?: string,
        // The immutable ID for the SmimeInfo.
        id?: string,
        // Whether this SmimeInfo is the default one for this user's send-as address.
        isDefault?: boolean,
        // The S/MIME certificate issuer's common name.
        issuerCn?: string,
        // PEM formatted X509 concatenated certificate string (standard base64 encoding). Format used for returning key, which includes public key as well as certificate chain (not private key).
        pem?: string,
        // PKCS#12 format containing a single private/public key pair and certificate chain. This format is only accepted from client for creating a new SmimeInfo and is never returned, because the private key is not intended to be exported. PKCS#12 may be encrypted, in which case encryptedKeyPassword should be set appropriately.
        pkcs12?: string,
    }
    
    interface SmtpMsa {
        // The hostname of the SMTP service. Required.
        host?: string,
        // The password that will be used for authentication with the SMTP service. This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.
        password?: string,
        // The port of the SMTP service. Required.
        port?: number,
        // The protocol that will be used to secure communication with the SMTP service. Required.
        securityMode?: string,
        // The username that will be used for authentication with the SMTP service. This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.
        username?: string,
    }
    
    interface Thread {
        // The ID of the last history record that modified this thread.
        historyId?: string,
        // The unique ID of the thread.
        id?: string,
        // The list of messages in the thread.
        messages?: Message[],        
        // A short part of the message text.
        snippet?: string,
    }
    
    interface VacationSettings {
        // Flag that controls whether Gmail automatically replies to messages.
        enableAutoReply?: boolean,
        // An optional end time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives before the end time. If both startTime and endTime are specified, startTime must precede endTime.
        endTime?: string,
        // Response body in HTML format. Gmail will sanitize the HTML before storing it.
        responseBodyHtml?: string,
        // Response body in plain text format.
        responseBodyPlainText?: string,
        // Optional text to prepend to the subject line in vacation responses. In order to enable auto-replies, either the response subject or the response body must be nonempty.
        responseSubject?: string,
        // Flag that determines whether responses are sent to recipients who are not in the user's list of contacts.
        restrictToContacts?: boolean,
        // Flag that determines whether responses are sent to recipients who are outside of the user's domain. This feature is only available for G Suite users.
        restrictToDomain?: boolean,
        // An optional start time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives after the start time. If both startTime and endTime are specified, startTime must precede endTime.
        startTime?: string,
    }
    
    interface WatchRequest {
        // Filtering behavior of labelIds list specified.
        labelFilterAction?: string,
        // List of label_ids to restrict notifications about. By default, if unspecified, all changes are pushed out. If specified then dictates which labels are required for a push notification to be generated.
        labelIds?: string[],        
        // A fully qualified Google Cloud Pub/Sub API topic name to publish the events to. This topic name **must** already exist in Cloud Pub/Sub and you **must** have already granted gmail "publish" permission on it. For example, "projects/my-project-identifier/topics/my-topic-name" (using the Cloud Pub/Sub "v1" topic naming format).
        // 
        // Note that the "my-project-identifier" portion must exactly match your Google developer project id (the one executing this watch request).
        topicName?: string,
    }
    
    interface WatchResponse {
        // When Gmail will stop sending notifications for mailbox updates (epoch millis). Call watch again before this time to renew the watch.
        expiration?: string,
        // The ID of the mailbox's current history record.
        historyId?: string,
    }
    
    interface DraftsResource {
        // Creates a new draft with the DRAFT label.
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
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<Draft>;        
        
        // Immediately and permanently deletes the specified draft. Does not simply trash it.
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
            // The ID of the draft to delete.
            id: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets the specified draft.
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
            // The format to return the draft in.
            format?: string,
            // The ID of the draft to retrieve.
            id: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<Draft>;        
        
        // Lists the drafts in the user's mailbox.
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
            // Include drafts from SPAM and TRASH in the results.
            includeSpamTrash?: boolean,
            // Maximum number of drafts to return.
            maxResults?: number,
            // Page token to retrieve a specific page of results in the list.
            pageToken?: string,
            // Only return draft messages matching the specified query. Supports the same query format as the Gmail search box. For example, "from:someuser@example.com rfc822msgid: is:unread".
            q?: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<ListDraftsResponse>;        
        
        // Sends the specified, existing draft to the recipients in the To, Cc, and Bcc headers.
        send (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<Message>;        
        
        // Replaces a draft's content.
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
            // The ID of the draft to update.
            id: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<Draft>;        
        
    }
    
    
    interface HistoryResource {
        // Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing historyId).
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
            // History types to be returned by the function
            historyTypes?: string,
            // Only return messages with a label matching the ID.
            labelId?: string,
            // The maximum number of history records to return.
            maxResults?: number,
            // Page token to retrieve a specific page of results in the list.
            pageToken?: string,
            // Required. Returns history records after the specified startHistoryId. The supplied startHistoryId should be obtained from the historyId of a message, thread, or previous list response. History IDs increase chronologically but are not contiguous with random gaps in between valid IDs. Supplying an invalid or out of date startHistoryId typically returns an HTTP 404 error code. A historyId is typically valid for at least a week, but in some rare circumstances may be valid for only a few hours. If you receive an HTTP 404 error response, your application should perform a full sync. If you receive no nextPageToken in the response, there are no updates to retrieve and you can store the returned historyId for a future request.
            startHistoryId?: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<ListHistoryResponse>;        
        
    }
    
    
    interface LabelsResource {
        // Creates a new label.
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
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<Label>;        
        
        // Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to.
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
            // The ID of the label to delete.
            id: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets the specified label.
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
            // The ID of the label to retrieve.
            id: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<Label>;        
        
        // Lists all labels in the user's mailbox.
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
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<ListLabelsResponse>;        
        
        // Updates the specified label. This method supports patch semantics.
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
            // The ID of the label to update.
            id: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<Label>;        
        
        // Updates the specified label.
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
            // The ID of the label to update.
            id: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<Label>;        
        
    }
    
    
    interface AttachmentsResource {
        // Gets the specified message attachment.
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
            // The ID of the attachment.
            id: string,
            // The ID of the message containing the attachment.
            messageId: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<MessagePartBody>;        
        
    }
    
    
    interface MessagesResource {
        // Deletes many messages by message ID. Provides no guarantees that messages were not already deleted or even existed at all.
        batchDelete (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<void>;        
        
        // Modifies the labels on the specified messages.
        batchModify (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<void>;        
        
        // Immediately and permanently deletes the specified message. This operation cannot be undone. Prefer messages.trash instead.
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
            // The ID of the message to delete.
            id: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets the specified message.
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
            // The format to return the message in.
            format?: string,
            // The ID of the message to retrieve.
            id: string,
            // When given and format is METADATA, only include headers specified.
            metadataHeaders?: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<Message>;        
        
        // Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. Does not send a message.
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
            // Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for G Suite accounts.
            deleted?: boolean,
            // Source for Gmail's internal date of the message.
            internalDateSource?: string,
            // Ignore the Gmail spam classifier decision and never mark this email as SPAM in the mailbox.
            neverMarkSpam?: boolean,
            // Process calendar invites in the email and add any extracted meetings to the Google Calendar for this user.
            processForCalendar?: boolean,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<Message>;        
        
        // Directly inserts a message into only this user's mailbox similar to IMAP APPEND, bypassing most scanning and classification. Does not send a message.
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
            // Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for G Suite accounts.
            deleted?: boolean,
            // Source for Gmail's internal date of the message.
            internalDateSource?: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<Message>;        
        
        // Lists the messages in the user's mailbox.
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
            // Include messages from SPAM and TRASH in the results.
            includeSpamTrash?: boolean,
            // Only return messages with labels that match all of the specified label IDs.
            labelIds?: string,
            // Maximum number of messages to return.
            maxResults?: number,
            // Page token to retrieve a specific page of results in the list.
            pageToken?: string,
            // Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, "from:someuser@example.com rfc822msgid:<somemsgid@example.com> is:unread". Parameter cannot be used when accessing the api using the gmail.metadata scope.
            q?: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<ListMessagesResponse>;        
        
        // Modifies the labels on the specified message.
        modify (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the message to modify.
            id: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<Message>;        
        
        // Sends the specified message to the recipients in the To, Cc, and Bcc headers.
        send (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<Message>;        
        
        // Moves the specified message to the trash.
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
            // The ID of the message to Trash.
            id: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<Message>;        
        
        // Removes the specified message from the trash.
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
            // The ID of the message to remove from Trash.
            id: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<Message>;        
        
        attachments: AttachmentsResource,
    }
    
    
    interface FiltersResource {
        // Creates a filter.
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
            // User's email address. The special value "me" can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<Filter>;        
        
        // Deletes a filter.
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
            // The ID of the filter to be deleted.
            id: string,
            // User's email address. The special value "me" can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets a filter.
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
            // The ID of the filter to be fetched.
            id: string,
            // User's email address. The special value "me" can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<Filter>;        
        
        // Lists the message filters of a Gmail user.
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
            // User's email address. The special value "me" can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<ListFiltersResponse>;        
        
    }
    
    
    interface ForwardingAddressesResource {
        // Creates a forwarding address. If ownership verification is required, a message will be sent to the recipient and the resource's verification status will be set to pending; otherwise, the resource will be created with verification status set to accepted.
        // 
        // This method is only available to service account clients that have been delegated domain-wide authority.
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
            // User's email address. The special value "me" can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<ForwardingAddress>;        
        
        // Deletes the specified forwarding address and revokes any verification that may have been required.
        // 
        // This method is only available to service account clients that have been delegated domain-wide authority.
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
            // The forwarding address to be deleted.
            forwardingEmail: string,
            // User's email address. The special value "me" can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets the specified forwarding address.
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
            // The forwarding address to be retrieved.
            forwardingEmail: string,
            // User's email address. The special value "me" can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<ForwardingAddress>;        
        
        // Lists the forwarding addresses for the specified account.
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
            // User's email address. The special value "me" can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<ListForwardingAddressesResponse>;        
        
    }
    
    
    interface SmimeInfoResource {
        // Deletes the specified S/MIME config for the specified send-as alias.
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
            // The immutable ID for the SmimeInfo.
            id: string,
            // The email address that appears in the "From:" header for mail sent using this alias.
            sendAsEmail: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets the specified S/MIME config for the specified send-as alias.
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
            // The immutable ID for the SmimeInfo.
            id: string,
            // The email address that appears in the "From:" header for mail sent using this alias.
            sendAsEmail: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<SmimeInfo>;        
        
        // Insert (upload) the given S/MIME config for the specified send-as alias. Note that pkcs12 format is required for the key.
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
            // The email address that appears in the "From:" header for mail sent using this alias.
            sendAsEmail: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<SmimeInfo>;        
        
        // Lists S/MIME configs for the specified send-as alias.
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
            // The email address that appears in the "From:" header for mail sent using this alias.
            sendAsEmail: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<ListSmimeInfoResponse>;        
        
        // Sets the default S/MIME config for the specified send-as alias.
        setDefault (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The immutable ID for the SmimeInfo.
            id: string,
            // The email address that appears in the "From:" header for mail sent using this alias.
            sendAsEmail: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<void>;        
        
    }
    
    
    interface SendAsResource {
        // Creates a custom "from" send-as alias. If an SMTP MSA is specified, Gmail will attempt to connect to the SMTP service to validate the configuration before creating the alias. If ownership verification is required for the alias, a message will be sent to the email address and the resource's verification status will be set to pending; otherwise, the resource will be created with verification status set to accepted. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias.
        // 
        // This method is only available to service account clients that have been delegated domain-wide authority.
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
            // User's email address. The special value "me" can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<SendAs>;        
        
        // Deletes the specified send-as alias. Revokes any verification that may have been required for using it.
        // 
        // This method is only available to service account clients that have been delegated domain-wide authority.
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
            // The send-as alias to be deleted.
            sendAsEmail: string,
            // User's email address. The special value "me" can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets the specified send-as alias. Fails with an HTTP 404 error if the specified address is not a member of the collection.
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
            // The send-as alias to be retrieved.
            sendAsEmail: string,
            // User's email address. The special value "me" can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<SendAs>;        
        
        // Lists the send-as aliases for the specified account. The result includes the primary send-as address associated with the account as well as any custom "from" aliases.
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
            // User's email address. The special value "me" can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<ListSendAsResponse>;        
        
        // Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias.
        // 
        // Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority. This method supports patch semantics.
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
            // The send-as alias to be updated.
            sendAsEmail: string,
            // User's email address. The special value "me" can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<SendAs>;        
        
        // Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias.
        // 
        // Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority.
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
            // The send-as alias to be updated.
            sendAsEmail: string,
            // User's email address. The special value "me" can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<SendAs>;        
        
        // Sends a verification email to the specified send-as alias address. The verification status must be pending.
        // 
        // This method is only available to service account clients that have been delegated domain-wide authority.
        verify (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The send-as alias to be verified.
            sendAsEmail: string,
            // User's email address. The special value "me" can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<void>;        
        
        smimeInfo: SmimeInfoResource,
    }
    
    
    interface SettingsResource {
        // Gets the auto-forwarding setting for the specified account.
        getAutoForwarding (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // User's email address. The special value "me" can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<AutoForwarding>;        
        
        // Gets IMAP settings.
        getImap (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // User's email address. The special value "me" can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<ImapSettings>;        
        
        // Gets POP settings.
        getPop (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // User's email address. The special value "me" can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<PopSettings>;        
        
        // Gets vacation responder settings.
        getVacation (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // User's email address. The special value "me" can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<VacationSettings>;        
        
        // Updates the auto-forwarding setting for the specified account. A verified forwarding address must be specified when auto-forwarding is enabled.
        // 
        // This method is only available to service account clients that have been delegated domain-wide authority.
        updateAutoForwarding (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // User's email address. The special value "me" can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<AutoForwarding>;        
        
        // Updates IMAP settings.
        updateImap (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // User's email address. The special value "me" can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<ImapSettings>;        
        
        // Updates POP settings.
        updatePop (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // User's email address. The special value "me" can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<PopSettings>;        
        
        // Updates vacation responder settings.
        updateVacation (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // User's email address. The special value "me" can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<VacationSettings>;        
        
        filters: FiltersResource,
        forwardingAddresses: ForwardingAddressesResource,
        sendAs: SendAsResource,
    }
    
    
    interface ThreadsResource {
        // Immediately and permanently deletes the specified thread. This operation cannot be undone. Prefer threads.trash instead.
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
            // ID of the Thread to delete.
            id: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets the specified thread.
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
            // The format to return the messages in.
            format?: string,
            // The ID of the thread to retrieve.
            id: string,
            // When given and format is METADATA, only include headers specified.
            metadataHeaders?: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<Thread>;        
        
        // Lists the threads in the user's mailbox.
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
            // Include threads from SPAM and TRASH in the results.
            includeSpamTrash?: boolean,
            // Only return threads with labels that match all of the specified label IDs.
            labelIds?: string,
            // Maximum number of threads to return.
            maxResults?: number,
            // Page token to retrieve a specific page of results in the list.
            pageToken?: string,
            // Only return threads matching the specified query. Supports the same query format as the Gmail search box. For example, "from:someuser@example.com rfc822msgid: is:unread". Parameter cannot be used when accessing the api using the gmail.metadata scope.
            q?: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<ListThreadsResponse>;        
        
        // Modifies the labels applied to the thread. This applies to all messages in the thread.
        modify (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the thread to modify.
            id: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<Thread>;        
        
        // Moves the specified thread to the trash.
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
            // The ID of the thread to Trash.
            id: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<Thread>;        
        
        // Removes the specified thread from the trash.
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
            // The ID of the thread to remove from Trash.
            id: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<Thread>;        
        
    }
    
    
    interface UsersResource {
        // Gets the current user's Gmail profile.
        getProfile (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<Profile>;        
        
        // Stop receiving push notifications for the given user mailbox.
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
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<void>;        
        
        // Set up or update a push notification watch on the given user mailbox.
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
            // The user's email address. The special value me can be used to indicate the authenticated user.
            userId: string,
        }) : gapi.client.Request<WatchResponse>;        
        
        drafts: DraftsResource,
        history: HistoryResource,
        labels: LabelsResource,
        messages: MessagesResource,
        settings: SettingsResource,
        threads: ThreadsResource,
    }
    
}

declare module gapi.client.gmail {
    var users: gapi.client.gmail.UsersResource; 
    
}
