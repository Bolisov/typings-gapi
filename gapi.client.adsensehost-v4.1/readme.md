# Typescript typings for AdSense Host API
Generates performance reports, generates ad codes, and provides publisher management capabilities for AdSense Hosts.
For detailed description please check [documentation](https://developers.google.com/adsense/host/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for AdSense Host API:
```
typings install gapi.client.adsensehost --save 
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
gapi.client.load('adsensehost', 'v4.1', () => {
    // now we can use gapi.client.adsensehost
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your AdSense host data and associated accounts
        'https://www.googleapis.com/auth/adsensehost',
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

After that you can use AdSense Host API resources:

```typescript
gapi.client.accounts.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.adclients.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.associationsessions.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.customchannels.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.reports.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.urlchannels.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```