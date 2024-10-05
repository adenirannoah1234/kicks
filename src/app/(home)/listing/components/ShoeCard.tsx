import React from 'react';
import { Box, Image, Text, Button, Heading, Grid } from '@chakra-ui/react';

interface ShoeData {
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  labelColor: string;
  isNew?: boolean;
}

interface ShoeProductCardProps {
  shoe: ShoeData;
}

interface ShoeGridProps {
  shoeData: ShoeData[];
}

const ShoeProductCard: React.FC<ShoeProductCardProps> = ({ shoe }) => (
  <Box position="relative">
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
        src={shoe.image}
        alt={shoe.name}
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        objectFit="cover"
      />
    </Box>
    <Heading size="md" mt="4">
      {shoe.name}
    </Heading>
    <Button
      mt="5"
      display="flex"
      alignItems="center"
      bg="#242422"
      color="white"
      _hover={{
        bg: '#242422',
      }}
      width="100%"
      height="50px"
      borderRadius="md"
    >
      <Text mr="2">VIEW PRODUCT - </Text>
      <Text fontWeight="bold" color="#ffa42e">
        ${shoe.price}
      </Text>
    </Button>
  </Box>
);

const ShoeGrid: React.FC<ShoeGridProps> = ({ shoeData }) => (
  <Grid templateColumns="repeat(3, 1fr)" gap={4}>
    {shoeData.map((shoe, index) => (
      <ShoeProductCard key={index} shoe={shoe} />
    ))}
  </Grid>
);

export { ShoeProductCard, ShoeGrid };
export type { ShoeData, ShoeGridProps, ShoeProductCardProps };
