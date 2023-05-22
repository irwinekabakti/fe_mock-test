import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout/RootLayout";
import Login from "../pages/Login/Login";
import Todo from "../pages/Todo/Todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement,
    children: [
      { index: true, element: <Login /> },
      { path: "/todo", element: <Todo /> },
    ],
  },
]);

export default router;
