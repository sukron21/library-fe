"use client";

import { BookOpen, GraduationCap, Users, Clock } from "lucide-react";

export default function BookImageSection() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex flex-col justify-center items-center p-8 text-white">
      {/* Library Info */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <BookOpen className="h-12 w-12 text-blue-200" />
        </div>
        <h1 className="text-3xl font-bold">Sistem Perpustakaan</h1>
        <p className="text-blue-100 text-lg max-w-sm">
          Akses ribuan koleksi buku, jurnal, dan sumber daya digital untuk
          mendukung pembelajaran Anda
        </p>
      </div>

      {/* Features */}
      <div className="mt-8 grid grid-cols-1 gap-4 w-full max-w-sm">
        <div className="flex items-center space-x-3">
          <GraduationCap className="h-5 w-5 text-blue-200" />
          <span className="text-sm text-blue-100">
            Koleksi Akademik Lengkap
          </span>
        </div>
      </div>
    </div>
  );
}
