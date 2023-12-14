import React from "react";
import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


import { Provider } from 'react-redux'; // Import Provider
import store from "./redux/Store";
import AdminLayout from "layouts/Admin/Admin.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";



const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}> {/* Use Provider to provide the store */}
    <ThemeContextWrapper>
      <BackgroundColorWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/admin/*" element={<AdminLayout />} />
            <Route
              path="*"
              element={<Navigate to="/admin/dashboard" replace />}
            />
          </Routes>
        </BrowserRouter>
      </BackgroundColorWrapper>
    </ThemeContextWrapper>
  </Provider>
);
