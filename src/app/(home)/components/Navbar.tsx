import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FaCaretDown } from 'react-icons/fa';
import { X, Menu as MenuIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  const menuVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <Box
      as="header"
      bg={'#fafafa'}
      boxShadow="md"
      width="100%"
      mt={'30'}
      borderRadius={'20px'}
    >
      <Flex
        alignItems={'center'}
        p={{ base: 3, md: 8 }}
        justifyContent={'space-between'}
        w={'100%'}
      >
        <Flex alignItems={'center'}>
          <Box display={{ base: 'block', md: 'none' }} mr={4}>
            <Button onClick={onToggle} bg="transparent">
              {isOpen ? <X /> : <MenuIcon />}
            </Button>
          </Box>
          <Flex display={{ base: 'none', md: 'flex' }}>
            <Image src="/drops.png" alt="new drops" width={150} height={20} />
          </Flex>
          <Flex display={{ base: 'none', md: 'flex' }}>
            <Menu>
              <MenuButton
                as={Button}
                bg={'#fafafa'}
                rightIcon={<FaCaretDown />}
              >
                Men
              </MenuButton>
              <MenuList>
                <MenuItem minH="48px">
                  <span>Fluffybuns the Destroyer</span>
                </MenuItem>
                <MenuItem minH="40px">
                  <span>Simon the pensive</span>
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                bg={'#fafafa'}
                rightIcon={<FaCaretDown />}
              >
                Women
              </MenuButton>
              <MenuList>
                <MenuItem minH="48px">
                  <span>Fluffybuns the Destroyer</span>
                </MenuItem>
                <MenuItem minH="40px">
                  <span>Simon the pensive</span>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        <Box>
          <Image src="/kicks.png" alt="logo" width={150} height={50} />
        </Box>
        <Flex
          alignItems={'center'}
          justifyItems={'space-between'}
          justifyContent={'space-between'}
          gap={10}
        >
          <Box cursor={'pointer'} display={{ base: 'none', md: 'block' }}>
            <Image src="/search.png" alt="search" width={30} height={10} />
          </Box>
          <Box
            cursor={'pointer'}
            ml={{ md: '0', base: '40px' }}
            w={{ md: 'auto', base: '20px' }}
          >
            <Image
              src="/user.png"
              alt="user"
              width={30}
              height={10}
              objectFit="contain"
            />
          </Box>
          <Box>
            <Text
              bg={'#ffa52f'}
              color={'black'}
              fontSize={'lg'}
              px={4}
              py={2}
              borderRadius={'100%'}
              cursor={'pointer'}
            >
              0
            </Text>
          </Box>
        </Flex>
      </Flex>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <Box bg={'#fafafa'} p={4} display={{ base: 'block', md: 'none' }}>
              <Flex direction="column" alignItems="flex-start" gap={4}>
                <Image
                  src="/drops.png"
                  alt="new drops"
                  width={150}
                  height={20}
                />
                <Menu>
                  <MenuButton
                    as={Button}
                    bg={'#fafafa'}
                    rightIcon={<FaCaretDown />}
                  >
                    Men
                  </MenuButton>
                  <MenuList>
                    <MenuItem minH="48px">
                      <span>Fluffybuns the Destroyer</span>
                    </MenuItem>
                    <MenuItem minH="40px">
                      <span>Simon the pensive</span>
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuButton
                    as={Button}
                    bg={'#fafafa'}
                    rightIcon={<FaCaretDown />}
                  >
                    Women
                  </MenuButton>
                  <MenuList>
                    <MenuItem minH="48px">
                      <span>Fluffybuns the Destroyer</span>
                    </MenuItem>
                    <MenuItem minH="40px">
                      <span>Simon the pensive</span>
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Box cursor={'pointer'}>
                  <Image
                    src="/search.png"
                    alt="search"
                    width={30}
                    height={10}
                  />
                </Box>
              </Flex>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Navbar;
