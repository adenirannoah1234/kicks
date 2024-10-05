import React from 'react';
import { Flex, Button } from '@chakra-ui/react';

const Pagination = () => {
  return (
    <Flex justify="center" mt={6}>
      <Button variant="outline" mr={2}>
        ← PREVIOUS
      </Button>
      {[1, 2, 3, 4, '...', 10].map((page, index) => (
        <Button
          key={index}
          variant={page === 2 ? 'solid' : 'outline'}
          bg={page === 2 ? 'black' : 'white'}
          color={page === 2 ? 'white' : 'black'}
          mx={1}
        >
          {page}
        </Button>
      ))}
      <Button variant="outline" ml={2}>
        NEXT →
      </Button>
    </Flex>
  );
};

export default Pagination;
