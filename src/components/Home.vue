<template>
  <div class="flex flex-col flex justify-center w-1/2 md:w-1/3">
    <div class="mb-6">
      <h1 class="font-sans Roboto font-bold text-4xl text-blue-500">Back of Zoom</h1>
    </div>
    <div class="mb-6">
      <input v-model="name" placeholder="nickname" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" maxlength="20">
    </div>
    <div class="mb-6">
      <input v-model="id" placeholder="meeting ID or url" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
    </div>
    <div class="mb-6">
      <button v-on:click="join" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Join room
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      name: "",
      id: "",
    }
  },
  methods: {
    join: function () {
      let name = this.name
      let id = this.parseId()
      console.log(name)
      console.log(id)
    },
    parseId: function () {
      //first check if it's the meeting id which is all digits
      let pattern = /^\d+$/g
      let result = this.id.match(pattern)
      if (result != null) {
        return parseInt(result[0])
      }
      //check if it's a valid zoom url
      pattern = /zoom.us\/j\/(\d+)/
      result = this.id.match(pattern)
      
      if (result != null) {
        return parseInt(result[1])
      }
      return null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
