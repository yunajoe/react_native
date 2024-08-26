import {useContext, useEffect, useMemo, useState} from 'react';

import {ThemeContext} from '@/context/ThemeContext';
import {saveNonStringItemToStorage} from '@/utils/storage';

function useDarkMode() {
  const [isLight, setIsLight] = useState(false);
  const toggleSwitch = () => setIsLight(prev => !prev);

  const {theme, setToggleFunction} = useContext(ThemeContext);

  const themeValue = useMemo(() => {
    return isLight ? 'light' : 'dark';
  }, [isLight]);

  useEffect(() => {
    setToggleFunction(themeValue);
    const callBackFunc = async () => {
      await saveNonStringItemToStorage({key: 'mode', saveValue: themeValue});
    };
    callBackFunc();
  }, [themeValue]);

  return {
    isLight,
    toggleSwitch,
    theme,
    setToggleFunction,
  };
}

export default useDarkMode;
