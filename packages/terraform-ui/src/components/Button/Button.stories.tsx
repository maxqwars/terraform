import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./";

export default {
  title: "TerraformUI Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const UIButton = Template.bind({});

UIButton.args = {
  variant: "primary",
  label: "Button",
};
