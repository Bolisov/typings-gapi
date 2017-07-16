# Typescript typings for Google Service Control API
Google Service Control provides control plane functionality to managed services, such as logging, monitoring, and status checks.
For detailed description please check [documentation](https://cloud.google.com/service-control/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Service Control API:
```
typings install gapi.client.servicecontrol --save 
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
gapi.client.load('servicecontrol', 'v1', () => {
    // now we can use gapi.client.servicecontrol
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform',
    
        // Manage your Google Service Control data
        'https://www.googleapis.com/auth/servicecontrol',
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

After that you can use Google Service Control API resources:

```typescript
gapi.client.services.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```