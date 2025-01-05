import type { UseMutationOptions } from "@tanstack/react-query";

export type MutationParams<TData, TVariables, TError = Error> = TData extends (
  ...args: any[]
) => any
  ? Omit<UseMutationOptions<Awaited<ReturnType<TData>>, TError, TVariables>, "mutationFn">
  : Omit<UseMutationOptions<Awaited<TData>, TError, TVariables>, "mutationFn">;
