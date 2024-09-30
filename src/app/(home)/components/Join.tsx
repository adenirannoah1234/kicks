import React from 'react';
import {
  VStack,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Button,
} from '@chakra-ui/react';
import { GoArrowRight } from 'react-icons/go';

const Join = () => {
  return (
    <VStack
      width={'100%'}
      bg="#fafafaff"
      spacing={5}
      p={6}
      rounded="lg"
      align="stretch"
    >
      <Heading size="lg">Join Kicks Club Get Rewarded Today.</Heading>
      <Text>
        As kicks club member you will get rewarded with what you love for doing
        what you love. Sign up today and receive access to these level 1
        benefits.
      </Text>
      <UnorderedList spacing={2}>
        <ListItem>Free shipping.</ListItem>
        <ListItem>A 15% off voucher for your next purchase.</ListItem>
        <ListItem>Access to Members Only products and sales.</ListItem>
        <ListItem>Access to adidas Running and Training apps</ListItem>
        <ListItem>Special offers and promotions</ListItem>
      </UnorderedList>
      <Text>
        Join now to start earning points, reach new levels and unlock more
        rewards and benefits from Kicks Club.
      </Text>
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
        Join the club
      </Button>
    </VStack>
  );
};

export default Join;
