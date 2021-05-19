import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import VueMoment from 'vue-moment';

import App from './App.vue';
import router from './router';
import store from './store';
import 'leaflet/dist/leaflet.css';

// eslint-disable-next-line import/no-extraneous-dependencies
const moment = require('moment');
// eslint-disable-next-line import/no-extraneous-dependencies
require('moment/locale/fr');

Vue.use(VueMoment, {
  moment,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
