import { ReactNode, createContext, useContext, useState } from "react";

interface IThemeProviders {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeProviders = createContext<IThemeProviders | undefined>(
  undefined,
);

export const useTheme = () => {
  const context = useContext(ThemeProviders);

  if (!context) {
    throw new Error("context error");
  }

  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeProviders.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeProviders.Provider>
  );
};
