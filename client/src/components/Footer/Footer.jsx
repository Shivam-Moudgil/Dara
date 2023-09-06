import { ButtonGroup, Container, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import logo from '../../assets/logo.png'

export const Footer = () => (
  <Container
    as="footer"
boxShadow={'revert-layer'}
    role="contentinfo"
    maxW ={'100vw'}
    py={{
      base: '10',
      md: '1',
    }}
  >
    <Stack
      spacing={{
        base: '4',
        md: '5',
      }}
    >
      <Stack justify="space-between" direction="row" align="center">
        <Image w={['50%','50%','30%',"16%"]} src={logo} alt='logo' />
        <ButtonGroup variant="tertiary">
          <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin />} />
          <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub />} />
          <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="fg.subtle">
        &copy; {new Date().getFullYear()} Shivam Policy, Inc. All rights reserved.
      </Text>
    </Stack>
  </Container>
)