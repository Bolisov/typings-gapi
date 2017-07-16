# Typescript typings for Google Mirror API
Interacts with Glass users via the timeline.
For detailed description please check [documentation](https://developers.google.com/glass).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Mirror API:
```
typings install gapi.client.mirror --save 
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
gapi.client.load('mirror', 'v1', () => {
    // now we can use gapi.client.mirror
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View your location
        'https://www.googleapis.com/auth/glass.location',
    
        // View and manage your Glass timeline
        'https://www.googleapis.com/auth/glass.timeline',
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

After that you can use Google Mirror API resources:

```typescript
gapi.client.accounts.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.contacts.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.locations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.settings.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.subscriptions.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.timeline.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```