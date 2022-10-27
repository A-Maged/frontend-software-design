import { Box, Button, Heading } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import { orderStore } from "modules/cart/state";
import { OrderItem } from "modules/cart/OrderItem";

export function OrderItemCard({ orderItem }: { orderItem: OrderItem }) {
    const order = useSnapshot(orderStore);

    function onMinusClick() {
        if (orderItem.quantity > 1) {
            orderItem.decreaseQuantity();
        } else {
            order.removeOrderItem(orderItem);
        }
    }

    function onPlusClick() {
        orderItem.increaseQuantity();
    }
    return (
        <Box border="1px solid black" p="4">
            <Heading size="md">
                {orderItem.product.title} (quantity: {orderItem.quantity})
            </Heading>

            <p>{orderItem.price}</p>

            <div style={{ display: "flex", gap: "30px" }}>
                <Button onClick={onMinusClick}>-</Button>
                <Button onClick={onPlusClick}>+</Button>
            </div>
        </Box>
    );
}
