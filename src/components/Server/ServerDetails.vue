<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
        <p>Server info: {{ server }}</p>
        <p>Server id: {{ serverId }}</p>
        <button @click='normalize()'>Normalize</button>
    </div>

</template>

<script>
import {eventBus} from '../../main'
export default {
    data: function(){
        return {
            server: 'Choose the server',
            serverId: 'Choose the server'
        }
    },
    created(){
        eventBus.$on('serverOpen', (server) =>{
            this.server = server.status
            this.serverId = server.id
        })
    },
    methods:{
        normalize(){
            eventBus.$emit('normalize', this.serverId)
            this.server = 'Normal'
        }
    }
}
</script>

<style>

</style>
