# Typescript typings for Knowledge Graph Search API
Searches the Google Knowledge Graph for entities.
For detailed description please check [documentation](https://developers.google.com/knowledge-graph/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Knowledge Graph Search API:
```
typings install gapi.client.kgsearch --save 
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
gapi.client.load('kgsearch', 'v1', () => {
    // now we can use gapi.client.kgsearch
    // ... 
});```



After that you can use Knowledge Graph Search API resources:

```typescript
gapi.client.entities.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```