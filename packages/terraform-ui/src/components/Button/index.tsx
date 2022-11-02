import React from "react";

type Props = {
  label: string;
};

const index = (props: Props) => {
  const { label } = props;

  return <button>{label}</button>;
};

export default index;
