import { Heading, Text } from "@chakra-ui/react";
import { Product } from "modules/shop/Product";
import { ProductCard } from "./ProductCard";

export function Catalogue({ productsList }: { productsList: Product[] }) {
    return (
        <div>
            <Heading my="4">Catalogue</Heading>

            <Text as="ul" mb="6">
                <li>Subsequent clicks on "Add to cart" button, will increase quantity</li>
            </Text>

            <div
                style={{
                    display: "flex",
                    gap: "30px",
                }}
            >
                {productsList.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
