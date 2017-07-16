# Typescript typings for QPX Express API
Finds the least expensive flights between an origin and a destination.
For detailed description please check [documentation](http://developers.google.com/qpx-express).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for QPX Express API:
```
typings install gapi.client.qpxExpress --save 
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
gapi.client.load('qpxExpress', 'v1', () => {
    // now we can use gapi.client.qpxExpress
    // ... 
});```



After that you can use QPX Express API resources:

```typescript
gapi.client.trips.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```