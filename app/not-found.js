import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-9xl font-bold ">404</h1>
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="mt-2 text-gray-600 text-center max-w-md">
        The page you’re looking for might have been removed or is temporarily
        unavailable.
      </p>

      <Link
        href="/"
        className="mt-6 inline-block px-6 py-3 text-white bg-gray-500 rounded-lg shadow"
      >
        Back to Home
      </Link>
    </div>
  );
}
