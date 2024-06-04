import { Link } from "react-router-dom";
import styles from "./ProductCart.module.css";
import { CartProductProps } from "./ProductCart.types";

const ProductCart: React.FC<CartProductProps> = ({
  id,
  image,
  title,
  color,
  description,
  qty,
  price,
  onChange,
  onClick
}) => {
  return (
    <article className={styles["product-cart"]}>
      <img className={styles["product-img"]} src={image} alt={title} />
      <div className={styles["product-details"]}>
        <Link to={`/details/${id}`} className={styles["product-title"]}>{title}</Link>
        <span className={styles["product-description"]}>{color}</span>
        <p className={styles["product-description"]}>{description}</p>
        <input
          className={styles["product-input"]}
          type="number"
          name="quantity"
          min="1"
          id={String(id)}
          value={qty}
          onChange={(event) => onChange(id, Number(event.target.value))}
        />
      </div>
      <strong className={styles["price"]}>$ {price * qty}</strong>
      <i className={styles["delete"]} onClick={() =>onClick(id)}>X</i>
    </article>
  );
};

export default ProductCart;
