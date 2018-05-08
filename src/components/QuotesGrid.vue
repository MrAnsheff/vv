<template>
    <div class="row">
        <new-quote v-for="(q, index) in quotes" :key="q" @click.native="deleteQuote(index)">{{ q }}</new-quote>
    </div>
</template>

<script>
import Quote from './Quote.vue'
export default {
    props: ['quotes'],
    components:{
        newQuote:Quote
    },
    methods: {
        deleteQuote(index){
            this.$emit('deleteQuote', index);
        }
    }
  
}
</script>

<style>

</style>