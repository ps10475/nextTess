import axiosClient from './axiosClient';

const usersApi = {
    get : (params) => {
        const url = '/comments';
        return  axiosClient.get(url,{params})
    },
}

export default usersApi;