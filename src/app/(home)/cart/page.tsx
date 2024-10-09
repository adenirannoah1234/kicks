'use client';

import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  IconButton,
  Select,
} from '@chakra-ui/react';

import Image from 'next/image';
import { Heart } from 'lucide-react';
import { IoTrashBinOutline } from 'react-icons/io5';

import ProductCarousel from '../components/productsCarousel';

const page = () => {
  return (
    <Box p={8}>
      <Box maxW="1200px" mx="auto">
        <Box mb={8} w={{ md: '62%', base: 'full' }}>
          <Heading size="lg" mb={2}>
            Saving to celebrate
          </Heading>
          <Text>
            Enjoy up to 60% off thousands of styles during the End of Year sale
            - while supplies last. No code needed.{' '}
            <Button
              as="a"
              href="/signup"
              variant="link"
              textDecoration="underline"
            >
              Join us
            </Button>{' '}
            or{' '}
            <Button
              as="a"
              href="/login"
              variant="link"
              textDecoration="underline"
            >
              Sign-in
            </Button>
          </Text>
        </Box>

        <Flex
          gap={6}
          align={{ md: 'flex-start', base: 'center' }}
          flexDirection={{ md: 'row', base: 'column' }}
        >
          {/* Left side - Cart Items */}
          <Box flex={1} bg="#fafafaff" p={6} borderRadius="md">
            <Heading size="lg" mb={2}>
              Your Bag
            </Heading>
            <Text mb={6} color="gray.600">
              Items in your bag not reserved - check out now to make them yours.
            </Text>

            <Flex gap={6} mb={6} flexDirection={{ md: 'row', base: 'column' }}>
              <Box
                w={{ md: '200px', base: '100%' }}
                h="200px"
                bg="gray.100"
                borderRadius="md"
              >
                <Image
                  src="/adidas1.png"
                  width={100}
                  height={100}
                  alt="DROPSET TRAINER SHOES"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>

              <Flex flex={1} justify="space-between">
                <Box>
                  <Text fontWeight="bold" fontSize="lg" mb={1}>
                    DROPSET TRAINER SHOES
                  </Text>
                  <Text color="gray.600" mb={1}>
                    Men's Road Running Shoes
                  </Text>
                  <Text color="gray.600" mb={4}>
                    Enamel Blue/University White
                  </Text>

                  <Flex gap={4}>
                    <Select
                      w="150px"
                      // variant="filled"
                      // bg="gray.100"
                      focusBorderColor="black"
                      placeholder="Size 10"
                      sx={{
                        paddingRight: '2rem',
                      }}
                    >
                      <option value="9">Enamel Blue/University White</option>
                      <option value="10">Size 10</option>
                      <option value="11">Size 11</option>
                    </Select>

                    <Select
                      w="150px"
                      // variant="filled"
                      // bg="gray.100"
                      focusBorderColor="black"
                      placeholder="Quantity 1"
                      sx={{
                        paddingRight: '2rem',
                      }}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Select>
                  </Flex>
                  <Text
                    fontWeight="bold"
                    fontSize="lg"
                    color={'#4b69e3ff'}
                    mt={'3'}
                    display={{ md: 'none', base: 'block' }}
                  >
                    $130.00
                  </Text>
                  <Flex mt={{ md: '4', base: '1' }} gap={4}>
                    <IconButton
                      aria-label="Add to wishlist"
                      icon={<Heart />}
                      variant="ghost"
                      colorScheme="gray"
                    />
                    <IconButton
                      aria-label="Remove item"
                      icon={<IoTrashBinOutline />}
                      variant="ghost"
                      colorScheme="gray"
                      fontSize={'1.5rem'}
                    />
                  </Flex>
                </Box>

                <Text
                  fontWeight="bold"
                  fontSize="lg"
                  color={'#4b69e3ff'}
                  display={{ md: 'block', base: 'none' }}
                >
                  $130.00
                </Text>
              </Flex>
            </Flex>
          </Box>

          {/* Right side - Order Summary */}
          <Box w="380px" p={6} borderRadius="md">
            <Heading size="lg" mb={6}>
              Order Summary
            </Heading>

            <Flex justify="space-between" mb={4}>
              <Text>1 ITEM</Text>
              <Text>$130.00</Text>
            </Flex>

            <Flex justify="space-between" mb={4}>
              <Text>Delivery</Text>
              <Text>$6.99</Text>
            </Flex>

            <Flex justify="space-between" mb={6}>
              <Text>Sales Tax</Text>
              <Text>-</Text>
            </Flex>

            <Flex justify="space-between" mb={6} fontWeight="bold">
              <Text>Total</Text>
              <Text>$136.99</Text>
            </Flex>

            <Button
              w="100%"
              colorScheme="blackAlpha"
              bg="black"
              size="lg"
              mb={4}
            >
              CHECKOUT
            </Button>

            <Text color="gray.600" textDecoration={'underline'}>
              User a promo code
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box>
        <ProductCarousel />
      </Box>
    </Box>
  );
};

export default page;
