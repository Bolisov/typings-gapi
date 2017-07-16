# Typescript typings for Google Classroom API
Manages classes, rosters, and invitations in Google Classroom.
For detailed description please check [documentation](https://developers.google.com/classroom/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Google Classroom API:
```
typings install gapi.client.classroom --save 
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
gapi.client.load('classroom', 'v1', () => {
    // now we can use gapi.client.classroom
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View guardians for students in your Google Classroom classes
        'https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly',
    
        // Manage your Google Classroom classes
        'https://www.googleapis.com/auth/classroom.courses',
    
        // View your Google Classroom classes
        'https://www.googleapis.com/auth/classroom.courses.readonly',
    
        // View your Google Classroom class rosters
        'https://www.googleapis.com/auth/classroom.rosters.readonly',
    
        // View the profile photos of people in your classes
        'https://www.googleapis.com/auth/classroom.profile.photos',
    
        // View and manage guardians for students in your Google Classroom classes
        'https://www.googleapis.com/auth/classroom.guardianlinks.students',
    
        // View your course work and grades in Google Classroom
        'https://www.googleapis.com/auth/classroom.student-submissions.me.readonly',
    
        // Manage course work and grades for students in the Google Classroom classes you teach and view the course work and grades for classes you administer
        'https://www.googleapis.com/auth/classroom.coursework.students',
    
        // View course work and grades for students in the Google Classroom classes you teach or administer
        'https://www.googleapis.com/auth/classroom.coursework.students.readonly',
    
        // View your Google Classroom guardians
        'https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly',
    
        // View your course work and grades in Google Classroom
        'https://www.googleapis.com/auth/classroom.coursework.me.readonly',
    
        // View the email addresses of people in your classes
        'https://www.googleapis.com/auth/classroom.profile.emails',
    
        // Manage your course work and view your grades in Google Classroom
        'https://www.googleapis.com/auth/classroom.coursework.me',
    
        // Manage your Google Classroom class rosters
        'https://www.googleapis.com/auth/classroom.rosters',
    
        // View course work and grades for students in the Google Classroom classes you teach or administer
        'https://www.googleapis.com/auth/classroom.student-submissions.students.readonly',
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

After that you can use Google Classroom API resources:

```typescript
gapi.client.invitations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.userProfiles.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.courses.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```