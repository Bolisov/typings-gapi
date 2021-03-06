# Typescript typings for Manufacturer Center API
Public API for managing Manufacturer Center related data.
For detailed description please check [documentation](https://developers.google.com/manufacturers/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Manufacturer Center API:
```
typings install gapi.client.manufacturers --save 
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
gapi.client.load('manufacturers', 'v1', () => {
    // now we can use gapi.client.manufacturers
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your product listings for Google Manufacturer Center
        'https://www.googleapis.com/auth/manufacturercenter',
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

After that you can use Manufacturer Center API resources:

```typescript
gapi.client.accounts.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```