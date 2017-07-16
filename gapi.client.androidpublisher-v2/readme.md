# Typescript typings for Google Play Developer API
Lets Android application developers access their Google Play accounts.
For detailed description please check [documentation](https://developers.google.com/android-publisher).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Play Developer API:
```
typings install gapi.client.androidpublisher --save 
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
gapi.client.load('androidpublisher', 'v2', () => {
    // now we can use gapi.client.androidpublisher
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your Google Play Developer account
        'https://www.googleapis.com/auth/androidpublisher',
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

After that you can use Google Play Developer API resources:

```typescript
gapi.client.edits.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.entitlements.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.inappproducts.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.purchases.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.reviews.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```