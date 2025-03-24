"use client";

import React from "react";
import { ButtonProps, ButtonVariantProps } from "./types";
import styles from './styles.module.css'

const Button: React.FC<ButtonProps> & ButtonVariantProps  = (props) => {
  // eslint-disable-next-line react/prop-types
  const {children, color = 'primary', size = 'm',...restProps} = props;

  const sizes = {
    s: styles.small,
    m: styles.medium,
    l: styles.large
  }
  return (
    <button
     className={`${styles.base} ${styles[color]} ${sizes[size]}`}
     {...restProps}
    >
      {children}
    </button>
  );
};


Button.primary = ({children,...rest}) => (
  <Button color="primary" {...rest}>
    {children}
  </Button>
)

Button.secondary = ({children,...rest}) => (
  <Button color="secondary" {...rest}>
    {children}
  </Button>
)

Button.ghost = ({children,...rest}) => (
  <Button color="ghost" {...rest}>
    {children}
  </Button>
)

export {Button}