import React, { useState } from 'react';
import { VStack, Flex, Text, Box } from '@chakra-ui/react';
import { ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationLinks } from '@/app/constants';

interface DrawerNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  activeLink: number | null;
  onMainLinkClick: (index: number) => void;
}

const MotionBox = motion(Box);
// const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const DrawerNavigation: React.FC<DrawerNavigationProps> = ({
  //   isOpen,
  //   onClose,
  activeLink,
  onMainLinkClick,
}) => {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  return (
    <Flex>
      {/* Main Links */}
      <VStack align="stretch" spacing={0} flex={1}>
        {navigationLinks.map((link, index) => (
          <Box key={index} position="relative" overflow="hidden">
            <MotionFlex
              p={4}
              justify="space-between"
              align="center"
              onClick={() => onMainLinkClick(index)}
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
              cursor="pointer"
              borderBottomWidth="1px"
              borderBottomColor="gray.100"
              color={activeLink === index ? 'black' : 'gray.600'}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              _hover={{
                color: 'black',
              }}
            >
              <Box position="relative">
                <Text fontSize="sm">{link.title}</Text>
                <Box
                  position="absolute"
                  bottom={-0.5}
                  left={0}
                  height="0.5px"
                  bg="black"
                  transition="transform 0.3s ease"
                  transform={
                    hoveredLink === index || activeLink === index
                      ? 'scaleX(1)'
                      : 'scaleX(0)'
                  }
                  transformOrigin="left"
                  width="100%"
                />
              </Box>
              <ChevronRight
                size={16}
                style={{
                  opacity:
                    hoveredLink === index || activeLink === index ? 1 : 0,
                  transition: 'opacity 0.2s',
                }}
              />
            </MotionFlex>
          </Box>
        ))}
      </VStack>

      {/* Sub Links */}
      {activeLink !== null && (
        <Box
          w="full"
          h="full"
          borderLeft="1px"
          borderColor="gray.200"
          bg="white"
          position="absolute"
          left="100%"
          top={0}
          zIndex={2}
        >
          <Box p={4} borderBottomWidth="1px">
            <Text fontWeight="semibold">
              {navigationLinks[activeLink].title}
            </Text>
          </Box>
          <AnimatePresence mode="wait">
            <MotionBox
              key={activeLink}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <VStack align="stretch" spacing={0}>
                {navigationLinks[activeLink].subLinks.map((subLink, index) => (
                  <MotionBox
                    key={`${activeLink}-${index}`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                    }}
                    position="relative"
                    overflow="hidden"
                  >
                    <MotionBox
                      p={4}
                      cursor="pointer"
                      borderBottomWidth="1px"
                      borderBottomColor="gray.100"
                      color="gray.600"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      _hover={{
                        color: 'black',
                      }}
                    >
                      <Text fontSize="sm">{subLink.title}</Text>
                    </MotionBox>
                    <Box
                      position="absolute"
                      bottom={0}
                      left={0}
                      height="1px"
                      bg="black"
                      transition="transform 0.3s ease"
                      transform="translateX(-100%)"
                      width="20px"
                      _groupHover={{
                        transform: 'translateX(0)',
                      }}
                    />
                  </MotionBox>
                ))}
              </VStack>
            </MotionBox>
          </AnimatePresence>
        </Box>
      )}
    </Flex>
  );
};

export default DrawerNavigation;
