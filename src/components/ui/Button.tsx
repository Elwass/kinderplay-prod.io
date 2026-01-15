import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

const Button = ({ variant = "primary", className, ...props }: ButtonProps) => {
  return (
    <button
      className={[
        "inline-flex items-center justify-center font-semibold transition",
        variant === "primary"
          ? "bg-primary text-white"
          : "border-[1px] border-primary text-primary",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
};

export default Button;
