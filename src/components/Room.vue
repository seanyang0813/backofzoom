<template>
  <div class="mb-6 flex flex-row justify-center">
      <h1 class="font-sans Roboto font-bold text-4xl text-blue-500">{{room_number}}</h1>
      <p>{{username}}</p>
</div>
</template>

<script>
export default {
  props: ['username'],
  name: 'Room',
  data: function() {
    return {
      name: "",
      room_number: parseInt(this.$route.path.substring(1)),
    }
  },
  mounted() {
    if (this.username != "") {
      this.name = this.username;
    } else {
      this.$emit("setId", this.room_number)
      this.$router.push("/");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
