export type ProductType = {
  _id?: string;
  id: number;
  name: string;
  category?: string;
  image: string;
  new_price: number;
  old_price: number;
  size?: string;
  star?: string;
  count?: number;
  rewiews?: ProductReviewsType[];
};
export type ProductReviewsType = {
  review?: string;
  star?: string;
  name?: string;
};
