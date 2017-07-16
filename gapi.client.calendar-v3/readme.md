# Typescript typings for Calendar API
Manipulates events and other calendar data.
For detailed description please check [documentation](https://developers.google.com/google-apps/calendar/firstapp).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Calendar API:
```
typings install gapi.client.calendar --save 
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
gapi.client.load('calendar', 'v3', () => {
    // now we can use gapi.client.calendar
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your calendars
        'https://www.googleapis.com/auth/calendar',
    
        // View your calendars
        'https://www.googleapis.com/auth/calendar.readonly',
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

After that you can use Calendar API resources:

```typescript
gapi.client.acl.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.calendarList.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.calendars.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.channels.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.colors.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.events.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.freebusy.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.settings.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```