import { reactive, readonly } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const state = reactive({
      showAdminNavbar: false,
      showUserNavbar: false,
      sessionItems: {},
      isLoggedIn: true,
      userRole: null,
      userId: null,
    });

    const showAdminNavbar = () => {
      state.showAdminNavbar = true;
      state.showUserNavbar = false;
    };

    const showUserNavbar = () => {
      state.showAdminNavbar = false;
      state.showUserNavbar = true;
    };

    const removeSessionItems = () => {
      sessionStorage.clear();
      state.sessionItems = {};
      state.userRole = null;
    };

    const getUserRole = () => state.userRole;

    const getUserId = () => state.userId;

    const logOut = () => {
      sessionStorage.clear();
      state.isLoggedIn = true;
      router.push('/login');
    };

    // Initialize session from storage
    const userCart = sessionStorage.getItem('user');
    if (userCart) {
      state.sessionItems = JSON.parse(userCart);
      state.userRole = state.sessionItems.role;
      state.userId = state.sessionItems.id;
      state.isLoggedIn = false;
    }

    return {
      state: readonly(state),
      showAdminNavbar,
      showUserNavbar,
      removeSessionItems,
      getUserRole,
      getUserId,
      logOut,
    };
  },
};
