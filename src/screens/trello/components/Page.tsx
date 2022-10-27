import { Center, Container, Flex, Heading, Spinner } from "@chakra-ui/react";
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
        <Container maxW="1920px">
            <Heading mb="4" textAlign="center" my="6">
                Drag cards between columns
            </Heading>

            <Flex justifyContent="space-between">
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
        </Container>
    );
}
