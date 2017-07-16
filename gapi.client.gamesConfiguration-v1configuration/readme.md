# Typescript typings for Google Play Game Services Publishing API
The Publishing API for Google Play Game Services.
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

And finally install typings for Google Play Game Services Publishing API:
```
typings install gapi.client.gamesConfiguration --save 
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
gapi.client.load('gamesConfiguration', 'v1configuration', () => {
    // now we can use gapi.client.gamesConfiguration
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your Google Play Developer account
        'https://www.googleapis.com/auth/androidpublisher',
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

After that you can use Google Play Game Services Publishing API resources:

```typescript
gapi.client.achievementConfigurations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.imageConfigurations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.leaderboardConfigurations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```