'use client';

import {
  Box,
  Flex,
  FormControl,
  Input,
  VStack,
  Heading,
  Text,
  Button,
  Checkbox,
  Link,
  Grid,
  Image,
  FormLabel,
  FormHelperText,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { GoArrowRight } from 'react-icons/go';
import Join from '../components/Join';
import React from 'react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const page = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Flex
      width="100%"
      align="stretch"
      justify="space-between"
      p={{ base: 0, md: 8 }}
      mb={'7'}
      flexDirection={{ base: 'column', md: 'row' }}
      gap={{ base: 8, md: 12 }}
      mt={{ base: '7', md: '3' }}
    >
      <Box width={{ base: '100%', md: '40%' }}>
        <VStack spacing={5} align="stretch">
          <Heading size="lg">Register</Heading>
          <Text>Sign up with</Text>
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            {['Icons.png', 'apple.png', 'facebook2.png'].map((icon, index) => (
              <Flex
                key={index}
                justify="center"
                align="center"
                border="1px solid #242422ff"
                borderRadius={7}
                aspectRatio={1}
                cursor={'pointer'}
                w={{ md: '120px', base: '100px' }}
                h={'50px'}
              >
                <Image
                  src={`/${icon}`}
                  alt={`${icon.split('.')[0]} image`}
                  width={10}
                  height={10}
                  objectFit="contain"
                />
              </Flex>
            ))}
          </Grid>
          <Text>OR</Text>
          <Heading size="md" as={'h2'} fontWeight={'bold'}>
            Your Name
          </Heading>
          <VStack spacing={4} align={'stretch'}>
            <FormControl id="name" isRequired>
              <Input
                type="name"
                placeholder=" First name"
                border={'2px solid #242422ff'}
                _focus={{ borderColor: '#242422ff' }}
                _hover={{ border: '2px solid #242422ff' }}
                focusBorderColor="transparent"
              />
            </FormControl>
            <FormControl id="name" isRequired>
              <Input
                type="name"
                placeholder="Last name"
                border={'2px solid #242422ff'}
                _focus={{ borderColor: '#242422ff' }}
                _hover={{ border: '2px solid #242422ff' }}
                focusBorderColor="transparent"
              />
            </FormControl>
            <FormControl>
              <FormLabel size={'md'} as={'h2'} fontWeight={'bold'}>
                Gender
              </FormLabel>
              <Flex gap={2}>
                <Checkbox
                  colorScheme="black"
                  size="sm"
                  iconColor="#242422ff"
                  borderColor="#242422ff"
                >
                  Male
                </Checkbox>
                <Checkbox
                  colorScheme="black"
                  size="sm"
                  iconColor="#242422ff"
                  borderColor="#242422ff"
                >
                  Female
                </Checkbox>
                <Checkbox
                  colorScheme="black"
                  size="sm"
                  iconColor="#242422ff"
                  borderColor="#242422ff"
                >
                  Other
                </Checkbox>
              </Flex>
            </FormControl>

            <Heading
              size="md"
              as={'h2'}
              fontWeight={'bold'}
              textAlign={'start'}
            >
              Login Details
            </Heading>
            <FormControl id="email" isRequired>
              <Input
                type="email"
                placeholder="Enter email"
                border={'2px solid #242422ff'}
                _focus={{ borderColor: '#242422ff' }}
                _hover={{ border: '2px solid #242422ff' }}
                focusBorderColor="transparent"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  border={'2px solid #242422ff'}
                  _focus={{ borderColor: '#242422ff' }}
                  _hover={{ border: '2px solid #242422ff' }}
                  focusBorderColor="transparent"
                  pr={'4.5rem'}
                />
                <InputRightElement w={'4.5rem'}>
                  <IconButton
                    h={'1.75rem'}
                    size={'lg'}
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                    icon={
                      showPassword ? (
                        <ViewOffIcon boxSize={'6'} />
                      ) : (
                        <ViewIcon boxSize={'6'} />
                      )
                    }
                    onClick={togglePasswordVisibility}
                    variant="ghost"
                    colorScheme="gray"
                    _hover={{ bg: 'transparent' }}
                  />
                </InputRightElement>
              </InputGroup>
              <FormHelperText>
                Minimum 8 characters, with at least one uppercase letter, one
                number, and one special character
              </FormHelperText>
            </FormControl>
          </VStack>
          <Checkbox
            colorScheme="black"
            size="sm"
            iconColor="#242422ff"
            borderColor="#242422ff"
          >
            <Text fontSize="sm">
              By clicking &apos;Log in&apos; you agree to our website KicksClub
              <Link href={'#'} textDecoration={'underline'}>
                Terms & Conditions, Kick Privacy Notice and Terms and Conditions
              </Link>
            </Text>
          </Checkbox>
          <Checkbox
            colorScheme="black"
            size="sm"
            iconColor="#242422ff"
            borderColor="#242422ff"
          >
            Keep me logged in - applies to all log in options below.
          </Checkbox>
          <Button
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
            Register
          </Button>
        </VStack>
      </Box>
      <Box width={{ base: '100%', md: '55%' }}>
        <Join />
      </Box>
    </Flex>
  );
};

export default page;
