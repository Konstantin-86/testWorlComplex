export type productType = {
  description: string;
  id: number;
  image_url: string;
  price: number;
  title: string;
};

export type ItemType = {
  amount: number;
  page: number;
  total: number;
  products: productType[];
};
