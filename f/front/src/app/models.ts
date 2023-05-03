export interface Category {
  id: number;
  title: string;
  logo: string;
}

export interface AuthToken {
  token: string;
  user_id: number;
  is_superuser: boolean;
}

export interface User{
  id: number;
  username: string;
  password: string,
  email: string;
  is_superuser: boolean;
}

export interface Product {
  id: number;
  title: string;
  category: number;
  description: string;
  price: number;
  logo: string;
}

export interface UserCart{
  id: number;
  product: number;
  user: number;
}

export interface UserInfo{
  id: number;
  user: number;
  country: string;
  city: string;
  street: string;
  house: number;
}
