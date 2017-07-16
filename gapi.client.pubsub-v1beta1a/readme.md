# Typescript typings for Google Cloud Pub/Sub API
Provides reliable, many-to-many, asynchronous messaging between applications.

For detailed description please check [documentation](https://cloud.google.com/pubsub/docs).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Cloud Pub/Sub API:
```
typings install gapi.client.pubsub --save 
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
gapi.client.load('pubsub', 'v1beta1a', () => {
    // now we can use gapi.client.pubsub
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform',
    
        // View and manage Pub/Sub topics and subscriptions
        'https://www.googleapis.com/auth/pubsub',
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

After that you can use Google Cloud Pub/Sub API resources:

```typescript
gapi.client.subscriptions.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.topics.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```