// import React from "react";

// type Props = {
//   label: string;
// };

// const index = (props: Props) => {
//   const { label } = props;

//   return <button>{label}</button>;
// };

// export default index;

import styled from "styled-components";
import { LIGHT_COLORS_PALETTE } from "../../constants";

type Props = {
  variant: "default" | "danger" | "success" | "disable";
};

function selectBgColor(variant: "default" | "danger" | "success" | "disable") {
  switch (variant) {
    case "danger": {
      return LIGHT_COLORS_PALETTE.red;
    }
    default: {
      return LIGHT_COLORS_PALETTE.blue;
    }
  }
}

const Button = styled.button<Props>`
  background: ${(props) => selectBgColor(props.variant)};
  color: #f5f5f5;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 32px;
`;

export default Button;
