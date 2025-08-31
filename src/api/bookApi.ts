import { baseApi } from "./baseApi";
import type { IBook, BookListResponse } from "../types/types";

export const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<
      BookListResponse,
      { page?: number; limit?: number; filter?: string }
    >({
      query: ({ page = 1, limit = 10, filter }) =>
        `/books?page=${page}&limit=${limit}${
          filter ? `&filter=${filter}` : ""
        }`,
      providesTags: ["Book"],
    }),
    getBook: builder.query<IBook, string>({
      query: (id) => `/books/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Book", id }],
    }),
    createBook: builder.mutation<IBook, Partial<IBook>>({
      query: (body) => ({
        url: "/books",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Book"],
    }),
    updateBook: builder.mutation<
      IBook,
      { id: string; changes: Partial<IBook> }
    >({
      query: ({ id, changes }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: changes,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "Book", id },
        "Book",
      ],
    }),
    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Book"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
