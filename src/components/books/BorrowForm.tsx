import { useState } from "react";
import Button from "../ui/Button";

interface BorrowFormProps {
  availableCopies: number;
  onSubmit: (quantity: number, dueDate: string) => void;
}

export default function BorrowForm({
  availableCopies,
  onSubmit,
}: BorrowFormProps) {
  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(quantity, dueDate);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Available Copies: {availableCopies}
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Quantity
        </label>
        <input
          type="number"
          min="1"
          max={availableCopies}
          value={quantity}
          onChange={(e) =>
            setQuantity(Math.min(availableCopies, parseInt(e.target.value)))
          }
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Due Date
        </label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          min={new Date().toISOString().split("T")[0]}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <Button type="submit" className="w-full">
        Borrow Book
      </Button>
    </form>
  );
}
