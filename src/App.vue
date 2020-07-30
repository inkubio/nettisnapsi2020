<template>
  <div id="app">
    <Background />
  </div>
</template>

<script>

import Background from "@/components/Background";

export default {
  name: 'App',
  components: {
    Background
  }
}
</script>

<style>
* {
  margin: 0;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}
</style>
