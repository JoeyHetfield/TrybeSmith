export interface Product {
  name: string;
  amount: string;
  id: number;
}

export interface User {
  username: string;
  vocation: string;
  level: number;
  password: string;
  id: number;
}

export interface Order {
  userId: number;
  id: number;
  productsIds: number[];
}