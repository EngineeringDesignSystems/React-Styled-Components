# Actionable Design Systems: React + styled-components

[![Netlify Status](https://api.netlify.com/api/v1/badges/c15acb86-19b0-4a66-8476-e57a672392f6/deploy-status)](https://app.netlify.com/sites/actionable-design-systems-react-styled-components/deploys)

- [Live Site](https://eds-react-styled-components.netlify.app/)
- [Figma Mockup](https://www.figma.com/file/zwUGIhow83YT0bCceds8Ow/Design-System-Starter?node-id=0%3A1)

## Overview

There are many ways to set up a design system that serves design and engineering equally. In this project we implement a general design system starter project with color tokens, typography tokens, and general spacing content to show an example of how to do this process across design ([See Figma Mockup](https://www.figma.com/file/zwUGIhow83YT0bCceds8Ow/Design-System-Starter?node-id=0%3A1)) and engineering (this project's code).

This Project features:

1. Both light and dark theme color tokens named the same accross Figma and the app:

| light Theme                                                                                                                                    | dark Theme                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="1512" alt="lightTheme" src="https://user-images.githubusercontent.com/5474124/181925917-68da7d07-1fca-40fe-8db4-1582dd05f0d4.png"> | <img width="1512" alt="darkTheme" src="https://user-images.githubusercontent.com/5474124/181929524-b6bd9a9e-5fa3-4a22-9052-b18e25bfa0c5.png"> |

2. A general Button component that consumes theme context and has an API that matches the Button component in Figma. The Properties + Variants in Figma directly correspond to the component's API structure and interraction styles.

3. A button that toggles the theme in the header of the page.

<img width="814" alt="Screen Shot 2022-05-13 at 11 48 35 AM" src="https://user-images.githubusercontent.com/5474124/168348244-facd0fec-adb8-437d-a6cd-969782adde43.png">

**Button JSON Structure**:
<img width="2782" alt="json" src="https://user-images.githubusercontent.com/5474124/167494527-39bdac91-23bd-47dc-a750-cb11d9996df9.png">

## Stack

This project:

1. Was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
2. Use [styled-components](https://styled-components.com/) for style utilities.
3. Has manually added Design tokens from Figma.

### Note:

In order to have the theme inside styled-components have the shape of our theme, we inject our theme's type (TTheme) in styled-components.ts and use this file's output instead of importing directly from "styled-components" -->

```
import * as baseStyled from "styled-components";
import { TTheme } from "./theme";

// STYLED-COMPONENTS THEME INJECTION
export const {
  createGlobalStyle,
  css,
  default: styled,
  keyframes,
  ServerStyleSheet,
  ThemeContext,
  ThemeProvider,
  useTheme,
} = baseStyled as unknown as baseStyled.ThemedStyledComponentsModule<TTheme>;
```

## Quick start

In order to run this on your local:

1. clone this repo
2. in the project folder, run:

```
yarn install
yarn start
```

## Testing

run

```
yarn test
```
