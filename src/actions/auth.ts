"use server"

export async function loginUser(formData: FormData) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const email = formData.get("email") as string
  const password = formData.get("password") as string

  // Basic validation
  if (!email || !password) {
    return {
      success: false,
      message: "Email dan password harus diisi",
    }
  }

  // Simulate login logic
  if (email === "admin@library.com" && password === "admin123") {
    return {
      success: true,
      message: "Login berhasil! Selamat datang di Sistem Perpustakaan",
    }
  }

  return {
    success: false,
    message: "Email atau password salah",
  }
}

export async function registerUser(formData: FormData) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const fullName = formData.get("fullName") as string
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const confirmPassword = formData.get("confirmPassword") as string
  const membershipType = formData.get("membershipType") as string

  // Basic validation
  if (!fullName || !email || !password || !confirmPassword || !membershipType) {
    return {
      success: false,
      message: "Semua field harus diisi",
    }
  }

  if (password !== confirmPassword) {
    return {
      success: false,
      message: "Password dan konfirmasi password tidak cocok",
    }
  }

  if (password.length < 6) {
    return {
      success: false,
      message: "Password minimal 6 karakter",
    }
  }

  return {
    success: true,
    message: "Registrasi berhasil! Silakan login dengan akun Anda",
  }
}
