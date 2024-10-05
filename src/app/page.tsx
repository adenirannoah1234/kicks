'use client';

import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  if (status === 'unauthenticated') {
    return router.push('/login');
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
