# Typescript typings for Cloud Storage JSON API
Stores and retrieves potentially large, immutable data objects.
For detailed description please check [documentation](https://developers.google.com/storage/docs/json_api/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Cloud Storage JSON API:
```
typings install gapi.client.storage --save 
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
gapi.client.load('storage', 'v1', () => {
    // now we can use gapi.client.storage
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
    
        // Manage your data and permissions in Google Cloud Storage
        'https://www.googleapis.com/auth/devstorage.full_control',
    
        // View your data in Google Cloud Storage
        'https://www.googleapis.com/auth/devstorage.read_only',
    
        // Manage your data in Google Cloud Storage
        'https://www.googleapis.com/auth/devstorage.read_write',
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

After that you can use Cloud Storage JSON API resources:

```typescript
gapi.client.bucketAccessControls.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.buckets.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.channels.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.defaultObjectAccessControls.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.notifications.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.objectAccessControls.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.objects.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.projects.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```