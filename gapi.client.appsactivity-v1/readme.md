# Typescript typings for G Suite Activity API
Provides a historical view of activity.
For detailed description please check [documentation](https://developers.google.com/google-apps/activity/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for G Suite Activity API:
```
typings install gapi.client.appsactivity --save 
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
gapi.client.load('appsactivity', 'v1', () => {
    // now we can use gapi.client.appsactivity
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View the activity history of your Google apps
        'https://www.googleapis.com/auth/activity',
    
        // View and manage the files in your Google Drive
        'https://www.googleapis.com/auth/drive',
    
        // View and manage metadata of files in your Google Drive
        'https://www.googleapis.com/auth/drive.metadata',
    
        // View metadata for files in your Google Drive
        'https://www.googleapis.com/auth/drive.metadata.readonly',
    
        // View the files in your Google Drive
        'https://www.googleapis.com/auth/drive.readonly',
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

After that you can use G Suite Activity API resources:

```typescript
gapi.client.activities.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```