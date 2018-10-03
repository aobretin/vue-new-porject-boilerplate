import Vue from 'vue';

const GLOBAL_MODULES = {

}

Object.keys(GLOBAL_MODULES).forEach(module => Vue.component(module, GLOBAL_MODULES[module]));

export default {
  // we just export to expose the global modules
};
