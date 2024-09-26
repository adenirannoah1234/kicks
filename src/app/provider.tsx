// app/providers.tsx
'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
// import StoreProvider from "./StoreProvider";
// import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
