import { Box, Button, Heading, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box>
      <Heading>Welcome to FreshKicks!</Heading>
      <Text>To get started, login to your account.</Text>
      <Button as={'a'} href="/login" colorScheme="black" variant="solid">
        Login
      </Button>
    </Box>
  );
}
