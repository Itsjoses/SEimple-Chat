import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chat from "./pages/Chat";
import { socket, WebsocketProvider } from "./context/WebsocketContext";

// seluruh routing ditaruh pada router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Chat />,
  },
]);

// gunakan RouterProvider lalu masukkan value dari router
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WebsocketProvider value={socket}>
      <RouterProvider router={router} />
    </WebsocketProvider>
  </React.StrictMode>
);
