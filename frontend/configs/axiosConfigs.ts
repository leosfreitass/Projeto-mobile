export const axiosConfigs = {
  baseURL: process.env.EXPO_PUBLIC_BACKEND_URL || "http://localhost:3000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": 1,
  },
};
