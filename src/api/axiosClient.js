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
        return response.data
    },
    function (error) {
        const { config, status, data } = error.response;
        // console.log('error.response:', error.response);
        if (config.url === '/auth/local/register' && status === 400) {
            const errorList = data.data || [];
            const firstError = errorList.length > 0 ? errorList[0] : {};
            const messageList = firstError.messages || [];
            const firstMessage = messageList.length > 0 ? messageList[0] : {};
            throw new Error(firstMessage.message)
        }
        return Promise.reject(error)
    },
)

export default axiosClient
