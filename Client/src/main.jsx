import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router";
import AuthProvider from "./Provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div>
        <Toaster />
      </div>
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
