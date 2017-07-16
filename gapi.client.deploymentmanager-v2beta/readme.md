# Typescript typings for Google Cloud Deployment Manager API V2Beta Methods
The Deployment Manager API allows users to declaratively configure, deploy and run complex solutions on the Google Cloud Platform.
For detailed description please check [documentation](https://developers.google.com/deployment-manager/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Cloud Deployment Manager API V2Beta Methods:
```
typings install gapi.client.deploymentmanager --save 
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
gapi.client.load('deploymentmanager', 'v2beta', () => {
    // now we can use gapi.client.deploymentmanager
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

After that you can use Google Cloud Deployment Manager API V2Beta Methods resources:

```typescript
gapi.client.compositeTypes.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.deployments.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.manifests.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.operations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.resources.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.typeProviders.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.types.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```