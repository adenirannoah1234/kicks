import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';
import ShoeStoreComponent from './components/shoeStore';

const page = () => {
  const shoeImages = {
    url: '/listing1.png',
  };
  return (
    <Box py={'5rem'}>
      <Box
        h={{ md: '55vh', base: '30vh' }}
        w="100%"
        backgroundImage={`url(${shoeImages.url})`}
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
        borderRadius={{ base: '2rem', md: '3rem' }}
      >
        <Box
          width={{ base: '70%', md: '49%' }}
          p={{ md: '3rem', base: '1rem' }}
        >
          <Text
            fontSize={{ base: '0.8rem', md: '2xl' }}
            fontWeight={'bold'}
            color={'white'}
            mt={'1rem'}
          >
            Limited time only
          </Text>
          <Heading
            fontSize={{ base: '1.5rem', md: '4rem' }}
            fontWeight={'bold'}
            color={'white'}
            //   mt={'1rem'}
          >
            Get 30% off
          </Heading>
          <Text
            fontSize={{ base: '0.8rem', md: 'xl' }}
            fontWeight={'bold'}
            color={'white'}
            mt={'1rem'}
          >
            Sneakers made with your comfort in mind so you can put all your
            focus into your next session.
          </Text>
        </Box>
      </Box>
      <Box>
        <ShoeStoreComponent />
      </Box>
    </Box>
  );
};

export default page;
