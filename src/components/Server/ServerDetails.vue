<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Server Details are currently not updated</p>
        <p v-else>Server info: {{ server.status }} Server id: {{ server.id }}</p>
        <button @click='normalize()'>Normalize</button>
    </div>

</template>

<script>
import {eventBus} from '../../main'
export default {
    data: function(){
        return {
            server: false
        }
    },
    created(){
        eventBus.$on('serverOpen', (server) =>{
            this.server = server
        })
    },
    methods:{
        normalize(){
            this.server.status = 'Normal'
        }
    }
}
</script>

<style>

</style>
