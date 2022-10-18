import { useEffect, useState } from "react";
import { OrderView } from "./OrderView";
import { Catalogue } from "./Catalogue";
import { Order } from "../domain/Order";
import { Product } from "../domain/Product";

const productsList = [
    new Product("id-4523", "laptop", 3440),
    new Product("id-6723", "iphone 12", 1350),
    new Product("id-1745", "iphone 13", 2500),
];

export function App() {
    return (
        <div className="App">
            <Catalogue productsList={productsList} />
            <hr />
            <OrderView />
        </div>
    );
}
