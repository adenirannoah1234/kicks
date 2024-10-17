import { Box, Button, Text, Heading, Grid, Flex } from '@chakra-ui/react';
import Image from 'next/image';

export default function Drops() {
  const products = [
    { id: 1, image: '/adidas1.png', alt: 'adidas1' },
    { id: 2, image: '/adidas2.png', alt: 'adidas2' },
    { id: 3, image: '/adidas3.png', alt: 'adidas3' },
    { id: 4, image: '/adidas4.png', alt: 'adidas4' },
  ];

  return (
    <Box py={20}>
      <Flex
        w="100%"
        justify="space-between"
        align="center"
        flexDirection={{ base: 'column', md: 'row' }}
        gap={4}
      >
        <Heading
          fontSize={{ base: '1.3rem', md: '2.5rem' }}
          w={{ base: '100%', md: '30%' }}
          fontWeight="bold"
          textAlign={{ base: 'center', md: 'left' }}
        >
          DON&apos;T MISS OUT NEW DROPS
        </Heading>
        <Button
          bg="#4b69e3"
          color="white"
          _hover={{
            bg: '#4b69e3',
          }}
        >
          SHOP NEW DROPS
        </Button>
      </Flex>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        gap={5}
        mt={5}
      >
        {products.map((product) => (
          <Box key={product.id} position="relative">
            <Box
              position="absolute"
              top="2"
              left="2"
              backgroundColor="#4b69e3"
              color="white"
              padding="14px"
              borderRadius="50% 0 50% 0"
              zIndex="1"
            >
              <Text fontSize="0.6rem" fontWeight="bold">
                NEW
              </Text>
            </Box>
            <Box
              borderWidth="7px"
              borderColor="#fafafa"
              borderRadius="30px"
              overflow="hidden"
              position="relative"
              paddingBottom="100%"
            >
              <Image
                src={product.image}
                alt={product.alt}
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </Box>
            <Heading size="md" mt="4">
              ADIDAS 4DFWD X PARLEY RUNNING SHOES
            </Heading>
            <Button
              mt="5"
              display="flex"
              alignItems="center"
              //   justifyContent="space-between"
              bg="#242422"
              color="white"
              _hover={{
                bg: '#242422',
              }}
              width="100%"
            >
              <Text>VIEW PRODUCT-</Text>
              <Text fontWeight="bold" color="#ffa42e">
                125$
              </Text>
            </Button>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
