// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api';

// export const registerCompany = async (data) => {
//   const response = await axios.post(`${API_URL}/register`, data);
//   console.log(response)
//   return response.data;
// };

// export const loginCompany = async (data) => {
//   const response = await axios.post(`${API_URL}/login`, data);
//   return response.data;
// };

// export const postJob = async (data, token) => {
//   const response = await axios.post(`${API_URL}/jobs`, data, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return response.data;
// };

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

// Register company
export const registerCompany = async (data) => {
    return await axios.post(`${API_URL}/register`, data);
};

// Login company
// export const loginCompany = async (data) => {
//     return await axios.post(`${API_URL}/login`, data);
// };
