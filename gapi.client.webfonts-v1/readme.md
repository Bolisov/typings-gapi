# Typescript typings for Google Fonts Developer API
Accesses the metadata for all families served by Google Fonts, providing a list of families currently available (including available styles and a list of supported script subsets).
For detailed description please check [documentation](https://developers.google.com/fonts/docs/developer_api).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Fonts Developer API:
```
typings install gapi.client.webfonts --save 
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
gapi.client.load('webfonts', 'v1', () => {
    // now we can use gapi.client.webfonts
    // ... 
});```



After that you can use Google Fonts Developer API resources:

```typescript
gapi.client.webfonts.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```