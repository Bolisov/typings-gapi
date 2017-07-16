# Typescript typings for Google App State API
The Google App State API.
For detailed description please check [documentation](https://developers.google.com/games/services/web/api/states).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google App State API:
```
typings install gapi.client.appstate --save 
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
gapi.client.load('appstate', 'v1', () => {
    // now we can use gapi.client.appstate
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your data for this application
        'https://www.googleapis.com/auth/appstate',
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

After that you can use Google App State API resources:

```typescript
gapi.client.states.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```