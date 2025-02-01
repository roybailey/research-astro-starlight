import {create} from "zustand";
import {persist, createJSONStorage} from 'zustand/middleware'

const KEY_THEME_STATE = "ThemeState";

export type Theme = "dark" | "light" | "system"

export type ThemeState = {
    // data
    theme: Theme;
    // operations
    setTheme: (theme: Theme) => void;
    toggleDarkMode: () => void;
    // record input
};

export const useThemeStore = create(
    persist<ThemeState>(
        (set, get) => ({
            theme: "light",
            // operations
            setTheme: (theme: Theme) => {
                set({
                    theme: theme,
                });
            },
            toggleDarkMode: () => {
                set((_) => ({
                    theme: (_.theme === "dark" ? "light" : "dark"),
                }));
            },
        }),
        {
            name: KEY_THEME_STATE,
            storage: createJSONStorage(()=>sessionStorage),
        },
    ),
);
