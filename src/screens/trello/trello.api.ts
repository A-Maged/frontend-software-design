import { IColumn } from "./trello.types";
import uuid from "short-uuid";
export async function fetchTrelloData(): Promise<IColumn[]> {
    await sleep(2000);

    const data: IColumn[] = [
        [
            {
                id: uuid.generate(),
                title: "Column 1, first card title",
                description: "first card description",
            },
            {
                id: uuid.generate(),
                title: "Column 1, second card title",
                description: "second card description",
            },
            {
                id: uuid.generate(),
                title: "Column 1, third card title",
                description: "third card description",
            },
        ],
        [
            {
                id: uuid.generate(),
                title: "Column 2, first card title",
                description: "first card description",
            },
            {
                id: uuid.generate(),
                title: "Column 2, second card title",
                description: "second card description",
            },
            {
                id: uuid.generate(),
                title: "Column 2, third card title",
                description: "third card description",
            },
        ],
        [
            {
                id: uuid.generate(),
                title: "Column 3, first card title",
                description: "first card description",
            },
            {
                id: uuid.generate(),
                title: "Column 3, second card title",
                description: "second card description",
            },
        ],
    ];

    return data;
}

async function sleep(milliseconds: number = 1000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, milliseconds);
    });
}
