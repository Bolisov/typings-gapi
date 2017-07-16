# Typescript typings for YouTube Reporting API
Schedules reporting jobs containing your YouTube Analytics data and downloads the resulting bulk data reports in the form of CSV files.
For detailed description please check [documentation](https://developers.google.com/youtube/reporting/v1/reports/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for YouTube Reporting API:
```
typings install gapi.client.youtubereporting --save 
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
gapi.client.load('youtubereporting', 'v1', () => {
    // now we can use gapi.client.youtubereporting
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View YouTube Analytics reports for your YouTube content
        'https://www.googleapis.com/auth/yt-analytics.readonly',
    
        // View monetary and non-monetary YouTube Analytics reports for your YouTube content
        'https://www.googleapis.com/auth/yt-analytics-monetary.readonly',
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

After that you can use YouTube Reporting API resources:

```typescript
gapi.client.media.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.jobs.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.reportTypes.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```