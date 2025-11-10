import * as React from "react";
import { cn } from "../../lib/utils";
import { badgeVariants, type BadgeVariantProps } from "./badgeVariants";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, BadgeVariantProps {}

export default function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}
