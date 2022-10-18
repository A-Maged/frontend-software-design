import { Product } from "./Product";
import { proxy as proxyFactory } from "valtio";

export class OrderItem {
    proxy: OrderItem;

    constructor(public product: Product, public quantity: number) {
        this.proxy = proxyFactory(this);
        return this.proxy;
    }

    increaseQuantity = () => {
        this.proxy.quantity += 1;
    };
}
