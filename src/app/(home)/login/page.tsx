'use client';

import {
  Flex,
  VStack,
  Text,
  Button,
  Heading,
  Input,
  FormControl,
  Checkbox,
  Grid,
  InputRightElement,
  IconButton,
  InputGroup,
} from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';
import Join from '../components/Join';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';

import Link from 'next/link';

const Page = () => {
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
      <VStack width={{ base: '100%', md: '40%' }} spacing={5} align="stretch">
        <Heading size="lg">Login</Heading>
        <Text textDecoration="underline">Forgot your password?</Text>
        <VStack spacing={4}>
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
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
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
          </FormControl>
        </VStack>
        <Checkbox
          colorScheme="black"
          size="sm"
          iconColor="#242422ff"
          borderColor="#242422ff"
        >
          Keep me logged in - applies to all log in options below.
          <Link href="/">More info</Link>
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
          Email Login
        </Button>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          {['Icons.png', 'apple.png', 'facebook2.png'].map((icon, index) => (
            <Flex
              key={index}
              justify="center"
              align="center"
              border="1px solid #242422ff"
              borderRadius={7}
              aspectRatio={1}
              w={{ md: '120px', base: '100px' }}
              h={'50px'}
            >
              <Image
                src={`/${icon}`}
                alt={`${icon.split('.')[0]} image`}
                width={20}
                height={10}
                objectFit="contain"
              />
            </Flex>
          ))}
        </Grid>
        <Text fontSize="sm">
          By clicking &apos;Log in&apos; you agree to our website KicksClub
          <Link href={'#'}>
            Terms & Conditions, Kick Privacy Notice and Terms and Conditions
          </Link>
        </Text>
      </VStack>

      <Join />
    </Flex>
  );
};

export default Page;
