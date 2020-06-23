import api from '@/services/auth'
import * as mutationTypes from './mutation-types'
import router from '@/router/index'

export default {
    async fetchUser({ commit }) {
        let { data } = await api.fetchUser();

        commit(mutationTypes.SET_USER, data);
    },

    async login({ commit }, credentials) {
        let { data } = await api.login(credentials);

        commit(mutationTypes.AUTH_SUCCESS, data)
        router.push({ name: 'home' });
    },

    logout({ commit }) {
        commit(mutationTypes.LOGOUT);
        router.push({ name: 'login' });
    }
}