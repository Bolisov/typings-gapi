# Typescript typings for Stackdriver Debugger API
Examines the call stack and variables of a running application without stopping or slowing it down.

For detailed description please check [documentation](http://cloud.google.com/debugger).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Stackdriver Debugger API:
```
typings install gapi.client.clouddebugger --save 
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
gapi.client.load('clouddebugger', 'v2', () => {
    // now we can use gapi.client.clouddebugger
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform',
    
        // Manage cloud debugger
        'https://www.googleapis.com/auth/cloud_debugger',
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

After that you can use Stackdriver Debugger API resources:

```typescript
gapi.client.debugger.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.controller.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```