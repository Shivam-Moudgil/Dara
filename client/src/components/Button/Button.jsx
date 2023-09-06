import React from 'react'
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
export const CustomButton = ({text,link}) => {
    const navigate=useNavigate();
  return (
<Button
onClick={()=>navigate(link)}
        colorScheme="blue"
        bgGradient="linear(to-r, blue.400, blue.500, blue.600)"
        color="white"
        variant="solid">
    {text}
      </Button>
  )
}

export const CustomButtonText = ({text}) => {

  return (
<Button
    colorScheme="blue"
    onClick={()=>localStorage.clear()}
    bgGradient="linear(to-r, blue.400, blue.500, blue.600)"
        color="white"
        variant="solid">
    {text}
      </Button>
  )
}

