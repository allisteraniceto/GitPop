/*
    Custom axios client (can set base URL here)
*/

import axios from 'axios';

const axiosClient = axios.create( {
    baseURL: import.meta.env.VITE_API_BASE_URL,
})

export default axiosClient;