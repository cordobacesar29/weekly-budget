import React from 'react';
import {useHistory} from 'react-router-dom';
import { Flex, Heading, Text, Input, Button } from '@chakra-ui/react';
import {useAuth} from '../hooks/useAuth';

export const SignUp = () => {
    const [ firstName, setFirstName ] = React.useState('');
    const [ lastName, setLastName ] = React.useState('');
    const [ email, setEmail ] = React.useState('');
    const [ password, setPassword ] = React.useState('');
    const [errors, setErrors] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const history = useHistory();
    const {signup} = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        setLoading(true);

        const user = {
            firstName, 
            lastName, 
            email,
            password,
        };

        
        signup(user)
        .then(()=>{
            setErrors([]);
            setLoading(false);

            history.push('/signin');
        })
        .catch((e)=>{
            setErrors(e);
            setLoading(false);
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
            {errors.map((error, i) =>(
                <Text key={i} color='red.400' mb='1rem'>
                    {error}
                </Text>
            ))}
            <Button 
                mb='1rem'
                colorScheme='blue' 
                variant="solid"
                type='submit'
                disabled={loading}
                isDisabled={loading}
            >
                SignUp
            </Button>
            <Button  
                mb='1rem'
                colorScheme="blue" 
                variant="ghost"
                onClick={()=> {
                    history.push('/signin')
                }}
            >
                Already have an account? SignIn!
            </Button>
        </Flex>
    );
}