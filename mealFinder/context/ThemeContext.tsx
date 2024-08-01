import {ReactNode, createContext, useCallback, useState} from 'react';
import {saveNonStringItemToStorage} from '../utils/storage';
import {AllowedMode} from '../theme';

type ThemeContextType = {
  theme: AllowedMode;
  setToggleFunction: (newTheme: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setToggleFunction: () => {},
});

export const ThemeContextProvider = ({children}: {children: ReactNode}) => {
  const [theme, setTheme] = useState('light');

  const setToggleFunction = useCallback(
    (newTheme: string) => {
      setTheme(newTheme);
      saveNonStringItemToStorage({key: 'theme', saveValue: newTheme});
    },
    [theme],
  );

  return (
    <ThemeContext.Provider value={{theme, setToggleFunction}}>
      {children}
    </ThemeContext.Provider>
  );
};
