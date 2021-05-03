import React from 'react';
import { Button } from "@chakra-ui/react";

export const ButtonForm = ( { 
    colorScheme='', 
    variant='',
    children,
    toogleForm=()=>{},
 } ) => {
    return(
        <Button 
            colorScheme={ colorScheme }
            variant={variant}
            mb='1rem'
            onClick={toogleForm}
        >
            { children }
        </Button>
    ); 
}