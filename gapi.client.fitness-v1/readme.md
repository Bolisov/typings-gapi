# Typescript typings for Fitness
Stores and accesses user data in the fitness store from apps on any platform.
For detailed description please check [documentation](https://developers.google.com/fit/rest/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Fitness:
```
typings install gapi.client.fitness --save 
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
gapi.client.load('fitness', 'v1', () => {
    // now we can use gapi.client.fitness
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View your activity information in Google Fit
        'https://www.googleapis.com/auth/fitness.activity.read',
    
        // View and store your activity information in Google Fit
        'https://www.googleapis.com/auth/fitness.activity.write',
    
        // View blood glucose data in Google Fit
        'https://www.googleapis.com/auth/fitness.blood_glucose.read',
    
        // View and store blood glucose data in Google Fit
        'https://www.googleapis.com/auth/fitness.blood_glucose.write',
    
        // View blood pressure data in Google Fit
        'https://www.googleapis.com/auth/fitness.blood_pressure.read',
    
        // View and store blood pressure data in Google Fit
        'https://www.googleapis.com/auth/fitness.blood_pressure.write',
    
        // View body sensor information in Google Fit
        'https://www.googleapis.com/auth/fitness.body.read',
    
        // View and store body sensor data in Google Fit
        'https://www.googleapis.com/auth/fitness.body.write',
    
        // View body temperature data in Google Fit
        'https://www.googleapis.com/auth/fitness.body_temperature.read',
    
        // View and store body temperature data in Google Fit
        'https://www.googleapis.com/auth/fitness.body_temperature.write',
    
        // View your stored location data in Google Fit
        'https://www.googleapis.com/auth/fitness.location.read',
    
        // View and store your location data in Google Fit
        'https://www.googleapis.com/auth/fitness.location.write',
    
        // View nutrition information in Google Fit
        'https://www.googleapis.com/auth/fitness.nutrition.read',
    
        // View and store nutrition information in Google Fit
        'https://www.googleapis.com/auth/fitness.nutrition.write',
    
        // View oxygen saturation data in Google Fit
        'https://www.googleapis.com/auth/fitness.oxygen_saturation.read',
    
        // View and store oxygen saturation data in Google Fit
        'https://www.googleapis.com/auth/fitness.oxygen_saturation.write',
    
        // View reproductive health data in Google Fit
        'https://www.googleapis.com/auth/fitness.reproductive_health.read',
    
        // View and store reproductive health data in Google Fit
        'https://www.googleapis.com/auth/fitness.reproductive_health.write',
    ],
    immediate = true;
// ...

gapi.auth.authorize({ client_id: client_id, scope: scope, immediate: immediate }, authResult => {
    if (authResult && !authResult.error) {
        /* handle succesfull authorization */
    } else {
        /* handle authorization error */
    }
});            
```

After that you can use Fitness resources:

```typescript
gapi.client.users.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```