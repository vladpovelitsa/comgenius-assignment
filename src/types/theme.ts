export type TTheme = 'light' | 'dark'
export interface IThemeContextProps {
    theme: TTheme,
    switchTheme: () => void;
}
