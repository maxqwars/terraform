export type Theme = {
  type: "light" | "dark";
  background: {
    default: string;
    paper: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
  };
  primary: {
    main: string;
    text: string;
  };
  secondary: {
    main: string;
    text: string;
  };
  error: {
    main: string;
    text: string;
  };
  warning: {
    main: string;
    text: string;
  };
  info: {
    main: string;
    text: string;
  };
  success: {
    main: string;
    text: string;
  };
};
