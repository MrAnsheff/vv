<template>
    <div>
        First Name: <input type="text" :value="firstName" @input="nameChanged(true, $event)"><br />
        Latst Name: <input type="text" :value="lastName" @input="nameChanged(false, $event)"><br />
    </div>
</template>

<script>
export default {
    props: ['value'],
    methods:{
        nameChanged(isOn, event){
            let name = '';
            if(isOn){
                name = event.target.value + ' ' + this.value.split(' ')[1];
            } else {
                name = this.value.split(' ')[0] + ' ' + event.target.value;
            }
            this.value = name;
            this.$emit('input', name);
        }
    },
    computed:{
        firstName(){
            return this.value.split(' ')[0];
        },
        lastName(){
            return this.value.split(' ')[1];
        }
    }
}
</script>

<style>

</style>
