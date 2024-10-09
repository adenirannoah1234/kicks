import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  useBreakpointValue,
  HStack,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import ProductCard from './ProductsCard';

const products = [
  {
    id: 1,
    name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    price: 125,
    image: '/adidas3.png',
    isNew: true,
  },
  {
    id: 2,
    name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    price: 125,
    image: '/adidas3.png',
    isNew: true,
  },
  {
    id: 3,
    name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    price: 125,
    image: '/adidas2.png',
    isNew: true,
  },
  {
    id: 4,
    name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    price: 125,
    image: '/adidas2.png',
    isNew: true,
  },
  {
    id: 5,
    name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    price: 125,
    image: '/adidas4.png',
    isNew: true,
  },
  {
    id: 6,
    name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    price: 125,
    image: '/adidas4.png',
    isNew: true,
  },
  {
    id: 7,
    name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    price: 125,
    image: '/adidas3.png',
    isNew: true,
  },
  {
    id: 8,
    name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    price: 125,
    image: '/adidas3.png',
    isNew: true,
  },
  {
    id: 9,
    name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    price: 125,
    image: '/adidas2.png',
    isNew: true,
  },
  {
    id: 10,
    name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    price: 125,
    image: '/adidas2.png',
    isNew: true,
  },
  {
    id: 11,
    name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    price: 125,
    image: '/adidas1.png',
    isNew: true,
  },
  {
    id: 12,
    name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    price: 125,
    image: '/adidas1.png',
    isNew: true,
  },
];
const ProductCarousel = () => {
  const slidesPerView =
    useBreakpointValue({ base: 1, sm: 2, md: 2, lg: 4 }) || 4;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 1 },
    },
    startIndex: 0,
    dragFree: true,
    containScroll: 'trimSnaps',
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const currentIndex = emblaApi.selectedScrollSnap();
    setSelectedIndex(currentIndex);
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const totalSlides = products.length;
  const totalPages = Math.ceil(totalSlides / slidesPerView);

  return (
    <Box width="100%" px={{ base: 0, md: 4 }}>
      <Container maxW={{ base: '100%', md: '7xl' }} p={{ base: 0, md: 8 }}>
        <Box position="relative" mb={16}>
          <Flex
            justify="space-between"
            align="center"
            mb={8}
            w="100%"
            px={{ base: 4, md: 0 }}
          >
            <Heading size={{ md: 'lg', base: 'md' }}>You may also like</Heading>
            <HStack spacing={2}>
              <IconButton
                aria-label="Previous slide"
                icon={<ChevronLeftIcon />}
                onClick={scrollPrev}
                borderWidth="1px"
                borderColor="gray.200"
                color="white"
                bg="black"
                _hover={{ bg: 'black' }}
                isDisabled={!canScrollPrev}
              />
              <IconButton
                aria-label="Next slide"
                icon={<ChevronRightIcon />}
                onClick={scrollNext}
                borderWidth="1px"
                borderColor="gray.200"
                color="white"
                bg="black"
                _hover={{ bg: 'black' }}
                isDisabled={!canScrollNext}
              />
            </HStack>
          </Flex>

          <Box className="embla" overflow="hidden" ref={emblaRef}>
            <Flex
              className="embla__container"
              sx={{
                marginLeft: { base: '0px', md: '-20px' },
                '& > *': {
                  paddingLeft: { base: '0px', md: '20px' },
                },
              }}
            >
              {products.map((product) => (
                <Box
                  key={product.id}
                  flex={`0 0 ${100 / slidesPerView}%`}
                  className="embla__slide"
                  px={{ base: 2, md: 0 }}
                >
                  <ProductCard product={product} />
                </Box>
              ))}
            </Flex>
          </Box>

          <Flex justify="center" mt={6}>
            {[...Array(totalPages)].map((_, index) => (
              <Box
                key={index}
                h="4px"
                w="32px"
                bg={
                  Math.floor(selectedIndex / slidesPerView) === index
                    ? 'blue.500'
                    : 'gray.300'
                }
                mx="2px"
                transition="all 0.2s"
                rounded="full"
              />
            ))}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductCarousel;
