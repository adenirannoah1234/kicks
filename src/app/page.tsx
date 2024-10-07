'use client';

import { Box, Button, Heading, Text, Flex } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { LineWave } from 'react-loader-spinner';

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  if (status === 'unauthenticated') {
    return router.push('/login');
  }

  if (status === 'loading') {
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="100vw"
        backgroundColor="#f5f5f5"
      >
        <LineWave
          height="300"
          width="300"
          color="black"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      </Flex>
    );
  }
  return (
    <Box>
      <Heading>Welcome to FreshKicks!</Heading>
      <Text>To get started, login to your account.</Text>
      <Button color={'black'} onClick={() => signOut()}>
        Sign out
      </Button>
    </Box>
  );
}
