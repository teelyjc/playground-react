import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Suspense, lazy, FunctionComponent } from "react";

import { RoutesPath } from "@/constants/routesPath";
import { LoadingScreen } from "@/components/LoadingScreen";

const HomePage = lazy(() => import("@/pages/HomePage"));
const NotFoundPage = lazy(() => import("@/pages/NotFound"));

const queryClient = new QueryClient();

export const App: FunctionComponent = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path={RoutesPath.HOME}
            element={
              <Suspense fallback={<LoadingScreen />}>
                <HomePage />
              </Suspense>
            }
          />

          <Route
            path={RoutesPath.NOTFOUND}
            element={
              <Suspense fallback={<LoadingScreen />}>
                <NotFoundPage />
              </Suspense>
            }
          />

          <Route path="/loadingScreen" element={<LoadingScreen />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
