# Typescript typings for Google People API
Provides access to information about profiles and contacts.
For detailed description please check [documentation](https://developers.google.com/people/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google People API:
```
typings install gapi.client.people --save 
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
gapi.client.load('people', 'v1', () => {
    // now we can use gapi.client.people
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View your email addresses
        'https://www.googleapis.com/auth/user.emails.read',
    
        // Manage your contacts
        'https://www.googleapis.com/auth/contacts',
    
        // View your street addresses
        'https://www.googleapis.com/auth/user.addresses.read',
    
        // View your email address
        'https://www.googleapis.com/auth/userinfo.email',
    
        // View your phone numbers
        'https://www.googleapis.com/auth/user.phonenumbers.read',
    
        // View your contacts
        'https://www.googleapis.com/auth/contacts.readonly',
    
        // View your complete date of birth
        'https://www.googleapis.com/auth/user.birthday.read',
    
        // Know the list of people in your circles, your age range, and language
        'https://www.googleapis.com/auth/plus.login',
    
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

After that you can use Google People API resources:

```typescript
gapi.client.contactGroups.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.people.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```