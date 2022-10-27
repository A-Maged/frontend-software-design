import { Order } from "modules/cart/Order";
import uuid from "short-uuid";

export let orderStore = new Order(uuid.generate());
