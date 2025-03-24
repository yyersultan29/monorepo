// Skeleton.tsx
import React from "react";
import styles from "./styles.module.css";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = "20px",
  style,
  ...rest
}) => {
  return (
    <div
      className={styles.skeleton}
      style={{
        width,
        height,
        ...style,
      }}
      {...rest}
    />
  );
};

export {Skeleton};
