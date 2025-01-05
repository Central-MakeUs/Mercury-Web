import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { useFormField } from "./FormField";

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
}

export const FormDescription = forwardRef<HTMLParagraphElement, Props>(
  ({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();
    return <p ref={ref} id={formDescriptionId} className={className} {...props} />;
  },
);

FormDescription.displayName = "FormDescription";
