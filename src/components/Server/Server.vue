<template>
    <div>
            <li
                    class="list-group-item"
                    style="cursor:pointer"
                    @click='viewServer(server)'
                    :class="[{stylez}, {stylezb}]"
                    @mouseover="stylez=true"
                    @mouseleave="stylez=false"
                    >
                Server #{{ server.id }}
            </li>
    </div>
</template>

<script>
import {eventBus} from '../../main'
export default{
    data: function(){
        return {
            stylez:false,
            stylezb:false
        }
    },
    props:['server'],
        methods:{
        viewServer(server){
            eventBus.$emit('serverOpen', server)
            this.stylezb = true

        }
    }
}
</script>

<style>
 
    .stylez {
        background-color: aquamarine
    }
    .stylezb {
        background-color: blue
    }

</style>