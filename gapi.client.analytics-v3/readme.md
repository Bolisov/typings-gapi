# Typescript typings for Google Analytics API
Views and manages your Google Analytics data.
For detailed description please check [documentation](https://developers.google.com/analytics/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Analytics API:
```
typings install gapi.client.analytics --save 
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
gapi.client.load('analytics', 'v3', () => {
    // now we can use gapi.client.analytics
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your Google Analytics data
        'https://www.googleapis.com/auth/analytics',
    
        // Edit Google Analytics management entities
        'https://www.googleapis.com/auth/analytics.edit',
    
        // Manage Google Analytics Account users by email address
        'https://www.googleapis.com/auth/analytics.manage.users',
    
        // View Google Analytics user permissions
        'https://www.googleapis.com/auth/analytics.manage.users.readonly',
    
        // Create a new Google Analytics account along with its default property and view
        'https://www.googleapis.com/auth/analytics.provision',
    
        // View your Google Analytics data
        'https://www.googleapis.com/auth/analytics.readonly',
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

After that you can use Google Analytics API resources:

```typescript
gapi.client.data.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.management.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.metadata.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.provisioning.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```