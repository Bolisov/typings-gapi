# Typescript typings for Google Cloud DNS API
Configures and serves authoritative DNS records.
For detailed description please check [documentation](https://developers.google.com/cloud-dns).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Cloud DNS API:
```
typings install gapi.client.dns --save 
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
gapi.client.load('dns', 'v1', () => {
    // now we can use gapi.client.dns
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform',
    
        // View your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform.read-only',
    
        // View your DNS records hosted by Google Cloud DNS
        'https://www.googleapis.com/auth/ndev.clouddns.readonly',
    
        // View and manage your DNS records hosted by Google Cloud DNS
        'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
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

After that you can use Google Cloud DNS API resources:

```typescript
gapi.client.changes.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.managedZones.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.projects.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.resourceRecordSets.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```