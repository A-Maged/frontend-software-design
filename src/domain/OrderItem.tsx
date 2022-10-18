import { Product } from "./Product";

export class OrderItem {
    constructor(
        public readonly product: Product,
        public readonly quantity: number
    ) {}
}
