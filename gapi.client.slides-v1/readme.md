# Typescript typings for Google Slides API
An API for creating and editing Google Slides presentations.
For detailed description please check [documentation](https://developers.google.com/slides/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Slides API:
```
typings install gapi.client.slides --save 
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
gapi.client.load('slides', 'v1', () => {
    // now we can use gapi.client.slides
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your Google Slides presentations
        'https://www.googleapis.com/auth/presentations',
    
        // View your Google Slides presentations
        'https://www.googleapis.com/auth/presentations.readonly',
    
        // View the files in your Google Drive
        'https://www.googleapis.com/auth/drive.readonly',
    
        // View your Google Spreadsheets
        'https://www.googleapis.com/auth/spreadsheets.readonly',
    
        // View and manage the files in your Google Drive
        'https://www.googleapis.com/auth/drive',
    
        // View and manage your spreadsheets in Google Drive
        'https://www.googleapis.com/auth/spreadsheets',
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

After that you can use Google Slides API resources:

```typescript
gapi.client.presentations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```