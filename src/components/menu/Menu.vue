<template>
    <div>
        <ul>
                <li v-for="rota in routes">
                    <router-link :to="rota.path ? rota.path : '/'">{{rota.descricao}} </router-link>
                </li>
        </ul>
    </div>
</template>

<script>
import { routes } from '../../routes.js';

export default{
    data(){
        return {
            routes
        }
    }
}
</script>


<style>
</style>
