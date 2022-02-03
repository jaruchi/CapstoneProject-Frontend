export interface User {
  id: number;
  userName: string;
  emailAddress: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
  password?: string;
}

export interface LoginRespose {
  jwt: string;
}
