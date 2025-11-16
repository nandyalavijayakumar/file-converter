"use client";

export default function ErrorPage({ error, reset }) {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold text-red-500 mb-3">
          Error Occurred
        </h2>

        <p className="text-gray-600 mb-6">
          Something went wrong while loading this page.
        </p>

        <button
          onClick={() => reset()}
          className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
}
