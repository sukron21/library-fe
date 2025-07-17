"use client";
import React, { useState } from "react";
import LoginForm from "@/component/Auth/login-form";
import BookImageSection from "@/component/Auth/book-image-section";
import RegisterForm from "@/component/Auth/register-form";

export default function AuthPage() {
  const [isPage, setIsPage] = useState(1);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full min-h-[600px]">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left Side - Book Image */}
          <div className="hidden lg:block lg:w-1/2 h-64 lg:h-auto">
            <BookImageSection />
          </div>

          {/* Right Side - Login Form */}
          <div className="lg:w-1/2 flex items-center justify-center min-h-[400px] lg:min-h-[600px]">
            {isPage == 1 ? (
              <LoginForm onSwitchToRegister={() => setIsPage(2)} />
            ) : (
              <RegisterForm onSwitchToLogin={() => setIsPage(1)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
