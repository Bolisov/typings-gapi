# Typescript typings for DoubleClick Search API
Reports and modifies your advertising data in DoubleClick Search (for example, campaigns, ad groups, keywords, and conversions).
For detailed description please check [documentation](https://developers.google.com/doubleclick-search/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for DoubleClick Search API:
```
typings install gapi.client.doubleclicksearch --save 
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
gapi.client.load('doubleclicksearch', 'v2', () => {
    // now we can use gapi.client.doubleclicksearch
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your advertising data in DoubleClick Search
        'https://www.googleapis.com/auth/doubleclicksearch',
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

After that you can use DoubleClick Search API resources:

```typescript
gapi.client.conversion.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.reports.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.savedColumns.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```