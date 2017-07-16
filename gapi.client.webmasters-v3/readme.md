# Typescript typings for Search Console API
View Google Search Console data for your verified sites.
For detailed description please check [documentation](https://developers.google.com/webmaster-tools/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Search Console API:
```
typings install gapi.client.webmasters --save 
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
gapi.client.load('webmasters', 'v3', () => {
    // now we can use gapi.client.webmasters
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage Search Console data for your verified sites
        'https://www.googleapis.com/auth/webmasters',
    
        // View Search Console data for your verified sites
        'https://www.googleapis.com/auth/webmasters.readonly',
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

After that you can use Search Console API resources:

```typescript
gapi.client.searchanalytics.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.sitemaps.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.sites.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.urlcrawlerrorscounts.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.urlcrawlerrorssamples.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```