# Typescript typings for Google Spectrum Database API
API for spectrum-management functions.
For detailed description please check [documentation](http://developers.google.com/spectrum).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Spectrum Database API:
```
typings install gapi.client.spectrum --save 
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
gapi.client.load('spectrum', 'v1explorer', () => {
    // now we can use gapi.client.spectrum
    // ... 
});```



After that you can use Google Spectrum Database API resources:

```typescript
gapi.client.paws.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```