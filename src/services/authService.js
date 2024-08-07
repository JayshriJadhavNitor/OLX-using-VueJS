import axios from 'axios';

const baseURL = "http://localhost:8080/user";

export default {
  login(data) {
    return axios.post(`${baseURL}/login`, data);
  },

  register(data) {
    return axios.post(`${baseURL}/signup`, data);
  },

  getToken() {
    return sessionStorage.getItem('jwt');
  },

   getUserByToken(token) {
    return axios.post(`${baseURL}/getByToken`, token, {
      headers: { Authorization: `Bearer ${token.jwtToken}` },
    });
  },
  
};
