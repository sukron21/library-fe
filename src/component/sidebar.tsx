"use client";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="w-56 bg-white  px-4 flex flex-col">
      <div className="flex items-center space-x-2 mb-6">
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-medium">Dwi Annisa</p>
        </div>
      </div>
      <ul className="space-y-2 flex-1">
        <li>
          <a
            href="/dashboard"
            className={`block px-3 py-2 rounded ${
              pathname === "/dashboard"
                ? "bg-indigo-100 text-indigo-600 font-medium"
                : "hover:bg-gray-100"
            }`}
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="/book-management"
            className={`block px-3 py-2 rounded ${
              pathname === "/book-management"
                ? "bg-indigo-100 text-indigo-600 font-medium"
                : "hover:bg-gray-100"
            }`}
          >
            Book
          </a>
        </li>
        <li>
          <a
            href="/lend-management"
            className={`block px-3 py-2 rounded ${
              pathname === "/lend-management"
                ? "bg-indigo-100 text-indigo-600 font-medium"
                : "hover:bg-gray-100"
            }`}
          >
            Report
          </a>
        </li>
      </ul>
    </div>
  );
}
