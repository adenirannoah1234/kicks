import React from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  IconButton,
  Input,
  VStack,
  Text,
  Link,
} from '@chakra-ui/react';
import { X } from 'lucide-react';

interface SearchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchDrawer = ({ isOpen, onClose }: SearchDrawerProps) => {
  //   sample trending searches i will replace with API call
  const trendingSearches = [
    'Winter Collection',
    'New Arrivals',
    'Best Sellers',
    'Sale Items',
  ];

  // Sample quick links i will replace with API call
  const quickLinks = [
    { text: "Men's Fashion", href: '/mens' },
    { text: "Women's Fashion", href: '/womens' },
    { text: 'Accessories', href: '/accessories' },
    { text: 'Sale', href: '/sale' },
  ];

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="top" size="full">
      <DrawerOverlay />
      <DrawerContent className="bg-white">
        <DrawerBody className="p-0">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="flex justify-end pt-4">
              <IconButton
                onClick={onClose}
                className="hover:bg-gray-100 p-2 rounded-full"
                aria-label="Close search"
              >
                <X className="h-6 w-6" />
              </IconButton>
            </div>

            <div className="mt-8 mb-12">
              <Input
                placeholder="Search products..."
                className="w-full text-lg py-6 px-4 border-b-2 border-gray-200 focus:border-black focus:ring-0"
                autoFocus
              />
            </div>

            <div className="mb-12 text-center">
              <Text className="text-sm text-gray-500 mb-4">
                TRENDING SEARCHES
              </Text>
              <VStack spacing={3} align="center">
                {trendingSearches.map((search, index) => (
                  <Text
                    key={index}
                    className="text-lg cursor-pointer hover:text-gray-600"
                  >
                    {search}
                  </Text>
                ))}
              </VStack>
            </div>

            <div className="text-center">
              <Text className="text-sm text-gray-500 mb-4">QUICK LINKS</Text>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-lg hover:text-gray-600"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SearchDrawer;
