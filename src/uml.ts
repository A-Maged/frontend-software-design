export interface Requirements {
    "list products": any;
    "favour product": any;
    "create an Order with multiple products": any;
    "change product quantity in Order": any;
    "apply coupon discount to Order": any;
    "pay for order": any;
    "track order status": any;
}

export namespace CoreDomain {
    export interface Money {
        value: BigInt;
        currency: string;
    }
}

export namespace ShopDomain {
    export interface Shop {
        products: Product[];
    }

    export interface FavoriteList {
        products: Product[];
    }

    export interface Product {
        id: string;
        name: string;
        price: number;
        stockQuantity: number;
    }
}

export namespace OrderDomain {
    export interface Order {
        id: string;
        productsList: Product[];
        coupon: Coupon;
        totalPrice: CoreDomain.Money;
    }

    export interface Product {
        id: string;
        name: string;
        price: CoreDomain.Money;
        cartQuantity: number;
    }

    /* value objects */

    export interface Coupon {
        value: string;
        type: "percent" | "fixed";
        maxAmount: CoreDomain.Money;
    }
}

export namespace PaymentDomain {
    export interface Payment {
        amount: Order["totalPrice"];
        userId: User["id"];
        cardDetails: Card;
        order: Order;
    }

    export interface Card {
        cardHolderName: string;
        cardNumber: string;
        cvc: number;
    }

    export interface Order {
        id: string;
        totalPrice: number;
        userId: User["id"];
        shippingDetails: User;
        status: OrderStatus;
    }

    export interface User {
        id: string;
        name: string;
        address: string;
        phone: string;
    }

    /* value objects */

    export interface Coupon {
        value: string;
        type: "percent" | "fixed";
        maxAmount: CoreDomain.Money;
    }

    export enum OrderStatus {
        IN_CART = "in-cart",
        PENDING = "pending",
        PAID = "paid",
        CANCELLED = "canceled",
    }
}
