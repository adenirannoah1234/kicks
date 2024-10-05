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
  FormHelperText,
  InputGroup,
  InputRightElement,
  IconButton,
  useToast,
} from '@chakra-ui/react';
import { GoArrowRight } from 'react-icons/go';
import Join from '../components/Join';
import React from 'react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useCreateUserMutation } from '@/lib/features/auth/authSlice';

interface UserDetails {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  con_password: string;
}

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const [createUser, { isLoading }] = useCreateUserMutation();
  const toast = useToast();

  const [details, setDetails] = useState<UserDetails>({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    con_password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleGenderChange = (selectedGender: string) => {
  //   setDetails((prev) => ({
  //     ...prev,
  //     gender: selectedGender,
  //   }));
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (
      !details.email ||
      !details.password ||
      !details.con_password ||
      !details.firstname ||
      !details.lastname
    ) {
      toast({
        title: 'Please fill all the fields',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    try {
      const response = await createUser({
        firstname: details.firstname,
        lastname: details.lastname,
        email: details.email,
        password: details.password,
        con_password: details.con_password,
      }).unwrap();
      console.log(response);
    } catch (error) {
      console.error('Failed to register:', error);
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
          <VStack
            spacing={4}
            align={'stretch'}
            as={'form'}
            onSubmit={handleSubmit}
          >
            <FormControl isRequired>
              <Input
                name="firstname"
                placeholder="First name"
                border={'1px solid #242422ff'}
                _focus={{ borderColor: '#242422ff' }}
                _hover={{ border: '1px solid #242422ff' }}
                focusBorderColor="transparent"
                onChange={handleChange}
                value={details.firstname}
              />
            </FormControl>
            <FormControl isRequired>
              <Input
                name="lastname"
                placeholder="Last name"
                border={'1px solid #242422ff'}
                _focus={{ borderColor: '#242422ff' }}
                _hover={{ border: '1px solid #242422ff' }}
                focusBorderColor="transparent"
                onChange={handleChange}
                value={details.lastname}
              />
            </FormControl>
            {/* <FormControl>
              <FormLabel size={'md'} as={'h2'} fontWeight={'bold'}>
                Gender
              </FormLabel>
              <Flex gap={2}>
                {['Male', 'Female', 'Other'].map((gender) => (
                  <Checkbox
                    key={gender}
                    // isChecked={details.gender === gender}
                    // onChange={() => handleGenderChange(gender)}
                    colorScheme="black"
                    size="sm"
                    iconColor="#242422ff"
                    borderColor="#242422ff"
                  >
                    {gender}
                  </Checkbox>
                ))}
              </Flex>
            </FormControl> */}

            <Heading
              size="md"
              as={'h2'}
              fontWeight={'bold'}
              textAlign={'start'}
            >
              Login Details
            </Heading>
            <FormControl isRequired>
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
            <FormControl isRequired>
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
            <FormControl isRequired>
              <InputGroup>
                <Input
                  name="con_password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  border={'1px solid #242422ff'}
                  _focus={{ borderColor: '#242422ff' }}
                  _hover={{ border: '1px solid #242422ff' }}
                  focusBorderColor="transparent"
                  pr={'4.5rem'}
                  onChange={handleChange}
                  value={details.con_password}
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
            </FormControl>

            <Checkbox
              colorScheme="black"
              size="sm"
              iconColor="#242422ff"
              borderColor="#242422ff"
            >
              <Text fontSize="sm">
                By clicking &apos;Log in&apos; you agree to our website
                KicksClub
                <Link href={'#'} textDecoration={'underline'}>
                  Terms & Conditions, Kick Privacy Notice and Terms and
                  Conditions
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
              Register
            </Button>
          </VStack>
        </VStack>
      </Box>
      <Box width={{ base: '100%', md: '55%' }}>
        <Join />
      </Box>
    </Flex>
  );
};

export default Page;
