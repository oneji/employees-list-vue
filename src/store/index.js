import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import authModule from './modules/auth'

export default new Vuex.Store({
    modules: {
        auth: authModule
    },
    state: {
        snackbar: {
            color: '',
            active: false,
            text: ''
        }
    },
    mutations: {},
    actions: {},
})
