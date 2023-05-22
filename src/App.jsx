import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";

const App = () => {
  return (
    <>
      <h1>Test</h1>

      <RouterProvider router={router} />
    </>
  );
};

export default App;
