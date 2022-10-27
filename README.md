## The React community has been asking "where to put the logic?" since forever.

Some of the answers was to put in redux reducers, or event-handlers & useEffects.

My answer to that is to put it in **Reactive Classes**, kinda like Angular.

## Reactive class

a class returning a proxy object from the constructor, is an indication that the class is reactive, and React.js will rerender on updating it's properties.

```ts
import { proxy as proxyFactory } from "valtio";

class TrelloBoard {
    proxy: TrelloBoard;
    columns: IColumn[] = [];

    constructor() {
        return (this.proxy = proxyFactory<Order>(this));
    }

    fetchData = async () => {
        /* must use this.proxy to make react know about the change */
        this.proxy.columns = await fetchTrelloData();
    };
}
```

usage in components:

```ts
import { useSnapshot } from "valtio";

/* create a global instance of the state (eg: the page state) */
const boardState = new TrelloBoard()

function Component{
    /* access the reactive class properties & methods */
    const { columns, fetchData } = useSnapshot(boardState)

    useEffect(() => {
        fetchData()
    }, [])

    return columns.map(column => <div>{column.Title}</div>)
}
```

## Screenshots

<div style="border:1px solid black;">
    <img src="https://github.com/A-Maged/frontend-software-design/blob/main/screenshot.png?raw=true" />
</div>

<div style="border:1px solid black;">
    <img src="https://github.com/A-Maged/frontend-software-design/blob/main/screenshot2.png?raw=true" />
</div>
