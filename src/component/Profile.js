import React from 'react';
import {Flex, Button} from '@chakra-ui/react';
import {UserContext} from '../context/user';
import {useHistory} from 'react-router-dom';
 
export const Profile = () => {
    const {setUser} = React.useContext(UserContext);
    const history = useHistory();

    const handleSignOut = () =>{
        setUser(null);

        history.push('/signup');
    };
    return(
        <Flex>
            <h1>Hello Profile</h1>
            <Button
                mb='1rem'
                colorScheme='blue' 
                variant="solid"
                onClick={handleSignOut}
            >Sign Out</Button>
        </Flex>
    )
}