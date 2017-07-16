# Typescript typings for Google Compute Engine Instance Group Manager API
[Deprecated. Please use Instance Group Manager in Compute API] Provides groups of homogenous Compute Engine instances.
For detailed description please check [documentation](https://developers.google.com/compute/docs/instance-groups/manager/v1beta2).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Compute Engine Instance Group Manager API:
```
typings install gapi.client.replicapool --save 
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
gapi.client.load('replicapool', 'v1beta2', () => {
    // now we can use gapi.client.replicapool
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
    
        // View and manage your Google Compute Engine resources
        'https://www.googleapis.com/auth/compute',
    
        // View your Google Compute Engine resources
        'https://www.googleapis.com/auth/compute.readonly',
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

After that you can use Google Compute Engine Instance Group Manager API resources:

```typescript
gapi.client.instanceGroupManagers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.zoneOperations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```