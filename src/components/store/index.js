import Vue from 'vue';
import Vuex from 'vuex';
import todos from './modules/todos';
import events from './modules/today';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        todos,
        events
    }
})