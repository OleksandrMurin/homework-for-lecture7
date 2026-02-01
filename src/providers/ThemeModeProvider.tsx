import { CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useState } from "react";
import { darkTheme, lightTheme } from "../styles/theme";

interface ContextValue {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ThemeModeContext = createContext<ContextValue | null>(null);

export function ThemeModeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);

  //TODO: Check this later
  return (
    <ThemeModeContext.Provider value={{ isDark, setIsDark }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
