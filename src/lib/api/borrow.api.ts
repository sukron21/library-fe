import { Borrow, PaginationResponse } from "../types/book";
import api from "./api.config";

export const getAllBorrow = async (): Promise<PaginationResponse<Borrow>> => {
  const res = await api.get<PaginationResponse<Borrow>>("/protected/record");
  return res.data;
};