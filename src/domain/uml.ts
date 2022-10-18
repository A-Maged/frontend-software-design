export interface Requirements {
    "list products": any;
    "favour product": any;
    "add products to Order": any;
    "change product quantity in Order": any;
    "pay for order": any;
    "track order status": any;
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
        totalPrice: number;
    }

    export interface Product {
        id: string;
        name: string;
        price: number;
        cartQuantity: number;
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
    }

    export interface User {
        id: string;
        name: string;
        address: string;
        phone: string;
    }
}
