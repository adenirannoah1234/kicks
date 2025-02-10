import React, { useState } from 'react';
import { VStack, Flex, Text, Box, IconButton } from '@chakra-ui/react';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileDrawerNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  navigationLinks: Array<{
    title: string;
    subLinks: Array<{ title: string; path: string }>;
  }>;
}

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const MobileDrawerNavigation: React.FC<MobileDrawerNavigationProps> = ({
  //   isOpen,
  //   onClose,
  navigationLinks,
}) => {
  const [activeLink, setActiveLink] = useState<number | null>(null);
  const [showSubLinks, setShowSubLinks] = useState(false);

  const handleMainLinkClick = (index: number) => {
    setActiveLink(index);
    setShowSubLinks(true);
  };

  const handleBack = () => {
    setShowSubLinks(false);
    setActiveLink(null);
  };

  return (
    <Flex position="relative" h="full" w="full" overflow="hidden">
      {/* Main Links */}
      <VStack
        align="stretch"
        spacing={0}
        flex={1}
        display={showSubLinks ? 'none' : 'flex'}
        bg="white"
      >
        {navigationLinks.map((link, index) => (
          <Box key={index} position="relative">
            <MotionFlex
              p={4}
              justify="space-between"
              align="center"
              onClick={() => handleMainLinkClick(index)}
              cursor="pointer"
              borderBottomWidth="1px"
              borderBottomColor="gray.100"
              color="gray.600"
              _hover={{ color: 'black' }}
            >
              <Text fontSize="sm">{link.title}</Text>
              <ChevronRight size={16} />
            </MotionFlex>
          </Box>
        ))}
      </VStack>

      {/* Sub Links */}
      <AnimatePresence>
        {showSubLinks && activeLink !== null && (
          <MotionBox
            position="absolute"
            top={0}
            left={0}
            w="full"
            h="full"
            bg="white"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.2 }}
          >
            <Flex p={4} borderBottomWidth="1px" align="center">
              <IconButton
                icon={<ArrowLeft size={20} />}
                aria-label="Back"
                variant="ghost"
                size="sm"
                mr={2}
                onClick={handleBack}
              />
              <Text fontWeight="semibold">
                {navigationLinks[activeLink].title}
              </Text>
            </Flex>

            <VStack align="stretch" spacing={0}>
              {navigationLinks[activeLink].subLinks.map((subLink, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Box
                    p={4}
                    cursor="pointer"
                    borderBottomWidth="1px"
                    borderBottomColor="gray.100"
                    color="gray.600"
                    _hover={{ color: 'black' }}
                  >
                    <Text fontSize="sm">{subLink.title}</Text>
                  </Box>
                </MotionBox>
              ))}
            </VStack>
          </MotionBox>
        )}
      </AnimatePresence>
    </Flex>
  );
};

export default MobileDrawerNavigation;
