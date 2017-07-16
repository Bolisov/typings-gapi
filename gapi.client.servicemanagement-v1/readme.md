# Typescript typings for Google Service Management API
Google Service Management allows service producers to publish their services on Google Cloud Platform so that they can be discovered and used by service consumers.
For detailed description please check [documentation](https://cloud.google.com/service-management/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Service Management API:
```
typings install gapi.client.servicemanagement --save 
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
gapi.client.load('servicemanagement', 'v1', () => {
    // now we can use gapi.client.servicemanagement
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your Google API service configuration
        'https://www.googleapis.com/auth/service.management',
    
        // View your Google API service configuration
        'https://www.googleapis.com/auth/service.management.readonly',
    
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

After that you can use Google Service Management API resources:

```typescript
gapi.client.operations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.services.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```