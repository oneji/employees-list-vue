import axios from '@/axios'

export default {
    fetchContacts() {
        return axios.get('contacts');
    },

    addContact(contactData) {
        return axios.post('contacts', contactData);
    },

    deleteContact(contactId) {
        return axios.delete(`contacts/${contactId}`);
    },

    searchContacts(queryString) {
        return axios.get(`contacts?name_like=${queryString}`);
    },

    editContact(contactData) {
        return axios.put(`contacts/${contactData.id}`, contactData);
    }
}