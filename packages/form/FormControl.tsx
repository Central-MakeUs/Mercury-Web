import { Slot, type SlotProps } from "@radix-ui/react-slot";
import { type ElementRef, forwardRef } from "react";
import { useFormField } from "./FormField";

type SlotType = ElementRef<typeof Slot>;

export const FormControl = forwardRef<SlotType, SlotProps>((props, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={error ? `${formDescriptionId} ${formMessageId}` : `${formDescriptionId}`}
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";
