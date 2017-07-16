# Typescript typings for Stackdriver Logging API
Writes log entries and manages your Stackdriver Logging configuration.
For detailed description please check [documentation](https://cloud.google.com/logging/docs/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Stackdriver Logging API:
```
typings install gapi.client.logging --save 
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
gapi.client.load('logging', 'v2', () => {
    // now we can use gapi.client.logging
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Submit log data for your projects
        'https://www.googleapis.com/auth/logging.write',
    
        // View log data for your projects
        'https://www.googleapis.com/auth/logging.read',
    
        // Administrate log data for your projects
        'https://www.googleapis.com/auth/logging.admin',
    
        // View your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform.read-only',
    
        // View and manage your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform',
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

After that you can use Stackdriver Logging API resources:

```typescript
gapi.client.folders.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.monitoredResourceDescriptors.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.organizations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.entries.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.projects.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.billingAccounts.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```