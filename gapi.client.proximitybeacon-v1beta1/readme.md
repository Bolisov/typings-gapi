# Typescript typings for Google Proximity Beacon API
Registers, manages, indexes, and searches beacons.
For detailed description please check [documentation](https://developers.google.com/beacons/proximity/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Proximity Beacon API:
```
typings install gapi.client.proximitybeacon --save 
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
gapi.client.load('proximitybeacon', 'v1beta1', () => {
    // now we can use gapi.client.proximitybeacon
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and modify your beacons
        'https://www.googleapis.com/auth/userlocation.beacon.registry',
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

After that you can use Google Proximity Beacon API resources:

```typescript
gapi.client.beaconinfo.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.namespaces.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.v1beta1.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.beacons.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```