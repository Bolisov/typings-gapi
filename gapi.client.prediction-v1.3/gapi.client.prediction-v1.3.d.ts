// Type definitions for Google Prediction API v1.3
// Project: https://developers.google.com/prediction/docs/developer-guide
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.prediction {
    
    interface Input {
        // Input to the model for a prediction
        input?: {        
            // A list of input features, these can be strings or doubles.
            csvInstance?: any[],            
        },        
    }
    
    interface Output {
        // The unique name for the predictive model.
        id?: string,
        // What kind of resource this is.
        kind?: string,
        // The most likely class [Categorical models only].
        outputLabel?: string,
        // A list of classes with their estimated probabilities [Categorical models only].
        outputMulti?: {        
            // The class label.
            label?: string,
            // The probability of the class.
            score?: number,
        }[],        
        // The estimated regression value [Regression models only].
        outputValue?: number,
        // A URL to re-request this resource.
        selfLink?: string,
    }
    
    interface Training {
        // The unique name for the predictive model.
        id?: string,
        // What kind of resource this is.
        kind?: string,
        // Model metadata.
        modelInfo?: {        
            // Estimated accuracy of model taking utility weights into account [Categorical models only].
            classWeightedAccuracy?: number,
            // A number between 0.0 and 1.0, where 1.0 is 100% accurate. This is an estimate, based on the amount and quality of the training data, of the estimated prediction accuracy. You can use this is a guide to decide whether the results are accurate enough for your needs. This estimate will be more reliable if your real input data is similar to your training data [Categorical models only].
            classificationAccuracy?: number,
            // An output confusion matrix. This shows an estimate for how this model will do in predictions. This is first indexed by the true class label. For each true class label, this provides a pair {predicted_label, count}, where count is the estimated number of times the model will predict the predicted label given the true label. Will not output if more then 100 classes [Categorical models only].
            confusionMatrix?: any,
            // A list of the confusion matrix row totals
            confusionMatrixRowTotals?: any,
            // An estimated mean squared error. The can be used to measure the quality of the predicted model [Regression models only].
            meanSquaredError?: number,
            // Type of predictive model (CLASSIFICATION or REGRESSION)
            modelType?: string,
            // Number of classes in the trained model [Categorical models only].
            numberClasses?: string,
            // Number of valid data instances used in the trained model.
            numberInstances?: string,
        },        
        // A URL to re-request this resource.
        selfLink?: string,
        // The current status of the training job. This can be one of following: RUNNING; DONE; ERROR; ERROR: TRAINING JOB NOT FOUND
        trainingStatus?: string,
        // A class weighting function, which allows the importance weights for classes to be specified [Categorical models only].
        utility?: any[],        
    }
    
    interface Update {
        // The true class label of this instance
        classLabel?: string,
        // The input features for this instance
        csvInstance?: any[],        
    }
    
    interface HostedmodelsResource {
        // Submit input and request an output against a hosted model
        predict (request: {        
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
            // The name of a hosted model
            hostedModelName: string,
        }) : gapi.client.Request<Output>;        
        
    }
    
    
    interface TrainingResource {
        // Delete a trained model
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
            // mybucket/mydata resource in Google Storage
            data: string,
        }) : gapi.client.Request<void>;        
        
        // Check training status of your model
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
            // mybucket/mydata resource in Google Storage
            data: string,
        }) : gapi.client.Request<Training>;        
        
        // Begin training your model
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
        }) : gapi.client.Request<Training>;        
        
        // Submit data and request a prediction
        predict (request: {        
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
            // mybucket/mydata resource in Google Storage
            data: string,
        }) : gapi.client.Request<Output>;        
        
        // Add new data to a trained model
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
            // mybucket/mydata resource in Google Storage
            data: string,
        }) : gapi.client.Request<Training>;        
        
    }
    
}

declare module gapi.client.prediction {
    var hostedmodels: gapi.client.prediction.HostedmodelsResource; 
    
    var training: gapi.client.prediction.TrainingResource; 
    
}
