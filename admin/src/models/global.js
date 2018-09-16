export default {
  namespace: 'global',

  state: {
    loading: false
  },

  reducers: {
    loading(state, { status = false }) {
      return { ...state, loading: status };
    }
  }
  // subscriptions: {
  //     setup({ dispatch, history }) {
  //         // eslint-disable-line
  //         history.listen(location => {
  //             dispatch({ type: 'LOCATION_CHANGE', location });
  //         });
  //     }
  // }
};
