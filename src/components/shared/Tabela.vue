<template>
  <div>
    <table>
      <tr>
        <th>Programa</th>        
        <th>UO</th>
        <th>Ação</th>
        <th>PO</th>
      </tr>
      <tr v-for="item of itens">
        <td>{{item.uo}}</td>
        <td>{{item.programa}}</td>        
        <td>{{item.acao}}</td>
        <td>{{item.po}}</td>
        <select>
          <option v-for="agregador of agregadores" :value="agregador.codigo" :label="agregador.descricao"/>
        </select>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
    props: ['agregadores', 'itens']
}

</script>

<style>
</style>
