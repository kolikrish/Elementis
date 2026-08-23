import { ComponentProps } from "react";
import cn from "@/utils/cn";

type InputProps = ComponentProps<"input"> & {
  className?: string;
};
export default function Input({ className, ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className={cn(
        "w-full border-b border-[#66BB6A] bg-[#E8F5E9] px-4 py-3 text-xs text-[#0F1E16] placeholder-[#0F1E16]/50 outline-none md:px-6 md:text-base",
        className,
      )}
    />
  );
}
