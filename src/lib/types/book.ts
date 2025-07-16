export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  quantity: string;
  category: string;
}
export interface PaginationResponse<T> {
  code: number;
  success: boolean;
  message: string;
  data: {
    current_page: number;
    data: T[];
    per_page: number;
    total_items: number;
    total_pages: number;
  };
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
export interface Books {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  id: string;
  title: string;
  author: string;
  isbn: string;
  quantity: string;
  category: string;
}
export interface Borrow {
  id: string;
  book_id: string;
  user_id: string;
  borrow_date: string;
  return_date: string | null;
  Book: Book;
  User: User;
}

