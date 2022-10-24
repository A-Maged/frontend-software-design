a class returning a proxy object from the constructor, is an indication that the class is reactive, and React.js will rerender on updating it's properties

```ts
class Order {
    proxy: Order;
    constructor() {
        return (this.proxy = proxyFactory<Order>(this));
    }
}
```
