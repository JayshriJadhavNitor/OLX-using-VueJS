import { createStore } from "vuex";
import auth from "./modules/auth/index";

const store = createStore({
    state: {
        auth
    }
})


export default store;