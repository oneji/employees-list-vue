<template>
    <LoginForm @login="handleLogin" />
</template>

<script>
import LoginForm from '@/components/LoginForm'
import { mapActions } from 'vuex';

export default {
    components: {
        LoginForm
    },
    methods: {
        ...mapActions('auth', [ 'login' ]),
        handleLogin(credentials) {
            this.login(credentials);
        }
    }
}
</script>

<style lang="scss" scoped>
    .login-page-container {
        height: calc(100vh - 140px);
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: cover;
        background-position: center center;
    }
</style>