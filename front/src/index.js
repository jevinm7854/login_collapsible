import React from "react";
import ReactDOM from "react-dom/client";
import RouteNav from "./components/RouteNav";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <CookiesProvider>
      <RouteNav />
    </CookiesProvider>
  </div>
);
