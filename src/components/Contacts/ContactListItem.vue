<template>
    <v-card>
        <v-list-item three-line>
            <v-list-item-content>
                <div class="overline mb-4">{{ item.phone }}</div>
                <v-list-item-title class="headline mb-1">{{ item.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.email }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
                size="80"
                color="grey"
            >
                <span class="white--text headline">{{ item.name | avatartName }}</span>
            </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
            <v-btn text color="success" @click="$emit('edit', item)">Изменить</v-btn>
            <v-btn text color="error" @click="$emit('delete', item.id)">Удалить</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        props: {
            item: Object
        },
        filters: {
            avatartName(value) {
                let nameArray = value.split(' ');
                let nameString = nameArray.map(item => item[0]).join('');

                return nameString.toUpperCase();
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>