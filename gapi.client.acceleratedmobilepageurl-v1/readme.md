# Typescript typings for Accelerated Mobile Pages (AMP) URL API
Retrieves the list of AMP URL (and equivalent AMP Cache URL) for a given list of public URL(s).

For detailed description please check [documentation](https://developers.google.com/amp/cache/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Accelerated Mobile Pages (AMP) URL API:
```
typings install gapi.client.acceleratedmobilepageurl --save 
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
gapi.client.load('acceleratedmobilepageurl', 'v1', () => {
    // now we can use gapi.client.acceleratedmobilepageurl
    // ... 
});```



After that you can use Accelerated Mobile Pages (AMP) URL API resources:

```typescript
gapi.client.ampUrls.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```