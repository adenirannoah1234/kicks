'use client';

import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Box w={'100%'} h={'100vh'} bg={'#000000'}>
      <Image
        src="/heroimage.jpg"
        alt="new drops"
        width={'100%'}
        height={'100vh'}
      />
    </Box>
  );
};

export default HeroSection;
