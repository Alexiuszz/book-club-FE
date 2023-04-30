import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorHandlers/error-page.tsx";
import Layout from "./layouts/MainLayout/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />
  }
])


function App() {
  return <RouterProvider router={router} /* fallbackElement={<Fallback />} */ />;
}

export default App;
