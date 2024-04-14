export type cartType = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};
export type CartContextType = {
  cart: cartType[];
  addToCart: (product: cartType) => void;
};
