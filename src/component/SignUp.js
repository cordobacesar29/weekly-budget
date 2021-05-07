import React from 'react';
import {useHistory} from 'react-router-dom';
import { Flex, Heading, Text, Input, Button } from '@chakra-ui/react';
import {useLocalStorageState} from '../hooks/useLocalStorageState';
import {sleep} from '../utils/sleep';

export const SignUp = ({ toogleForm=()=>{} }) => {
    const [ firstName, setFirstName ] = React.useState('');
    const [ lastName, setLastName ] = React.useState('');
    const [ email, setEmail ] = React.useState('');
    const [ password, setPassword ] = React.useState('');
    const [users, setUsers] = useLocalStorageState('users', []);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            firstName, 
            lastName, 
            email,
            password,
        };

        setUsers([...users, user]);
        sleep().then(()=>{
           history.push('/signin'); 
        });
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return(
        <Flex 
            as='form'
            margin='2rem'
            padding='2rem'
            w='20rem'
            border='1px solid #c2c2c2'
            borderRadius='8px'
            direction='column'
            onSubmit={handleSubmit}
        >   
            <Text mb='1rem'>Welcome to Weekly Budget</Text>
            <Heading mb='1rem'>SignUp</Heading>
            <Input
                mb='1rem'
                placeholder='FirstName'
                onChange={handleFirstNameChange}
            />
            <Input
                mb='1rem'
                placeholder='LastName'
                onChange={handleLastNameChange}
            />
            <Input
                mb='1rem'
                placeholder='Email'
                onChange={handleEmailChange}
            />
            <Input
                mb='1rem'
                placeholder='Password'
                onChange={handlePasswordChange}
            />
            <Button 
                mb='1rem'
                colorScheme='blue' 
                variant="solid"
                type='submit'
            >
                SignUp
            </Button>
            <Button  
                mb='1rem'
                colorScheme="blue" 
                variant="ghost"
                onClick={toogleForm}
            >
                Already have an account? SignIn!
            </Button>
        </Flex>
    );
}