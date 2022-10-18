import { useSnapshot } from "valtio";
import { orderStore } from "../state/order.state";

export function OrderView() {
    const orderSnap = useSnapshot(orderStore);
    const order = orderSnap.order;

    if (!order || !order?.orderItems.length) {
        return <h1>Cart is empty</h1>;
    }

    return (
        <div key={order.id}>
            <h1>Cart</h1>

            <div style={{ display: "flex", gap: "30px" }}>
                {order.orderItems.map((orderItem) => (
                    <div key={orderItem.product.id}>
                        <h1>{orderItem.product.title}</h1>
                        <p>{orderItem.product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
