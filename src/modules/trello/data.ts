import { randColor } from "modules/core/randomColor";
import uuid from "short-uuid";
import { IColumn } from "./types";

export const data: IColumn[] = [
    [
        {
            id: uuid.generate(),
            title: "Column 1, first card title",
            description: "first card description",
            bgColor: randColor(),
        },
        {
            id: uuid.generate(),
            title: "Column 1, second card title",
            description: "second card description",
            bgColor: randColor(),
        },
        {
            id: uuid.generate(),
            title: "Column 1, third card title",
            description: "third card description",
            bgColor: randColor(),
        },
    ],
    [
        {
            id: uuid.generate(),
            title: "Column 2, first card title",
            description: "first card description",
            bgColor: randColor(),
        },
        {
            id: uuid.generate(),
            title: "Column 2, second card title",
            description: "second card description",
            bgColor: randColor(),
        },
        {
            id: uuid.generate(),
            title: "Column 2, third card title",
            description: "third card description",
            bgColor: randColor(),
        },
    ],
    [
        {
            id: uuid.generate(),
            title: "Column 3, first card title",
            description: "first card description",
            bgColor: randColor(),
        },
        {
            id: uuid.generate(),
            title: "Column 3, second card title",
            description: "second card description",
            bgColor: randColor(),
        },
    ],
];
