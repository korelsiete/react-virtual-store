type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  images: Array<string>;
  colors: Array<string>;
  onSale: boolean;
};

export interface DetailsProps {
  getProduct: (id: number) => Product;
  getCartProduct: (id: number) => CartProduct;
  checkProductOnCart: (id: number) => boolean;
  onClick: (id: number, product: CartProduct) => void;
}
