import { Heading, Text } from "@chakra-ui/react";
import { useSnapshot } from "valtio";

import { orderStore } from "modules/cart/state";
import { OrderItemCard } from "./OrderItemCard";

export function OrderView() {
    const order = useSnapshot(orderStore);

    if (!order || !order?.orderItems.length) {
        return <Heading>Cart is empty</Heading>;
    }

    return (
        <div>
            <Heading mb="4">
                <span>Cart </span>
                <Text fontSize="md" as="span">
                    (Total: {order.price})
                </Text>
            </Heading>

            <Text as="ul" mb="6">
                <li>Increasing the quantity will increase the price</li>
                <li>
                    Decreasing the quantity to zero, will remove the product from cart
                </li>
            </Text>

            <div style={{ display: "flex", gap: "30px" }}>
                {order.orderItems.map((orderItem) => (
                    <OrderItemCard key={orderItem.id} orderItem={orderItem} />
                ))}
            </div>
        </div>
    );
}
