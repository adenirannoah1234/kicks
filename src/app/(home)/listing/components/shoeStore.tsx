'use client';

import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Select,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { MdOutlineFilterList } from 'react-icons/md';
import { ShoeGrid } from './ShoeCard';
import Pagination from '../../components/pagination';
import FilterSideBar from './FilterSideBar';

interface ShoeData {
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  labelColor: string;
}

export default function ShoeStoreComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align={{ base: 'stretch', md: 'center' }}
        mb={4}
        w="100%"
        gap={4}
      >
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          align={{ base: 'stretch', sm: 'center' }}
          justify="space-between"
          flex={{ base: 'auto', md: 1 }}
          gap={4}
        >
          <Button
            onClick={onOpen}
            display={{ md: 'none' }}
            bg="#f5f2f2"
            size="md"
            borderRadius="md"
            px={4}
            w={{ base: '100%', sm: 'auto' }}
            _hover={{ bg: 'gray.50' }}
          >
            <Flex justify="space-between" align="center" width="100%">
              <Text>Filters</Text>
              <MdOutlineFilterList />
            </Flex>
          </Button>
          <Box>
            <Text fontSize="2xl" fontWeight="bold">
              Life Style Shoes
            </Text>
            <Text color="gray.500">122 items</Text>
          </Box>
        </Flex>
        <Select
          placeholder="TRENDING"
          bg="#f5f2f2"
          borderRadius="lg"
          size="md"
          fontSize="sm"
          w={{ base: '100%', sm: 'auto' }}
          focusBorderColor="#f5f2f2"
        >
          <option value="popular">Most Popular</option>
          <option value="newest">Newest Arrivals</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </Select>
      </Flex>

      <Flex>
        <Box width="250px" mr={4} display={{ md: 'block', base: 'none' }}>
          <FilterSideBar />
        </Box>
        <Box flex={1} maxWidth={{ base: '100%', md: 'calc(100% - 266px)' }}>
          <ShoeGrid shoeData={shoeData} />
          <Box mt={4}>
            <Pagination />
          </Box>
        </Box>
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filters</DrawerHeader>
          <DrawerBody>
            <FilterSideBar />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
