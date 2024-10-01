'use client';

import React from 'react';
import { Box, Flex, Text, Image, Stack, Avatar, Icon } from '@chakra-ui/react';
import { StarIcon } from 'lucide-react';

interface ReviewProps {
  title: string;
  rating: number;
  comment: string;
  avatarSrc: string;
  imageSrc: string;
}
const ReviewCard = ({ review }: { review: ReviewProps }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={2}>
        <Flex alignItems="center">
          <Avatar size="sm" src={review.avatarSrc} mr={2} />
          <Text fontWeight="bold">{review.title}</Text>
        </Flex>
        <Flex alignItems="center">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              as={StarIcon}
              color={i < review.rating ? 'yellow.400' : 'gray.300'}
            />
          ))}
          <Text ml={1} fontSize="sm" fontWeight="bold">
            {review.rating.toFixed(1)}
          </Text>
        </Flex>
      </Flex>
      <Text fontSize="sm" mb={2}>
        {review.comment}
      </Text>
      <Image src={review.imageSrc} alt="Product" borderRadius="md" />
    </Box>
  );
};

const ReviewSection = () => {
  const reviews = [
    {
      title: 'Good Quality',
      rating: 5.0,
      comment: 'I highly recommend shopping from kicks',
      avatarSrc: 'https://bit.ly/dan-abramov',
      imageSrc: '/sneakers1.png',
    },
    {
      title: 'Good Quality',
      rating: 5.0,
      comment: 'I highly recommend shopping from kicks',
      avatarSrc: 'https://bit.ly/dan-abramov',
      imageSrc: '/sneakers2.png',
    },
    {
      title: 'Good Quality',
      rating: 5.0,
      comment: 'I highly recommend shopping from kicks',
      avatarSrc: 'https://bit.ly/dan-abramov',
      imageSrc: '/sneakers3.png',
    },
  ];

  return (
    <Box p={6}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Text fontSize="2xl" fontWeight="bold">
          REVIEWS
        </Text>
        <Box
          as="button"
          bg="blue.500"
          color="white"
          px={4}
          py={2}
          borderRadius="md"
        >
          SEE ALL
        </Box>
      </Flex>
      <Stack spacing={4} direction={['column', 'row']}>
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </Stack>
    </Box>
  );
};

export default ReviewSection;
