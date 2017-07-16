# Typescript typings for Street View Publish API
Publishes 360 photos to Google Maps, along with position, orientation, and connectivity metadata. Apps can offer an interface for positioning, connecting, and uploading user-generated Street View images.

For detailed description please check [documentation](https://developers.google.com/streetview/publish/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Street View Publish API:
```
typings install gapi.client.streetviewpublish --save 
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
gapi.client.load('streetviewpublish', 'v1', () => {
    // now we can use gapi.client.streetviewpublish
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Publish and manage your 360 photos on Google Street View
        'https://www.googleapis.com/auth/streetviewpublish',
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

After that you can use Street View Publish API resources:

```typescript
gapi.client.photos.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.photo.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```