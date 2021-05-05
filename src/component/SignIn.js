import { Flex, Text, Heading, Input, Button } from '@chakra-ui/react';

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
                <Input
                    mb='1rem'
                    className='email'
                    placeholder='Email'
                />
                <Input
                    mb='1rem'
                    className='password'
                    placeholder='Password'
                />
                <Button
                    mb='1rem'
                    colorScheme='blue' 
                    variant="solid"
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