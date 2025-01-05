import { DefaultProps, DefaultPropsProvider, ErrorBoundary, Suspense } from "@suspensive/react";
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { OverlayProvider } from "overlay-kit";
import { type PropsWithChildren, useState } from "react";

export const Providers = ({ children }: PropsWithChildren) => {
  const [defaultProps] = useState(() => new DefaultProps({ Delay: { ms: 200 } }));
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            throwOnError: true,
            staleTime: 1000 * 60 * 5,
            gcTime: 1000 * 60 * 10,
            retry: 1,
          },
        },
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultPropsProvider defaultProps={defaultProps}>
        <OverlayProvider>
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary onReset={reset} fallback={null}>
                <Suspense fallback={null}>{children}</Suspense>
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
          <ReactQueryDevtools initialIsOpen={false} />
        </OverlayProvider>
      </DefaultPropsProvider>
    </QueryClientProvider>
  );
};
