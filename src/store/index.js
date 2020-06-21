import Vue from "vue";
import Vuex from "vuex";
import auth from './auth';
import tv from './tv';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tv,
    auth
  }
});
