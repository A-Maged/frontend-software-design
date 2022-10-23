import { Box } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import { boardState } from "../state";
import { ICard } from "../types";

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
