import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import HeroSection from './components/Hero';
import Drops from './components/Drops';
import { SneakerCarousel } from './components/Categories';

import ReviewSection from './components/Review';

const page = () => {
  return (
    <Box>
      <HeroSection />
      {/* <Drops /> */}
      {/* <SneakerCarousel
        slides={[
          {
            image: '/image1.png',
            title: 'Lifestyle Shoe',
            subtitle: 'The perfect shoe for everyday wear',
          },
          {
            image: '/image2.png',
            title: 'Running Shoe',
            subtitle: 'The perfect shoe for running',
          },
          {
            image: '/image2.png',
            title: 'Basketball Shoe',
            subtitle: 'The perfect shoe for basketball',
          },
        ]}
      /> */}
      <ReviewSection />
    </Box>
  );
};

export default page;
