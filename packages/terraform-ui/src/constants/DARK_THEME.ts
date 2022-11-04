import { Theme } from "../types";
import DARK_COLORS_PALETTE from "./DARK_COLORS_PALETTE";

const { gray6, gray5, mint, red, blue, yellow, green, cyan } =
  DARK_COLORS_PALETTE;

const DAARK_THEME: Theme = {
  type: "dark",
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

export default DAARK_THEME;
