import { Flex, Heading, Text } from '@chakra-ui/react';
import { InputForm } from './Input';
import { ButtonForm } from './Button';

export const SignUp = ({ toogleForm=()=>{} }) => {
    return(
        <Flex 
                margin='2rem'
                padding='2rem'
                w='20rem'
                border='1px solid #c2c2c2'
                borderRadius='8px'
                direction='column'
            >   
                <Text mb='1rem'>Welcome to Weekly Budget</Text>
                <Heading mb='1rem'>SignUp</Heading>
                <InputForm
                    className='firstName'
                    placeholder='FirstName'
                />
                <InputForm
                    className='lastName'
                    placeholder='LastName'
                />
                <InputForm
                    className='email'
                    placeholder='Email'
                />
                <InputForm
                    className='password'
                    placeholder='Password'
                />
                <ButtonForm 
                    colorScheme='blue' 
                    variant="solid"
                >
                    SignUp
                </ButtonForm>
                <ButtonForm  
                    colorScheme="blue" 
                    variant="ghost"
                    toogleForm={toogleForm}
                >
                    Already have an account? SignIn!
                </ButtonForm>
            </Flex>
    );
}