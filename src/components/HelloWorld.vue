<template>
    <div id="app">
        <p>{{message}}</p>
        <input type="text" placeholder="郵便番号を入力" v-model="zipcode"/>
        <button @click="$router.push({getAddress})">住所自動入力</button>
        <p>Address: {{Address['Address']}}</p>
    </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["zipcode"],
  data() {
    return {
          zipcode: '',
          Address: ''
    };
  },
  async created() {
      const item = await axios.get('https://apis.postcode-jp.com/api/v4/postcodes?q=${this.zipcode}&"apikey=SHBb270y2vmluvQm8K81yQEsw3BnBtlwmsp8ClH"');
      const zipcodeData = item.data;
      this.Address = zipcodeData.Address;

      }
  };


</script>