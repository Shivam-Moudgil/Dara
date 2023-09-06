// src/components/Navbar.js
import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Spacer,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

function Navbar2() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <Box bg="blue.500" px={4} py={3}>
      <Flex alignItems="center">
        <Text fontSize="2xl" fontWeight="bold" color="white">
          My Logo
        </Text>
        <Spacer />
        <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
          {menuItems.map((item, index) => (
            <Link key={index} color="white" href={item.href}>
              {item.label}
            </Link>
          ))}
        </HStack>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          variant="ghost"
          color="white"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        />
      </Flex>

      {isOpen && (
        <Box
          mt={4}
          p={4}
          display={{ base: 'block', md: 'none' }}
          bg="white"
          boxShadow="md"
        >
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href} onClick={onClose}>
              {item.label}
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Navbar2;
