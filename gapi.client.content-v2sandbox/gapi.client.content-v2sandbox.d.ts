// Type definitions for Google Content API for Shopping v2sandbox
// Project: https://developers.google.com/shopping-content
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.content {
    
    interface Error {
        // The domain of the error.
        domain?: string,
        // A description of the error.
        message?: string,
        // The error code.
        reason?: string,
    }
    
    interface Errors {
        // The HTTP status of the first error in errors.
        code?: number,
        // A list of errors.
        errors?: Error[],        
        // The message of the first error in errors.
        message?: string,
    }
    
    interface Order {
        // Whether the order was acknowledged.
        acknowledged?: boolean,
        // The channel type of the order: "purchaseOnGoogle" or "googleExpress".
        channelType?: string,
        // The details of the customer who placed the order.
        customer?: OrderCustomer,
        // The details for the delivery.
        deliveryDetails?: OrderDeliveryDetails,
        // The REST id of the order. Globally unique.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "content#order".
        kind?: string,
        // Line items that are ordered.
        lineItems?: OrderLineItem[],        
        // 
        merchantId?: string,
        // Merchant-provided id of the order.
        merchantOrderId?: string,
        // The net amount for the order. For example, if an order was originally for a grand total of $100 and a refund was issued for $20, the net amount will be $80.
        netAmount?: Price,
        // The details of the payment method.
        paymentMethod?: OrderPaymentMethod,
        // The status of the payment.
        paymentStatus?: string,
        // The date when the order was placed, in ISO 8601 format.
        placedDate?: string,
        // The details of the merchant provided promotions applied to the order. More details about the program are  here.
        promotions?: OrderPromotion[],        
        // Refunds for the order.
        refunds?: OrderRefund[],        
        // Shipments of the order.
        shipments?: OrderShipment[],        
        // The total cost of shipping for all items.
        shippingCost?: Price,
        // The tax for the total shipping cost.
        shippingCostTax?: Price,
        // The requested shipping option.
        shippingOption?: string,
        // The status of the order.
        status?: string,
    }
    
    interface OrderAddress {
        // CLDR country code (e.g. "US").
        country?: string,
        // Strings representing the lines of the printed label for mailing the order, for example:
        // John Smith
        // 1600 Amphitheatre Parkway
        // Mountain View, CA, 94043
        // United States
        fullAddress?: string[],        
        // Whether the address is a post office box.
        isPostOfficeBox?: boolean,
        // City, town or commune. May also include dependent localities or sublocalities (e.g. neighborhoods or suburbs).
        locality?: string,
        // Postal Code or ZIP (e.g. "94043").
        postalCode?: string,
        // Name of the recipient.
        recipientName?: string,
        // Top-level administrative subdivision of the country (e.g. "CA").
        region?: string,
        // Street-level part of the address.
        streetAddress?: string[],        
    }
    
    interface OrderCancellation {
        // The actor that created the cancellation.
        actor?: string,
        // Date on which the cancellation has been created, in ISO 8601 format.
        creationDate?: string,
        // The quantity that was canceled.
        quantity?: number,
        // The reason for the cancellation. Orders that are cancelled with a noInventory reason will lead to the removal of the product from POG until you make an update to that product. This will not affect your Shopping ads.
        reason?: string,
        // The explanation of the reason.
        reasonText?: string,
    }
    
    interface OrderCustomer {
        // Email address of the customer.
        email?: string,
        // If set, this indicates the user explicitly chose to opt in or out of providing marketing rights to the merchant. If unset, this indicates the user has already made this choice in a previous purchase, and was thus not shown the marketing right opt in/out checkbox during the checkout flow.
        explicitMarketingPreference?: boolean,
        // Full name of the customer.
        fullName?: string,
    }
    
    interface OrderDeliveryDetails {
        // The delivery address
        address?: OrderAddress,
        // The phone number of the person receiving the delivery.
        phoneNumber?: string,
    }
    
    interface OrderLineItem {
        // Cancellations of the line item.
        cancellations?: OrderCancellation[],        
        // The id of the line item.
        id?: string,
        // Total price for the line item. For example, if two items for $10 are purchased, the total price will be $20.
        price?: Price,
        // Product data from the time of the order placement.
        product?: OrderLineItemProduct,
        // Number of items canceled.
        quantityCanceled?: number,
        // Number of items delivered.
        quantityDelivered?: number,
        // Number of items ordered.
        quantityOrdered?: number,
        // Number of items pending.
        quantityPending?: number,
        // Number of items returned.
        quantityReturned?: number,
        // Number of items shipped.
        quantityShipped?: number,
        // Details of the return policy for the line item.
        returnInfo?: OrderLineItemReturnInfo,
        // Returns of the line item.
        returns?: OrderReturn[],        
        // Details of the requested shipping for the line item.
        shippingDetails?: OrderLineItemShippingDetails,
        // Total tax amount for the line item. For example, if two items are purchased, and each have a cost tax of $2, the total tax amount will be $4.
        tax?: Price,
    }
    
    interface OrderLineItemProduct {
        // Brand of the item.
        brand?: string,
        // The item's channel (online or local).
        channel?: string,
        // Condition or state of the item.
        condition?: string,
        // The two-letter ISO 639-1 language code for the item.
        contentLanguage?: string,
        // Global Trade Item Number (GTIN) of the item.
        gtin?: string,
        // The REST id of the product.
        id?: string,
        // URL of an image of the item.
        imageLink?: string,
        // Shared identifier for all variants of the same product.
        itemGroupId?: string,
        // Manufacturer Part Number (MPN) of the item.
        mpn?: string,
        // An identifier of the item.
        offerId?: string,
        // Price of the item.
        price?: Price,
        // URL to the cached image shown to the user when order was placed.
        shownImage?: string,
        // The CLDR territory code of the target country of the product.
        targetCountry?: string,
        // The title of the product.
        title?: string,
        // Variant attributes for the item. These are dimensions of the product, such as color, gender, material, pattern, and size. You can find a comprehensive list of variant attributes here.
        variantAttributes?: OrderLineItemProductVariantAttribute[],        
    }
    
    interface OrderLineItemProductVariantAttribute {
        // The dimension of the variant.
        dimension?: string,
        // The value for the dimension.
        value?: string,
    }
    
    interface OrderLineItemReturnInfo {
        // How many days later the item can be returned.
        daysToReturn?: number,
        // Whether the item is returnable.
        isReturnable?: boolean,
        // URL of the item return policy.
        policyUrl?: string,
    }
    
    interface OrderLineItemShippingDetails {
        // The delivery by date, in ISO 8601 format.
        deliverByDate?: string,
        // Details of the shipping method.
        method?: OrderLineItemShippingDetailsMethod,
        // The ship by date, in ISO 8601 format.
        shipByDate?: string,
    }
    
    interface OrderLineItemShippingDetailsMethod {
        // The carrier for the shipping. Optional.
        carrier?: string,
        // Maximum transit time.
        maxDaysInTransit?: number,
        // The name of the shipping method.
        methodName?: string,
        // Minimum transit time.
        minDaysInTransit?: number,
    }
    
    interface OrderPaymentMethod {
        // The billing address.
        billingAddress?: OrderAddress,
        // The card expiration month (January = 1, February = 2 etc.).
        expirationMonth?: number,
        // The card expiration year (4-digit, e.g. 2015).
        expirationYear?: number,
        // The last four digits of the card number.
        lastFourDigits?: string,
        // The billing phone number.
        phoneNumber?: string,
        // The type of instrument (VISA, Mastercard, etc).
        type?: string,
    }
    
    interface OrderPromotion {
        // 
        benefits?: OrderPromotionBenefit[],        
        // The date and time frame when the promotion is active and ready for validation review. Note that the promotion live time may be delayed for a few hours due to the validation review.
        // Start date and end date are separated by a forward slash (/). The start date is specified by the format (YYYY-MM-DD), followed by the letter ?T?, the time of the day when the sale starts (in Greenwich Mean Time, GMT), followed by an expression of the time zone for the sale. The end date is in the same format.
        effectiveDates?: string,
        // Optional. The text code that corresponds to the promotion when applied on the retailer?s website.
        genericRedemptionCode?: string,
        // The unique ID of the promotion.
        id?: string,
        // The full title of the promotion.
        longTitle?: string,
        // Whether the promotion is applicable to all products or only specific products.
        productApplicability?: string,
        // Indicates that the promotion is valid online.
        redemptionChannel?: string,
    }
    
    interface OrderPromotionBenefit {
        // The discount in the order price when the promotion is applied.
        discount?: Price,
        // The OfferId(s) that were purchased in this order and map to this specific benefit of the promotion.
        offerIds?: string[],        
        // Further describes the benefit of the promotion. Note that we will expand on this enumeration as we support new promotion sub-types.
        subType?: string,
        // The impact on tax when the promotion is applied.
        taxImpact?: Price,
        // Describes whether the promotion applies to products (e.g. 20% off) or to shipping (e.g. Free Shipping).
        type?: string,
    }
    
    interface OrderRefund {
        // The actor that created the refund.
        actor?: string,
        // The amount that is refunded.
        amount?: Price,
        // Date on which the item has been created, in ISO 8601 format.
        creationDate?: string,
        // The reason for the refund.
        reason?: string,
        // The explanation of the reason.
        reasonText?: string,
    }
    
    interface OrderReturn {
        // The actor that created the refund.
        actor?: string,
        // Date on which the item has been created, in ISO 8601 format.
        creationDate?: string,
        // Quantity that is returned.
        quantity?: number,
        // The reason for the return.
        reason?: string,
        // The explanation of the reason.
        reasonText?: string,
    }
    
    interface OrderShipment {
        // The carrier handling the shipment.
        carrier?: string,
        // Date on which the shipment has been created, in ISO 8601 format.
        creationDate?: string,
        // Date on which the shipment has been delivered, in ISO 8601 format. Present only if status is delievered
        deliveryDate?: string,
        // The id of the shipment.
        id?: string,
        // The line items that are shipped.
        lineItems?: OrderShipmentLineItemShipment[],        
        // The status of the shipment.
        status?: string,
        // The tracking id for the shipment.
        trackingId?: string,
    }
    
    interface OrderShipmentLineItemShipment {
        // The id of the line item that is shipped.
        lineItemId?: string,
        // The quantity that is shipped.
        quantity?: number,
    }
    
    interface OrdersAcknowledgeRequest {
        // The ID of the operation. Unique across all operations for a given order.
        operationId?: string,
    }
    
    interface OrdersAcknowledgeResponse {
        // The status of the execution.
        executionStatus?: string,
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersAcknowledgeResponse".
        kind?: string,
    }
    
    interface OrdersAdvanceTestOrderResponse {
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersAdvanceTestOrderResponse".
        kind?: string,
    }
    
    interface OrdersCancelLineItemRequest {
        // Amount to refund for the cancelation. Optional. If not set, Google will calculate the default based on the price and tax of the items involved. The amount must not be larger than the net amount left on the order.
        amount?: Price,
        // The ID of the line item to cancel.
        lineItemId?: string,
        // The ID of the operation. Unique across all operations for a given order.
        operationId?: string,
        // The quantity to cancel.
        quantity?: number,
        // The reason for the cancellation.
        reason?: string,
        // The explanation of the reason.
        reasonText?: string,
    }
    
    interface OrdersCancelLineItemResponse {
        // The status of the execution.
        executionStatus?: string,
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelLineItemResponse".
        kind?: string,
    }
    
    interface OrdersCancelRequest {
        // The ID of the operation. Unique across all operations for a given order.
        operationId?: string,
        // The reason for the cancellation.
        reason?: string,
        // The explanation of the reason.
        reasonText?: string,
    }
    
    interface OrdersCancelResponse {
        // The status of the execution.
        executionStatus?: string,
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelResponse".
        kind?: string,
    }
    
    interface OrdersCreateTestOrderRequest {
        // The test order template to use. Specify as an alternative to testOrder as a shortcut for retrieving a template and then creating an order using that template.
        templateName?: string,
        // The test order to create.
        testOrder?: TestOrder,
    }
    
    interface OrdersCreateTestOrderResponse {
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersCreateTestOrderResponse".
        kind?: string,
        // The ID of the newly created test order.
        orderId?: string,
    }
    
    interface OrdersCustomBatchRequest {
        // The request entries to be processed in the batch.
        entries?: OrdersCustomBatchRequestEntry[],        
    }
    
    interface OrdersCustomBatchRequestEntry {
        // An entry ID, unique within the batch request.
        batchId?: number,
        // Required for cancel method.
        cancel?: OrdersCustomBatchRequestEntryCancel,
        // Required for cancelLineItem method.
        cancelLineItem?: OrdersCustomBatchRequestEntryCancelLineItem,
        // The ID of the managing account.
        merchantId?: string,
        // The merchant order id. Required for updateMerchantOrderId and getByMerchantOrderId methods.
        merchantOrderId?: string,
        // The method to apply.
        method?: string,
        // The ID of the operation. Unique across all operations for a given order. Required for all methods beside get and getByMerchantOrderId.
        operationId?: string,
        // The ID of the order. Required for all methods beside getByMerchantOrderId.
        orderId?: string,
        // Required for refund method.
        refund?: OrdersCustomBatchRequestEntryRefund,
        // Required for returnLineItem method.
        returnLineItem?: OrdersCustomBatchRequestEntryReturnLineItem,
        // Required for shipLineItems method.
        shipLineItems?: OrdersCustomBatchRequestEntryShipLineItems,
        // Required for updateShipment method.
        updateShipment?: OrdersCustomBatchRequestEntryUpdateShipment,
    }
    
    interface OrdersCustomBatchRequestEntryCancel {
        // The reason for the cancellation.
        reason?: string,
        // The explanation of the reason.
        reasonText?: string,
    }
    
    interface OrdersCustomBatchRequestEntryCancelLineItem {
        // Amount to refund for the cancelation. Optional. If not set, Google will calculate the default based on the price and tax of the items involved. The amount must not be larger than the net amount left on the order.
        amount?: Price,
        // The ID of the line item to cancel.
        lineItemId?: string,
        // The quantity to cancel.
        quantity?: number,
        // The reason for the cancellation.
        reason?: string,
        // The explanation of the reason.
        reasonText?: string,
    }
    
    interface OrdersCustomBatchRequestEntryRefund {
        // The amount that is refunded.
        amount?: Price,
        // The reason for the refund.
        reason?: string,
        // The explanation of the reason.
        reasonText?: string,
    }
    
    interface OrdersCustomBatchRequestEntryReturnLineItem {
        // The ID of the line item to return.
        lineItemId?: string,
        // The quantity to return.
        quantity?: number,
        // The reason for the return.
        reason?: string,
        // The explanation of the reason.
        reasonText?: string,
    }
    
    interface OrdersCustomBatchRequestEntryShipLineItems {
        // The carrier handling the shipment.
        carrier?: string,
        // Line items to ship.
        lineItems?: OrderShipmentLineItemShipment[],        
        // The ID of the shipment.
        shipmentId?: string,
        // The tracking id for the shipment.
        trackingId?: string,
    }
    
    interface OrdersCustomBatchRequestEntryUpdateShipment {
        // The carrier handling the shipment. Not updated if missing.
        carrier?: string,
        // The ID of the shipment.
        shipmentId?: string,
        // New status for the shipment. Not updated if missing.
        status?: string,
        // The tracking id for the shipment. Not updated if missing.
        trackingId?: string,
    }
    
    interface OrdersCustomBatchResponse {
        // The result of the execution of the batch requests.
        entries?: OrdersCustomBatchResponseEntry[],        
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersCustomBatchResponse".
        kind?: string,
    }
    
    interface OrdersCustomBatchResponseEntry {
        // The ID of the request entry this entry responds to.
        batchId?: number,
        // A list of errors defined if and only if the request failed.
        errors?: Errors,
        // The status of the execution. Only defined if the method is not get or getByMerchantOrderId and if the request was successful.
        executionStatus?: string,
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersCustomBatchResponseEntry".
        kind?: string,
        // The retrieved order. Only defined if the method is get and if the request was successful.
        order?: Order,
    }
    
    interface OrdersGetByMerchantOrderIdResponse {
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersGetByMerchantOrderIdResponse".
        kind?: string,
        // The requested order.
        order?: Order,
    }
    
    interface OrdersGetTestOrderTemplateResponse {
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersGetTestOrderTemplateResponse".
        kind?: string,
        // The requested test order template.
        template?: TestOrder,
    }
    
    interface OrdersListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersListResponse".
        kind?: string,
        // The token for the retrieval of the next page of orders.
        nextPageToken?: string,
        // 
        resources?: Order[],        
    }
    
    interface OrdersRefundRequest {
        // The amount that is refunded.
        amount?: Price,
        // The ID of the operation. Unique across all operations for a given order.
        operationId?: string,
        // The reason for the refund.
        reason?: string,
        // The explanation of the reason.
        reasonText?: string,
    }
    
    interface OrdersRefundResponse {
        // The status of the execution.
        executionStatus?: string,
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersRefundResponse".
        kind?: string,
    }
    
    interface OrdersReturnLineItemRequest {
        // The ID of the line item to return.
        lineItemId?: string,
        // The ID of the operation. Unique across all operations for a given order.
        operationId?: string,
        // The quantity to return.
        quantity?: number,
        // The reason for the return.
        reason?: string,
        // The explanation of the reason.
        reasonText?: string,
    }
    
    interface OrdersReturnLineItemResponse {
        // The status of the execution.
        executionStatus?: string,
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersReturnLineItemResponse".
        kind?: string,
    }
    
    interface OrdersShipLineItemsRequest {
        // The carrier handling the shipment.
        carrier?: string,
        // Line items to ship.
        lineItems?: OrderShipmentLineItemShipment[],        
        // The ID of the operation. Unique across all operations for a given order.
        operationId?: string,
        // The ID of the shipment.
        shipmentId?: string,
        // The tracking id for the shipment.
        trackingId?: string,
    }
    
    interface OrdersShipLineItemsResponse {
        // The status of the execution.
        executionStatus?: string,
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersShipLineItemsResponse".
        kind?: string,
    }
    
    interface OrdersUpdateMerchantOrderIdRequest {
        // The merchant order id to be assigned to the order. Must be unique per merchant.
        merchantOrderId?: string,
        // The ID of the operation. Unique across all operations for a given order.
        operationId?: string,
    }
    
    interface OrdersUpdateMerchantOrderIdResponse {
        // The status of the execution.
        executionStatus?: string,
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersUpdateMerchantOrderIdResponse".
        kind?: string,
    }
    
    interface OrdersUpdateShipmentRequest {
        // The carrier handling the shipment. Not updated if missing.
        carrier?: string,
        // The ID of the operation. Unique across all operations for a given order.
        operationId?: string,
        // The ID of the shipment.
        shipmentId?: string,
        // New status for the shipment. Not updated if missing.
        status?: string,
        // The tracking id for the shipment. Not updated if missing.
        trackingId?: string,
    }
    
    interface OrdersUpdateShipmentResponse {
        // The status of the execution.
        executionStatus?: string,
        // Identifies what kind of resource this is. Value: the fixed string "content#ordersUpdateShipmentResponse".
        kind?: string,
    }
    
    interface Price {
        // The currency of the price.
        currency?: string,
        // The price represented as a number.
        value?: string,
    }
    
    interface TestOrder {
        // The details of the customer who placed the order.
        customer?: TestOrderCustomer,
        // Identifies what kind of resource this is. Value: the fixed string "content#testOrder".
        kind?: string,
        // Line items that are ordered. At least one line item must be provided.
        lineItems?: TestOrderLineItem[],        
        // The details of the payment method.
        paymentMethod?: TestOrderPaymentMethod,
        // Identifier of one of the predefined delivery addresses for the delivery.
        predefinedDeliveryAddress?: string,
        // The details of the merchant provided promotions applied to the order. More details about the program are  here.
        promotions?: OrderPromotion[],        
        // The total cost of shipping for all items.
        shippingCost?: Price,
        // The tax for the total shipping cost.
        shippingCostTax?: Price,
        // The requested shipping option.
        shippingOption?: string,
    }
    
    interface TestOrderCustomer {
        // Email address of the customer.
        email?: string,
        // If set, this indicates the user explicitly chose to opt in or out of providing marketing rights to the merchant. If unset, this indicates the user has already made this choice in a previous purchase, and was thus not shown the marketing right opt in/out checkbox during the checkout flow. Optional.
        explicitMarketingPreference?: boolean,
        // Full name of the customer.
        fullName?: string,
    }
    
    interface TestOrderLineItem {
        // Product data from the time of the order placement.
        product?: TestOrderLineItemProduct,
        // Number of items ordered.
        quantityOrdered?: number,
        // Details of the return policy for the line item.
        returnInfo?: OrderLineItemReturnInfo,
        // Details of the requested shipping for the line item.
        shippingDetails?: OrderLineItemShippingDetails,
        // Unit tax for the line item.
        unitTax?: Price,
    }
    
    interface TestOrderLineItemProduct {
        // Brand of the item.
        brand?: string,
        // The item's channel.
        channel?: string,
        // Condition or state of the item.
        condition?: string,
        // The two-letter ISO 639-1 language code for the item.
        contentLanguage?: string,
        // Global Trade Item Number (GTIN) of the item. Optional.
        gtin?: string,
        // URL of an image of the item.
        imageLink?: string,
        // Shared identifier for all variants of the same product. Optional.
        itemGroupId?: string,
        // Manufacturer Part Number (MPN) of the item. Optional.
        mpn?: string,
        // An identifier of the item.
        offerId?: string,
        // The price for the product.
        price?: Price,
        // The CLDR territory code of the target country of the product.
        targetCountry?: string,
        // The title of the product.
        title?: string,
        // Variant attributes for the item. Optional.
        variantAttributes?: OrderLineItemProductVariantAttribute[],        
    }
    
    interface TestOrderPaymentMethod {
        // The card expiration month (January = 1, February = 2 etc.).
        expirationMonth?: number,
        // The card expiration year (4-digit, e.g. 2015).
        expirationYear?: number,
        // The last four digits of the card number.
        lastFourDigits?: string,
        // The billing address.
        predefinedBillingAddress?: string,
        // The type of instrument. Note that real orders might have different values than the four values accepted by createTestOrder.
        type?: string,
    }
    
    interface OrdersResource {
        // Marks an order as acknowledged. This method can only be called for non-multi-client accounts.
        acknowledge (request: {        
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
            // The ID of the managing account.
            merchantId: string,
            // The ID of the order.
            orderId: string,
        }) : gapi.client.Request<OrdersAcknowledgeResponse>;        
        
        // Sandbox only. Moves a test order from state "inProgress" to state "pendingShipment". This method can only be called for non-multi-client accounts.
        advancetestorder (request: {        
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
            // The ID of the managing account.
            merchantId: string,
            // The ID of the test order to modify.
            orderId: string,
        }) : gapi.client.Request<OrdersAdvanceTestOrderResponse>;        
        
        // Cancels all line items in an order, making a full refund. This method can only be called for non-multi-client accounts.
        cancel (request: {        
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
            // The ID of the managing account.
            merchantId: string,
            // The ID of the order to cancel.
            orderId: string,
        }) : gapi.client.Request<OrdersCancelResponse>;        
        
        // Cancels a line item, making a full refund. This method can only be called for non-multi-client accounts.
        cancellineitem (request: {        
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
            // The ID of the managing account.
            merchantId: string,
            // The ID of the order.
            orderId: string,
        }) : gapi.client.Request<OrdersCancelLineItemResponse>;        
        
        // Sandbox only. Creates a test order. This method can only be called for non-multi-client accounts.
        createtestorder (request: {        
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
            // The ID of the managing account.
            merchantId: string,
        }) : gapi.client.Request<OrdersCreateTestOrderResponse>;        
        
        // Retrieves or modifies multiple orders in a single request. This method can only be called for non-multi-client accounts.
        custombatch (request: {        
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
        }) : gapi.client.Request<OrdersCustomBatchResponse>;        
        
        // Retrieves an order from your Merchant Center account. This method can only be called for non-multi-client accounts.
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
            // The ID of the managing account.
            merchantId: string,
            // The ID of the order.
            orderId: string,
        }) : gapi.client.Request<Order>;        
        
        // Retrieves an order using merchant order id. This method can only be called for non-multi-client accounts.
        getbymerchantorderid (request: {        
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
            // The ID of the managing account.
            merchantId: string,
            // The merchant order id to be looked for.
            merchantOrderId: string,
        }) : gapi.client.Request<OrdersGetByMerchantOrderIdResponse>;        
        
        // Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox. This method can only be called for non-multi-client accounts.
        gettestordertemplate (request: {        
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
            // The ID of the managing account.
            merchantId: string,
            // The name of the template to retrieve.
            templateName: string,
        }) : gapi.client.Request<OrdersGetTestOrderTemplateResponse>;        
        
        // Lists the orders in your Merchant Center account. This method can only be called for non-multi-client accounts.
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
            // Obtains orders that match the acknowledgement status. When set to true, obtains orders that have been acknowledged. When false, obtains orders that have not been acknowledged.
            // We recommend using this filter set to false, in conjunction with the acknowledge call, such that only un-acknowledged orders are returned.
            acknowledged?: boolean,
            // The maximum number of orders to return in the response, used for paging. The default value is 25 orders per page, and the maximum allowed value is 250 orders per page.
            // Known issue: All List calls will return all Orders without limit regardless of the value of this field.
            maxResults?: number,
            // The ID of the managing account.
            merchantId: string,
            // The ordering of the returned list. The only supported value are placedDate desc and placedDate asc for now, which returns orders sorted by placement date. "placedDate desc" stands for listing orders by placement date, from oldest to most recent. "placedDate asc" stands for listing orders by placement date, from most recent to oldest. In future releases we'll support other sorting criteria.
            orderBy?: string,
            // The token returned by the previous request.
            pageToken?: string,
            // Obtains orders placed before this date (exclusively), in ISO 8601 format.
            placedDateEnd?: string,
            // Obtains orders placed after this date (inclusively), in ISO 8601 format.
            placedDateStart?: string,
            // Obtains orders that match any of the specified statuses. Multiple values can be specified with comma separation. Additionally, please note that active is a shortcut for pendingShipment and partiallyShipped, and completed is a shortcut for shipped , partiallyDelivered, delivered, partiallyReturned, returned, and canceled.
            statuses?: string,
        }) : gapi.client.Request<OrdersListResponse>;        
        
        // Refund a portion of the order, up to the full amount paid. This method can only be called for non-multi-client accounts.
        refund (request: {        
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
            // The ID of the managing account.
            merchantId: string,
            // The ID of the order to refund.
            orderId: string,
        }) : gapi.client.Request<OrdersRefundResponse>;        
        
        // Returns a line item. This method can only be called for non-multi-client accounts.
        returnlineitem (request: {        
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
            // The ID of the managing account.
            merchantId: string,
            // The ID of the order.
            orderId: string,
        }) : gapi.client.Request<OrdersReturnLineItemResponse>;        
        
        // Marks line item(s) as shipped. This method can only be called for non-multi-client accounts.
        shiplineitems (request: {        
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
            // The ID of the managing account.
            merchantId: string,
            // The ID of the order.
            orderId: string,
        }) : gapi.client.Request<OrdersShipLineItemsResponse>;        
        
        // Updates the merchant order ID for a given order. This method can only be called for non-multi-client accounts.
        updatemerchantorderid (request: {        
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
            // The ID of the managing account.
            merchantId: string,
            // The ID of the order.
            orderId: string,
        }) : gapi.client.Request<OrdersUpdateMerchantOrderIdResponse>;        
        
        // Updates a shipment's status, carrier, and/or tracking ID. This method can only be called for non-multi-client accounts.
        updateshipment (request: {        
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
            // The ID of the managing account.
            merchantId: string,
            // The ID of the order.
            orderId: string,
        }) : gapi.client.Request<OrdersUpdateShipmentResponse>;        
        
    }
    
}

declare module gapi.client.content {
    var orders: gapi.client.content.OrdersResource; 
    
}
