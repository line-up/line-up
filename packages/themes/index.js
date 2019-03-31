import React, {createContext, useContext} from 'react';
import DarkTheme from './themes/dark';
import LightTheme from './themes/light';

// Theme Provider
const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({theme, children}) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

// Themes
export const dark = DarkTheme;
export const light = LightTheme;
