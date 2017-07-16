# Typescript typings for Tasks API
Lets you manage your tasks and task lists.
For detailed description please check [documentation](https://developers.google.com/google-apps/tasks/firstapp).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Tasks API:
```
typings install gapi.client.tasks --save 
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
gapi.client.load('tasks', 'v1', () => {
    // now we can use gapi.client.tasks
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your tasks
        'https://www.googleapis.com/auth/tasks',
    
        // View your tasks
        'https://www.googleapis.com/auth/tasks.readonly',
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

After that you can use Tasks API resources:

```typescript
gapi.client.tasklists.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.tasks.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```