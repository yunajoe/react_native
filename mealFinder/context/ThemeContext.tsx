import {ReactNode, createContext, useCallback, useState} from 'react';

import {AllowedMode} from '../theme';

type ThemeContextType = {
  theme: AllowedMode;
  setToggleFunction: (newTheme: AllowedMode) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setToggleFunction: () => {},
});

export const ThemeContextProvider = ({children}: {children: ReactNode}) => {
  const [theme, setTheme] = useState<AllowedMode>('light');

  const setToggleFunction = useCallback(
    (newTheme: AllowedMode) => {
      setTheme(newTheme);
    },
    [theme],
  );

  return (
    <ThemeContext.Provider value={{theme, setToggleFunction}}>
      {children}
    </ThemeContext.Provider>
  );
};
