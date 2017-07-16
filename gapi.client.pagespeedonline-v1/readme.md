# Typescript typings for PageSpeed Insights API
Analyzes the performance of a web page and provides tailored suggestions to make that page faster.
For detailed description please check [documentation](https://developers.google.com/speed/docs/insights/v1/getting_started).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for PageSpeed Insights API:
```
typings install gapi.client.pagespeedonline --save 
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
gapi.client.load('pagespeedonline', 'v1', () => {
    // now we can use gapi.client.pagespeedonline
    // ... 
});```



After that you can use PageSpeed Insights API resources:

```typescript
gapi.client.pagespeedapi.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```