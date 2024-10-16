import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';

const Page = () => {
  return (
    <Flex
      py={8}
      w="100%"
      gap={'6rem'}
      flexDirection={{ base: 'column-reverse', lg: 'row' }}
    >
      <Box
        as="form"
        w={{ md: '55%', base: '100%' }}
        mr={{ base: 0, lg: 8 }}
        mb={{ base: 8, lg: 0 }}
      >
        <Button
          as="a"
          href="/signup"
          variant="link"
          textDecoration="underline"
          mb={4}
        >
          Login and Checkout faster
        </Button>
        <Heading size="md" mb={2}>
          Contact Details
        </Heading>
        <Text mb={4}>
          We will use these details to keep you informed about your delivery
        </Text>
        <FormControl
          id="email"
          isRequired
          mb={4}
          w={{ md: '48%', base: '100%' }}
        >
          <Input
            name="email"
            type="email"
            placeholder="Enter email"
            border={'1px solid #242422ff'}
            _focus={{ borderColor: '#242422ff' }}
            _hover={{ border: '1px solid #242422ff' }}
            focusBorderColor="transparent"
            borderRadius="md"
          />
        </FormControl>
        <Heading size="md" mb={4}>
          Shipping Address
        </Heading>
        <Flex mb={4} flexDirection={{ base: 'column', md: 'row' }}>
          <FormControl
            id="firstName"
            isRequired
            mr={{ base: 0, md: 2 }}
            mb={{ base: 4, md: 0 }}
          >
            <Input
              name="firstName"
              type="text"
              placeholder="First Name*"
              border={'1px solid #242422ff'}
              _focus={{ borderColor: '#242422ff' }}
              _hover={{ border: '1px solid #242422ff' }}
              focusBorderColor="transparent"
              borderRadius="md"
            />
          </FormControl>
          <FormControl id="lastName" isRequired ml={{ base: 0, md: 2 }}>
            <Input
              name="lastName"
              type="text"
              placeholder="Last Name*"
              border={'1px solid #242422ff'}
              _focus={{ borderColor: '#242422ff' }}
              _hover={{ border: '1px solid #242422ff' }}
              focusBorderColor="transparent"
              borderRadius="md"
            />
          </FormControl>
        </Flex>
        <FormControl id="address" isRequired mb={4}>
          <Input
            name="address"
            type="text"
            placeholder="Find Delivery Address*"
            border={'1px solid #242422ff'}
            _focus={{ borderColor: '#242422ff' }}
            _hover={{ border: '1px solid #242422ff' }}
            focusBorderColor="transparent"
            borderRadius="md"
          />
          <FormHelperText>
            Start typing your street address or zip for suggestion
          </FormHelperText>
        </FormControl>
        <FormControl mb={4} w={{ md: '48%', base: '100%' }}>
          <Input
            name="number"
            type="tel"
            placeholder="Phone Number*"
            border={'1px solid #242422ff'}
            _focus={{ borderColor: '#242422ff' }}
            _hover={{ border: '1px solid #242422ff' }}
            focusBorderColor="transparent"
            borderRadius="md"
          />
          <FormHelperText>e.g +91 987654321</FormHelperText>
        </FormControl>
        <Box bg="#fafafa" p={3} borderRadius="md" mb={4}>
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <Text fontSize="xl" fontWeight="bold">
                Standard Delivery
              </Text>
              <Text>
                Enter your address to see when you will get your order
              </Text>
            </Box>
            <Text fontWeight="bold" fontSize="lg" color="#4b69e3">
              $6.00
            </Text>
          </Flex>
        </Box>
        <Box p={3} borderRadius="md" border="1px solid #242422" mb={4}>
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <Text fontSize="xl" fontWeight="bold">
                Collect in Store
              </Text>
              <Text>Pay now, collect in store</Text>
            </Box>
            <Text fontWeight="bold" fontSize="lg">
              Free
            </Text>
          </Flex>
        </Box>
        <Stack spacing={2} mb={4}>
          <Checkbox colorScheme="blackAlpha" size="sm" borderColor="#242422">
            My billing and delivery information are the same.
          </Checkbox>
          <Checkbox colorScheme="blackAlpha" size="sm" borderColor="#242422">
            I am 13+ years old.
          </Checkbox>
        </Stack>
        <Box mb={4}>
          <Text fontWeight="bold" fontSize="lg" mb={2}>
            Also want product updates with our newsletter?
          </Text>
          <Checkbox colorScheme="blackAlpha" size="sm" borderColor="#242422">
            Yes, I would like to receive emails about exclusive sales and more.
          </Checkbox>
        </Box>
        <Button
          type="submit"
          color={'white'}
          bg={'#242422ff'}
          variant="solid"
          _hover={{ bg: '#242422ff' }}
          size="lg"
          width="100%"
          display={{ base: 'none', md: 'flex' }}
        >
          REVIEW AND PAY
        </Button>
        <Button
          type="submit"
          display={{ base: 'flex', md: 'none' }}
          color={'white'}
          bg={'#242422ff'}
          variant="solid"
          _hover={{ bg: '#242422ff' }}
          size="lg"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
          rightIcon={<GoArrowRight />}
        >
          REVIEW AND PAY
        </Button>
      </Box>
      <Flex
        w={{ md: '45%', base: '100%' }}
        flex={1}
        flexDirection={{ base: 'column-reverse', md: 'column' }}
      >
        <Box
          minW="300px"
          p={6}
          borderRadius="2xl"
          bg={'#fafafaff'}
          mt={{ md: '0', base: '5' }}
          flex={1}
          maxH={'280px'}
        >
          <Heading size="lg" mb={6}>
            Order Summary
          </Heading>

          <Flex justify="space-between" mb={4}>
            <Text>1 ITEM</Text>
            <Text>$130.00</Text>
          </Flex>

          <Flex justify="space-between" mb={4}>
            <Text>Delivery</Text>
            <Text>$6.99</Text>
          </Flex>

          <Flex justify="space-between" mb={6}>
            <Text>Sales Tax</Text>
            <Text>-</Text>
          </Flex>

          <Flex justify="space-between" mb={6} fontWeight="bold">
            <Text>Total</Text>
            <Text>$136.99</Text>
          </Flex>
        </Box>

        <Box flex={1} minW={'300x'} mt={{ md: '50px', base: '0' }}>
          <Box bg="#fafafa" p={3} borderRadius="2xl">
            <Text fontSize="1.5rem" fontWeight="bold" mb={4}>
              Order Details
            </Text>
            <Flex gap={6} mb={6} flexDirection={{ base: 'column', md: 'row' }}>
              <Box
                w={{ base: '100%', md: '200px' }}
                h="200px"
                bg="gray.100"
                borderRadius="md"
                overflow="hidden"
              >
                <Image
                  src="/adidas1.png"
                  width={200}
                  height={200}
                  alt="DROPSET TRAINER SHOES"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
              <Flex
                flex={1}
                flexDirection="column"
                justifyContent="space-between"
              >
                <Box>
                  <Text fontWeight="bold" fontSize="lg" mb={1}>
                    DROPSET TRAINER SHOES
                  </Text>
                  <Text color="gray.600" mb={1}>
                    Men&apos;s Road Running Shoes
                  </Text>
                  <Text color="gray.600" mb={4}>
                    Enamel Blue/University White
                  </Text>
                  <Flex gap={4} flexDirection={{ base: 'column', sm: 'row' }}>
                    <Select
                      w={{ base: '100%', sm: '150px' }}
                      focusBorderColor="black"
                      placeholder="Size 10"
                    >
                      <option value="9">Size 9</option>
                      <option value="10">Size 10</option>
                      <option value="11">Size 11</option>
                    </Select>
                    <Select
                      w={{ base: '100%', sm: '150px' }}
                      focusBorderColor="black"
                      placeholder="Quantity 1"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Select>
                  </Flex>
                </Box>
                <Text fontWeight="bold" fontSize="lg" color="#4b69e3" mt={4}>
                  $130.00
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Page;
