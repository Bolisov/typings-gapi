// Type definitions for Google CustomSearch API v1
// Project: https://developers.google.com/custom-search/v1/using_rest
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.customsearch {
    
    interface Context {
        // 
        facets?: {        
            // 
            anchor?: string,
            // 
            label?: string,
            // 
            label_with_op?: string,
        }[][],        
        // 
        title?: string,
    }
    
    interface Promotion {
        // 
        bodyLines?: {        
            // 
            htmlTitle?: string,
            // 
            link?: string,
            // 
            title?: string,
            // 
            url?: string,
        }[],        
        // 
        displayLink?: string,
        // 
        htmlTitle?: string,
        // 
        image?: {        
            // 
            height?: number,
            // 
            source?: string,
            // 
            width?: number,
        },        
        // 
        link?: string,
        // 
        title?: string,
    }
    
    interface Query {
        // 
        count?: number,
        // 
        cr?: string,
        // 
        cx?: string,
        // 
        dateRestrict?: string,
        // 
        disableCnTwTranslation?: string,
        // 
        exactTerms?: string,
        // 
        excludeTerms?: string,
        // 
        fileType?: string,
        // 
        filter?: string,
        // 
        gl?: string,
        // 
        googleHost?: string,
        // 
        highRange?: string,
        // 
        hl?: string,
        // 
        hq?: string,
        // 
        imgColorType?: string,
        // 
        imgDominantColor?: string,
        // 
        imgSize?: string,
        // 
        imgType?: string,
        // 
        inputEncoding?: string,
        // 
        language?: string,
        // 
        linkSite?: string,
        // 
        lowRange?: string,
        // 
        orTerms?: string,
        // 
        outputEncoding?: string,
        // 
        relatedSite?: string,
        // 
        rights?: string,
        // 
        safe?: string,
        // 
        searchTerms?: string,
        // 
        searchType?: string,
        // 
        siteSearch?: string,
        // 
        siteSearchFilter?: string,
        // 
        sort?: string,
        // 
        startIndex?: number,
        // 
        startPage?: number,
        // 
        title?: string,
        // 
        totalResults?: string,
    }
    
    interface Result {
        // 
        cacheId?: string,
        // 
        displayLink?: string,
        // 
        fileFormat?: string,
        // 
        formattedUrl?: string,
        // 
        htmlFormattedUrl?: string,
        // 
        htmlSnippet?: string,
        // 
        htmlTitle?: string,
        // 
        image?: {        
            // 
            byteSize?: number,
            // 
            contextLink?: string,
            // 
            height?: number,
            // 
            thumbnailHeight?: number,
            // 
            thumbnailLink?: string,
            // 
            thumbnailWidth?: number,
            // 
            width?: number,
        },        
        // 
        kind?: string,
        // 
        labels?: {        
            // 
            displayName?: string,
            // 
            label_with_op?: string,
            // 
            name?: string,
        }[],        
        // 
        link?: string,
        // 
        mime?: string,
        // 
        pagemap?: any,
        // 
        snippet?: string,
        // 
        title?: string,
    }
    
    interface Search {
        // 
        context?: Context,
        // 
        items?: Result[],        
        // 
        kind?: string,
        // 
        promotions?: Promotion[],        
        // 
        queries?: any,
        // 
        searchInformation?: {        
            // 
            formattedSearchTime?: string,
            // 
            formattedTotalResults?: string,
            // 
            searchTime?: number,
            // 
            totalResults?: string,
        },        
        // 
        spelling?: {        
            // 
            correctedQuery?: string,
            // 
            htmlCorrectedQuery?: string,
        },        
        // 
        url?: {        
            // 
            template?: string,
            // 
            type?: string,
        },        
    }
    
    interface CseResource {
        // Returns metadata about the search performed, metadata about the custom search engine used for the search, and the search results.
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
            // Turns off the translation between zh-CN and zh-TW.
            c2coff?: string,
            // Country restrict(s).
            cr?: string,
            // The custom search engine ID to scope this search query
            cx?: string,
            // Specifies all search results are from a time period
            dateRestrict?: string,
            // Identifies a phrase that all documents in the search results must contain
            exactTerms?: string,
            // Identifies a word or phrase that should not appear in any documents in the search results
            excludeTerms?: string,
            // Returns images of a specified type. Some of the allowed values are: bmp, gif, png, jpg, svg, pdf, ...
            fileType?: string,
            // Controls turning on or off the duplicate content filter.
            filter?: string,
            // Geolocation of end user.
            gl?: string,
            // The local Google domain to use to perform the search.
            googlehost?: string,
            // Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
            highRange?: string,
            // Sets the user interface language.
            hl?: string,
            // Appends the extra query terms to the query.
            hq?: string,
            // Returns black and white, grayscale, or color images: mono, gray, and color.
            imgColorType?: string,
            // Returns images of a specific dominant color: yellow, green, teal, blue, purple, pink, white, gray, black and brown.
            imgDominantColor?: string,
            // Returns images of a specified size, where size can be one of: icon, small, medium, large, xlarge, xxlarge, and huge.
            imgSize?: string,
            // Returns images of a type, which can be one of: clipart, face, lineart, news, and photo.
            imgType?: string,
            // Specifies that all search results should contain a link to a particular URL
            linkSite?: string,
            // Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
            lowRange?: string,
            // The language restriction for the search results
            lr?: string,
            // Number of search results to return
            num?: number,
            // Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms
            orTerms?: string,
            // Query
            q: string,
            // Specifies that all search results should be pages that are related to the specified URL
            relatedSite?: string,
            // Filters based on licensing. Supported values include: cc_publicdomain, cc_attribute, cc_sharealike, cc_noncommercial, cc_nonderived and combinations of these.
            rights?: string,
            // Search safety level
            safe?: string,
            // Specifies the search type: image.
            searchType?: string,
            // Specifies all search results should be pages from a given site
            siteSearch?: string,
            // Controls whether to include or exclude results from the site named in the as_sitesearch parameter
            siteSearchFilter?: string,
            // The sort expression to apply to the results
            sort?: string,
            // The index of the first result to return
            start?: number,
        }) : gapi.client.Request<Search>;        
        
    }
    
}

declare module gapi.client.customsearch {
    var cse: gapi.client.customsearch.CseResource; 
    
}
