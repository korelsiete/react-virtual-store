import styles from "./Hero.module.css";
import { HeroProps } from "./Hero.types";

const Hero: React.FC<HeroProps> = ({ first, second }) => {
  return (
    <section className={styles["hero-section"]}>
      <article className={styles["hero-title"]}>
        <span className={styles["hero-span"]}>{first}</span>
        <span className={styles["hero-span"]}>{second}</span>
      </article>
    </section>
  );
};

export default Hero;
