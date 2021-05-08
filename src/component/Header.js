import { Flex, Text, Avatar, Button } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

export const Header = () => {
    const history = useHistory();

    const handleNavigateHome = () => {
        history.push('./');
    }
    const handleNavigateProfile = () => {
        history.push('./profile');
    }
    return(
        <Flex
            minh='5rem'
            w='full'
            bg='rgba(66, 153, 225, 0.6)'
            direction='row'
            justify='space-between'
            align='center'
            p='1rem 3rem'
        >
            <Avatar
                size='md'
                name="Dan Abrahmov" 
                src="https://bit.ly/dan-abramov"
                onClick={handleNavigateHome}
            />
            <Flex 
                direction='row'
            >
                <Button
                    colorScheme="blue" 
                    variant="ghost"
                    onClick={handleNavigateProfile}
                >
                    <Text mr='1rem'>Profile</Text>
                    <Avatar
                        size='xs'
                        name="Dan Abrahmov" 
                        src="https://bit.ly/dan-abramov"
                    />
                </Button>
            </Flex>            
        </Flex>
    );
}