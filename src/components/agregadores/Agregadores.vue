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
        <!-- TABELA DE AGREGADORES -->
        <tabela :itens="agregadores" :campos="camposTabela" ordenador="codigo" campoSelecao="selecionado"
            @metodoAcao="editarSelecionado"  imagemBotaoAcao="./src/assets/icon_editar_20x20.png" 
            itensPorPagina="10"/>
    </div>
  </div>
</template>

<script>
import { obterTodosAgregadores } from './DadosAgregadores.js';
import Tabela from '../shared/Tabela.vue';

export default {
    components: {
        'tabela': Tabela
    },
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
        editarSelecionado(selecionado){
            this.tituloModal = 'Editando agregador';
            this.novoAgregador = {codigo:selecionado.codigo, descricao:selecionado.descricao};
            this.mostrarTelaCadastro = true;      
        }
    },
    data(){
        return {
            todosAgregadores: obterTodosAgregadores(),
            mostrarTelaCadastro: false,
            novoAgregador:{
                codigo: '',
                descricao: ''
            },
            tituloModal: 'Novo agregador',
            camposTabela: [
                    { key: 'selecao', label:'' },
                    { key: 'codigo', label: 'Código', sortable: true },
                    { key: 'descricao', label: 'Descrição', sortable: true },
                    { key: 'colunaAcao', label:''}],
            chaveBusca: ''
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
