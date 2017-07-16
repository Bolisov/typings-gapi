# Typescript typings for Consumer Surveys API
Creates and conducts surveys, lists the surveys that an authenticated user owns, and retrieves survey results and information about specified surveys.
For detailed description please check [documentation](undefined).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Consumer Surveys API:
```
typings install gapi.client.consumersurveys --save 
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
gapi.client.load('consumersurveys', 'v2', () => {
    // now we can use gapi.client.consumersurveys
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and edit your surveys and results
        'https://www.googleapis.com/auth/consumersurveys',
    
        // View the results for your surveys
        'https://www.googleapis.com/auth/consumersurveys.readonly',
    
        // View your email address
        'https://www.googleapis.com/auth/userinfo.email',
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

After that you can use Consumer Surveys API resources:

```typescript
gapi.client.mobileapppanels.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.results.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.surveys.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```