import axios, { AxiosError, AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

// URL API backend kamu
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://your-api-url.com";

// Buat instance Axios
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Fungsi untuk refresh token
const refreshAccessToken = async () => {
  const refreshToken = Cookies.get("refresh_token");
  if (!refreshToken) return null;

  try {
    const response = await axios.post(`${BASE_URL}/auth/refresh`, {
      refresh_token: refreshToken,
    });

    const { access_token, refresh_token: newRefreshToken } = response.data;

    Cookies.set("access_token", access_token);
    Cookies.set("refresh_token", newRefreshToken);

    return access_token;
  } catch (error) {
    // Refresh token gagal → hapus token
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    return null;
  }
};

// Interceptor request: pasang token sebelum kirim
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("access_token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor response: handle token expired
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const newAccessToken = await refreshAccessToken();

      if (newAccessToken) {
        originalRequest.headers = {
          ...originalRequest.headers,
          Authorization: `Bearer ${newAccessToken}`,
        };
        return api(originalRequest);
      }

      // Jika refresh token gagal → hapus token & redirect
      Cookies.remove("access_token");
      Cookies.remove("refresh_token");
      window.location.href = "/auth"; // ⬅️ redirect ke halaman login
    }

    return Promise.reject(error);
  }
);


export default api;
