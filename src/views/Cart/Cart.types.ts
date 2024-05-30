export interface CartProps {
  total: number;
  cart: Array<CartProduct> | [];
  onChange: (id: number, qty: number) => void;
}
