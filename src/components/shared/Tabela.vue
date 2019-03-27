<template>
  <div>
        <b-table id="tabelaComponent" striped hover :items="itens" small
            :per-page="perPage" :current-page="currentPage"
            :sort-by.sync="ordenador" :sort-desc.sync="sortDesc" :fields="campos">
            
            <!-- CHECKBOX para selecionar todos -->
            <template slot="HEAD_selecao">
                <b-form-checkbox v-on:change="selecionarTodosItens" :value="true" :unchecked-value="false"
                    v-model="todosSelecionado"/>
            </template>

            <!-- CHECKBOX EM CADA LINHA -->
            <template slot="selecao" slot-scope="data" >
                <b-form-checkbox :value="true" :unchecked-value="false"
                    v-model="data.item[campoSelecao]"/>
            </template>

            <!-- BOTAO PARA EXECUTAR UMA ACAO NO ITEM -->
            <template slot="colunaAcao" slot-scope="data">
              <b-img @click="$emit('metodoAcao', data.item)" :src="imagemBotaoAcao" />
            </template>

            <!-- CAMPO A SER EXIBIDO COMO DROPDOWN -->
            <template :slot="campoComoDropDown" slot-scope="data" :v-show="campoComoDropDown">
               <b-form-select v-model="data.item[campoComoDropDown]" :options="opcoesDoCampoComoDropDown" size="sm" class="mt-3" /> 
            </template>


        </b-table>
        <b-pagination
            v-show="rows > perPage"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="tabelaComponent"
            />   
  </div>
</template>

<script>
export default {
    props: {
      itens:{type: Array, required: true},//array com os itens que vão popular a tabela
      campos:{type:Array, required: true},//campos que formarão as colunas
      ordenador:{type: String},//campo que será usado para ordenar os itens da tabela
      campoSelecao:{type: String},//nome do campo boolean que será marcado como true ou false a depender da seleção do item na tabela
      metodoAcao:{type: String},//metodo a ser invocado ao clicar no botao de edicao
      itensPorPagina:{type: String},//quantidade de itens por página na tabela, padrão é 10
      imagemBotaoAcao:{type: String},//imagem que servirá de botão para executar acao no item da tabela
      campoComoDropDown:{},//campo a ser apresentado como um dropdown, nao apenas um rotulo
      opcoesDoCampoComoDropDown:{} //opcoes do campo a ser apresentado como dropdown
    },
    data () {
      return{
        currentPage: 1,
        sortDesc: false,
        todosSelecionado: false,
        campoBaseParaOrdenar: this.campoBaseParaOrdenar1
      }
    },
    computed: {
        rows(){
           return this.itens.length;
        },
        perPage(){
          return this.itensPorPagina ? this.itensPorPagina : 10;
        },
        imagemCarregada(){
          return require(this.imagemBotaoAcao);
        }
    },
    methods: {
        selecionarTodosItens(){
            if (this.todosSelecionado){
                this.itens.forEach(item => item[this.campoSelecao] = false);
            }
            else{
                this.itens.forEach(item => item[this.campoSelecao] = true);
            }
        }      
    }
}

</script>

<style>
</style>
