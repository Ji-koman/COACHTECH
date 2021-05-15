<template>
    <div id="app">
        <p>{{message}}</p>
        <input type="text" placeholder="郵便番号を入力" v-model="zipcode"/>
        <button @click="$router.push({getAddress})">住所自動入力</button>
        <p>Address: {{Address['Address']}}</p>
    </div>
</template>

<script>
const axios= require('axios');

export default {
  data() {
    return {
          zipcode: '',
          Address: ''
    }
  },
  methods: {
        getAddress() {
      axios.get(`https://apis.postcode-jp.com/api/v4/postcodes/${this.zipcode}?apikey=SHBb270y2vmluvQm8K81yQEsw3BnBtlwmsp8ClH`).
     then((response) => console.log(response));
    }
  }
};
</script>