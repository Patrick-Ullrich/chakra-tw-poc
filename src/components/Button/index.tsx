import React from "react";
import { Button as UiButton } from "../../../ui/Button";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return <UiButton>{children}</UiButton>;
};
