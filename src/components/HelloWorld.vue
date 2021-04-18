<template>
    <div id="app">
        <input type="text" placeholder="郵便番号を入力" v-model="zipcode">
        <button @click="getAddress">住所自動入力</button>
        <p>Address: {{Address}}</p>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return{
           address: ""
        }
    },
    methods: {
      getAddress() {
         this.$emit("getzipcode", this.zipcode);
         this.zipcode = "";
     }
    }
};
</script>
