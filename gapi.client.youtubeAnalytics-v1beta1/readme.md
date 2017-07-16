# Typescript typings for YouTube Analytics API
Retrieves your YouTube Analytics data.
For detailed description please check [documentation](http://developers.google.com/youtube/analytics/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for YouTube Analytics API:
```
typings install gapi.client.youtubeAnalytics --save 
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
gapi.client.load('youtubeAnalytics', 'v1beta1', () => {
    // now we can use gapi.client.youtubeAnalytics
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your YouTube account
        'https://www.googleapis.com/auth/youtube',
    
        // View your YouTube account
        'https://www.googleapis.com/auth/youtube.readonly',
    
        // View and manage your assets and associated content on YouTube
        'https://www.googleapis.com/auth/youtubepartner',
    
        // View monetary and non-monetary YouTube Analytics reports for your YouTube content
        'https://www.googleapis.com/auth/yt-analytics-monetary.readonly',
    
        // View YouTube Analytics reports for your YouTube content
        'https://www.googleapis.com/auth/yt-analytics.readonly',
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

After that you can use YouTube Analytics API resources:

```typescript
gapi.client.groupItems.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.groups.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.reports.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```