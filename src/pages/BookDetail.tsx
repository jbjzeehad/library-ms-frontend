import { Link, useParams } from "react-router";
import { useGetBookQuery } from "../api/bookApi";
import Loader from "../components/ui/Loader";

export default function BookDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: response, isLoading, isError } = useGetBookQuery(id || "");

  console.log(response);

  if (isLoading) return <Loader />;
  if (isError || !response?.data) return <div>Error loading book</div>;

  const book = response.data;

  return (
    <div className="max-w-2xl mx-auto my-3 border border-teal-400 rounded-md">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
        <p className="text-gray-600 mb-1">by {book.author}</p>
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-4">
          {book.genre}
        </span>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="font-semibold">ISBN</h3>
            <p>{book.isbn}</p>
          </div>
          <div>
            <h3 className="font-semibold">Availability</h3>
            <p>{book.available ? "Available" : "Not Available"}</p>
          </div>
          <div>
            <h3 className="font-semibold">Copies</h3>
            <p>{book.copies}</p>
          </div>
        </div>

        {book.description && (
          <div className="mb-6">
            <h3 className="font-semibold">Description</h3>
            <p className="text-gray-700">{book.description}</p>
          </div>
        )}

        <div className="flex space-x-3">
          <Link to="/books" className="ml-auto">
            <button className="border-2 px-4 w-full py-2 rounded-xl bg-teal-600 text-white font-bold">
              Back to List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
