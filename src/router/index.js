import Vue from 'vue';
import Router from 'vue-router';
import Components from '@/components/Components';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Components',
    component: Components,
  }],
});
