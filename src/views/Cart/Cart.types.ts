export interface CartProps {
  totalPrice: number;
  cart: Array<CartProduct> | [];
  onChange: (id: number, qty: number) => void;
  deleteFromCart: (id: number) => void;
  clearCart: () => void;
}
