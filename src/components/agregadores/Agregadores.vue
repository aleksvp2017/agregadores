<template>
  <div>
    <div>
        <h1 class="tituloAgregador">Agregadores</h1>
        <br/>
        <b-card
            title=""
            align=""
            style="background: #d9e6f2"
            border-variant="secondary"
            class="mb-2">        
            <b-form-input v-model="chaveBusca" type="text" placeholder="Digite código ou descrição do agregador" />
        </b-card>
    </div>
    <br/>
    
    <div>
        <b-button v-b-modal.telaCadastro @click="abrirTelaCadastro">Adicionar</b-button>
        <b-button @click="excluirSelecionados">Excluir</b-button>
        <b-modal id="telaCadastro" :title="tituloModal" v-model="mostrarTelaCadastro">
            <b-form-input v-model="text1" type="text" placeholder="Código" v-model:value="novoAgregador.codigo"/>
            <b-form-input v-model="text1" type="text" placeholder="Descrição" v-model:value="novoAgregador.descricao"/>            
            <div slot="modal-footer" class="w-100">     
                <div class="float-right">
                    <b-button size="sm" variant="primary" @click="salvarAgregador">Salvar</b-button>
                    <b-button size="sm" variant="primary" @click="mostrarTelaCadastro=false">Fechar</b-button>                    
                </div>
            </div>            
        </b-modal>
    </div>

    <br/>

    <div>
        <b-table id="tabelaAgregadores" striped hover :items="agregadores" small
            :per-page="perPage" :current-page="currentPage"
            :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :fields="fields">
            <template slot="HEAD_selecao">
                <b-form-checkbox v-on:change="selecionarTodosAgregadores" :value="true" :unchecked-value="false"
                    v-model="todosSelecionado"/>
            </template>
            <template slot="selecao" slot-scope="data">
                <b-form-checkbox :value="true" :unchecked-value="false"
                    v-model="data.item.selecionado"/>
            </template>
            <template slot="edicao" slot-scope="data">
                <b-img @click="editarSelecionado(data.item)" :src="require('../../assets/icon_editar_20x20.png')" />
            </template>
        </b-table>
        <b-pagination
            v-show="rows > perPage"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="tabelaAgregadores"
            />        
    </div>
  </div>
</template>

<script>
import { obterTodosAgregadores } from './DadosAgregadores.js';

export default {
    methods: {
        abrirTelaCadastro(){
            this.tituloModal = 'Novo agregador';
            this.novoAgregador = {codigo:'', descricao:''};
            this.mostrarTelaCadastro = true;            
        },
        salvarAgregador(){
            let agregadorExistente = null;
            this.todosAgregadores.forEach(agregador => {
                if (agregador.codigo == this.novoAgregador.codigo){
                    agregadorExistente = agregador;
                }
            });
            if (!agregadorExistente){
                this.todosAgregadores.push(this.novoAgregador);            
            }
            else{
                agregadorExistente.descricao = this.novoAgregador.descricao;
                agregadorExistente.codigo = this.novoAgregador.codigo;
            }
            this.mostrarTelaCadastro = false;            
        },
        excluirSelecionados(){
            let agregadoresRestantes = [];
            this.todosAgregadores = this.todosAgregadores.forEach(agregador => {
                if (!agregador.selecionado){
                    agregadoresRestantes.push(agregador);
                }
            });
            this.todosAgregadores = agregadoresRestantes;
        },
        selecionarTodosAgregadores(){
            if (this.todosSelecionado){
                this.todosAgregadores.forEach(agregador => agregador.selecionado = false);
            }
            else{
                this.todosAgregadores.forEach(agregador => agregador.selecionado = true);
            }
        },
        editarSelecionado(selecionado){
            this.tituloModal = 'Editando agregador';
            this.novoAgregador = {codigo:selecionado.codigo, descricao:selecionado.descricao};
            this.mostrarTelaCadastro = true;      
        }
    },
    data(){
        return {
            todosAgregadores: obterTodosAgregadores(),
            todosSelecionado: false,
            mostrarTelaCadastro: false,
            novoAgregador:{
                codigo: '',
                descricao: ''
            },
            tituloModal: 'Novo agregador',
            currentPage: 1,
            perPage: 10,
            sortBy: 'codigo',
            sortDesc: false,
            fields: [
                    { key: 'selecao', label:'' },
                    { key: 'codigo', label: 'Código', sortable: true },
                    { key: 'descricao', label: 'Descrição', sortable: true },
                    { key: 'edicao', label:''}],
            chaveBusca: '',            
        }
    },
    computed: {
        agregadores(){
            if (this.chaveBusca){
                let exp = new RegExp(this.chaveBusca.trim(), 'i');        
                return this.todosAgregadores.filter(agregador => exp.test(agregador.codigo) || exp.test(agregador.descricao));                
            }
            return this.todosAgregadores;
        },
        rows(){
           return this.agregadores.length;
        }
    }
}
</script>

<style>

.tituloAgregador{
    text-align: center;
}
</style>
