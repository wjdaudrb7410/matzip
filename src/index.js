import React from "react";
import ReactDOM from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "./Router";
import { HelmetProvider } from "react-helmet-async";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./i18n";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ChakraProvider theme={theme}>
          <Router />
        </ChakraProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
