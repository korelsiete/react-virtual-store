export interface CartProductProps extends CartProduct {
  onChange: (id: number, qty: number) => void;
}
