import React, { HTMLAttributes } from "react";
import styles from './styles.module.css'

type CardProps = HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<CardProps> = (props) => {
  const { children,  ...restProps } = props;
  return (
    <div
      className={styles.card}
      {...restProps}
    >
      {children}
    </div>
  );
};
