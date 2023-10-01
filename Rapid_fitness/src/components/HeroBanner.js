import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import ScrollCarousel from 'scroll-carousel-react'
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '22px', xs: '20px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Box display={'flex'} flexDirection={{xs:"column",lg:"row"}}>
<Box width={{xs:"100%",lg:"40%"}}>
<Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
</Box>

<Box width={{xs:"100%",lg:"60%"}}>

<ScrollCarousel
  autoplay
  autoplaySpeed={20}
  speed={7}
  onReady={() => console.log('I am ready')}
>
  {['wall2.jpg', 'wall3.jpg', 'wall4.jpg'].map((item, index) => (
    <Box key={index} borderRadius={'1rem'}  padding={'4px'}>
      <div style={{ position: 'relative' }}>
        <img width={'600px'} height={'400px'} style={{ borderRadius: '20px', filter: 'blur(1px)' }} src={item} alt="hero-banner" />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '37px', fontWeight: 'bolder' }}>
         Shivam Fitness
        </div>
      </div>
    </Box>
  ))}
</ScrollCarousel>

</Box>

    </Box>
  
    {/* <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" /> */}
  </Box>
);

export default HeroBanner;
