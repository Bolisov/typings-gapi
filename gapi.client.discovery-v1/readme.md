# Typescript typings for APIs Discovery Service
Provides information about other Google APIs, such as what APIs are available, the resource, and method details for each API.
For detailed description please check [documentation](https://developers.google.com/discovery/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for APIs Discovery Service:
```
typings install gapi.client.discovery --save 
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
gapi.client.load('discovery', 'v1', () => {
    // now we can use gapi.client.discovery
    // ... 
});```



After that you can use APIs Discovery Service resources:

```typescript
gapi.client.apis.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```