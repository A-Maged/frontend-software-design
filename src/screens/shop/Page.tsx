import { Container, Divider } from "@chakra-ui/react";
import uuid from "short-uuid";

/* Note: pages use components from multiple modules  */
import { Catalogue } from "modules/shop/components/Catalogue";
import { Product } from "modules/shop/Product";
import { OrderView } from "modules/cart/components/OrderView";

const productsList = [
    new Product(uuid.generate(), "laptop", 3440),
    new Product(uuid.generate(), "airpods pro", 1350),
    new Product(uuid.generate(), "iphone 13", 2500),
];

export function ShopPage() {
    return (
        <Container>
            <Catalogue productsList={productsList} />
            <Divider my="10" borderColor="black" />
            <OrderView />
        </Container>
    );
}
