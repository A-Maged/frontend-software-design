import { proxy as proxyFactory } from "valtio";

export class Product {
    proxy: Product;

    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly price: number
    ) {
        /* boilerplate to make object reactive */
        this.proxy = proxyFactory(this);
        return this.proxy;
    }
}
