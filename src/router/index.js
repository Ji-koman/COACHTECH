import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.use(VueRouter)

export default new Vuex.Store({
  state: {
    address: "",
    zipcode: ""
  },
  mutations: {
    getAddress(state, zip, address) {
      state.zip = zip;
      state.address = address;
    }
  },
  actions: {
    async getAddressAction(context) {
      const payload = {
        address: "",
        zip: context.state.zip
      };
      await axios
        .get("https://api.zipaddress.net/?", {
          params: { zipcode: payload.zip }
        })
        .then(res => {
          payload.address = res.data.data.fullAddress;
        });
      context.commit("getAddress", payload);
    }
  }
});