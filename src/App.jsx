import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./pages";
import Wedding from "./pages/wedding";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/wedding-project",
    element: <Wedding />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
