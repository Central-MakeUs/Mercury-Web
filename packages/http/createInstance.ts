import ky, { type Options } from "ky";

export const createInstance = (options?: Options) => ky.create(options);
