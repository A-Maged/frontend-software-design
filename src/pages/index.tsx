import type { NextPage } from "next";
import uuid from "short-uuid";

import { Product } from "domain/order/entities/Product";
import { Catalogue } from "components/Catalogue";
import { OrderView } from "components/OrderView";

const productsList = [
    new Product(uuid.generate(), "laptop", 3440),
    new Product(uuid.generate(), "iphone 12", 1350),
    new Product(uuid.generate(), "iphone 13", 2500),
];

const Home: NextPage = () => {
    return (
        <div className="App">
            <Catalogue productsList={productsList} />
            <hr />
            <OrderView />
        </div>
    );
};

export default Home;
