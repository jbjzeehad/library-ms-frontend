import { useNavigate } from "react-router";
import { useCreateBookMutation } from "../api/bookApi";
import BookForm from "../components/books/BookForm";
import Toast from "../components/ui/Toast";
import { useToast } from "../hooks/useToast";
import type { BookGenre } from "../types/types";

export default function BookNew() {
  const navigate = useNavigate();
  const [createBook] = useCreateBookMutation();
  const { toast, showToast, hideToast } = useToast();

  const handleSubmit = async (bookData: {
    title: string;
    author: string;
    genre: BookGenre;
    isbn: string;
    description?: string;
    copies: number;
    available?: boolean;
  }) => {
    try {
      await createBook(bookData).unwrap();
      showToast("Book created successfully", "success");
      navigate("/books");
    } catch (error) {
      showToast("Failed to create book", "error");
      console.log(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-3 border p-3 rounded-lg border-teal-700">
      <h1 className="text-2xl font-bold mb-6">Add New Book</h1>
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      )}
      <BookForm onSubmit={handleSubmit} />
    </div>
  );
}
