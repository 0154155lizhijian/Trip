export default {
  namespace: 'home',
  state: {
    productList: [
      {name: '1',price: 2},
      {name: '2',price: 3}
    ],
  },

  effects: {
    *fetchCompany({payload},{call, put}){
      // const res = yield call(fetchBasketList, payload);
      // const result = getResponse(res);
      // if (result) {
      //   yield put({
      //     type: 'updateState',
      //     payload: {
      //       shoppingBasketList: result.content,
      //       pagination: createPagination(result),
      //     },
      //   });
      // } 
    }
  },
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};