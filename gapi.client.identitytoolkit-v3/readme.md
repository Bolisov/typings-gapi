# Typescript typings for Google Identity Toolkit API
Help the third party sites to implement federated login.
For detailed description please check [documentation](https://developers.google.com/identity-toolkit/v3/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Identity Toolkit API:
```
typings install gapi.client.identitytoolkit --save 
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
gapi.client.load('identitytoolkit', 'v3', () => {
    // now we can use gapi.client.identitytoolkit
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform',
    
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

After that you can use Google Identity Toolkit API resources:

```typescript
gapi.client.relyingparty.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```