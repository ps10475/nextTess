import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' },
    paramsSerializer: (params) => queryString.stringify(params),
});

// axiosClient.interceptors.request.use((config)=>{
//     console.log(config.limit);
// })

axiosClient.interceptors.response.use(response =>{
    if (response?.data?.payload) {
        return response.data.payload;
    }

    if (response?.data) {
        return response.data;
    }

    return response;
})


export default axiosClient;