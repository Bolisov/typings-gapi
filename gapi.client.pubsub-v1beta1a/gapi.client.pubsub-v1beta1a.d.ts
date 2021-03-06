// Type definitions for Google Google Cloud Pub/Sub API v1beta1a
// Project: https://cloud.google.com/pubsub/docs
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.pubsub {
    
    interface PushConfig {
        // A URL locating the endpoint to which messages should be pushed.
        // For example, a Webhook endpoint might use "https://example.com/push".
        pushEndpoint?: string,
    }
    
    interface PullRequest {
        // The subscription from which a message should be pulled.
        subscription?: string,
        // If this is specified as true the system will respond immediately even if
        // it is not able to return a message in the Pull response. Otherwise the
        // system is allowed to wait until at least one message is available rather
        // than returning FAILED_PRECONDITION. The client may cancel the request if
        // it does not wish to wait any longer for the response.
        returnImmediately?: boolean,
    }
    
    interface PubsubEvent {
        // A received message.
        message?: PubsubMessage,
        // The subscription that received the event.
        subscription?: string,
        // Indicates that this subscription has been deleted. (Note that pull
        // subscribers will always receive NOT_FOUND in response in their pull
        // request on the subscription, rather than seeing this boolean.)
        deleted?: boolean,
        // Indicates that this subscription has been truncated.
        truncated?: boolean,
    }
    
    interface ListSubscriptionsResponse {
        // The subscriptions that match the request.
        subscription?: Subscription[],        
        // If not empty, indicates that there are more subscriptions that match the
        // request and this value should be passed to the next
        // <code>ListSubscriptionsRequest</code> to continue.
        nextPageToken?: string,
    }
    
    interface PublishRequest {
        // The message in the request will be published on this topic.
        topic?: string,
        // The message to publish.
        message?: PubsubMessage,
    }
    
    interface PublishBatchResponse {
        // The server-assigned ID of each published message, in the same order as
        // the messages in the request. IDs are guaranteed to be unique within
        // the topic.
        messageIds?: string[],        
    }
    
    interface Subscription {
        // If push delivery is used with this subscription, this field is
        // used to configure it.
        pushConfig?: PushConfig,
        // For either push or pull delivery, the value is the maximum time after a
        // subscriber receives a message before the subscriber should acknowledge or
        // Nack the message. If the Ack deadline for a message passes without an
        // Ack or a Nack, the Pub/Sub system will eventually redeliver the message.
        // If a subscriber acknowledges after the deadline, the Pub/Sub system may
        // accept the Ack, but it is possible that the message has been already
        // delivered again. Multiple Acks to the message are allowed and will
        // succeed.
        // 
        // For push delivery, this value is used to set the request timeout for
        // the call to the push endpoint.
        // 
        // For pull delivery, this value is used as the initial value for the Ack
        // deadline. It may be overridden for each message using its corresponding
        // ack_id with <code>ModifyAckDeadline</code>.
        // While a message is outstanding (i.e. it has been delivered to a pull
        // subscriber and the subscriber has not yet Acked or Nacked), the Pub/Sub
        // system will not deliver that message to another pull subscriber
        // (on a best-effort basis).
        ackDeadlineSeconds?: number,
        // Name of the subscription.
        name?: string,
        // The name of the topic from which this subscription is receiving messages.
        topic?: string,
    }
    
    interface Topic {
        // Name of the topic.
        name?: string,
    }
    
    interface Label {
        // A string value.
        strValue?: string,
        // An integer value.
        numValue?: string,
        // The key of a label is a syntactically valid URL (as per RFC 1738) with
        // the "scheme" and initial slashes omitted and with the additional
        // restrictions noted below.  Each key should be globally unique.  The
        // "host" portion is called the "namespace" and is not necessarily
        // resolvable to a network endpoint.  Instead, the namespace indicates what
        // system or entity defines the semantics of the label.  Namespaces do not
        // restrict the set of objects to which a label may be associated.
        // 
        // Keys are defined by the following grammar:
        // 
        //   key          = hostname "/" kpath
        //   kpath        = ksegment *[ "/" ksegment ]
        //   ksegment     = alphadigit | *[ alphadigit | "-" | "_" | "." ]
        // 
        // where "hostname" and "alphadigit" are defined as in RFC 1738.
        // 
        // Example key:
        //   spanner.google.com/universe
        key?: string,
    }
    
    interface ModifyAckDeadlineRequest {
        // The new ack deadline with respect to the time this request was sent to the
        // Pub/Sub system. Must be >= 0. For example, if the value is 10, the new ack
        // deadline will expire 10 seconds after the ModifyAckDeadline call was made.
        // Specifying zero may immediately make the message available for another pull
        // request.
        ackDeadlineSeconds?: number,
        // List of acknowledgment IDs. Either this field or ack_id
        // should be populated, not both.
        ackIds?: string[],        
        // Next Index: 5
        // The name of the subscription from which messages are being pulled.
        subscription?: string,
        // The acknowledgment ID. Either this or ack_ids must be populated,
        // not both.
        ackId?: string,
    }
    
    interface PullBatchRequest {
        // The subscription from which messages should be pulled.
        subscription?: string,
        // If this is specified as true the system will respond immediately even if
        // it is not able to return a message in the Pull response. Otherwise the
        // system is allowed to wait until at least one message is available rather
        // than returning no messages. The client may cancel the request if it does
        // not wish to wait any longer for the response.
        returnImmediately?: boolean,
        // The maximum number of PubsubEvents returned for this request. The Pub/Sub
        // system may return fewer than the number of events specified.
        maxEvents?: number,
    }
    
    interface ModifyPushConfigRequest {
        // An empty <code>push_config</code> indicates that the Pub/Sub system should
        // pause pushing messages from the given subscription.
        pushConfig?: PushConfig,
        // The name of the subscription.
        subscription?: string,
    }
    
    interface PubsubMessage {
        // ID of this message assigned by the server at publication time. Guaranteed
        // to be unique within the topic. This value may be read by a subscriber
        // that receives a PubsubMessage via a Pull call or a push delivery. It must
        // not be populated by a publisher in a Publish call.
        messageId?: string,
        // The time at which the message was published.
        // The time is milliseconds since the UNIX epoch.
        publishTime?: string,
        // Optional list of labels for this message. Keys in this collection must
        // be unique.
        label?: Label[],        
        // The message payload.
        data?: string,
    }
    
    interface AcknowledgeRequest {
        // The subscription whose message is being acknowledged.
        subscription?: string,
        // The acknowledgment ID for the message being acknowledged. This was
        // returned by the Pub/Sub system in the Pull response.
        ackId?: string[],        
    }
    
    interface PullBatchResponse {
        // Received Pub/Sub messages or status events. The Pub/Sub system will return
        // zero messages if there are no more messages available in the backlog. The
        // Pub/Sub system may return fewer than the max_events requested even if
        // there are more messages available in the backlog.
        pullResponses?: PullResponse[],        
    }
    
    interface Empty {
    }
    
    interface PublishBatchRequest {
        // The messages to publish.
        messages?: PubsubMessage[],        
        // The messages in the request will be published on this topic.
        topic?: string,
    }
    
    interface ListTopicsResponse {
        // If not empty, indicates that there are more topics that match the request,
        // and this value should be passed to the next <code>ListTopicsRequest</code>
        // to continue.
        nextPageToken?: string,
        // The resulting topics.
        topic?: Topic[],        
    }
    
    interface PullResponse {
        // A pubsub message or truncation event.
        pubsubEvent?: PubsubEvent,
        // This ID must be used to acknowledge the received event or message.
        ackId?: string,
    }
    
    interface SubscriptionsResource {
        // Creates a subscription on a given topic for a given subscriber.
        // If the subscription already exists, returns ALREADY_EXISTS.
        // If the corresponding topic doesn't exist, returns NOT_FOUND.
        // 
        // If the name is not provided in the request, the server will assign a random
        // name for this subscription on the same project as the topic.
        create (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
        }) : gapi.client.Request<Subscription>;        
        
        // Acknowledges a particular received message: the Pub/Sub system can remove
        // the given message from the subscription. Acknowledging a message whose
        // Ack deadline has expired may succeed, but the message could have been
        // already redelivered. Acknowledging a message more than once will not
        // result in an error. This is only used for messages received via pull.
        acknowledge (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
        }) : gapi.client.Request<Empty>;        
        
        // Modifies the Ack deadline for a message received from a pull request.
        modifyAckDeadline (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
        }) : gapi.client.Request<Empty>;        
        
        // Gets the configuration details of a subscription.
        get (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // The name of the subscription to get.
            subscription: string,
        }) : gapi.client.Request<Subscription>;        
        
        // Pulls messages from the server. Returns an empty list if there are no
        // messages available in the backlog. The system is free to return UNAVAILABLE
        // if there are too many pull requests outstanding for the given subscription.
        pullBatch (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
        }) : gapi.client.Request<PullBatchResponse>;        
        
        // Modifies the <code>PushConfig</code> for a specified subscription.
        // This method can be used to suspend the flow of messages to an endpoint
        // by clearing the <code>PushConfig</code> field in the request. Messages
        // will be accumulated for delivery even if no push configuration is
        // defined or while the configuration is modified.
        modifyPushConfig (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
        }) : gapi.client.Request<Empty>;        
        
        // Pulls a single message from the server.
        // If return_immediately is true, and no messages are available in the
        // subscription, this method returns FAILED_PRECONDITION. The system is free
        // to return an UNAVAILABLE error if no messages are available in a
        // reasonable amount of time (to reduce system load).
        pull (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
        }) : gapi.client.Request<PullResponse>;        
        
        // Deletes an existing subscription. All pending messages in the subscription
        // are immediately dropped. Calls to Pull after deletion will return
        // NOT_FOUND.
        delete (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // The subscription to delete.
            subscription: string,
        }) : gapi.client.Request<Empty>;        
        
        // Lists matching subscriptions.
        list (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // The value obtained in the last <code>ListSubscriptionsResponse</code>
            // for continuation.
            pageToken?: string,
            // Maximum number of subscriptions to return.
            maxResults?: number,
            // A valid label query expression.
            query?: string,
        }) : gapi.client.Request<ListSubscriptionsResponse>;        
        
    }
    
    
    interface TopicsResource {
        // Creates the given topic with the given name.
        create (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
        }) : gapi.client.Request<Topic>;        
        
        // Gets the configuration of a topic. Since the topic only has the name
        // attribute, this method is only useful to check the existence of a topic.
        // If other attributes are added in the future, they will be returned here.
        get (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // The name of the topic to get.
            topic: string,
        }) : gapi.client.Request<Topic>;        
        
        // Adds a message to the topic.  Returns NOT_FOUND if the topic does not
        // exist.
        publish (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
        }) : gapi.client.Request<Empty>;        
        
        // Deletes the topic with the given name. Returns NOT_FOUND if the topic does
        // not exist. After a topic is deleted, a new topic may be created with the
        // same name.
        delete (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // Name of the topic to delete.
            topic: string,
        }) : gapi.client.Request<Empty>;        
        
        // Adds one or more messages to the topic. Returns NOT_FOUND if the topic does
        // not exist.
        publishBatch (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
        }) : gapi.client.Request<PublishBatchResponse>;        
        
        // Lists matching topics.
        list (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
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
            // The value obtained in the last <code>ListTopicsResponse</code>
            // for continuation.
            pageToken?: string,
            // Maximum number of topics to return.
            maxResults?: number,
            // A valid label query expression.
            query?: string,
        }) : gapi.client.Request<ListTopicsResponse>;        
        
    }
    
}

declare module gapi.client.pubsub {
    var subscriptions: gapi.client.pubsub.SubscriptionsResource; 
    
    var topics: gapi.client.pubsub.TopicsResource; 
    
}
