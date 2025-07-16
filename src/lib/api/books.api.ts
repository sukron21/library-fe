import api from "./api.config";
import type { Book, PaginationResponse } from "../types/book";

export const getAllBooks = async (): Promise<PaginationResponse<Book>> => {
  const res = await api.get<PaginationResponse<Book>>("/protected/books");
  return res.data;
};

export const getBookById = async (id: string): Promise<Book> => {
  const res = await api.get<Book>(`/protected/books/${id}`);
  return res.data;
};

export const createBook = async (data: Omit<Book, "id">): Promise<Book> => {
  const res = await api.post<Book>("/protected/books", data);
  return res.data;
};

export const updateBook = async (id: string, data: Partial<Omit<Book, "id">>): Promise<Book> => {
  const res = await api.put<Book>(`/protected/books/${id}`, data);
  return res.data;
};

export const deleteBook = async (id: string): Promise<{ success: boolean; message: string }> => {
  const res = await api.delete<{ success: boolean; message: string }>(`/protected/books/${id}`);
  return res.data;
};
