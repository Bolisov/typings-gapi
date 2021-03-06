// Type definitions for Google TaskQueue API v1beta1
// Project: https://developers.google.com/appengine/docs/python/taskqueue/rest
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.taskqueue {
    
    interface Task {
        // Time (in seconds since the epoch) at which the task was enqueued.
        enqueueTimestamp?: string,
        // Name of the task.
        id?: string,
        // The kind of object returned, in this case set to task.
        kind?: string,
        // Time (in seconds since the epoch) at which the task lease will expire. This value is 0 if the task isnt currently leased out to a worker.
        leaseTimestamp?: string,
        // A bag of bytes which is the task payload. The payload on the JSON side is always Base64 encoded.
        payloadBase64?: string,
        // Name of the queue that the task is in.
        queueName?: string,
    }
    
    interface TaskQueue {
        // ACLs that are applicable to this TaskQueue object.
        acl?: {        
            // Email addresses of users who are "admins" of the TaskQueue. This means they can control the queue, eg set ACLs for the queue.
            adminEmails?: string[],            
            // Email addresses of users who can "consume" tasks from the TaskQueue. This means they can Dequeue and Delete tasks from the queue.
            consumerEmails?: string[],            
            // Email addresses of users who can "produce" tasks into the TaskQueue. This means they can Insert tasks into the queue.
            producerEmails?: string[],            
        },        
        // Name of the taskqueue.
        id?: string,
        // The kind of REST object returned, in this case taskqueue.
        kind?: string,
        // The number of times we should lease out tasks before giving up on them. If unset we lease them out forever until a worker deletes the task.
        maxLeases?: number,
        // Statistics for the TaskQueue object in question.
        stats?: {        
            // Number of tasks leased in the last hour.
            leasedLastHour?: string,
            // Number of tasks leased in the last minute.
            leasedLastMinute?: string,
            // The timestamp (in seconds since the epoch) of the oldest unfinished task.
            oldestTask?: string,
            // Number of tasks in the queue.
            totalTasks?: number,
        },        
    }
    
    interface Tasks {
        // The actual list of tasks returned as a result of the lease operation.
        items?: Task[],        
        // The kind of object returned, a list of tasks.
        kind?: string,
    }
    
    interface Tasks2 {
        // The actual list of tasks currently active in the TaskQueue.
        items?: Task[],        
        // The kind of object returned, a list of tasks.
        kind?: string,
    }
    
    interface TaskqueuesResource {
        // Get detailed information about a TaskQueue.
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
            // Whether to get stats. Optional.
            getStats?: boolean,
            // The project under which the queue lies.
            project: string,
            // The id of the taskqueue to get the properties of.
            taskqueue: string,
        }) : gapi.client.Request<TaskQueue>;        
        
    }
    
    
    interface TasksResource {
        // Delete a task from a TaskQueue.
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
            // The project under which the queue lies.
            project: string,
            // The id of the task to delete.
            task: string,
            // The taskqueue to delete a task from.
            taskqueue: string,
        }) : gapi.client.Request<void>;        
        
        // Get a particular task from a TaskQueue.
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
            // The project under which the queue lies.
            project: string,
            // The task to get properties of.
            task: string,
            // The taskqueue in which the task belongs.
            taskqueue: string,
        }) : gapi.client.Request<Task>;        
        
        // Lease 1 or more tasks from a TaskQueue.
        lease (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The lease in seconds.
            leaseSecs: number,
            // The number of tasks to lease.
            numTasks: number,
            // The project under which the queue lies.
            project: string,
            // The taskqueue to lease a task from.
            taskqueue: string,
        }) : gapi.client.Request<Tasks>;        
        
        // List Tasks in a TaskQueue
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
            // The project under which the queue lies.
            project: string,
            // The id of the taskqueue to list tasks from.
            taskqueue: string,
        }) : gapi.client.Request<Tasks2>;        
        
    }
    
}

declare module gapi.client.taskqueue {
    var taskqueues: gapi.client.taskqueue.TaskqueuesResource; 
    
    var tasks: gapi.client.taskqueue.TasksResource; 
    
}
