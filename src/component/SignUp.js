import { Flex, Heading, Text, Input, Button } from '@chakra-ui/react';

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
                <Input
                    mb='1rem'
                    className='firstName'
                    placeholder='FirstName'
                />
                <Input
                    mb='1rem'
                    className='lastName'
                    placeholder='LastName'
                />
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