import { VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useSnapshot } from "valtio";
import { boardState } from "../state";

type Props = {
    columnIndex: number;
    children: ReactNode;
};

export function Column({ columnIndex, children }: Props) {
    const { draggingState, moveCardBetweenColumns } = useSnapshot(boardState);

    return (
        <VStack
            align="start"
            border="2px solid black"
            p="2"
            h="100%"
            data-column-index={columnIndex}
            onDrop={(e) => {
                const targetColumnIndex = Number(
                    e.currentTarget.getAttribute("data-column-index")
                );

                moveCardBetweenColumns(
                    draggingState.sourceColumnIndex!,
                    draggingState.cardIndex!,
                    targetColumnIndex,
                    0 // Todo
                );
            }}
            onDragOver={(e) => {
                /* allow drop */
                e.preventDefault();
            }}
        >
            {children}
        </VStack>
    );
}
