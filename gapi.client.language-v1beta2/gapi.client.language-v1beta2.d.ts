// Type definitions for Google Google Cloud Natural Language API v1beta2
// Project: https://cloud.google.com/natural-language/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.language {
    
    interface Features {
        // Extract syntax information.
        extractSyntax?: boolean,
        // Extract document-level sentiment.
        extractDocumentSentiment?: boolean,
        // Extract entities and their associated sentiment.
        extractEntitySentiment?: boolean,
        // Extract entities.
        extractEntities?: boolean,
    }
    
    interface EntityMention {
        // The mention text.
        text?: TextSpan,
        // The type of the entity mention.
        type?: string,
        // For calls to AnalyzeEntitySentiment or if
        // AnnotateTextRequest.Features.extract_entity_sentiment is set to
        // true, this field will contain the sentiment expressed for this mention of
        // the entity in the provided document.
        sentiment?: Sentiment,
    }
    
    interface Document {
        // The Google Cloud Storage URI where the file content is located.
        // This URI must be of the form: gs://bucket_name/object_name. For more
        // details, see https://cloud.google.com/storage/docs/reference-uris.
        // NOTE: Cloud Storage object versioning is not supported.
        gcsContentUri?: string,
        // The language of the document (if not specified, the language is
        // automatically detected). Both ISO and BCP-47 language codes are
        // accepted.<br>
        // [Language Support](/natural-language/docs/languages)
        // lists currently supported languages for each API method.
        // If the language (either specified by the caller or automatically detected)
        // is not supported by the called API method, an `INVALID_ARGUMENT` error
        // is returned.
        language?: string,
        // Required. If the type is not set or is `TYPE_UNSPECIFIED`,
        // returns an `INVALID_ARGUMENT` error.
        type?: string,
        // The content of the input in string format.
        content?: string,
    }
    
    interface Sentence {
        // The sentence text.
        text?: TextSpan,
        // For calls to AnalyzeSentiment or if
        // AnnotateTextRequest.Features.extract_document_sentiment is set to
        // true, this field will contain the sentiment for the sentence.
        sentiment?: Sentiment,
    }
    
    interface AnalyzeEntitiesRequest {
        // The encoding type used by the API to calculate offsets.
        encodingType?: string,
        // Input document.
        document?: Document,
    }
    
    interface Sentiment {
        // Sentiment score between -1.0 (negative sentiment) and 1.0
        // (positive sentiment).
        score?: number,
        // A non-negative number in the [0, +inf) range, which represents
        // the absolute magnitude of sentiment regardless of score (positive or
        // negative).
        magnitude?: number,
    }
    
    interface AnalyzeEntitySentimentResponse {
        // The language of the text, which will be the same as the language specified
        // in the request or, if not specified, the automatically-detected language.
        // See Document.language field for more details.
        language?: string,
        // The recognized entities in the input document with associated sentiments.
        entities?: Entity[],        
    }
    
    interface AnalyzeEntitySentimentRequest {
        // The encoding type used by the API to calculate offsets.
        encodingType?: string,
        // Input document.
        document?: Document,
    }
    
    interface PartOfSpeech {
        // The grammatical case.
        case?: string,
        // The grammatical tense.
        tense?: string,
        // The grammatical reciprocity.
        reciprocity?: string,
        // The grammatical form.
        form?: string,
        // The grammatical number.
        number?: string,
        // The grammatical voice.
        voice?: string,
        // The grammatical aspect.
        aspect?: string,
        // The grammatical mood.
        mood?: string,
        // The part of speech tag.
        tag?: string,
        // The grammatical gender.
        gender?: string,
        // The grammatical person.
        person?: string,
        // The grammatical properness.
        proper?: string,
    }
    
    interface AnalyzeSyntaxRequest {
        // The encoding type used by the API to calculate offsets.
        encodingType?: string,
        // Input document.
        document?: Document,
    }
    
    interface AnalyzeSentimentResponse {
        // The overall sentiment of the input document.
        documentSentiment?: Sentiment,
        // The language of the text, which will be the same as the language specified
        // in the request or, if not specified, the automatically-detected language.
        // See Document.language field for more details.
        language?: string,
        // The sentiment for all the sentences in the document.
        sentences?: Sentence[],        
    }
    
    interface AnalyzeEntitiesResponse {
        // The language of the text, which will be the same as the language specified
        // in the request or, if not specified, the automatically-detected language.
        // See Document.language field for more details.
        language?: string,
        // The recognized entities in the input document.
        entities?: Entity[],        
    }
    
    interface Entity {
        // For calls to AnalyzeEntitySentiment or if
        // AnnotateTextRequest.Features.extract_entity_sentiment is set to
        // true, this field will contain the aggregate sentiment expressed for this
        // entity in the provided document.
        sentiment?: Sentiment,
        // The mentions of this entity in the input document. The API currently
        // supports proper noun mentions.
        mentions?: EntityMention[],        
        // The representative name for the entity.
        name?: string,
        // The entity type.
        type?: string,
        // Metadata associated with the entity.
        // 
        // Currently, Wikipedia URLs and Knowledge Graph MIDs are provided, if
        // available. The associated keys are "wikipedia_url" and "mid", respectively.
        metadata?: any,
        // The salience score associated with the entity in the [0, 1.0] range.
        // 
        // The salience score for an entity provides information about the
        // importance or centrality of that entity to the entire document text.
        // Scores closer to 0 are less salient, while scores closer to 1.0 are highly
        // salient.
        salience?: number,
    }
    
    interface AnalyzeSyntaxResponse {
        // The language of the text, which will be the same as the language specified
        // in the request or, if not specified, the automatically-detected language.
        // See Document.language field for more details.
        language?: string,
        // Sentences in the input document.
        sentences?: Sentence[],        
        // Tokens, along with their syntactic information, in the input document.
        tokens?: Token[],        
    }
    
    interface AnnotateTextRequest {
        // The encoding type used by the API to calculate offsets.
        encodingType?: string,
        // Input document.
        document?: Document,
        // The enabled features.
        features?: Features,
    }
    
    interface AnalyzeSentimentRequest {
        // The encoding type used by the API to calculate sentence offsets for the
        // sentence sentiment.
        encodingType?: string,
        // Input document.
        document?: Document,
    }
    
    interface AnnotateTextResponse {
        // The language of the text, which will be the same as the language specified
        // in the request or, if not specified, the automatically-detected language.
        // See Document.language field for more details.
        language?: string,
        // Sentences in the input document. Populated if the user enables
        // AnnotateTextRequest.Features.extract_syntax.
        sentences?: Sentence[],        
        // Tokens, along with their syntactic information, in the input document.
        // Populated if the user enables
        // AnnotateTextRequest.Features.extract_syntax.
        tokens?: Token[],        
        // Entities, along with their semantic information, in the input document.
        // Populated if the user enables
        // AnnotateTextRequest.Features.extract_entities.
        entities?: Entity[],        
        // The overall sentiment for the document. Populated if the user enables
        // AnnotateTextRequest.Features.extract_document_sentiment.
        documentSentiment?: Sentiment,
    }
    
    interface DependencyEdge {
        // The parse label for the token.
        label?: string,
        // Represents the head of this token in the dependency tree.
        // This is the index of the token which has an arc going to this token.
        // The index is the position of the token in the array of tokens returned
        // by the API method. If this token is a root token, then the
        // `head_token_index` is its own index.
        headTokenIndex?: number,
    }
    
    interface Token {
        // Parts of speech tag for this token.
        partOfSpeech?: PartOfSpeech,
        // The token text.
        text?: TextSpan,
        // Dependency tree parse for this token.
        dependencyEdge?: DependencyEdge,
        // [Lemma](https://en.wikipedia.org/wiki/Lemma_%28morphology%29) of the token.
        lemma?: string,
    }
    
    interface TextSpan {
        // The API calculates the beginning offset of the content in the original
        // document according to the EncodingType specified in the API request.
        beginOffset?: number,
        // The content of the output text.
        content?: string,
    }
    
    interface Status {
        // A list of messages that carry the error details.  There will be a
        // common set of message types for APIs to use.
        details?: any[],        
        // The status code, which should be an enum value of google.rpc.Code.
        code?: number,
        // A developer-facing error message, which should be in English. Any
        // user-facing error message should be localized and sent in the
        // google.rpc.Status.details field, or localized by the client.
        message?: string,
    }
    
    interface DocumentsResource {
        // Analyzes the sentiment of the provided text.
        analyzeSentiment (request: {        
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
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
        }) : gapi.client.Request<AnalyzeSentimentResponse>;        
        
        // A convenience method that provides all syntax, sentiment, entity, and
        // classification features in one call.
        annotateText (request: {        
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
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
        }) : gapi.client.Request<AnnotateTextResponse>;        
        
        // Finds entities, similar to AnalyzeEntities in the text and analyzes
        // sentiment associated with each entity and its mentions.
        analyzeEntitySentiment (request: {        
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
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
        }) : gapi.client.Request<AnalyzeEntitySentimentResponse>;        
        
        // Finds named entities (currently proper names and common nouns) in the text
        // along with entity types, salience, mentions for each entity, and
        // other properties.
        analyzeEntities (request: {        
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
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
        }) : gapi.client.Request<AnalyzeEntitiesResponse>;        
        
        // Analyzes the syntax of the text and provides sentence boundaries and
        // tokenization along with part of speech tags, dependency trees, and other
        // properties.
        analyzeSyntax (request: {        
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
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // OAuth bearer token.
            bearer_token?: string,
        }) : gapi.client.Request<AnalyzeSyntaxResponse>;        
        
    }
    
}

declare module gapi.client.language {
    var documents: gapi.client.language.DocumentsResource; 
    
}
