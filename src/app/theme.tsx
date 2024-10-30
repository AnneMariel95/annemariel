'use client';
import {createContext, useContext, useState, useEffect} from 'react';

export const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);
