# Typescript typings for Google Partners API
Searches certified companies and creates contact leads with them, and also audits the usage of clients.
For detailed description please check [documentation](https://developers.google.com/partners/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Partners API:
```
typings install gapi.client.partners --save 
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
gapi.client.load('partners', 'v2', () => {
    // now we can use gapi.client.partners
    // ... 
});```



After that you can use Google Partners API resources:

```typescript
gapi.client.users.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.companies.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.userEvents.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.clientMessages.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.exams.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.leads.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.offers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.analytics.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.userStates.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.v2.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```