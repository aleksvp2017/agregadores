<template>
    <div>
        <h1 class="tituloAgregador">Associações</h1>
        <br/>

        <b-card
            title=""
            align=""
            style="background: #d9e6f2"
            border-variant="secondary"
            class="mb-2">
            <b-form-input v-model="chaveBusca" type="text" 
                placeholder="Digite código do agregador ou do órgão" />
            <b-form-select v-model="orgaoSelecionado" :options="orgaos" size="sm" class="mt-3" />
            <b-form-select v-model="agregadorSelecionado" :options="opcoesAgregadores" size="sm" class="mt-3" />
        </b-card>
        <br/>
        <br/>

        <div>
            <b-table id="tabelaAssociacoes" striped hover :items="associacoes" small
                :per-page="perPage" :current-page="currentPage"
                :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :fields="fields">
                <template slot="agregador" slot-scope="data">
                    <b-form-select v-model="data.item.agregador" :options="opcoesAgregadores" size="sm" class="mt-3" />                        
                </template>
            </b-table>
            <b-pagination
                v-show="rows > perPage"
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="tabelaAssociacoes"
                />        
        </div>


    </div>    
</template>

<script>
import { obterOpcoesOrgaos } from '../orgaos/DadosOrgaos.js';
import { obterOpcoesAgregadores } from '../agregadores/DadosAgregadores.js';
import { obterTodasAssociacoes } from '../associacoes/DadosAssociacoes.js';

export default {
    data(){
        return {
            chaveBusca: '',
            orgaoSelecionado: null,
            orgaos: obterOpcoesOrgaos(),
            agregadorSelecionado: null,
            opcoesAgregadores: obterOpcoesAgregadores(),
            //dados para tabela
            todasAssociacoes: obterTodasAssociacoes(),
            currentPage: 1,
            perPage: 10,
            sortBy: 'orgao, acao, po',
            sortDesc: false,
            fields: [
                    { key: 'orgao', label:'Órgão', sortable: true },
                    { key: 'descricaoorgao', label:'Descrição Órgão', sortable: true },
                    { key: 'uo', label:'Unidade Orçamentária', sortable: true },
                    { key: 'acao', label: 'Ação', sortable: true },
                    { key: 'po', label: 'Plano Orçamentário', sortable: true },
                    { key: 'agregador', label: 'Agregador'}]            
        }
    },
    computed: {
        associacoes(){
            var associacoesFiltradas = this.todasAssociacoes;
            if (this.orgaoSelecionado){
                let exp = new RegExp(this.orgaoSelecionado.trim(), 'i');        
                associacoesFiltradas = associacoesFiltradas.filter(associacao => exp.test(associacao.orgao));                                
            }
            if (this.agregadorSelecionado){
                let exp = new RegExp(this.agregadorSelecionado.trim(), 'i');        
                associacoesFiltradas = associacoesFiltradas.filter(associacao => exp.test(associacao.agregador));                                
            }   
            if (this.chaveBusca){
                let exp = new RegExp(this.chaveBusca.trim(), 'i'); 
                associacoesFiltradas = associacoesFiltradas.filter(associacao => 
                    exp.test(associacao.agregador) || exp.test(associacao.orgao));
            }         
            return associacoesFiltradas;
        },
        rows(){
           return this.associacoes.length;
        }

    }
}
</script>

<style>

</style>

