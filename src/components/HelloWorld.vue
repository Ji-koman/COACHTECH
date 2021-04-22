<template>
    <div id="app">
        <p>{{message}}</p>
        <input type="text" placeholder="郵便番号を入力" v-model="zipcode"/>
        <button @click="getAddress">住所自動入力</button>
        <p>Address: {{Address['Address']}}</p>
    </div>
</template>

<script>
const axios = require('axios');

let url = 'http://zipcloud.ibsnet.co.jp/api/search?zipcode='

export default {
    data() {
      return {
          zipcode: '',
          Address: {}
    }
  },
methods: {
    getAddress() {
       axios.get(url + this.zipcode).then((res) => {
         this.Address = res.data.results[0];
       })
    }
  }
}
</script>
