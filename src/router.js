import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import ViewContact from './views/ViewContact.vue';
import EditContact from './views/EditContact.vue';
import ContactList from './components/ContactList.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/contacts', component: ContactList },
  { path: '/contact/:id', name: 'ContactDetails', component: ViewContact },
  { path: '/add-contact', name: 'AddContact', component: EditContact },
  { path: '/edit-contact/:id', name: 'EditContact', component: EditContact }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
