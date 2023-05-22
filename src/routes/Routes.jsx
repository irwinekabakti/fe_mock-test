import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement,
    // children
  },
]);

export default router;
