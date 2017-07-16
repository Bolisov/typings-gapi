# Typescript typings for Enterprise Apps Reseller API
Creates and manages your customers and their subscriptions.
For detailed description please check [documentation](https://developers.google.com/google-apps/reseller/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Enterprise Apps Reseller API:
```
typings install gapi.client.reseller --save 
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
gapi.client.load('reseller', 'v1', () => {
    // now we can use gapi.client.reseller
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage users on your domain
        'https://www.googleapis.com/auth/apps.order',
    
        // Manage users on your domain
        'https://www.googleapis.com/auth/apps.order.readonly',
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

After that you can use Enterprise Apps Reseller API resources:

```typescript
gapi.client.customers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.resellernotify.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.subscriptions.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```