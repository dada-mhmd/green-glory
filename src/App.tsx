import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

console.log('App component loading...');

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false
    }
  }
});

const App: React.FC = () => {
  console.log('App component rendering...');

  return (
    <QueryClientProvider client={queryClient} data-id="do6npf79r" data-path="src/App.tsx">
      <TooltipProvider data-id="agyr1o0n9" data-path="src/App.tsx">
        <BrowserRouter data-id="yfukhwo81" data-path="src/App.tsx">
          <Routes data-id="sye1dq1sk" data-path="src/App.tsx">
            <Route path="/" element={<HomePage data-id="ji8dg7fxs" data-path="src/App.tsx" />} data-id="n7lsr08v0" data-path="src/App.tsx" />
            <Route path="*" element={<NotFound data-id="4u48a8cb9" data-path="src/App.tsx" />} data-id="g6oostrvo" data-path="src/App.tsx" />
          </Routes>
        </BrowserRouter>
        <Toaster data-id="def0z2r0d" data-path="src/App.tsx" />
      </TooltipProvider>
    </QueryClientProvider>);

};

export default App;