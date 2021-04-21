import axios from "axios"; 


axios.interceptors.request.use(config => {
    console.log(config);
    return config;
})

axios.interceptors.response.use(res => {
    console.log(res);
    return res;
})