"use client";
import { 
  Button as AriaButton,
  type ButtonProps as AriaButtonProps } from 'react-aria-components/Button';
import './Button.css';

interface ButtonProps extends AriaButtonProps {
  /**
   * @default 'solid'
   */
  variant?: 'solid' | 'outline' | 'text';
}

export function Button({ variant = 'solid', ...props }: ButtonProps) {
  return (
    <AriaButton {...props} className={`button-base button button--${variant}`} data-variant={variant}>
      {props.children}
    </AriaButton>
  );
}