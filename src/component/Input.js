import { Input } from '@chakra-ui/react';

export const InputForm = (
    { 
        className='', 
        placeholder='',
    }) => {
    return(
        <Input
            className={className}
            placeholder={placeholder}
            mb='1rem'
        />
    )
}