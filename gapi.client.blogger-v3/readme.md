# Typescript typings for Blogger API
API for access to the data within Blogger.
For detailed description please check [documentation](https://developers.google.com/blogger/docs/3.0/getting_started).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Blogger API:
```
typings install gapi.client.blogger --save 
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
gapi.client.load('blogger', 'v3', () => {
    // now we can use gapi.client.blogger
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your Blogger account
        'https://www.googleapis.com/auth/blogger',
    
        // View your Blogger account
        'https://www.googleapis.com/auth/blogger.readonly',
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

After that you can use Blogger API resources:

```typescript
gapi.client.blogUserInfos.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.blogs.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.comments.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.pageViews.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.pages.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.postUserInfos.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.posts.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.users.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```