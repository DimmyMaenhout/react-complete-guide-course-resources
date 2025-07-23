import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductsDetailPage from "./pages/ProductsDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> }, // door path te veranderen naar index:true maken wordt dit de default route dat moet getoond worden als de parent path "/"" moet getoond worden ipv een empty path
      { path: "products", element: <ProductsPage /> }, // het verwijderen van "/" zou van dit  absoluut path  een relatief path maken, dit zou willen zeggen dat de paths ge-append worden aan de wrapper route
      { path: "products/:productId", element: <ProductsDetailPage /> }, // : duid aan dat dit deel van het path dynamisch is!
    ],
  },
]);

// alternatieve manier om routes te definieren met jsx ipv objecten
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />}></Route>
//     <Route path="/products" element={<ProductsPage />}></Route>
//   </Route>
// );

// const router = createRoutesFromElements(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
