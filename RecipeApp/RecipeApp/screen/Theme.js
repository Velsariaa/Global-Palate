import React, { createContext, useState, useEffect } from 'react';
import { Appearance } from 'react-native';

export const ThemeContext = createContext({
theme: {
  backgroundColor: '',
  textColor: '',
  tintColor: '',
},
toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const colorScheme = Appearance.getColorScheme();

  const lightTheme = {
    backgroundColor: 'white',
    textColor: 'black',
    tintColor: 'black',
  };

  const darkTheme = {
      backgroundColor: '#121212',
      textColor: 'white',
      tintColor: 'white',
  };

  const [theme, setTheme] = useState(colorScheme === 'dark' ? darkTheme : lightTheme);

  const toggleTheme = () => {
    setTheme (theme.backgroundColor === lightTheme.backgroundColor ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

