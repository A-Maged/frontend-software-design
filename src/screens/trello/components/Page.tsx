import { Center, Flex, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { Card } from "./Card";
import { Column } from "./Column";
import { boardState } from "../../../modules/trello/state";

export function TrelloPage() {
    const { columns, fetchData } = useSnapshot(boardState);

    useEffect(() => {
        fetchData();
    }, []);

    if (!columns.length) {
        return (
            <Center h="100vh">
                <Spinner size="xl" />
            </Center>
        );
    }

    return (
        <div>
            <Flex gap="40px" justifyContent="center">
                {columns.map((column, columnIndex) => (
                    <Column key={columnIndex} columnIndex={columnIndex}>
                        {column.map((card, cardIndex) => (
                            <Card
                                key={`${columnIndex}-${cardIndex}`}
                                card={card}
                                cardIndex={cardIndex}
                                columnIndex={columnIndex}
                            />
                        ))}
                    </Column>
                ))}
            </Flex>
        </div>
    );
}
