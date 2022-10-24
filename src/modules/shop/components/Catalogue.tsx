import uuid from "short-uuid";

import { orderStore } from "modules/cart/state";
import { Order } from "modules/cart/Order";
import { Product } from "modules/shop/Product";
import { Button, Heading } from "@chakra-ui/react";

export function Catalogue({ productsList }: { productsList: Product[] }) {
    function onAddToProductClick(product: Product) {
        /* Todo: make modules loosely coupled. 
           sendDomainEvent(AddProductToCartEvent, product) */
        orderStore.order?.addProduct(product);
    }

    return (
        <div>
            <h1>Catalogue</h1>

            <div
                style={{
                    display: "flex",
                    gap: "30px",
                }}
            >
                {productsList.map((product) => (
                    <div key={product.id}>
                        <Heading size="md">{product.title}</Heading>
                        <p>{product.price}</p>

                        <Button onClick={() => onAddToProductClick(product)}>
                            Add to cart
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}
