# Typescript typings for Compute Engine API
Creates and runs virtual machines on Google Cloud Platform.
For detailed description please check [documentation](https://developers.google.com/compute/docs/reference/latest/).

## Installing

First you need to install *typings*:
```
npm install typings --save 
```

Then install typings for *Google API client*:
```
typings install gapi.client --save 
```

And finally install typings for Compute Engine API:
```
typings install gapi.client.compute --save 
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
gapi.client.load('compute', 'alpha', () => {
    // now we can use gapi.client.compute
    // ... 
});```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform',
    
        // View and manage your Google Compute Engine resources
        'https://www.googleapis.com/auth/compute',
    
        // View your Google Compute Engine resources
        'https://www.googleapis.com/auth/compute.readonly',
    
        // Manage your data and permissions in Google Cloud Storage
        'https://www.googleapis.com/auth/devstorage.full_control',
    
        // View your data in Google Cloud Storage
        'https://www.googleapis.com/auth/devstorage.read_only',
    
        // Manage your data in Google Cloud Storage
        'https://www.googleapis.com/auth/devstorage.read_write',
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

After that you can use Compute Engine API resources:

```typescript
gapi.client.acceleratorTypes.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.addresses.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.autoscalers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.backendBuckets.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.backendServices.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.clientSslPolicies.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.diskTypes.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.disks.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.firewalls.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.forwardingRules.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.globalAddresses.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.globalForwardingRules.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.globalOperations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.healthChecks.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.hostTypes.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.hosts.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.httpHealthChecks.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.httpsHealthChecks.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.images.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.instanceGroupManagers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.instanceGroups.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.instanceTemplates.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.instances.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.interconnectAttachments.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.interconnectLocations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.interconnects.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.licenses.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.machineTypes.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.networks.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.projects.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.regionAutoscalers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.regionBackendServices.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.regionCommitments.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.regionDiskTypes.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.regionDisks.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.regionInstanceGroupManagers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.regionInstanceGroups.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.regionOperations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.regions.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.routers.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.routes.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.securityPolicies.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.snapshots.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.sslCertificates.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.subnetworks.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.targetHttpProxies.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.targetHttpsProxies.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.targetInstances.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.targetPools.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.targetSslProxies.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.targetTcpProxies.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.targetVpnGateways.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.urlMaps.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.vpnTunnels.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.zoneOperations.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });

gapi.client.zones.<method name>({ /* method parameters */ })
    .then(response => { /* handling response */ });
```