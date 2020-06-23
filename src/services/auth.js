import axios from '@/axios'

export default {
    fetchUser() {
        return axios.get(`user`);
    },

    login(credentials) {
        return axios.get(`user`);
    }
}