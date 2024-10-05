import React from 'react';
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';

interface ProductCardProps {
  product: {
    name: string;
    image: string;
    price: number;
    isNew: boolean;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Box position="relative">
      {product.isNew && (
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
      )}
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
          alt={product.name}
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </Box>
      <Heading size="md" mt="4">
        {product.name}
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
          ${product.price}
        </Text>
      </Button>
    </Box>
  );
};

export default ProductCard;
