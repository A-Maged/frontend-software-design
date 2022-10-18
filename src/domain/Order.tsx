import { proxy as proxyFactory } from "valtio";
import { OrderItem } from "./OrderItem";
import { Product } from "./Product";

export class Order {
    proxy: Order;

    constructor(
        public readonly id: string,
        public orderItems: OrderItem[] = []
    ) {
        this.proxy = proxyFactory(this);
        return this.proxy;
    }

    addProduct = (product: Product) => {
        if (!(product instanceof Product)) {
            throw new Error("you must pass an Product");
        }

        const orderItem = new OrderItem(product, 1);
        this.proxy.addOrderItem(orderItem);
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
