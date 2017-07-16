# Typescript typings for Books API
Searches for books and manages your Google Books library.
For detailed description please check [documentation](https://developers.google.com/books/docs/v1/getting_started).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Books API:
```
typings install gapi.client.books --save 
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
gapi.client.load('books', 'v1', () => {
    // now we can use gapi.client.books
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your books
        'https://www.googleapis.com/auth/books',
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

After that you can use Books API resources:

```typescript
gapi.client.bookshelves.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.cloudloading.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dictionary.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.layers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.myconfig.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.mylibrary.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.notification.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.onboarding.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.personalizedstream.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.promooffer.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.series.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.volumes.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```