<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="viewC = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="viewC = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="viewC = 'appRed'">Load Red Template</button>
                <hr>
                <keep-alive>
                <component :is="viewC"></component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function(){
           return {
            viewC:'appBlue'
           }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
