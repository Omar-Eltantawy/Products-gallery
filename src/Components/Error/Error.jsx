import { Link } from "react-router-dom";

const Error = ({ message = "Something went wrong!" }) => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Error</h1>
      <p className="text-gray-700 text-lg mb-6">{message}</p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Error;
