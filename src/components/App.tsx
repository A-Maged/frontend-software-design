import { OrderView } from "./OrderView";
import { Catalogue } from "./Catalogue";
import { Product } from "../domain/Product";
import uuid from "short-uuid";

const productsList = [
    new Product(uuid.generate(), "laptop", 3440),
    new Product(uuid.generate(), "iphone 12", 1350),
    new Product(uuid.generate(), "iphone 13", 2500),
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
