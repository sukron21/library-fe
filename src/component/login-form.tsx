"use client";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginRequest } from "@/lib/types/auth";
import { notification } from "antd";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { login } from "@/lib/api/auth.api";

interface LoginFormProps {
  onSwitchToRegister: () => void;
}

type NotificationType = "success" | "info" | "warning" | "error";

export default function LoginForm({ onSwitchToRegister }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const router = useRouter();

  const openNotificationWithIcon = (
    type: NotificationType,
    title: string,
    descriptions: string
  ) => {
    api[type]({
      message: title,
      description: descriptions,
    });
  };
  const { handleSubmit, register } = useForm<LoginRequest>();

  const onSubmit = async (data: LoginRequest) => {
    try {
      setIsLoading(true);
      const response = await login({
        email: data?.email,
        password: data?.password,
      });
      setIsLoading(false);
      openNotificationWithIcon("success", "Login", "Berhasil Login");
      router.push("/dashboard");
    } catch (error: any) {
      setIsLoading(false);
      console.log("error", error);

      openNotificationWithIcon(
        "success",
        "Login",
        "Gagal Login mohon periksa kembali email"
      );
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center p-8">
      {/* Header */}
      {contextHolder}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Selamat Datang</h2>
        <p className="mt-2 text-sm text-gray-600">
          Masuk ke akun perpustakaan Anda
        </p>
      </div>

      {/* Login Form */}
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              {...register("email", { required: true })}
              type="email"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="nama@email.com"
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="password"
              {...register("password", { required: true })}
              type={showPassword ? "text" : "password"}
              className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Masukkan password"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 text-gray-700">
              Ingat saya
            </label>
          </div>
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Lupa password?
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Memproses..." : "Masuk"}
        </button>

        {/* Switch to Register */}
        <div className="text-center pt-4">
          <p className="text-sm text-gray-600">
            Belum punya akun?{" "}
            <button
              type="button"
              onClick={onSwitchToRegister}
              className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer"
            >
              Daftar sekarang
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
