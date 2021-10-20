import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { Head } from '../components/Head';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
export default App;
