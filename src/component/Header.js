import { Flex, Text } from '@chakra-ui/react';
import { AvatarProfile } from './Avatar';
import { ButtonForm } from './Button';

export const Header = () => {
    return(
        <Flex
            minh='5rem'
            bg='rgba(66, 153, 225, 0.6)'
            direction='row'
            justify='flex-end'
            align='center'    
            p='1rem 3rem'
        >
            <ButtonForm
                colorScheme="blue" 
                variant="ghost"
            >
                <Text mr='1rem'>Profile</Text>
                <AvatarProfile/>
            </ButtonForm>
            
        </Flex>
    );
}