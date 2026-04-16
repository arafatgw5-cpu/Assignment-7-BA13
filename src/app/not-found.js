import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      
      {/* 404 Text */}
      <h1 className="text-7xl font-bold text-green-600">404</h1>

      {/* Message */}
      <h2 className="text-2xl font-semibold mt-4 text-gray-800">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      {/* Button */}
      <Link href="/">
        <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
          Go Back Home
        </button>
      </Link>

    </div>
  );
};

export default NotFound;