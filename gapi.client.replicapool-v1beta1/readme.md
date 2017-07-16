# Typescript typings for Replica Pool API
The Replica Pool API allows users to declaratively provision and manage groups of Google Compute Engine instances based on a common template.
For detailed description please check [documentation](https://developers.google.com/compute/docs/replica-pool/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Replica Pool API:
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
gapi.client.load('replicapool', 'v1beta1', () => {
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
    
        // View and manage your Google Cloud Platform management resources and deployment status information
        'https://www.googleapis.com/auth/ndev.cloudman',
    
        // View your Google Cloud Platform management resources and deployment status information
        'https://www.googleapis.com/auth/ndev.cloudman.readonly',
    
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

After that you can use Replica Pool API resources:

```typescript
gapi.client.pools.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.replicas.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```