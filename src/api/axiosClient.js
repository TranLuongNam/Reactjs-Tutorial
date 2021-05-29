import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'https://api.ezfrontend.com',
    headers: {
        'Content-Type': 'application/json',
    },
})
// request interceptor
axiosClient.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config
    },
    function (error) {
        return Promise.reject(error)
    },
)

// response interceptor
axiosClient.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        return Promise.reject(error)
    },
)

export default axiosClient
