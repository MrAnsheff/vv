<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Name is:{{ userName }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click='resetName'>Reset Name</button>
        <button @click='resetFn()'>Reset Name</button>
    </div>
</template>

<script>
import {eventBus} from '../main'
export default {
    props:{
        userName:{
            type: String,
            required: false
        },
        resetFn: Function,
        userAge: Number
    },
    created(){
        eventBus.$on('userAgeChanged', (age) =>{
            this.userAge = age;
        })
    },
    methods:{
        resetName(){
            this.userName = "Anton"
            this.$emit('resetUserName', this.userName)
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
