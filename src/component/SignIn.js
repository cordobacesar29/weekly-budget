import { Flex, Text, Heading } from '@chakra-ui/react';
import { InputForm } from './Input';
import { ButtonForm } from './Button';

export const SignIn = ( { toogleForm=()=>{} }) => {
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
                <Heading mb='1rem'>SignIn</Heading>
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
                    SignIn
                </ButtonForm>
                <ButtonForm  
                    colorScheme="blue" 
                    variant="ghost"
                    toogleForm={toogleForm}
                >
                    First time here? SignUp!
                </ButtonForm>
            </Flex>
    );
}