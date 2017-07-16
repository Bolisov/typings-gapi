# Typescript typings for Cloud SQL Administration API
Creates and configures Cloud SQL instances, which provide fully-managed MySQL databases.
For detailed description please check [documentation](https://cloud.google.com/sql/docs/reference/latest).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Cloud SQL Administration API:
```
typings install gapi.client.sqladmin --save 
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
gapi.client.load('sqladmin', 'v1beta3', () => {
    // now we can use gapi.client.sqladmin
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform',
    
        // Manage your Google SQL Service instances
        'https://www.googleapis.com/auth/sqlservice.admin',
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

After that you can use Cloud SQL Administration API resources:

```typescript
gapi.client.backupRuns.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.flags.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.instances.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.operations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.sslCerts.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.tiers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```