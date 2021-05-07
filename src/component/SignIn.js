import React from 'react';
import {useHistory} from 'react-router-dom';
import { Flex, Text, Heading, Input, Button } from '@chakra-ui/react';
import {useLocalStorageState} from '../hooks/useLocalStorageState';
import {sleep} from '../utils/sleep';


export const SignIn = ( { toogleForm=()=>{} }) => {
    const [ email, setEmail ] = React.useState('');
    const [ password, setPassword ] = React.useState('');
    
    const [users] = useLocalStorageState('users', []);
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const isAuthenticated = users.find((user) => {
            return user.email === email && user.password === password;
        });
        console.log(isAuthenticated);
        sleep().then(()=>{
            history.push('/home'); 
         });
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
        <Heading mb='1rem'>SignIn</Heading>
        <Input
            mb='1rem'
            className='email'
            placeholder='Email'
            onChange={handleEmailChange}
            
        />
        <Input
            mb='1rem'
            className='password'
            placeholder='Password'
            onChange={handlePasswordChange}
        />
        <Button
            mb='1rem'
            colorScheme='blue' 
            variant="solid"
            type='submit'
        >
            SignIn
        </Button>
        <Button  
            mb='1rem'
            colorScheme="blue" 
            variant="ghost"
            onClick={toogleForm}
        >
            First time here? SignUp!
        </Button>
        </Flex>
    );
}