import { Product } from "../shop/Product";
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

    get price() {
        return this.product.price * this.quantity;
    }

    increaseQuantity = () => {
        this.proxy.quantity += 1;
    };

    decreaseQuantity = () => {
        if (this.proxy.quantity <= 0) {
            throw new Error("can have negar=tivre[");
        }
        this.proxy.quantity -= 1;
    };
}
