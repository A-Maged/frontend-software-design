import type { AppProps } from "next/app";
import { Button, ChakraProvider, Heading, HStack } from "@chakra-ui/react";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Nav />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

function Nav() {
    return (
        <HStack justifyContent="center" p="8">
            <Heading>Examples --&gt; </Heading>
            <Link href="/" passHref>
                <Button>Shop</Button>
            </Link>
            <Link href="/trello" passHref>
                <Button>Trello</Button>
            </Link>
        </HStack>
    );
}
export default MyApp;
