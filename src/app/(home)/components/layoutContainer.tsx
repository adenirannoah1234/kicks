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
      px={{ base: '5', md: '10' }}
    >
      <Box>
        <Navbar />
        <Box flex="1" w="full">
          {children}
        </Box>
      </Box>
      <Footer />
    </Flex>
  );
}

export default LayoutContainer;
