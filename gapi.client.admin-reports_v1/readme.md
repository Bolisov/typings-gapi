# Typescript typings for Admin Reports API
Fetches reports for the administrators of G Suite customers about the usage, collaboration, security, and risk for their users.
For detailed description please check [documentation](https://developers.google.com/admin-sdk/reports/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Admin Reports API:
```
typings install gapi.client.admin --save 
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
gapi.client.load('admin', 'reports_v1', () => {
    // now we can use gapi.client.admin
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View audit reports for your G Suite domain
        'https://www.googleapis.com/auth/admin.reports.audit.readonly',
    
        // View usage reports for your G Suite domain
        'https://www.googleapis.com/auth/admin.reports.usage.readonly',
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

After that you can use Admin Reports API resources:

```typescript
gapi.client.activities.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.channels.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.customerUsageReports.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.userUsageReport.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```