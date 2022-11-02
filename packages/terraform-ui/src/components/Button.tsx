import React from "react";

type Props = {
  label: string;
};

const Button = (props: Props) => {
  return <button>{props.label}</button>;
};

export default Button;
