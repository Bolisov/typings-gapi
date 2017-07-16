# Typescript typings for Drive API
Manages files in Drive including uploading, downloading, searching, detecting changes, and updating sharing permissions.
For detailed description please check [documentation](https://developers.google.com/drive/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Drive API:
```
typings install gapi.client.drive --save 
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
gapi.client.load('drive', 'v3', () => {
    // now we can use gapi.client.drive
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage the files in your Google Drive
        'https://www.googleapis.com/auth/drive',
    
        // View and manage its own configuration data in your Google Drive
        'https://www.googleapis.com/auth/drive.appdata',
    
        // View and manage Google Drive files and folders that you have opened or created with this app
        'https://www.googleapis.com/auth/drive.file',
    
        // View and manage metadata of files in your Google Drive
        'https://www.googleapis.com/auth/drive.metadata',
    
        // View metadata for files in your Google Drive
        'https://www.googleapis.com/auth/drive.metadata.readonly',
    
        // View the photos, videos and albums in your Google Photos
        'https://www.googleapis.com/auth/drive.photos.readonly',
    
        // View the files in your Google Drive
        'https://www.googleapis.com/auth/drive.readonly',
    
        // Modify your Google Apps Script scripts' behavior
        'https://www.googleapis.com/auth/drive.scripts',
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

After that you can use Drive API resources:

```typescript
gapi.client.about.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.changes.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.channels.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.comments.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.files.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.permissions.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.replies.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.revisions.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.teamdrives.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```