import Vue from "vue";

export const setTradeResult = ({ state, commit }, TradeResult) => {
  commit("updateTradeResult", TradeResult);

  let tradeData = {
    purchase: state.purchase,
    sale: state.sale,
  };

  Vue.http
    .put(
      "https://ascatu-51c6f-default-rtdb.firebaseio.com/trade-result.json",
      tradeData
    )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

// eslint-disable-next-line no-unused-vars
export const getTradeResult = ({ commit }) => {
  Vue.http
    .get("https://ascatu-51c6f-default-rtdb.firebaseio.com/trade-result.json")
    .then((response) => {
      commit("updateTradeResult", response.body);
    })
    .catch((err) => {
      console.log(err);
    });
};
