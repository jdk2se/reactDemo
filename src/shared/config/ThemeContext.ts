import {createContext} from "react";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface ThemeContextPorps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextPorps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme';