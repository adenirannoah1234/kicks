import React from 'react';
import {
  Box,
  Flex,
  Text,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  IconButton,
} from '@chakra-ui/react';
import Image from 'next/image';

import { X, Menu as MenuIcon } from 'lucide-react';

import { ShoppingCart } from 'lucide-react';
import { CiUser } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { GoSearch } from 'react-icons/go';

const Navbar = () => {
  // const { isOpen, onToggle } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" bg={'#000000'} boxShadow="md" width="100%">
      <Flex
        alignItems={'center'}
        // p={{ base: 3, md: 8 }}
        px={{ base: 3, md: 8 }}
        py={{ base: 3, md: 5 }}
        justifyContent={'space-between'}
        w={'100%'}
      >
        <Flex alignItems="center" gap={2}>
          <Flex alignItems="center">
            <IconButton
              onClick={onOpen}
              icon={<MenuIcon size={22} />}
              // variant="outline"
              aria-label="open drawer"
              bg={'none'}
              color={'#ffd700'}
              _hover={{
                bg: 'none',
              }}
            />
            <Text
              display={{ base: 'none', md: 'block' }}
              color={'white'}
              fontSize={'sm'}
            >
              Menu
            </Text>
          </Flex>
          <Flex alignItems="center" display={{ base: 'none', md: 'flex' }}>
            <IconButton
              // onClick={onOpen}
              icon={<GoSearch size={22} />}
              // variant="outline"
              aria-label="open search"
              bg={'none'}
              color={'#ffd700'}
              _hover={{
                bg: 'none',
              }}
            />
            <Text
              display={{ base: 'none', md: 'block' }}
              color={'white'}
              fontSize={'sm'}
            >
              Search
            </Text>
          </Flex>
        </Flex>

        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <Flex
              px={3}
              py={5}
              borderBottomWidth="1px"
              alignItems="center"
              gap={2}
            >
              <IconButton
                onClick={onClose}
                icon={<X />}
                // variant="outline"
                aria-label="close drawer"
                bg={'transparent'}
                mr={2}
              />
              <Text display={{ base: 'none', md: 'block' }}>Close</Text>
              <IconButton
                // onClick={onOpen}
                icon={<GoSearch size={22} />}
                // variant="outline"
                aria-label="open search"
                // bg={'none'}
                // color={'#ffd700'}
                bg={'transparent'}
                _hover={{
                  bg: 'none',
                }}
                display={{ base: 'block', md: 'none' }}
              />
            </Flex>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Box>
          <Image src="/kicks.png" alt="logo" width={150} height={50} />
        </Box>
        <Flex
          alignItems={'center'}
          justifyItems={'space-between'}
          justifyContent={'space-between'}
          gap={3}
        >
          <IconButton
            icon={<CiHeart size={22} />}
            // variant="outline"
            aria-label="open user"
            bg={'none'}
            color={'#ffd700'}
            _hover={{
              bg: 'none',
            }}
            display={{ base: 'none', md: 'block' }}
          />
          <IconButton
            icon={<CiUser size={22} />}
            // variant="outline"
            aria-label="open user"
            bg={'none'}
            color={'#ffd700'}
            _hover={{
              bg: 'none',
            }}
          />
          <Box>
            <IconButton
              icon={<ShoppingCart size={22} />}
              // variant="outline"
              aria-label="open drawer"
              bg={'none'}
              color={'#ffd700'}
              _hover={{
                bg: 'none',
              }}
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
