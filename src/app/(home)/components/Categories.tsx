'use client';

import React from 'react';
import { useEffect } from 'react';
import {
  Box,
  IconButton,
  Flex,
  Text,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SneakerSlide {
  image: string;
  title: string;
  subtitle: string;
}

interface CarouselProps {
  slides: SneakerSlide[];
}

export const SneakerCarousel: React.FC<CarouselProps> = ({ slides }) => {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slidesToShow = useBreakpointValue({ base: 1, md: 2, lg: 2 }) || 1;

  const settings = {
    dots: false,
    arrows: false,
    fade: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  };

  useEffect(() => {
    if (slider) {
      slider.slickGoTo(currentSlide);
    }
  }, [currentSlide, slider]);

  return (
    <Box position="relative" width="full" overflow="hidden" bg={'#242422ff'}>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        w={'100%'}
        justify={'center'}
        p={10}
      >
        <Heading size="lg" color="white">
          Categories
        </Heading>
        <Flex gap="2">
          <IconButton
            aria-label="previous slide"
            icon={<ChevronLeftIcon />}
            colorScheme="gray"
            onClick={() => slider?.slickPrev()}
            size="sm"
          />
          <IconButton
            aria-label="next slide"
            icon={<ChevronRightIcon />}
            colorScheme="gray"
            onClick={() => slider?.slickNext()}
            size="sm"
          />
        </Flex>
      </Flex>
      <Box pl={10}>
        {' '}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {slides.map((slide, index) => (
            <Box key={index}>
              <Box
                height="400px"
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`url(${slide.image})`}
                //   borderRadius="lg"
                overflow="hidden"
                pl={10}
                borderTopLeftRadius={index % slidesToShow === 0 ? 'xl' : 'none'}
              >
                <Flex
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  justifyContent="space-between"
                  alignItems="flex-end"
                  p={4}
                  bgGradient="linear(to-t, blackAlpha.600, blackAlpha.300, transparent)"
                >
                  <Box>
                    <Text color="white" fontWeight="bold" fontSize="sm">
                      Lifestyle Shoe
                    </Text>
                    <Text color="white" fontSize="lg" fontWeight="bold">
                      {slide.title}
                    </Text>
                    <Text color="white" fontSize="sm">
                      {slide.subtitle}
                    </Text>
                  </Box>
                  <IconButton
                    aria-label="Trending"
                    icon={<ChevronRightIcon />}
                    colorScheme="whiteAlpha"
                    size="sm"
                    variant="ghost"
                  />
                </Flex>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};
