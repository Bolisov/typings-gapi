// Type definitions for Google Prediction API v1.5
// Project: https://developers.google.com/prediction/docs/developer-guide
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.prediction {
    
    interface Analyze {
        // Description of the data the model was trained on.
        dataDescription?: {        
            // Description of the input features in the data set.
            features?: {            
                // Description of the categorical values of this feature.
                categorical?: {                
                    // Number of categorical values for this feature in the data.
                    count?: string,
                    // List of all the categories for this feature in the data set.
                    values?: {                    
                        // Number of times this feature had this value.
                        count?: string,
                        // The category name.
                        value?: string,
                    }[],                    
                },                
                // The feature index.
                index?: string,
                // Description of the numeric values of this feature.
                numeric?: {                
                    // Number of numeric values for this feature in the data set.
                    count?: string,
                    // Mean of the numeric values of this feature in the data set.
                    mean?: number,
                    // Variance of the numeric values of this feature in the data set.
                    variance?: number,
                },                
                // Description of multiple-word text values of this feature.
                text?: {                
                    // Number of multiple-word text values for this feature.
                    count?: string,
                },                
            }[],            
            // Description of the output value or label.
            outputFeature?: {            
                // Description of the output values in the data set.
                numeric?: {                
                    // Number of numeric output values in the data set.
                    count?: string,
                    // Mean of the output values in the data set.
                    mean?: number,
                    // Variance of the output values in the data set.
                    variance?: number,
                },                
                // Description of the output labels in the data set.
                text?: {                
                    // Number of times the output label occurred in the data set.
                    count?: string,
                    // The output label.
                    value?: string,
                }[],                
            },            
        },        
        // List of errors with the data.
        errors?: any[],        
        // The unique name for the predictive model.
        id?: string,
        // What kind of resource this is.
        kind?: string,
        // Description of the model.
        modelDescription?: {        
            // An output confusion matrix. This shows an estimate for how this model will do in predictions. This is first indexed by the true class label. For each true class label, this provides a pair {predicted_label, count}, where count is the estimated number of times the model will predict the predicted label given the true label. Will not output if more then 100 classes [Categorical models only].
            confusionMatrix?: any,
            // A list of the confusion matrix row totals
            confusionMatrixRowTotals?: any,
            // Basic information about the model.
            modelinfo?: Training,
        },        
        // A URL to re-request this resource.
        selfLink?: string,
    }
    
    interface Input {
        // Input to the model for a prediction
        input?: {        
            // A list of input features, these can be strings or doubles.
            csvInstance?: any[],            
        },        
    }
    
    interface List {
        // List of models.
        items?: Training[],        
        // What kind of resource this is.
        kind?: string,
        // Pagination token to fetch the next page, if one exists.
        nextPageToken?: string,
        // A URL to re-request this resource.
        selfLink?: string,
    }
    
    interface Output {
        // The unique name for the predictive model.
        id?: string,
        // What kind of resource this is.
        kind?: string,
        // The most likely class label [Categorical models only].
        outputLabel?: string,
        // A list of class labels with their estimated probabilities [Categorical models only].
        outputMulti?: {        
            // The class label.
            label?: string,
            // The probability of the class label.
            score?: number,
        }[],        
        // The estimated regression value [Regression models only].
        outputValue?: number,
        // A URL to re-request this resource.
        selfLink?: string,
    }
    
    interface Training {
        // Insert time of the model (as a RFC 3339 timestamp).
        created?: string,
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
            // An estimated mean squared error. The can be used to measure the quality of the predicted model [Regression models only].
            meanSquaredError?: number,
            // Type of predictive model (CLASSIFICATION or REGRESSION)
            modelType?: string,
            // Number of valid data instances used in the trained model.
            numberInstances?: string,
            // Number of class labels in the trained model [Categorical models only].
            numberLabels?: string,
        },        
        // Type of predictive model (classification or regression)
        modelType?: string,
        // A URL to re-request this resource.
        selfLink?: string,
        // Google storage location of the training data file.
        storageDataLocation?: string,
        // Google storage location of the preprocessing pmml file.
        storagePMMLLocation?: string,
        // Google storage location of the pmml model file.
        storagePMMLModelLocation?: string,
        // Training completion time (as a RFC 3339 timestamp).
        trainingComplete?: string,
        // Instances to train model on.
        trainingInstances?: {        
            // The input features for this instance
            csvInstance?: any[],            
            // The generic output value - could be regression or class label
            output?: string,
        }[],        
        // The current status of the training job. This can be one of following: RUNNING; DONE; ERROR; ERROR: TRAINING JOB NOT FOUND
        trainingStatus?: string,
        // A class weighting function, which allows the importance weights for class labels to be specified [Categorical models only].
        utility?: any[],        
    }
    
    interface Update {
        // The input features for this instance
        csvInstance?: any[],        
        // The class label of this instance
        label?: string,
        // The generic output value - could be regression value or class label
        output?: string,
    }
    
    interface HostedmodelsResource {
        // Submit input and request an output against a hosted model.
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
            // The name of a hosted model.
            hostedModelName: string,
        }) : gapi.client.Request<Output>;        
        
    }
    
    
    interface TrainedmodelsResource {
        // Get analysis of the model and the data the model was trained on.
        analyze (request: {        
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
            // The unique name for the predictive model.
            id: string,
        }) : gapi.client.Request<Analyze>;        
        
        // Delete a trained model.
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
            // The unique name for the predictive model.
            id: string,
        }) : gapi.client.Request<void>;        
        
        // Check training status of your model.
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
            // The unique name for the predictive model.
            id: string,
        }) : gapi.client.Request<Training>;        
        
        // Begin training your model.
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
        
        // List available models.
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
            // Maximum number of results to return
            maxResults?: number,
            // Pagination token
            pageToken?: string,
        }) : gapi.client.Request<List>;        
        
        // Submit model id and request a prediction.
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
            // The unique name for the predictive model.
            id: string,
        }) : gapi.client.Request<Output>;        
        
        // Add new data to a trained model.
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
            // The unique name for the predictive model.
            id: string,
        }) : gapi.client.Request<Training>;        
        
    }
    
}

declare module gapi.client.prediction {
    var hostedmodels: gapi.client.prediction.HostedmodelsResource; 
    
    var trainedmodels: gapi.client.prediction.TrainedmodelsResource; 
    
}
