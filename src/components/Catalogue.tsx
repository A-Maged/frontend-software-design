import { useSnapshot } from "valtio";
import { Order } from "../domain/Order";
import { Product } from "../domain/Product";
import { orderStore } from "../state/order.state";

function useCatalogue() {
    const orderSnap = useSnapshot(orderStore);
    const order = orderSnap.order;

    /* application logic */
    function onAddToProductClick(product: Product) {
        /* create an order, if it doesn't exist */
        orderStore.order = orderStore.order || new Order("id-3242");

        orderStore.order?.addProduct(product);
    }

    return {
        order,
        onAddToProductClick,
    };
}

export function Catalogue({ productsList }: { productsList: Product[] }) {
    const { order, onAddToProductClick } = useCatalogue();

    return (
        <div>
            <h1>Catalogue</h1>

            <pre>{JSON.stringify(order, null, 4)}</pre>

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
