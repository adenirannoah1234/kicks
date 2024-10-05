'use client';

import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Grid,
  VStack,
  HStack,
  Checkbox,
  RangeSlider,
  Select,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import Pagination from '../../components/pagination';
import { ShoeGrid } from './ShoeCard';

interface ShoeData {
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  labelColor: string;
}
const ShoeStoreComponent = () => {
  const shoeData: ShoeData[] = [
    {
      name: 'ULTRABOOST 1.0 MIAMI Green',
      price: '$125',
      originalPrice: '$250',
      image: '/listing2.png',
      labelColor: 'orange.400',
    },
    {
      name: 'ADIDAS OZELIA SHOES Green',
      price: '$125',
      image: '/listing3.png',
      labelColor: 'blue.400',
    },
    {
      name: 'ADIDAS 4DFWD 2 RUNNING SHOES',
      price: '$125',
      image: '/listing4.png',
      labelColor: 'green.400',
    },
    {
      name: 'ADIDAS 4DFWD 2 RUNNING SHOES',
      price: '$125',
      image: '/listing5.png',
      labelColor: 'green.400',
    },
    {
      name: 'ULTRABOOST 1.0 MIAMI Green',
      price: '$125',
      originalPrice: '$250',
      image: '/listing6.png',
      labelColor: 'orange.400',
    },
    {
      name: 'ADIDAS OZELIA SHOES Green',
      price: '$125',
      image: '/listing3.png',
      labelColor: 'blue.400',
    },
  ];

  return (
    <Box p={8}>
      <HStack>
        <Flex justify="space-between" align="center" mb={4} w={'100%'}>
          <Box>
            <Text fontSize="2xl" fontWeight="bold">
              Life Style Shoes
            </Text>
            <Text color="gray.500">122 items</Text>
          </Box>
          <Select
            placeholder="TRENDING"
            width="200px"
            bg={'#f5f2f2ff'}
            borderRadius="lg"
            focusBorderColor='"#f5f2f2ff'
          >
            <option value="popular">Most Popular</option>
            <option value="newest">Newest Arrivals</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </Select>
        </Flex>
      </HStack>
      <Flex>
        <Box width="250px" mr={4}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Filters
          </Text>

          <Accordion allowMultiple defaultIndex={[0, 1, 2, 3, 4]}>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  REFINE BY
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <HStack mb={4}>
                  <Button colorScheme="blue" size="sm">
                    Mens
                  </Button>
                  <Button colorScheme="blue" size="sm">
                    Casual
                  </Button>
                </HStack>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  SIZE
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Grid templateColumns="repeat(5, 1fr)" gap={2}>
                  {[38, 39, 40, 41, 42, 43, 44, 45, 46, 47].map((size) => (
                    <Button
                      key={size}
                      size="sm"
                      variant={size === 38 ? 'solid' : 'outline'}
                      bg={size === 38 ? 'black' : 'white'}
                      color={size === 38 ? 'white' : 'black'}
                    >
                      {size}
                    </Button>
                  ))}
                </Grid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  COLOR
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Grid templateColumns="repeat(5, 1fr)" gap={2}>
                  {[
                    'blue',
                    'orange',
                    'black',
                    'green',
                    'gray',
                    'red',
                    'lightgray',
                    'darkblue',
                    'brown',
                    'tan',
                  ].map((color) => (
                    <Button
                      key={color}
                      size="sm"
                      bg={color}
                      width="30px"
                      height="30px"
                    />
                  ))}
                </Grid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  SIZE
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <VStack align="stretch">
                  {[
                    'Casual shoes',
                    'Runners',
                    'Hiking',
                    'Sneaker',
                    'Basketball',
                    'Golf',
                  ].map((type) => (
                    <Checkbox key={type}>{type}</Checkbox>
                  ))}
                </VStack>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  PRICE
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <RangeSlider defaultValue={[0, 100]}>
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>
                  <RangeSliderThumb index={0} />
                  <RangeSliderThumb index={1} />
                </RangeSlider>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box flex={1}>
          <ShoeGrid shoeData={shoeData} />
          <Box>
            <Pagination />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ShoeStoreComponent;
