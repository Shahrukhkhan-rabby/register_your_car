export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-6xl font-extrabold mb-4 text-red-600">404</h1>
      <p className="text-xl mb-6">Sorry, the page you are looking for does not exist.</p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Go Back Home
      </a>
    </div>
  );
}
