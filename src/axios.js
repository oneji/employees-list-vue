import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

const token = localStorage.getItem('vc_token');

if (token !== undefined) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default instance