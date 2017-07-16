# Typescript typings for Admin Data Transfer API
Transfers user data from one user to another.
For detailed description please check [documentation](https://developers.google.com/admin-sdk/data-transfer/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Admin Data Transfer API:
```
typings install gapi.client.admin --save 
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
gapi.client.load('admin', 'datatransfer_v1', () => {
    // now we can use gapi.client.admin
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage data transfers between users in your organization
        'https://www.googleapis.com/auth/admin.datatransfer',
    
        // View data transfers between users in your organization
        'https://www.googleapis.com/auth/admin.datatransfer.readonly',
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

After that you can use Admin Data Transfer API resources:

```typescript
gapi.client.applications.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.transfers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```