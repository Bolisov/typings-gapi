# Typescript typings for Genomics API
Upload, process, query, and search Genomics data in the cloud.
For detailed description please check [documentation](https://cloud.google.com/genomics).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Genomics API:
```
typings install gapi.client.genomics --save 
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
gapi.client.load('genomics', 'v1alpha2', () => {
    // now we can use gapi.client.genomics
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your Google Compute Engine resources
        'https://www.googleapis.com/auth/compute',
    
        // View and manage your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform',
    
        // View and manage Genomics data
        'https://www.googleapis.com/auth/genomics',
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

After that you can use Genomics API resources:

```typescript
gapi.client.operations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.pipelines.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```