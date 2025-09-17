export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center text-center">
      <div>
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-gray-600 mb-6">This page could not be found.</p>
        <a
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
