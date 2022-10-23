import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { Card } from "./components/Card";
import { Column } from "./components/Column";
import { boardState } from "./trello.state";

export function TrelloPage() {
    const { columns, fetchData } = useSnapshot(boardState);

    useEffect(() => {
        fetchData();
    }, []);

    if (!columns) {
        return "loading..";
    }

    return (
        <div>
            <Flex gap="10px">
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
