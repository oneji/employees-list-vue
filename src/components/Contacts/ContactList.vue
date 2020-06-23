<template>
    <v-row>
        <v-col 
            xs="12" sm="6" md="4" lg="4"
            v-for="contact in items" :key="contact.id"
        >
            <ContactListItem
                :item="contact"
                @edit="handleEdit"
                @delete="handleDelete" />
        </v-col>
    </v-row>
</template>

<script>
    import ContactListItem from './ContactListItem'

    export default {
        props: {
            items: {
                type: Array
            }
        },
        components: {
            ContactListItem
        },
        methods: {
            handleEdit(contact) {
                this.$emit('edit', contact);
            },
            handleDelete(contactId) {
                this.$emit('delete', contactId);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>