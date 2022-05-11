/**
 * TYPOGRAPHY
 */

// typography interfaces

// for variants
interface ITypographyStyles {
  fontSize: number;
  textDecoration: string;
  fontFamily: string;
  fontWeight: number;
  fontStyle: string;
  fontStretch: string;
  letterSpacing: number;
  lineHeight: number;
  paragraphIndent: number;
  paragraphSpacing: number;
  textCase: string;
}

// for Theme
export interface ITypography {
  heading1: ITypographyStyles;
  heading2: ITypographyStyles;
  heading3: ITypographyStyles;
  heading4: ITypographyStyles;
  heading5: ITypographyStyles;
  paragraph: ITypographyStyles;
}
export type TThemeTypographyKey = keyof ITypography; // for props
export type TThemeTypographyVariant = ITypographyStyles; // for objects storing font variants

// typography object
const typography: ITypography = {
  heading1: {
    fontSize: 48.83000183105469,
    textDecoration: "none",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",
    fontStretch: "normal",
    letterSpacing: 0,
    lineHeight: 58.596,
    paragraphIndent: 0,
    paragraphSpacing: 0,
    textCase: "none",
  },
  heading2: {
    fontSize: 39.060001373291016,
    textDecoration: "none",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",
    fontStretch: "normal",
    letterSpacing: 0,
    lineHeight: 46.872,
    paragraphIndent: 0,
    paragraphSpacing: 0,
    textCase: "none",
  },
  heading3: {
    fontSize: 31.25,
    textDecoration: "none",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",
    fontStretch: "normal",
    letterSpacing: 0,
    lineHeight: 37.5,
    paragraphIndent: 0,
    paragraphSpacing: 0,
    textCase: "none",
  },
  heading4: {
    fontSize: 25,
    textDecoration: "none",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",
    fontStretch: "normal",
    letterSpacing: 0,
    lineHeight: 30,
    paragraphIndent: 0,
    paragraphSpacing: 0,
    textCase: "none",
  },
  heading5: {
    fontSize: 20,
    textDecoration: "none",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",
    fontStretch: "normal",
    letterSpacing: 0,
    lineHeight: 24,
    paragraphIndent: 0,
    paragraphSpacing: 0,
    textCase: "none",
  },
  paragraph: {
    fontSize: 16,
    textDecoration: "none",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",
    fontStretch: "normal",
    letterSpacing: 0,
    lineHeight: 19.2,
    paragraphIndent: 0,
    paragraphSpacing: 0,
    textCase: "none",
  },
};

/**
 * SHARED THEME VALUES
 */

// Shared theme value interfaces

// for theme
interface ISharedThemeValues {
  typography: ITypography;
  spacing: number[];
}

// Shared theme value object
const sharedThemeValues: ISharedThemeValues = {
  typography: typography,
  spacing: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64],
};

/**
 * COLORS
 */

// Color interfaces
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
export type Color = RGB | RGBA | HEX;

// for theme colors object
export interface IPrimitiveColors {
  gray50: Color;
  gray100: Color;
  gray200: Color;
  gray300: Color;
  gray400: Color;
  gray500: Color;
  gray600: Color;
  gray700: Color;
  gray800: Color;
  gray900: Color;
  indigo50: Color;
  indigo100: Color;
  indigo300: Color;
  indigo400: Color;
  indigo500: Color;
  indigo600: Color;
  indigo700: Color;
  indigo800: Color;
  indigo900: Color;
}

// for theme colors object

export interface ICoreColors {
  background: Color;
  onBackground: Color;
  surface: Color;
  surfaceActive: Color;
  surfaceDisabled: Color;
  surfaceHover: Color;
  onSurface: Color;
  primary: Color;
  primaryActive: Color;
  primaryDisabled: Color;
  primaryHover: Color;
  onPrimary: Color;
}

// for theme object
export type TThemeColors = IPrimitiveColors & ICoreColors;
// for color props
export type TThemeColorKey = keyof TThemeColors;

// Color Values
export const primitiveColors: IPrimitiveColors = {
  gray50: "#f9fafbff",
  gray100: "#f3f4f6ff",
  gray200: "#e5e7ebff",
  gray300: "#d1d5dbff",
  gray400: "#9ca3afff",
  gray500: "#6b7280ff",
  gray600: "#4b5563ff",
  gray700: "#374151ff",
  gray800: "#1f2937ff",
  gray900: "#111827ff",
  indigo50: "#eff3feff",
  indigo100: "#e0e7ffff",
  indigo300: "#a5b4fcff",
  indigo400: "#818cf8ff",
  indigo500: "#6366f1ff",
  indigo600: "#4f46e5ff",
  indigo700: "#3f40c2ff",
  indigo800: "#3730a3ff",
  indigo900: "#312e81ff",
};

export const lightThemeColors: ICoreColors = {
  background: "#e5e7ebff",
  onBackground: "#111827ff",
  surface: "#f3f4f6ff",
  surfaceActive: "#9ca3afff",
  surfaceDisabled: "#6b7280ff",
  surfaceHover: "#d1d5dbff",
  onSurface: "#111827ff",
  primary: "#3730a3ff",
  primaryActive: "#312e81ff",
  primaryDisabled: "#4b5563ff",
  primaryHover: "#3f40c2ff",
  onPrimary: "#f9fafbff",
};

export const darkThemeColors: ICoreColors = {
  onBackground: "#f9fafbff",
  onPrimary: "#f9fafbff",
  onSurface: "#f9fafbff",
  primary: "#3730a3ff",
  surface: "#374151ff",
  background: "#111827ff",
  surfaceHover: "#4b5563ff",
  primaryHover: "#3f40c2ff",
  primaryActive: "#312e81ff",
  surfaceActive: "#1f2937ff",
  primaryDisabled: "#4b5563ff",
  surfaceDisabled: "#6b7280ff",
};

export const coreColorsKeys = [
  "background",
  "surface",
  "onSurface",
  "onBackground",
  "primary",
  "onPrimary",
  "primaryHover",
  "primaryActive",
  "surfaceHover",
  "surfaceActive",
  "primaryDisabled",
  "surfaceDisabled",
];
export const typographyKeys = [
  "heading1",
  "heading2",
  "heading3",
  "heading4",
  "heading5",
  "paragraph",
];

/**
 * THEMES
 */

// Theme interface

export type TTheme = {
  colors: TThemeColors;
  typography: ITypography;
  spacing: number[];
};

// Theme objects
export const lightTheme: TTheme = {
  colors: {
    ...lightThemeColors,
    ...primitiveColors,
  },
  ...sharedThemeValues,
} as const;
export const darkTheme: TTheme = {
  colors: {
    ...darkThemeColors,
    ...primitiveColors,
  },
  ...sharedThemeValues,
} as const;
