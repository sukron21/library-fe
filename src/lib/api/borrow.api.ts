import { Borrow, PaginationResponse } from "../types/book";
import { createsBorrow } from "../types/borrow";
import api from "./api.config";

export const getAllBorrow = async ( page: number = 1,
  limit: number = 10): Promise<PaginationResponse<Borrow>> => {
  const res = await api.get<PaginationResponse<Borrow>>("/protected/record", {
    params: {
      page,
      limit,
    },
  });
  return res.data;
};

export const createBorrow= async (data: Omit<createsBorrow, "id">): Promise<createsBorrow> => {
  const res = await api.post<createsBorrow>("/protected/record", data);
  return res.data;
};

export const deleteBorrow = async (id: string): Promise<{ success: boolean; message: string }> => {
  const res = await api.delete<{ success: boolean; message: string }>(`/protected/record/${id}`);
  return res.data;
};

export const updateBorrow = async (id: string, data: Partial<Omit<createsBorrow, "id">>): Promise<createsBorrow> => {
  const res = await api.put<createsBorrow>(`/protected/record/${id}`, data);
  return res.data;
};
