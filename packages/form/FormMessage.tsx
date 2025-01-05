import { useFormField } from "./FormField";

import { type HTMLAttributes, forwardRef } from "react";

export const FormMessage = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
      return null;
    }

    return (
      <p data-error={error} ref={ref} id={formMessageId} className={className} {...props}>
        {body}
      </p>
    );
  },
);
FormMessage.displayName = "FormMessage";
