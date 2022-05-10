import { useTheme } from "../../theme/styled-components";
import { TButtons } from "./TButton";

export const useGenerateButtonData = () => {
  const themeContext = useTheme();

  const spacing = themeContext.spacing;

  const buttonData: TButtons = {
    sizeVariants: {
      large: {
        fontVariant: "paragraph",
        padding: `${spacing[4]}px ${spacing[8]}px`,
      },
      small: {
        fontVariant: "paragraph",
        padding: `${spacing[2]}px ${spacing[4]}px`,
      },
    },
    styleVariants: {
      primary: {
        disabled: {
          // active
          activeBackgroundColor: themeContext.colors.primaryDisabled,
          activeFontColor: themeContext.colors.onPrimary,

          // hover
          hoverBackgroundColor: themeContext.colors.primaryDisabled,
          hoverFontColor: themeContext.colors.onPrimary,

          // none
          noneBackgroundColor: themeContext.colors.primaryDisabled,
          noneFontColor: themeContext.colors.onPrimary,
        },
        enabled: {
          // active
          activeBackgroundColor: themeContext.colors.primaryActive,
          activeFontColor: themeContext.colors.onPrimary,

          // hover
          hoverBackgroundColor: themeContext.colors.primaryHover,
          hoverFontColor: themeContext.colors.onPrimary,

          // none
          noneBackgroundColor: themeContext.colors.primary,
          noneFontColor: themeContext.colors.onPrimary,
        },
      },
      secondary: {
        enabled: {
          // active
          activeBackgroundColor: themeContext.colors.surfaceActive,
          activeFontColor: themeContext.colors.onSurface,

          // hover
          hoverBackgroundColor: themeContext.colors.surfaceHover,
          hoverFontColor: themeContext.colors.onSurface,

          // none
          noneBackgroundColor: themeContext.colors.surface,
          noneFontColor: themeContext.colors.onSurface,
        },
        disabled: {
          // active
          activeBackgroundColor: themeContext.colors.surfaceDisabled,
          activeFontColor: themeContext.colors.onSurface,

          // hover
          hoverBackgroundColor: themeContext.colors.surfaceDisabled,
          hoverFontColor: themeContext.colors.onSurface,

          // none
          noneBackgroundColor: themeContext.colors.surfaceDisabled,
          noneFontColor: themeContext.colors.onSurface,
        },
      },
    },
  };
  return { buttonData };
};
