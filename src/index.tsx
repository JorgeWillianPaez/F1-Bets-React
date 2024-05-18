import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Drivers from "./Routes/Drivers";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Race from "./Routes/Race";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/drivers",
    element: <Drivers />,
  },
  {
    path: "/race",
    element: <Race />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="backgroundOpacity" />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
