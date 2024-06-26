import { useState } from "react";
import { useParams } from "react-router-dom";
import { DetailsProps } from "./Details.types";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import styles from "./Details.module.css";

const Details: React.FC<DetailsProps> = ({getProduct, getCartProduct, checkProductOnCart, onClick}) => {
  const { id: ParamsId } = useParams();
  const { title, images, colors, description, price, id } = getProduct(Number(ParamsId));
  const { qty: qtyCart, color: colorCart } = getCartProduct(id) || { qty: 1, color: colors[0] };
  const [quantity, setQuantity] = useState(qtyCart);
  const [colorInput, setColorInput] = useState(colorCart);
  const subtotal = quantity * price;
  const product: CartProduct = {
    id,
    title,
    description,
    image: images[0],
    price,
    qty: quantity,
    color: colorInput
  };

  return (
    <>
      <NavBar />
      <main>
        <div className={styles["details-container"]}>
          <div id="details" className={styles["columns-container"]}>
            <section className={styles["product-images-block"]}>
              <div className={styles["product-images"]}>
                {images.map((imageUrl, index) => (
                  <img
                    key={index}
                    className={styles["mini-img"]}
                    src={imageUrl}
                    alt={title}
                  />
                ))}
              </div>
              <img
                className={styles["big-img"]}
                id="big-img"
                src={images[0]}
                alt={title}
              />
            </section>

            <section className={styles["product-description-block"]}>
              <h1 className={styles["product-title"]}>{title}</h1>
              <form className={styles["product-selector"]}>
                <fieldset className={styles["product-fieldset"]}>
                  <label className={styles["product-label"]} htmlFor="color">
                    Color
                  </label>
                  <select
                    className={styles["product-select"]}
                    id="color"
                    disabled={checkProductOnCart(id)}
                    value={colorInput}
                    onChange={(event) => setColorInput(event.target.value)}
                  >
                    {colors.map((color, index) => (
                      <option key={index} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                </fieldset>
              </form>
              <div className={styles["product-description"]}>
                <span className={styles["product-label"]}>Descripción</span>
                <p>{description}</p>
              </div>
            </section>

            <section className={styles["product-checkout-block"]}>
              <div className={styles["checkout-container"]}>
                <span className={styles["checkout-total-label"]}>Total:</span>
                <h2 id="price" className={styles["checkout-total-price"]}>
                  ${subtotal}
                </h2>
                <p className={styles["checkout-description"]}>
                  Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
                  50711 haciendo la solicitud en AFIP.
                </p>
                <ul className={styles["checkout-policy-list"]}>
                  <li>
                    <span className={styles["policy-icon"]}>
                      <img src="/truck.png" alt="Truck" />
                    </span>
                    <span className={styles["policy-desc"]}>
                      Agrega el producto al carrito para conocer los costos de
                      envío
                    </span>
                  </li>
                  <li>
                    <span className={styles["policy-icon"]}>
                      <img src="/plane.png" alt="Plane" />
                    </span>
                    <span className={styles["policy-desc"]}>
                      Recibí aproximadamente entre 10 y 15 días hábiles,
                      seleccionando envío normal
                    </span>
                  </li>
                </ul>
                <div className={styles["checkout-process"]}>
                  <div className={styles["top"]}>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      disabled={checkProductOnCart(id)}
                    />
                    <button
                      type="button"
                      className={checkProductOnCart(id) ? styles["primaryButton--remove"] : styles["primaryButton--add"]}
                      onClick={() => onClick(id, product)}
                    >
                      {checkProductOnCart(id) ? "Remover del carrito" : "Agregar al carrito"}
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className={styles["sales-block"]}>
            <h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
            <div
              id="product-container"
              className={styles["product-container"]}
            ></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Details;
