<template>
  <div>
      <p>Status: {{ status }}</p>
      <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
export default {
  data: function(){
      return {
          status: 'critical'
      }
  },
  methods:{
      changeStatus: function (){
          this.status = 'Normal';
      }
  }
}
</script>
