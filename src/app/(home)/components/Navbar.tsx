import React, { useState } from 'react';
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
  useBreakpointValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import { X, Menu as MenuIcon } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { CiUser } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { GoSearch } from 'react-icons/go';
import DrawerNavigation from './DrawerNavigation';
import MobileDrawerNavigation from './mobileDrawer';
import { navigationLinks } from '@/app/constants';
import SearchDrawer from './searchDrawer';

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isSearchOpen,
    onOpen: onSearchOpen,
    onClose: onSearchClose,
  } = useDisclosure();

  const [activeLink, setActiveLink] = useState<number | null>(null);

  const handleDrawerClose = () => {
    setActiveLink(null);
    onClose();
  };
  const handleMainLinkClick = (index: number) => {
    setActiveLink(index);
  };

  return (
    <Box
      as="header"
      bg={'#000000'}
      boxShadow="md"
      width="100%"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
    >
      <Flex
        alignItems={'center'}
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
              icon={<GoSearch size={22} />}
              aria-label="open search"
              bg={'none'}
              onClick={onSearchOpen}
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

        <Drawer placement="left" onClose={handleDrawerClose} isOpen={isOpen}>
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
                onClick={handleDrawerClose}
                icon={<X />}
                aria-label="close drawer"
                bg={'transparent'}
                mr={2}
              />
              <Text display={{ base: 'none', md: 'block' }}>Close</Text>
              <IconButton
                icon={<GoSearch size={22} />}
                aria-label="open search"
                bg={'transparent'}
                _hover={{
                  bg: 'none',
                }}
                display={{ base: 'block', md: 'none' }}
              />
            </Flex>
            <DrawerBody>
              {isMobile ? (
                <MobileDrawerNavigation
                  isOpen={isOpen}
                  onClose={handleDrawerClose}
                  navigationLinks={navigationLinks}
                />
              ) : (
                <DrawerNavigation
                  isOpen={isOpen}
                  onClose={handleDrawerClose}
                  activeLink={activeLink}
                  onMainLinkClick={handleMainLinkClick}
                />
              )}
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <Box>
          <Image src="/JE-Logo.png" alt="logo" width={50} height={50} />
        </Box>

        <Flex
          alignItems={'center'}
          justifyItems={'space-between'}
          justifyContent={'space-between'}
          gap={3}
        >
          <IconButton
            icon={<CiHeart size={22} />}
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
      <SearchDrawer isOpen={isSearchOpen} onClose={onSearchClose} />
    </Box>
  );
};

export default Navbar;
