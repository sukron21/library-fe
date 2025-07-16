export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface LoginResponse {
  data:{
    access_token: string;
    refresh_token: string;
}
}
export interface User {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  id: string;
  name: string;
  email: string;
}

export interface RegisResponse {
  code: number;
  success: boolean;
  message: string;
  data: User;
}
