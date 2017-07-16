# Typescript typings for Google Sheets API
Reads and writes Google Sheets.
For detailed description please check [documentation](https://developers.google.com/sheets/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Sheets API:
```
typings install gapi.client.sheets --save 
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
gapi.client.load('sheets', 'v4', () => {
    // now we can use gapi.client.sheets
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View your Google Spreadsheets
        'https://www.googleapis.com/auth/spreadsheets.readonly',
    
        // View the files in your Google Drive
        'https://www.googleapis.com/auth/drive.readonly',
    
        // View and manage the files in your Google Drive
        'https://www.googleapis.com/auth/drive',
    
        // View and manage your spreadsheets in Google Drive
        'https://www.googleapis.com/auth/spreadsheets',
    
        // View and manage Google Drive files and folders that you have opened or created with this app
        'https://www.googleapis.com/auth/drive.file',
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

After that you can use Google Sheets API resources:

```typescript
gapi.client.spreadsheets.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```