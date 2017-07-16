# Typescript typings for DoubleClick Bid Manager API
API for viewing and managing your reports in DoubleClick Bid Manager.
For detailed description please check [documentation](https://developers.google.com/bid-manager/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for DoubleClick Bid Manager API:
```
typings install gapi.client.doubleclickbidmanager --save 
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
gapi.client.load('doubleclickbidmanager', 'v1', () => {
    // now we can use gapi.client.doubleclickbidmanager
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your reports in DoubleClick Bid Manager
        'https://www.googleapis.com/auth/doubleclickbidmanager',
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

After that you can use DoubleClick Bid Manager API resources:

```typescript
gapi.client.lineitems.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.queries.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.reports.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.sdf.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```