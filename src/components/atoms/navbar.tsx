import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 w-screen">
      <div className="flex items-center pl-8 h-14">
        <div className="flex space-x-4">
          <Link
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded cursor-pointer transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/blog-page"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded cursor-pointer transition-colors duration-200"
          >
            Blog
          </Link>
          <Link
            href="/contact-page"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded cursor-pointer transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
