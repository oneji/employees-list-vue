import * as mutationTypes from './mutation-types'

export default {
    [mutationTypes.AUTH_LOADING] (state) {
        state.loading = true;
    },

    [mutationTypes.AUTH_SUCCESS] (state, userData) {
        state.isAuthenticated = true;
        state.user = {
            name: userData.name,
            username: userData.username
        };
        state.token = userData.token;
        state.loading = false;
        // Delete all errors
        state.error = false;
        state.errorMessage = '';
        // Set token to a local storage
        localStorage.setItem('vc_token', userData.token);
    },

    [mutationTypes.AUTH_FAILED] (state, message) {
        state.error = true,
        state.errorMessage = message;
        state.loading = false;
    },

    [mutationTypes.SET_USER] (state, user) {
        state.user = {
            name: user.name,
            username: user.username
        };
    },

    [mutationTypes.LOGOUT] (state) {
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        localStorage.removeItem('vc_token');
    }
}