import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import { routes } from './routes';

Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(VueRouter)

const router = new VueRouter({
  routes : routes,
  mode: 'history'
});

//detalhe, o normal seria escrever router: router, que é passar
//variável router para o parâmetro router de Vue. Como ambos
//têm o mesmo nome, pode usar só router
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
