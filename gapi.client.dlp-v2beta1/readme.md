# Typescript typings for DLP API
The Google Data Loss Prevention API provides methods for detection of privacy-sensitive fragments in text, images, and Google Cloud Platform storage repositories.
For detailed description please check [documentation](https://cloud.google.com/dlp/docs/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for DLP API:
```
typings install gapi.client.dlp --save 
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
gapi.client.load('dlp', 'v2beta1', () => {
    // now we can use gapi.client.dlp
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
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

After that you can use DLP API resources:

```typescript
gapi.client.inspect.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.rootCategories.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.content.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```