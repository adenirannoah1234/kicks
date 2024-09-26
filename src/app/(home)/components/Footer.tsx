import {
  Box,
  Button,
  Input,
  Text,
  Flex,
  Heading,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <Box as="footer" w="100%" mb={4}>
      <Flex
        direction="column"
        w="100%"
        bg={'#4a69e2'}
        color={'white'}
        borderRadius={'40px'}
        overflow={'hidden'}
        pb={{ base: '6rem', md: '8rem' }}
      >
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          justify={'space-between'}
          align={'center'}
          p={{ base: '2rem', md: '3rem' }}
          minHeight={{ base: 'auto', md: '24em' }}
        >
          <Box w={{ base: '100%', lg: '50%' }} mb={{ base: '2rem', lg: 0 }}>
            <Text
              fontSize={{ base: '1.5rem', md: '2.5rem' }}
              w={{ base: '100%', lg: '90%' }}
              fontWeight={'bold'}
            >
              JOIN OUR KICKSPLUS CLUB & GET 15% OFF
            </Text>
            <Text fontSize={'1rem'} mt={2}>
              Signup for free to join the community.
            </Text>
            <Flex
              w={{ base: '100%', md: '70%' }}
              justifyContent={'space-between'}
              mt={'30px'}
              gap={'0.3rem'}
            >
              <Input
                placeholder="Email address"
                sx={{
                  '::placeholder': {
                    fontSize: '14px',
                    color: 'white',
                  },
                }}
                _focus={{
                  borderColor: 'white',
                }}
              />
              <Button
                bg={'#242422ff'}
                color={'white'}
                fontWeight={'bold'}
                _hover={{ bg: '#3a3a37' }}
                px={'1rem'}
                py={'0.5rem'}
              >
                Submit
              </Button>
            </Flex>
          </Box>

          <Box
            w={{ base: '100%', lg: '50%' }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src="/footerkicks1.png"
              alt="logo"
              width={400}
              height={250}
              style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </Box>
        </Flex>
      </Flex>
      <Box
        mt={{ base: '-5rem', md: '-6rem' }}
        bg={'#242422ff'}
        borderRadius={'40px'}
        overflow="hidden"
      >
        <Grid
          templateColumns={{
            base: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          gap={{ base: 4, md: 8 }}
          px={{ base: '1.5rem', md: '3rem' }}
          py={{ base: 6, md: 8 }}
        >
          <GridItem>
            <Heading
              fontSize={{ base: '1.2rem', md: '1.5rem' }}
              color={'#ffa42eff'}
              mb={4}
            >
              About Us
            </Heading>
            <Text fontSize={{ base: '0.875rem', md: '1rem' }} color={'white'}>
              We are the biggest hyperstore in the universe. We got you all
              covered with our exclusive collections and latest drops.
            </Text>
          </GridItem>

          <GridItem>
            <Heading
              fontSize={{ base: '1.2rem', md: '1.5rem' }}
              color={'#ffa42eff'}
              mb={4}
            >
              Categories
            </Heading>
            <Flex direction="column" gap={2}>
              {[
                'Runners',
                'Sneakers',
                'Basketball',
                'Outdoor',
                'Golf',
                'Hiking',
              ].map((item) => (
                <Link href="/" key={item}>
                  <Text
                    fontSize={{ base: '0.875rem', md: '1rem' }}
                    color={'white'}
                  >
                    {item}
                  </Text>
                </Link>
              ))}
            </Flex>
          </GridItem>

          <GridItem>
            <Heading
              fontSize={{ base: '1.2rem', md: '1.5rem' }}
              color={'#ffa42eff'}
              mb={4}
            >
              Company
            </Heading>
            <Flex direction="column" gap={2}>
              {['About', 'Contact', 'Blogs'].map((item) => (
                <Link href="/" key={item}>
                  <Text
                    fontSize={{ base: '0.875rem', md: '1rem' }}
                    color={'white'}
                  >
                    {item}
                  </Text>
                </Link>
              ))}
            </Flex>
          </GridItem>

          <GridItem>
            <Heading
              fontSize={{ base: '1.2rem', md: '1.5rem' }}
              color={'#ffa42eff'}
              mb={4}
            >
              Follow us
            </Heading>
            <Flex gap={'1rem'}>
              {['instagram', 'facebook', 'twitter', 'tiktok'].map((social) => (
                <Link href="/" key={social}>
                  <Image
                    src={`/${social}.png`}
                    alt={`${social} logo`}
                    width={20}
                    height={20}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                    }}
                  />
                </Link>
              ))}
            </Flex>
          </GridItem>
        </Grid>
        <Box
          position="relative"
          width="100%"
          height="auto"
          paddingTop={{ base: '3rem', md: '11.8rem' }}
        >
          <Image
            src="/footerkicks2.png"
            alt="footer"
            layout="fill"
            objectFit="contain"
          />
        </Box>
      </Box>
      <Text fontSize={'1rem'} textAlign={'center'} mt={4}>
        © All rights reserved. Adeniran Noah
      </Text>
    </Box>
  );
};

export default Footer;
