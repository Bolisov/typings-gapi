# Typescript typings for Google Flight Availability API
The Google Flight Availability API provides flight availability to partner airlines.

For detailed description please check [documentation](https://devsite.googleplex.com/flightavailability).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Flight Availability API:
```
typings install gapi.client.flightavailability --save 
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
gapi.client.load('flightavailability', 'v1', () => {
    // now we can use gapi.client.flightavailability
    // ... 
});```



After that you can use Google Flight Availability API resources:

```typescript
gapi.client.v1.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```