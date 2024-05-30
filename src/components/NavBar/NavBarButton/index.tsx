import { Link } from "react-router-dom";
import styles from "./NavBarButton.module.css";
import { NavBarButtonProps } from "./NavBarButton.types";

const NavBarButton: React.FC<NavBarButtonProps> = ({ title, link }) => {
  return (
    <li className={styles["nav-li"]}>
      <Link className={styles["nav-a"]} to={link}>
        {title}
      </Link>
    </li>
  );
};

export default NavBarButton;
