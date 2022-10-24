import { Divider } from "@chakra-ui/react";
import uuid from "short-uuid";

/* Note: pages use components from multiple modules  */
import { Catalogue } from "modules/shop/components/Catalogue";
import { Product } from "modules/shop/Product";
import { OrderView } from "modules/cart/components/OrderView";

const productsList = [
    new Product(uuid.generate(), "laptop", 3440),
    new Product(uuid.generate(), "iphone 12", 1350),
    new Product(uuid.generate(), "iphone 13", 2500),
];

export function ShopPage() {
    return (
        <div className="App">
            <Catalogue productsList={productsList} />
            <Divider my="10" />
            <OrderView />
        </div>
    );
}
