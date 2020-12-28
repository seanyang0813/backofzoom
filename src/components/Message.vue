<template>
  <div class="m-1 flex flex-col justify-center"> 
      <p class="text-blue-700 break-words">{{name}}:</p>
      <pre class="break-words whitespace-pre-wrap">{{message}}</pre>
  </div>
</template>

<script>
export default {
  props: ["name", "message"],
  name: 'App',
  data: function() {
    return {
    }
  },
  methods: {
  } 
}
</script>

<style>
</style>
