<template>
  <div>
    Órgãos
    <div name="ORGAOS" v-show="filtros.includes('orgao')">
        <b-form-select multiple :select-size="4" v-model="orgaosSelecionados" :options="orgaos" v-on:change="checaSelecaoTodos"/>
    </div>
    <br/>
    Agregadores
    <div name="AGREGADORES" v-show="filtros.includes('agregadores')">
        <b-form-select multiple :select-size="4" v-model="agregadoresSelecionados" :options="agregadores" v-on:change="checaSelecaoTodos"/>
    </div>
    <br/>
  </div>
</template>

<script>
  export default {
   props: ['filtros'],
   methods: {
       checaSelecaoTodos(){
           if (this.orgaosSelecionados.includes("Todos")){
               this.orgaosSelecionados = ["Todos"];
           }
       }
    },      
    data() {
      return {
        orgaosSelecionados: ['Todos'], // Array reference
        orgaos: [
          { value: '', text: 'Selecione um ou mais órgãos', disabled: true },
          { value: 'Todos', text: 'Todos' },
          { value: '01000', text: '01000 - Câmara' },
          { value: '02000', text: '02000 - Senado Federal' },
          { value: '03000', text: '03000 - Tribunal de Contas da União' },
          { value: '11000', text: '11000 - Supremo Tribunal Federal' },
          { value: '12000', text: '12000 - Justiça Federal' },
          { value: '20000', text: '20000 - Presidência' },
          { value: '25000', text: '25000 - Ministério da Economia' },
          { value: '26000', text: '26000 - Ministério do Esporte' }        ],
      agregadoresSelecionados: ['Todos'],
      agregadores: [
        {value: 'Todos', text: 'Todos'},
        {value: '504', text: '504 - Cadastro de sinistros - FUNDHAB'},
        {value: '509', text: '509 - Concessão de Empréstimos'},
        {value: '519', text: '519 - Reserva de contingência financeira'},
        {value: '520', text: '520 - Pessoal - Despesas Financeiras'}]
      }
    }
  }
</script>

<!--
<template>
    <div v-show="filtros.includes('orgao')">        
        <b-form-select multiple :select-size="4" v-model="selected" :options="orgaos" />
        <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
    </div>
</template>

<script>
export default {
    props: ['filtros'],
    data () {
        return
            orgaos: [
                {
                value: '20000',
                text: 'Presidência'
                },
                {
                value: '25000',
                text: 'Ministério da Economia'
                }
            ]
    }
}
</script>

-->