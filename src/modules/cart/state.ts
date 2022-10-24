import { Order } from "modules/cart/Order";
import { proxy } from "valtio";
import uuid from "short-uuid";

export let orderStore = proxy<{ order: Order }>({ order: new Order(uuid.generate()) });
