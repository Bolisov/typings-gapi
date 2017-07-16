# Typescript typings for CustomSearch API
Searches over a website or collection of websites
For detailed description please check [documentation](https://developers.google.com/custom-search/v1/using_rest).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for CustomSearch API:
```
typings install gapi.client.customsearch --save 
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
gapi.client.load('customsearch', 'v1', () => {
    // now we can use gapi.client.customsearch
    // ... 
});```



After that you can use CustomSearch API resources:

```typescript
gapi.client.cse.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```