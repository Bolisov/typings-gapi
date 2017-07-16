# Typescript typings for Firebase Dynamic Links API
Programmatically creates and manages Firebase Dynamic Links.
For detailed description please check [documentation](https://firebase.google.com/docs/dynamic-links/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Firebase Dynamic Links API:
```
typings install gapi.client.firebasedynamiclinks --save 
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
gapi.client.load('firebasedynamiclinks', 'v1', () => {
    // now we can use gapi.client.firebasedynamiclinks
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and administer all your Firebase data and settings
        'https://www.googleapis.com/auth/firebase',
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

After that you can use Firebase Dynamic Links API resources:

```typescript
gapi.client.shortLinks.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.v1.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```