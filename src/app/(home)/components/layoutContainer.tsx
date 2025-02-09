'use client';

import { Box, Flex } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

function LayoutContainer({ children }: { children: React.ReactNode }) {
  return (
    <Flex
      direction="column"
      bg="#e7e7e7"
      minH="100vh"
      w="100%"
      overflowX="hidden"
    >
      <Box>
        <Navbar />
        <Box
          flex="1"
          w="full"
          bg={'#f2deff'}
          pt={{ base: '76px', md: '100px' }}
        >
          {children}
        </Box>
      </Box>
      <Footer />
    </Flex>
  );
}

export default LayoutContainer;
