import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import NavBar from "../../components/NavBar";
import ProductCard from "../../components/ProductCard";
import styles from "./Home.module.css";
import { HomeProps } from "./Home.types";

const Home: React.FC<HomeProps> = ({ products }) => {
  return (
    <>
      <NavBar />
      <Hero first="tecnología" second="renovada" />
      <main>
        <div className={styles["product-container"]} id="products">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              images={product.images}
              price={product.price}
              onsale={product.onsale}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
