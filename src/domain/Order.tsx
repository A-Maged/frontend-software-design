import { proxy } from "valtio";
import { OrderItem } from "./OrderItem";
import { Product } from "./Product";

export class Order {
    self: Order;

    constructor(
        public readonly id: string,
        public readonly orderItems: OrderItem[] = []
    ) {
        this.self = proxy(this);
        return this.self;
    }

    addProduct = (product: Product) => {
        if (!(product instanceof Product)) {
            throw new Error("you must pass an Product");
        }

        const orderItem = new OrderItem(product, 1);
        this.self.addOrderItem(orderItem);
    };

    addOrderItem = (orderItem: OrderItem) => {
        if (!(orderItem instanceof OrderItem)) {
            throw new Error("you must pass an OrderItem");
        }

        this.self.orderItems.push(orderItem);
    };
}
