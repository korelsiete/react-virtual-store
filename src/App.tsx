import { RouterProvider, createBrowserRouter } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage.js";
import productsJSON from "./assets/products.json";
import Cart from "./views/Cart";
import Details from "./views/Details";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import "./App.module.css";

const App = () => {
  const [products] = useLocalStorage("products", productsJSON);
  const [cart, saveCart] = useLocalStorage("cart", []);

  const total = cart.reduce(
    (acc: number, productCart: CartProduct) =>
      acc + productCart.price * productCart.qty,
    0
  );

  function handleQuantityProduct(id: number, quantity: number): void {
    const newCart = cart.map((productCart: CartProduct) => {
      if (productCart.id === id) return { ...productCart, qty: quantity };
      return productCart;
    });
    saveCart(newCart);
  }

  function handleAddToCart(product: CartProduct): void {
    const { id, colors, qty } = product;
    const isProductOnCart = cart.some(
      (productCart: CartProduct) => productCart.id === id
    );

    const newCart = isProductOnCart
      ? cart.map((productCart: CartProduct) => {
          if (productCart.id !== id) return productCart;
          return {
            ...productCart,
            colors: [...productCart.colors, ...colors],
            qty: productCart.qty + qty,
          };
        })
      : [...cart, product];

    saveCart(newCart);
  }

  const browserRouter = createBrowserRouter([
    { path: "/", element: <Home products={products} /> },
    { path: "/details/:id", element: <Details addToCart={handleAddToCart} /> },
    {
      path: "/cart",
      element: (
        <Cart cart={cart} total={total} onChange={handleQuantityProduct} />
      ),
    },
    { path: "/*", element: <NotFound /> },
  ]);

  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
};

export default App;
