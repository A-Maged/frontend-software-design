import uuid from "short-uuid";
import { Order } from "../Order";
import { Product } from "../Product";
import { orderStore } from "../state";

export function Catalogue({ productsList }: { productsList: Product[] }) {
    function onAddToProductClick(product: Product) {
        /* create an order, if it doesn't exist */
        orderStore.order = orderStore.order || new Order(uuid.generate());

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
                        <h2>{product.title}</h2>
                        <p>{product.price}</p>

                        <button onClick={() => onAddToProductClick(product)}>
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
