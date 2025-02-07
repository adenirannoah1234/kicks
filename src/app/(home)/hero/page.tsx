'use client';

import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  useBreakpointValue,
  HStack,
} from '@chakra-ui/react';
import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Typed } from 'react-typed'; // Import react-typed
import { ReactTyped } from 'react-typed';

const MyPropertyWebsite = () => {
  const heroTextMaxWidth = useBreakpointValue({ base: '100%', md: '60%' });
  const carouselHeight = useBreakpointValue({ base: '300px', md: '500px' });
  const [textIndex, setTextIndex] = useState(0);
  const phrases = [
    'professional services',
    'items purchasing',
    'job opportunities',
  ];
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const images = ['/adidas1.png', '/adidas2.png', '/adidas3.png'];

  const onSelect = useCallback(() => {
    if (embla) setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (embla) {
      embla.on('select', onSelect);
      onSelect();
    }
  }, [embla, onSelect]);

  return (
    <HStack spacing={0} width="100%">
      {/* Hero Section */}
      <Box bg="white" width="50%">
        <Flex direction="column" align="center" justify="center" height="full">
          <Box maxW={heroTextMaxWidth} textAlign="center">
            <Heading as="h1" size="xl" mb={4} color="black">
              We've Merged Problem Solving and Technology to Eliminate Paperwork
              and the Physical Stress Associated with{' '}
              <ReactTyped
                // waitBeforeTyping={500}
                strings={phrases}
                typeSpeed={50}
                backSpeed={50}
                loop
              />
            </Heading>
          </Box>
        </Flex>
      </Box>

      {/* Carousel Section */}
      <Box ref={emblaRef} overflow="hidden" width="50%" position="relative">
        <Box display="flex" height={carouselHeight}>
          {images.map((src, index) => (
            <Box
              key={index}
              backgroundImage={`url(${src})`}
              backgroundSize="cover"
              backgroundPosition="center"
              height="100%"
              minWidth="100%"
            />
          ))}
        </Box>

        {/* Custom Indicators */}
        <Flex justify="center" mt={4}>
          {images.map((_, index) => (
            <Box
              key={index}
              mx={1}
              width="16px"
              height="8px"
              borderRadius="full"
              bg={index === selectedIndex ? 'blue.500' : 'gray.400'}
              cursor="pointer"
              onClick={() => {
                if (embla) embla.scrollTo(index);
              }}
            />
          ))}
        </Flex>
      </Box>
    </HStack>
  );
};

export default MyPropertyWebsite;
