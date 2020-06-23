<template>
    <div>
        <!-- Toolbar -->
        <Toolbar />

        <!-- Content -->
        <v-main>
            <v-container>
                <SearchBar 
                    @search="searchContacts"
                    @add-contact="contactDialog = true" />

                <Loading :show="loading" />
                <ContactList 
                    v-if="!loading"
                    :items="contacts"
                    @edit="handleEditContact"
                    @delete="handleDeleteContact" />

                <NoContacts v-if="contacts.length === 0 && !loading" />
            </v-container>
        </v-main>

        <AddContactDialog 
            :show="contactDialog"
            @close="contactDialog = false"
            @added="contactDialogAdded" />

        <EditContactDialog 
            :show="editContactDialog"
            @close="editContactDialog = false"
            @edited="contactDialogEdited"
            :contact="contactToBeEdited" />

        <!-- Footer -->
        <v-footer app fixed>
            <v-spacer></v-spacer>
            <div>&copy; {{ new Date().getFullYear() }}</div>
        </v-footer>
    </div>
</template>

<script>
    import contactService from '@/services/contacts'
    import Toolbar from '@/components/Toolbar'
    import Loading from '@/components/Loading'
    import SearchBar from '@/components/Contacts/SearchBar'
    import ContactList from '@/components/Contacts/ContactList'
    import AddContactDialog from '@/components/Contacts/AddContactDialog'
    import EditContactDialog from '@/components/Contacts/EditContactDialog'
    import NoContacts from '@/components/Contacts/NoContacts'

    export default {
        components: {
            Toolbar,
            Loading,
            SearchBar,
            ContactList,
            AddContactDialog,
            EditContactDialog,
            NoContacts
        },
        data() {
            return {
                contacts: [],
                loading: true,
                contactDialog: false,
                editContactDialog: false,
                contactToBeEdited: {
                    name: '',
                    email: '',
                    phone: '',
                    id: ''
                }
            }
        },
        methods: {
            async fetchContacts() {
                let { data } = await contactService.fetchContacts();
                this.contacts = data;

                this.loading = false;
            },
            async searchContacts(queryString) {
                this.loading = true;
                
                let { data } = await contactService.searchContacts(queryString);
                this.contacts = data;

                this.loading = false;

            },
            contactDialogAdded(contact) {
                this.contacts.push(contact);
                this.contactDialog = false;
            },
            contactDialogEdited(contact) {
                this.fetchContacts();
                this.editContactDialog = false;
            },
            async handleEditContact(contact) {
                this.contactToBeEdited = contact;
                this.editContactDialog = true;
            },
            async handleDeleteContact(contactId) {
                await contactService.deleteContact(contactId);
                this.contacts = this.contacts.filter(contact => contact.id !== contactId);
            }
        },
        created() {
            this.fetchContacts();
        }
    }
</script>

<style lang="scss" scoped>

</style>