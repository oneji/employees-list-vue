<template>
    <v-menu :close-on-content-click="true" :nudge-width="200" offset-x>
        <template v-slot:activator="{ on }">
            <v-btn  small fab color="primary" v-on="on">
                <v-icon>person</v-icon>
            </v-btn>
        </template>

        <v-card>
            <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                        <img src="@/assets/img/default_user.png" alt="User">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>{{ user.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list>
                <v-list-item @click="logout">
                    <v-list-item-action>
                        <v-icon white>power_settings_new</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Выйти</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
    </v-menu>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        computed: {
            user() {
                return this.$store.getters['auth/getUser'];
            }
        },
        methods: {
            ...mapActions('auth', [ 'logout' ])
        }
    }
</script>

<style>
</style>