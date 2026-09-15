import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-(--motion-fast) ease-(--ease-out) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-fg text-bg hover:bg-steel active:scale-[0.98]",
        ghost:
          "bg-transparent text-fg border border-line hover:border-line-strong hover:bg-bg-subtle",
        steel:
          "bg-bg-subtle text-steel border border-line hover:border-steel/50 hover:bg-bg-elevated",
      },
      size: {
        md: "h-11 px-5 text-sm rounded-[var(--radius-sm)]",
        lg: "h-12 px-6 text-sm rounded-[var(--radius-md)]",
        sm: "h-9 px-3 text-xs rounded-[var(--radius-sm)]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";
