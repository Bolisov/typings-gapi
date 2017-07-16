# Typescript typings for Google Play EMM API
Manages the deployment of apps to Android for Work users.
For detailed description please check [documentation](https://developers.google.com/android/work/play/emm-api).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Play EMM API:
```
typings install gapi.client.androidenterprise --save 
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
gapi.client.load('androidenterprise', 'v1', () => {
    // now we can use gapi.client.androidenterprise
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage corporate Android devices
        'https://www.googleapis.com/auth/androidenterprise',
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

After that you can use Google Play EMM API resources:

```typescript
gapi.client.devices.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.enterprises.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.entitlements.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.grouplicenses.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.grouplicenseusers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.installs.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.managedconfigurationsfordevice.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.managedconfigurationsforuser.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.permissions.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.products.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.serviceaccountkeys.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.storelayoutclusters.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.storelayoutpages.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.users.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```