import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import NavBar from "../../components/NavBar";
import styles from "./Cart.module.css";
import { CartProps } from "./Cart.types";
import ProductCart from "./ProductCart";

const Cart: React.FC<CartProps> = ({ cart, total, onChange }) => {
  return (
    <>
      <NavBar />
      <Hero first="mi" second="carrito" />
      <main className={styles["main-cart"]}>
        <section className={styles["cart-section"]}>
          {cart.map((productCart: CartProduct) => (
            <ProductCart
              key={productCart.id}
              id={productCart.id}
              title={productCart.title}
              description={productCart.description}
              image={productCart.image}
              price={productCart.price}
              qty={productCart.qty}
              colors={productCart.colors}
              onChange={onChange}
            />
          ))}
        </section>
        <section className={styles["cart-resume"]}>
          <div className={styles["cart-data"]}>
            <h2 className={styles["cart-title"]}>Resumen del pedido</h2>
            <div className={styles["cart-total"]}>
              <h3>Total</h3>
              <strong className={styles["cart-price"]}>${total}</strong>
            </div>
            <small className={styles["cart-tax"]}>
              Incluye impuesto PAIS y percepción AFIP.
            </small>
          </div>
          <button className={styles["cart-btn"]} id="buy" type="button">
            COMPRAR
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
