import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "FlickFinder",
  description: "A movie search and discovery app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header className="bg-gray-800 text-white p-4">
          <nav className="flex justify-between items-center max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold">FlickFinder</h1>
            <div className="flex gap-4">
              <Link href="/" className="text-blue-300 hover:underline">
                Home
              </Link>
              <Link href="/login" className="text-blue-300 hover:underline">
                Login
              </Link>
              <Link href="/profile" className="text-blue-300 hover:underline">
                Profile
              </Link>
            </div>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto p-4">{children}</main>

        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; {new Date().getFullYear()} FlickFinder. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
