import { Button, Heading } from "@chakra-ui/react";
import { orderStore } from "modules/cart/state";
import { useSnapshot } from "valtio";

export function OrderView() {
    const orderSnap = useSnapshot(orderStore);
    const order = orderSnap.order;

    if (!order || !order?.orderItems.length) {
        return <h1>Cart is empty</h1>;
    }

    return (
        <div>
            <Heading mb="4">Cart</Heading>
            <div style={{ display: "flex", gap: "30px" }}>
                {order.orderItems.map((orderItem) => (
                    <div key={orderItem.id}>
                        <Heading size="md">{orderItem.product.title}</Heading>
                        <p>{orderItem.product.price}</p>

                        <div style={{ display: "flex", gap: "30px" }}>
                            <Button onClick={() => order.removeOrderItem(orderItem)}>
                                remove product
                            </Button>

                            <Button onClick={() => orderItem.increaseQuantity()}>
                                increase quantity ({orderItem.quantity})
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
