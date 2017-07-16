# Typescript typings for URL Shortener API
Lets you create, inspect, and manage goo.gl short URLs
For detailed description please check [documentation](https://developers.google.com/url-shortener/v1/getting_started).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for URL Shortener API:
```
typings install gapi.client.urlshortener --save 
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
gapi.client.load('urlshortener', 'v1', () => {
    // now we can use gapi.client.urlshortener
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your goo.gl short URLs
        'https://www.googleapis.com/auth/urlshortener',
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

After that you can use URL Shortener API resources:

```typescript
gapi.client.url.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```