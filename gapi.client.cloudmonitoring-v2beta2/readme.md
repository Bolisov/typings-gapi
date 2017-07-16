# Typescript typings for Cloud Monitoring API
Accesses Google Cloud Monitoring data.
For detailed description please check [documentation](https://cloud.google.com/monitoring/v2beta2/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Cloud Monitoring API:
```
typings install gapi.client.cloudmonitoring --save 
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
gapi.client.load('cloudmonitoring', 'v2beta2', () => {
    // now we can use gapi.client.cloudmonitoring
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform',
    
        // View and write monitoring data for all of your Google and third-party Cloud and API projects
        'https://www.googleapis.com/auth/monitoring',
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

After that you can use Cloud Monitoring API resources:

```typescript
gapi.client.metricDescriptors.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.timeseries.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.timeseriesDescriptors.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```