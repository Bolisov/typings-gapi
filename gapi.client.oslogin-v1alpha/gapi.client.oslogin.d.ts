// Type definitions for Google Google Cloud OS Login API v1alpha
// Project: https://developers.google.com/apis-explorer/#p/oslogin/v1alpha/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.oslogin {
    
    interface PosixAccount {
        // The path to the logic shell for this account.
        shell?: string,
        // The path to the home directory for this account.
        homeDirectory?: string,
        // System identifier for which account the username or uid applies to.
        // By default, the empty value is used.
        systemId?: string,
        // The GECOS (user information) entry for this account.
        gecos?: string,
        // Only one POSIX account can be marked as primary.
        primary?: boolean,
        // The default group ID.
        gid?: number,
        // The user ID.
        uid?: number,
        // The username of the POSIX account.
        username?: string,
    }
    
    interface LoginProfile {
        // The list of POSIX accounts associated with the Directory API user.
        posixAccounts?: PosixAccount[],        
        // A unique user ID for identifying the user.
        name?: string,
        // Indicates if the user is suspended.
        suspended?: boolean,
        // A map from SSH public key fingerprint to the associated key object.
        sshPublicKeys?: any,
    }
    
    interface SshPublicKey {
        // An expiration time in microseconds since epoch.
        expirationTimeUsec?: string,
        // [Output Only] The SHA-256 fingerprint of the SSH public key.
        fingerprint?: string,
        // Public key text in SSH format, defined by
        // <a href="https://www.ietf.org/rfc/rfc4253.txt" target="_blank">RFC4253</a>
        // section 6.6.
        key?: string,
    }
    
    interface Empty {
    }
    
    interface ImportSshPublicKeyResponse {
        // The login profile information for the user.
        loginProfile?: LoginProfile,
    }
    
    interface SshPublicKeysResource {
        // Updates an SSH public key and returns the profile information. This method
        // supports patch semantics.
        patch (request: {        
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
            // Data format for response.
            alt?: string,
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Mask to control which fields get updated. Updates all if not present.
            updateMask?: string,
            // The fingerprint of the public key to update. Public keys are identified by
            // their SHA-256 fingerprint. The fingerprint of the public key is in format
            // `users/{user}/sshPublicKeys/{fingerprint}`.
            name: string,
        }) : gapi.client.Request<SshPublicKey>;        
        
        // Retrieves an SSH public key.
        get (request: {        
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
            // Data format for response.
            alt?: string,
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // The fingerprint of the public key to retrieve. Public keys are identified
            // by their SHA-256 fingerprint. The fingerprint of the public key is in
            // format `users/{user}/sshPublicKeys/{fingerprint}`.
            name: string,
        }) : gapi.client.Request<SshPublicKey>;        
        
        // Deletes an SSH public key.
        delete (request: {        
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
            // Data format for response.
            alt?: string,
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // The fingerprint of the public key to update. Public keys are identified by
            // their SHA-256 fingerprint. The fingerprint of the public key is in format
            // `users/{user}/sshPublicKeys/{fingerprint}`.
            name: string,
        }) : gapi.client.Request<Empty>;        
        
    }
    
    
    interface UsersResource {
        // Adds an SSH public key and returns the profile information. Default POSIX
        // account information is set when no username and UID exist as part of the
        // login profile.
        importSshPublicKey (request: {        
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
            // Data format for response.
            alt?: string,
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // The unique ID for the user in format `users/{user}`.
            parent: string,
        }) : gapi.client.Request<ImportSshPublicKeyResponse>;        
        
        // Retrieves the profile information used for logging in to a virtual machine
        // on Google Compute Engine.
        getLoginProfile (request: {        
            // JSONP
            callback?: string,
            // V1 error format.
            $.xgafv?: string,
            // Data format for response.
            alt?: string,
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // The unique ID for the user in format `users/{user}`.
            name: string,
        }) : gapi.client.Request<LoginProfile>;        
        
        sshPublicKeys: SshPublicKeysResource,
    }
    
}

declare module gapi.client.oslogin {
    var users: gapi.client.oslogin.UsersResource; 
    
}
