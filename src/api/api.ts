import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080/api'
});

api.interceptors.request.use(
    (config) => {
        const token: string | null = localStorage.getItem('token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default api