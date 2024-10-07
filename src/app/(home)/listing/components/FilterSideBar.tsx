import React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  HStack,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
  VStack,
} from '@chakra-ui/react';

const FilterSideBar = () => {
  return (
    <Box width="100%">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Filters
      </Text>
      <Accordion allowMultiple defaultIndex={[0, 1, 2, 3, 4]}>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontWeight="bold">
              REFINE BY
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <HStack mb={4}>
              <Button colorScheme="blue" size="sm">
                Mens
              </Button>
              <Button colorScheme="blue" size="sm">
                Casual
              </Button>
            </HStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontWeight="bold">
              SIZE
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Grid templateColumns="repeat(5, 1fr)" gap={2}>
              {[38, 39, 40, 41, 42, 43, 44, 45, 46, 47].map((size) => (
                <Button
                  key={size}
                  size="sm"
                  variant={size === 38 ? 'solid' : 'outline'}
                  bg={size === 38 ? 'black' : 'white'}
                  color={size === 38 ? 'white' : 'black'}
                >
                  {size}
                </Button>
              ))}
            </Grid>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontWeight="bold">
              COLOR
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Grid templateColumns="repeat(5, 1fr)" gap={2}>
              {[
                'blue',
                'orange',
                'black',
                'green',
                'gray',
                'red',
                'lightgray',
                'darkblue',
                'brown',
                'tan',
              ].map((color) => (
                <Button
                  key={color}
                  size="sm"
                  bg={color}
                  width="30px"
                  height="30px"
                />
              ))}
            </Grid>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontWeight="bold">
              TYPE
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack align="stretch">
              {[
                'Casual shoes',
                'Runners',
                'Hiking',
                'Sneaker',
                'Basketball',
                'Golf',
              ].map((type) => (
                <Checkbox
                  key={type}
                  iconColor="#242422ff"
                  colorScheme="#242422ff"
                  borderColor="#242422ff"
                >
                  {type}
                </Checkbox>
              ))}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontWeight="bold">
              GENDER
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack align="stretch">
              {['Men', 'Women'].map((gender) => (
                <Checkbox
                  key={gender}
                  iconColor="#242422ff"
                  borderColor="#242422ff"
                  colorScheme="#242422ff"
                >
                  {gender}
                </Checkbox>
              ))}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontWeight="bold">
              PRICE
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <RangeSlider defaultValue={[0, 100]}>
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Box width="100%" mt={4} display={{ md: 'none' }}>
        <Flex width="100%" justifyContent="space-between">
          <Button border="1px solid black" size="lg" width="48%">
            Reset
          </Button>
          <Button
            bg="black"
            color="white"
            _hover={{ bg: 'gray.800' }}
            size="lg"
            width="48%"
          >
            Apply
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default FilterSideBar;
