import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <h1 className={styles.title}>Not Found</h1>
      <Link to="/" className={styles.button}>
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
