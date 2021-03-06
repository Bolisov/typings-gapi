// Type definitions for Google Google Cloud Translation API v2
// Project: https://code.google.com/apis/language/translate/v2/getting_started.html
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.translate {
    
    interface LanguagesListResponse {
        // List of source/target languages supported by the translation API. If target parameter is unspecified, the list is sorted by the ASCII code point order of the language code. If target parameter is specified, the list is sorted by the collation order of the language name in the target language.
        languages?: LanguagesResource[],        
    }
    
    interface TranslationsResource {
        // The `model` type used for this translation. Valid values are
        // listed in public documentation. Can be different from requested `model`.
        // Present only if specific model type was explicitly requested.
        model?: string,
        // Text translated into the target language.
        translatedText?: string,
        // The source language of the initial request, detected automatically, if
        // no source language was passed within the initial request. If the
        // source language was passed, auto-detection of the language will not
        // occur and this field will be empty.
        detectedSourceLanguage?: string,
    }
    
    interface DetectionsResource {
    }
    
    interface TranslationsListResponse {
        // Translations contains list of translation results of given text
        translations?: TranslationsResource[],        
    }
    
    interface TranslateTextRequest {
        // The language to use for translation of the input text, set to one of the
        // language codes listed in Language Support.
        target?: string,
        // The format of the source text, in either HTML (default) or plain-text. A
        // value of "html" indicates HTML and a value of "text" indicates plain-text.
        format?: string,
        // The input text to translate. Repeat this parameter to perform translation
        // operations on multiple text inputs.
        q?: string[],        
        // The language of the source text, set to one of the language codes listed in
        // Language Support. If the source language is not specified, the API will
        // attempt to identify the source language automatically and return it within
        // the response.
        source?: string,
        // The `model` type requested for this translation. Valid values are
        // listed in public documentation.
        model?: string,
    }
    
    interface DetectLanguageRequest {
        // The input text upon which to perform language detection. Repeat this
        // parameter to perform language detection on multiple text inputs.
        q?: string[],        
    }
    
    interface LanguagesResource {
        // Human readable name of the language localized to the target language.
        name?: string,
        // Supported language code, generally consisting of its ISO 639-1
        // identifier. (E.g. 'en', 'ja'). In certain cases, BCP-47 codes including
        // language + region identifiers are returned (e.g. 'zh-TW' and 'zh-CH')
        language?: string,
    }
    
    interface DetectionsListResponse {
        // A detections contains detection results of several text
        detections?: DetectionsResource[],        
    }
    
    interface GetSupportedLanguagesRequest {
        // The language to use to return localized, human readable names of supported
        // languages.
        target?: string,
    }
    
    interface TranslationsResource {
        // Translates input text, returning translated text.
        list (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // The input text to translate. Repeat this parameter to perform translation
            // operations on multiple text inputs.
            q: string,
            // The language of the source text, set to one of the language codes listed in
            // Language Support. If the source language is not specified, the API will
            // attempt to identify the source language automatically and return it within
            // the response.
            source?: string,
            // The customization id for translate
            cid?: string,
            // The language to use for translation of the input text, set to one of the
            // language codes listed in Language Support.
            target: string,
            // The format of the source text, in either HTML (default) or plain-text. A
            // value of "html" indicates HTML and a value of "text" indicates plain-text.
            format?: string,
            // The `model` type requested for this translation. Valid values are
            // listed in public documentation.
            model?: string,
        }) : gapi.client.Request<TranslationsListResponse>;        
        
        // Translates input text, returning translated text.
        translate (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
        }) : gapi.client.Request<TranslationsListResponse>;        
        
    }
    
    
    interface DetectionsResource {
        // Detects the language of text within a request.
        detect (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
        }) : gapi.client.Request<DetectionsListResponse>;        
        
        // Detects the language of text within a request.
        list (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // The input text upon which to perform language detection. Repeat this
            // parameter to perform language detection on multiple text inputs.
            q: string,
        }) : gapi.client.Request<DetectionsListResponse>;        
        
    }
    
    
    interface LanguagesResource {
        // Returns a list of supported languages for translation.
        list (request: {        
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
            // The language to use to return localized, human readable names of supported
            // languages.
            target?: string,
            // The model type for which supported languages should be returned.
            model?: string,
        }) : gapi.client.Request<LanguagesListResponse>;        
        
    }
    
}

declare module gapi.client.translate {
    var translations: gapi.client.translate.TranslationsResource; 
    
    var detections: gapi.client.translate.DetectionsResource; 
    
    var languages: gapi.client.translate.LanguagesResource; 
    
}
