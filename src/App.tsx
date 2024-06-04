import { RouterProvider, createBrowserRouter } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage.ts";
import productsJSON from "./assets/products.json";
import Cart from "./views/Cart";
import Details from "./views/Details";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import "./App.module.css";

const App = () => {
  const [products] = useLocalStorage("products", productsJSON);
  const [cart, saveCart] = useLocalStorage("cart", []);

  const totalPriceCart = cart.reduce(
    (acc: number, cartProduct: CartProduct) =>
      acc + cartProduct.price * cartProduct.qty,
    0
  );

  function getProduct(id: number) {
    return products.find((product: Product) => product.id === id);
  }

  function getCartProduct(id: number) {
    return cart.find((cartProduct: CartProduct) => cartProduct.id === id);
  }

  function addToCart(product: CartProduct): void {
    const updatedCart = [...cart, product];
    saveCart(updatedCart);
  }

  function deleteFromCart(id: number): void {
    const updatedCart = cart.filter(
      (cartProduct: CartProduct) => cartProduct.id !== id
    );
    saveCart(updatedCart);
  }

  function checkProductOnCart(id: number) : boolean {
    return cart.some((cartProduct: CartProduct) => cartProduct.id === id);
  }

  function clearCart(): void {
    saveCart([]);
  }

  function handleProductQuantity(id: number, quantity: number): void {
    const updatedCart = cart.map((cartProduct: CartProduct) => {
      if (cartProduct.id === id) return { ...cartProduct, qty: quantity };
      return cartProduct;
    });

    saveCart(updatedCart);
  }

  function handleOnClick(id: number, product: CartProduct): void {
    if (checkProductOnCart(id)) {
      deleteFromCart(id);
    } else {
      addToCart(product);
    }
  }

  const browserRouter = createBrowserRouter([
    { path: "/", element: <Home products={products} /> },
    {
      path: "/details/:id",
      element: <Details getProduct={getProduct} getCartProduct={getCartProduct} checkProductOnCart={checkProductOnCart} onClick={handleOnClick}  />,
    },
    {
      path: "/cart",
      element: (
        <Cart cart={cart} totalPrice={totalPriceCart} onChange={handleProductQuantity} deleteFromCart={deleteFromCart} clearCart={clearCart}/>
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
