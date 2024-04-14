type cartType = {
  id: number;
  quantity: number;
};

export type SendCartType = {
  phone: string;
  cart: cartType[];
};
