<template>
    <div class="login-page-container"> 
        <v-flex xs11 sm6 md4 lg3 dark> 
            <v-card class="elevation-2 px-4 py-5">                    
                <v-responsive>
                    <v-layout row justify-center>
                        <v-flex>
                            <div class="user-avatar"></div>
                        </v-flex>
                    </v-layout>
                </v-responsive> 
                                    
                <v-card-text>
                    <v-form 
                        @submit.prevent="auth"
                        ref="form"
                        lazy-validation
                    >
                        <v-alert
                            dense
                            outlined
                            color="primary"
                            transition="scale-transition"
                            class="mb-2"
                        >
                            <strong>Логин:</strong> admin<br>
                            <strong>Пароль:</strong> Любой
                        </v-alert>

                        <v-text-field 
                            v-model="login.username" 
                            name="username" 
                            label="Имя пользователя" 
                            type="text"
                            :rules="usernameRules"
                            required
                        ></v-text-field>
                        
                        <v-text-field 
                            v-model="login.password" 
                            name="password" 
                            label="Пароль" 
                            hint="Минимум 6 символов"
                            :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                            @click:append="() => (showPassword = !showPassword)"
                            :type="showPassword ? 'password' : 'text'"
                            :rules="passwordRules"
                            required
                        ></v-text-field>

                        <v-btn :loading="loading" color="info" block large type="submit">Войти</v-btn>
                    </v-form>
                </v-card-text> 
            </v-card>
        </v-flex>
    </div>
</template>

<script>
    export default {
        name: 'LoginForm',
        props: {
            loading: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                showPassword: true,
                login: {
                    username: "",
                    password: ""
                },
                usernameRules: [
                    v => !!v || 'Обязательное поле',
                ],
                passwordRules: [
                    v => !!v || 'Обязательное поле',
                    v => v.length >= 6 || 'Введите минимум 6 символов.'
                ],
            };
        },
        methods: {
            auth() {
                let validation = this.$refs.form.validate();

                if(validation) {
                    this.$emit('login', this.login);
                }
            }
        }
    };
</script>

<style lang="scss">
    .login-page-container {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .user-avatar {
        width: 70px;
        height: 70px;
        display: block;
        text-align: center;
        border-radius: 100%;
        background-color: rgba(0, 0, 0, .085);
        background-position: center;
        background-size: cover;
        margin: 0 auto;
    }
</style>