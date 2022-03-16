export interface User {
  message: string;
  username: string;
  email: string;
  full_name: string;
  token: string;
}

export interface UserState {
  data: User;
  loading: boolean;
  error: string;
}

//user login olurken yapılacak dispatch lerin type olusturuluyor
interface LOGIN_START {
  type: 'LOGIN_START';
}

interface LOGIN_SUCCES {
  type: 'LOGIN_SUCCES';
  payload: User;
}

interface LOGIN_ERROR {
  type: 'LOGIN_ERROR';
}

export type UserAction = LOGIN_START | LOGIN_SUCCES | LOGIN_ERROR;