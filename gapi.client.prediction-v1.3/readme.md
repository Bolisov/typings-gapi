# Typescript typings for Prediction API
Lets you access a cloud hosted machine learning service that makes it easy to build smart apps
For detailed description please check [documentation](https://developers.google.com/prediction/docs/developer-guide).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Prediction API:
```
typings install gapi.client.prediction --save 
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
gapi.client.load('prediction', 'v1.3', () => {
    // now we can use gapi.client.prediction
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your data and permissions in Google Cloud Storage
        'https://www.googleapis.com/auth/devstorage.full_control',
    
        // View your data in Google Cloud Storage
        'https://www.googleapis.com/auth/devstorage.read_only',
    
        // Manage your data in Google Cloud Storage
        'https://www.googleapis.com/auth/devstorage.read_write',
    
        // Manage your data in the Google Prediction API
        'https://www.googleapis.com/auth/prediction',
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

After that you can use Prediction API resources:

```typescript
gapi.client.hostedmodels.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.training.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```