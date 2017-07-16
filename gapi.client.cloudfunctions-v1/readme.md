# Typescript typings for Google Cloud Functions API
API for managing lightweight user-provided functions executed in response to events.
For detailed description please check [documentation](https://cloud.google.com/functions).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Cloud Functions API:
```
typings install gapi.client.cloudfunctions --save 
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
gapi.client.load('cloudfunctions', 'v1', () => {
    // now we can use gapi.client.cloudfunctions
    // ... 
});```



After that you can use Google Cloud Functions API resources:

```typescript```