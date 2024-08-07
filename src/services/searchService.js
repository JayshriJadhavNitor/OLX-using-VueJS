import { reactive, readonly } from 'vue';

export default {
  setup() {
    const state = reactive({
      searchText: '',
    });

    const setSearchText = (searchText) => {
      state.searchText = searchText;
    };

    return {
      state: readonly(state),
      setSearchText,
    };
  },
};
