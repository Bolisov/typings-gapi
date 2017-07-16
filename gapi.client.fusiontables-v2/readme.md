# Typescript typings for Fusion Tables API
API for working with Fusion Tables data.
For detailed description please check [documentation](https://developers.google.com/fusiontables).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Fusion Tables API:
```
typings install gapi.client.fusiontables --save 
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
gapi.client.load('fusiontables', 'v2', () => {
    // now we can use gapi.client.fusiontables
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your Fusion Tables
        'https://www.googleapis.com/auth/fusiontables',
    
        // View your Fusion Tables
        'https://www.googleapis.com/auth/fusiontables.readonly',
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

After that you can use Fusion Tables API resources:

```typescript
gapi.client.column.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.query.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.style.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.table.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.task.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.template.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```