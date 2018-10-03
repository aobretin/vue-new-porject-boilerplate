import Vue from 'vue'
import router from 'router'
import store from 'store';
import vueModules from './vue-base-use-config';
import _ from 'lodash';
import localforage from 'localforage';
import runOverwrites from 'overwrites';

import './components-register';

import Root from 'modules/Root';

Vue.prototype._ = _;
Vue.prototype.$db = localforage;

vueModules.forEach(module => _.isArray(module) ? Vue.use(...module) : Vue.use(module));
runOverwrites();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(Root)
}).$mount('#app')
