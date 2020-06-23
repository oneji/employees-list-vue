<template>
    <v-app-bar app color="primary" dark dense>
        <v-toolbar-title>
            <span class="hidden-xs-only">Контакты</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <!-- User menu -->
        <UserMenu />
    </v-app-bar>
</template>

<script>
import UserMenu from './UserMenu'
    
export default {
    components: {
        UserMenu
    }
}
</script>

<style lang="scss" scoped>
</style>