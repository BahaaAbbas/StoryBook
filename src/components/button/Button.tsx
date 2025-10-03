import React from "react";
import "./Button.css";

type ButtonVariant = "primary" | "secondary" | "text";
type ButtonSize = "small" | "medium" | "large";
type ButtonColor = "blue" | "red" | "green";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  color = "blue",
  children,
  ...props
}) => {
  return (
    <button className={`btn ${variant} ${size} ${color}`} {...props}>
      {children}
    </button>
  );
};
