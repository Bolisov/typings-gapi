# Typescript typings for Groups Migration API
Groups Migration Api.
For detailed description please check [documentation](https://developers.google.com/google-apps/groups-migration/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Groups Migration API:
```
typings install gapi.client.groupsmigration --save 
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
gapi.client.load('groupsmigration', 'v1', () => {
    // now we can use gapi.client.groupsmigration
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage messages in groups on your domain
        'https://www.googleapis.com/auth/apps.groups.migration',
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

After that you can use Groups Migration API resources:

```typescript
gapi.client.archive.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```