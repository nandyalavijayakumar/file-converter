"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-md">
          <h1 className="text-3xl font-bold text-red-600 mb-3">
            Something went wrong
          </h1>
          <p className="text-gray-600 mb-6">
            Our system faced an unexpected issue. Please try again.
          </p>

          <button
            onClick={() => reset()}
            className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-lg"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
