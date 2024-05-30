type Product = {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
  onsale: boolean;
};

export interface HomeProps {
  products: Array<Product>;
}
