import { Order } from "screens/shop/Order";
import { proxy } from "valtio";

export let orderStore = proxy<{ order?: Order }>({ order: undefined });
