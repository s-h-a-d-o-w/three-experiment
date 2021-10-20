import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { ControlsContext } from '../contexts/ControlsProvider';

const StyledContainer = styled.div({
  position: 'absolute',
  display: 'flex',
  width: '100%',
  height: '100vh',
  top: 0,

  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '16px',
});

const SliderContent = () => (
  <>
    <SliderTrack>
      <SliderFilledTrack />
    </SliderTrack>
    <SliderThumb />
  </>
);

export const Controls: React.FC = () => {
  const { amplitude, setAmplitude, frequency, setFrequency } =
    useContext(ControlsContext);

  return (
    <StyledContainer>
      <div style={{ alignSelf: 'end' }}>
        <Slider
          w="200px"
          aria-label={'Frequency'}
          colorScheme="pink"
          defaultValue={frequency}
          orientation="horizontal"
          onChange={(nextFrequency) => {
            setFrequency(nextFrequency);
          }}
          min={5}
          max={150}
          step={1}
        >
          <SliderContent />
        </Slider>
      </div>
      <Slider
        h="200px"
        aria-label={'Amplitude'}
        colorScheme="pink"
        defaultValue={amplitude}
        orientation="vertical"
        onChange={(nextAmplitude) => {
          setAmplitude(nextAmplitude);
        }}
        min={0.1}
        max={2}
        step={0.01}
      >
        <SliderContent />
      </Slider>
    </StyledContainer>
  );
};
