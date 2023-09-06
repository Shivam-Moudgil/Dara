'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Grid,
  Textarea,
  GridItem,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import React from 'react'
import { BookingFields } from '../../data/FormFields'

export const BookingForm = () => {
    
  const [showPassword, setShowPassword] = useState(false)
    return (
        <Flex
        py={3}
          minH={'100vh'}
          bg={useColorModeValue('gray.50', 'gray.800')}>
          <Stack spacing={3} mx={'auto'} w={'90%'}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'} color={'blue.500'} textAlign={'center'}>
                Apply for Booking
              </Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
            Saved data will show in Booked✌️
              </Text>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>
              <Stack spacing={'16'}>
                <Grid templateColumns={"repeat(4,1fr)"} justifyContent={"space-between"} gap={'20'}>
                    {BookingFields.map((el,i)=>(
                        <GridItem colSpan={el.name==="Remarks" && 2}>
                        <Box key={el.name+i}>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>{el.name}</FormLabel> 
                    <Input type="text" />
                    </FormControl>
                  </Box>
                  </GridItem>
                    ))}
                 </Grid>
               
              
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}>
                    Book
                  </Button>
                </Stack>
                
              </Stack>
            </Box>
          </Stack>
        </Flex>
      )
}


