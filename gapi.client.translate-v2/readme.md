# Typescript typings for Google Cloud Translation API
The Google Cloud Translation API lets websites and programs integrate with
    Google Translate programmatically.
For detailed description please check [documentation](https://code.google.com/apis/language/translate/v2/getting_started.html).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Cloud Translation API:
```
typings install gapi.client.translate --save 
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
gapi.client.load('translate', 'v2', () => {
    // now we can use gapi.client.translate
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Translate text from one language to another using Google Translate
        'https://www.googleapis.com/auth/cloud-translation',
    
        // View and manage your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform',
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

After that you can use Google Cloud Translation API resources:

```typescript
gapi.client.translations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.detections.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.languages.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```