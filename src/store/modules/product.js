/* eslint-disable no-undef */
import Vue from "vue";
import { router } from "../../main";

const state = {
  products: [],
};

const getters = {
  getProducts(state) {
    return state.products;
  },
  getProduct(state) {
    return (key) =>
      state.products.filter((element) => {
        return element.key == key;
      });
  },
};

const mutations = {
  updateProductList(state, product) {
    state.products.push(product);
  },
};

const actions = {
  // eslint-disable-next-line no-unused-vars
  initApp({ commit }) {
    Vue.http
      .get("https://ascatu-51c6f-default-rtdb.firebaseio.com/product.json")
      .then((response) => {
        let data = response.body;
        for (let key in data) {
          data[key].key = key;
          commit("updateProductList", data[key]);
        }
      });
  },
  saveProduct({ commit, dispatch }, product) {
    Vue.http
      .post(
        "https://ascatu-51c6f-default-rtdb.firebaseio.com/product.json",
        product
      )
      .then((response) => {
        // Update List
        product.key = response.body.name;
        commit("updateProductList", product);
        // Update List End
        let TradeResult = {
          purchase: product.price,
          sale: 0,
          count: product.count,
        };
        dispatch("setTradeResult", TradeResult);
        router.replace("/");
      });
  },
  // eslint-disable-next-line no-unused-vars
  sellProduct({ state, commit, dispatch }, payload) {
    let product = state.products.filter((element) => {
      return element.key == payload.key;
    });

    if (product) {
      let totalCount = product[0].count - payload.count;

      Vue.http
        .patch(
          "https://ascatu-51c6f-default-rtdb.firebaseio.com/product/" +
            payload.key +
            ".json",
          { count: totalCount }
        )
        .then(() => {
          product[0].count = totalCount;
          let TradeResult = {
            purchase: 0,
            sale: product[0].price,
            count: payload.count,
          };
          dispatch("setTradeResult", TradeResult);
          router.replace("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
