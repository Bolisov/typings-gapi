// Type definitions for Google Ad Exchange Buyer API II v2beta1
// Project: https://developers.google.com/ad-exchange/buyer-rest/guides/client-access/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.adexchangebuyer2 {
    
    interface FilteredBidDetailRow {
        // The values of all dimensions associated with metric values in this row.
        rowDimensions?: RowDimensions,
        // The ID of the detail. The associated value can be looked up in the
        // dictionary file corresponding to the DetailType in the response message.
        detailId?: number,
        // The number of bids with the specified detail.
        bidCount?: MetricValue,
    }
    
    interface AbsoluteDateRange {
        // The end date of the range (inclusive).
        // Must be within the 30 days leading up to current date, and must be equal to
        // or after start_date.
        endDate?: Date,
        // The start date of the range (inclusive).
        // Must be within the 30 days leading up to current date, and must be equal to
        // or before end_date.
        startDate?: Date,
    }
    
    interface AddDealAssociationRequest {
        // The association between a creative and a deal that should be added.
        association?: CreativeDealAssociation,
    }
    
    interface WatchCreativeRequest {
        // The Pub/Sub topic to publish notifications to.
        // This topic must already exist and must give permission to
        // ad-exchange-buyside-reports@google.com to write to the topic.
        // This should be the full resource name in
        // "projects/{project_id}/topics/{topic_id}" format.
        topic?: string,
    }
    
    interface TimeInterval {
        // The timestamp marking the end of the range (exclusive) for which data is
        // included.
        endTime?: string,
        // The timestamp marking the start of the range (inclusive) for which data is
        // included.
        startTime?: string,
    }
    
    interface FilteredBidCreativeRow {
        // The values of all dimensions associated with metric values in this row.
        rowDimensions?: RowDimensions,
        // The number of bids with the specified creative.
        bidCount?: MetricValue,
        // The ID of the creative.
        creativeId?: string,
    }
    
    interface RelativeDateRange {
        // The end date of the filter set, specified as the number of days before
        // today. E.g. for a range where the last date is today, 0.
        offsetDays?: number,
        // The number of days in the requested date range. E.g. for a range spanning
        // today, 1. For a range spanning the last 7 days, 7.
        durationDays?: number,
    }
    
    interface ListClientsResponse {
        // A token to retrieve the next page of results.
        // Pass this value in the
        // ListClientsRequest.pageToken
        // field in the subsequent call to the
        // accounts.clients.list method
        // to retrieve the next page of results.
        nextPageToken?: string,
        // The returned list of clients.
        clients?: Client[],        
    }
    
    interface NativeContent {
        // A large image.
        image?: Image,
        // The URL to use for click tracking.
        clickTrackingUrl?: string,
        // The name of the advertiser or sponsor, to be displayed in the ad creative.
        advertiserName?: string,
        // The URL to the app store to purchase/download the promoted app.
        storeUrl?: string,
        // A short title for the ad.
        headline?: string,
        // The app icon, for app download ads.
        appIcon?: Image,
        // A label for the button that the user is supposed to click.
        callToAction?: string,
        // A long description of the ad.
        body?: string,
        // The app rating in the app store. Must be in the range [0-5].
        starRating?: number,
        // The URL to fetch a native video ad.
        videoUrl?: string,
        // A smaller image, for the advertiser's logo.
        logo?: Image,
        // The URL that the browser/SDK will load when the user clicks the ad.
        clickLinkUrl?: string,
        // The price of the promoted app including currency info.
        priceDisplayText?: string,
    }
    
    interface ListBidResponsesWithoutBidsResponse {
        // A token to retrieve the next page of results.
        // Pass this value in the
        // ListBidResponsesWithoutBidsRequest.pageToken
        // field in the subsequent call to the
        // accounts.filterSets.bidResponsesWithoutBids.list
        // method to retrieve the next page of results.
        nextPageToken?: string,
        // List of rows, with counts of bid responses without bids aggregated by
        // status.
        bidResponseWithoutBidsStatusRows?: BidResponseWithoutBidsStatusRow[],        
    }
    
    interface ServingContext {
        // Matches impressions for a particular auction type.
        auctionType?: AuctionContext,
        // Matches all contexts.
        all?: string,
        // Matches impressions for a particular app type.
        appType?: AppContext,
        // Matches impressions for a particular security type.
        securityType?: SecurityContext,
        // Matches impressions coming from a particular platform.
        platform?: PlatformContext,
        // Matches impressions coming from users *or* publishers in a specific
        // location.
        location?: LocationContext,
    }
    
    interface Image {
        // Image height in pixels.
        height?: number,
        // Image width in pixels.
        width?: number,
        // The URL of the image.
        url?: string,
    }
    
    interface ListFilterSetsResponse {
        // The filter sets belonging to the buyer.
        filterSets?: FilterSet[],        
        // A token to retrieve the next page of results.
        // Pass this value in the
        // ListFilterSetsRequest.pageToken
        // field in the subsequent call to the
        // accounts.filterSets.list
        // method to retrieve the next page of results.
        nextPageToken?: string,
    }
    
    interface BidResponseWithoutBidsStatusRow {
        // The number of impressions for which there was a bid response with the
        // specified status.
        impressionCount?: MetricValue,
        // The status specifying why the bid responses were considered to have no
        // applicable bids.
        status?: string,
        // The values of all dimensions associated with metric values in this row.
        rowDimensions?: RowDimensions,
    }
    
    interface ClientUserInvitation {
        // The email address to which the invitation is sent. Email
        // addresses should be unique among all client users under each sponsor
        // buyer.
        email?: string,
        // Numerical account ID of the client buyer
        // that the invited user is associated with.
        // The value of this field is ignored in create operations.
        clientAccountId?: string,
        // The unique numerical ID of the invitation that is sent to the user.
        // The value of this field is ignored in create operations.
        invitationId?: string,
    }
    
    interface ListCreativeStatusBreakdownByDetailResponse {
        // The type of detail that the detail IDs represent.
        detailType?: string,
        // A token to retrieve the next page of results.
        // Pass this value in the
        // ListCreativeStatusBreakdownByDetailRequest.pageToken
        // field in the subsequent call to the
        // accounts.filterSets.filteredBids.details.list
        // method to retrieve the next page of results.
        nextPageToken?: string,
        // List of rows, with counts of bids with a given creative status aggregated
        // by detail.
        filteredBidDetailRows?: FilteredBidDetailRow[],        
    }
    
    interface ListClientUsersResponse {
        // The returned list of client users.
        users?: ClientUser[],        
        // A token to retrieve the next page of results.
        // Pass this value in the
        // ListClientUsersRequest.pageToken
        // field in the subsequent call to the
        // clients.invitations.list
        // method to retrieve the next
        // page of results.
        nextPageToken?: string,
    }
    
    interface ListClientUserInvitationsResponse {
        // A token to retrieve the next page of results.
        // Pass this value in the
        // ListClientUserInvitationsRequest.pageToken
        // field in the subsequent call to the
        // clients.invitations.list
        // method to retrieve the next
        // page of results.
        nextPageToken?: string,
        // The returned list of client users.
        invitations?: ClientUserInvitation[],        
    }
    
    interface LocationContext {
        // IDs representing the geo location for this context.
        // Please refer to the
        // [geo-table.csv](https://storage.googleapis.com/adx-rtb-dictionaries/geo-table.csv)
        // file for different geo criteria IDs.
        geoCriteriaIds?: number[],        
    }
    
    interface PlatformContext {
        // The platforms this restriction applies to.
        platforms?: string[],        
    }
    
    interface MetricValue {
        // The variance (i.e. square of the standard deviation) of the metric value.
        // If value is exact, variance is 0.
        // Can be used to calculate margin of error as a percentage of value, using
        // the following formula, where Z is the standard constant that depends on the
        // desired size of the confidence interval (e.g. for 90% confidence interval,
        // use Z = 1.645):
        // 
        //   marginOfError = 100 * Z * sqrt(variance) / value
        variance?: string,
        // The expected value of the metric.
        value?: string,
    }
    
    interface ClientUser {
        // User's email address. The value of this field
        // is ignored in an update operation.
        email?: string,
        // The unique numerical ID of the client user
        // that has accepted an invitation.
        // The value of this field is ignored in an update operation.
        userId?: string,
        // Numerical account ID of the client buyer
        // with which the user is associated; the
        // buyer must be a client of the current sponsor buyer.
        // The value of this field is ignored in an update operation.
        clientAccountId?: string,
        // The status of the client user.
        status?: string,
    }
    
    interface CreativeDealAssociation {
        // The account the creative belongs to.
        accountId?: string,
        // The ID of the creative associated with the deal.
        creativeId?: string,
        // The externalDealId for the deal associated with the creative.
        dealsId?: string,
    }
    
    interface FilteringStats {
        // The set of filtering reasons for this date.
        reasons?: Reason[],        
        // The day during which the data was collected.
        // The data is collected from 00:00:00 to 23:59:59 PT.
        // During switches from PST to PDT and back, the day may
        // contain 23 or 25 hours of data instead of the usual 24.
        date?: Date,
    }
    
    interface Creative {
        // The buyer-defined creative ID of this creative.
        // Can be used to filter the response of the
        // creatives.list
        // method.
        creativeId?: string,
        // The account that this creative belongs to.
        // Can be used to filter the response of the
        // creatives.list
        // method.
        accountId?: string,
        // A native creative.
        native?: NativeContent,
        // A video creative.
        video?: VideoContent,
        // @OutputOnly The granular status of this ad in specific contexts.
        // A context here relates to where something ultimately serves (for example,
        // a physical location, a platform, an HTTPS vs HTTP request, or the type
        // of auction).
        servingRestrictions?: ServingRestriction[],        
        // The agency ID for this creative.
        agencyId?: string,
        // The set of destination URLs for the creative.
        clickThroughUrls?: string[],        
        // @OutputOnly Detected sensitive categories, if any.
        // See the ad-sensitive-categories.txt file in the technical documentation for
        // a list of IDs. You should use these IDs along with the
        // excluded-sensitive-category field in the bid request to filter your bids.
        detectedSensitiveCategories?: number[],        
        // The link to AdChoices destination page.
        adChoicesDestinationUrl?: string,
        // All restricted categories for the ads that may be shown from this creative.
        restrictedCategories?: string[],        
        // @OutputOnly Shows any corrections that were applied to this creative.
        corrections?: Correction[],        
        // @OutputOnly The version of this creative.
        version?: number,
        // All vendor IDs for the ads that may be shown from this creative.
        // See https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt
        // for possible values.
        vendorIds?: number[],        
        // The set of URLs to be called to record an impression.
        impressionTrackingUrls?: string[],        
        // An HTML creative.
        html?: HtmlContent,
        // @OutputOnly The top-level deals status of this creative.
        // If disapproved, an entry for 'auctionType=DIRECT_DEALS' (or 'ALL') in
        // serving_restrictions will also exist. Note
        // that this may be nuanced with other contextual restrictions, in which case,
        // it may be preferable to read from serving_restrictions directly.
        // Can be used to filter the response of the
        // creatives.list
        // method.
        dealsStatus?: string,
        // @OutputOnly Detected product categories, if any.
        // See the ad-product-categories.txt file in the technical documentation
        // for a list of IDs.
        detectedProductCategories?: number[],        
        // @OutputOnly The top-level open auction status of this creative.
        // If disapproved, an entry for 'auctionType = OPEN_AUCTION' (or 'ALL') in
        // serving_restrictions will also exist. Note
        // that this may be nuanced with other contextual restrictions, in which case,
        // it may be preferable to read from serving_restrictions directly.
        // Can be used to filter the response of the
        // creatives.list
        // method.
        openAuctionStatus?: string,
        // The name of the company being advertised in the creative.
        advertiserName?: string,
        // @OutputOnly
        // The detected domains for this creative.
        detectedDomains?: string[],        
        // @OutputOnly Detected advertiser IDs, if any.
        detectedAdvertiserIds?: string[],        
        // @OutputOnly The filtering stats for this creative.
        filteringStats?: FilteringStats,
        // All attributes for the ads that may be shown from this creative.
        // Can be used to filter the response of the
        // creatives.list
        // method.
        attributes?: string[],        
        // @OutputOnly The last update timestamp of the creative via API.
        apiUpdateTime?: string,
        // @OutputOnly
        // The detected languages for this creative. The order is arbitrary. The codes
        // are 2 or 5 characters and are documented at
        // https://developers.google.com/adwords/api/docs/appendix/languagecodes.
        detectedLanguages?: string[],        
    }
    
    interface RemoveDealAssociationRequest {
        // The association between a creative and a deal that should be removed.
        association?: CreativeDealAssociation,
    }
    
    interface ListCreativeStatusBreakdownByCreativeResponse {
        // List of rows, with counts of bids with a given creative status aggregated
        // by creative.
        filteredBidCreativeRows?: FilteredBidCreativeRow[],        
        // A token to retrieve the next page of results.
        // Pass this value in the
        // ListCreativeStatusBreakdownByCreativeRequest.pageToken
        // field in the subsequent call to the
        // accounts.filterSets.filteredBids.creatives.list
        // method to retrieve the next page of results.
        nextPageToken?: string,
    }
    
    interface Client {
        // The type of the client entity: `ADVERTISER`, `BRAND`, or `AGENCY`.
        entityType?: string,
        // Name used to represent this client to publishers.
        // You may have multiple clients that map to the same entity,
        // but for each client the combination of `clientName` and entity
        // must be unique.
        // You can specify this field as empty.
        clientName?: string,
        // The role which is assigned to the client buyer. Each role implies a set of
        // permissions granted to the client. Must be one of `CLIENT_DEAL_VIEWER`,
        // `CLIENT_DEAL_NEGOTIATOR` or `CLIENT_DEAL_APPROVER`.
        role?: string,
        // Whether the client buyer will be visible to sellers.
        visibleToSeller?: boolean,
        // Numerical identifier of the client entity.
        // The entity can be an advertiser, a brand, or an agency.
        // This identifier is unique among all the entities with the same type.
        // 
        // A list of all known advertisers with their identifiers is available in the
        // [advertisers.txt](https://storage.googleapis.com/adx-rtb-dictionaries/advertisers.txt)
        // file.
        // 
        // A list of all known brands with their identifiers is available in the
        // [brands.txt](https://storage.googleapis.com/adx-rtb-dictionaries/brands.txt)
        // file.
        // 
        // A list of all known agencies with their identifiers is available in the
        // [agencies.txt](https://storage.googleapis.com/adx-rtb-dictionaries/agencies.txt)
        // file.
        entityId?: string,
        // The globally-unique numerical ID of the client.
        // The value of this field is ignored in create and update operations.
        clientAccountId?: string,
        // The name of the entity. This field is automatically fetched based on
        // the type and ID.
        // The value of this field is ignored in create and update operations.
        entityName?: string,
        // The status of the client buyer.
        status?: string,
    }
    
    interface Correction {
        // Additional details about what was corrected.
        details?: string[],        
        // The type of correction that was applied to the creative.
        type?: string,
        // The contexts for the correction.
        contexts?: ServingContext[],        
    }
    
    interface FilterSet {
        // The list of IDs of the seller (publisher) networks on which to filter;
        // may be empty. The filters represented by multiple seller network IDs are
        // ORed together (i.e. if non-empty, results must match any one of the
        // publisher networks).
        // See [seller-network-ids](https://developers.google.com/ad-exchange/rtb/downloads/seller-network-ids)
        // file for the set of existing seller network IDs.
        sellerNetworkIds?: number[],        
        // The account ID of the buyer who owns this filter set.
        // The value of this field is ignored in create operations.
        ownerAccountId?: string,
        // An absolute date range, defined by a start date and an end date.
        // Interpreted relative to Pacific time zone.
        absoluteDateRange?: AbsoluteDateRange,
        // The ID of the buyer account on which to filter; optional.
        buyerAccountId?: string,
        // The environment on which to filter; optional.
        environment?: string,
        // The format on which to filter; optional.
        format?: string,
        // The ID of the deal on which to filter; optional.
        dealId?: string,
        // The granularity of time intervals if a time series breakdown is desired;
        // optional.
        timeSeriesGranularity?: string,
        // The ID of the filter set; unique within the account of the filter set
        // owner.
        // The value of this field is ignored in create operations.
        filterSetId?: string,
        // An open-ended realtime time range, defined by the aggregation start
        // timestamp.
        realtimeTimeRange?: RealtimeTimeRange,
        // The ID of the creative on which to filter; optional.
        creativeId?: string,
        // A relative date range, defined by an offset from today and a duration.
        // Interpreted relative to Pacific time zone.
        relativeDateRange?: RelativeDateRange,
        // The list of platforms on which to filter; may be empty. The filters
        // represented by multiple platforms are ORed together (i.e. if non-empty,
        // results must match any one of the platforms).
        platforms?: string[],        
    }
    
    interface ListDealAssociationsResponse {
        // The list of associations.
        associations?: CreativeDealAssociation[],        
        // A token to retrieve the next page of results.
        // Pass this value in the
        // ListDealAssociationsRequest.page_token
        // field in the subsequent call to 'ListDealAssociation' method to retrieve
        // the next page of results.
        nextPageToken?: string,
    }
    
    interface CalloutStatusRow {
        // The number of impressions for which there was a bid request or bid response
        // with the specified callout status.
        impressionCount?: MetricValue,
        // The values of all dimensions associated with metric values in this row.
        rowDimensions?: RowDimensions,
        // The ID of the callout status.
        // See [callout-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/callout-status-codes).
        calloutStatusId?: number,
    }
    
    interface Disapproval {
        // The categorized reason for disapproval.
        reason?: string,
        // Additional details about the reason for disapproval.
        details?: string[],        
    }
    
    interface StopWatchingCreativeRequest {
    }
    
    interface ServingRestriction {
        // Any disapprovals bound to this restriction.
        // Only present if status=DISAPPROVED.
        // Can be used to filter the response of the
        // creatives.list
        // method.
        disapprovalReasons?: Disapproval[],        
        // The contexts for the restriction.
        contexts?: ServingContext[],        
        // The status of the creative in this context (for example, it has been
        // explicitly disapproved or is pending review).
        status?: string,
    }
    
    interface Date {
        // Day of month. Must be from 1 to 31 and valid for the year and month, or 0
        // if specifying a year/month where the day is not significant.
        day?: number,
        // Year of date. Must be from 1 to 9999, or 0 if specifying a date without
        // a year.
        year?: number,
        // Month of year. Must be from 1 to 12.
        month?: number,
    }
    
    interface RowDimensions {
        // The time interval that this row represents.
        timeInterval?: TimeInterval,
    }
    
    interface Empty {
    }
    
    interface AppContext {
        // The app types this restriction applies to.
        appTypes?: string[],        
    }
    
    interface ListFilteredBidsResponse {
        // List of rows, with counts of filtered bids aggregated by filtering reason
        // (i.e. creative status).
        creativeStatusRows?: CreativeStatusRow[],        
        // A token to retrieve the next page of results.
        // Pass this value in the
        // ListFilteredBidsRequest.pageToken
        // field in the subsequent call to the
        // accounts.filterSets.filteredBids.list
        // method to retrieve the next page of results.
        nextPageToken?: string,
    }
    
    interface SecurityContext {
        // The security types in this context.
        securities?: string[],        
    }
    
    interface HtmlContent {
        // The height of the HTML snippet in pixels.
        height?: number,
        // The width of the HTML snippet in pixels.
        width?: number,
        // The HTML snippet that displays the ad when inserted in the web page.
        snippet?: string,
    }
    
    interface ListCreativesResponse {
        // A token to retrieve the next page of results.
        // Pass this value in the
        // ListCreativesRequest.page_token
        // field in the subsequent call to `ListCreatives` method to retrieve the next
        // page of results.
        nextPageToken?: string,
        // The list of creatives.
        creatives?: Creative[],        
    }
    
    interface ListFilteredBidRequestsResponse {
        // List of rows, with counts of filtered bid requests aggregated by callout
        // status.
        calloutStatusRows?: CalloutStatusRow[],        
        // A token to retrieve the next page of results.
        // Pass this value in the
        // ListFilteredBidRequestsRequest.pageToken
        // field in the subsequent call to the
        // accounts.filterSets.filteredBidRequests.list
        // method to retrieve the next page of results.
        nextPageToken?: string,
    }
    
    interface ListBidMetricsResponse {
        // List of rows, each containing a set of bid metrics.
        bidMetricsRows?: BidMetricsRow[],        
        // A token to retrieve the next page of results.
        // Pass this value in the
        // ListBidMetricsRequest.pageToken
        // field in the subsequent call to the
        // accounts.filterSets.bidMetrics.list
        // method to retrieve the next page of results.
        nextPageToken?: string,
    }
    
    interface Reason {
        // The filtering status code. Please refer to the
        // [creative-status-codes.txt](https://storage.googleapis.com/adx-rtb-dictionaries/creative-status-codes.txt)
        // file for different statuses.
        status?: number,
        // The number of times the creative was filtered for the status. The
        // count is aggregated across all publishers on the exchange.
        count?: string,
    }
    
    interface ListLosingBidsResponse {
        // List of rows, with counts of losing bids aggregated by loss reason (i.e.
        // creative status).
        creativeStatusRows?: CreativeStatusRow[],        
        // A token to retrieve the next page of results.
        // Pass this value in the
        // ListLosingBidsRequest.pageToken
        // field in the subsequent call to the
        // accounts.filterSets.losingBids.list
        // method to retrieve the next page of results.
        nextPageToken?: string,
    }
    
    interface ListNonBillableWinningBidsResponse {
        // A token to retrieve the next page of results.
        // Pass this value in the
        // ListNonBillableWinningBidsRequest.pageToken
        // field in the subsequent call to the
        // accounts.filterSets.nonBillableWinningBids.list
        // method to retrieve the next page of results.
        nextPageToken?: string,
        // List of rows, with counts of bids not billed aggregated by reason.
        nonBillableWinningBidStatusRows?: NonBillableWinningBidStatusRow[],        
    }
    
    interface VideoContent {
        // The URL to fetch a video ad.
        videoUrl?: string,
    }
    
    interface ImpressionMetricsRow {
        // The number of impressions for which Ad Exchange sent the buyer a bid
        // request.
        bidRequests?: MetricValue,
        // The number of impressions that match the buyer's inventory pretargeting.
        inventoryMatches?: MetricValue,
        // The number of impressions for which Ad Exchange received a response from
        // the buyer that contained at least one applicable bid.
        responsesWithBids?: MetricValue,
        // The number of impressions for which the buyer successfully sent a response
        // to Ad Exchange.
        successfulResponses?: MetricValue,
        // The number of impressions available to the buyer on Ad Exchange.
        // In some cases this value may be unavailable.
        availableImpressions?: MetricValue,
        // The values of all dimensions associated with metric values in this row.
        rowDimensions?: RowDimensions,
    }
    
    interface AuctionContext {
        // The auction types this restriction applies to.
        auctionTypes?: string[],        
    }
    
    interface ListImpressionMetricsResponse {
        // A token to retrieve the next page of results.
        // Pass this value in the
        // ListImpressionMetricsRequest.pageToken
        // field in the subsequent call to the
        // accounts.filterSets.impressionMetrics.list
        // method to retrieve the next page of results.
        nextPageToken?: string,
        // List of rows, each containing a set of impression metrics.
        impressionMetricsRows?: ImpressionMetricsRow[],        
    }
    
    interface BidMetricsRow {
        // The number of bids that won an impression.
        impressionsWon?: MetricValue,
        // The number of bids for which the corresponding impression was viewable (as
        // defined by Active View).
        viewableImpressions?: MetricValue,
        // The number of bids for which the corresponding impression was measurable
        // for viewability (as defined by Active View).
        measurableImpressions?: MetricValue,
        // The number of bids that Ad Exchange received from the buyer.
        bids?: MetricValue,
        // The number of bids for which the buyer was billed.
        billedImpressions?: MetricValue,
        // The number of bids that were permitted to compete in the auction.
        bidsInAuction?: MetricValue,
        // The values of all dimensions associated with metric values in this row.
        rowDimensions?: RowDimensions,
    }
    
    interface ListBidResponseErrorsResponse {
        // List of rows, with counts of bid responses aggregated by callout status.
        calloutStatusRows?: CalloutStatusRow[],        
        // A token to retrieve the next page of results.
        // Pass this value in the
        // ListBidResponseErrorsRequest.pageToken
        // field in the subsequent call to the
        // accounts.filterSets.bidResponseErrors.list
        // method to retrieve the next page of results.
        nextPageToken?: string,
    }
    
    interface CreativeStatusRow {
        // The values of all dimensions associated with metric values in this row.
        rowDimensions?: RowDimensions,
        // The ID of the creative status.
        // See [creative-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/creative-status-codes).
        creativeStatusId?: number,
        // The number of bids with the specified status.
        bidCount?: MetricValue,
    }
    
    interface RealtimeTimeRange {
        // The start timestamp of the real-time RTB metrics aggregation.
        startTimestamp?: string,
    }
    
    interface NonBillableWinningBidStatusRow {
        // The status specifying why the winning bids were not billed.
        status?: string,
        // The values of all dimensions associated with metric values in this row.
        rowDimensions?: RowDimensions,
        // The number of bids with the specified status.
        bidCount?: MetricValue,
    }
    
    interface InvitationsResource {
        // Lists all the client users invitations for a client
        // with a given account ID.
        list (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // A token identifying a page of results the server should return.
            // Typically, this is the value of
            // ListClientUserInvitationsResponse.nextPageToken
            // returned from the previous call to the
            // clients.invitations.list
            // method.
            pageToken?: string,
            // Requested page size. Server may return fewer clients than requested.
            // If unspecified, server will pick an appropriate default.
            pageSize?: number,
            // Numerical account ID of the client's sponsor buyer. (required)
            accountId: string,
            // Numerical account ID of the client buyer to list invitations for.
            // (required)
            // You must either specify a string representation of a
            // numerical account identifier or the `-` character
            // to list all the invitations for all the clients
            // of a given sponsor buyer.
            clientAccountId: string,
        }) : gapi.client.Request<ListClientUserInvitationsResponse>;        
        
        // Retrieves an existing client user invitation.
        get (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // Numerical account ID of the client's sponsor buyer. (required)
            accountId: string,
            // Numerical account ID of the client buyer that the user invitation
            // to be retrieved is associated with. (required)
            clientAccountId: string,
            // Numerical identifier of the user invitation to retrieve. (required)
            invitationId: string,
        }) : gapi.client.Request<ClientUserInvitation>;        
        
        // Creates and sends out an email invitation to access
        // an Ad Exchange client buyer account.
        create (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // Numerical account ID of the client's sponsor buyer. (required)
            accountId: string,
            // Numerical account ID of the client buyer that the user
            // should be associated with. (required)
            clientAccountId: string,
        }) : gapi.client.Request<ClientUserInvitation>;        
        
    }
    
    
    interface UsersResource {
        // Retrieves an existing client user.
        get (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // Numerical identifier of the user to retrieve. (required)
            userId: string,
            // Numerical account ID of the client's sponsor buyer. (required)
            accountId: string,
            // Numerical account ID of the client buyer
            // that the user to be retrieved is associated with. (required)
            clientAccountId: string,
        }) : gapi.client.Request<ClientUser>;        
        
        // Lists all the known client users for a specified
        // sponsor buyer account ID.
        list (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // Requested page size. The server may return fewer clients than requested.
            // If unspecified, the server will pick an appropriate default.
            pageSize?: number,
            // Numerical account ID of the sponsor buyer of the client to list users for.
            // (required)
            accountId: string,
            // The account ID of the client buyer to list users for. (required)
            // You must specify either a string representation of a
            // numerical account identifier or the `-` character
            // to list all the client users for all the clients
            // of a given sponsor buyer.
            clientAccountId: string,
            // A token identifying a page of results the server should return.
            // Typically, this is the value of
            // ListClientUsersResponse.nextPageToken
            // returned from the previous call to the
            // accounts.clients.users.list method.
            pageToken?: string,
        }) : gapi.client.Request<ListClientUsersResponse>;        
        
        // Updates an existing client user.
        // Only the user status can be changed on update.
        update (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // Numerical identifier of the user to retrieve. (required)
            userId: string,
            // Numerical account ID of the client's sponsor buyer. (required)
            accountId: string,
            // Numerical account ID of the client buyer that the user to be retrieved
            // is associated with. (required)
            clientAccountId: string,
        }) : gapi.client.Request<ClientUser>;        
        
    }
    
    
    interface ClientsResource {
        // Lists all the clients for the current sponsor buyer.
        list (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // A token identifying a page of results the server should return.
            // Typically, this is the value of
            // ListClientsResponse.nextPageToken
            // returned from the previous call to the
            // accounts.clients.list method.
            pageToken?: string,
            // Requested page size. The server may return fewer clients than requested.
            // If unspecified, the server will pick an appropriate default.
            pageSize?: number,
            // Unique numerical account ID of the sponsor buyer to list the clients for.
            accountId: string,
        }) : gapi.client.Request<ListClientsResponse>;        
        
        // Gets a client buyer with a given client account ID.
        get (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // Numerical account ID of the client's sponsor buyer. (required)
            accountId: string,
            // Numerical account ID of the client buyer to retrieve. (required)
            clientAccountId: string,
        }) : gapi.client.Request<Client>;        
        
        // Updates an existing client buyer.
        update (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // Unique numerical account ID of the client to update. (required)
            clientAccountId: string,
            // Unique numerical account ID for the buyer of which the client buyer
            // is a customer; the sponsor buyer to update a client for. (required)
            accountId: string,
        }) : gapi.client.Request<Client>;        
        
        // Creates a new client buyer.
        create (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // Unique numerical account ID for the buyer of which the client buyer
            // is a customer; the sponsor buyer to create a client for. (required)
            accountId: string,
        }) : gapi.client.Request<Client>;        
        
        invitations: InvitationsResource,
        users: UsersResource,
    }
    
    
    interface DealAssociationsResource {
        // List all creative-deal associations.
        list (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // A token identifying a page of results the server should return.
            // Typically, this is the value of
            // ListDealAssociationsResponse.next_page_token
            // returned from the previous call to 'ListDealAssociations' method.
            pageToken?: string,
            // Requested page size. Server may return fewer associations than requested.
            // If unspecified, server will pick an appropriate default.
            pageSize?: number,
            // The account to list the associations from.
            // Specify "-" to list all creatives the current user has access to.
            accountId: string,
            // An optional query string to filter deal associations. If no filter is
            // specified, all associations will be returned.
            // Supported queries are:
            // <ul>
            // <li>accountId=<i>account_id_string</i>
            // <li>creativeId=<i>creative_id_string</i>
            // <li>dealsId=<i>deals_id_string</i>
            // <li>dealsStatus:{approved, conditionally_approved, disapproved,
            //                   not_checked}
            // <li>openAuctionStatus:{approved, conditionally_approved, disapproved,
            //                          not_checked}
            // </ul>
            // Example: 'dealsId=12345 AND dealsStatus:disapproved'
            query?: string,
            // The creative ID to list the associations from.
            // Specify "-" to list all creatives under the above account.
            creativeId: string,
        }) : gapi.client.Request<ListDealAssociationsResponse>;        
        
        // Remove the association between a deal and a creative.
        remove (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // The account the creative belongs to.
            accountId: string,
            // The ID of the creative associated with the deal.
            creativeId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Associate an existing deal with a creative.
        add (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // The ID of the creative associated with the deal.
            creativeId: string,
            // The account the creative belongs to.
            accountId: string,
        }) : gapi.client.Request<Empty>;        
        
    }
    
    
    interface CreativesResource {
        // Gets a creative.
        get (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // The account the creative belongs to.
            accountId: string,
            // The ID of the creative to retrieve.
            creativeId: string,
        }) : gapi.client.Request<Creative>;        
        
        // Watches a creative. Will result in push notifications being sent to the
        // topic when the creative changes status.
        watch (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // The account of the creative to watch.
            accountId: string,
            // The creative ID to watch for status changes.
            // Specify "-" to watch all creatives under the above account.
            // If both creative-level and account-level notifications are
            // sent, only a single notification will be sent to the
            // creative-level notification topic.
            creativeId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Updates a creative.
        update (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // The buyer-defined creative ID of this creative.
            // Can be used to filter the response of the
            // creatives.list
            // method.
            creativeId: string,
            // The account that this creative belongs to.
            // Can be used to filter the response of the
            // creatives.list
            // method.
            accountId: string,
        }) : gapi.client.Request<Creative>;        
        
        // Lists creatives.
        list (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // A token identifying a page of results the server should return.
            // Typically, this is the value of
            // ListCreativesResponse.next_page_token
            // returned from the previous call to 'ListCreatives' method.
            pageToken?: string,
            // Requested page size. The server may return fewer creatives than requested
            // (due to timeout constraint) even if more are available via another call.
            // If unspecified, server will pick an appropriate default.
            // Acceptable values are 1 to 1000, inclusive.
            pageSize?: number,
            // The account to list the creatives from.
            // Specify "-" to list all creatives the current user has access to.
            accountId: string,
            // An optional query string to filter creatives. If no filter is specified,
            // all active creatives will be returned.
            // Supported queries are:
            // <ul>
            // <li>accountId=<i>account_id_string</i>
            // <li>creativeId=<i>creative_id_string</i>
            // <li>dealsStatus: {approved, conditionally_approved, disapproved,
            //                    not_checked}
            // <li>openAuctionStatus: {approved, conditionally_approved, disapproved,
            //                           not_checked}
            // <li>attribute: {a numeric attribute from the list of attributes}
            // <li>disapprovalReason: {a reason from DisapprovalReason
            // </ul>
            // Example: 'accountId=12345 AND (dealsStatus:disapproved AND disapprovalReason:unacceptable_content) OR attribute:47'
            query?: string,
        }) : gapi.client.Request<ListCreativesResponse>;        
        
        // Creates a creative.
        create (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // Indicates if multiple creatives can share an ID or not. Default is
            // NO_DUPLICATES (one ID per creative).
            duplicateIdMode?: string,
            // The account that this creative belongs to.
            // Can be used to filter the response of the
            // creatives.list
            // method.
            accountId: string,
        }) : gapi.client.Request<Creative>;        
        
        // Stops watching a creative. Will stop push notifications being sent to the
        // topics when the creative changes status.
        stopWatching (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // The creative ID of the creative to stop notifications for.
            // Specify "-" to specify stopping account level notifications.
            creativeId: string,
            // The account of the creative to stop notifications for.
            accountId: string,
        }) : gapi.client.Request<Empty>;        
        
        dealAssociations: DealAssociationsResource,
    }
    
    
    interface BidResponsesWithoutBidsResource {
        // List all reasons for which bid responses were considered to have no
        // applicable bids, with the number of bid responses affected for each reason.
        list (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // The ID of the filter set to apply.
            filterSetId: string,
            // A token identifying a page of results the server should return.
            // Typically, this is the value of
            // ListBidResponsesWithoutBidsResponse.nextPageToken
            // returned from the previous call to the
            // accounts.filterSets.bidResponsesWithoutBids.list
            // method.
            pageToken?: string,
            // Requested page size. The server may return fewer results than requested.
            // If unspecified, the server will pick an appropriate default.
            pageSize?: number,
            // Account ID of the buyer.
            accountId: string,
        }) : gapi.client.Request<ListBidResponsesWithoutBidsResponse>;        
        
    }
    
    
    interface FilteredBidRequestsResource {
        // List all reasons that caused a bid request not to be sent for an
        // impression, with the number of bid requests not sent for each reason.
        list (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // The ID of the filter set to apply.
            filterSetId: string,
            // A token identifying a page of results the server should return.
            // Typically, this is the value of
            // ListFilteredBidRequestsResponse.nextPageToken
            // returned from the previous call to the
            // accounts.filterSets.filteredBidRequests.list
            // method.
            pageToken?: string,
            // Requested page size. The server may return fewer results than requested.
            // If unspecified, the server will pick an appropriate default.
            pageSize?: number,
            // Account ID of the buyer.
            accountId: string,
        }) : gapi.client.Request<ListFilteredBidRequestsResponse>;        
        
    }
    
    
    interface CreativesResource {
        // List all creatives associated with a specific reason for which bids were
        // filtered, with the number of bids filtered for each creative.
        list (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // A token identifying a page of results the server should return.
            // Typically, this is the value of
            // ListCreativeStatusBreakdownByCreativeResponse.nextPageToken
            // returned from the previous call to the
            // accounts.filterSets.filteredBids.creatives.list
            // method.
            pageToken?: string,
            // The ID of the creative status for which to retrieve a breakdown by
            // creative.
            // See
            // [creative-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/creative-status-codes).
            creativeStatusId: number,
            // Requested page size. The server may return fewer results than requested.
            // If unspecified, the server will pick an appropriate default.
            pageSize?: number,
            // Account ID of the buyer.
            accountId: string,
            // The ID of the filter set to apply.
            filterSetId: string,
        }) : gapi.client.Request<ListCreativeStatusBreakdownByCreativeResponse>;        
        
    }
    
    
    interface DetailsResource {
        // List all details associated with a specific reason for which bids were
        // filtered, with the number of bids filtered for each detail.
        list (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // Requested page size. The server may return fewer results than requested.
            // If unspecified, the server will pick an appropriate default.
            pageSize?: number,
            // Account ID of the buyer.
            accountId: string,
            // The ID of the filter set to apply.
            filterSetId: string,
            // A token identifying a page of results the server should return.
            // Typically, this is the value of
            // ListCreativeStatusBreakdownByDetailResponse.nextPageToken
            // returned from the previous call to the
            // accounts.filterSets.filteredBids.details.list
            // method.
            pageToken?: string,
            // The ID of the creative status for which to retrieve a breakdown by detail.
            // See
            // [creative-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/creative-status-codes).
            // Details are only available for statuses 14, 15, 17, 18, 19, 86, and 87.
            creativeStatusId: number,
        }) : gapi.client.Request<ListCreativeStatusBreakdownByDetailResponse>;        
        
    }
    
    
    interface FilteredBidsResource {
        // List all reasons for which bids were filtered, with the number of bids
        // filtered for each reason.
        list (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // A token identifying a page of results the server should return.
            // Typically, this is the value of
            // ListFilteredBidsResponse.nextPageToken
            // returned from the previous call to the
            // accounts.filterSets.filteredBids.list
            // method.
            pageToken?: string,
            // Requested page size. The server may return fewer results than requested.
            // If unspecified, the server will pick an appropriate default.
            pageSize?: number,
            // Account ID of the buyer.
            accountId: string,
            // The ID of the filter set to apply.
            filterSetId: string,
        }) : gapi.client.Request<ListFilteredBidsResponse>;        
        
        creatives: CreativesResource,
        details: DetailsResource,
    }
    
    
    interface NonBillableWinningBidsResource {
        // List all reasons for which winning bids were not billable, with the number
        // of bids not billed for each reason.
        list (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // A token identifying a page of results the server should return.
            // Typically, this is the value of
            // ListNonBillableWinningBidsResponse.nextPageToken
            // returned from the previous call to the
            // accounts.filterSets.nonBillableWinningBids.list
            // method.
            pageToken?: string,
            // Requested page size. The server may return fewer results than requested.
            // If unspecified, the server will pick an appropriate default.
            pageSize?: number,
            // Account ID of the buyer.
            accountId: string,
            // The ID of the filter set to apply.
            filterSetId: string,
        }) : gapi.client.Request<ListNonBillableWinningBidsResponse>;        
        
    }
    
    
    interface LosingBidsResource {
        // List all reasons for which bids lost in the auction, with the number of
        // bids that lost for each reason.
        list (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // A token identifying a page of results the server should return.
            // Typically, this is the value of
            // ListLosingBidsResponse.nextPageToken
            // returned from the previous call to the
            // accounts.filterSets.losingBids.list
            // method.
            pageToken?: string,
            // Requested page size. The server may return fewer results than requested.
            // If unspecified, the server will pick an appropriate default.
            pageSize?: number,
            // Account ID of the buyer.
            accountId: string,
            // The ID of the filter set to apply.
            filterSetId: string,
        }) : gapi.client.Request<ListLosingBidsResponse>;        
        
    }
    
    
    interface BidMetricsResource {
        // Lists all metrics that are measured in terms of number of bids.
        list (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // A token identifying a page of results the server should return.
            // Typically, this is the value of
            // ListBidMetricsResponse.nextPageToken
            // returned from the previous call to the
            // accounts.filterSets.bidMetrics.list
            // method.
            pageToken?: string,
            // Requested page size. The server may return fewer results than requested.
            // If unspecified, the server will pick an appropriate default.
            pageSize?: number,
            // Account ID of the buyer.
            accountId: string,
            // The ID of the filter set to apply.
            filterSetId: string,
        }) : gapi.client.Request<ListBidMetricsResponse>;        
        
    }
    
    
    interface ImpressionMetricsResource {
        // Lists all metrics that are measured in terms of number of impressions.
        list (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // A token identifying a page of results the server should return.
            // Typically, this is the value of
            // ListImpressionMetricsResponse.nextPageToken
            // returned from the previous call to the
            // accounts.filterSets.impressionMetrics.list
            // method.
            pageToken?: string,
            // Requested page size. The server may return fewer results than requested.
            // If unspecified, the server will pick an appropriate default.
            pageSize?: number,
            // Account ID of the buyer.
            accountId: string,
            // The ID of the filter set to apply.
            filterSetId: string,
        }) : gapi.client.Request<ListImpressionMetricsResponse>;        
        
    }
    
    
    interface BidResponseErrorsResource {
        // List all errors that occurred in bid responses, with the number of bid
        // responses affected for each reason.
        list (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // The ID of the filter set to apply.
            filterSetId: string,
            // A token identifying a page of results the server should return.
            // Typically, this is the value of
            // ListBidResponseErrorsResponse.nextPageToken
            // returned from the previous call to the
            // accounts.filterSets.bidResponseErrors.list
            // method.
            pageToken?: string,
            // Requested page size. The server may return fewer results than requested.
            // If unspecified, the server will pick an appropriate default.
            pageSize?: number,
            // Account ID of the buyer.
            accountId: string,
        }) : gapi.client.Request<ListBidResponseErrorsResponse>;        
        
    }
    
    
    interface FilterSetsResource {
        // Deletes the requested filter set from the account with the given account
        // ID.
        delete (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // Account ID of the buyer.
            accountId: string,
            // The ID of the filter set to delete.
            filterSetId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Lists all filter sets for the account with the given account ID.
        list (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // Requested page size. The server may return fewer results than requested.
            // If unspecified, the server will pick an appropriate default.
            pageSize?: number,
            // Account ID of the buyer.
            accountId: string,
            // A token identifying a page of results the server should return.
            // Typically, this is the value of
            // ListFilterSetsResponse.nextPageToken
            // returned from the previous call to the
            // accounts.filterSets.list
            // method.
            pageToken?: string,
        }) : gapi.client.Request<ListFilterSetsResponse>;        
        
        // Retrieves the requested filter set for the account with the given account
        // ID.
        get (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // The ID of the filter set to get.
            filterSetId: string,
            // Account ID of the buyer.
            accountId: string,
        }) : gapi.client.Request<FilterSet>;        
        
        // Creates the specified filter set for the account with the given account ID.
        create (request: {        
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
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
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // Whether the filter set is transient, or should be persisted indefinitely.
            // By default, filter sets are not transient.
            // If transient, it will be available for at least 1 hour after creation.
            isTransient?: boolean,
            // Account ID of the buyer.
            accountId: string,
        }) : gapi.client.Request<FilterSet>;        
        
        bidResponsesWithoutBids: BidResponsesWithoutBidsResource,
        filteredBidRequests: FilteredBidRequestsResource,
        filteredBids: FilteredBidsResource,
        nonBillableWinningBids: NonBillableWinningBidsResource,
        losingBids: LosingBidsResource,
        bidMetrics: BidMetricsResource,
        impressionMetrics: ImpressionMetricsResource,
        bidResponseErrors: BidResponseErrorsResource,
    }
    
    
    interface AccountsResource {
        clients: ClientsResource,
        creatives: CreativesResource,
        filterSets: FilterSetsResource,
    }
    
}

declare module gapi.client.adexchangebuyer2 {
    var accounts: gapi.client.adexchangebuyer2.AccountsResource; 
    
}
