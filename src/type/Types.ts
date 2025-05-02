export type TopCategoriesType = {
    createdAt: string;
    description: string;
    id: number;
    name: string;
};

export type CategoriesProductIdTYpe = {
    items:
        | []
        | {
              categoryId: number;
              createdAt: string;
              description: string;
              id: number;
              imageUrl: string;
              name: string;
              price: string;
              stock: number;
              count: number;
          }[];
    limit: number;
    page: number;
    totalItems: number;
};

export type ProductIdType = {
    categoryId: number;
    createdAt: string;
    description: string;
    id: number;
    imageUrl: string;
    name: string;
    price: string;
    stock: number;
    count: number;
};

export type CardsDataType = {
    categoryId: number;
    createdAt: string;
    description: string;
    id: number;
    imageUrl: string;
    name: string;
    price: string;
    stock: number;
    count: number;
};

export type BannerType = {
    id: number;
    title: string;
    imageUrl: string;
    isActive: boolean;
    createdAt: string;
};

export type AuthType = {
    email: string;
    password: string;
};

export type UserType = {};

export type Order = {
    id: number;
    name: string;
    price: string;
    imageUrl: string;
};

export type FavoritesState = {
    items: CardsDataType[];
};

export type CartState = {
    items: ProductIdType[];
};

export type Product = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  stock: number;
  categoryId: number;
  createdAt: string;
}

export type OrderItem = {
  id: number;
  productId: number;
  orderId: number;
  price: number;
  quantity: number;
  product: Product;
}

export type Order1 = {
  id: number;
  customerId: number;
  totalPrice: number;
  status: string;
  createdAt: string;
  items: OrderItem[];
}