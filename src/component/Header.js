import React from 'react';
import { Flex, Text, Avatar, Button } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/user';

export const Header = () => {
    const history = useHistory();
    const { user } = React.useContext(UserContext);
    const name = user && user.firstName;

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
                    <Text mr='1rem'>{name || 'Profile'}</Text>
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