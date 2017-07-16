# Typescript typings for Gmail API
Access Gmail mailboxes including sending user email.
For detailed description please check [documentation](https://developers.google.com/gmail/api/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Gmail API:
```
typings install gapi.client.gmail --save 
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
gapi.client.load('gmail', 'v1', () => {
    // now we can use gapi.client.gmail
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Read, send, delete, and manage your email
        'https://mail.google.com/',
    
        // Manage drafts and send emails
        'https://www.googleapis.com/auth/gmail.compose',
    
        // Insert mail into your mailbox
        'https://www.googleapis.com/auth/gmail.insert',
    
        // Manage mailbox labels
        'https://www.googleapis.com/auth/gmail.labels',
    
        // View your email message metadata such as labels and headers, but not the email body
        'https://www.googleapis.com/auth/gmail.metadata',
    
        // View and modify but not delete your email
        'https://www.googleapis.com/auth/gmail.modify',
    
        // View your emails messages and settings
        'https://www.googleapis.com/auth/gmail.readonly',
    
        // Send email on your behalf
        'https://www.googleapis.com/auth/gmail.send',
    
        // Manage your basic mail settings
        'https://www.googleapis.com/auth/gmail.settings.basic',
    
        // Manage your sensitive mail settings, including who can manage your mail
        'https://www.googleapis.com/auth/gmail.settings.sharing',
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

After that you can use Gmail API resources:

```typescript
gapi.client.users.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```