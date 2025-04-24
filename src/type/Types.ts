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

export type UserType = {}