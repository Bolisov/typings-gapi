# Typescript typings for Google+ Domains API
Builds on top of the Google+ platform for Google Apps Domains.
For detailed description please check [documentation](https://developers.google.com/+/domains/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google+ Domains API:
```
typings install gapi.client.plusDomains --save 
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
gapi.client.load('plusDomains', 'v1', () => {
    // now we can use gapi.client.plusDomains
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View your circles and the people and pages in them
        'https://www.googleapis.com/auth/plus.circles.read',
    
        // Manage your circles and add people and pages. People and pages you add to your circles will be notified. Others may see this information publicly. People you add to circles can use Hangouts with you.
        'https://www.googleapis.com/auth/plus.circles.write',
    
        // Know the list of people in your circles, your age range, and language
        'https://www.googleapis.com/auth/plus.login',
    
        // Know who you are on Google
        'https://www.googleapis.com/auth/plus.me',
    
        // Send your photos and videos to Google+
        'https://www.googleapis.com/auth/plus.media.upload',
    
        // View your own Google+ profile and profiles visible to you
        'https://www.googleapis.com/auth/plus.profiles.read',
    
        // View your Google+ posts, comments, and stream
        'https://www.googleapis.com/auth/plus.stream.read',
    
        // Manage your Google+ posts, comments, and stream
        'https://www.googleapis.com/auth/plus.stream.write',
    
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

After that you can use Google+ Domains API resources:

```typescript
gapi.client.activities.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.audiences.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.circles.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.comments.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.media.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.people.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```