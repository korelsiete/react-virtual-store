interface CartProduct {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  qty: number;
  color: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  colors: string[];
  onSale: boolean;
}
