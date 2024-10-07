import React from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

const Pagination = () => {
  return (
    <Flex justify="center" mt={6}>
      <Button
        variant="outline"
        mr={2}
        border={'1px solid black'}
        leftIcon={<MdNavigateBefore fontSize={25} />}
      >
        PREVIOUS
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
      <Button
        variant="outline"
        ml={2}
        border={'1px solid black'}
        rightIcon={<MdNavigateNext fontSize={25} />}
      >
        NEXT
      </Button>
    </Flex>
  );
};

export default Pagination;
