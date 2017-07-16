# Typescript typings for TaskQueue API
Accesses a Google App Engine Pull Task Queue over REST.
For detailed description please check [documentation](https://developers.google.com/appengine/docs/python/taskqueue/rest).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for TaskQueue API:
```
typings install gapi.client.taskqueue --save 
```

## Usage

You need to initialize Google API client in your code:
```typescript
gapi.load("client", () => { 
    // now we can use gapi.client
    // ... 
});
```

Then load api client wrapper:
```typescript
gapi.client.load('taskqueue', 'v1beta1', () => {
    // now we can use gapi.client.taskqueue
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your Tasks and Taskqueues
        'https://www.googleapis.com/auth/taskqueue',
    
        // Consume Tasks from your Taskqueues
        'https://www.googleapis.com/auth/taskqueue.consumer',
    ],
    immediate = true;
// ...

gapi.auth.authorize({ client_id: client_id, scope: scope, immediate: immediate }, authResult => {
    if (authResult && !authResult.error) {
        /* handle succesfull authorization */
    } else {
        /* handle authorization error */
    }
});            
```

After that you can use TaskQueue API resources:

```typescript
gapi.client.taskqueues.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.tasks.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```