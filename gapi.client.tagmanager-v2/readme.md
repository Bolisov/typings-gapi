# Typescript typings for Tag Manager API
Accesses Tag Manager accounts and containers.
For detailed description please check [documentation](https://developers.google.com/tag-manager/api/v2/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Tag Manager API:
```
typings install gapi.client.tagmanager --save 
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
gapi.client.load('tagmanager', 'v2', () => {
    // now we can use gapi.client.tagmanager
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Delete your Google Tag Manager containers
        'https://www.googleapis.com/auth/tagmanager.delete.containers',
    
        // Manage your Google Tag Manager container and its subcomponents, excluding versioning and publishing
        'https://www.googleapis.com/auth/tagmanager.edit.containers',
    
        // Manage your Google Tag Manager container versions
        'https://www.googleapis.com/auth/tagmanager.edit.containerversions',
    
        // View and manage your Google Tag Manager accounts
        'https://www.googleapis.com/auth/tagmanager.manage.accounts',
    
        // Manage user permissions of your Google Tag Manager account and container
        'https://www.googleapis.com/auth/tagmanager.manage.users',
    
        // Publish your Google Tag Manager container versions
        'https://www.googleapis.com/auth/tagmanager.publish',
    
        // View your Google Tag Manager container and its subcomponents
        'https://www.googleapis.com/auth/tagmanager.readonly',
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

After that you can use Tag Manager API resources:

```typescript
gapi.client.accounts.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```