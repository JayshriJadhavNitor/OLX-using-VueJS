import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  namespaced: true,
  state() {
    return {
      user: null,
      isLoggedIn: false,
    };
  },
  mutations,
  getters,
  actions,
};