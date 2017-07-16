# Typescript typings for Admin Directory API
The Admin SDK Directory API lets you view and manage enterprise resources such as users and groups, administrative notifications, security features, and more.
For detailed description please check [documentation](https://developers.google.com/admin-sdk/directory/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Admin Directory API:
```
typings install gapi.client.admin --save 
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
gapi.client.load('admin', 'directory_v1', () => {
    // now we can use gapi.client.admin
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage customer related information
        'https://www.googleapis.com/auth/admin.directory.customer',
    
        // View customer related information
        'https://www.googleapis.com/auth/admin.directory.customer.readonly',
    
        // View and manage your Chrome OS devices' metadata
        'https://www.googleapis.com/auth/admin.directory.device.chromeos',
    
        // View your Chrome OS devices' metadata
        'https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly',
    
        // View and manage your mobile devices' metadata
        'https://www.googleapis.com/auth/admin.directory.device.mobile',
    
        // Manage your mobile devices by performing administrative tasks
        'https://www.googleapis.com/auth/admin.directory.device.mobile.action',
    
        // View your mobile devices' metadata
        'https://www.googleapis.com/auth/admin.directory.device.mobile.readonly',
    
        // View and manage the provisioning of domains for your customers
        'https://www.googleapis.com/auth/admin.directory.domain',
    
        // View domains related to your customers
        'https://www.googleapis.com/auth/admin.directory.domain.readonly',
    
        // View and manage the provisioning of groups on your domain
        'https://www.googleapis.com/auth/admin.directory.group',
    
        // View and manage group subscriptions on your domain
        'https://www.googleapis.com/auth/admin.directory.group.member',
    
        // View group subscriptions on your domain
        'https://www.googleapis.com/auth/admin.directory.group.member.readonly',
    
        // View groups on your domain
        'https://www.googleapis.com/auth/admin.directory.group.readonly',
    
        // View and manage notifications received on your domain
        'https://www.googleapis.com/auth/admin.directory.notifications',
    
        // View and manage organization units on your domain
        'https://www.googleapis.com/auth/admin.directory.orgunit',
    
        // View organization units on your domain
        'https://www.googleapis.com/auth/admin.directory.orgunit.readonly',
    
        // View and manage the provisioning of calendar resources on your domain
        'https://www.googleapis.com/auth/admin.directory.resource.calendar',
    
        // View calendar resources on your domain
        'https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly',
    
        // Manage delegated admin roles for your domain
        'https://www.googleapis.com/auth/admin.directory.rolemanagement',
    
        // View delegated admin roles for your domain
        'https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly',
    
        // View and manage the provisioning of users on your domain
        'https://www.googleapis.com/auth/admin.directory.user',
    
        // View and manage user aliases on your domain
        'https://www.googleapis.com/auth/admin.directory.user.alias',
    
        // View user aliases on your domain
        'https://www.googleapis.com/auth/admin.directory.user.alias.readonly',
    
        // View users on your domain
        'https://www.googleapis.com/auth/admin.directory.user.readonly',
    
        // Manage data access permissions for users on your domain
        'https://www.googleapis.com/auth/admin.directory.user.security',
    
        // View and manage the provisioning of user schemas on your domain
        'https://www.googleapis.com/auth/admin.directory.userschema',
    
        // View user schemas on your domain
        'https://www.googleapis.com/auth/admin.directory.userschema.readonly',
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

After that you can use Admin Directory API resources:

```typescript
gapi.client.asps.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.channels.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.chromeosdevices.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.customers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.domainAliases.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.domains.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.groups.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.members.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.mobiledevices.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.notifications.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.orgunits.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.privileges.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.resources.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.roleAssignments.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.roles.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.schemas.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.tokens.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.users.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.verificationCodes.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```