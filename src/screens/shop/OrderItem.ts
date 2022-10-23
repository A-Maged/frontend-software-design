import { Product } from "./Product";
import { proxy as proxyFactory } from "valtio";

export class OrderItem {
    proxy: OrderItem;

    constructor(
        public readonly id: string,
        public product: Product,
        public quantity: number
    ) {
        return (this.proxy = proxyFactory(this));
    }

    increaseQuantity = () => {
        this.proxy.quantity += 1;
    };
}
