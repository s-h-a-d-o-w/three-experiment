import { createContext, Dispatch, SetStateAction, useState } from 'react';

type ControlsState = {
  amplitude: number;
  setAmplitude: Dispatch<SetStateAction<number>>;
  frequency: number;
  setFrequency: Dispatch<SetStateAction<number>>;
};

const defaultValues = {
  amplitude: 0.5,
  frequency: 100,
};

// @ts-expect-error
export const ControlsContext = createContext<ControlsState>(defaultValues);

export const ControlsProvider: React.FC = ({ children }) => {
  const [amplitude, setAmplitude] = useState(defaultValues.amplitude);
  const [frequency, setFrequency] = useState(defaultValues.frequency);

  return (
    <ControlsContext.Provider
      value={{
        amplitude,
        setAmplitude,
        frequency,
        setFrequency,
      }}
    >
      {children}
    </ControlsContext.Provider>
  );
};
