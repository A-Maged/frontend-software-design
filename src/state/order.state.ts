import { proxy } from "valtio";
import { Order } from "../domain/Order";

export let orderStore = proxy<{ order?: Order }>({ order: undefined });
