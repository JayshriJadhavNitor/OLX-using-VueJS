export default {
  setUser(state, user) {
    state.user = user;
    state.isLoggedIn = !!user;
  },
  clearUser(state) {
    state.user = null;
      state.isLoggedIn = false;
      sessionStorage.clear();
  },
};