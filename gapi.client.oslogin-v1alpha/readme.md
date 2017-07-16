# Typescript typings for Google Cloud OS Login API
A Google Cloud API for managing OS login configuration for Directory API users.
For detailed description please check [documentation](https://developers.google.com/apis-explorer/#p/oslogin/v1alpha/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Cloud OS Login API:
```
typings install gapi.client.oslogin --save 
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
gapi.client.load('oslogin', 'v1alpha', () => {
    // now we can use gapi.client.oslogin
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform.read-only',
    
        // View and manage your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform',
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

After that you can use Google Cloud OS Login API resources:

```typescript
gapi.client.users.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```