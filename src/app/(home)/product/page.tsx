'use client';

import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  VStack,
  HStack,
  Grid,
  GridItem,
  IconButton,
  SimpleGrid,
} from '@chakra-ui/react';

import { IoHeartOutline } from 'react-icons/io5';
import ProductCarousel from '../components/productsCarousel';

const ProductPage = () => {
  const sizes = ['38', '39', '40', '41', '42', '43', '44', '45', '46', '47'];
  return (
    <Box py={'8'} minH={'100vh'} w={'100%'}>
      <Flex direction={{ base: 'column', md: 'row' }} gap={8}>
        {/* Left side - Product Images */}
        <Box flex={2}>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <GridItem>
              <Image src="/shoe6.png" alt="Main product image" rounded="md" />
            </GridItem>
            <GridItem>
              <Image src="/shoe3.png" alt="Product detail" rounded="md" />
            </GridItem>
            <GridItem>
              <Image src="/shoe4.png" alt="Product detail" rounded="md" />
            </GridItem>
            <GridItem>
              <Image src="/shoe5.png" alt="Product detail" rounded="md" />
            </GridItem>
          </Grid>
        </Box>

        {/* Right side - Product Details */}
        <VStack align="stretch" flex={1} spacing={6}>
          <Button
            bg={'#4b69e3ff'}
            _hover={{
              bg: '#4b69e3ff',
            }}
            color={'white'}
            alignSelf="flex-start"
          >
            New Release
          </Button>
          <Text fontSize="2xl" fontWeight="bold" color={'#242422ff'}>
            ADIDAS 4DFWD X PARLEY RUNNING SHOES
          </Text>
          <Text fontSize="xl" fontWeight="bold" color="#4b69e3ff">
            $125.00
          </Text>

          <HStack>
            <Text fontWeight="bold">Color:</Text>
            <Button size="sm" bg="#242f42ff" rounded="full" />
            <Button size="sm" bg="#6f7d6dff" rounded="full" />
          </HStack>

          <Box>
            <Flex justify={'space-between'}>
              <Text fontWeight="bold">SIZE</Text>
              <Text fontWeight="bold">SIZE CHART</Text>
            </Flex>
            <SimpleGrid columns={[5, 5, 8]} spacing={2}>
              {sizes.map((size) => (
                <Button key={size} bg={'#ffffffff'}>
                  {size}
                </Button>
              ))}
            </SimpleGrid>
          </Box>
          <Flex gap={2}>
            <Button
              bg={'#242422ff'}
              color={'white'}
              _hover={{
                bg: '#242422ff',
              }}
              size="lg"
              w={'85%'}
            >
              Add to Cart
            </Button>
            <IconButton
              bg={'#242422ff'}
              aria-label="Add to wishlist"
              color={'white'}
              _hover={{
                bg: '#242422ff',
              }}
              icon={<IoHeartOutline />}
              size={'lg'}
            />
          </Flex>
          <Button
            bg={'#4b69e3ff'}
            _hover={{
              bg: '#4b69e3ff',
            }}
            color={'white'}
            size="lg"
          >
            Buy it Now
          </Button>

          <Text fontWeight="bold">About the Product</Text>
          <Text color={'gray.500'}>
            &ldquo;Double helix energy return&rdquo; - An evolution of the
            3D-printed midsole technology, designed to provide enhanced
            cushioning and energy return.
          </Text>
        </VStack>
      </Flex>

      {/* You May Also Like Section */}
      <Box mt={12}>
        <ProductCarousel />
      </Box>
    </Box>
  );
};

export default ProductPage;
