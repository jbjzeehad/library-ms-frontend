import { useNavigate, useParams } from "react-router";
import { useGetBookQuery, useUpdateBookMutation } from "../api/bookApi";
import BookForm from "../components/books/BookForm";
import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";
import { useToast } from "../hooks/useToast";
import type { BookGenre } from "../types/types";

export default function BookEdit() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: book, isLoading } = useGetBookQuery(id || "");
  const [updateBook] = useUpdateBookMutation();

  console.log(book);

  const { toast, showToast, hideToast } = useToast();

  const handleSubmit = async (bookData: {
    title: string;
    author: string;
    genre: BookGenre;
    isbn: string;
    description?: string;
    copies: number;
  }) => {
    if (!id) return;

    try {
      await updateBook({ id, changes: bookData }).unwrap();
      showToast("Book updated successfully", "success");
      navigate(`/books/${id}`);
    } catch (error) {
      showToast("Failed to update book", "error");
      console.log(error);
    }
  };

  if (isLoading || !book) return <Loader />;

  return (
    <div className="max-w-2xl mx-auto border p-3 my-3 rounded-lg border-teal-600 shadow-md">
      <h1 className="text-2xl font-bold mb-6">Edit Book</h1>

      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      )}

      <BookForm
        onSubmit={handleSubmit}
        initialData={{
          title: book.data.title,
          author: book.data.author,
          genre: book.data.genre,
          isbn: book.data.isbn,
          description: book.data.description,
          copies: book.data.copies,
        }}
      />
    </div>
  );
}
