import { Flex, Text, Avatar, Button } from '@chakra-ui/react';

export const Header = () => {
    return(
        <Flex
            minh='5rem'
            bg='rgba(66, 153, 225, 0.6)'
            direction='row'
            justify='flex-end'
            align='center'    
            p='1rem 3rem'
        >
            <Button
                colorScheme="blue" 
                variant="ghost"
            >
                <Text mr='1rem'>Profile</Text>
                <Avatar
                    size='xs'
                    name="Dan Abrahmov" 
                    src="https://bit.ly/dan-abramov"
                />
            </Button>
            
        </Flex>
    );
}