import React, { PropsWithChildren } from "react";
import * as motion from "motion/react-client";
import cn from "@/utils/cn";
import { MotionProps } from "motion/react";
type BorderedButtonProps = PropsWithChildren &
  MotionProps & {
    className?: string;
  };
export default function BorderedButton({
  children,
  className,
  ...props
}: BorderedButtonProps) {
  return (
    <motion.div
      initial="initial"
      whileHover="whileHover"
      className={cn("relative", className)}
      {...props}
    >
      {children}
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 250 100"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M1 99 H249 V1 H1 Z"
            strokeWidth="2px"
            stroke="currentColor"
            fill="none"
          />
        </svg>
      </div>
    </motion.div>
  );
}
