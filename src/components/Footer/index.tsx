import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div id="footer" className={styles["footer-container"]}>
        <ul className={styles["footer-ul"]}>
          <li className={styles["footer-main-item"]}>
            <Link className={styles["footer-a"]} to="#">
              Ofertas
            </Link>
          </li>
          <li className={styles["footer-li"]}>
            <Link className={styles["footer-a"]} to="#">
              Laptops
            </Link>
          </li>
          <li className={styles["footer-li"]}>
            <Link className={styles["footer-a"]} to="#">
              Audio
            </Link>
          </li>
          <li className={styles["footer-li"]}>
            <Link className={styles["footer-a"]} to="#">
              Auriculares
            </Link>
          </li>
        </ul>
        <ul className={styles["footer-ul"]}>
          <li className={styles["footer-main-item"]}>
            <Link className={styles["footer-a"]} to="#">
              Cómo comprar
            </Link>
          </li>
          <li className={styles["footer-li"]}>
            <Link className={styles["footer-a"]} to="#">
              Formas de pago
            </Link>
          </li>
          <li className={styles["footer-li"]}>
            <Link className={styles["footer-a"]} to="#">
              Envios
            </Link>
          </li>
          <li className={styles["footer-li"]}>
            <Link className={styles["footer-a"]} to="#">
              Devoluciones
            </Link>
          </li>
        </ul>
        <ul className={styles["footer-ul"]}>
          <li className={styles["footer-main-item"]}>
            <Link className={styles["footer-a"]} to="#">
              Costos y tarifas
            </Link>
          </li>
          <li className={styles["footer-li"]}>
            <Link className={styles["footer-a"]} to="#">
              Impuestos
            </Link>
          </li>
          <li className={styles["footer-li"]}>
            <Link className={styles["footer-a"]} to="#">
              Facturación
            </Link>
          </li>
        </ul>
        <ul className={styles["footer-ul"]}>
          <li className={styles["footer-main-item"]}>
            <Link className={styles["footer-a"]} to="#">
              Mis pedidos
            </Link>
          </li>
          <li className={styles["footer-li"]}>
            <Link className={styles["footer-a"]} to="#">
              Pedir nuevamente
            </Link>
          </li>
          <li className={styles["footer-li"]}>
            <Link className={styles["footer-a"]} to="#">
              Lista de deseos
            </Link>
          </li>
        </ul>
        <ul className={styles["footer-ul"]}>
          <li className={styles["footer-main-item"]}>
            <Link className={styles["footer-a"]} to="#">
              Garantía
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles["footer-copyright"]}>Curso de HTML + CSS 2023</div>
    </footer>
  );
};

export default Footer;
