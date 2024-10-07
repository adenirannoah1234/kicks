import React from 'react';
import { Flex, Button, Text, useBreakpointValue } from '@chakra-ui/react';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

const Pagination = () => {
  const pageNumbers = useBreakpointValue({
    base: [1, 2, '...', 10],
    md: [1, 2, 3, 4, '...', 10],
  }) || [1, 2, '...', 10]; // fallback to base breakpoint if none matches

  return (
    <Flex justify="center" mt={6} alignItems="center">
      <Button
        variant="outline"
        mr={2}
        border="1px solid black"
        leftIcon={<MdNavigateBefore fontSize={25} />}
        aria-label="Previous page"
      >
        <Text display={{ base: 'none', md: 'block' }}>PREVIOUS</Text>
      </Button>
      <Flex>
        {pageNumbers.map((page, index) => (
          <Button
            key={index}
            variant={page === 2 ? 'solid' : 'outline'}
            bg={page === 2 ? 'black' : 'white'}
            color={page === 2 ? 'white' : 'black'}
            mx={1}
            minW={0}
            px={{ base: 4, md: 4 }}
          >
            {page}
          </Button>
        ))}
      </Flex>
      <Button
        variant="outline"
        ml={2}
        border="1px solid black"
        rightIcon={<MdNavigateNext fontSize={25} />}
        aria-label="Next page"
      >
        <Text display={{ base: 'none', md: 'block' }}>NEXT</Text>
      </Button>
    </Flex>
  );
};

export default Pagination;
