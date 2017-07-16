# Typescript typings for Google+ API
Builds on top of the Google+ platform.
For detailed description please check [documentation](https://developers.google.com/+/api/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google+ API:
```
typings install gapi.client.plus --save 
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
gapi.client.load('plus', 'v1', () => {
    // now we can use gapi.client.plus
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Know the list of people in your circles, your age range, and language
        'https://www.googleapis.com/auth/plus.login',
    
        // Know who you are on Google
        'https://www.googleapis.com/auth/plus.me',
    
        // View your email address
        'https://www.googleapis.com/auth/userinfo.email',
    
        // View your basic profile info
        'https://www.googleapis.com/auth/userinfo.profile',
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

After that you can use Google+ API resources:

```typescript
gapi.client.activities.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.comments.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.people.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```