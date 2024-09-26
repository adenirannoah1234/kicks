import Image from 'next/image';
import styles from './page.module.css';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box>
      <Heading>Welcome to FreshKicks!</Heading>
      <Text>To get started, Signup.</Text>
      <Button>Create Account</Button>
    </Box>
  );
}
