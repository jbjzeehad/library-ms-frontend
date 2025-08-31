import { useGetBorrowSummaryQuery } from "../api/borrowApi";
import Loader from "../components/ui/Loader";

export default function BorrowSummary() {
  const { data: response, isLoading, isError } = useGetBorrowSummaryQuery();

  if (isLoading) return <Loader />;
  if (isError) return <div>Error loading borrow summary</div>;

  const summary = response || [];

  return (
    <div className=" mx-auto py-4 px-0.5">
      <h1 className="text-2xl font-bold mb-6">Borrow Summary</h1>

      {summary.length === 0 ? (
        <p>No borrow records found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-slate-50 border-4 border-teal-400  ">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border">Book Title</th>
                <th className="py-2 px-4 border">ISBN</th>
                <th className="py-2 px-4 border">Total Borrowed</th>
              </tr>
            </thead>
            <tbody>
              {summary.map((item) => (
                <tr key={item._id}>
                  <td className="py-2 px-4 border">{item.book.title}</td>
                  <td className="py-2 px-4 border">{item.book.isbn}</td>
                  <td className="py-2 px-4 border">{item.totalQuantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
