import { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { SignUp } from './SignUp';
import { SignIn } from './SignIn';


export const LoginForm = () => {
    const [isSignUp, setIsSignUp ] = useState(true);
    
    const toogleForm = () => {
        if(isSignUp) {
            setIsSignUp(false);
        }else {
            setIsSignUp(true);
        }
    }

    return ( 
        <Flex
            h='100vh'
            justify='center'
            alignItems='center'
        >
            {isSignUp ? <SignUp toogleForm={toogleForm}/> : <SignIn toogleForm={toogleForm}/>}
        </Flex>
    )
}