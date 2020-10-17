import { CONDITION, ORDER_BY } from "./constants";

export interface SearchParameters extends Record < string, string | string[] | number | number[] | boolean > {
    condition: typeof CONDITION[keyof typeof CONDITION] | "";
    orderBy: typeof ORDER_BY[keyof typeof ORDER_BY];
    /**
     * Keyword of searching
     */
    query: string;
    priceRange: string;
    superSeller: boolean;
    bukaMall: boolean,
    page: number;

    /**
     * Product rating range, example: 3:5 will shows product with higher than 3 ratings
     */
    ratingRange: string;
    couriers: string[];
}


// Jesus Christ Bukalapak, why so many keys!!!
export interface Product {
    active: boolean;
    assurance: boolean;
    availableCountries: any[];
    category: {
        id: number;
        name: string;
        structure: string[];
        url: string;
    };
    condition: string;
    createdAt: Date;
    deal: any;
    defaultCatalog: null;
    description: string;
    digitalProduct: boolean;
    forSale: boolean;
    id: string;
    images: {
        largeUrls: string[];
        smallUrls: string[];
    };
    imported: boolean;
    installments: {
        bankIssuer: string;
        bankIssuerName: string;
        logoURL: string;
        terms: number[];
    }[];
    maxQuantity: number;
    merchantReturnInsurance: boolean;
    minQuantity: number;
    name: string;
    price: number;
    productSin: any[];
    rating: {
        averageRate: number;
        userCount: number;
    };
    relistedAt: Date;
    rushDelivery: boolean;
    shipping: {
        forceInsurance: boolean;
        freeShippingCoverage: any[];
    };
    skuID: number;
    sla: {
        type: string;
        value: number;
    };
    specialCampaignID: number;
    specs: Record<string, string>;
    state: string;
    stateDescription: any[];
    stats: {
        interestCount: number;
        soldCount: number;
        viewCount: number;
        waitingPaymentCount: number;
    };
    stock: number;
    store: {
        address: {
            city: string;
            province: string;
        };
        alert: string;
        avatarURL: string;
        brandSeller: boolean;
        carriers: string[];
        closing: {
            closed: boolean;
        };
        deliveryTime: string;
        description: string;
        firstUploadProductAt: Date;
        flagship: boolean;
        groups: any[];
        headerImage: {
            url: string;
        };
        id: number;
        inactivity: {
            inactive: boolean;
            lastAppearAt: Date;
        };
        lastOrderSchedule: any;
        level: {
            imageURL: string;
            name: string;
        };
        name: string;
        premiumLevel: string;
        premiumTopSeller: boolean;
        rejection: {
            recentTransactions: number;
            rejected: number;
        };
        reviews: {
            negative: number;
            positive: number;
        };
        sla: {
            type: string;
            value: number;
        };
        subscriberAmount: number;
        termAndCondition: string;
        url: string;
    };
    tagPages: any[];
    updatedAt: Date;
    url: string;
    videoURL: string;
    warranty: {
        cheapest: boolean;
    };
    weight: number;
    wholesales: any[];
    withoutShipping: boolean;
}