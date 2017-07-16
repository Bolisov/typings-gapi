# Typescript typings for Cloud User Accounts API
Creates and manages users and groups for accessing Google Compute Engine virtual machines.
For detailed description please check [documentation](https://cloud.google.com/compute/docs/access/user-accounts/api/latest/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Cloud User Accounts API:
```
typings install gapi.client.clouduseraccounts --save 
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
gapi.client.load('clouduseraccounts', 'alpha', () => {
    // now we can use gapi.client.clouduseraccounts
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
    
        // Manage your Google Cloud User Accounts
        'https://www.googleapis.com/auth/cloud.useraccounts',
    
        // View your Google Cloud User Accounts
        'https://www.googleapis.com/auth/cloud.useraccounts.readonly',
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

After that you can use Cloud User Accounts API resources:

```typescript
gapi.client.globalAccountsOperations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.groups.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.linux.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.users.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```