<template>
  <div>
      <server-status v-for="servers in 5"></server-status>
  </div>
</template>

<script>
import ServerStatus from './ServerStatus.vue';
export default {
    components: {
        'server-status':ServerStatus
    }
}
</script>
