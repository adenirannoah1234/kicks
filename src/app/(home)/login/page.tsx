'use client';

import React, { useState } from 'react';
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
  useToast,
} from '@chakra-ui/react';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import Join from '../components/Join';

interface UserDetails {
  email: string;
  password: string;
}

const Page: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const [details, setDetails] = useState<UserDetails>({
    email: '',
    password: '',
  });

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    if (!details.email || !details.password) {
      toast({
        title: 'Please fill all the fields',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setIsLoading(true);
    try {
      const response = await signIn('credentials', {
        email: details.email,
        password: details.password,
        redirect: false,
      });
      if (response?.error) {
        toast({
          title: 'Login failed',
          description: response.error,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      } else if (response?.ok) {
        router.push('/');
      }
    } catch (error) {
      console.error('Failed to login:', error);
      toast({
        title: 'An error occurred',
        description: 'Please try again later',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

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
        <VStack
          spacing={4}
          as="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <FormControl id="email" isRequired>
            <Input
              name="email"
              type="email"
              placeholder="Enter email"
              border={'1px solid #242422ff'}
              _focus={{ borderColor: '#242422ff' }}
              _hover={{ border: '1px solid #242422ff' }}
              focusBorderColor="transparent"
              onChange={handleChange}
              value={details.email}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <InputGroup>
              <Input
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                border={'1px solid #242422ff'}
                _focus={{ borderColor: '#242422ff' }}
                _hover={{ border: '1px solid #242422ff' }}
                focusBorderColor="transparent"
                pr={'4.5rem'}
                onChange={handleChange}
                value={details.password}
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
            type="submit"
            color={'white'}
            bg={'#242422ff'}
            variant="solid"
            _hover={{ bg: '#242422ff' }}
            size="lg"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            rightIcon={<GoArrowRight />}
            isLoading={isLoading}
          >
            Email Login
          </Button>
        </VStack>
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
