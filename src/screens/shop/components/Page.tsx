import uuid from "short-uuid";

import { Product } from "screens/shop/Product";
import { Catalogue } from "screens/shop/components/Catalogue";
import { OrderView } from "screens/shop/components/OrderView";

const productsList = [
    new Product(uuid.generate(), "laptop", 3440),
    new Product(uuid.generate(), "iphone 12", 1350),
    new Product(uuid.generate(), "iphone 13", 2500),
];

export function ShopPage() {
    return (
        <div className="App">
            <Catalogue productsList={productsList} />
            <hr />
            <OrderView />
        </div>
    );
}
