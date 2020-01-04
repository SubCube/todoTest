import vue from 'vue';
import Vuex from 'vuex';
import post from './modules/post';

vue.use(Vuex);

 export default new Vuex.Store({
    modules : {
        post
    }
});