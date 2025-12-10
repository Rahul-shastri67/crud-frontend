import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getUsers = () => API.get("/users");
export const createUser = (data) => API.post("/users", data);
export const updateUser = (id, data) => API.put(`/users/${id}`, data);
export const deleteUser = (id) => API.delete(`/users/${id}`);
export const getUsersAnalytics = () => API.get("/analytics/users-by-location");
export const sendNotification = (payload) =>
  API.post("/notifications/send", payload);
