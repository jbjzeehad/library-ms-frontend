import { createBrowserRouter } from "react-router";
import App from "../App";
import BookDetail from "../pages/BookDetail";
import BookEdit from "../pages/BookEdit";
import BookList from "../pages/BookList";
import BookNew from "../pages/BookNew";
import BorrowBook from "../pages/BorrowBook";
import BorrowSummary from "../pages/BorrowSummary";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "books", element: <BookList /> },
      { path: "create-book", element: <BookNew /> },
      { path: "books/:id", element: <BookDetail /> },
      { path: "edit-book/:id", element: <BookEdit /> },
      { path: "borrow/:bookId", element: <BorrowBook /> },
      { path: "borrow-summary", element: <BorrowSummary /> },
    ],
  },
]);
