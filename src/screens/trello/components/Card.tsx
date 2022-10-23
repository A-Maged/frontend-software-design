import { Box } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import { boardState } from "../trello.state";
import { ICard } from "../trello.types";

export function Card({
    card,
    cardIndex,
    columnIndex,
}: {
    card: ICard;
    cardIndex: number;
    columnIndex: number;
}) {
    const { setDraggingState } = useSnapshot(boardState);

    return (
        <Box
            draggable
            p="10px"
            w="full"
            border="1px solid black"
            onDragStart={(e) => {
                setDraggingState(columnIndex, cardIndex);
            }}
        >
            {card.title}
            {card.description}
        </Box>
    );
}
