export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 animate-fadeIn">
      <div className="text-center">
        <div className="w-14 h-14 border-4 border-orange-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="mt-5 text-gray-600 text-lg">Preparing your tools...</p>
      </div>
    </div>
  );
}
