<template>
  <router-view :username="name" :meeting="meeting" @setId="updateId" @updateName="updateName"></router-view>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
      name: "",
      meeting: ""
    }
  },
  methods: {
    updateName(name) {
      this.name = name;
    },
    updateId(id) {
      this.meeting = id.toString();
    }
  } 
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter');

html, body {
  font-family: 'Inter', sans-serif;
}
</style>
