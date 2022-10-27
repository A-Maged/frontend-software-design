import { Box, Button, Heading } from "@chakra-ui/react";

import { orderStore } from "modules/cart/state";
import { Product } from "modules/shop/Product";

export function ProductCard({ product }: { product: Product }) {
    function onAddToProductClick(product: Product) {
        /* Todo: make modules loosely coupled.
           sendDomainEvent(AddProductToCartEvent, product) */
        orderStore.addProduct(product);
    }

    return (
        <Box border="1px solid black" p="4">
            <Heading size="md">{product.title}</Heading>
            <p>{product.price}</p>
            <Button onClick={() => onAddToProductClick(product)}>Add to cart</Button>
        </Box>
    );
}
