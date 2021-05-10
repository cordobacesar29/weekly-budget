import React from 'react';
import {useHistory} from 'react-router-dom';
import { Flex, Text, Heading, Input, Button } from '@chakra-ui/react';
import {useAuth} from '../hooks/useAuth';
import { UserContext } from '../context/user';


export const SignIn = () => {
    const [ email, setEmail ] = React.useState('');
    const [ password, setPassword ] = React.useState('');
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const {setUser} = React.useContext(UserContext);
    const history = useHistory();
    const {signin} = useAuth();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        
        signin(email, password)
        .then(user =>{
            setError(null);
            setLoading(false);
            setUser(user);
            
            history.push('/');
        })
        .catch((e)=>{
            setError(e);
            setLoading(false);
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
        {error ? (<Text color='red.400' mb='1rem'>{error}</Text> ) : null }
        <Button
            mb='1rem'
            colorScheme='blue' 
            variant="solid"
            type='submit'
            disabled={loading}
            isDisabled={loading}
        >
            SignIn
        </Button>
        <Button  
            mb='1rem'
            colorScheme="blue" 
            variant="ghost"
            onClick={()=>{
                history.push('/signup')
            }}
        >
            First time here? SignUp!
        </Button>
        </Flex>
    );
}