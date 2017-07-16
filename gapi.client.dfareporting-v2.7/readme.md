# Typescript typings for DCM/DFA Reporting And Trafficking API
Manages your DoubleClick Campaign Manager ad campaigns and reports.
For detailed description please check [documentation](https://developers.google.com/doubleclick-advertisers/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for DCM/DFA Reporting And Trafficking API:
```
typings install gapi.client.dfareporting --save 
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
gapi.client.load('dfareporting', 'v2.7', () => {
    // now we can use gapi.client.dfareporting
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage DoubleClick Digital Marketing conversions
        'https://www.googleapis.com/auth/ddmconversions',
    
        // View and manage DoubleClick for Advertisers reports
        'https://www.googleapis.com/auth/dfareporting',
    
        // View and manage your DoubleClick Campaign Manager's (DCM) display ad campaigns
        'https://www.googleapis.com/auth/dfatrafficking',
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

After that you can use DCM/DFA Reporting And Trafficking API resources:

```typescript
gapi.client.accountActiveAdSummaries.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.accountPermissionGroups.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.accountPermissions.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.accountUserProfiles.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.accounts.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.ads.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.advertiserGroups.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.advertisers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.browsers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.campaignCreativeAssociations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.campaigns.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.changeLogs.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.cities.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.connectionTypes.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.contentCategories.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.conversions.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.countries.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.creativeAssets.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.creativeFieldValues.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.creativeFields.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.creativeGroups.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.creatives.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dimensionValues.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.directorySiteContacts.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.directorySites.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.dynamicTargetingKeys.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.eventTags.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.files.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.floodlightActivities.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.floodlightActivityGroups.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.floodlightConfigurations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.inventoryItems.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.landingPages.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.languages.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.metros.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.mobileCarriers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.operatingSystemVersions.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.operatingSystems.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.orderDocuments.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.orders.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.placementGroups.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.placementStrategies.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.placements.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.platformTypes.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.postalCodes.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.projects.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.regions.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.remarketingListShares.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.remarketingLists.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.reports.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.sites.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.sizes.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.subaccounts.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.targetableRemarketingLists.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.targetingTemplates.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.userProfiles.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.userRolePermissionGroups.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.userRolePermissions.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.userRoles.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.videoFormats.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```