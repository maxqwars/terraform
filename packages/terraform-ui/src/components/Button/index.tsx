import React from "react";
import styled from "styled-components";

/* Inner */
import { LIGHT_THEME, DARK_THEME } from "../../constants";

/* Styled component */

type RootButtonProps = {
  variant?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  size?: "normal" | "medium" | "big";
};

const ButtonSizes = {
  normal: "16pxp",
  medium: "32px",
  big: "64px",
};

const RootButton = styled.button<RootButtonProps>`
  /* common */
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  padding: 5px 10px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  cursor: pointer;
  font-stretch: normal;
  font-size: ${(props) =>
    props.size ? ButtonSizes[props.size] : ButtonSizes.normal};

  /* light */
  background: ${(props) =>
    props.variant ? LIGHT_THEME[props.variant].main : LIGHT_THEME.primary.main};
  color: ${(props) =>
    props.variant ? LIGHT_THEME[props.variant].text : LIGHT_THEME.primary.text};

  &:hover {
    box-shadow: ${(props) =>
        props.variant
          ? LIGHT_THEME[props.variant].main
          : LIGHT_THEME.primary.main}
      0px 1px 3px 0px;
  }

  @media (prefers-color-scheme: dark) {
    background: ${(props) =>
      props.variant ? DARK_THEME[props.variant].main : DARK_THEME.primary.main};
    color: ${(props) =>
      props.variant ? DARK_THEME[props.variant].text : DARK_THEME.primary.text};

    &:hover {
      box-shadow: ${(props) =>
          props.variant
            ? DARK_THEME[props.variant].main
            : DARK_THEME.primary.main}
        0px 1px 3px 0px;
    }
  }
`;

/* React component */
type Props = {
  label: string;
  variant?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  size?: "normal" | "medium" | "big";
};

const Button = (props: Props) => {
  return (
    <RootButton variant={props.variant} size={props.size}>
      {props.label}
    </RootButton>
  );
};

export default Button;
