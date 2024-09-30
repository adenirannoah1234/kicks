import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import HeroSection from './components/Hero';

const page = () => {
  return (
    <Box>
      <Heading
        textAlign={'center'}
        fontSize={{ base: '3.52rem', md: '12rem' }}
        fontWeight={'bold'}
      >
        DO IT <span style={{ color: '#4b69e3ff' }}>RIGHT</span>
      </Heading>
      <HeroSection />
    </Box>
  );
};

export default page;
