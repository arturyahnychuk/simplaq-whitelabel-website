import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import { createHead } from '@vueuse/head'
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

import english from '@/locales/en.json';
import slovak from '@/locales/sk.json';

import Notifications from '@kyvg/vue3-notification';
import Icon from './components/icon/IconComponent.vue';
import App from './App.vue';
import router from './router';
// Enums for routes
import Routes from './router/routes';
// Dashboard Routes Enums
import Dashboard_ENUMS from './router/dashboardEnums';

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: english,
    sk: slovak,
  },
});

const pinia = createPinia();
const app = createApp(App);
const head = createHead()

const firebaseConfig = {
  apikey: process.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "dev-whitelabel-app.firebaseapp.com",
  projectId: "dev-whitelabel-app",
  storageBucket: "dev-whitelabel-app.appspot.com",
  messagingSenderId: "994635593718",
  appId: "1:994635593718:web:50c5c80ab5bbf5fae239d7",
  measurementId: "G-YPRGD4K5GW"
};

initializeApp(firebaseConfig);

// Use createHead as a plugin

app.config.globalProperties.$Routes = Routes;
app.config.globalProperties.$Dashboard_ENUMS = Dashboard_ENUMS;
app.use(i18n);
app.use(router);
app.use(pinia);
app.component('Icon', Icon);
app.use(head);
app.use(Notifications);

app.mount('#app');
