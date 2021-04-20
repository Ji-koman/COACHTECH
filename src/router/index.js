import Vue from "vue";
import HelloWorld from "../components/HelloWorld.vue";
import axios from "axios";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/HelloWorld",
    name: "HelloWorld",
    component: "HelloWorld"
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// export default ({
//   state: {
//     address: "",
//     zipcode: ""
//   },
//   mutations: {
//     getAddress(state, zip, address) {
//       state.zip = zip;
//       state.address = address;
//     }
//   },
//   actions: {
//     async getAddressAction(context) {
//       const payload = {
//         address: "",
//         zip: context.state.zip
//       };
//       await axios
//         .get("https://api.zipaddress.net/?", {
//           params: { zipcode: payload.zip }
//         })
//         .then(res => {
//           payload.address = res.data.data.fullAddress;
//         });
//       context.commit("getAddress", payload);
//     }
//   }
// });