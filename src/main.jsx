import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/storeConfig.js";

import App from "./App.jsx";
import Home from "./components/home/Home.jsx";
import ProductList from "./components/productsList/ProductList.jsx";
import { Provider } from "react-redux";
import Cart from "./components/cart/Cart.jsx";
import Product from "./components/productsList/Product.jsx";
import Login from "./components/authentication/Login.jsx";
import SignUp from "./components/authentication/SignUp.jsx";
import AboutUs from "./components/AboutUs.jsx";
import CheckOut from "./components/cart/CheckOut.jsx";
import UserProfile from "./components/user/UserProfile.jsx";
import UserOrders from "./components/user/UserOrders.jsx";
import UserData from "./components/user/UserData.jsx";
import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/comprar",
        element: <ProductList />,
      },
      {
        path: "/comprar/:slug",
        element: <Product />,
      },
      {
        path: "/carrito",
        element: <Cart />,
      },
      {
        path: "/sobre-este-proyecto",
        element: <AboutUs />,
      },
      {
        path: "/usuario",
        element: <UserProfile />,
      },
      {
        path: "/usuario/ordenes",
        element: <UserOrders />,
      },
      {
        path: "/usuario/editar/:id",
        element: <UserData />,
      },
    ],
  },
  {
    path: "*", 
    element: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <SignUp />,
  },
  {
    path: "/checkout",
    element: <CheckOut />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
