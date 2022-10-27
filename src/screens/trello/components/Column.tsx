import { VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useSnapshot } from "valtio";

import { boardState } from "modules/trello/state";

type Props = {
    columnIndex: number;
    children: ReactNode;
};

export function Column({ columnIndex, children }: Props) {
    const { columns, draggingState, moveCardBetweenColumns } = useSnapshot(boardState);

    return (
        <VStack
            data-column-index={columnIndex}
            onDrop={(e) => {
                const targetColumnIndex = Number(
                    e.currentTarget.getAttribute("data-column-index")
                );

                moveCardBetweenColumns(
                    draggingState.sourceColumnIndex!,
                    draggingState.cardIndex!,
                    targetColumnIndex,
                    columns[targetColumnIndex].length // Todo
                );
            }}
            onDragOver={(e) => {
                /* allow drop */
                e.preventDefault();
            }}
            align="start"
            w="30vw"
            border="2px solid black"
            p="4"
            h="80vh"
        >
            {children}
        </VStack>
    );
}
