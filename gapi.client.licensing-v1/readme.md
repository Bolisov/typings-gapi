# Typescript typings for Enterprise License Manager API
Views and manages licenses for your domain.
For detailed description please check [documentation](https://developers.google.com/google-apps/licensing/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Enterprise License Manager API:
```
typings install gapi.client.licensing --save 
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
gapi.client.load('licensing', 'v1', () => {
    // now we can use gapi.client.licensing
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage G Suite licenses for your domain
        'https://www.googleapis.com/auth/apps.licensing',
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

After that you can use Enterprise License Manager API resources:

```typescript
gapi.client.licenseAssignments.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```