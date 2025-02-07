'use client';

import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  Image,
  Container,
  useMediaQuery,
  Heading,
} from '@chakra-ui/react';

type ShoeView = 'front' | 'side';

const HeroSection = () => {
  const [currentSide, setCurrentSide] = useState<ShoeView>('front');
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  const shoeImages: Record<ShoeView, string> = {
    front: '/shoe1.png',
    side: '/shoe2.png',
  };

  return (
    // <Box
    //   h={{ md: '100vh', base: '70vh' }}
    //   w="100%"
    //   backgroundImage={`url(${shoeImages[currentSide]})`}
    //   backgroundSize="cover"
    //   backgroundPosition="center"
    //   position="relative"
    //   borderRadius={{ base: '4rem', md: '3rem' }}
    // >
    //   <Container maxW="container.xl" h="100%">
    //     <Flex direction="column" justify="space-between" h="100%" py={8}>
    //       <Box
    //         position="absolute"
    //         left="5"
    //         top="50%"
    //         transform="translateY(-50%) rotate(-90deg)"
    //         transformOrigin="left center"
    //         bg="black"
    //         color="white"
    //         py={2}
    //         px={4}
    //         borderRadius={8}
    //       >
    //         <Text fontSize="sm" fontWeight="bold">
    //           Nike product of the Year
    //         </Text>
    //       </Box>
    //       {/* Bottom section */}
    //       <Flex
    //         justify="space-between"
    //         align="flex-end"
    //         w="100%"
    //         position="absolute"
    //         bottom={8}
    //         left={0}
    //         right={0}
    //         px={4}
    //       >
    //         {/* Left bottom text and button */}
    //         <VStack
    //           align="flex-start"
    //           spacing={2}
    //           maxW="420px"
    //           ml={{ base: '2', md: '6' }}
    //         >
    //           <Heading
    //             fontSize={{ md: '5xl', base: '2xl' }}
    //             fontWeight="bold"
    //             color="white"
    //             textShadow="1px 1px 3px rgba(0,0,0,0.6)"
    //           >
    //             NIKE AIR MAX
    //           </Heading>
    //           <Text
    //             fontSize={{ md: '2xl', base: 'md' }}
    //             fontWeight="bold"
    //             color="white"
    //             textShadow="1px 1px 3px rgba(0,0,0,0.6)"
    //           >
    //             Nike introducing the new Air Max for everyone&apos;s comfort
    //           </Text>
    //           <Button
    //             color={'white'}
    //             bg={'#4b69e3ff'}
    //             _hover={{
    //               bg: '#4b69e3ff',
    //             }}
    //             size={{ base: 'md', md: 'lg' }}
    //           >
    //             Shop Now
    //           </Button>
    //         </VStack>

    //         {/* Right bottom image selectors */}
    //         <VStack spacing={4} align="flex-end">
    //           {(['front', 'side'] as const).map((side) => (
    //             <Box
    //               key={side}
    //               onClick={() => setCurrentSide(side)}
    //               cursor="pointer"
    //               position="relative"
    //               width={isLargerThan768 ? '80px' : '60px'}
    //               height={isLargerThan768 ? '80px' : '60px'}
    //               overflow="hidden"
    //               borderRadius="md"
    //               transition="transform 0.3s ease-in-out"
    //               _hover={{ transform: 'scale(1.05)' }}
    //             >
    //               <Image
    //                 src={shoeImages[side]}
    //                 alt={`Shoe ${side} view`}
    //                 objectFit="cover"
    //                 width="100%"
    //                 height="100%"
    //               />
    //               {currentSide === side && (
    //                 <Box
    //                   position="absolute"
    //                   top="0"
    //                   left="0"
    //                   right="0"
    //                   bottom="0"
    //                   borderWidth="2px"
    //                   borderColor="white"
    //                   borderRadius="md"
    //                 />
    //               )}
    //             </Box>
    //           ))}
    //         </VStack>
    //       </Flex>
    //     </Flex>
    //   </Container>
    // </Box>
    <Box w={'100%'} h={'100vh'} bg={'#000000'}>
      <Image
        src="/heroimage.jpg"
        alt="new drops"
        width={'100%'}
        height={'100vh'}
      />
    </Box>
  );
};

export default HeroSection;
