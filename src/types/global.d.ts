

declare module "recharts";
declare module "react-day-picker";
declare module "cmdk";
declare module "vaul";
declare module "input-otp";
declare module "react-resizable-panels";
declare module "@radix-ui/*";
declare module "lucide-react";
declare module "react-hook-form";
declare module "*?raw";

/**
 * Embla carousel (embla-carousel-react)
 * Use `any` here so code that spreads/calls embla methods compiles reliably.
 */
declare module "embla-carousel-react" {
  export type UseEmblaCarouselType = [
    (el: HTMLElement | null) => void,
    // permissive `any` to allow method calls, property access, and spreading
    any
  ];

  // default hook export
  export default function useEmblaCarousel(options?: any, plugins?: any[]): UseEmblaCarouselType;

  // named export (if used)
  export { useEmblaCarousel };
}

/**
 * input-otp package
 *
 * Kept permissive to avoid parser issues in CI.
 */
declare module "input-otp" {
  export type InputOTPSlots = Record<string, unknown>;

  export interface InputOTPProps {
    length?: number;
    value?: string;
    onChange?: (value: string) => void;
    slots?: InputOTPSlots;
    [key: string]: unknown;
  }

  const InputOTP: import("react").ComponentType<InputOTPProps>;
  export default InputOTP;

  export const inputOTPContext: import("react").Context<unknown>;
  export function useInputOTP(): {
    value: string;
    setValue: (v: string) => void;
    slots?: InputOTPSlots;
    [key: string]: unknown;
  };
}

/**
 * Generic global augmentation.
 */
declare global {
  type LooseObject = Record<string, unknown>;
}

export {};
