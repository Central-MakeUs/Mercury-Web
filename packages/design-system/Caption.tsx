import type { ReactNode } from "react";

export const Caption = ({ children }: { children: ReactNode }) => {
  return (
    <div className="rounded-full w-fit px-[10px] py-[2px] bg-gradient-to-r from-main4-gradient-from to-main4-gradient-to">
      {children}
    </div>
  );
};
