import api from "./api.config";
import type { LoginRequest, RegisterRequest, LoginResponse, RegisResponse } from "../types/auth";
import Cookies from "js-cookie";

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const res = await api.post<LoginResponse>("/auth/login", {
    email: data.email,
  password: data.password,
  });
    console.log('res',res.data);
    
  // Simpan token ke cookie
  Cookies.set("access_token", res.data.data.access_token);
  Cookies.set("refresh_token", res.data.data.refresh_token);

  return res.data;
};

export const registered = async (data: RegisterRequest): Promise<RegisResponse> => {
    console.log('data21',data);
    
  const res = await api.post<RegisResponse>("/users", data);
  return res.data;
};
