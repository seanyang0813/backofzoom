<template>
  <div class="flex flex-col flex justify-center w-1/3">
    <div class="mb-6">
      <h1>Back of Zoom</h1>
    </div>
    <div class="mb-6">
      <input v-model="name" placeholder="nickname" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
    </div>
    <div class="mb-6">
      <input v-model="id" placeholder="meeting ID or url" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      name: "",
      id: null,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
