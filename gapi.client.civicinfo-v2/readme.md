# Typescript typings for Google Civic Information API
Provides polling places, early vote locations, contest data, election officials, and government representatives for U.S. residential addresses.
For detailed description please check [documentation](https://developers.google.com/civic-information).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Civic Information API:
```
typings install gapi.client.civicinfo --save 
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
gapi.client.load('civicinfo', 'v2', () => {
    // now we can use gapi.client.civicinfo
    // ... 
});```



After that you can use Google Civic Information API resources:

```typescript
gapi.client.divisions.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.elections.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.representatives.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```