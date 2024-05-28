import { Link } from "react-router-dom";
import styles from "./NavBarButton.module.css";

type Props = {
  title: string;
  link: string;
};

const NavBarButton = ({ title, link }: Props) => {
  return (
    <li className={styles["nav-li"]}>
      <Link className={styles["nav-a"]} to={link}>
        {title}
      </Link>
    </li>
  );
};

export default NavBarButton;
