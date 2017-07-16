# Typescript typings for Google Search Console URL Testing Tools API
Provides tools for running validation tests against single URLs
For detailed description please check [documentation](https://developers.google.com/webmaster-tools/search-console-api/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Search Console URL Testing Tools API:
```
typings install gapi.client.searchconsole --save 
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
gapi.client.load('searchconsole', 'v1', () => {
    // now we can use gapi.client.searchconsole
    // ... 
});```



After that you can use Google Search Console URL Testing Tools API resources:

```typescript
gapi.client.urlTestingTools.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```