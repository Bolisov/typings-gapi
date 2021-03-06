# Typescript typings for Stackdriver Monitoring API
Manages your Stackdriver Monitoring data and configurations. Most projects must be associated with a Stackdriver account, with a few exceptions as noted on the individual method pages.
For detailed description please check [documentation](https://cloud.google.com/monitoring/api/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Stackdriver Monitoring API:
```
typings install gapi.client.monitoring --save 
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
gapi.client.load('monitoring', 'v3', () => {
    // now we can use gapi.client.monitoring
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and write monitoring data for all of your Google and third-party Cloud and API projects
        'https://www.googleapis.com/auth/monitoring',
    
        // Publish metric data to your Google Cloud projects
        'https://www.googleapis.com/auth/monitoring.write',
    
        // View monitoring data for all of your Google Cloud and third-party projects
        'https://www.googleapis.com/auth/monitoring.read',
    
        // View and manage your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform',
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

After that you can use Stackdriver Monitoring API resources:

```typescript
gapi.client.projects.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```