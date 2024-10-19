import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: '#vue-app',
        render: (h) => h(App),
    },
});

export const { bootstrap, mount, unmount } = vueLifecycles;
