import axios from "axios";

export default {
  async checkAuth({ commit }) {
    const token = sessionStorage.getItem("jwt");
    if (token) {
      const user = null;
      axios.get("http://localhost:8080/user/getByToken").then((result) => {
        this.user = result.data;
      });
      commit("setUser", user);
    }
  },
  logout({ commit }) {
    commit("clearUser");
  },
};
  
