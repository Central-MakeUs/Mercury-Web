import { disassemble } from "es-hangul";

export function hangulIncludes(x: string, y: string) {
  const disassembledX = disassemble(x);
  const disassembledY = disassemble(y);

  return disassembledX.includes(disassembledY);
}
