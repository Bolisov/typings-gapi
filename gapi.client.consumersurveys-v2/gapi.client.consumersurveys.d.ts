// Type definitions for Google Consumer Surveys API v2
// Project: undefined
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.consumersurveys {
    
    interface FieldMask {
        // 
        fields?: FieldMask[],        
        // 
        id?: number,
    }
    
    interface MobileAppPanel {
        // 
        country?: string,
        // 
        isPublicPanel?: boolean,
        // 
        language?: string,
        // 
        mobileAppPanelId?: string,
        // 
        name?: string,
        // 
        owners?: string[],        
    }
    
    interface MobileAppPanelsListResponse {
        // 
        pageInfo?: PageInfo,
        // Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests.
        requestId?: string,
        // An individual predefined panel of Opinion Rewards mobile users.
        resources?: MobileAppPanel[],        
        // 
        tokenPagination?: TokenPagination,
    }
    
    interface PageInfo {
        // 
        resultPerPage?: number,
        // 
        startIndex?: number,
        // 
        totalResults?: number,
    }
    
    interface ResultsGetRequest {
        // 
        resultMask?: ResultsMask,
    }
    
    interface ResultsMask {
        // 
        fields?: FieldMask[],        
        // 
        projection?: string,
    }
    
    interface Survey {
        // 
        audience?: SurveyAudience,
        // 
        cost?: SurveyCost,
        // 
        customerData?: string,
        // 
        description?: string,
        // 
        owners?: string[],        
        // 
        questions?: SurveyQuestion[],        
        // 
        rejectionReason?: SurveyRejection,
        // 
        state?: string,
        // 
        surveyUrlId?: string,
        // 
        title?: string,
        // 
        wantedResponseCount?: number,
    }
    
    interface SurveyAudience {
        // 
        ages?: string[],        
        // 
        country?: string,
        // 
        countrySubdivision?: string,
        // 
        gender?: string,
        // 
        languages?: string[],        
        // 
        mobileAppPanelId?: string,
        // 
        populationSource?: string,
    }
    
    interface SurveyCost {
        // 
        costPerResponseNanos?: string,
        // 
        currencyCode?: string,
        // 
        maxCostPerResponseNanos?: string,
        // 
        nanos?: string,
    }
    
    interface SurveyQuestion {
        // 
        answerOrder?: string,
        // 
        answers?: string[],        
        // 
        hasOther?: boolean,
        // 
        highValueLabel?: string,
        // 
        images?: SurveyQuestionImage[],        
        // 
        lastAnswerPositionPinned?: boolean,
        // 
        lowValueLabel?: string,
        // 
        mustPickSuggestion?: boolean,
        // 
        numStars?: string,
        // 
        openTextPlaceholder?: string,
        // 
        openTextSuggestions?: string[],        
        // 
        question?: string,
        // 
        sentimentText?: string,
        // 
        singleLineResponse?: boolean,
        // 
        thresholdAnswers?: string[],        
        // 
        type?: string,
        // 
        unitOfMeasurementLabel?: string,
        // 
        videoId?: string,
    }
    
    interface SurveyQuestionImage {
        // 
        altText?: string,
        // 
        data?: string,
        // 
        url?: string,
    }
    
    interface SurveyRejection {
        // 
        explanation?: string,
        // 
        type?: string,
    }
    
    interface SurveyResults {
        // 
        status?: string,
        // 
        surveyUrlId?: string,
    }
    
    interface SurveysDeleteResponse {
        // Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests.
        requestId?: string,
    }
    
    interface SurveysListResponse {
        // 
        pageInfo?: PageInfo,
        // Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests.
        requestId?: string,
        // An individual survey resource.
        resources?: Survey[],        
        // 
        tokenPagination?: TokenPagination,
    }
    
    interface SurveysStartRequest {
        // Threshold to start a survey automically if the quoted prices is less than or equal to this value. See Survey.Cost for more details.
        maxCostPerResponseNanos?: string,
    }
    
    interface SurveysStartResponse {
        // Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests.
        requestId?: string,
    }
    
    interface SurveysStopResponse {
        // Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests.
        requestId?: string,
    }
    
    interface TokenPagination {
        // 
        nextPageToken?: string,
        // 
        previousPageToken?: string,
    }
    
    interface MobileapppanelsResource {
        // Retrieves a MobileAppPanel that is available to the authenticated user.
        get (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // External URL ID for the panel.
            panelId: string,
        }) : gapi.client.Request<MobileAppPanel>;        
        
        // Lists the MobileAppPanels available to the authenticated user.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // 
            maxResults?: number,
            // 
            startIndex?: number,
            // 
            token?: string,
        }) : gapi.client.Request<MobileAppPanelsListResponse>;        
        
        // Updates a MobileAppPanel. Currently the only property that can be updated is the owners property.
        update (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // External URL ID for the panel.
            panelId: string,
        }) : gapi.client.Request<MobileAppPanel>;        
        
    }
    
    
    interface ResultsResource {
        // Retrieves any survey results that have been produced so far. Results are formatted as an Excel file. You must add "?alt=media" to the URL as an argument to get results.
        get (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // External URL ID for the survey.
            surveyUrlId: string,
        }) : gapi.client.Request<SurveyResults>;        
        
    }
    
    
    interface SurveysResource {
        // Removes a survey from view in all user GET requests.
        delete (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // External URL ID for the survey.
            surveyUrlId: string,
        }) : gapi.client.Request<SurveysDeleteResponse>;        
        
        // Retrieves information about the specified survey.
        get (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // External URL ID for the survey.
            surveyUrlId: string,
        }) : gapi.client.Request<Survey>;        
        
        // Creates a survey.
        insert (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
        }) : gapi.client.Request<Survey>;        
        
        // Lists the surveys owned by the authenticated user.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // 
            maxResults?: number,
            // 
            startIndex?: number,
            // 
            token?: string,
        }) : gapi.client.Request<SurveysListResponse>;        
        
        // Begins running a survey.
        start (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // 
            resourceId: string,
        }) : gapi.client.Request<SurveysStartResponse>;        
        
        // Stops a running survey.
        stop (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // 
            resourceId: string,
        }) : gapi.client.Request<SurveysStopResponse>;        
        
        // Updates a survey. Currently the only property that can be updated is the owners property.
        update (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // External URL ID for the survey.
            surveyUrlId: string,
        }) : gapi.client.Request<Survey>;        
        
    }
    
}

declare module gapi.client.consumersurveys {
    var mobileapppanels: gapi.client.consumersurveys.MobileapppanelsResource; 
    
    var results: gapi.client.consumersurveys.ResultsResource; 
    
    var surveys: gapi.client.consumersurveys.SurveysResource; 
    
}
