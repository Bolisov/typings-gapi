# Typescript typings for Google Site Verification API
Verifies ownership of websites or domains with Google.
For detailed description please check [documentation](https://developers.google.com/site-verification/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Site Verification API:
```
typings install gapi.client.siteVerification --save 
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
gapi.client.load('siteVerification', 'v1', () => {
    // now we can use gapi.client.siteVerification
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage the list of sites and domains you control
        'https://www.googleapis.com/auth/siteverification',
    
        // Manage your new site verifications with Google
        'https://www.googleapis.com/auth/siteverification.verify_only',
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

After that you can use Google Site Verification API resources:

```typescript
gapi.client.webResource.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```