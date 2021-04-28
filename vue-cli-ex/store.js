import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        posts: [
            {
                id: 1,
                title: "First title from store",
                content: "First content from store"
            },
            {
                id: 2,
                title: "Second title from store",
                content: "Second content from store"
            },
        ]
    }
})