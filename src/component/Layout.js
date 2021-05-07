import { Flex } from '@chakra-ui/react';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
    return(
        <Flex direction='column' minH='100vh'>
            <Flex flex={1} direction='column' justify='center' align='center'>
                {children}
            </Flex>
            <Footer/>
        </Flex>
    );
};