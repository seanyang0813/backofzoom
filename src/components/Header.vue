<template>
  <div class="bg-blue-300">
    <div class="flex justify-center">
      <p>Room: {{roomNumber}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["roomNumber"],
  name: 'Room',
  data: function() {
    return {
      
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
