import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="white">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '150px', height: '150px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '18px', xs: '15px' } }} mt="11px" textAlign="center" pb="14px" fontWeight="bolder">Made with ❤️ by Shivam</Typography>
  </Box>
);

export default Footer;
