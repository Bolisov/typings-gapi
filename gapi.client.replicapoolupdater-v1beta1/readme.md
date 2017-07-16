# Typescript typings for Google Compute Engine Instance Group Updater API
[Deprecated. Please use compute.instanceGroupManagers.update method. replicapoolupdater API will be disabled after December 30th, 2016] Updates groups of Compute Engine instances.
For detailed description please check [documentation](https://cloud.google.com/compute/docs/instance-groups/manager/#applying_rolling_updates_using_the_updater_service).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Compute Engine Instance Group Updater API:
```
typings install gapi.client.replicapoolupdater --save 
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
gapi.client.load('replicapoolupdater', 'v1beta1', () => {
    // now we can use gapi.client.replicapoolupdater
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
    
        // View and manage replica pools
        'https://www.googleapis.com/auth/replicapool',
    
        // View replica pools
        'https://www.googleapis.com/auth/replicapool.readonly',
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

After that you can use Google Compute Engine Instance Group Updater API resources:

```typescript
gapi.client.rollingUpdates.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.zoneOperations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```