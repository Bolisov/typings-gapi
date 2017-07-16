# Typescript typings for Google Safe Browsing API
The Safe Browsing API is an experimental API that allows client applications to check URLs against Google's constantly-updated blacklists of suspected phishing and malware pages. Your client application can use the API to download an encrypted table for local, client-side lookups of URLs.
For detailed description please check [documentation](https://developers.google.com/safe-browsing/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Safe Browsing API:
```
typings install gapi.client.safebrowsing --save 
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
gapi.client.load('safebrowsing', 'v4', () => {
    // now we can use gapi.client.safebrowsing
    // ... 
});```



After that you can use Google Safe Browsing API resources:

```typescript
gapi.client.fullHashes.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.encodedUpdates.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.threatListUpdates.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.encodedFullHashes.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.threatLists.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.threatMatches.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```