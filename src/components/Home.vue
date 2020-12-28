<template>
  <div class="flex-col flex justify-center">
    <div class="padding">
    </div>
    <div class="mb-6 flex flex-row justify-center">
      <h1 class="font-sans Roboto font-bold text-4xl text-blue-500">Back of Zoom</h1>
    </div>
    <div class="mb-6 flex flex-row justify-center">
      <input v-model="name" placeholder="nickname" class="md:w-1/2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" maxlength="20">
    </div>
    <div class="mb-6 flex flex-row justify-center">
      <input v-model="id" @keyup.enter="join" placeholder="meeting ID or url" class="md:w-1/2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
    </div>
    <div class="mb-6 flex flex-row justify-center">
      <button v-on:click="join" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Join room
      </button>
    </div>
    <div class="mb-6 flex flex-row justify-center">
      <p v-if="!validName && validId" class="text-red-500 text-xs italic">Enter a valid username</p>
      <p v-if="!validId && validName" class="text-red-500 text-xs italic">Enter a valid meeting ID or url</p>
      <p v-if="!validId && !validName" class="text-red-500 text-xs italic">Enter a valid username and meeting ID</p>
    </div>
    
  </div>
</template>

<script>
export default {
  props: ['meeting'],
  name: 'HelloWorld',
  data: function() {
    return {
      name: "",
      id: this.meeting,
      validName: true,
      validId: true,
    }
  },
  methods: {
    join: function () {
      let name = this.name.trim()
      let id = this.parseId()
      if (name.length == 0) {
        this.name = ""
        this.validName = false;
        return
      }
      if (id == null) {
        this.id = ""
        this.validId = false;
        return
      }
      this.$emit("updateName", name)
      this.$router.push({
        path: id.toString(), 
        params: {
          "name": name,
          }
        })
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
    },
  },
  watch: {
      name: function () {
        console.log("name changed")
        if (this.name != "") {
          this.validName = true;
        }
      },
      id: function() {
        console.log("id changed")
        if (this.id != "") {
          this.validId = true;
        }  
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .padding {
    height: 30vh;
  }
</style>
