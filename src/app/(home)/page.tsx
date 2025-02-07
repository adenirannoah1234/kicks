import React from 'react';
import { Box } from '@chakra-ui/react';
import HeroSection from './components/Hero';

import ReviewSection from './components/Review';

const page = () => {
  return (
    <Box>
      <HeroSection />
      <ReviewSection />
    </Box>
  );
};

export default page;
