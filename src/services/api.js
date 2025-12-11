import axios from 'axios';

const API = axios.create({
  baseURL: 'https://crud-backend-1-n725.onrender.com/api',
  timeout: 10000,
});

export const getUsers = () => API.get('/users');
export const createUser = (data) => API.post('/users', data);
export const updateUser = (id, data) => API.put(`/users/${id}`, data);
export const deleteUser = (id) => API.delete(`/users/${id}`);

export const getUsersAnalytics = () =>
  API.get('/analytics/users-by-location');

export const sendNotification = (payload) =>
  API.post('/notifications/send', payload);

export default API;
