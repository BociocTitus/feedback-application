export enum FeedbackTopic {
    PRODUCT = "Product",
    SERVICE = "Service",
    OTHER_CUSTOMERS = "Other Customers",
}

export interface Feedback {
    id: string;
    userId: string;
    message: string;
    topic: FeedbackTopic;
    createdAt: Date;
}

export interface FeedbackRequest {
    userId: string;
    message: string;
    topic: FeedbackTopic;
}

