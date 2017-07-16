# Typescript typings for Google Storage Transfer API
Transfers data from external data sources to a Google Cloud Storage bucket or between Google Cloud Storage buckets.
For detailed description please check [documentation](https://cloud.google.com/storage/transfer).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Storage Transfer API:
```
typings install gapi.client.storagetransfer --save 
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
gapi.client.load('storagetransfer', 'v1', () => {
    // now we can use gapi.client.storagetransfer
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
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

After that you can use Google Storage Transfer API resources:

```typescript
gapi.client.googleServiceAccounts.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.transferOperations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.transferJobs.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```