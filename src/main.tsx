// import React from 'react'
// import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./assets/styles/reset.css"
import "antd/dist/reset.css"
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './views/tab/login/index.tsx';
import MyTable from './component/Table.tsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/app",
    element: <App />,
    children: [{
      path: "/app/ware",
      element: <MyTable />,
    },{
      path: "/app/product",
      element: <MyTable />
    },{
      path: "/app/order",
      element: <MyTable />
    }]
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);