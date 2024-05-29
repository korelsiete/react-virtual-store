import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./views/Cart";
import Details from "./views/Details";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import "./App.module.css";

type CartProduct = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  qty: number;
  colors: string[];
};

const App = () => {
  const [cart, setCart] = useState(Array<CartProduct>);

  function handleAddToCart(product: CartProduct): void {
    const { id, colors, qty } = product;
    const isProductOnCart = cart.some((productCart) => productCart.id === id);

    const newCart = isProductOnCart
      ? cart.map((productCart) => {
          if (productCart.id !== id) return productCart;
          return {
            ...productCart,
            colors: [...productCart.colors, ...colors],
            qty: productCart.qty + qty,
          };
        })
      : [...cart, product];

    setCart(newCart);
  }

  const browserRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/details/:id", element: <Details addToCart={handleAddToCart} /> },
    { path: "/cart", element: <Cart cart={cart} /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
};

export default App;
