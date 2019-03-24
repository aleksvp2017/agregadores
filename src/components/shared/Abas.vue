<template>
    <div>
    <b-tabs content-class="mt-3">
        <b-tab v-for="aba in abas" :title="aba.titulo" :disabled="aba.desabilitada" :active="aba.selecionada">
            <slot :name="aba.titulo">
            </slot>
        </b-tab>
    </b-tabs>
    </div>
</template>

<script>
export default {
    props: ['abas']
}

</script>

<style>
</style>
