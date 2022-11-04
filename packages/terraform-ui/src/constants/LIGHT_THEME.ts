import { Theme } from "../types";
import LIGHT_COLORS_PALETTE from "./LIGHT_COLORS_PALETTE";

const { gray6, gray5, mint, red, blue, yellow, green, cyan } =
  LIGHT_COLORS_PALETTE;

const LIGHT_THEME: Theme = {
  type: "light",
  background: {
    default: gray6,
    paper: gray5,
  },
  text: {
    primary: "#000000",
    secondary: "#333333",
    disabled: "#bdbdbd",
    hint: "#bdbdbd",
  },
  primary: {
    main: blue,
    text: "#ffffff",
  },
  secondary: {
    main: mint,
    text: "#ffff",
  },
  error: {
    main: red,
    text: "#ffffff",
  },
  warning: {
    main: yellow,
    text: "#000000",
  },
  info: {
    main: cyan,
    text: "#ffff",
  },
  success: {
    main: green,
    text: "#ffffff",
  },
};

export default LIGHT_THEME;
