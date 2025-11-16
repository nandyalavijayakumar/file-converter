export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md text-center">
        <h1 className="text-4xl font-bold text-orange-600 mb-3">404</h1>
        <p className="text-gray-600 mb-6">The page you’re looking for cannot be found.</p>

        <a
          href="/"
          className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
