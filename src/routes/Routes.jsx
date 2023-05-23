import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout/RootLayout";
import Login from "../pages/Login/Login";
import Todo from "../pages/Todo/Todo";
import Error from "../components/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Login /> },
      { path: "/todo", element: <Todo /> },
    ],
  },
]);

export default router;
