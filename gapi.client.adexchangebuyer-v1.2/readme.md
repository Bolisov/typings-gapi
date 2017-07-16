# Typescript typings for Ad Exchange Buyer API
Accesses your bidding-account information, submits creatives for validation, finds available direct deals, and retrieves performance reports.
For detailed description please check [documentation](https://developers.google.com/ad-exchange/buyer-rest).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Ad Exchange Buyer API:
```
typings install gapi.client.adexchangebuyer --save 
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
gapi.client.load('adexchangebuyer', 'v1.2', () => {
    // now we can use gapi.client.adexchangebuyer
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your Ad Exchange buyer account configuration
        'https://www.googleapis.com/auth/adexchange.buyer',
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

After that you can use Ad Exchange Buyer API resources:

```typescript
gapi.client.accounts.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.creatives.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```