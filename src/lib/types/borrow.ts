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
  Book?: Books;
  User?: User;
}

export interface createsBorrow {
  id?: string;
  book_id: string;
  Borrow_date?: string;
  ReturnDate: string | null;
}
