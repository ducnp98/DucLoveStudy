import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BasicKnowledgeScreen from "./BasicKnowledge/BasicKnowledge";
import BasicCss from "./BasicCss/BasicCss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <App />,
  },
  {
    path: "basic-knowledge",
    element: <BasicKnowledgeScreen />,
  },
  {
    path: "basic-css",
    element: <BasicCss />,
  },
  {
    path: "*",
    element: <></>,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
