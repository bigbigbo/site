export default {
  namespace: 'global',

  state: {
    loading: false
  },

  reducers: {
    loading(state: any, { status = false }) {
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
