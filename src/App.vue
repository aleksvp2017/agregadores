<template>
    <div>
        <!-- menu apenas para teste  <meu-menu/>-->
        <b-tabs content-class="mt-3">
            <b-tab title="Associações" active>
                <associacao/>
            </b-tab>
            <b-tab title="Agregadores">
                <agregador/>
            </b-tab>
        </b-tabs>        
        <router-view></router-view>
    </div>
    
</template>

<script>
import Menu from './components/menu/Menu.vue';
import Agregadores from './components/agregadores/Agregadores.vue';
import Associacoes from './components/associacoes/Associacoes.vue';

export default {
  components: {
      'agregador' : Agregadores,
      'associacao' : Associacoes,
      'meu-menu': Menu
 }
}

</script>

<style>
</style>
