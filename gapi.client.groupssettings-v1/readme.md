# Typescript typings for Groups Settings API
Lets you manage permission levels and related settings of a group.
For detailed description please check [documentation](https://developers.google.com/google-apps/groups-settings/get_started).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Groups Settings API:
```
typings install gapi.client.groupssettings --save 
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
gapi.client.load('groupssettings', 'v1', () => {
    // now we can use gapi.client.groupssettings
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage the settings of a G Suite group
        'https://www.googleapis.com/auth/apps.groups.settings',
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

After that you can use Groups Settings API resources:

```typescript
gapi.client.groups.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```