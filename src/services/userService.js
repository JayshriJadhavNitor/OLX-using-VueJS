import axios from 'axios';

const baseURL = "http://localhost:8080/user";

export default {
  getBuyerCount() {
    return axios.get(`${baseURL}/getBuyerCount`);
  },
 
  getRecentUser() {
    return axios.get(`${baseURL}/recentUser`,{headers:{'Authorization':`Bearer ${sessionStorage.getItem('jwt')}`}});
  },

 
};
