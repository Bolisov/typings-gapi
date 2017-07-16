# Typescript typings for AdSense Management API
Accesses AdSense publishers' inventory and generates performance reports.
For detailed description please check [documentation](https://developers.google.com/adsense/management/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for AdSense Management API:
```
typings install gapi.client.adsense --save 
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
gapi.client.load('adsense', 'v1.3', () => {
    // now we can use gapi.client.adsense
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your AdSense data
        'https://www.googleapis.com/auth/adsense',
    
        // View your AdSense data
        'https://www.googleapis.com/auth/adsense.readonly',
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

After that you can use AdSense Management API resources:

```typescript
gapi.client.accounts.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.adclients.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.adunits.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.alerts.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.customchannels.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.metadata.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.reports.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.savedadstyles.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.urlchannels.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```