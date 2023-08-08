import React from "react";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Builder, NotFound, Layout, Tester } from "~/components";
import { AppProvider } from "~/store";
import { GlobalStyle, theme } from "~/theme";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <NotFound />,
      path: "/",
      children: [
        {
          element: <Builder />,
          index: true,
        },
        {
          element: <Tester />,
          path: "tester",
        },
      ],
    },
  ]);

  return (
    <AppProvider>
      <StyleSheetManager enableVendorPrefixes shouldForwardProp={(): true => true}>
        <ThemeProvider {...{ theme }}>
          <GlobalStyle />
          <RouterProvider {...{ router }} />
        </ThemeProvider>
      </StyleSheetManager>
    </AppProvider>
  );
};

export { App };
