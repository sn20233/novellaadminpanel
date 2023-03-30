import { createContext, useState, useMemo} from "react";
import {createTheme} from "@mui/material";

// color design
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        indigo: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
          950: "#C3B1E1",
        },

        black: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#101624",
          500: "#141b2d",
          600: "#434957",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        green: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        red: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        indigo: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
      }
    : {}),
});

// mui theme
export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
       palette: {
        mode: mode,
        ...(mode === 'dark'
        ?{
          primary:{
            main: colors.black[200],
          },
          secondary: {
            main: colors.green[600],

          },
          neutral: {
            dark: colors.indigo[100],
            main: colors.indigo[600],
            light: colors.indigo[100],

          },
          background:{
            default: "#050101 ",
          },
                  
        } : {
          primary:{
            main: colors.black[600],
          },
          secondary: {
            main: colors.green[600],

          },
          neutral: {
            dark: colors.indigo[800],
            main: colors.indigo[600],
            light: colors.indigo[100],

          },
          backgroundc:{
            default: '#000000',
          },
          cards:{
            container: "#915F6D"
          }
          
        }
        )
       },
       typography: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 14,
        },
       },
    };


};

// context for color mode
export const ColorModeContext = createContext({
  togColorMode: () => {}
});

export const useMode = () => {
  const [mode, setMode] = useState("dark")
  const colorMode = useMemo(
    () => ({
      togColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
}
 