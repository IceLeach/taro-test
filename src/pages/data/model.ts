import * as r from "../../services/data";

export default {
  namespace: "data",
  state: {
    list: [],
  },

  effects: {
    *getList(_: any, { call, put }: any) {
      try {
        const res = yield call(r.getList);
        yield put({
          type: "setList",
          payload: res.data,
        });
      } catch (e) {
        console.log("error", e);
      }
    },
    *initList(_: any, { put }: any) {
      yield put({ type: "clearList" });
    },
  },

  reducers: {
    setList(state: any, { payload }: any) {
      return { ...state, list: payload };
    },
    clearList(state: any) {
      return { ...state, list: [] };
    },
  },
};
