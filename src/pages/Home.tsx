import { Link } from "react-router";

export default function Home() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-6 text-teal-900">
        Welcome to Library Management
      </h1>
      <p className="text-xl mb-8 text-teal-950">
        Manage your books and track borrows efficiently
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          to="/books"
          className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
        >
          Enter the Library
        </Link>
      </div>
    </div>
  );
}
