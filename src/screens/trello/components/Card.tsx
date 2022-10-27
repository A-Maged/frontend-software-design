import { Box } from "@chakra-ui/react";
import { randColor } from "modules/core/randomColor";
import { useState } from "react";
import { useSnapshot } from "valtio";
import { boardState } from "../../../modules/trello/state";
import { ICard } from "../../../modules/trello/types";

type Props = {
    card: ICard;
    cardIndex: number;
    columnIndex: number;
};

export function Card({ card, cardIndex, columnIndex }: Props) {
    const { setDraggingState } = useSnapshot(boardState);

    return (
        <Box
            draggable
            bg={card.bgColor}
            p="10px"
            w="full"
            border="1px solid black"
            onDragStart={() => {
                setDraggingState(columnIndex, cardIndex);
            }}
        >
            <br />
            {card.title}
            {card.description}
        </Box>
    );
}
