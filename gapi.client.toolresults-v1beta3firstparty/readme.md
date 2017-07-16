# Typescript typings for Cloud Tool Results firstparty API
Reads and publishes results from Firebase Test Lab.
For detailed description please check [documentation](https://firebase.google.com/docs/test-lab/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Cloud Tool Results firstparty API:
```
typings install gapi.client.toolresults --save 
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
gapi.client.load('toolresults', 'v1beta3firstparty', () => {
    // now we can use gapi.client.toolresults
    // ... 
});```



After that you can use Cloud Tool Results firstparty API resources:

```typescript
gapi.client.projects.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```