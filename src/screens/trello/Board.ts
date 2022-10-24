import { proxy as proxyFactory } from "valtio";
import { fetchTrelloData } from "./api";
import { IColumn } from "./types";

export class Board {
    proxy: Board;

    columns: IColumn[] = [];
    draggingState: {
        sourceColumnIndex?: number;
        cardIndex?: number;
    } = proxyFactory({
        sourceIndex: undefined,
        cardIndex: undefined,
    });

    constructor() {
        return (this.proxy = proxyFactory<Board>(this));
    }

    fetchData = async () => {
        this.proxy.columns = await fetchTrelloData();
    };

    setDraggingState = (sourceColumnIndex: number, cardIndex: number) => {
        this.proxy.draggingState.sourceColumnIndex = sourceColumnIndex;
        this.proxy.draggingState.cardIndex = cardIndex;
    };

    moveCardBetweenColumns = (
        sourceColumnIndex: number,
        cardIndex: number,
        destinationColumnIndex: number,
        newCardIndex: number
    ) => {
        const card = this.proxy.columns[sourceColumnIndex][cardIndex];

        /* delete */
        this.proxy.columns[sourceColumnIndex].splice(cardIndex, 1);

        /* insert */
        this.proxy.columns[destinationColumnIndex].splice(newCardIndex, 0, card);
    };
}
