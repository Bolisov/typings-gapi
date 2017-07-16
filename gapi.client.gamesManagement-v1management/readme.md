# Typescript typings for Google Play Game Services Management API
The Management API for Google Play Game Services.
For detailed description please check [documentation](https://developers.google.com/games/services).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Play Game Services Management API:
```
typings install gapi.client.gamesManagement --save 
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
gapi.client.load('gamesManagement', 'v1management', () => {
    // now we can use gapi.client.gamesManagement
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Share your Google+ profile information and view and manage your game activity
        'https://www.googleapis.com/auth/games',
    
        // Know the list of people in your circles, your age range, and language
        'https://www.googleapis.com/auth/plus.login',
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

After that you can use Google Play Game Services Management API resources:

```typescript
gapi.client.achievements.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.applications.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.events.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.players.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.quests.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.rooms.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.scores.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.turnBasedMatches.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```