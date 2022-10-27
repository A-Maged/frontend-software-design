import { proxy as proxyFactory } from "valtio";
import { OrderItem } from "./OrderItem";
import { Product } from "../shop/Product";

import uuid from "short-uuid";

export class Order {
    proxy: Order;

    constructor(
        public readonly id: string,
        public orderItems: OrderItem[] = proxyFactory([])
    ) {
        /* boilerplate to make object reactive */
        return (this.proxy = proxyFactory(this));
    }

    get price() {
        return this.orderItems.reduce((total, item) => (total += item.price), 0);
    }

    addProduct = (product: Product) => {
        if (!(product instanceof Product)) {
            throw new Error("you must pass an Product");
        }

        const alreadyAddedProduct = this.proxy.orderItems.find(
            (orderItem) => orderItem.id === product.id
        );

        if (alreadyAddedProduct) {
            alreadyAddedProduct.increaseQuantity();
        } else {
            const orderItem = new OrderItem(product.id, product, 1);
            this.proxy.addOrderItem(orderItem);
        }
    };

    addOrderItem = (orderItem: OrderItem) => {
        if (!(orderItem instanceof OrderItem)) {
            throw new Error("you must pass an OrderItem");
        }

        this.proxy.orderItems.push(orderItem);
    };

    removeOrderItem = (orderItem: OrderItem) => {
        this.proxy.removeProductById(orderItem.product.id);
    };

    removeProductById = (productId: Product["id"]) => {
        const newOrderItems = this.proxy.orderItems.filter(
            (orderItem) => orderItem.product.id !== productId
        );

        this.proxy.orderItems = newOrderItems;
    };
}
