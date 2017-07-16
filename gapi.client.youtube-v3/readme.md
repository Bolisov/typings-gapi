# Typescript typings for YouTube Data API
Supports core YouTube features, such as uploading videos, creating and managing playlists, searching for content, and much more.
For detailed description please check [documentation](https://developers.google.com/youtube/v3).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for YouTube Data API:
```
typings install gapi.client.youtube --save 
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
gapi.client.load('youtube', 'v3', () => {
    // now we can use gapi.client.youtube
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your YouTube account
        'https://www.googleapis.com/auth/youtube',
    
        // Manage your YouTube account
        'https://www.googleapis.com/auth/youtube.force-ssl',
    
        // View your YouTube account
        'https://www.googleapis.com/auth/youtube.readonly',
    
        // Manage your YouTube videos
        'https://www.googleapis.com/auth/youtube.upload',
    
        // View and manage your assets and associated content on YouTube
        'https://www.googleapis.com/auth/youtubepartner',
    
        // View private information of your YouTube channel relevant during the audit process with a YouTube partner
        'https://www.googleapis.com/auth/youtubepartner-channel-audit',
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

After that you can use YouTube Data API resources:

```typescript
gapi.client.activities.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.captions.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.channelBanners.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.channelSections.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.channels.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.commentThreads.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.comments.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.fanFundingEvents.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.guideCategories.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.i18nLanguages.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.i18nRegions.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.liveBroadcasts.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.liveChatBans.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.liveChatMessages.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.liveChatModerators.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.liveStreams.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.playlistItems.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.playlists.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.search.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.sponsors.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.subscriptions.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.superChatEvents.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.thumbnails.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.videoAbuseReportReasons.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.videoCategories.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.videos.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.watermarks.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```