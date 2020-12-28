<template>
  <div class="mb-0 border-solid border-4 border-red w-full h-24 "> 
      <textarea @keydown.enter.exact.prevent @keyup.enter.exact="submit(message)" @keydown.enter.shift.exact="newline" v-model="message" class="h-full w-full p-3" id="chat" name="chat"/> 
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data: function() {
    return {
      message: ""
    }
  },
  methods: {
    submit() {
      if (this.message.length > 0) {
        this.$emit("enter", this.message);
        this.message = ""
      }
    },
    newline() {
      //does nothing just makes sure shift enter doesb't submit
      this.message = `${this.message}`;
    }
  }
  
}
</script>

<style>
</style>