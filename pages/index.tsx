import { ChakraProvider } from '@chakra-ui/react';
import styled from '@emotion/styled';
import type { NextPage } from 'next';
import React from 'react';
import { Controls } from '../components/Controls';
import { Stage } from '../components/Stage';
import { ControlsProvider } from '../contexts/ControlsProvider';

const StyledMain = styled.main({
  height: '100vh',
});

const Home: NextPage = () => {
  return (
    <ChakraProvider>
      <ControlsProvider>
        <StyledMain>
          <Stage />
          <Controls />
        </StyledMain>
      </ControlsProvider>
    </ChakraProvider>
  );
};

export default Home;
