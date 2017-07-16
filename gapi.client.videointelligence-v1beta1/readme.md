# Typescript typings for Google Cloud Video Intelligence API
Google Cloud Video Intelligence API.
For detailed description please check [documentation](https://cloud.google.com/video-intelligence/docs/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Cloud Video Intelligence API:
```
typings install gapi.client.videointelligence --save 
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
gapi.client.load('videointelligence', 'v1beta1', () => {
    // now we can use gapi.client.videointelligence
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
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

After that you can use Google Cloud Video Intelligence API resources:

```typescript
gapi.client.videos.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```